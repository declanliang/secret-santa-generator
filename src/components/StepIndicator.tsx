import { cn } from '@/lib/utils';

const steps = [
  { number: 1, label: 'Participants' },
  { number: 2, label: 'Restrictions' },
  { number: 3, label: 'Details' },
  { number: 4, label: 'Publish' },
];

type StepIndicatorProps = {
  currentStep: number;
  skipRestrictions: boolean;
};

export function StepIndicator({ currentStep, skipRestrictions }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-4 px-4">
      {steps.map((step, index) => {
        const isActive = currentStep === step.number;
        const isCompleted = currentStep > step.number;
        const showLine = index < steps.length - 1;

        return (
          <div key={step.number} className="flex items-center">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300',
                  isActive && 'bg-gradient-to-br from-violet-600 to-violet-500 text-white shadow-lg scale-110',
                  isCompleted && 'bg-violet-200 text-violet-700',
                  !isActive && !isCompleted && 'bg-gray-200 text-gray-500'
                )}
              >
                {step.number}
              </div>
              <span
                className={cn(
                  'mt-2 text-sm font-medium transition-colors',
                  isActive && 'text-violet-600',
                  isCompleted && 'text-violet-500',
                  !isActive && !isCompleted && 'text-gray-500'
                )}
              >
                {step.label}
              </span>
            </div>

            {/* Connecting Line */}
            {showLine && (
              <div
                className={cn(
                  'h-1 w-16 md:w-32 mx-2 transition-all duration-300 mb-8',
                  isCompleted
                    ? 'bg-gradient-to-r from-violet-400 to-violet-300'
                    : 'bg-gray-200'
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
