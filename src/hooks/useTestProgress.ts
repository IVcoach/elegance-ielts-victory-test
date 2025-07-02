
import { useState, useEffect, useCallback } from 'react';
import { toast } from '@/hooks/use-toast';

interface TestSession {
  id: string;
  startTime: number;
  lastSaved: number;
  currentQuestionIndex: number;
  userAnswers: { [key: string]: string };
  totalQuestions: number;
  isCompleted: boolean;
}

export function useTestProgress(sessionId?: string) {
  const [isAutoSaving, setIsAutoSaving] = useState(false);
  const [lastSaveTime, setLastSaveTime] = useState<number | null>(null);
  
  // Generate or use existing session ID
  const currentSessionId = sessionId || `test_session_${Date.now()}`;
  
  // Save progress to localStorage
  const saveProgress = useCallback((session: Partial<TestSession>) => {
    try {
      const existingSession = getSession(currentSessionId);
      const updatedSession: TestSession = {
        id: currentSessionId,
        startTime: existingSession?.startTime || Date.now(),
        lastSaved: Date.now(),
        currentQuestionIndex: 0,
        userAnswers: {},
        totalQuestions: 20,
        isCompleted: false,
        ...existingSession,
        ...session,
      };
      
      localStorage.setItem(`ielts_test_${currentSessionId}`, JSON.stringify(updatedSession));
      localStorage.setItem('ielts_latest_session', currentSessionId);
      setLastSaveTime(Date.now());
      
      return updatedSession;
    } catch (error) {
      console.error('Failed to save progress:', error);
      toast({
        title: "Save Error",
        description: "Failed to save your progress. Please try again.",
        variant: "destructive"
      });
      return null;
    }
  }, [currentSessionId]);
  
  // Load session from localStorage
  const getSession = useCallback((sessionId: string): TestSession | null => {
    try {
      const saved = localStorage.getItem(`ielts_test_${sessionId}`);
      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      console.error('Failed to load session:', error);
      return null;
    }
  }, []);
  
  // Get all saved sessions
  const getAllSessions = useCallback((): TestSession[] => {
    const sessions: TestSession[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('ielts_test_')) {
        try {
          const session = JSON.parse(localStorage.getItem(key) || '');
          sessions.push(session);
        } catch (error) {
          console.error('Failed to parse session:', error);
        }
      }
    }
    return sessions.sort((a, b) => b.lastSaved - a.lastSaved);
  }, []);
  
  // Auto-save functionality
  const autoSave = useCallback((session: Partial<TestSession>) => {
    setIsAutoSaving(true);
    const savedSession = saveProgress(session);
    if (savedSession) {
      toast({
        title: "Progress Saved",
        description: "Your test progress has been automatically saved.",
        duration: 2000
      });
    }
    setTimeout(() => setIsAutoSaving(false), 500);
  }, [saveProgress]);
  
  // Manual save with feedback
  const manualSave = useCallback((session: Partial<TestSession>) => {
    const savedSession = saveProgress(session);
    if (savedSession) {
      toast({
        title: "Progress Saved ✓",
        description: `Saved at ${new Date().toLocaleTimeString()}`,
        duration: 3000
      });
    }
    return savedSession;
  }, [saveProgress]);
  
  // Delete session
  const deleteSession = useCallback((sessionId: string) => {
    try {
      localStorage.removeItem(`ielts_test_${sessionId}`);
      toast({
        title: "Session Deleted",
        description: "Test session has been removed.",
        duration: 2000
      });
    } catch (error) {
      console.error('Failed to delete session:', error);
    }
  }, []);
  
  // Clear all sessions
  const clearAllSessions = useCallback(() => {
    const keys = Object.keys(localStorage).filter(key => key.startsWith('ielts_test_'));
    keys.forEach(key => localStorage.removeItem(key));
    localStorage.removeItem('ielts_latest_session');
    setLastSaveTime(null);
  }, []);
  
  return {
    currentSessionId,
    saveProgress,
    getSession,
    getAllSessions,
    autoSave,
    manualSave,
    deleteSession,
    clearAllSessions,
    isAutoSaving,
    lastSaveTime
  };
}
