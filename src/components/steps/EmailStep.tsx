'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

type EmailStepProps = {
  eventId: string;
  onNext: () => void;
  onSkip: () => void;
  setOrganizerEmail: (email: string) => void;
};

export function EmailStep({ eventId, onNext, onSkip, setOrganizerEmail }: EmailStepProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendEmail = async () => {
    if (!email.trim()) {
      setError('Please enter an email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

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
        throw new Error(data.error || 'Failed to send email');
      }

      // Store the email and show success message
      setOrganizerEmail(email.trim());
      toast.success('Email sent successfully! 📧');

      // Email sent successfully, proceed to next step
      onNext();
    } catch (err) {
      console.error('Error sending email:', err);

      // Handle different error types gracefully
      if (err instanceof Error && err.name === 'AbortError') {
        // Timeout - don't block the user, let them continue
        toast.warning('Email is taking longer than expected. You can continue and check your inbox later.');
        setError('Email sending timed out. Don\'t worry, you can find your links on the next page.');

        // Auto-skip after 2 seconds if timeout
        setTimeout(() => {
          onSkip();
        }, 2000);
      } else {
        // Other errors - show message but don't block
        const errorMessage = err instanceof Error ? err.message : 'Failed to send email';
        setError(errorMessage + '. You can skip and find your links on the next page.');
        toast.error('Email failed to send. You can still access your links on the next page.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = () => {
    onSkip();
  };

  return (
    <Card className="p-6 md:p-8 shadow-lg max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <span className="text-6xl mb-4 block">📧</span>
        <h2 className="text-2xl font-bold mb-2">One Last Step!</h2>
        <p className="text-muted-foreground">
          Save your event links by email (optional)
        </p>
      </div>

      <div className="bg-violet-50 border border-violet-200 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-2">
          <span className="text-xl">✨</span>
          <div className="text-sm">
            <p className="font-semibold text-violet-900 mb-1">Why provide your email?</p>
            <p className="text-violet-700 mb-2">
              We'll send you all your event links in one convenient email:
            </p>
            <ul className="text-violet-700 list-disc list-inside space-y-1 ml-4">
              <li>Universal join link to share with participants</li>
              <li>Individual personalized links for each participant</li>
              <li>Organizer dashboard link to manage your event</li>
            </ul>
            <p className="text-violet-600 mt-2 font-medium">
              Never lose your links again!
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <Label htmlFor="email" className="text-base font-semibold">
            Your Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            placeholder="you@example.com"
            className="mt-2 h-14 text-lg"
            disabled={isSubmitting}
          />
          {error && (
            <p className="text-sm text-red-500 mt-2">{error}</p>
          )}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">🔒 Privacy:</span> We only use your email to send event links. No spam, ever.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={handleSkip}
          disabled={isSubmitting}
          className="flex-1 h-14 text-lg"
        >
          Skip for Now
        </Button>
        <Button
          onClick={handleSendEmail}
          disabled={isSubmitting}
          className="flex-1 bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600 text-white font-semibold h-14 text-lg"
        >
          {isSubmitting ? 'Sending...' : 'Send Email →'}
        </Button>
      </div>

      <p className="text-xs text-center text-muted-foreground mt-4">
        You can still access your links on the next page even if you skip this step
      </p>
    </Card>
  );
}
