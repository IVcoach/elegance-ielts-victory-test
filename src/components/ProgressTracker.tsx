
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, TrendingUp, Clock, Award } from "lucide-react";

interface UserProgress {
  testsCompleted: number;
  averageScore: number;
  bestScore: number;
  totalTimeSpent: number; // in minutes
  currentStreak: number;
  achievements: string[];
  weakAreas: string[];
  strongAreas: string[];
}

export function ProgressTracker() {
  const [progress, setProgress] = useState<UserProgress>({
    testsCompleted: 0,
    averageScore: 0,
    bestScore: 0,
    totalTimeSpent: 0,
    currentStreak: 0,
    achievements: [],
    weakAreas: [],
    strongAreas: []
  });

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('ielts_user_progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const saveProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
    localStorage.setItem('ielts_user_progress', JSON.stringify(newProgress));
  };

  const addTestResult = (score: number, timeSpent: number) => {
    const newProgress = { ...progress };
    newProgress.testsCompleted += 1;
    newProgress.averageScore = ((progress.averageScore * (progress.testsCompleted - 1)) + score) / progress.testsCompleted;
    newProgress.bestScore = Math.max(progress.bestScore, score);
    newProgress.totalTimeSpent += timeSpent;
    
    // Add achievements based on performance
    if (score >= 90 && !newProgress.achievements.includes('High Achiever')) {
      newProgress.achievements.push('High Achiever');
    }
    if (newProgress.testsCompleted >= 5 && !newProgress.achievements.includes('Persistent Learner')) {
      newProgress.achievements.push('Persistent Learner');
    }
    
    saveProgress(newProgress);
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-green-600";
    if (score >= 70) return "text-blue-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 85) return "default";
    if (score >= 70) return "secondary";
    return "outline";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Overall Statistics */}
      <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
          <TrendingUp className="h-4 w-4 text-purple-600" />
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Tests Completed</span>
                <span className="font-semibold">{progress.testsCompleted}</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Average Score</span>
                <span className={`font-semibold ${getScoreColor(progress.averageScore)}`}>
                  {progress.averageScore.toFixed(1)}%
                </span>
              </div>
              <Progress value={progress.averageScore} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span>Best Score</span>
                <Badge variant={getScoreBadgeVariant(progress.bestScore)}>
                  {progress.bestScore}%
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Time & Streak */}
      <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Study Time</CardTitle>
          <Clock className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <div className="text-2xl font-bold text-green-600">
                {Math.round(progress.totalTimeSpent / 60)}h {progress.totalTimeSpent % 60}m
              </div>
              <p className="text-xs text-muted-foreground">Total study time</p>
            </div>
            <div>
              <div className="text-lg font-semibold flex items-center gap-1">
                <span>{progress.currentStreak}</span>
                <span className="text-orange-500">🔥</span>
              </div>
              <p className="text-xs text-muted-foreground">Day streak</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Achievements</CardTitle>
          <Trophy className="h-4 w-4 text-yellow-600" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {progress.achievements.length > 0 ? (
              progress.achievements.map((achievement, index) => (
                <Badge key={index} variant="secondary" className="mr-1 mb-1">
                  <Award className="h-3 w-3 mr-1" />
                  {achievement}
                </Badge>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">Complete tests to unlock achievements!</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
