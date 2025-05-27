import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CEFRScore, CEFRLevel, ScoreSection } from "@/components/CEFRScore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Book, Award, Star } from "lucide-react";
import { StudyQuestions } from "@/components/StudyQuestions";
import { TestQuestions } from "@/components/TestQuestions";
import { AssessmentResults } from "@/components/AssessmentResults";

// IELTS band descriptions aligned with CEFR levels
interface IELTSBandDescription {
  band: string;
  description: string;
  cefrLevel: CEFRLevel;
}
const ieltsDescriptions: IELTSBandDescription[] = [{
  band: "9",
  description: "Expert User: complete operational command of English with perfect accuracy, appropriateness, fluency and complete understanding",
  cefrLevel: "C2"
}, {
  band: "8-8.5",
  description: "Very Good to Expert User: fully operational command with only occasional inaccuracies; handles complex detailed argumentation well",
  cefrLevel: "C2"
}, {
  band: "7-7.5",
  description: "Good User: operational command of English, though with occasional inaccuracies and misunderstandings in some situations",
  cefrLevel: "C1"
}, {
  band: "6-6.5",
  description: "Competent User: generally effective command of English despite some inaccuracies and misunderstandings",
  cefrLevel: "B2"
}, {
  band: "5-5.5",
  description: "Modest User: partial command of English, coping with overall meaning in most situations, though likely to make many mistakes",
  cefrLevel: "B1"
}, {
  band: "4-4.5",
  description: "Limited User: basic competence limited to familiar situations with frequent problems in understanding and expression",
  cefrLevel: "A2"
}, {
  band: "3-3.5",
  description: "Extremely Limited User: conveys and understands only general meaning in very familiar situations",
  cefrLevel: "A1"
}, {
  band: "1-2.5",
  description: "Non to Intermittent User: essentially has no ability to use the language beyond possibly a few isolated words",
  cefrLevel: "A0"
}];

// Calculate CEFR level and IELTS band based on test score
const calculateResults = (correctAnswers: number, totalQuestions: number) => {
  const score = correctAnswers / totalQuestions * 100;
  let cefrLevel: CEFRLevel;
  let ieltsBand: string;
  let toeflScore: number;
  let pteScore: number;
  if (score >= 95) {
    cefrLevel = "C2";
    ieltsBand = "9";
    toeflScore = 118;
    pteScore = 87;
  } else if (score >= 85) {
    cefrLevel = "C2";
    ieltsBand = "8-8.5";
    toeflScore = 110;
    pteScore = 82;
  } else if (score >= 75) {
    cefrLevel = "C1";
    ieltsBand = "7-7.5";
    toeflScore = 100;
    pteScore = 73;
  } else if (score >= 65) {
    cefrLevel = "B2";
    ieltsBand = "6-6.5";
    toeflScore = 87;
    pteScore = 59;
  } else if (score >= 50) {
    cefrLevel = "B1";
    ieltsBand = "5-5.5";
    toeflScore = 72;
    pteScore = 47;
  } else if (score >= 35) {
    cefrLevel = "A2";
    ieltsBand = "4-4.5";
    toeflScore = 57;
    pteScore = 35;
  } else if (score >= 20) {
    cefrLevel = "A1";
    ieltsBand = "3-3.5";
    toeflScore = 42;
    pteScore = 26;
  } else {
    cefrLevel = "A0";
    ieltsBand = "1-2.5";
    toeflScore = 30;
    pteScore = 20;
  }
  return {
    cefrLevel,
    ieltsBand,
    overallScore: Math.round(score),
    toeflScore,
    pteScore
  };
};

// Service Icons Component
const ServiceIcons = () => {
  const services = [{
    icon: <Book className="h-8 w-8" />,
    title: "**Free IELTS Resources**",
    description: "Access top-quality study resources"
  }, {
    icon: <Award className="h-8 w-8" />,
    title: "Professional Assessment",
    description: "Get evaluated by certified examiners"
  }, {
    icon: <Star className="h-8 w-8" />,
    title: "Personalized Guidance",
    description: "One-on-one mentoring sessions"
  }];
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {services.map((service, index) => {})}
    </div>;
};

// Quiz Intro Component
const QuizIntro = ({
  onStartTest,
  onShowPractice
}: {
  onStartTest: () => void;
  onShowPractice: () => void;
}) => {
  return <div className="max-w-4xl mx-auto text-center">
      <h1 className="font-playfair font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text mb-6 text-purple-700 text-lg my-0 py-[108px]">Free IELTS Placement Test 
20-minute online test with 20 CEFR-aligned questions Instant results with estimated IELTS band score Personalized feedback to guide preparation Submit speaking/writing samples for expert evaluation Results in 48 hours via email or WhatsApp Accurate (IELTS/CEFR standards), fast, personalized, secure</h1>
      
      <div className="mb-8 p-8 bg-white rounded-2xl shadow-xl border border-purple-200">
        <p className="text-xl mb-6 leading-relaxed font-bold text-slate-950 text-center">آزمون تعیین سطح رایگان آیلتس آزمون آنلاین ۲۰ دقیقه‌ای با ۲۰ سؤال هم‌راستا با CEFR نتایج فوری با تخمین نمره آیلتس 
بازخورد شخصی‌سازی‌شده برای هدایت آماده‌سازی ارسال نمونه‌های گفتار/نوشتن برای ارزیابی تخصصی نتایج در ۴۸ ساعت از طریق ایمیل یا واتس‌اپ دقیق، سریع، شخصی‌سازی‌شده، امن</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          
          
          
          
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 h-auto text-lg font-bold shadow-lg transform hover:scale-105 transition-all" onClick={onStartTest}>
            Start Your Assessment Now
          </Button>
          <Button variant="outline" className="border-2 border-purple-500 text-purple-700 hover:bg-purple-50 px-8 py-6 h-auto text-lg font-bold shadow-lg transform hover:scale-105 transition-all" onClick={onShowPractice}>
            Speaking & Writing Assessment
          </Button>
        </div>
      </div>
      
      <ServiceIcons />
      
      <div className="p-8 bg-gradient-to-r from-blue-500/20 via-purple-500/40 to-indigo-400/30 rounded-2xl mt-8 shadow-xl border border-white/40">
        <p className="font-bold text-brand-navy text-2xl">
          <span className="bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text">
            Free IELTS Resources, consultation, and materials 
          </span>
          <br />
          <span className="text-xl mt-2 inline-block">
            for learners taking online classes
          </span>
        </p>
      </div>
    </div>;
};
const Test = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(20);

  // Check if we have returned from completing a test
  const locationState = location.state as {
    testCompleted?: boolean;
    answers?: string[];
    correctAnswers?: number;
    totalQuestions?: number;
  } | null;

  // Check for practice parameter in URL
  const searchParams = new URLSearchParams(location.search);
  const shouldShowPractice = searchParams.get('practice') === 'true';

  // Effect to handle practice parameter and test completion
  useEffect(() => {
    if (shouldShowPractice) {
      setShowQuestions(true);
    }
    if (locationState?.testCompleted) {
      // Use actual correct answers from the test
      const actualCorrectAnswers = locationState.correctAnswers || 0;
      const actualTotalQuestions = locationState.totalQuestions || 20;
      setCorrectAnswers(actualCorrectAnswers);
      setTotalQuestions(actualTotalQuestions);
      setTestCompleted(true);
    }
  }, [locationState, shouldShowPractice]);

  // Handle user starting the test
  const startTest = () => {
    setTestStarted(true);
    setTestCompleted(false);
  };
  const restartTest = () => {
    setTestStarted(false);
    setTestCompleted(false);
    setCorrectAnswers(0);
    navigate('/test', {
      replace: true
    });
  };
  const showPractice = () => {
    setShowQuestions(true);
  };

  // Calculate mock section scores for result display
  const getMockSectionScores = (): ScoreSection[] => {
    const baseScore = correctAnswers / totalQuestions * 100;
    return [{
      name: "Grammar",
      score: Math.max(0, Math.min(100, baseScore + Math.random() * 10 - 5))
    }, {
      name: "Vocabulary",
      score: Math.max(0, Math.min(100, baseScore + Math.random() * 10 - 5))
    }];
  };

  // Get results for display
  const getResults = () => {
    const results = calculateResults(correctAnswers, totalQuestions);
    return {
      ...results,
      sectionScores: getMockSectionScores()
    };
  };

  // Determine which content to show based on test state
  let content;
  if (showQuestions) {
    content = <StudyQuestions />;
  } else if (!testStarted) {
    content = <QuizIntro onStartTest={startTest} onShowPractice={showPractice} />;
  } else if (testCompleted) {
    const results = getResults();
    content = <AssessmentResults correctAnswers={correctAnswers} totalQuestions={totalQuestions} cefrLevel={results.cefrLevel} ieltsBand={results.ieltsBand} toeflScore={results.toeflScore} pteScore={results.pteScore} sectionScores={results.sectionScores} onRestart={restartTest} onPractice={showPractice} />;
  } else {
    content = <TestQuestions />;
  }
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-32 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 min-h-screen">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-end mb-6">
            <Button onClick={() => setShowQuestions(!showQuestions)} variant="outline" className="border-2 border-purple-500 text-purple-700 hover:bg-purple-50 font-bold shadow-md transform hover:scale-105 transition-all">
              {showQuestions ? "Take Placement Test" : "Speaking & Writing Assessment"}
            </Button>
          </div>
          {content}
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default Test;