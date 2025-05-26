
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { TestProgressBar } from "@/components/TestProgressBar";
import { QuestionCard } from "@/components/QuestionCard";
import { toast } from "@/components/ui/use-toast";
import { TestHeader } from "@/components/test/TestHeader";
import { TestNavigation } from "@/components/test/TestNavigation";
import { testQuestions, correctAnswers } from "@/components/test/TestData";

export function TestQuestions() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});

  const handleTelegramResources = () => {
    window.open("https://t.me/ieltsvc", "_blank", "noopener,noreferrer");
  };

  // Handle user's answer
  const handleAnswer = (answerId: string) => {
    const currentQuestion = testQuestions[currentQuestionIndex];
    const newAnswers = [...answers, answerId];
    const newUserAnswers = { ...userAnswers, [currentQuestion.id]: answerId };
    
    setAnswers(newAnswers);
    setUserAnswers(newUserAnswers);
    
    if (currentQuestionIndex < testQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      toast({
        title: "Answer recorded",
        description: `Moving to question ${currentQuestionIndex + 2} of ${testQuestions.length}`,
        duration: 2000
      });
    } else {
      // Calculate accurate score
      let correctCount = 0;
      Object.keys(newUserAnswers).forEach(questionId => {
        if (correctAnswers[questionId] === newUserAnswers[questionId]) {
          correctCount++;
        }
      });
      
      toast({
        title: "Test completed!",
        description: "Calculating your results...",
        duration: 2000
      });
      
      setTimeout(() => {
        navigate('/test', { 
          state: { 
            testCompleted: true, 
            answers: newAnswers,
            correctAnswers: correctCount,
            totalQuestions: testQuestions.length
          } 
        });
      }, 1000);
    }
  };

  const goBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      // Remove the last answer
      setAnswers(answers.slice(0, -1));
      // Remove the last user answer
      const currentQuestion = testQuestions[currentQuestionIndex];
      const newUserAnswers = { ...userAnswers };
      delete newUserAnswers[currentQuestion.id];
      setUserAnswers(newUserAnswers);
    } else {
      navigate('/test');
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-8 rounded-2xl shadow-xl">
      <TestHeader onTelegramResources={handleTelegramResources} />
      
      <TestNavigation
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={testQuestions.length}
        onBack={goBack}
      />
      
      <TestProgressBar 
        currentQuestion={currentQuestionIndex + 1} 
        totalQuestions={testQuestions.length} 
        className="mb-8" 
        variant="fancy" 
      />
      
      <div className="bg-white p-2 rounded-xl shadow-lg border border-purple-100">
        <QuestionCard 
          question={testQuestions[currentQuestionIndex]} 
          onAnswer={handleAnswer} 
          isLast={currentQuestionIndex === testQuestions.length - 1} 
        />
      </div>
    </div>
  );
}
