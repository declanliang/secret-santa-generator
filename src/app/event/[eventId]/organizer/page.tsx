'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Snowflakes } from '@/components/Snowflakes';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import { Eye, EyeOff, ArrowRight, Calendar, DollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Assignment = {
  giver_id: string;
  receiver_id: string;
  viewed_at: string | null;
};

type Participant = {
  id: string;
  name: string;
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

export default function OrganizerPage() {
  const params = useParams();
  const eventId = params.eventId as string;

  const [loading, setLoading] = useState(true);
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [showAssignments, setShowAssignments] = useState(false);

  useEffect(() => {
    loadData();
  }, [eventId]);

  const loadData = async () => {
    try {
      // Load event
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
      setParticipants(parts);

      // Load assignments
      const { data: assigns, error: assignsError } = await supabase
        .from('assignments')
        .select('*')
        .eq('event_id', eventId);

      if (assignsError) throw assignsError;
      setAssignments(assigns);
    } catch (error) {
      console.error('Error loading data:', error);
      toast.error('Failed to load event data');
    } finally {
      setLoading(false);
    }
  };

  const getParticipantName = (id: string) => {
    return participants.find((p) => p.id === id)?.name || 'Unknown';
  };

  const viewedCount = assignments.filter((a) => a.viewed_at).length;

  if (loading) {
    return (
      <div className="christmas-bg min-h-screen flex items-center justify-center">
        <Snowflakes />
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-violet-600 mx-auto mb-4" />
          <p className="text-muted-foreground">Loading organizer view...</p>
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="mb-2 bg-violet-600">Organizer View</Badge>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              {eventData.group_name}
            </h1>
            <p className="text-muted-foreground">
              Organized by {eventData.organizer_name}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-violet-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Participants</p>
                  <p className="text-2xl font-bold">{participants.length}</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Eye className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Viewed</p>
                  <p className="text-2xl font-bold">
                    {viewedCount} / {assignments.length}
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Exchange Date</p>
                  <p className="text-lg font-bold">
                    {new Date(eventData.exchange_date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Event Details */}
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Event Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Event Type</p>
                <p className="font-semibold">{eventData.event_type}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Budget</p>
                <p className="font-semibold">
                  {eventData.budget_currency} {eventData.budget_amount}
                </p>
              </div>
              {eventData.custom_message && (
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground mb-1">Custom Message</p>
                  <p className="text-sm p-3 bg-gray-50 rounded border">
                    {eventData.custom_message}
                  </p>
                </div>
              )}
            </div>
          </Card>

          {/* Assignments */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">All Pairings</h2>
              <Button
                variant="outline"
                onClick={() => setShowAssignments(!showAssignments)}
                className="gap-2"
              >
                {showAssignments ? (
                  <>
                    <EyeOff className="w-4 h-4" /> Hide Assignments
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" /> Show Assignments
                  </>
                )}
              </Button>
            </div>

            {!showAssignments ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed">
                <EyeOff className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-muted-foreground">
                  Click "Show Assignments" to reveal all pairings
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  (Keep this information secret from participants!)
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {assignments.map((assignment) => {
                  const giverName = getParticipantName(assignment.giver_id);
                  const receiverName = getParticipantName(assignment.receiver_id);
                  const hasViewed = !!assignment.viewed_at;

                  return (
                    <div
                      key={assignment.giver_id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center font-semibold text-violet-600">
                          {giverName.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-semibold">{giverName}</span>
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center font-semibold text-pink-600">
                          {receiverName.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-semibold">{receiverName}</span>
                      </div>
                      <Badge variant={hasViewed ? 'default' : 'secondary'} className={hasViewed ? 'bg-green-500' : ''}>
                        {hasViewed ? '✓ Viewed' : 'Not viewed'}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            )}
          </Card>

          {/* Participants List */}
          <Card className="p-6 mt-6">
            <h2 className="text-xl font-bold mb-4">Participants List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {participants.map((participant) => {
                const assignment = assignments.find((a) => a.giver_id === participant.id);
                const hasViewed = !!assignment?.viewed_at;

                return (
                  <div
                    key={participant.id}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center font-semibold text-violet-600 text-sm">
                        {participant.name.charAt(0).toUpperCase()}
                      </div>
                      <span>{participant.name}</span>
                    </div>
                    {hasViewed && (
                      <Badge className="bg-green-500 text-xs">✓</Badge>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
