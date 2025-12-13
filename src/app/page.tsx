'use client';

import { useState } from 'react';
import { StepIndicator } from '@/components/StepIndicator';
import { ParticipantsStep } from '@/components/steps/ParticipantsStep';
import { RestrictionsStep } from '@/components/steps/RestrictionsStep';
import { DetailsStep } from '@/components/steps/DetailsStep';
import { EmailStep } from '@/components/steps/EmailStep';
import { PublishStep } from '@/components/steps/PublishStep';
import { SuccessStep } from '@/components/steps/SuccessStep';
import { Snowflakes } from '@/components/Snowflakes';

export type Participant = {
  id: string;
  name: string;
};

export type Restriction = {
  participantId: string;
  cannotDrawIds: string[];
};

export type EventDetails = {
  eventType: string;
  organizerName: string;
  groupName: string;
  exchangeDate: string;
  budgetAmount: number;
  budgetCurrency: string;
  customMessage: string;
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [restrictions, setRestrictions] = useState<Restriction[]>([]);
  const [skipRestrictions, setSkipRestrictions] = useState(true);
  const [eventDetails, setEventDetails] = useState<EventDetails>({
    eventType: 'Secret Santa',
    organizerName: '',
    groupName: 'Secret Santa 2025',
    exchangeDate: '',
    budgetAmount: 0,
    budgetCurrency: 'USD',
    customMessage: '',
  });
  const [eventId, setEventId] = useState<string>('');
  const [organizerEmail, setOrganizerEmail] = useState<string>('');
  const [participantsWithTokens, setParticipantsWithTokens] = useState<Array<{ id: string; name: string; token: string }>>([]);

  const handleNext = () => {
    if (currentStep === 2 && skipRestrictions) {
      setCurrentStep(3);
    } else if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep === 3 && skipRestrictions) {
      setCurrentStep(2);
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="christmas-bg relative">
      <Snowflakes />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
            Free Secret Santa Generator
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Create your gift exchange in minutes - no email required! 🎁
          </p>

          {/* Step Indicator */}
          <StepIndicator currentStep={currentStep} skipRestrictions={skipRestrictions} />

          {/* Step Content */}
          <div className="mt-8">
            {currentStep === 1 && (
              <ParticipantsStep
                participants={participants}
                setParticipants={setParticipants}
                onNext={handleNext}
                setOrganizerName={(name) => setEventDetails({...eventDetails, organizerName: name})}
              />
            )}
            {currentStep === 2 && (
              <RestrictionsStep
                participants={participants}
                restrictions={restrictions}
                setRestrictions={setRestrictions}
                skipRestrictions={skipRestrictions}
                setSkipRestrictions={setSkipRestrictions}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {currentStep === 3 && (
              <DetailsStep
                eventDetails={eventDetails}
                setEventDetails={setEventDetails}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {currentStep === 4 && (
              <PublishStep
                participants={participants}
                restrictions={restrictions}
                eventDetails={eventDetails}
                skipRestrictions={skipRestrictions}
                eventId={eventId}
                setEventId={setEventId}
                organizerEmail={organizerEmail}
                onEventCreated={handleNext}
                setParticipantsWithTokens={setParticipantsWithTokens}
              />
            )}
            {currentStep === 5 && (
              <EmailStep
                eventId={eventId}
                onNext={handleNext}
                onSkip={handleNext}
                setOrganizerEmail={setOrganizerEmail}
              />
            )}
            {currentStep === 6 && (
              <SuccessStep
                eventId={eventId}
                participants={participants}
                participantsWithTokens={participantsWithTokens}
                organizerEmail={organizerEmail}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
