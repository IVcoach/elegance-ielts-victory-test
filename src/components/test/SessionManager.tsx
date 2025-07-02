import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Trash2, Clock, CheckCircle } from "lucide-react";
import { useTestProgress } from "@/hooks/useTestProgress";

interface SessionManagerProps {
  onResumeSession: (sessionId: string) => void;
  onStartNewSession: () => void;
  className?: string;
}

export function SessionManager({ 
  onResumeSession, 
  onStartNewSession,
  className 
}: SessionManagerProps) {
  const { getAllSessions, deleteSession } = useTestProgress();
  const [sessions, setSessions] = useState(() => getAllSessions());
  
  const refreshSessions = () => {
    setSessions(getAllSessions());
  };
  
  const handleDeleteSession = (sessionId: string) => {
    deleteSession(sessionId);
    refreshSessions();
  };
  
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  const calculateProgress = (session: any) => {
    return Math.round((session.currentQuestionIndex / session.totalQuestions) * 100);
  };
  
  return (
    <div className={className}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Test Sessions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Start new session button */}
            <Button 
              onClick={onStartNewSession}
              className="w-full bg-blue-600 hover:bg-blue-700 min-h-[48px] touch-manipulation"
            >
              <Play className="h-5 w-5 mr-2" />
              Start New Test
            </Button>
            
            {/* Existing sessions */}
            {sessions.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-700">Previous Sessions</h3>
                
                {sessions.map((session) => (
                  <Card key={session.id} className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant={session.isCompleted ? "default" : "secondary"}>
                              {session.isCompleted ? (
                                <><CheckCircle className="h-3 w-3 mr-1" /> Completed</>
                              ) : (
                                `${calculateProgress(session)}%`
                              )}
                            </Badge>
                            <span className="text-sm text-gray-500">
                              {formatDate(session.lastSaved)}
                            </span>
                          </div>
                          
                          <div className="text-sm text-gray-600">
                            Question {session.currentQuestionIndex + 1} of {session.totalQuestions}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {!session.isCompleted && (
                            <Button
                              size="sm"
                              onClick={() => onResumeSession(session.id)}
                              className="min-h-[44px] min-w-[44px] touch-manipulation"
                            >
                              <Play className="h-4 w-4" />
                              <span className="sr-only">Resume</span>
                            </Button>
                          )}
                          
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDeleteSession(session.id)}
                            className="min-h-[44px] min-w-[44px] touch-manipulation"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
