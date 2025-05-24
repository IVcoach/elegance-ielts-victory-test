
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface ScoreSection {
  name: string;
  score: number;
}

interface AssessmentResultsProps {
  correctAnswers: number;
  totalQuestions: number;
  cefrLevel: string;
  ieltsBand: string;
  toeflScore: number;
  pteScore: number;
  sectionScores: ScoreSection[];
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
  const overallScore = Math.round((correctAnswers / totalQuestions) * 100);
  
  const handleWhatsAppShare = () => {
    const text = `
I've just completed the IELTS placement test!
My results:
- IELTS Band: ${ieltsBand}
- CEFR Level: ${cefrLevel}
- TOEFL Score: ${toeflScore}
- PTE Score: ${pteScore}
- Overall Score: ${overallScore}%

I'm interested in improving my score. Can you help with personalized guidance?
    `;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/+31631267353?text=${encodedText}`, "_blank", "noopener,noreferrer");
  };
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-playfair font-bold text-brand-navy mb-2">
          Your IELTS Results
        </h1>
        <p className="text-gray-600">
          Based on your test performance, we've assessed your English proficiency.
        </p>
      </div>
      
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6 space-y-6">
          <div className="text-center">
            <div className="inline-block px-5 py-3 bg-purple-600 text-white rounded-full font-bold text-2xl mb-3">
              IELTS Band {ieltsBand}
            </div>
            <p className="text-lg text-muted-foreground">
              {ieltsBand === "9" && "Expert User: complete operational command of English"}
              {ieltsBand === "8-8.5" && "Very Good to Expert User: fully operational command with only occasional inaccuracies"}
              {ieltsBand === "7-7.5" && "Good User: operational command with occasional inaccuracies"}
              {ieltsBand === "6-6.5" && "Competent User: generally effective command despite some inaccuracies"}
              {ieltsBand === "5-5.5" && "Modest User: partial command, coping with overall meaning in most situations"}
              {ieltsBand === "4-4.5" && "Limited User: basic competence limited to familiar situations"}
              {ieltsBand === "3-3.5" && "Extremely Limited User: conveys and understands only general meaning in very familiar situations"}
              {ieltsBand === "1-2.5" && "Non to Intermittent User: essentially has no ability to use the language beyond possibly a few isolated words"}
            </p>
          </div>
          
          <div className="flex justify-center items-center mb-6">
            <div className="relative w-36 h-36">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#7C3AED" strokeWidth="3" strokeDasharray={`${overallScore}, 100`} className="transition-all duration-1000 ease-in-out" />
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-2xl font-bold">{overallScore}%</div>
                <div className="text-xs text-muted-foreground">Overall Score</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 border rounded-md">
              <div className="text-sm text-muted-foreground">CEFR Level</div>
              <div className="font-semibold text-xl">{cefrLevel}</div>
            </div>
            <div className="p-3 border rounded-md">
              <div className="text-sm text-muted-foreground">TOEFL</div>
              <div className="font-semibold text-xl">{toeflScore}</div>
            </div>
            <div className="p-3 border rounded-md">
              <div className="text-sm text-muted-foreground">PTE</div>
              <div className="font-semibold text-xl">{pteScore}</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-center">Section Breakdown</h4>
            <div className="grid grid-cols-2 gap-3">
              {sectionScores.map(section => (
                <div key={section.name} className="p-3 border rounded-md">
                  <div className="text-sm text-muted-foreground">{section.name}</div>
                  <div className="font-semibold">{Math.round(section.score)}%</div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full mt-1">
                    <div 
                      className="h-full bg-purple-600 rounded-full" 
                      style={{ width: `${section.score}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button 
              variant="outline" 
              className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-600/10" 
              onClick={onPractice}
            >
              Practice Speaking & Writing
            </Button>
            
            <Button 
              className="flex-1 bg-green-500 hover:bg-green-600 gap-2" 
              onClick={handleWhatsAppShare}
            >
              <span>Contact via WhatsApp</span>
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
        <Button variant="outline" onClick={onRestart}>
          Take Test Again
        </Button>
      </div>
      
      {/* Completion dialog - appears on the page itself instead of as modal */}
      <div className="bg-white rounded-lg p-6 shadow-md border-2 border-purple-100 max-w-md mx-auto animate-scale-in">
        <h3 className="text-xl font-bold text-brand-navy mb-2">Want to improve your score?</h3>
        <p className="text-gray-600 mb-4">
          Get personalized guidance from our IELTS experts to help you achieve your target score.
        </p>
        
        <div className="space-y-3">
          <Button 
            className="w-full bg-green-500 hover:bg-green-600 gap-2" 
            onClick={handleWhatsAppShare}
          >
            <span>Get Free Consultation</span>
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
