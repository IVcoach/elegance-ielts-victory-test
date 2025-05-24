
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TestProgressBar } from "@/components/TestProgressBar";
import { Question, QuestionCard } from "@/components/QuestionCard";
import { ArrowLeft } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Enhanced IELTS-style questions with more accurate scoring
const testQuestions: Question[] = [
  // Basic Grammar (A1-A2 level)
  {
    id: "g1",
    type: "multiple-choice",
    text: "Choose the correct form: I _____ English for three years.",
    options: [
      { id: "a", text: "study" },
      { id: "b", text: "am studying" },
      { id: "c", text: "have been studying" },
      { id: "d", text: "studied" }
    ],
    difficulty: "A2"
  },
  {
    id: "g2",
    type: "multiple-choice",
    text: "Which sentence is grammatically correct?",
    options: [
      { id: "a", text: "She don't like coffee." },
      { id: "b", text: "She doesn't likes coffee." },
      { id: "c", text: "She doesn't like coffee." },
      { id: "d", text: "She not like coffee." }
    ],
    difficulty: "A1"
  },
  
  // Intermediate Grammar (B1-B2 level)
  {
    id: "g3",
    type: "multiple-choice",
    text: "If I _____ more time, I would travel around the world.",
    options: [
      { id: "a", text: "had" },
      { id: "b", text: "have" },
      { id: "c", text: "will have" },
      { id: "d", text: "would have" }
    ],
    difficulty: "B1"
  },
  {
    id: "g4",
    type: "multiple-choice",
    text: "The book _____ by millions of people worldwide.",
    options: [
      { id: "a", text: "has read" },
      { id: "b", text: "has been read" },
      { id: "c", text: "was reading" },
      { id: "d", text: "is reading" }
    ],
    difficulty: "B2"
  },
  
  // Advanced Grammar (C1-C2 level)
  {
    id: "g5",
    type: "multiple-choice",
    text: "_____ the weather, we decided to postpone the outdoor event.",
    options: [
      { id: "a", text: "Despite of" },
      { id: "b", text: "In spite of" },
      { id: "c", text: "Although" },
      { id: "d", text: "However" }
    ],
    difficulty: "C1"
  },
  {
    id: "g6",
    type: "multiple-choice",
    text: "The government's new policy is _____ criticism from various sectors.",
    options: [
      { id: "a", text: "coming under" },
      { id: "b", text: "getting into" },
      { id: "c", text: "going through" },
      { id: "d", text: "falling behind" }
    ],
    difficulty: "C2"
  },

  // Basic Vocabulary (A1-A2 level)
  {
    id: "v1",
    type: "multiple-choice",
    text: "What do you call a person who teaches students?",
    options: [
      { id: "a", text: "Doctor" },
      { id: "b", text: "Teacher" },
      { id: "c", text: "Engineer" },
      { id: "d", text: "Lawyer" }
    ],
    difficulty: "A1"
  },
  {
    id: "v2",
    type: "multiple-choice",
    text: "The opposite of 'expensive' is:",
    options: [
      { id: "a", text: "costly" },
      { id: "b", text: "cheap" },
      { id: "c", text: "valuable" },
      { id: "d", text: "precious" }
    ],
    difficulty: "A2"
  },

  // Intermediate Vocabulary (B1-B2 level)
  {
    id: "v3",
    type: "multiple-choice",
    text: "The company decided to _____ the project due to budget constraints.",
    options: [
      { id: "a", text: "abandon" },
      { id: "b", text: "continue" },
      { id: "c", text: "expand" },
      { id: "d", text: "celebrate" }
    ],
    difficulty: "B1"
  },
  {
    id: "v4",
    type: "multiple-choice",
    text: "Which word best describes someone who is very careful with money?",
    options: [
      { id: "a", text: "generous" },
      { id: "b", text: "frugal" },
      { id: "c", text: "wasteful" },
      { id: "d", text: "careless" }
    ],
    difficulty: "B2"
  },

  // Advanced Vocabulary (C1-C2 level)
  {
    id: "v5",
    type: "multiple-choice",
    text: "The research findings _____ the initial hypothesis.",
    options: [
      { id: "a", text: "confirmed" },
      { id: "b", text: "corroborated" },
      { id: "c", text: "substantiated" },
      { id: "d", text: "all of the above" }
    ],
    difficulty: "C1"
  },
  {
    id: "v6",
    type: "multiple-choice",
    text: "The politician's speech was criticized for being _____ and lacking substance.",
    options: [
      { id: "a", text: "verbose" },
      { id: "b", text: "concise" },
      { id: "c", text: "eloquent" },
      { id: "d", text: "articulate" }
    ],
    difficulty: "C2"
  },

  // Reading Comprehension (B1-B2 level)
  {
    id: "r1",
    type: "multiple-choice",
    text: "According to recent studies, regular exercise can significantly improve mental health by reducing stress and anxiety levels. What is the main benefit mentioned?",
    options: [
      { id: "a", text: "Weight loss" },
      { id: "b", text: "Improved mental health" },
      { id: "c", text: "Better sleep" },
      { id: "d", text: "Increased energy" }
    ],
    difficulty: "B1"
  },
  {
    id: "r2",
    type: "multiple-choice",
    text: "The author's tone in the passage about climate change can best be described as:",
    options: [
      { id: "a", text: "optimistic" },
      { id: "b", text: "neutral" },
      { id: "c", text: "concerned" },
      { id: "d", text: "indifferent" }
    ],
    difficulty: "B2"
  },

  // Critical Thinking (C1-C2 level)
  {
    id: "c1",
    type: "multiple-choice",
    text: "Which argument structure is most effective for an academic essay?",
    options: [
      { id: "a", text: "Opinion → Examples → Conclusion" },
      { id: "b", text: "Introduction → Thesis → Evidence → Counter-argument → Conclusion" },
      { id: "c", text: "Examples → Opinion → More examples" },
      { id: "d", text: "Conclusion → Supporting details → Introduction" }
    ],
    difficulty: "C1"
  },
  {
    id: "c2",
    type: "multiple-choice",
    text: "In academic discourse, the most appropriate way to present conflicting viewpoints is to:",
    options: [
      { id: "a", text: "Dismiss opposing views as incorrect" },
      { id: "b", text: "Present all views as equally valid" },
      { id: "c", text: "Acknowledge opposing views while arguing for your position with evidence" },
      { id: "d", text: "Avoid mentioning opposing views" }
    ],
    difficulty: "C2"
  },

  // IELTS-specific contexts
  {
    id: "i1",
    type: "multiple-choice",
    text: "In IELTS Writing Task 2, which introduction is most appropriate?",
    options: [
      { id: "a", text: "I think that technology is really good for education." },
      { id: "b", text: "This essay will discuss the advantages and disadvantages of technology in education." },
      { id: "c", text: "Technology in education is a topic that has both supporters and critics." },
      { id: "d", text: "Everyone knows that technology is important nowadays." }
    ],
    difficulty: "B2"
  },
  {
    id: "i2",
    type: "multiple-choice",
    text: "Which cohesive device best connects these ideas: 'Online learning offers flexibility. _____ it can lack personal interaction.'",
    options: [
      { id: "a", text: "And" },
      { id: "b", text: "However" },
      { id: "c", text: "Because" },
      { id: "d", text: "Therefore" }
    ],
    difficulty: "B1"
  },
  
  // Complex sentence structures
  {
    id: "s1",
    type: "multiple-choice",
    text: "Which sentence demonstrates the most sophisticated language use?",
    options: [
      { id: "a", text: "Technology is good. It helps people." },
      { id: "b", text: "Technology is good because it helps people." },
      { id: "c", text: "While technology undoubtedly offers numerous benefits, it also presents significant challenges that society must address." },
      { id: "d", text: "Technology helps people, which is good." }
    ],
    difficulty: "C1"
  },
  {
    id: "s2",
    type: "multiple-choice",
    text: "Identify the sentence with correct parallel structure:",
    options: [
      { id: "a", text: "She likes reading, writing, and to swim." },
      { id: "b", text: "She likes reading, writing, and swimming." },
      { id: "c", text: "She likes to read, writing, and swimming." },
      { id: "d", text: "She likes reading, to write, and swimming." }
    ],
    difficulty: "B2"
  }
];

// Correct answers for scoring
const correctAnswers: { [key: string]: string } = {
  "g1": "c", // have been studying (present perfect continuous)
  "g2": "c", // doesn't like (correct negative form)
  "g3": "a", // had (second conditional)
  "g4": "b", // has been read (passive voice)
  "g5": "b", // In spite of (correct preposition)
  "g6": "a", // coming under (correct phrasal verb)
  "v1": "b", // Teacher
  "v2": "b", // cheap
  "v3": "a", // abandon
  "v4": "b", // frugal
  "v5": "d", // all of the above (academic vocabulary)
  "v6": "a", // verbose
  "r1": "b", // Improved mental health
  "r2": "c", // concerned
  "c1": "b", // proper academic structure
  "c2": "c", // acknowledge opposing views
  "i1": "b", // appropriate IELTS introduction
  "i2": "b", // However (contrast)
  "s1": "c", // sophisticated language
  "s2": "b", // correct parallel structure
};

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

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-playfair font-bold text-brand-navy mb-2">
          IELTS Placement Test
        </h1>
        <p className="text-gray-600">
          Answer the questions below to determine your current English level and IELTS band score.
        </p>
      </div>
      
      <div className="flex justify-between items-center">
        <Button 
          onClick={goBack} 
          variant="outline" 
          className="flex items-center gap-1"
        >
          <ArrowLeft size={16} />
          Back
        </Button>
        
        <div className="text-sm text-muted-foreground">
          Question {currentQuestionIndex + 1} of {testQuestions.length}
        </div>
      </div>
      
      <TestProgressBar 
        currentQuestion={currentQuestionIndex + 1} 
        totalQuestions={testQuestions.length} 
        className="mb-8" 
        variant="fancy" 
      />
      
      <QuestionCard 
        question={testQuestions[currentQuestionIndex]} 
        onAnswer={handleAnswer} 
        isLast={currentQuestionIndex === testQuestions.length - 1} 
      />
    </div>
  );
}
