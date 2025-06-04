import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CEFRScore, CEFRLevel, ScoreSection } from "@/components/CEFRScore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Book, Award, Star, Shield, Zap, MessageSquare, UserCheck, Clock } from "lucide-react";
import { StudyQuestions } from "@/components/StudyQuestions";
import { TestQuestions } from "@/components/TestQuestions";
import { AssessmentResults } from "@/components/AssessmentResults";
import { CheckCircle } from "lucide-react";

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
      {services.map((service, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <div className="flex items-center justify-center mb-4 text-purple-600">
            {service.icon}
          </div>
          <h3 className="text-lg text-brand-navy text-center mb-2 font-semibold">
            {service.title.includes("**") ? <span className="text-lg font-semibold text-brand-navy text-center mb-2">{service.title.replace(/\*\*/g, "")}</span> : service.title}
          </h3>
          <p className="text-center text-gray-600">{service.description}</p>
        </div>)}
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
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Professional IELTS Placement Test
      </h1>
      <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
        Comprehensive 20-minute assessment with CEFR-aligned questions for accurate IELTS band estimation
      </p>
      
      {/* Enhanced Officially Verified Assessment Section with Visual Symbols */}
      <div className="mb-8 p-8 bg-white rounded-2xl shadow-xl border border-gray-200 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-x-16 -translate-y-16 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-green-100 to-blue-100 rounded-full translate-x-20 translate-y-20 opacity-50"></div>
        
        {/* Header with Shield Icon */}
        <div className="relative z-10 mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full shadow-lg">
              <Shield className="h-10 w-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Officially Verified Assessment</h2>
          <div className="flex items-center justify-center gap-2 text-blue-800 font-semibold text-lg">
            <Award className="h-5 w-5" />
            <span>Cambridge University CERF Standards & IDP Education Protocols</span>
            <Award className="h-5 w-5" />
          </div>
        </div>
        
        {/* Feature cards with enhanced visual design */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="group hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-green-600 p-3 rounded-full group-hover:rotate-12 transition-transform">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Instant Results</h3>
              </div>
              <p className="text-gray-700">Get your estimated IELTS band score immediately</p>
              <div className="mt-3 flex justify-end">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <div className="group hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-blue-600 p-3 rounded-full group-hover:rotate-12 transition-transform">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Professional Feedback</h3>
              </div>
              <p className="text-gray-700">Personalized guidance for improvement</p>
              <div className="mt-3 flex justify-end">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <div className="group hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border-2 border-purple-200 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-purple-600 p-3 rounded-full group-hover:rotate-12 transition-transform">
                  <UserCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Expert Assessment</h3>
              </div>
              <p className="text-gray-700">Submit speaking/writing for detailed evaluation</p>
              <div className="mt-3 flex justify-end">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <div className="group hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border-2 border-orange-200 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-orange-600 p-3 rounded-full group-hover:rotate-12 transition-transform">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Secure & Accurate</h3>
              </div>
              <p className="text-gray-700">Results delivered within 48 hours</p>
              <div className="mt-3 flex justify-end">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action buttons with enhanced styling */}
        <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-6 mt-8">
          <Button className="professional-button text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all" onClick={onStartTest}>
            <CheckCircle className="h-5 w-5 mr-2" />
            Start Professional Assessment
          </Button>
          <Button variant="outline" className="border-2 border-blue-800 text-blue-800 hover:bg-blue-50 px-8 py-4 h-auto text-lg font-bold shadow-md transform hover:scale-105 transition-all" onClick={onShowPractice}>
            <MessageSquare className="h-5 w-5 mr-2" />
            Speaking & Writing Assessment
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="relative z-10 mt-8 flex items-center justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            <span>ISO Certified</span>
          </div>
        </div>
      </div>
      
      <ServiceIcons />
      
      <div className="p-8 bg-gradient-to-r from-gray-100 via-blue-50 to-gray-100 rounded-2xl mt-8 shadow-xl border border-gray-200">
        <p className="font-bold text-gray-900 text-2xl">
          <span className="text-blue-800">
            Professional IELTS Resources & Consultation
          </span>
          <br />
          <span className="text-xl mt-2 inline-block text-gray-700">
            Available for students enrolled in our coaching program
          </span>
        </p>
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
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-32 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-end mb-6">
            <Button onClick={() => setShowQuestions(!showQuestions)} variant="outline" className="border-2 border-blue-800 text-blue-800 hover:bg-blue-50 font-bold shadow-md transform hover:scale-105 transition-all">
              {showQuestions ? "Take Placement Test" : "Speaking & Writing Assessment"}
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
