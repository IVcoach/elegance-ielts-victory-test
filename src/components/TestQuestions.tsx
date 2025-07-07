
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { QuestionCard } from "@/components/QuestionCard";
import { toast } from "@/hooks/use-toast";
import { TestHeader } from "@/components/test/TestHeader";
import { MobileProgressBar } from "@/components/test/MobileProgressBar";
import { MobileTestNavigation } from "@/components/test/MobileTestNavigation";
import { SessionManager } from "@/components/test/SessionManager";
import { testQuestions, correctAnswers } from "@/components/test/TestData";
import { useTestProgress } from "@/hooks/useTestProgress";
import { useStarEffect } from "@/hooks/useStarEffect";
import { LiveRegion } from "@/components/accessibility/LiveRegion";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";
import { generateSessionId, validateSessionData } from "@/utils/security";

export function TestQuestions() {
  const navigate = useNavigate();
  const createStarEffect = useStarEffect();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});
  const [startTime] = useState(Date.now());
  const [showSessionManager, setShowSessionManager] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const [announceMessage, setAnnounceMessage] = useState('');
  
  const { containerRef } = useKeyboardNavigation({
    enableArrowKeys: true,
    enableEscapeKey: true,
    onEscape: () => navigate('/test')
  });
  
  const { 
    autoSave, 
    manualSave, 
    getSession, 
    isAutoSaving, 
    lastSaveTime,
    currentSessionId 
  } = useTestProgress(sessionId);

  // Auto-save every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (userAnswers && Object.keys(userAnswers).length > 0) {
        autoSave({
          currentQuestionIndex,
          userAnswers,
          totalQuestions: testQuestions.length,
          isCompleted: false
        });
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [currentQuestionIndex, userAnswers, autoSave]);

  // Load existing session on component mount
  useEffect(() => {
    const latestSessionId = localStorage.getItem('ielts_latest_session');
    if (latestSessionId) {
      const session = getSession(latestSessionId);
      if (session && !session.isCompleted && validateSessionData(session)) {
        setSessionId(latestSessionId);
        setCurrentQuestionIndex(session.currentQuestionIndex);
        setUserAnswers(session.userAnswers);
        // Reconstruct answers array from userAnswers
        const reconstructedAnswers: string[] = [];
        for (let i = 0; i < session.currentQuestionIndex; i++) {
          const questionId = testQuestions[i]?.id;
          if (questionId && session.userAnswers[questionId]) {
            reconstructedAnswers.push(session.userAnswers[questionId]);
          }
        }
        setAnswers(reconstructedAnswers);
        setAnnounceMessage(`Resumed test at question ${session.currentQuestionIndex + 1} of ${testQuestions.length}`);
      }
    }
  }, [getSession]);

  const handleResourcesClick = () => {
    toast({
      title: "Focus on your assessment! 🎯",
      description: "Complete your test first, then explore our comprehensive resources.",
      duration: 3000
    });
  };

  // Handle user's answer with enhanced saving and effects
  const handleAnswer = (answerId: string) => {
    const currentQuestion = testQuestions[currentQuestionIndex];
    const newAnswers = [...answers, answerId];
    const newUserAnswers = { ...userAnswers, [currentQuestion.id]: answerId };
    
    setAnswers(newAnswers);
    setUserAnswers(newUserAnswers);
    
    // Create star effect for correct answers
    createStarEffect();
    
    // Auto-save immediately after answer
    autoSave({
      currentQuestionIndex: currentQuestionIndex + 1,
      userAnswers: newUserAnswers,
      totalQuestions: testQuestions.length,
      isCompleted: currentQuestionIndex >= testQuestions.length - 1
    });
    
    if (currentQuestionIndex < testQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnnounceMessage(`Great! Moving to question ${currentQuestionIndex + 2} of ${testQuestions.length}`);
      toast({
        title: "Excellent! ✨",
        description: `Question ${currentQuestionIndex + 1} completed. Moving to question ${currentQuestionIndex + 2}`,
        duration: 2000
      });
    } else {
      // Calculate final score and complete test
      let correctCount = 0;
      Object.keys(newUserAnswers).forEach(questionId => {
        if (correctAnswers[questionId] === newUserAnswers[questionId]) {
          correctCount++;
        }
      });
      
      const completionTime = Math.round((Date.now() - startTime) / 1000 / 60);
      
      // Mark session as completed
      autoSave({
        currentQuestionIndex: currentQuestionIndex + 1,
        userAnswers: newUserAnswers,
        totalQuestions: testQuestions.length,
        isCompleted: true
      });
      
      setAnnounceMessage(`Congratulations! Test completed with ${correctCount} correct answers out of ${testQuestions.length}!`);
      toast({
        title: "🎉 Assessment Completed!",
        description: `Amazing work! Completed in ${completionTime} minutes. Calculating your IELTS band score...`,
        duration: 4000
      });
      
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

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      const newIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(newIndex);
      
      const newAnswers = answers.slice(0, -1);
      const currentQuestion = testQuestions[currentQuestionIndex];
      const newUserAnswers = { ...userAnswers };
      delete newUserAnswers[currentQuestion.id];
      
      setAnswers(newAnswers);
      setUserAnswers(newUserAnswers);
      setAnnounceMessage(`Moved to previous question ${newIndex + 1} of ${testQuestions.length}`);
      
      autoSave({
        currentQuestionIndex: newIndex,
        userAnswers: newUserAnswers,
        totalQuestions: testQuestions.length,
        isCompleted: false
      });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < testQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnnounceMessage(`Moved to next question ${currentQuestionIndex + 2} of ${testQuestions.length}`);
    }
  };

  const handleHome = () => {
    navigate('/test');
  };

  const handleManualSave = () => {
    manualSave({
      currentQuestionIndex,
      userAnswers,
      totalQuestions: testQuestions.length,
      isCompleted: false
    });
    setAnnounceMessage('Progress saved successfully');
  };

  const handleResumeSession = (resumeSessionId: string) => {
    const session = getSession(resumeSessionId);
    if (session && validateSessionData(session)) {
      setSessionId(resumeSessionId);
      setCurrentQuestionIndex(session.currentQuestionIndex);
      setUserAnswers(session.userAnswers);
      setAnswers(Object.values(session.userAnswers));
      setShowSessionManager(false);
      setAnnounceMessage(`Session resumed at question ${session.currentQuestionIndex + 1}`);
    }
  };

  const handleStartNewSession = () => {
    const newSessionId = generateSessionId();
    setSessionId(newSessionId);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setAnswers([]);
    setShowSessionManager(false);
    setAnnounceMessage('New test session started');
  };

  // Show session manager if no active session
  if (showSessionManager || (!sessionId && currentQuestionIndex === 0 && Object.keys(userAnswers).length === 0)) {
    return (
      <div className="space-y-8 max-w-4xl mx-auto bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-8 rounded-2xl shadow-xl min-h-screen">
        <TestHeader onTelegramResources={handleResourcesClick} />
        <SessionManager 
          onResumeSession={handleResumeSession}
          onStartNewSession={handleStartNewSession}
        />
        <LiveRegion message={announceMessage} />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      role="main"
      aria-label="IELTS Test Interface"
    >
      {/* Floating motivational elements */}
      <div className="absolute top-10 left-10 animate-pulse opacity-20">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse opacity-20 delay-1000">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
      </div>
      
      <LiveRegion message={announceMessage} priority="polite" />
      
      {/* Mobile Progress Bar - Enhanced */}
      <MobileProgressBar
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={testQuestions.length}
        onSave={handleManualSave}
        isAutoSaving={isAutoSaving}
        lastSaveTime={lastSaveTime}
      />
      
      {/* Main Content with enhanced styling */}
      <div id="main-content" className="pt-4 pb-24 px-4 space-y-6 max-w-4xl mx-auto">
        <TestHeader onTelegramResources={handleResourcesClick} />
        
        {/* Enhanced Question Card */}
        <div 
          className="bg-white rounded-xl shadow-xl border-2 border-purple-200 min-h-[500px] transform hover:scale-[1.02] transition-all duration-300"
          role="region"
          aria-label={`Question ${currentQuestionIndex + 1} of ${testQuestions.length}`}
        >
          <QuestionCard 
            question={testQuestions[currentQuestionIndex]} 
            onAnswer={handleAnswer} 
            isLast={currentQuestionIndex === testQuestions.length - 1}
            className="border-0 shadow-none"
          />
        </div>
        
        {/* Enhanced motivational tips */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-200 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl" role="img" aria-label="success">🎯</span>
            <span className="text-green-700 font-bold text-lg">You're doing great!</span>
          </div>
          <p className="text-gray-700 font-medium">
            Question {currentQuestionIndex + 1} of {testQuestions.length} • 
            Keep going - each question brings you closer to your IELTS success! 
            Your progress is automatically saved.
          </p>
        </div>
      </div>
      
      {/* Enhanced Mobile Navigation */}
      <MobileTestNavigation
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={testQuestions.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onHome={handleHome}
        canGoBack={currentQuestionIndex > 0}
        canGoForward={currentQuestionIndex < testQuestions.length - 1}
      />
    </div>
  );
}
