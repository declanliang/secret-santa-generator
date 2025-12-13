'use client';

import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Snowflakes } from '@/components/Snowflakes';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import { Gift, Calendar, DollarSign } from 'lucide-react';

type Participant = {
  id: string;
  name: string;
  token: string;
};

type EventData = {
  group_name: string;
  organizer_name: string;
  event_type: string;
  exchange_date: string;
  budget_amount: number;
  budget_currency: string;
  custom_message: string | null;
};

export default function JoinEventPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const eventId = params.eventId as string;
  const token = searchParams.get('token');

  const [loading, setLoading] = useState(true);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [selectedParticipant, setSelectedParticipant] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [assignment, setAssignment] = useState<string>('');

  useEffect(() => {
    loadEventData();
  }, [eventId]);

  const loadEventData = async () => {
    try {
      // Load event details
      const { data: event, error: eventError } = await supabase
        .from('events')
        .select('*')
        .eq('id', eventId)
        .single();

      if (eventError) throw eventError;
      setEventData(event);

      // Load participants
      const { data: parts, error: partsError } = await supabase
        .from('participants')
        .select('*')
        .eq('event_id', eventId)
        .order('order_index');

      if (partsError) throw partsError;

      const participantsList = parts as Participant[];
      setParticipants(participantsList);

      // Auto-select participant if token is provided
      if (token && participantsList) {
        const matchingParticipant = participantsList.find((p) => p.token === token);
        if (matchingParticipant) {
          setSelectedParticipant(matchingParticipant.id);
          // Automatically show confirmation for personalized links
          setShowConfirmation(true);
        } else {
          toast.error('Invalid personalized link. Please use the correct link sent to you.');
        }
      }
    } catch (error) {
      console.error('Error loading event:', error);
      toast.error('Failed to load event. Please check the link.');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectName = () => {
    if (!selectedParticipant) {
      toast.error('Please select your name first');
      return;
    }
    setShowConfirmation(true);
  };

  const handleReveal = async () => {
    try {
      // Get assignment
      const { data: assignmentData, error: assignmentError } = await supabase
        .from('assignments')
        .select('receiver_id')
        .eq('event_id', eventId)
        .eq('giver_id', selectedParticipant)
        .single();

      if (assignmentError) throw assignmentError;

      // Get receiver name
      const receiver = participants.find((p) => p.id === assignmentData.receiver_id);
      if (receiver) {
        setAssignment(receiver.name);
        setRevealed(true);

        // Update viewed_at
        await supabase
          .from('assignments')
          .update({ viewed_at: new Date().toISOString() })
          .eq('event_id', eventId)
          .eq('giver_id', selectedParticipant);
      }
    } catch (error) {
      console.error('Error revealing assignment:', error);
      toast.error('Failed to reveal assignment. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="christmas-bg min-h-screen flex items-center justify-center">
        <Snowflakes />
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-violet-600 mx-auto mb-4" />
          <p className="text-muted-foreground">Loading event...</p>
        </div>
      </div>
    );
  }

  if (!eventData) {
    return (
      <div className="christmas-bg min-h-screen flex items-center justify-center">
        <Snowflakes />
        <Card className="p-8 text-center max-w-md">
          <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
          <p className="text-muted-foreground">
            This event doesn't exist or the link is incorrect.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="christmas-bg min-h-screen">
      <Snowflakes />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Event Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              {eventData.group_name}
            </h1>
            <p className="text-muted-foreground">
              Organized by {eventData.organizer_name}
            </p>
          </div>

          {!revealed ? (
            !showConfirmation ? (
              <Card className="p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Select Your Name to Reveal Your Secret Santa Assignment
                </h2>

                {/* Event Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-violet-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Gift className="w-5 h-5 text-violet-600" />
                    <div>
                      <p className="text-xs text-muted-foreground">Event Type</p>
                      <p className="font-semibold">{eventData.event_type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-violet-600" />
                    <div>
                      <p className="text-xs text-muted-foreground">Exchange Date</p>
                      <p className="font-semibold">
                        {new Date(eventData.exchange_date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-violet-600" />
                    <div>
                      <p className="text-xs text-muted-foreground">Budget</p>
                      <p className="font-semibold">
                        {eventData.budget_currency} {eventData.budget_amount}
                      </p>
                    </div>
                  </div>
                </div>

                {eventData.custom_message && (
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900 mb-1">Message from organizer:</p>
                    <p className="text-sm text-blue-700">{eventData.custom_message}</p>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-2">Select your name:</label>
                    <Select value={selectedParticipant} onValueChange={setSelectedParticipant}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose your name..." />
                      </SelectTrigger>
                      <SelectContent>
                        {participants.map((p) => (
                          <SelectItem key={p.id} value={p.id}>
                            {p.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    onClick={handleSelectName}
                    disabled={!selectedParticipant}
                    className="w-full bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600 text-white font-semibold py-6 text-lg"
                  >
                    Continue
                  </Button>
                </div>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Participants: {participants.map((p) => p.name).join(', ')}
                </p>
              </Card>
            ) : (
              <Card className="p-8 shadow-lg text-center">
                <div className="mb-6">
                  <div className="text-6xl mb-4">🎁</div>
                  <h2 className="text-3xl font-bold mb-4">Confirm Your Identity</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    Please confirm you are
                  </p>
                  <div className="text-3xl font-bold text-violet-600 mb-4">
                    {participants.find(p => p.id === selectedParticipant)?.name}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Once you reveal, you cannot change your selection
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={handleReveal}
                    className="w-full bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600 text-white font-semibold py-6 text-lg"
                  >
                    Yes, I'm {participants.find(p => p.id === selectedParticipant)?.name}
                  </Button>
                  <Button
                    onClick={() => setShowConfirmation(false)}
                    variant="outline"
                    className="w-full py-6"
                  >
                    Back
                  </Button>
                </div>
              </Card>
            )
          ) : (
            <Card className="p-8 shadow-lg text-center">
              <div className="mb-6">
                <div className="text-6xl mb-4">🎁</div>
                <h2 className="text-3xl font-bold mb-2">You're buying a gift for:</h2>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent my-6 break-words px-4 min-h-[120px] flex items-center justify-center">
                  {assignment}
                </div>
              </div>

              <div className="space-y-4 text-left bg-violet-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg">Remember:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Budget: {eventData.budget_currency} {eventData.budget_amount}</li>
                  <li>• Exchange Date: {new Date(eventData.exchange_date).toLocaleDateString()}</li>
                  <li>• Keep it a secret! Don't tell anyone who you got 🤫</li>
                  <li>• Bookmark this page to view your assignment anytime</li>
                </ul>
              </div>

              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-700">
                  ✓ Assignment viewed! You can close this page or bookmark it for later reference.
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
