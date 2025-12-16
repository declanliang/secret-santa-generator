'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, Eye, Gift, Mail } from 'lucide-react';
import { toast } from 'sonner';
import type { Participant } from '@/app/[locale]/page';

type SuccessStepProps = {
  eventId: string;
  participants: Participant[];
  participantsWithTokens: Array<{ id: string; name: string; token: string }>;
  organizerEmail: string;
};

export function SuccessStep({
  eventId,
  participants,
  participantsWithTokens,
  organizerEmail,
}: SuccessStepProps) {
  const [copiedLink, setCopiedLink] = useState('');
  const [activeTab, setActiveTab] = useState<'universal' | 'personalized'>('universal');
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState('');

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
      // Add timeout to prevent long waits (10 seconds)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch('/api/send-organizer-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId,
          email: email.trim(),
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.json();

      if (!response.ok) {
        // Handle rate limiting specifically
        if (response.status === 429) {
          toast.warning(data.error);
          return;
        }
        throw new Error(data.error || 'Failed to send email');
      }

      setEmailSent(true);
      toast.success('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);

      // Handle timeout gracefully
      if (error instanceof Error && error.name === 'AbortError') {
        toast.warning('Email is taking longer than expected. Please check your inbox in a few minutes.');
      } else {
        // Show error but don't block the user
        const errorMsg = error instanceof Error ? error.message : 'Failed to send email';
        toast.error(errorMsg + ' Don\'t worry, you already have your links above!');
      }
    } finally {
      setIsSendingEmail(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 text-center">
        <Badge className="bg-green-500 mb-2">Event Created Successfully</Badge>
        <h2 className="text-3xl font-bold mb-2">Your Secret Santa is Ready!</h2>
      </div>

      <Card className="p-6 bg-violet-50 border-violet-200">
        <div className="flex items-start gap-3">
          <Gift className="w-6 h-6 text-violet-600 mt-1" />
          <div>
            <h3 className="font-semibold text-lg mb-2 text-violet-900">How it works</h3>
            <ol className="space-y-2 text-sm text-violet-700">
              <li>1. Choose your sharing method below (universal shared link or personalized links)</li>
              <li>2. Send the links to your {participants.length} participants via WhatsApp, email, or copy/paste</li>
              <li>3. Each person clicks their link to reveal who they are buying a gift for</li>
            </ol>
          </div>
        </div>
      </Card>

      <Card className="p-6 md:p-8 shadow-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          Share Your Invitations
        </h3>
        <p className="text-muted-foreground mb-6">Choose how to distribute links to your participants</p>

        <div className="flex gap-2 mb-6 border-b">
          <button
            onClick={() => setActiveTab('universal')}
            className={`flex-1 px-6 py-3 font-semibold text-base transition-colors border-b-2 justify-center ${
              activeTab === 'universal'
                ? 'border-violet-600 text-violet-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Universal Shared Link
          </button>
          <button
            onClick={() => setActiveTab('personalized')}
            className={`flex-1 px-6 py-3 font-semibold text-base transition-colors border-b-2 justify-center ${
              activeTab === 'personalized'
                ? 'border-violet-600 text-violet-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Personalized Links
          </button>
        </div>

        <div>
          {activeTab === 'universal' ? (
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
                  <strong>Best for group chats</strong> - Share this one link, and everyone clicks it, selects their name, and instantly sees who they got. Quick and easy!
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-600">More Secure</Badge>
                <p className="text-sm text-muted-foreground">
                  Each participant gets their own unique link. More secure and prevents others from seeing who is not participating.
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
                  <strong>Best for direct messaging</strong> - Each link is unique and automatically shows the person who they got. No name selection needed!
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="border-t mt-6 pt-6">
          <h4 className="font-semibold text-lg mb-3">Organizer View</h4>
          <p className="text-sm text-muted-foreground mb-3">
            View all pairings to keep track of who is buying for whom (keep this secret!)
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

      {!organizerEmail && !emailSent && (
        <Card className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200">
          <div className="flex items-start gap-4">
            <Mail className="w-8 h-8 text-violet-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-violet-900 mb-2">Save Your Links via Email</h3>
              <p className="text-sm text-violet-700 mb-4">
                Get all your event links sent to your email for safekeeping. We will send you the universal link, personalized links for each participant, and your organizer dashboard link.
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
              </div>
              <p className="text-xs text-violet-600 mt-2">
                We only use your email to send event links. No spam, ever.
              </p>
            </div>
          </div>
        </Card>
      )}

      {emailSent && (
        <Card className="p-4 bg-green-50 border-green-200">
          <div className="flex items-center gap-2 text-green-700">
            <Check className="w-5 h-5" />
            <p className="font-medium">Email sent successfully! Check your inbox for all your event links.</p>
          </div>
        </Card>
      )}

      <Card className="p-6 text-center bg-gradient-to-br from-violet-50 to-pink-50">
        <h3 className="font-semibold text-lg mb-2">All set!</h3>
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
