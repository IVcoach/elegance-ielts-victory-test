
import { cn } from "@/lib/utils";

interface TestProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
  className?: string;
}

export function TestProgressBar({ 
  currentQuestion, 
  totalQuestions,
  className
}: TestProgressBarProps) {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  
  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between text-sm text-muted-foreground mb-1">
        <span>Question {currentQuestion} of {totalQuestions}</span>
        <span>{Math.round(progressPercentage)}% Complete</span>
      </div>
      
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-brand-blue to-brand-delft transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
}
