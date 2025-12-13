'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { EventDetails } from '@/app/page';

type DetailsStepProps = {
  eventDetails: EventDetails;
  setEventDetails: (details: EventDetails) => void;
  onNext: () => void;
  onBack: () => void;
};

const eventTypes = [
  'Secret Santa',
  'Christmas',
  'Hanukkah',
  'Thanksgiving',
  "New Year's Eve",
  "Valentine's Day",
  'Christmas in July',
  'Eid',
  'Kwanzaa',
  'Eid al-Adha',
  'Diwali',
  'Halloween',
  'Purim',
  "Father's Day",
  "Mother's Day",
  'Easter',
  'Other',
];

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'CNY', symbol: '¥', name: 'Chinese Yuan' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
];

export function DetailsStep({ eventDetails, setEventDetails, onNext, onBack }: DetailsStepProps) {
  const [showCustomMessage, setShowCustomMessage] = React.useState(true);
  const [selectedDateOption, setSelectedDateOption] = React.useState<string>('');
  const [showCustomDate, setShowCustomDate] = React.useState(false);
  const [selectedBudgetOption, setSelectedBudgetOption] = React.useState<string>('');
  const [showCustomBudget, setShowCustomBudget] = React.useState(false);
  const [budgetError, setBudgetError] = React.useState<string>('');

  // Set default custom message on mount
  // Set default custom message on mount
  React.useEffect(() => {
    if (!eventDetails.customMessage) {
      const groupName = eventDetails.groupName || 'Secret Santa 2025';
      const defaultMessage = `You've been invited to join ${groupName}! Make a wish list, draw a name, and let the magic begin.`;
      setEventDetails({ ...eventDetails, customMessage: defaultMessage });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateDetail = (key: keyof EventDetails, value: string | number) => {
    const updatedDetails = { ...eventDetails, [key]: value };

    // When group name changes, update the custom message accordingly
    if (key === 'groupName' && typeof value === 'string') {
      const groupName = value.trim() || 'Secret Santa 2025';
      const defaultMessage = `You've been invited to join ${groupName}! Make a wish list, draw a name, and let the magic begin.`;
      updatedDetails.customMessage = defaultMessage;
    }

    setEventDetails(updatedDetails);
  };

  const handleDateSelection = (date: string) => {
    setSelectedDateOption(date);
    if (date === 'other') {
      setShowCustomDate(true);
      updateDetail('exchangeDate', '');
    } else {
      setShowCustomDate(false);
      updateDetail('exchangeDate', date);
    }
  };

  const handleBudgetSelection = (amount: string) => {
    setSelectedBudgetOption(amount);
    setBudgetError('');
    if (amount === 'other') {
      setShowCustomBudget(true);
      updateDetail('budgetAmount', 0);
    } else {
      setShowCustomBudget(false);
      updateDetail('budgetAmount', Number(amount));
    }
  };

  const handleCustomBudgetChange = (value: string) => {
    // Only allow integers
    const numberValue = value.replace(/[^0-9]/g, '');

    if (numberValue === '') {
      updateDetail('budgetAmount', 0);
      setBudgetError('');
      return;
    }

    const amount = Number(numberValue);

    if (amount > 999) {
      setBudgetError('Maximum budget is $999');
      return;
    }

    setBudgetError('');
    updateDetail('budgetAmount', amount);
  };

  const canContinue = eventDetails.groupName.trim() && eventDetails.exchangeDate && eventDetails.budgetAmount > 0;

  return (
    <Card className="p-6 md:p-8 shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Event Details</h2>

      <div className="space-y-6">
        {/* Event Name */}
        <div>
          <Label htmlFor="groupName" className="text-base font-semibold">
            What do you want to draw names for? <span className="text-red-500">*</span>
          </Label>
          <Input
            id="groupName"
            value={eventDetails.groupName}
            onChange={(e) => updateDetail('groupName', e.target.value)}
            className="mb-2"
          />
          <div className="flex flex-wrap gap-2">
            {['Secret Santa 2025', 'Christmas 2025', 'Holiday Gift Exchange', 'New Year 2026', 'Office Secret Santa'].map((suggestion) => (
              <Button
                key={suggestion}
                variant="ghost"
                size="sm"
                onClick={() => updateDetail('groupName', suggestion)}
                className="text-xs text-violet-600 hover:text-violet-700"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>

        {/* Exchange Date */}
        <div>
          <Label className="text-base font-semibold mb-3 block">
            Gift Exchange Date <span className="text-red-500">*</span>
          </Label>
          <div className="space-y-3">
            <Button
              variant={selectedDateOption === '2025-12-20' ? 'default' : 'outline'}
              onClick={() => handleDateSelection('2025-12-20')}
              className={`w-full justify-start text-left h-auto py-4 ${selectedDateOption === '2025-12-20'
                  ? 'bg-violet-600 hover:bg-violet-700 text-white'
                  : 'hover:bg-gray-50'
                }`}
            >
              <span className="text-base font-medium">Saturday, December 20, 2025</span>
            </Button>

            <Button
              variant={selectedDateOption === '2025-12-24' ? 'default' : 'outline'}
              onClick={() => handleDateSelection('2025-12-24')}
              className={`w-full justify-start text-left h-auto py-4 ${selectedDateOption === '2025-12-24'
                  ? 'bg-violet-600 hover:bg-violet-700 text-white'
                  : 'hover:bg-gray-50'
                }`}
            >
              <span className="text-base font-medium">Wednesday, December 24, 2025</span>
            </Button>

            <Button
              variant={selectedDateOption === '2025-12-25' ? 'default' : 'outline'}
              onClick={() => handleDateSelection('2025-12-25')}
              className={`w-full justify-start text-left h-auto py-4 ${selectedDateOption === '2025-12-25'
                  ? 'bg-violet-600 hover:bg-violet-700 text-white'
                  : 'hover:bg-gray-50'
                }`}
            >
              <span className="text-base font-medium">Thursday, December 25, 2025</span>
            </Button>

            <Button
              variant={selectedDateOption === 'other' && showCustomDate ? 'default' : 'outline'}
              onClick={() => {
                setSelectedDateOption('other');
                setShowCustomDate(true);
              }}
              className={`w-full justify-start text-left h-auto py-4 ${selectedDateOption === 'other' && showCustomDate
                  ? 'bg-violet-600 hover:bg-violet-700 text-white'
                  : 'hover:bg-gray-50'
                }`}
            >
              <span className="text-base font-medium">Other</span>
            </Button>

            {showCustomDate && (
              <Input
                type="date"
                value={eventDetails.exchangeDate}
                onChange={(e) => updateDetail('exchangeDate', e.target.value)}
                className="w-full h-14"
              />
            )}
          </div>
        </div>

        {/* Budget */}
        <div>
          <Label className="text-base font-semibold mb-3 block">
            Gift Budget <span className="text-red-500">*</span>
          </Label>
          <p className="text-sm text-muted-foreground mb-3">
            Suggested spending amount per gift
          </p>
          <div className="space-y-3">
            <Button
              variant={selectedBudgetOption === '10' ? 'default' : 'outline'}
              onClick={() => handleBudgetSelection('10')}
              className={`w-full justify-start text-left h-auto py-4 ${selectedBudgetOption === '10'
                  ? 'bg-violet-600 hover:bg-violet-700 text-white'
                  : 'hover:bg-gray-50'
                }`}
            >
              <span className="text-base font-medium">$10</span>
            </Button>

            <Button
              variant={selectedBudgetOption === '20' ? 'default' : 'outline'}
              onClick={() => handleBudgetSelection('20')}
              className={`w-full justify-start text-left h-auto py-4 ${selectedBudgetOption === '20'
                  ? 'bg-violet-600 hover:bg-violet-700 text-white'
                  : 'hover:bg-gray-50'
                }`}
            >
              <span className="text-base font-medium">$20</span>
            </Button>

            <Button
              variant={selectedBudgetOption === '50' ? 'default' : 'outline'}
              onClick={() => handleBudgetSelection('50')}
              className={`w-full justify-start text-left h-auto py-4 ${selectedBudgetOption === '50'
                  ? 'bg-violet-600 hover:bg-violet-700 text-white'
                  : 'hover:bg-gray-50'
                }`}
            >
              <span className="text-base font-medium">$50</span>
            </Button>

            <Button
              variant={selectedBudgetOption === 'other' || showCustomBudget ? 'default' : 'outline'}
              onClick={() => handleBudgetSelection('other')}
              className={`w-full justify-start text-left h-auto py-4 ${selectedBudgetOption === 'other' || showCustomBudget
                  ? 'bg-violet-600 hover:bg-violet-700 text-white'
                  : 'hover:bg-gray-50'
                }`}
            >
              <span className="text-base font-medium">Other</span>
            </Button>

            {showCustomBudget && (
              <div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base">$</span>
                  <Input
                    type="text"
                    value={eventDetails.budgetAmount || ''}
                    onChange={(e) => handleCustomBudgetChange(e.target.value)}
                    placeholder="Enter amount"
                    className="pl-7 h-14"
                  />
                </div>
                {budgetError && (
                  <p className="text-sm text-red-500 mt-2">{budgetError}</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Custom Message */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Checkbox
              id="customMessage"
              checked={showCustomMessage}
              onCheckedChange={(checked) => setShowCustomMessage(checked as boolean)}
            />
            <Label htmlFor="customMessage" className="cursor-pointer">
              Add Custom Message
            </Label>
          </div>
          {showCustomMessage && (
            <textarea
              value={eventDetails.customMessage}
              onChange={(e) => updateDetail('customMessage', e.target.value)}
              placeholder="Add any special instructions or message for participants..."
              className="w-full min-h-24 p-3 border rounded-md"
            />
          )}
        </div>

        {/* Info Box */}
        <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <span className="text-xl">✨</span>
            <div className="text-sm">
              <p className="font-semibold text-violet-900 mb-1">What participants will provide:</p>
              <p className="text-violet-700">
                All participants can add their gift preferences to help their Secret Santa choose the perfect gift!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <Button variant="outline" onClick={onBack} className="flex-1">
          ← Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!canContinue}
          className="flex-1 bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600 text-white font-semibold"
        >
          Continue →
        </Button>
      </div>
    </Card>
  );
}
