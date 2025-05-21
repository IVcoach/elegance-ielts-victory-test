import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TestProgressBar } from "@/components/TestProgressBar";
import { Question, QuestionCard } from "@/components/QuestionCard";
import { CEFRScore, CEFRLevel, ScoreSection } from "@/components/CEFRScore";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Share } from "lucide-react";

// Sample questions data - in a real app, this would come from an API
const sampleQuestions: Question[] = [
  {
    id: "1",
    text: "Choose the correct sentence:",
    options: [
      { id: "a", text: "I have been to London last year." },
      { id: "b", text: "I went to London last year.", isCorrect: true },
      { id: "c", text: "I have gone to London last year." },
    ],
    section: "Grammar",
  },
  {
    id: "2",
    text: "What is the synonym of 'happy'?",
    options: [
      { id: "a", text: "Sad" },
      { id: "b", text: "Joyful", isCorrect: true },
      { id: "c", text: "Angry" },
    ],
    section: "Vocabulary",
  },
  {
    id: "3",
    text: "Which word does NOT belong?",
    options: [
      { id: "a", text: "Apple" },
      { id: "b", text: "Banana" },
      { id: "c", text: "Car", isCorrect: true },
    ],
    section: "Vocabulary",
  },
  {
    id: "4",
    text: "I ... tennis every Sunday morning.",
    options: [
      { id: "a", text: "play", isCorrect: true },
      { id: "b", text: "am playing" },
      { id: "c", text: "playing" },
    ],
    section: "Grammar",
  },
  {
    id: "5",
    text: "Choose the correct sentence:",
    options: [
      { id: "a", text: "She don't like pizza." },
      { id: "b", text: "She doesn't likes pizza." },
      { id: "c", text: "She doesn't like pizza.", isCorrect: true },
    ],
    section: "Grammar",
  },
  {
    id: "6",
    text: "What is the opposite of 'generous'?",
    options: [
      { id: "a", text: "Kind" },
      { id: "b", text: "Selfish", isCorrect: true },
      { id: "c", text: "Friendly" },
    ],
    section: "Vocabulary",
  },
  {
    id: "7",
    text: "Which word does NOT belong?",
    options: [
      { id: "a", text: "Book" },
      { id: "b", text: "Pencil" },
      { id: "c", text: "Computer", isCorrect: true },
    ],
    section: "Vocabulary",
  },
  {
    id: "8",
    text: "They ... to the party last night.",
    options: [
      { id: "a", text: "go" },
      { id: "b", text: "went", isCorrect: true },
      { id: "c", text: "gone" },
    ],
    section: "Grammar",
  },
  {
    id: "9",
    text: "Choose the correct sentence:",
    options: [
      { id: "a", text: "He have a car." },
      { id: "b", text: "He has a car.", isCorrect: true },
      { id: "c", text: "He having a car." },
    ],
    section: "Grammar",
  },
  {
    id: "10",
    text: "What is the synonym of 'difficult'?",
    options: [
      { id: "a", text: "Easy" },
      { id: "b", text: "Hard", isCorrect: true },
      { id: "c", text: "Simple" },
    ],
    section: "Vocabulary",
  },
];

// In a real app, this would be a more sophisticated algorithm
const calculateCEFRLevel = (correctAnswers: number, totalQuestions: number): CEFRLevel => {
  const percentage = (correctAnswers / totalQuestions) * 100;
  
  if (percentage >= 90) {
    return "C2";
  } else if (percentage >= 80) {
    return "C1";
  } else if (percentage >= 70) {
    return "B2";
  } else if (percentage >= 60) {
    return "B1";
  } else if (percentage >= 50) {
    return "A2";
  } else {
    return "A1";
  }
};

const Test = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [testCompleted, setTestCompleted] = useState(false);
  const [cefrLevel, setCefrLevel] = useState<CEFRLevel | null>(null);
  const [overallScore, setOverallScore] = useState(0);
  const [sectionScores, setSectionScores] = useState<ScoreSection[]>([]);
  
  // This would typically be handled server-side in a real app
  const handleAnswer = (answerId: string) => {
    const newAnswers = [...answers, answerId];
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < sampleQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      completeTest(newAnswers);
    }
  };
  
  const completeTest = (finalAnswers: string[]) => {
    // Simulate scoring - in a real app, this would be more sophisticated
    const correctAnswersCount = 6; // Mock value - would be calculated based on actual answers
    const totalScore = (correctAnswersCount / sampleQuestions.length) * 100;
    const level = calculateCEFRLevel(correctAnswersCount, sampleQuestions.length);
    
    // Set mock section scores
    const mockSectionScores: ScoreSection[] = [
      { name: "Grammar", score: 75 },
      { name: "Vocabulary", score: 85 },
      { name: "Reading", score: 70 },
      { name: "Listening", score: 80 }
    ];
    
    setCefrLevel(level);
    setOverallScore(Math.round(totalScore));
    setSectionScores(mockSectionScores);
    setTestCompleted(true);
    
    toast({
      title: "Test Completed!",
      description: "Your results have been calculated.",
    });
  };
  
  const handleShare = () => {
    // Construct a message to share on Telegram
    const shareText = `I just took the V&C Elegance IELTS Placement Test and scored at CEFR level ${cefrLevel} (${overallScore}%)! Join the community to prepare for your IELTS exam: https://t.me/ieltsvc`;
    
    // Create a Telegram sharing URL
    const telegramUrl = `https://t.me/share/url?url=https://vcelegance-ielts.com&text=${encodeURIComponent(shareText)}`;
    
    // Open the sharing dialog
    window.open(telegramUrl, '_blank', 'noopener,noreferrer');
    
    toast({
      title: "Sharing Results",
      description: "Thank you for sharing your results on Telegram!",
    });
  };
  
  const handleDownloadCertificate = () => {
    // In a real app, this would generate a PDF certificate
    toast({
      title: "Certificate Download",
      description: "Your certificate would be generated and downloaded (mock functionality).",
    });
  };
  
  const handleJoinTelegram = () => {
    window.open("https://t.me/ieltsvc", "_blank", "noopener,noreferrer");
  };
  
  const restartTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setTestCompleted(false);
    setCefrLevel(null);
    setOverallScore(0);
    setSectionScores([]);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          {!testCompleted ? (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-playfair font-bold text-brand-navy mb-2">
                  IELTS Placement Test
                </h1>
                <p className="text-gray-600">
                  Answer the questions below to determine your current English level.
                </p>
              </div>
              
              <TestProgressBar 
                currentQuestion={currentQuestionIndex + 1}
                totalQuestions={sampleQuestions.length}
                className="mb-8"
              />
              
              <QuestionCard
                question={sampleQuestions[currentQuestionIndex]}
                onAnswer={handleAnswer}
                isLast={currentQuestionIndex === sampleQuestions.length - 1}
              />
            </div>
          ) : (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-playfair font-bold text-brand-navy mb-2">
                  Your Results
                </h1>
                <p className="text-gray-600">
                  Based on your test performance, we've assessed your English proficiency.
                </p>
              </div>
              
              {cefrLevel && (
                <CEFRScore
                  level={cefrLevel}
                  overallScore={overallScore}
                  sections={sectionScores}
                  onShare={handleShare}
                  onDownloadCertificate={handleDownloadCertificate}
                />
              )}
              
              <div className="border rounded-lg p-6 bg-brand-blue/5 flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-[#0088cc] text-white rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zm-2.47-11.5l5.27 2.63c.35.18.27.85-.12.94l-5.1 1.2c-.38.09-.78-.28-.6-.64l.55-4.13zm.86-2.95l6.69 2.7c.37.15.22.71-.19.65l-5.95-.58c-.32-.03-.4-.5-.09-.58l-.46-2.19z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Join Our IELTS Preparation Channel</h3>
                <p className="text-muted-foreground mb-4">
                  Get daily tips, practice exercises, and connect with other test-takers in our Telegram community.
                </p>
                <Button 
                  onClick={handleJoinTelegram}
                  className="bg-[#0088cc] hover:bg-[#0088cc]/90 flex gap-2"
                >
                  <Share size={18} />
                  <span>Join @ieltsvc on Telegram</span>
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                <Button variant="outline" onClick={restartTest}>
                  Take Test Again
                </Button>
                <Button onClick={() => navigate("/dashboard")}>
                  Go to Dashboard
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Test;
