import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TestProgressBar } from "@/components/TestProgressBar";
import { Question, QuestionCard } from "@/components/QuestionCard";
import { CEFRScore, CEFRLevel, ScoreSection } from "@/components/CEFRScore";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

// Sample questions data - in a real app, this would come from an API
const sampleQuestions: Question[] = [
  {
    id: "q1",
    type: "multiple-choice",
    text: "Choose the correct option to complete the sentence: She _____ to the store yesterday.",
    options: [
      { id: "a", text: "go" },
      { id: "b", text: "goes" },
      { id: "c", text: "went" },
      { id: "d", text: "gone" }
    ],
    difficulty: "A2"
  },
  {
    id: "q2",
    type: "fill-in-blank",
    text: "The capital of France is _____.",
    difficulty: "A1"
  },
  {
    id: "q3",
    type: "multiple-choice",
    text: "Which of the following is a mammal?",
    options: [
      { id: "a", text: "Snake" },
      { id: "b", text: "Eagle" },
      { id: "c", text: "Whale" },
      { id: "d", text: "Lizard" }
    ],
    difficulty: "A2"
  },
  {
    id: "q4",
    type: "listening",
    text: "Listen to the audio and choose the correct answer.",
    audioUrl: "/audio/sample-audio.mp3",
    options: [
      { id: "a", text: "Option A" },
      { id: "b", text: "Option B" },
      { id: "c", text: "Option C" },
      { id: "d", text: "Option D" }
    ],
    difficulty: "B1"
  },
  {
    id: "q5",
    type: "reading",
    text: "Read the passage and answer the question.",
    readingPassage: "This is a sample reading passage. Read it carefully to answer the question.",
    options: [
      { id: "a", text: "Answer A" },
      { id: "b", text: "Answer B" },
      { id: "c", text: "Answer C" },
      { id: "d", text: "Answer D" }
    ],
    difficulty: "B2"
  },
  {
    id: "q6",
    type: "multiple-choice",
    text: "What is the opposite of 'happy'?",
    options: [
      { id: "a", text: "Joyful" },
      { id: "b", text: "Sad" },
      { id: "c", text: "Excited" },
      { id: "d", text: "Content" }
    ],
    difficulty: "A1"
  },
  {
    id: "q7",
    type: "fill-in-blank",
    text: "I _____ a book every night before bed.",
    difficulty: "A2"
  },
  {
    id: "q8",
    type: "multiple-choice",
    text: "Which of these is a primary color?",
    options: [
      { id: "a", text: "Green" },
      { id: "b", text: "Orange" },
      { id: "c", text: "Blue" },
      { id: "d", text: "Purple" }
    ],
    difficulty: "B1"
  },
  {
    id: "q9",
    type: "listening",
    text: "Listen to the audio and choose the correct answer.",
    audioUrl: "/audio/sample-audio.mp3",
    options: [
      { id: "a", text: "Option A" },
      { id: "b", text: "Option B" },
      { id: "c", text: "Option C" },
      { id: "d", text: "Option D" }
    ],
    difficulty: "B2"
  },
  {
    id: "q10",
    type: "reading",
    text: "Read the passage and answer the question.",
    readingPassage: "This is another sample reading passage. Read it carefully to answer the question.",
    options: [
      { id: "a", text: "Answer A" },
      { id: "b", text: "Answer B" },
      { id: "c", text: "Answer C" },
      { id: "d", text: "Answer D" }
    ],
    difficulty: "C1"
  }
];

// In a real app, this would be a more sophisticated algorithm
const calculateCEFRLevel = (correctAnswers: number, totalQuestions: number): CEFRLevel => {
  const score = (correctAnswers / totalQuestions) * 100;
  
  if (score >= 95) return "C2";
  if (score >= 85) return "C1";
  if (score >= 75) return "B2";
  if (score >= 60) return "B1";
  if (score >= 45) return "A2";
  if (score >= 30) return "A1";
  return "A0";
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
    // Open Telegram channel in new window
    window.open("https://t.me/ieltsvc", "_blank", "noopener,noreferrer");
    
    toast({
      title: "Sharing Results",
      description: "Join our Telegram channel @ieltsvc to share your results and get help.",
    });
  };
  
  const handleDownloadCertificate = () => {
    // In a real app, this would generate a PDF certificate
    toast({
      title: "Certificate Download",
      description: "Your certificate would be generated and downloaded (mock functionality).",
    });
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
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                <Button variant="outline" onClick={restartTest}>
                  Take Test Again
                </Button>
                <Button asChild>
                  <a href="https://t.me/ieltsvc" target="_blank" rel="noopener noreferrer">
                    Join Telegram @ieltsvc
                  </a>
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
