
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface TestNavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  onBack: () => void;
}

export function TestNavigation({ currentQuestion, totalQuestions, onBack }: TestNavigationProps) {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
      <Button 
        onClick={onBack} 
        variant="outline" 
        className="flex items-center gap-1 border-purple-300 text-purple-700 hover:bg-purple-50"
      >
        <ArrowLeft size={16} />
        Back
      </Button>
      
      <div className="text-sm text-muted-foreground font-medium">
        Question {currentQuestion} of {totalQuestions}
      </div>
    </div>
  );
}
