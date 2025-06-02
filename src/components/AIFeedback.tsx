
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, MessageSquare, FileText, CheckCircle, AlertCircle, Lightbulb } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface FeedbackCategory {
  name: string;
  score: number;
  feedback: string;
  suggestions: string[];
}

interface AIFeedbackResult {
  overallScore: number;
  categories: FeedbackCategory[];
  strengths: string[];
  improvements: string[];
  nextSteps: string[];
}

export function AIFeedback() {
  const [writingText, setWritingText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState<AIFeedbackResult | null>(null);

  const analyzeWriting = async () => {
    if (!writingText.trim()) {
      toast({
        title: "Please enter some text",
        description: "Write at least a few sentences for analysis.",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis - in real implementation, this would call an AI service
    setTimeout(() => {
      const mockFeedback: AIFeedbackResult = {
        overallScore: Math.floor(Math.random() * 30) + 70, // 70-100 range
        categories: [
          {
            name: "Grammar",
            score: Math.floor(Math.random() * 25) + 75,
            feedback: "Good use of complex sentence structures with minor errors.",
            suggestions: ["Review article usage", "Practice conditional sentences"]
          },
          {
            name: "Vocabulary",
            score: Math.floor(Math.random() * 30) + 70,
            feedback: "Adequate vocabulary range with some repetition.",
            suggestions: ["Use more varied synonyms", "Include more advanced vocabulary"]
          },
          {
            name: "Coherence",
            score: Math.floor(Math.random() * 25) + 75,
            feedback: "Ideas are well-connected with appropriate linking words.",
            suggestions: ["Add more transitional phrases", "Improve paragraph structure"]
          },
          {
            name: "Task Response",
            score: Math.floor(Math.random() * 20) + 80,
            feedback: "Addresses the prompt effectively with relevant examples.",
            suggestions: ["Develop ideas more fully", "Include more specific examples"]
          }
        ],
        strengths: [
          "Clear argument structure",
          "Good use of examples",
          "Appropriate tone and register"
        ],
        improvements: [
          "Reduce grammatical errors",
          "Expand vocabulary range",
          "Improve sentence variety"
        ],
        nextSteps: [
          "Practice complex grammar structures",
          "Read academic texts to improve vocabulary",
          "Join @ieltstori for daily practice exercises"
        ]
      };
      
      setFeedback(mockFeedback);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis complete! ✓",
        description: "Your writing has been analyzed. Review the feedback below."
      });
    }, 3000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return "bg-green-500";
    if (score >= 70) return "bg-blue-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  const handleTelegramJoin = () => {
    window.open("https://t.me/ieltstori", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-6">
      {/* Writing Input */}
      <Card className="border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-purple-600" />
            AI Writing Assessment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Paste your IELTS writing task here for AI-powered feedback..."
            value={writingText}
            onChange={(e) => setWritingText(e.target.value)}
            className="min-h-[200px] border-purple-200 focus:border-purple-400"
          />
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              {writingText.length} characters • {writingText.split(' ').filter(word => word.length > 0).length} words
            </span>
            <Button 
              onClick={analyzeWriting}
              disabled={isAnalyzing || !writingText.trim()}
              className="bg-purple-600 hover:bg-purple-700"
            >
              {isAnalyzing ? (
                <>
                  <Brain className="h-4 w-4 mr-2 animate-pulse" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Brain className="h-4 w-4 mr-2" />
                  Get AI Feedback
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Feedback Results */}
      {feedback && (
        <div className="space-y-6 animate-fade-in">
          {/* Overall Score */}
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-blue-50">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {feedback.overallScore}/100
                </div>
                <p className="text-muted-foreground">Overall Writing Score</p>
                <Progress value={feedback.overallScore} className="mt-4" />
              </div>
            </CardContent>
          </Card>

          {/* Category Scores */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {feedback.categories.map((category, index) => (
              <Card key={index} className="border-blue-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex justify-between items-center">
                    {category.name}
                    <Badge variant="secondary" className="ml-2">
                      {category.score}/100
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Progress value={category.score} className={`h-2 ${getScoreColor(category.score)}`} />
                  <p className="text-sm text-muted-foreground">{category.feedback}</p>
                  <div className="space-y-1">
                    {category.suggestions.map((suggestion, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <Lightbulb className="h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span>{suggestion}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Strengths and Improvements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="h-5 w-5" />
                  Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feedback.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <AlertCircle className="h-5 w-5" />
                  Areas for Improvement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feedback.improvements.map((improvement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700">
                <MessageSquare className="h-5 w-5" />
                Recommended Next Steps
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {feedback.nextSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border">
                  <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-sm">{step}</span>
                </div>
              ))}
              <Button 
                onClick={handleTelegramJoin}
                className="w-full bg-blue-500 hover:bg-blue-600 mt-4"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Join @ieltstori for Daily Practice
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
