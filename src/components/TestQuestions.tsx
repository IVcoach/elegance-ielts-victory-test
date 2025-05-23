
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TestProgressBar } from "@/components/TestProgressBar";
import { Question, QuestionCard } from "@/components/QuestionCard";
import { ArrowLeft } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Enhanced IELTS-style questions with more grammar and vocabulary focus
const testQuestions: Question[] = [
  // Grammar Questions
  {
    id: "g1",
    type: "multiple-choice",
    text: "Choose the correct form to complete this sentence: If the government _____ taxes, public services would improve.",
    options: [
      { id: "a", text: "raises" },
      { id: "b", text: "would raise" },
      { id: "c", text: "raised" },
      { id: "d", text: "had raised" }
    ],
    difficulty: "B2"
  },
  {
    id: "g2",
    type: "multiple-choice",
    text: "Which sentence demonstrates the correct use of subject-verb agreement?",
    options: [
      { id: "a", text: "The collection of artifacts from the excavation site were displayed in the museum." },
      { id: "b", text: "The collection of artifacts from the excavation site was displayed in the museum." },
      { id: "c", text: "The collection of artifacts from the excavation site have been displayed in the museum." },
      { id: "d", text: "The collection of artifacts from the excavation site is being displayed in the museum since last year." }
    ],
    difficulty: "B1"
  },
  {
    id: "g3",
    type: "multiple-choice",
    text: "Identify the correct grammatical structure: If I __________ more time, I would travel around the world.",
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
    text: "Select the sentence with the correct use of articles:",
    options: [
      { id: "a", text: "She is an university student who studies an history." },
      { id: "b", text: "She is a university student who studies a history." },
      { id: "c", text: "She is an university student who studies the history." },
      { id: "d", text: "She is a university student who studies history." }
    ],
    difficulty: "B1"
  },
  {
    id: "g5",
    type: "multiple-choice",
    text: "Which of these sentences uses the past perfect tense correctly?",
    options: [
      { id: "a", text: "I arrived at the station after the train has left." },
      { id: "b", text: "I arrived at the station after the train had left." },
      { id: "c", text: "I arrived at the station after the train was leaving." },
      { id: "d", text: "I arrived at the station after the train leaves." }
    ],
    difficulty: "B2"
  },

  // Vocabulary Questions
  {
    id: "v1",
    type: "multiple-choice",
    text: "Select the most appropriate academic synonym for 'significant':",
    options: [
      { id: "a", text: "big" },
      { id: "b", text: "considerable" },
      { id: "c", text: "nice" },
      { id: "d", text: "certain" }
    ],
    difficulty: "C1"
  },
  {
    id: "v2",
    type: "multiple-choice",
    text: "The recent studies indicate a _____ in air pollution levels in urban areas.",
    options: [
      { id: "a", text: "decrease" },
      { id: "b", text: "rise" },
      { id: "c", text: "decline" },
      { id: "d", text: "reduction" }
    ],
    difficulty: "B1"
  },
  {
    id: "v3",
    type: "multiple-choice",
    text: "Which word collocates most naturally with 'conduct' in academic writing?",
    options: [
      { id: "a", text: "a test" },
      { id: "b", text: "research" },
      { id: "c", text: "money" },
      { id: "d", text: "a car" }
    ],
    difficulty: "B2"
  },
  {
    id: "v4",
    type: "multiple-choice",
    text: "Choose the best word to describe a person who always tells the truth:",
    options: [
      { id: "a", text: "Deceptive" },
      { id: "b", text: "Honest" },
      { id: "c", text: "Dishonest" },
      { id: "d", text: "Secretive" }
    ],
    difficulty: "A2"
  },
  {
    id: "v5",
    type: "multiple-choice",
    text: "Choose the correct word to complete this academic sentence: The research findings _____ the initial hypothesis.",
    options: [
      { id: "a", text: "confirmed" },
      { id: "b", text: "verified" },
      { id: "c", text: "corroborated" },
      { id: "d", text: "all of the above" }
    ],
    difficulty: "C1"
  },

  // IELTS-specific context questions
  {
    id: "c1",
    type: "multiple-choice",
    text: "Which of these expressions would be most appropriate in the introduction of a formal academic essay?",
    options: [
      { id: "a", text: "This essay is gonna talk about globalization." },
      { id: "b", text: "I think globalization is interesting." },
      { id: "c", text: "This paper examines the multifaceted impacts of globalization." },
      { id: "d", text: "Globalization is really important nowadays." }
    ],
    difficulty: "B2"
  },
  {
    id: "c2",
    type: "multiple-choice",
    text: "Which sentence contains correct punctuation?",
    options: [
      { id: "a", text: "The results which were unexpected, contradicted our hypothesis." },
      { id: "b", text: "The results, which were unexpected contradicted our hypothesis." },
      { id: "c", text: "The results, which were unexpected, contradicted our hypothesis." },
      { id: "d", text: "The results which were unexpected contradicted our hypothesis." }
    ],
    difficulty: "B1"
  },
  {
    id: "c3",
    type: "multiple-choice",
    text: "Which of these best exemplifies a coherent paragraph structure?",
    options: [
      { id: "a", text: "Main idea, supporting detail, supporting detail, conclusion" },
      { id: "b", text: "Supporting detail, main idea, conclusion, supporting detail" },
      { id: "c", text: "Conclusion, supporting detail, supporting detail, main idea" },
      { id: "d", text: "Supporting detail, supporting detail, conclusion, main idea" }
    ],
    difficulty: "B2"
  },
  {
    id: "c4",
    type: "multiple-choice",
    text: "Which of the following represents the most balanced approach to presenting opposing viewpoints in an argumentative essay?",
    options: [
      { id: "a", text: "Presenting only evidence that supports your position" },
      { id: "b", text: "Briefly mentioning opposing views but dismissing them as incorrect" },
      { id: "c", text: "Presenting opposing arguments fairly before explaining why your position is more compelling" },
      { id: "d", text: "Giving equal space to all viewpoints without taking a position" }
    ],
    difficulty: "C1"
  },
  {
    id: "c5",
    type: "multiple-choice",
    text: "Environmental issues are a common topic in IELTS. Which of the following questions best relates to this theme?",
    options: [
      { id: "a", text: "What are the benefits of international travel?" },
      { id: "b", text: "How can governments reduce pollution?" },
      { id: "c", text: "Describe your favorite holiday destination" },
      { id: "d", text: "What kind of music do you like?" }
    ],
    difficulty: "B1"
  },
  
  // More specialized questions
  {
    id: "s1",
    type: "multiple-choice",
    text: "In IELTS speaking and writing, discussing the advantages and disadvantages is frequent. Which of the following questions is suitable for this approach?",
    options: [
      { id: "a", text: "Describe your hometown." },
      { id: "b", text: "Discuss the impact of technology on education." },
      { id: "c", text: "What do you do in your free time?" },
      { id: "d", text: "Where do you like to go shopping?" }
    ],
    difficulty: "B2"
  },
  {
    id: "s2",
    type: "multiple-choice",
    text: "Which of these is a common IELTS writing task 2 topic?",
    options: [
      { id: "a", text: "Describe your daily routine" },
      { id: "b", text: "The effect of social media on communication" },
      { id: "c", text: "What is your favorite food" },
      { id: "d", text: "Travel experiences" }
    ],
    difficulty: "B1"
  },
  {
    id: "s3",
    type: "multiple-choice",
    text: "Which of these would be the most appropriate reporting verb to use when presenting controversial research findings in an academic paper?",
    options: [
      { id: "a", text: "The researchers proved that..." },
      { id: "b", text: "The researchers suggest that..." },
      { id: "c", text: "The researchers think that..." },
      { id: "d", text: "The researchers feel that..." }
    ],
    difficulty: "B2"
  },
  {
    id: "s4",
    type: "multiple-choice",
    text: "In academic writing, which of these would be the most effective way to avoid plagiarism?",
    options: [
      { id: "a", text: "Changing a few words in the original text" },
      { id: "b", text: "Using quotation marks but not citing the source" },
      { id: "c", text: "Properly paraphrasing and citing the original source" },
      { id: "d", text: "Only using sources that are not well-known" }
    ],
    difficulty: "B2"
  },
  {
    id: "s5",
    type: "multiple-choice",
    text: "Which of these sentence structures would be awarded the highest mark in IELTS Writing?",
    options: [
      { id: "a", text: "Technology is good. Life is easy. People like it." },
      { id: "b", text: "Technology is good because life is easy and people like it." },
      { id: "c", text: "While technology has undoubtedly simplified many aspects of daily life, its rapid advancement has raised significant concerns regarding privacy and digital addiction." },
      { id: "d", text: "Technology, which is good, makes life easy, which people like." }
    ],
    difficulty: "C1"
  }
];

export function TestQuestions() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  // Handle user's answer
  const handleAnswer = (answerId: string) => {
    const newAnswers = [...answers, answerId];
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < testQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Show a message confirming the answer was recorded
      toast({
        title: "Answer recorded",
        description: `Moving to question ${currentQuestionIndex + 2} of ${testQuestions.length}`,
        duration: 2000
      });
    } else {
      // Last question - navigate to results
      toast({
        title: "Test completed!",
        description: "Calculating your results...",
        duration: 2000
      });
      
      // In a real implementation, you'd pass the answers to calculate results
      // For now, we'll simulate completion by going back to the test page
      setTimeout(() => {
        navigate('/test', { state: { testCompleted: true, answers: newAnswers } });
      }, 1000);
    }
  };

  const goBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      // Remove the last answer
      setAnswers(answers.slice(0, -1));
    } else {
      // If at the first question, go back to test selection
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
