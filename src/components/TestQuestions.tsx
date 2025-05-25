
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TestProgressBar } from "@/components/TestProgressBar";
import { Question, QuestionCard } from "@/components/QuestionCard";
import { ArrowLeft, BookOpen, Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Enhanced IELTS-style multiple choice questions
const testQuestions: Question[] = [
  {
    id: "q1",
    type: "multiple-choice",
    text: "Choose the most appropriate word to complete the sentence: The research findings were _____ with previous studies.",
    options: [
      { id: "a", text: "consistent" },
      { id: "b", text: "constant" },
      { id: "c", text: "insistent" },
      { id: "d", text: "persistent" }
    ],
    difficulty: "B2"
  },
  
  {
    id: "q2",
    type: "multiple-choice",
    text: "Which sentence demonstrates the correct use of the past perfect tense?",
    options: [
      { id: "a", text: "I had finished my homework when she called." },
      { id: "b", text: "I finished my homework when she had called." },
      { id: "c", text: "I have finished my homework when she called." },
      { id: "d", text: "I was finishing my homework when she called." }
    ],
    difficulty: "B2"
  },

  {
    id: "q3",
    type: "multiple-choice",
    text: "Select the phrase that best expresses disagreement in a formal context:",
    options: [
      { id: "a", text: "I totally disagree with you." },
      { id: "b", text: "That's completely wrong." },
      { id: "c", text: "I'm afraid I must respectfully disagree." },
      { id: "d", text: "You're not right about that." }
    ],
    difficulty: "C1"
  },

  {
    id: "q4",
    type: "multiple-choice",
    text: "Choose the correct modal verb: Students _____ submit their assignments by Friday.",
    options: [
      { id: "a", text: "can" },
      { id: "b", text: "must" },
      { id: "c", text: "might" },
      { id: "d", text: "would" }
    ],
    difficulty: "B1"
  },

  {
    id: "q5",
    type: "multiple-choice",
    text: "Which word best fits the academic context: The study _____ significant improvements in student performance.",
    options: [
      { id: "a", text: "showed" },
      { id: "b", text: "demonstrated" },
      { id: "c", text: "proved" },
      { id: "d", text: "displayed" }
    ],
    difficulty: "C1"
  },

  {
    id: "q6",
    type: "multiple-choice",
    text: "Select the grammatically correct conditional sentence:",
    options: [
      { id: "a", text: "If I would have time, I will help you." },
      { id: "b", text: "If I have time, I would help you." },
      { id: "c", text: "If I had time, I would help you." },
      { id: "d", text: "If I will have time, I help you." }
    ],
    difficulty: "B2"
  },

  {
    id: "q7",
    type: "multiple-choice",
    text: "Choose the most sophisticated way to express cause and effect:",
    options: [
      { id: "a", text: "Because of the rain, we stayed home." },
      { id: "b", text: "The rain made us stay home." },
      { id: "c", text: "Due to inclement weather conditions, we remained indoors." },
      { id: "d", text: "It rained so we didn't go out." }
    ],
    difficulty: "C2"
  },

  {
    id: "q8",
    type: "multiple-choice",
    text: "Which phrase correctly uses the subjunctive mood?",
    options: [
      { id: "a", text: "I suggest that he comes early." },
      { id: "b", text: "I suggest that he come early." },
      { id: "c", text: "I suggest that he will come early." },
      { id: "d", text: "I suggest that he is coming early." }
    ],
    difficulty: "C1"
  },

  {
    id: "q9",
    type: "multiple-choice",
    text: "Select the appropriate preposition: The success of the project depends _____ effective teamwork.",
    options: [
      { id: "a", text: "in" },
      { id: "b", text: "on" },
      { id: "c", text: "with" },
      { id: "d", text: "for" }
    ],
    difficulty: "B1"
  },

  {
    id: "q10",
    type: "multiple-choice",
    text: "Choose the word that best completes the sentence: The professor's lecture was both _____ and enlightening.",
    options: [
      { id: "a", text: "informative" },
      { id: "b", text: "informational" },
      { id: "c", text: "informed" },
      { id: "d", text: "information" }
    ],
    difficulty: "B2"
  },

  {
    id: "q11",
    type: "multiple-choice",
    text: "Which sentence uses the correct article?",
    options: [
      { id: "a", text: "She is studying the medicine at university." },
      { id: "b", text: "She is studying medicine at the university." },
      { id: "c", text: "She is studying medicine at university." },
      { id: "d", text: "She is studying a medicine at university." }
    ],
    difficulty: "B2"
  },

  {
    id: "q12",
    type: "multiple-choice",
    text: "Select the most formal way to introduce a contrasting idea:",
    options: [
      { id: "a", text: "But on the other hand" },
      { id: "b", text: "However" },
      { id: "c", text: "Nevertheless" },
      { id: "d", text: "Conversely" }
    ],
    difficulty: "C1"
  },

  {
    id: "q13",
    type: "multiple-choice",
    text: "Choose the correct form: _____ the meeting starts, please turn off your phones.",
    options: [
      { id: "a", text: "Before" },
      { id: "b", text: "Until" },
      { id: "c", text: "During" },
      { id: "d", text: "While" }
    ],
    difficulty: "B1"
  },

  {
    id: "q14",
    type: "multiple-choice",
    text: "Which word correctly completes the sentence: The research methodology was _____ designed.",
    options: [
      { id: "a", text: "careful" },
      { id: "b", text: "carefully" },
      { id: "c", text: "care" },
      { id: "d", text: "caring" }
    ],
    difficulty: "B2"
  },

  {
    id: "q15",
    type: "multiple-choice",
    text: "Select the sentence with correct parallel structure:",
    options: [
      { id: "a", text: "The course covers writing, reading, and how to speak." },
      { id: "b", text: "The course covers writing, reading, and speaking." },
      { id: "c", text: "The course covers to write, reading, and speaking." },
      { id: "d", text: "The course covers writing, to read, and speaking." }
    ],
    difficulty: "C1"
  },

  {
    id: "q16",
    type: "multiple-choice",
    text: "Choose the most appropriate academic vocabulary: The findings _____ the hypothesis.",
    options: [
      { id: "a", text: "support" },
      { id: "b", text: "help" },
      { id: "c", text: "back up" },
      { id: "d", text: "corroborate" }
    ],
    difficulty: "C2"
  },

  {
    id: "q17",
    type: "multiple-choice",
    text: "Which sentence correctly uses the passive voice?",
    options: [
      { id: "a", text: "The experiment was conducted by the researchers." },
      { id: "b", text: "The experiment was conducting by the researchers." },
      { id: "c", text: "The experiment conducted by the researchers." },
      { id: "d", text: "The experiment has conducted by the researchers." }
    ],
    difficulty: "B2"
  },

  {
    id: "q18",
    type: "multiple-choice",
    text: "Select the correct relative pronoun: The book _____ I recommended is available in the library.",
    options: [
      { id: "a", text: "which" },
      { id: "b", text: "that" },
      { id: "c", text: "who" },
      { id: "d", text: "whom" }
    ],
    difficulty: "B2"
  },

  {
    id: "q19",
    type: "multiple-choice",
    text: "Choose the phrase that indicates uncertainty in academic writing:",
    options: [
      { id: "a", text: "It is certain that" },
      { id: "b", text: "It is possible that" },
      { id: "c", text: "It is definite that" },
      { id: "d", text: "It is obvious that" }
    ],
    difficulty: "C1"
  },

  {
    id: "q20",
    type: "multiple-choice",
    text: "Which sentence demonstrates the most advanced level of English?",
    options: [
      { id: "a", text: "The study shows good results." },
      { id: "b", text: "The study demonstrates positive outcomes." },
      { id: "c", text: "The empirical investigation yields compelling evidence of favorable outcomes." },
      { id: "d", text: "The research has good findings." }
    ],
    difficulty: "C2"
  }
];

// Correct answers for the questions
const correctAnswers: { [key: string]: string } = {
  "q1": "a", // consistent
  "q2": "a", // had finished (past perfect)
  "q3": "c", // respectfully disagree
  "q4": "b", // must
  "q5": "b", // demonstrated
  "q6": "c", // correct conditional
  "q7": "c", // sophisticated expression
  "q8": "b", // subjunctive mood
  "q9": "b", // depends on
  "q10": "a", // informative
  "q11": "c", // correct article usage
  "q12": "d", // conversely (most formal)
  "q13": "a", // before
  "q14": "b", // carefully (adverb)
  "q15": "b", // parallel structure
  "q16": "d", // corroborate (most academic)
  "q17": "a", // correct passive voice
  "q18": "b", // that (defining relative clause)
  "q19": "b", // uncertainty (it is possible)
  "q20": "c", // most advanced English
};

// IELTS assessment related images for the carousel
const assessmentImages = [
  "/placeholder.svg", // Will be replaced with uploaded images
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg"
];

export function TestQuestions() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});

  // Handle user's answer
  const handleAnswer = (answerId: string) => {
    const currentQuestion = testQuestions[currentQuestionIndex];
    const newAnswers = [...answers, answerId];
    const newUserAnswers = { ...userAnswers, [currentQuestion.id]: answerId };
    
    setAnswers(newAnswers);
    setUserAnswers(newUserAnswers);
    
    if (currentQuestionIndex < testQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      toast({
        title: "Answer recorded",
        description: `Moving to question ${currentQuestionIndex + 2} of ${testQuestions.length}`,
        duration: 2000
      });
    } else {
      // Calculate accurate score
      let correctCount = 0;
      Object.keys(newUserAnswers).forEach(questionId => {
        if (correctAnswers[questionId] === newUserAnswers[questionId]) {
          correctCount++;
        }
      });
      
      toast({
        title: "Test completed!",
        description: "Calculating your results...",
        duration: 2000
      });
      
      setTimeout(() => {
        navigate('/test', { 
          state: { 
            testCompleted: true, 
            answers: newAnswers,
            correctAnswers: correctCount,
            totalQuestions: testQuestions.length
          } 
        });
      }, 1000);
    }
  };

  const goBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      // Remove the last answer
      setAnswers(answers.slice(0, -1));
      // Remove the last user answer
      const currentQuestion = testQuestions[currentQuestionIndex];
      const newUserAnswers = { ...userAnswers };
      delete newUserAnswers[currentQuestion.id];
      setUserAnswers(newUserAnswers);
    } else {
      navigate('/test');
    }
  };

  const handleTelegramResources = () => {
    window.open("https://t.me/ieltsvc", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-8 rounded-2xl shadow-xl">
      <div className="text-center mb-8 bg-white p-6 rounded-xl shadow-md border border-purple-200">
        <div className="flex items-center justify-center gap-3 mb-4">
          <BookOpen className="h-8 w-8 text-purple-600" />
          <h1 className="text-3xl font-playfair font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-transparent bg-clip-text">
            IELTS Assessment Test
          </h1>
        </div>
        <p className="text-gray-600 text-lg mb-6">
          Complete this comprehensive IELTS practice test to assess your English proficiency level.
        </p>
        
        {/* Image Carousel */}
        <div className="mb-6">
          <Carousel className="w-full max-w-md mx-auto">
            <CarouselContent>
              {assessmentImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={image} 
                      alt={`IELTS Assessment ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        
        <div className="mt-4 flex items-center justify-center gap-4 text-sm text-purple-700 mb-6">
          <span className="bg-purple-100 px-3 py-1 rounded-full font-medium">20 Questions</span>
          <span className="bg-blue-100 px-3 py-1 rounded-full font-medium">Multiple Choice</span>
          <span className="bg-indigo-100 px-3 py-1 rounded-full font-medium">B1-C2 Level</span>
        </div>
        
        {/* Free IELTS Resources Button */}
        <Button 
          onClick={handleTelegramResources}
          className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
        >
          <Send className="h-5 w-5" />
          Free IELTS Resources
        </Button>
      </div>
      
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <Button 
          onClick={goBack} 
          variant="outline" 
          className="flex items-center gap-1 border-purple-300 text-purple-700 hover:bg-purple-50"
        >
          <ArrowLeft size={16} />
          Back
        </Button>
        
        <div className="text-sm text-muted-foreground font-medium">
          Question {currentQuestionIndex + 1} of {testQuestions.length}
        </div>
      </div>
      
      <TestProgressBar 
        currentQuestion={currentQuestionIndex + 1} 
        totalQuestions={testQuestions.length} 
        className="mb-8" 
        variant="fancy" 
      />
      
      <div className="bg-white p-2 rounded-xl shadow-lg border border-purple-100">
        <QuestionCard 
          question={testQuestions[currentQuestionIndex]} 
          onAnswer={handleAnswer} 
          isLast={currentQuestionIndex === testQuestions.length - 1} 
        />
      </div>
    </div>
  );
}
