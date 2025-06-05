
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertCircle, Send } from "lucide-react";

interface WritingAssessmentProps {
  writingAnswer: string;
  writingProgress: number;
  onWritingChange: (text: string) => void;
}

export function WritingAssessment({ 
  writingAnswer, 
  writingProgress, 
  onWritingChange 
}: WritingAssessmentProps) {
  return (
    <Card className="border-2 border-purple-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
        <CardTitle className="text-2xl text-purple-900 flex items-center gap-3">
          <Send className="h-6 w-6" />
          Writing Assessment
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6">
          <h3 className="font-bold text-purple-900 mb-3">Writing Task 2 (40 minutes)</h3>
          <p className="text-purple-800 font-medium mb-4">
            You should spend about 40 minutes on this task. Write about 250 words.
          </p>
          <div className="bg-white p-4 rounded border border-purple-300">
            <p className="text-purple-900 font-medium mb-3">Question:</p>
            <p className="text-purple-800 leading-relaxed">
              Many students preparing for the IELTS exam work with a teacher or mentor to help them improve. Other students prefer to study by themselves. 
            </p>
            <p className="text-purple-800 font-medium mt-3">
              Discuss the good points and bad points of using a mentor to prepare for IELTS. Give reasons for your answer and include examples from your experience or knowledge.
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <Textarea 
            placeholder="Write your essay here... (aim for 250+ words)" 
            className="min-h-[300px] text-base leading-relaxed" 
            value={writingAnswer} 
            onChange={e => onWritingChange(e.target.value)} 
          />
          
          <div className="flex justify-between items-center text-sm">
            <span>Word count: {writingAnswer.split(/\s+/).filter(word => word.length > 0).length} words</span>
            <span>Target: 250+ words</span>
          </div>
          
          {writingProgress > 0 && (
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Completion Status</span>
                <span>{writingProgress}%</span>
              </div>
              <Progress value={writingProgress} className="h-3" />
              
              {writingProgress < 60 && (
                <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-center text-amber-700">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">IELTS essays typically require 250+ words. Consider expanding your response.</span>
                  </div>
                </div>
              )}
              
              {writingProgress >= 100 && (
                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center text-green-700">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Excellent! Your response meets the word count requirement.</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
