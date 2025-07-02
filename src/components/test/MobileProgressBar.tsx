
import { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Save, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
  onSave?: () => void;
  isAutoSaving?: boolean;
  lastSaveTime?: number | null;
  className?: string;
}

export function MobileProgressBar({
  currentQuestion,
  totalQuestions,
  onSave,
  isAutoSaving,
  lastSaveTime,
  className
}: MobileProgressBarProps) {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  
  // Track elapsed time
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      setTimeElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  const formatLastSave = (timestamp: number) => {
    const now = Date.now();
    const diff = Math.floor((now - timestamp) / 1000);
    if (diff < 60) return `${diff}s ago`;
    const mins = Math.floor(diff / 60);
    return `${mins}m ago`;
  };
  
  return (
    <div className={cn(
      "sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm px-4 py-3",
      "backdrop-blur-sm bg-white/95",
      className
    )}>
      {/* Mobile-first layout */}
      <div className="space-y-3">
        {/* Top row - Progress and question info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
              {currentQuestion}/{totalQuestions}
            </span>
            <span className="text-blue-600">{Math.round(progressPercentage)}%</span>
          </div>
          
          {/* Time and save controls */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock size={12} />
              <span>{formatTime(timeElapsed)}</span>
            </div>
            
            {onSave && (
              <Button
                size="sm"
                variant="outline"
                onClick={onSave}
                disabled={isAutoSaving}
                className="h-8 px-3 text-xs touch-manipulation min-h-[44px] min-w-[44px] md:min-h-8 md:min-w-auto"
              >
                <Save size={14} className={cn(
                  "transition-all",
                  isAutoSaving && "animate-spin"
                )} />
                <span className="hidden sm:inline ml-1">Save</span>
              </Button>
            )}
          </div>
        </div>
        
        {/* Progress bar with enhanced mobile design */}
        <div className="relative">
          <Progress 
            value={progressPercentage} 
            className="h-3 bg-gray-200 rounded-full overflow-hidden"
          />
          
          {/* Question markers for larger screens */}
          <div className="hidden md:flex absolute top-0 left-0 w-full h-full items-center justify-between px-1">
            {Array.from({ length: Math.min(totalQuestions, 10) }).map((_, i) => {
              const questionNum = Math.floor((i / 9) * (totalQuestions - 1)) + 1;
              const isCompleted = questionNum <= currentQuestion;
              const isCurrent = questionNum === currentQuestion;
              
              return (
                <div
                  key={i}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    isCompleted ? "bg-white shadow-sm" : "bg-gray-300",
                    isCurrent && "scale-125 ring-2 ring-white"
                  )}
                />
              );
            })}
          </div>
        </div>
        
        {/* Save status for mobile */}
        {lastSaveTime && (
          <div className="flex items-center justify-center text-xs text-gray-500">
            <span className="bg-green-50 text-green-700 px-2 py-1 rounded-full">
              Last saved {formatLastSave(lastSaveTime)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
