
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, BarChart3, BookOpen, MessageCircle, RefreshCw, GraduationCap, Star, Sparkles, Award } from "lucide-react";
import { CEFRScore, CEFRLevel } from "./CEFRScore";

interface AssessmentResultsProps {
  correctAnswers: number;
  totalQuestions: number;
  cefrLevel: CEFRLevel;
  ieltsBand: string;
  toeflScore: number;
  pteScore: number;
  sectionScores?: {
    listening: number;
    reading: number;
    writing: number;
    speaking: number;
  };
  onRestart: () => void;
  onPractice: () => void;
}

export function AssessmentResults({
  correctAnswers,
  totalQuestions,
  cefrLevel,
  ieltsBand,
  toeflScore,
  pteScore,
  onRestart,
  onPractice,
}: AssessmentResultsProps) {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  const getPerformanceLevel = (percentage: number) => {
    if (percentage >= 90) return { level: "Excellent", color: "text-green-600", bgColor: "bg-green-50 border-green-200" };
    if (percentage >= 80) return { level: "Very Good", color: "text-blue-600", bgColor: "bg-blue-50 border-blue-200" };
    if (percentage >= 70) return { level: "Good", color: "text-yellow-600", bgColor: "bg-yellow-50 border-yellow-200" };
    if (percentage >= 60) return { level: "Fair", color: "text-orange-600", bgColor: "bg-orange-50 border-orange-200" };
    return { level: "Needs Improvement", color: "text-red-600", bgColor: "bg-red-50 border-red-200" };
  };

  const performance = getPerformanceLevel(percentage);

  const getMotivationalMessage = () => {
    if (percentage >= 90) return "Outstanding performance! You're ready for advanced level preparation.";
    if (percentage >= 80) return "Great job! You have a strong foundation to build upon.";
    if (percentage >= 70) return "Good work! With focused practice, you can achieve your target score.";
    if (percentage >= 60) return "You're on the right track! Consistent practice will help you improve.";
    return "Every expert was once a beginner. Let's start your journey to success!";
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header with Trophy Animation */}
      <div className="text-center relative">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 animate-bounce shadow-2xl">
          <Trophy className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Assessment Complete!
        </h1>
        <p className="text-xl text-gray-700 font-medium">
          {getMotivationalMessage()}
        </p>
      </div>

      {/* Main Results Card */}
      <Card className={`${performance.bgColor} border-2 shadow-xl`}>
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className={`h-6 w-6 ${performance.color}`} />
            <CardTitle className={`text-2xl ${performance.color}`}>
              {performance.level}
            </CardTitle>
            <Star className={`h-6 w-6 ${performance.color}`} />
          </div>
          <div className="text-5xl font-bold text-gray-900 mb-2">
            {correctAnswers}/{totalQuestions}
          </div>
          <Badge variant="secondary" className="text-lg px-4 py-2 font-bold">
            {percentage}% Correct
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CEFR Level */}
            <div className="text-center p-6 bg-white/80 rounded-xl shadow-lg border-2 border-blue-200 transform hover:scale-105 transition-all">
              <div className="flex items-center justify-center mb-3">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">CEFR Level</h3>
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {cefrLevel}
              </div>
              <div className="text-sm text-gray-600">Level</div>
            </div>

            {/* IELTS Band */}
            <div className="text-center p-6 bg-white/80 rounded-xl shadow-lg border-2 border-green-200 transform hover:scale-105 transition-all">
              <div className="flex items-center justify-center mb-3">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Estimated IELTS</h3>
              <div className="text-3xl font-bold text-green-600 mb-1">
                {ieltsBand}
              </div>
              <div className="text-sm text-gray-600">Band Score</div>
            </div>

            {/* Additional Scores */}
            <div className="text-center p-6 bg-white/80 rounded-xl shadow-lg border-2 border-purple-200 transform hover:scale-105 transition-all">
              <div className="flex items-center justify-center mb-3">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Other Scores</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">TOEFL:</span>
                  <span className="font-bold text-purple-600">{toeflScore}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">PTE:</span>
                  <span className="font-bold text-purple-600">{pteScore}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional Feedback Card */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-xl">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-full">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-xl text-blue-900">Professional Feedback</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-white/90 p-6 rounded-xl shadow-md border border-blue-200">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full flex-shrink-0">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Personalized Assessment Report</h4>
                <p className="text-gray-700 leading-relaxed">
                  Based on your performance, we recommend focusing on areas that will help you achieve your target IELTS band score. 
                  Our expert coaches can provide detailed feedback on your strengths and areas for improvement.
                </p>
                <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <p className="text-yellow-800 font-medium">
                    💡 <strong>Pro Tip:</strong> Submit your speaking and writing samples for detailed evaluation by our Cambridge-certified coaches!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={onRestart}
          size="lg"
          variant="outline"
          className="flex items-center gap-2 px-8 py-6 text-lg font-bold border-2 hover:scale-105 transition-all"
        >
          <RefreshCw className="h-5 w-5" />
          Retake Assessment
        </Button>
        
        <Button
          onClick={onPractice}
          size="lg"
          className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all flex items-center gap-2"
        >
          <BookOpen className="h-5 w-5" />
          Practice Questions
        </Button>
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 shadow-xl">
        <CardContent className="text-center p-8">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-12 w-12 text-orange-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Achieve Your Target Score?</h3>
          <p className="text-gray-700 text-lg mb-6">
            Join thousands of successful students who have achieved their IELTS goals with our personalized coaching program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg font-bold shadow-xl hover:scale-105 transition-all">
              <a href="https://wa.me/+31631267353?text=Hello! I just completed the IELTS assessment and would like to know more about your coaching programs." target="_blank" rel="noopener noreferrer">
                Get Personal Coaching
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-bold hover:scale-105 transition-all">
              <a href="https://t.me/ieltstori" target="_blank" rel="noopener noreferrer">
                Join Study Community
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
