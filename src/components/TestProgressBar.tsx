
import { cn } from "@/lib/utils";

interface TestProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
  className?: string;
  variant?: "default" | "fancy";
}

export function TestProgressBar({ 
  currentQuestion, 
  totalQuestions,
  className,
  variant = "default"
}: TestProgressBarProps) {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  
  if (variant === "fancy") {
    return (
      <div className={cn("w-full", className)}>
        <div className="flex justify-between text-sm text-muted-foreground mb-1">
          <span>سوال {currentQuestion} از {totalQuestions}</span>
          <span>تکمیل شده {Math.round(progressPercentage)}%</span>
        </div>
        
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 via-brand-blue to-purple-400 transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    );
  }
  
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
