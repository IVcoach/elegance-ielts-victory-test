
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  type: "multiple-choice" | "fill-in-blank" | "listening" | "reading";
  text: string;
  options?: Option[];
  audioUrl?: string;
  readingPassage?: string;
  difficulty: "A0" | "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
}

interface QuestionCardProps {
  question: Question;
  onAnswer: (answerId: string) => void;
  isLast: boolean;
  className?: string;
}

export function QuestionCard({ 
  question, 
  onAnswer,
  isLast,
  className
}: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  
  const handleSubmit = () => {
    if (question.type === "multiple-choice" && selectedOption) {
      onAnswer(selectedOption);
      setSelectedOption(null); // Reset for next question
    } else if (question.type === "fill-in-blank" && inputValue) {
      onAnswer(inputValue);
      setInputValue(""); // Reset for next question
    }
  };
  
  return (
    <Card className={cn("w-full max-w-2xl mx-auto animate-scale-in", className)}>
      <CardHeader>
        <CardTitle className="text-xl font-playfair">
          {question.text}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        {question.type === "reading" && question.readingPassage && (
          <div className="mb-6 p-4 bg-muted rounded-md">
            <p className="text-sm">{question.readingPassage}</p>
          </div>
        )}
        
        {question.type === "listening" && question.audioUrl && (
          <div className="mb-6 flex justify-center">
            <audio controls className="w-full max-w-md">
              <source src={question.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
        
        {question.type === "multiple-choice" && question.options && (
          <div className="space-y-3">
            {question.options.map((option) => (
              <div 
                key={option.id}
                className={cn(
                  "border rounded-md p-3 cursor-pointer transition-all hover:border-brand-blue",
                  selectedOption === option.id ? "border-brand-blue bg-brand-blue bg-opacity-10" : ""
                )}
                onClick={() => setSelectedOption(option.id)}
              >
                {option.text}
              </div>
            ))}
          </div>
        )}
        
        {question.type === "fill-in-blank" && (
          <div className="mt-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handleSubmit}
          disabled={(question.type === "multiple-choice" && !selectedOption) || 
                  (question.type === "fill-in-blank" && !inputValue)}
          className="ml-auto bg-brand-blue hover:bg-brand-navy"
        >
          {isLast ? "Finish Test" : "Next Question"}
        </Button>
      </CardFooter>
    </Card>
  );
}
