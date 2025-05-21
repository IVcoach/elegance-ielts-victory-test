
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type CEFRLevel = "A0" | "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

interface CEFRLevelInfo {
  title: string;
  description: string;
  color: string;
}

const cefrLevelInfo: Record<CEFRLevel, CEFRLevelInfo> = {
  "A0": {
    title: "Pre-Beginner",
    description: "Minimal knowledge of English. Can recognize a few basic words and phrases.",
    color: "bg-red-100 text-red-800"
  },
  "A1": {
    title: "Beginner",
    description: "Can understand and use familiar everyday expressions and basic phrases.",
    color: "bg-orange-100 text-orange-800"
  },
  "A2": {
    title: "Elementary",
    description: "Can communicate in simple and routine tasks on familiar topics.",
    color: "bg-amber-100 text-amber-800"
  },
  "B1": {
    title: "Intermediate",
    description: "Can deal with most situations likely to arise while traveling in an area where the language is spoken.",
    color: "bg-yellow-100 text-yellow-800"
  },
  "B2": {
    title: "Upper-Intermediate",
    description: "Can interact with a degree of fluency and spontaneity with native speakers.",
    color: "bg-lime-100 text-lime-800"
  },
  "C1": {
    title: "Advanced",
    description: "Can express ideas fluently and spontaneously without much obvious searching for expressions.",
    color: "bg-green-100 text-green-800"
  },
  "C2": {
    title: "Proficient",
    description: "Can understand with ease virtually everything heard or read. Can express themselves spontaneously, fluently and precisely.",
    color: "bg-emerald-100 text-emerald-800"
  }
};

export interface ScoreSection {
  name: string;
  score: number;
}

interface CEFRScoreProps {
  level: CEFRLevel;
  overallScore: number;
  sections?: ScoreSection[];
  className?: string;
  onShare?: () => void;
  onDownloadCertificate?: () => void;
}

export function CEFRScore({ 
  level, 
  overallScore, 
  sections,
  className,
  onShare,
  onDownloadCertificate
}: CEFRScoreProps) {
  const levelInfo = cefrLevelInfo[level];
  
  return (
    <Card className={cn("w-full max-w-2xl mx-auto animate-fade-in", className)}>
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-3xl font-playfair mb-2">Your CEFR Level</CardTitle>
        <CardDescription>
          Based on your test performance, we've assessed your English proficiency.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className={cn(
            "inline-block px-4 py-2 rounded-full font-bold text-xl mb-2",
            levelInfo.color
          )}>
            {level}: {levelInfo.title}
          </div>
          <p className="text-muted-foreground">{levelInfo.description}</p>
        </div>
        
        <div className="flex justify-center items-center mb-6">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#0A3D62"
                strokeWidth="3"
                strokeDasharray={`${overallScore}, 100`}
                className="transition-all duration-1000 ease-in-out"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-2xl font-bold">{overallScore}%</div>
              <div className="text-xs text-muted-foreground">Overall Score</div>
            </div>
          </div>
        </div>
        
        {sections && (
          <div className="space-y-3">
            <h4 className="font-semibold text-center">Section Breakdown</h4>
            <div className="grid grid-cols-2 gap-3">
              {sections.map((section) => (
                <div key={section.name} className="p-3 border rounded-md">
                  <div className="text-sm text-muted-foreground">{section.name}</div>
                  <div className="font-semibold">{section.score}%</div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full mt-1">
                    <div 
                      className="h-full bg-brand-blue rounded-full"
                      style={{ width: `${section.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          {onShare && (
            <Button 
              variant="outline" 
              className="flex-1 border-brand-blue text-brand-blue hover:bg-brand-blue/10"
              onClick={onShare}
            >
              Share Results & Join @ieltsvc
            </Button>
          )}
          
          {onDownloadCertificate && (
            <Button 
              className="flex-1 bg-brand-gold hover:bg-opacity-90"
              onClick={onDownloadCertificate}
            >
              Download Certificate
            </Button>
          )}
        </div>
        
        <div className="text-center pt-2">
          <a 
            href="https://t.me/ieltsvc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-blue hover:underline text-sm"
          >
            Join our Telegram IELTS community @ieltsvc
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
