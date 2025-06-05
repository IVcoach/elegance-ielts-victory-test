
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { StudyQuestions } from "@/components/StudyQuestions";
import { TestQuestions } from "@/components/TestQuestions";
import { AssessmentResults } from "@/components/AssessmentResults";
import { QuizIntro } from "@/components/test/QuizIntro";
import { TelegramBotInfo } from "@/components/TelegramBotInfo";
import { calculateResults, getMockSectionScores } from "@/utils/ieltsCalculations";
import { MessageSquare } from "lucide-react";

const Test = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(20);

  // Check if we have returned from completing a test
  const locationState = location.state as {
    testCompleted?: boolean;
    answers?: string[];
    correctAnswers?: number;
    totalQuestions?: number;
  } | null;

  // Check for practice parameter in URL
  const searchParams = new URLSearchParams(location.search);
  const shouldShowPractice = searchParams.get('practice') === 'true';

  // Effect to handle practice parameter and test completion
  useEffect(() => {
    if (shouldShowPractice) {
      setShowQuestions(true);
    }
    if (locationState?.testCompleted) {
      // Use actual correct answers from the test
      const actualCorrectAnswers = locationState.correctAnswers || 0;
      const actualTotalQuestions = locationState.totalQuestions || 20;
      setCorrectAnswers(actualCorrectAnswers);
      setTotalQuestions(actualTotalQuestions);
      setTestCompleted(true);
    }
  }, [locationState, shouldShowPractice]);

  // Handle user starting the test
  const startTest = () => {
    setTestStarted(true);
    setTestCompleted(false);
  };

  const restartTest = () => {
    setTestStarted(false);
    setTestCompleted(false);
    setCorrectAnswers(0);
    navigate('/test', {
      replace: true
    });
  };

  const showPractice = () => {
    setShowQuestions(true);
  };

  // Get results for display
  const getResults = () => {
    const results = calculateResults(correctAnswers, totalQuestions);
    return {
      ...results,
      sectionScores: getMockSectionScores(correctAnswers, totalQuestions)
    };
  };

  // Determine which content to show based on test state
  let content;
  if (showQuestions) {
    content = <StudyQuestions />;
  } else if (!testStarted) {
    content = <QuizIntro onStartTest={startTest} onShowPractice={showPractice} />;
  } else if (testCompleted) {
    const results = getResults();
    content = (
      <AssessmentResults 
        correctAnswers={correctAnswers} 
        totalQuestions={totalQuestions} 
        cefrLevel={results.cefrLevel} 
        ieltsBand={results.ieltsBand} 
        toeflScore={results.toeflScore} 
        pteScore={results.pteScore} 
        sectionScores={results.sectionScores} 
        onRestart={restartTest} 
        onPractice={showPractice} 
      />
    );
  } else {
    content = <TestQuestions />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-32 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-6">
            <TelegramBotInfo />
            <Button 
              onClick={() => setShowQuestions(!showQuestions)} 
              variant="outline" 
              className="border-2 border-blue-800 text-blue-800 hover:bg-blue-50 font-bold shadow-md transform hover:scale-105 transition-all"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              {showQuestions ? "Take Placement Test" : "Speaking & Writing Assessment"}
            </Button>
          </div>
          {content}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Test;
