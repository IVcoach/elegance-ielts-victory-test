
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, BookOpen, MessageSquare, RefreshCw, CheckCircle, Star, Award } from "lucide-react";
import { WhatsAppResultButton } from "./test/WhatsAppResultButton";

interface SectionScore {
  section: string;
  score: number;
  level: string;
}

interface AssessmentResultsProps {
  correctAnswers: number;
  totalQuestions: number;
  cefrLevel: string;
  ieltsBand: string;
  toeflScore: number;
  pteScore: number;
  sectionScores: SectionScore[];
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
  sectionScores,
  onRestart,
  onPractice
}: AssessmentResultsProps) {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-blue-600";
    if (percentage >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  const getBandColor = (band: string) => {
    const bandNum = parseFloat(band);
    if (bandNum >= 7) return "bg-green-100 text-green-800 border-green-200";
    if (bandNum >= 6) return "bg-blue-100 text-blue-800 border-blue-200";
    if (bandNum >= 5) return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-red-100 text-red-800 border-red-200";
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Trophy className="h-8 w-8 text-yellow-500" />
          <h1 className="text-3xl font-bold text-gray-900">Assessment Complete!</h1>
          <Trophy className="h-8 w-8 text-yellow-500" />
        </div>
        <p className="text-lg text-gray-600">Here are your detailed results and next steps</p>
      </div>

      {/* Main Results Card */}
      <Card className="border-2 border-blue-200 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardTitle className="text-2xl font-bold text-center text-gray-900 flex items-center justify-center gap-2">
            <Target className="h-6 w-6 text-blue-600" />
            Your IELTS Assessment Results
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Score */}
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className={`text-3xl font-bold ${getScoreColor(percentage)}`}>
                {correctAnswers}/{totalQuestions}
              </div>
              <div className="text-sm text-gray-600 mt-1">Correct Answers</div>
              <div className={`text-lg font-semibold ${getScoreColor(percentage)}`}>
                {percentage}%
              </div>
            </div>

            {/* IELTS Band */}
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Badge className={`text-lg px-3 py-1 ${getBandColor(ieltsBand)}`}>
                Band {ieltsBand}
              </Badge>
              <div className="text-sm text-gray-600 mt-2">IELTS Equivalent</div>
            </div>

            {/* CEFR Level */}
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Badge className="text-lg px-3 py-1 bg-purple-100 text-purple-800 border-purple-200">
                {cefrLevel}
              </Badge>
              <div className="text-sm text-gray-600 mt-2">CEFR Level</div>
            </div>

            {/* Progress Bar */}
            <div className="flex flex-col justify-center p-4 bg-gray-50 rounded-lg">
              <Progress value={percentage} className="mb-2" />
              <div className="text-sm text-gray-600 text-center">Overall Progress</div>
            </div>
          </div>

          {/* Additional Scores */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-2xl font-bold text-orange-700">{toeflScore}</div>
              <div className="text-sm text-gray-600">TOEFL Equivalent</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-700">{pteScore}</div>
              <div className="text-sm text-gray-600">PTE Equivalent</div>
            </div>
          </div>

          {/* Section Breakdown */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Estimated Section Scores</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sectionScores.map((section, index) => (
                <div key={index} className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="font-semibold text-blue-800">{section.section}</div>
                  <div className="text-lg font-bold text-blue-600">{section.score}</div>
                  <div className="text-xs text-gray-600">{section.level}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* WhatsApp Results Button */}
      <WhatsAppResultButton 
        correctAnswers={correctAnswers}
        totalQuestions={totalQuestions}
        cefrLevel={cefrLevel}
        ieltsBand={ieltsBand}
      />

      {/* Next Steps */}
      <Card className="border-2 border-green-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="text-xl font-bold text-center text-gray-900 flex items-center justify-center gap-2">
            <CheckCircle className="h-6 w-6 text-green-600" />
            Next Steps for Complete Assessment
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-semibold text-blue-800 mb-2">Step 2: Speaking & Writing Assessment</h4>
              <p className="text-blue-700 text-sm">
                Complete your evaluation with personalized speaking and writing assessment for a comprehensive IELTS preparation plan.
              </p>
            </div>
            
            <Button 
              onClick={onPractice} 
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 shadow-xl transform hover:scale-105 transition-all duration-300"
              size="lg"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Continue to Speaking & Writing Assessment
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={onRestart} 
          variant="outline" 
          className="flex-1 py-3 border-2 border-gray-300 hover:bg-gray-50 transition-all duration-300"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Retake Assessment
        </Button>
        
        <Button 
          onClick={onPractice} 
          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <BookOpen className="h-4 w-4 mr-2" />
          Practice Questions
        </Button>
      </div>

      {/* Motivational Footer */}
      <div className="text-center bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border-2 border-amber-200">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Star className="h-5 w-5 text-amber-500" />
          <Award className="h-5 w-5 text-amber-600" />
          <Star className="h-5 w-5 text-amber-500" />
        </div>
        <p className="text-lg font-bold text-gray-900 mb-2">
          Great job completing the assessment! 🎉
        </p>
        <p className="text-gray-700">
          Your journey to IELTS success starts here. Remember to send your results via WhatsApp for personalized guidance!
        </p>
      </div>
    </div>
  );
}
