'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
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
  onEventCreated: () => void;
  organizerEmail: string;
  setParticipantsWithTokens?: (participants: ParticipantWithToken[]) => void;
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
  onEventCreated,
  setParticipantsWithTokens,
}: PublishStepProps) {
  const [isCreating, setIsCreating] = useState(false);

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

      // Store participants with tokens to pass to parent
      if (setParticipantsWithTokens) {
        setParticipantsWithTokens(insertedParticipants as any); // eslint-disable-line @typescript-eslint/no-explicit-any
      }

      setEventId(newEventId);
      toast.success('Event created successfully! 🎉');

      // Auto-advance to email step
      onEventCreated();
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
    if (!eventId) {
      createEvent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
