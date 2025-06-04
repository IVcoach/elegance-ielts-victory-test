
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { TestProgressBar } from "@/components/TestProgressBar";
import { QuestionCard } from "@/components/QuestionCard";
import { toast } from "@/components/ui/use-toast";
import { TestHeader } from "@/components/test/TestHeader";
import { TestNavigation } from "@/components/test/TestNavigation";
import { testQuestions, correctAnswers } from "@/components/test/TestData";
import { useStarEffect } from "@/hooks/useStarEffect";

export function TestQuestions() {
  const navigate = useNavigate();
  const createStarEffect = useStarEffect();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});
  const [startTime] = useState(Date.now());

  const handleTelegramResources = (e: React.MouseEvent) => {
    createStarEffect(e);
    window.open("https://t.me/ieltstori", "_blank", "noopener,noreferrer");
  };

  // Handle user's answer with enhanced tracking
  const handleAnswer = (answerId: string) => {
    const currentQuestion = testQuestions[currentQuestionIndex];
    const newAnswers = [...answers, answerId];
    const newUserAnswers = { ...userAnswers, [currentQuestion.id]: answerId };
    
    setAnswers(newAnswers);
    setUserAnswers(newUserAnswers);
    
    // Save progress to localStorage for persistence
    localStorage.setItem('ielts_test_progress', JSON.stringify({
      currentQuestionIndex: currentQuestionIndex + 1,
      userAnswers: newUserAnswers,
      startTime
    }));
    
    if (currentQuestionIndex < testQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      toast({
        title: "Answer recorded ✓",
        description: `Moving to question ${currentQuestionIndex + 2} of ${testQuestions.length}`,
        duration: 2000
      });
    } else {
      // Calculate accurate score with time tracking
      let correctCount = 0;
      Object.keys(newUserAnswers).forEach(questionId => {
        if (correctAnswers[questionId] === newUserAnswers[questionId]) {
          correctCount++;
        }
      });
      
      const completionTime = Math.round((Date.now() - startTime) / 1000 / 60); // minutes
      
      toast({
        title: "Test completed! 🎉",
        description: `Completed in ${completionTime} minutes. Calculating your results...`,
        duration: 3000
      });
      
      // Clear saved progress
      localStorage.removeItem('ielts_test_progress');
      
      setTimeout(() => {
        navigate('/test', { 
          state: { 
            testCompleted: true, 
            answers: newAnswers,
            correctAnswers: correctCount,
            totalQuestions: testQuestions.length,
            completionTime
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
      
      // Update saved progress
      localStorage.setItem('ielts_test_progress', JSON.stringify({
        currentQuestionIndex: currentQuestionIndex - 1,
        userAnswers: newUserAnswers,
        startTime
      }));
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
      
      {/* Enhanced test tips */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-blue-600 font-semibold">💡 Test Tip:</span>
        </div>
        <p className="text-sm text-gray-700">
          Take your time to read each question carefully. You can always go back to previous questions.
        </p>
      </div>
    </div>
  );
}
