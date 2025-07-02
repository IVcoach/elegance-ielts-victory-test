
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Home, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileTestNavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  onHome: () => void;
  canGoBack: boolean;
  canGoForward: boolean;
  className?: string;
}

export function MobileTestNavigation({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
  onHome,
  canGoBack,
  canGoForward,
  className
}: MobileTestNavigationProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Swipe detection
  const minSwipeDistance = 50;
  
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && canGoForward) {
      onNext();
    }
    if (isRightSwipe && canGoBack) {
      onPrevious();
    }
  };
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && canGoBack) {
        onPrevious();
      } else if (e.key === 'ArrowRight' && canGoForward) {
        onNext();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [canGoBack, canGoForward, onPrevious, onNext]);
  
  return (
    <div 
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50",
        "safe-area-padding-bottom", // For iOS devices
        className
      )}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="flex items-center justify-between px-4 py-3">
        {/* Home button */}
        <Button
          variant="outline"
          size="lg"
          onClick={onHome}
          className="min-h-[48px] min-w-[48px] touch-manipulation flex items-center gap-2"
        >
          <Home size={20} />
          <span className="hidden sm:inline">Home</span>
        </Button>
        
        {/* Center - Question indicator with dots */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(totalQuestions, 5) }).map((_, i) => {
              const questionIndex = Math.floor((i / 4) * (totalQuestions - 1));
              const isActive = Math.abs(questionIndex - (currentQuestion - 1)) <= 2;
              
              return (
                <div
                  key={i}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    isActive ? "bg-blue-600" : "bg-gray-300",
                    questionIndex === currentQuestion - 1 && "scale-150 bg-blue-800"
                  )}
                />
              );
            })}
            
            {totalQuestions > 5 && (
              <MoreHorizontal size={16} className="text-gray-400 ml-1" />
            )}
          </div>
          
          <span className="text-sm font-medium text-gray-600 ml-2">
            {currentQuestion} / {totalQuestions}
          </span>
        </div>
        
        {/* Navigation buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="lg"
            onClick={onPrevious}
            disabled={!canGoBack}
            className="min-h-[48px] min-w-[48px] touch-manipulation"
          >
            <ArrowLeft size={20} />
            <span className="sr-only">Previous</span>
          </Button>
          
          <Button
            size="lg"
            onClick={onNext}
            disabled={!canGoForward}
            className="min-h-[48px] min-w-[48px] touch-manipulation bg-blue-600 hover:bg-blue-700"
          >
            <ArrowRight size={20} />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
      
      {/* Swipe hint for first-time users */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2">
        <div className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full opacity-0 animate-fade-in">
          Swipe left/right to navigate
        </div>
      </div>
    </div>
  );
}
