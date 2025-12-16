'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Edit, X } from 'lucide-react';
import type { Participant, Restriction } from '@/app/[locale]/page';

type RestrictionsStepProps = {
  participants: Participant[];
  restrictions: Restriction[];
  setRestrictions: (restrictions: Restriction[]) => void;
  skipRestrictions: boolean;
  setSkipRestrictions: (skip: boolean) => void;
  onNext: () => void;
  onBack: () => void;
};

export function RestrictionsStep({
  participants,
  restrictions,
  setRestrictions,
  skipRestrictions,
  setSkipRestrictions,
  onNext,
  onBack,
}: RestrictionsStepProps) {
  const [editingParticipant, setEditingParticipant] = useState<string | null>(null);

  const getRestrictionForParticipant = (participantId: string) => {
    return restrictions.find((r) => r.participantId === participantId);
  };

  const toggleRestriction = (participantId: string, cannotDrawId: string) => {
    const existingRestriction = getRestrictionForParticipant(participantId);
    const isCurrentlyRestricted = existingRestriction?.cannotDrawIds.includes(cannotDrawId);

    let newRestrictions = [...restrictions];

    // Update the primary restriction (A cannot draw B)
    if (existingRestriction) {
      const cannotDrawIds = isCurrentlyRestricted
        ? existingRestriction.cannotDrawIds.filter((id) => id !== cannotDrawId)
        : [...existingRestriction.cannotDrawIds, cannotDrawId];

      newRestrictions = newRestrictions.map((r) =>
        r.participantId === participantId ? { ...r, cannotDrawIds } : r
      );
    } else {
      newRestrictions.push({ participantId, cannotDrawIds: [cannotDrawId] });
    }

    // Apply bidirectional restriction (B cannot draw A)
    const reverseRestriction = newRestrictions.find((r) => r.participantId === cannotDrawId);

    if (!isCurrentlyRestricted) {
      // Adding restriction: also add reverse
      if (reverseRestriction) {
        if (!reverseRestriction.cannotDrawIds.includes(participantId)) {
          newRestrictions = newRestrictions.map((r) =>
            r.participantId === cannotDrawId
              ? { ...r, cannotDrawIds: [...r.cannotDrawIds, participantId] }
              : r
          );
        }
      } else {
        newRestrictions.push({ participantId: cannotDrawId, cannotDrawIds: [participantId] });
      }
    } else {
      // Removing restriction: also remove reverse
      if (reverseRestriction) {
        newRestrictions = newRestrictions.map((r) =>
          r.participantId === cannotDrawId
            ? { ...r, cannotDrawIds: r.cannotDrawIds.filter((id) => id !== participantId) }
            : r
        );
      }
    }

    setRestrictions(newRestrictions);
  };

  const clearRestrictions = (participantId: string) => {
    const restriction = getRestrictionForParticipant(participantId);
    if (!restriction) return;

    let newRestrictions = [...restrictions];

    // Remove all restrictions from this participant
    newRestrictions = newRestrictions.map((r) =>
      r.participantId === participantId ? { ...r, cannotDrawIds: [] } : r
    );

    // Also remove this participant from others' restrictions (bidirectional cleanup)
    restriction.cannotDrawIds.forEach((cannotDrawId) => {
      newRestrictions = newRestrictions.map((r) =>
        r.participantId === cannotDrawId
          ? { ...r, cannotDrawIds: r.cannotDrawIds.filter((id) => id !== participantId) }
          : r
      );
    });

    setRestrictions(newRestrictions);
  };

  return (
    <Card className="p-6 md:p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Set Draw Restrictions (Optional)</h2>
      <p className="text-muted-foreground mb-6">
        Prevent certain people from drawing each other (e.g., couples, roommates, or people who
        already know what to get each other).
      </p>

      <RadioGroup
        value={skipRestrictions ? 'skip' : 'set'}
        onValueChange={(value) => setSkipRestrictions(value === 'skip')}
        className="space-y-4 mb-6"
      >
        <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-violet-200 bg-violet-50">
          <RadioGroupItem value="set" id="set" />
          <Label htmlFor="set" className="cursor-pointer font-medium">
            Yes, I want to set draw restrictions
          </Label>
        </div>
        <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-gray-200">
          <RadioGroupItem value="skip" id="skip" />
          <Label htmlFor="skip" className="cursor-pointer font-medium">
            No, skip this step
          </Label>
        </div>
      </RadioGroup>

      {!skipRestrictions && (
        <div className="space-y-4 mt-6">
          <h3 className="font-semibold text-lg">Select participants to set restrictions:</h3>

          {/* Bidirectional Restriction Notice */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-blue-900 mb-1">Note: Bidirectional Restrictions</p>
                <p className="text-sm text-blue-800">
                  All restrictions are <strong>two-way</strong>. If Tom can't draw Kevin, then Kevin also can't draw Tom. Adding or removing a restriction affects both participants.
                </p>
              </div>
            </div>
          </div>

          {participants.map((participant) => {
            const restriction = getRestrictionForParticipant(participant.id);
            const restrictionCount = restriction?.cannotDrawIds.length || 0;
            const isEditing = editingParticipant === participant.id;

            return (
              <div key={participant.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center font-semibold text-violet-600">
                      {participant.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-medium">{participant.name}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditingParticipant(isEditing ? null : participant.id)}
                    className="text-violet-600"
                  >
                    {restrictionCount > 0 ? (
                      <Badge variant="secondary" className="mr-2">
                        {restrictionCount} {restrictionCount === 1 ? 'restriction' : 'restrictions'}
                      </Badge>
                    ) : (
                      <span className="mr-2 text-sm">No Restrictions</span>
                    )}
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>

                {isEditing && (
                  <div className="mt-4 pl-4 space-y-2">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm text-muted-foreground">
                        {participant.name} cannot draw:
                      </p>
                      {restrictionCount > 0 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => clearRestrictions(participant.id)}
                          className="text-red-500 hover:text-red-700 h-8 px-2"
                        >
                          <X className="w-4 h-4 mr-1" />
                          Clear
                        </Button>
                      )}
                    </div>
                    {participants
                      .filter((p) => p.id !== participant.id)
                      .map((otherParticipant) => {
                        const isRestricted = restriction?.cannotDrawIds.includes(otherParticipant.id) || false;
                        return (
                          <div key={otherParticipant.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={`${participant.id}-${otherParticipant.id}`}
                              checked={isRestricted}
                              onCheckedChange={() => toggleRestriction(participant.id, otherParticipant.id)}
                            />
                            <Label
                              htmlFor={`${participant.id}-${otherParticipant.id}`}
                              className="cursor-pointer"
                            >
                              {otherParticipant.name}
                            </Label>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      <div className="flex gap-4 mt-6">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex-1"
        >
          ← Back
        </Button>
        <Button
          onClick={onNext}
          className="flex-1 bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600 text-white font-semibold"
        >
          Continue →
        </Button>
      </div>
    </Card>
  );
}
