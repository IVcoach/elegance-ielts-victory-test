
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface TestProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
  className?: string;
  variant?: "simple" | "fancy";
}

export function TestProgressBar({
  currentQuestion,
  totalQuestions,
  className,
  variant = "simple"
}: TestProgressBarProps) {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  
  if (variant === "fancy") {
    return (
      <div className={cn("space-y-2", className)}>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Question {currentQuestion} of {totalQuestions}</span>
          <span className="text-brand-navy font-medium">{Math.round(progressPercentage)}% Complete</span>
        </div>
        <div className="relative h-3 w-full rounded-full bg-gray-200">
          <div 
            className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-brand-blue to-purple-500 transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-2">
            {Array.from({ length: totalQuestions }).map((_, i) => (
              <div 
                key={i}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  i < currentQuestion 
                    ? "bg-white" 
                    : i === currentQuestion - 1 
                    ? "bg-white scale-125" 
                    : "bg-gray-300"
                )}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between text-xs">
          <span>Start</span>
          <span>Finish</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className={cn("space-y-2", className)}>
      <Progress value={progressPercentage} className="h-2" />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Question {currentQuestion} of {totalQuestions}</span>
        <span>{Math.round(progressPercentage)}% Complete</span>
      </div>
    </div>
  );
}
