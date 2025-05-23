
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CEFRScore, CEFRLevel, ScoreSection } from "@/components/CEFRScore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Book, Award, Star } from "lucide-react";
import { WelcomeDialog } from "@/components/WelcomeDialog";
import { StudyQuestions } from "@/components/StudyQuestions";
import { TestQuestions } from "@/components/TestQuestions";

// IELTS band descriptions aligned with CEFR levels
interface IELTSBandDescription {
  band: string;
  description: string;
  cefrLevel: CEFRLevel;
}

const ieltsDescriptions: IELTSBandDescription[] = [
  {
    band: "9",
    description: "Expert User: complete operational command of English with perfect accuracy, appropriateness, fluency and complete understanding",
    cefrLevel: "C2"
  },
  {
    band: "8-8.5",
    description: "Very Good to Expert User: fully operational command with only occasional inaccuracies; handles complex detailed argumentation well",
    cefrLevel: "C2"
  },
  {
    band: "7-7.5",
    description: "Good User: operational command of English, though with occasional inaccuracies and misunderstandings in some situations",
    cefrLevel: "C1"
  },
  {
    band: "6-6.5",
    description: "Competent User: generally effective command of English despite some inaccuracies and misunderstandings",
    cefrLevel: "B2"
  },
  {
    band: "5-5.5",
    description: "Modest User: partial command of English, coping with overall meaning in most situations, though likely to make many mistakes",
    cefrLevel: "B1"
  },
  {
    band: "4-4.5",
    description: "Limited User: basic competence limited to familiar situations with frequent problems in understanding and expression",
    cefrLevel: "A2"
  },
  {
    band: "3-3.5",
    description: "Extremely Limited User: conveys and understands only general meaning in very familiar situations",
    cefrLevel: "A1"
  },
  {
    band: "1-2.5",
    description: "Non to Intermittent User: essentially has no ability to use the language beyond possibly a few isolated words",
    cefrLevel: "A0"
  }
];

// Calculate CEFR level and IELTS band based on test score
const calculateResults = (correctAnswers: number, totalQuestions: number) => {
  const score = correctAnswers / totalQuestions * 100;
  let cefrLevel: CEFRLevel;
  let ieltsBand: string;
  
  if (score >= 95) {
    cefrLevel = "C2";
    ieltsBand = "9";
  } else if (score >= 85) {
    cefrLevel = "C2";
    ieltsBand = "8-8.5";
  } else if (score >= 75) {
    cefrLevel = "C1";
    ieltsBand = "7-7.5";
  } else if (score >= 65) {
    cefrLevel = "B2";
    ieltsBand = "6-6.5";
  } else if (score >= 50) {
    cefrLevel = "B1";
    ieltsBand = "5-5.5";
  } else if (score >= 35) {
    cefrLevel = "A2";
    ieltsBand = "4-4.5";
  } else if (score >= 20) {
    cefrLevel = "A1";
    ieltsBand = "3-3.5";
  } else {
    cefrLevel = "A0";
    ieltsBand = "1-2.5";
  }
  
  return {
    cefrLevel,
    ieltsBand,
    overallScore: Math.round(score)
  };
};

// Service Icons Component
const ServiceIcons = () => {
  const services = [
    {
      icon: <Book className="h-8 w-8" />,
      title: "IELTS Materials",
      description: "Access top-quality study resources"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Professional Assessment",
      description: "Get evaluated by certified examiners"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Personalized Guidance",
      description: "One-on-one mentoring sessions"
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {services.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <div className="flex items-center justify-center mb-4 text-purple-600">
            {service.icon}
          </div>
          <h3 className="text-lg font-semibold text-brand-navy text-center mb-2">{service.title}</h3>
          <p className="text-center text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

// Quiz Intro Component
const QuizIntro = ({
  onStartTest
}: {
  onStartTest: () => void;
}) => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-playfair font-bold text-brand-navy mb-6">
        Discover Your English Proficiency Level
      </h1>
      
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <p className="text-lg mb-4">
          Take our professional IELTS placement test to find out your current English level according to
          the Common European Framework of Reference (CEFR) and get an estimated IELTS band score.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-3 bg-purple-100 rounded-lg">
            <p className="text-sm font-medium text-purple-800">20 Questions</p>
          </div>
          <div className="p-3 bg-purple-100 rounded-lg">
            <p className="text-sm font-medium text-purple-800">15-20 Minutes</p>
          </div>
          <div className="p-3 bg-purple-100 rounded-lg">
            <p className="text-sm font-medium text-purple-800">Instant Results</p>
          </div>
          <div className="p-3 bg-purple-100 rounded-lg">
            <p className="text-sm font-medium text-purple-800">CEFR Aligned</p>
          </div>
        </div>
        
        <div className="mt-6">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-6 h-auto text-lg" onClick={onStartTest}>
            Start Your Assessment Now
          </Button>
        </div>
      </div>
      
      <ServiceIcons />
      
      <div className="p-5 bg-gradient-to-r from-blue-500/20 via-purple-500/40 to-indigo-400/30 rounded-lg mt-8 shadow-lg border border-white/40">
        <p className="font-bold text-brand-navy text-xl">
          <span className="bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text">
            Free assessment, consultation, and materials 
          </span>
          <br />
          <span className="text-lg mt-1 inline-block">
            for learners taking online classes
          </span>
        </p>
      </div>
    </div>
  );
};

// Results Component
const TestResults = ({
  correctAnswers,
  totalQuestions,
  onRestart
}: {
  correctAnswers: number;
  totalQuestions: number;
  onRestart: () => void;
}) => {
  const { cefrLevel, ieltsBand, overallScore } = calculateResults(correctAnswers, totalQuestions);
  
  // Calculate mock section scores
  const mockSectionScores: ScoreSection[] = [
    { name: "Grammar", score: Math.round(65 + Math.random() * 20) },
    { name: "Vocabulary", score: Math.round(70 + Math.random() * 15) },
    { name: "Reading", score: Math.round(60 + Math.random() * 25) },
    { name: "Academic Writing", score: Math.round(65 + Math.random() * 20) }
  ];

  // Find the description for the current IELTS band
  const bandDescription = ieltsBand ? ieltsDescriptions.find(desc => desc.band === ieltsBand)?.description : "";

  const handleWhatsAppShare = () => {
    const text = `
I've just completed the IELTS placement test!
My results:
- IELTS Band: ${ieltsBand}
- CEFR Level: ${cefrLevel}
- Overall Score: ${overallScore}%

I'm interested in improving my score. Can you help with personalized guidance?
    `;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/+31631267353?text=${encodedText}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-playfair font-bold text-brand-navy mb-2">
          Your IELTS Results
        </h1>
        <p className="text-gray-600">
          Based on your test performance, we've assessed your English proficiency.
        </p>
      </div>
      
      <Card className="w-full max-w-2xl mx-auto animate-fade-in">
        <CardContent className="pt-6 space-y-6">
          <div className="text-center">
            <div className="inline-block px-5 py-3 bg-purple-600 text-white rounded-full font-bold text-2xl mb-3">
              IELTS Band {ieltsBand}
            </div>
            <p className="text-lg text-muted-foreground">{bandDescription}</p>
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
          
          <div className="text-center pb-4">
            <div className="inline-block px-4 py-2 bg-brand-navy/10 rounded-md font-medium mb-2">
              CEFR Level: <span className="font-bold">{cefrLevel}</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-center">Section Breakdown</h4>
            <div className="grid grid-cols-2 gap-3">
              {mockSectionScores.map(section => (
                <div key={section.name} className="p-3 border rounded-md">
                  <div className="text-sm text-muted-foreground">{section.name}</div>
                  <div className="font-semibold">{section.score}%</div>
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
              onClick={handleWhatsAppShare}
            >
              Share Results & Get Help
            </Button>
            
            <Button 
              className="flex-1 bg-green-500 hover:bg-green-600" 
              onClick={handleWhatsAppShare}
            >
              Contact via WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
        <Button variant="outline" onClick={onRestart}>
          Take Test Again
        </Button>
      </div>
    </div>
  );
};

const Test = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  
  // Check if we have returned from completing a test
  const locationState = location.state as { testCompleted?: boolean, answers?: string[] } | null;
  
  // Effect to handle test completion from the TestQuestions component
  useState(() => {
    if (locationState?.testCompleted) {
      // Calculate correct answers - this would be more sophisticated in a real app
      const simulatedCorrectAnswers = Math.round((locationState.answers?.length || 0) * 0.7);
      setCorrectAnswers(simulatedCorrectAnswers);
      setTestCompleted(true);
    }
  });

  // Handle user starting the test
  const startTest = () => {
    setTestStarted(true);
    setTestCompleted(false);
  };

  const restartTest = () => {
    setTestStarted(false);
    setTestCompleted(false);
    setCorrectAnswers(0);
    navigate('/test', { replace: true });
  };

  const toggleQuestions = () => {
    setShowQuestions(!showQuestions);
  };

  // Determine which content to show based on test state
  let content;
  if (showQuestions) {
    content = <StudyQuestions />;
  } else if (!testStarted) {
    content = <QuizIntro onStartTest={startTest} />;
  } else if (testCompleted) {
    content = <TestResults 
      correctAnswers={correctAnswers} 
      totalQuestions={20} 
      onRestart={restartTest}
    />;
  } else {
    content = <TestQuestions />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <WelcomeDialog />
      
      <main className="flex-grow py-24 px-4 bg-gradient-to-br from-white via-gray-50 to-purple-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-end mb-4">
            <Button 
              onClick={toggleQuestions} 
              variant="outline" 
              className="border-purple-500 text-purple-700 hover:bg-purple-50"
            >
              {showQuestions ? "Take Placement Test" : "Practice Speaking & Writing"}
            </Button>
          </div>
          {content}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Test;
