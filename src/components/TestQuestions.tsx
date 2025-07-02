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
      title: "Resources coming soon!",
      description: "We're working on bringing you the best IELTS study materials.",
      duration: 3000
    });
  };

  // Handle user's answer with enhanced saving
  const handleAnswer = (answerId: string) => {
    const currentQuestion = testQuestions[currentQuestionIndex];
    const newAnswers = [...answers, answerId];
    const newUserAnswers = { ...userAnswers, [currentQuestion.id]: answerId };
    
    setAnswers(newAnswers);
    setUserAnswers(newUserAnswers);
    
    // Auto-save immediately after answer
    autoSave({
      currentQuestionIndex: currentQuestionIndex + 1,
      userAnswers: newUserAnswers,
      totalQuestions: testQuestions.length,
      isCompleted: currentQuestionIndex >= testQuestions.length - 1
    });
    
    if (currentQuestionIndex < testQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnnounceMessage(`Answer recorded. Moving to question ${currentQuestionIndex + 2} of ${testQuestions.length}`);
      toast({
        title: "Answer recorded ✓",
        description: `Moving to question ${currentQuestionIndex + 2} of ${testQuestions.length}`,
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
      
      setAnnounceMessage(`Test completed! You answered ${correctCount} out of ${testQuestions.length} questions correctly.`);
      toast({
        title: "Test completed! 🎉",
        description: `Completed in ${completionTime} minutes. Calculating your results...`,
        duration: 3000
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
      className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"
      role="main"
      aria-label="IELTS Test Interface"
    >
      <LiveRegion message={announceMessage} priority="polite" />
      
      {/* Mobile Progress Bar - Sticky */}
      <MobileProgressBar
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={testQuestions.length}
        onSave={handleManualSave}
        isAutoSaving={isAutoSaving}
        lastSaveTime={lastSaveTime}
      />
      
      {/* Main Content with bottom padding for mobile navigation */}
      <div id="main-content" className="pt-4 pb-24 px-4 space-y-6 max-w-4xl mx-auto">
        <TestHeader onTelegramResources={handleResourcesClick} />
        
        {/* Question Card - Mobile Optimized */}
        <div 
          className="bg-white rounded-xl shadow-lg border border-purple-100 min-h-[400px]"
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
        
        {/* Enhanced test tips for mobile */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-blue-600 font-semibold" role="img" aria-label="tip">💡</span>
            <span className="text-blue-600 font-semibold">Mobile Tip:</span>
          </div>
          <p className="text-sm text-gray-700">
            Use arrow keys or swipe to navigate between questions. Your progress is auto-saved every 30 seconds.
          </p>
        </div>
      </div>
      
      {/* Mobile Navigation - Fixed Bottom */}
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
