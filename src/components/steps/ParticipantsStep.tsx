'use client';

import { useState, useCallback, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { X, Plus } from 'lucide-react';
import { nanoid } from 'nanoid';
import type { Participant } from '@/app/[locale]/page';

type ParticipantsStepProps = {
  participants: Participant[];
  setParticipants: (participants: Participant[]) => void;
  onNext: () => void;
  setOrganizerName: (name: string) => void;
};

export function ParticipantsStep({ participants, setParticipants, onNext, setOrganizerName: setOrganizerNameProp }: ParticipantsStepProps) {
  const [step, setStep] = useState<'organizer' | 'participants'>(participants.length > 0 ? 'participants' : 'organizer');
  const [organizerName, setOrganizerNameLocal] = useState('');
  const [includeOrganizer, setIncludeOrganizer] = useState(true);

  const handleOrganizerContinue = () => {
    if (!organizerName.trim()) return;

    // Pass organizer name to parent
    setOrganizerNameProp(organizerName.trim());

    if (includeOrganizer) {
      // Add organizer as first participant
      const initialParticipants = [
        { id: nanoid(), name: organizerName.trim() },
        { id: nanoid(), name: '' },
        { id: nanoid(), name: '' },
      ];
      setParticipants(initialParticipants);
    } else {
      // Just create empty slots
      const initialParticipants = [
        { id: nanoid(), name: '' },
        { id: nanoid(), name: '' },
        { id: nanoid(), name: '' },
      ];
      setParticipants(initialParticipants);
    }
    setStep('participants');
  };

  const updateParticipant = (index: number, value: string) => {
    const newParticipants = [...participants];
    newParticipants[index].name = value;
    setParticipants(newParticipants);
  };

  const removeParticipant = (index: number) => {
    // For the first 3 rows (index 0, 1, 2): only clear content, don't delete row
    if (index < 3) {
      const newParticipants = [...participants];
      newParticipants[index].name = '';
      setParticipants(newParticipants);
      return;
    }

    // For rows after the first 3: delete the entire row
    const newParticipants = participants.filter((_, i) => i !== index);
    setParticipants(newParticipants);
  };

  const addNewRow = () => {
    setParticipants([...participants, { id: nanoid(), name: '' }]);
  };

  const handleNext = () => {
    const filledParticipants = participants.filter(p => p.name.trim());
    if (filledParticipants.length >= 3) {
      // Remove empty rows before proceeding
      setParticipants(filledParticipants);
      onNext();
    }
  };

  const canContinue = participants.filter(p => p.name.trim()).length >= 3;

  // Organizer Step
  if (step === 'organizer') {
    return (
      <Card className="p-8 shadow-lg max-w-lg mx-auto">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">What's your name?</h2>
          </div>

          <Input
            value={organizerName}
            onChange={(e) => setOrganizerNameLocal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleOrganizerContinue()}
            placeholder="Enter your name"
            className="text-lg h-14 text-center"
          />

          <div className="flex items-center space-x-2 justify-center">
            <Checkbox
              id="includeOrganizer"
              checked={includeOrganizer}
              onCheckedChange={(checked) => setIncludeOrganizer(checked as boolean)}
            />
            <Label htmlFor="includeOrganizer" className="cursor-pointer text-base">
              Include me (the organizer) in the draw
            </Label>
          </div>

          <Button
            onClick={handleOrganizerContinue}
            disabled={!organizerName.trim()}
            className="w-full bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600 text-white font-semibold h-14 text-lg"
          >
            Continue →
          </Button>
        </div>
      </Card>
    );
  }

  const handleBackToOrganizer = () => {
    setStep('organizer');
    setParticipants([]);
  };

  // Participants Step
  return (
    <Card className="p-8 shadow-lg max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Who are you drawing names with?</h2>
      </div>

      <div className="space-y-3 mb-6">
        {participants.map((participant, index) => {
          // Calculate display number for placeholder
          const displayNumber = includeOrganizer ? index + 1 : index + 1;
          const isOrganizerRow = index === 0 && includeOrganizer;

          return (
            <div key={participant.id} className="relative">
              <Input
                value={participant.name}
                onChange={(e) => updateParticipant(index, e.target.value)}
                placeholder={isOrganizerRow ? organizerName : `Add Name ${displayNumber}`}
                disabled={isOrganizerRow}
                className="text-lg h-14 pr-12"
              />
              {!isOrganizerRow && (
                <button
                  onClick={() => removeParticipant(index)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          );
        })}

        {/* Add Name Button */}
        <Button
          variant="outline"
          onClick={addNewRow}
          className="w-full h-14 border-dashed text-base"
        >
          <Plus className="w-5 h-5 mr-2" /> Add name {participants.length + 1}
        </Button>
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={handleBackToOrganizer}
          className="flex-1 h-14 text-lg"
        >
          ← Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={!canContinue}
          className="flex-1 bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600 text-white font-semibold h-14 text-lg"
        >
          Continue →
        </Button>
      </div>

      {!canContinue && (
        <p className="text-sm text-center text-muted-foreground mt-3">
          Add at least {Math.max(0, 3 - participants.filter(p => p.name.trim()).length)} more {3 - participants.filter(p => p.name.trim()).length === 1 ? 'person' : 'people'} to continue
        </p>
      )}
    </Card>
  );
}
