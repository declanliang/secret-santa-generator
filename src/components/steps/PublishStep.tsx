'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, Eye, Gift } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import { nanoid } from 'nanoid';
import type { Participant, Restriction, EventDetails } from '@/app/page';

type PublishStepProps = {
  participants: Participant[];
  restrictions: Restriction[];
  eventDetails: EventDetails;
  skipRestrictions: boolean;
  eventId: string;
  setEventId: (id: string) => void;
};

type Assignment = {
  giverId: string;
  receiverId: string;
};

type ParticipantWithToken = {
  id: string;
  name: string;
  token: string;
};

export function PublishStep({
  participants,
  restrictions,
  eventDetails,
  skipRestrictions,
  eventId,
  setEventId,
}: PublishStepProps) {
  const [isCreating, setIsCreating] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [copiedLink, setCopiedLink] = useState('');
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [participantsWithTokens, setParticipantsWithTokens] = useState<ParticipantWithToken[]>([]);
  const [activeTab, setActiveTab] = useState<'universal' | 'personalized'>('universal');
  const [email, setEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(true);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  // Secret Santa pairing algorithm
  const generateAssignments = (): Assignment[] | null => {
    const n = participants.length;
    const maxAttempts = 1000;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const shuffled = [...participants].sort(() => Math.random() - 0.5);
      const testAssignments: Assignment[] = [];
      let valid = true;

      for (let i = 0; i < n; i++) {
        const giver = shuffled[i];
        const receiver = shuffled[(i + 1) % n];

        // Check if giver and receiver are the same
        if (giver.id === receiver.id) {
          valid = false;
          break;
        }

        // Check restrictions
        if (!skipRestrictions) {
          const restriction = restrictions.find((r) => r.participantId === giver.id);
          if (restriction?.cannotDrawIds.includes(receiver.id)) {
            valid = false;
            break;
          }
        }

        testAssignments.push({ giverId: giver.id, receiverId: receiver.id });
      }

      if (valid) {
        return testAssignments;
      }
    }

    return null;
  };

  const createEvent = async () => {
    setIsCreating(true);

    try {
      // Generate assignments
      const generatedAssignments = generateAssignments();

      if (!generatedAssignments) {
        toast.error('Could not generate valid assignments. Please adjust your restrictions.');
        setIsCreating(false);
        return;
      }

      setAssignments(generatedAssignments);

      const newEventId = nanoid(10);

      // Create event
      const { error: eventError } = await (supabase.from('events') as any).insert({ // eslint-disable-line @typescript-eslint/no-explicit-any
        id: newEventId,
        group_name: eventDetails.groupName,
        organizer_name: eventDetails.organizerName,
        event_type: eventDetails.eventType,
        exchange_date: eventDetails.exchangeDate,
        budget_amount: eventDetails.budgetAmount,
        budget_currency: eventDetails.budgetCurrency,
        custom_message: eventDetails.customMessage || null,
      });

      if (eventError) throw eventError;

      // Create participants with tokens and generated IDs
      const participantRecords = participants.map((p, index) => ({
        id: nanoid(10),
        event_id: newEventId,
        name: p.name,
        order_index: index,
        token: nanoid(16),
      }));

      const { data: insertedParticipants, error: participantsError } = await (supabase
        .from('participants') as any) // eslint-disable-line @typescript-eslint/no-explicit-any
        .insert(participantRecords)
        .select('id, name, token');

      if (participantsError) throw participantsError;
      if (!insertedParticipants) throw new Error('Failed to insert participants');

      // Create a mapping from old frontend IDs to new database IDs
      const idMapping = new Map<string, string>();
      participants.forEach((p, index) => {
        idMapping.set(p.id, (insertedParticipants as any)[index].id); // eslint-disable-line @typescript-eslint/no-explicit-any
      });

      // Create restrictions (map old IDs to new database IDs)
      if (!skipRestrictions && restrictions.length > 0) {
        const restrictionRecords = restrictions.flatMap((r) =>
          r.cannotDrawIds.map((cannotDrawId) => ({
            event_id: newEventId,
            participant_id: idMapping.get(r.participantId)!,
            cannot_draw_participant_id: idMapping.get(cannotDrawId)!,
          }))
        );

        if (restrictionRecords.length > 0) {
          const { error: restrictionsError } = await (supabase
            .from('restrictions') as any) // eslint-disable-line @typescript-eslint/no-explicit-any
            .insert(restrictionRecords);

          if (restrictionsError) throw restrictionsError;
        }
      }

      // Create assignments (map old IDs to new database IDs)
      const assignmentRecords = generatedAssignments.map((a) => ({
        event_id: newEventId,
        giver_id: idMapping.get(a.giverId)!,
        receiver_id: idMapping.get(a.receiverId)!,
      }));

      const { error: assignmentsError } = await (supabase
        .from('assignments') as any) // eslint-disable-line @typescript-eslint/no-explicit-any
        .insert(assignmentRecords);

      if (assignmentsError) throw assignmentsError;

      // Use the insertedParticipants data (already has id, name, token)
      setParticipantsWithTokens(insertedParticipants as any); // eslint-disable-line @typescript-eslint/no-explicit-any

      setEventId(newEventId);
      setIsCreated(true);
      toast.success('Event created successfully! 🎉');
    } catch (error) {
      console.error('Error creating event:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      console.error('Event details:', eventDetails);
      console.error('Participants:', participants);
      toast.error('Failed to create event. Please try again.');
    } finally {
      setIsCreating(false);
    }
  };

  useEffect(() => {
    if (!isCreated && !eventId) {
      createEvent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const universalLink = `${window.location.origin}/event/${eventId}/join`;
  const organizerLink = `${window.location.origin}/event/${eventId}/organizer`;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(label);
    toast.success('Link copied to clipboard!');
    setTimeout(() => setCopiedLink(''), 2000);
  };

  const handleSendEmail = async () => {
    if (!email.trim()) {
      toast.error('Please enter an email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSendingEmail(true);

    try {
      const response = await fetch('/api/send-organizer-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId,
          email: email.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      setEmailSent(true);
      setShowEmailInput(false);
      toast.success('Email sent successfully! 📧');
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to send email. Please try again.');
    } finally {
      setIsSendingEmail(false);
    }
  };

  if (isCreating) {
    return (
      <Card className="p-6 md:p-8 shadow-lg text-center">
        <div className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-violet-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Creating your Secret Santa...</h2>
          <p className="text-muted-foreground">
            Generating assignments and setting everything up 🎁
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Success Message */}
      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 text-center">
        <Badge className="bg-green-500 mb-2">✓ Event Created Successfully</Badge>
        <h2 className="text-3xl font-bold mb-2">Your Secret Santa is Ready! 🎁</h2>
      </div>

      {/* Email Input Section */}
      {showEmailInput && !emailSent && eventId && isCreated && (
        <Card className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200">
          <div className="flex items-start gap-4">
            <div className="text-4xl">📧</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-violet-900 mb-2">Save Your Links via Email</h3>
              <p className="text-sm text-violet-700 mb-4">
                Get all your event links sent to your email for safekeeping. We'll send you the universal link, personalized links for each participant, and your organizer dashboard link.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                  disabled={isSendingEmail}
                />
                <Button
                  onClick={handleSendEmail}
                  disabled={isSendingEmail}
                  className="bg-violet-600 hover:bg-violet-700 text-white px-6"
                >
                  {isSendingEmail ? 'Sending...' : 'Send Email'}
                </Button>
                <Button
                  onClick={() => setShowEmailInput(false)}
                  variant="outline"
                  disabled={isSendingEmail}
                >
                  Skip
                </Button>
              </div>
              <p className="text-xs text-violet-600 mt-2">
                🔒 We only use your email to send event links. No spam, ever.
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Email Sent Confirmation */}
      {emailSent && (
        <Card className="p-4 bg-green-50 border-green-200">
          <div className="flex items-center gap-2 text-green-700">
            <Check className="w-5 h-5" />
            <p className="font-medium">Email sent successfully! Check your inbox for all your event links.</p>
          </div>
        </Card>
      )}

      {/* How it works */}
      <Card className="p-6 bg-violet-50 border-violet-200">
        <div className="flex items-start gap-3">
          <Gift className="w-6 h-6 text-violet-600 mt-1" />
          <div>
            <h3 className="font-semibold text-lg mb-2 text-violet-900">How it works</h3>
            <ol className="space-y-2 text-sm text-violet-700">
              <li>1. Choose your sharing method below (universal shared link or personalized links)</li>
              <li>2. Send the links to your {participants.length} participants via WhatsApp, email, or copy/paste</li>
              <li>3. Each person clicks their link to reveal who they're buying a gift for</li>
            </ol>
          </div>
        </div>
      </Card>

      {/* Share Options */}
      <Card className="p-6 md:p-8 shadow-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          🎉 Share Your Secret Santa Invitations
        </h3>
        <p className="text-muted-foreground mb-6">Choose how to distribute links to your participants</p>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 border-b">
          <button
            onClick={() => setActiveTab('universal')}
            className={`flex-1 px-6 py-3 font-semibold text-base transition-colors border-b-2 justify-center ${activeTab === 'universal'
              ? 'border-violet-600 text-violet-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            Universal Shared Link
          </button>
          <button
            onClick={() => setActiveTab('personalized')}
            className={`flex-1 px-6 py-3 font-semibold text-base transition-colors border-b-2 justify-center ${activeTab === 'personalized'
              ? 'border-violet-600 text-violet-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            Personalized Links
          </button>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'universal' ? (
            /* Universal Link Content */
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                Perfect for WhatsApp, Slack, or Discord groups. Share this single link, and everyone claims their name.
              </p>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={universalLink}
                  readOnly
                  className="flex-1 p-3 border rounded-lg bg-gray-50 text-sm"
                />
                <Button
                  onClick={() => copyToClipboard(universalLink, 'universal')}
                  className="bg-violet-600 hover:bg-violet-700"
                >
                  {copiedLink === 'universal' ? (
                    <>
                      <Check className="w-4 h-4 mr-2" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" /> Copy
                    </>
                  )}
                </Button>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-700">
                  <strong>✓ Best for group chats</strong> - Share this one link, and everyone clicks it, selects their name, and instantly sees who they got. Quick and easy!
                </p>
              </div>
            </div>
          ) : (
            /* Personalized Links Content */
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-600">More Secure</Badge>
                <p className="text-sm text-muted-foreground">
                  Each participant gets their own unique link. More secure and prevents others from seeing who's not participating.
                </p>
              </div>
              <div className="space-y-2 max-h-96 overflow-y-auto mb-4">
                {participantsWithTokens.length === 0 && (
                  <p className="text-sm text-muted-foreground">Loading personalized links...</p>
                )}
                {participantsWithTokens.map((participant) => {
                  const personalizedLink = `${window.location.origin}/event/${eventId}/join?token=${participant.token}`;
                  return (
                    <div key={participant.id} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm mb-1">{participant.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{personalizedLink}</p>
                      </div>
                      <Button
                        onClick={() => copyToClipboard(personalizedLink, `personalized-${participant.id}`)}
                        variant="outline"
                        size="sm"
                        className="flex-shrink-0"
                      >
                        {copiedLink === `personalized-${participant.id}` ? (
                          <>
                            <Check className="w-4 h-4 mr-1" /> Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-1" /> Copy
                          </>
                        )}
                      </Button>
                    </div>
                  );
                })}
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-700">
                  <strong>✓ Best for direct messaging</strong> - Each link is unique and automatically shows the person who they got. No name selection needed!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Organizer View - Always visible */}
        <div className="border-t mt-6 pt-6">
          <h4 className="font-semibold text-lg mb-3">Organizer View</h4>
          <p className="text-sm text-muted-foreground mb-3">
            View all pairings to keep track of who's buying for whom (keep this secret!)
          </p>
          <Button
            onClick={() => window.open(organizerLink, '_blank')}
            variant="outline"
            className="w-full"
          >
            <Eye className="w-4 h-4 mr-2" /> View All Pairings (Organizer View)
          </Button>
        </div>
      </Card>

      {/* Go to Dashboard */}
      <Card className="p-6 text-center bg-gradient-to-br from-violet-50 to-pink-50">
        <h3 className="font-semibold text-lg mb-2">All set! 🎊</h3>
        <p className="text-muted-foreground mb-4">
          Your Secret Santa event has been created. Share the link and let the gift exchange begin!
        </p>
        <Button
          onClick={() => window.location.reload()}
          variant="outline"
          className="w-full md:w-auto"
        >
          Create Another Secret Santa
        </Button>
      </Card>
    </div>
  );
}
