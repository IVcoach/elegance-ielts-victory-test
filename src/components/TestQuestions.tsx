
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TestProgressBar } from "@/components/TestProgressBar";
import { Question, QuestionCard } from "@/components/QuestionCard";
import { ArrowLeft, BookOpen } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Enhanced IELTS-style questions with more challenging content and comprehension
const testQuestions: Question[] = [
  // Reading Comprehension Passage 1 (B2-C1 level)
  {
    id: "rc1",
    type: "reading",
    text: "According to the passage, what is the primary reason for the decline in bee populations?",
    readingPassage: "The global decline in bee populations has become a critical environmental concern. Scientists attribute this phenomenon primarily to habitat loss caused by urbanization and intensive agricultural practices. Pesticide use, particularly neonicotinoids, has been identified as a secondary but significant factor. Climate change further exacerbates the situation by altering flowering patterns and disrupting traditional migration routes. The interconnected nature of these factors creates a complex web of challenges for bee conservation efforts.",
    options: [
      { id: "a", text: "Pesticide use and chemical exposure" },
      { id: "b", text: "Habitat loss from urbanization and agriculture" },
      { id: "c", text: "Climate change and altered migration patterns" },
      { id: "d", text: "Disease and parasitic infections" }
    ],
    difficulty: "B2"
  },
  
  // Reading Comprehension Passage 2 (C1-C2 level)
  {
    id: "rc2",
    type: "reading",
    text: "The author's use of the phrase 'technological panacea' suggests what attitude toward digital solutions?",
    readingPassage: "The proliferation of digital health applications has been heralded by many as a technological panacea for healthcare accessibility issues. However, critics argue that this optimistic view overlooks fundamental systemic problems. While these applications can provide valuable health monitoring and educational resources, they cannot replace the nuanced judgment of trained medical professionals or address underlying socioeconomic disparities in healthcare access. The challenge lies not in the technology itself, but in ensuring equitable implementation across diverse populations.",
    options: [
      { id: "a", text: "Unrealistic expectations and oversimplification" },
      { id: "b", text: "Genuine optimism about technological progress" },
      { id: "c", text: "Balanced appreciation for both benefits and limitations" },
      { id: "d", text: "Complete skepticism toward digital innovation" }
    ],
    difficulty: "C1"
  },

  // Advanced Grammar and Syntax (C1-C2 level)
  {
    id: "g1",
    type: "multiple-choice",
    text: "Choose the most sophisticated and grammatically correct sentence structure:",
    options: [
      { id: "a", text: "Although technology offers benefits, it has drawbacks too." },
      { id: "b", text: "Technology is beneficial but also problematic in certain contexts." },
      { id: "c", text: "Notwithstanding the undeniable advantages that technological advancement confers, one must acknowledge the concomitant challenges it poses." },
      { id: "d", text: "Technology has good and bad aspects that we should consider." }
    ],
    difficulty: "C2"
  },

  // Complex Vocabulary in Context (C1 level)
  {
    id: "v1",
    type: "multiple-choice",
    text: "In academic writing, which word best conveys the concept of 'making something less severe'?",
    options: [
      { id: "a", text: "Reduce" },
      { id: "b", text: "Mitigate" },
      { id: "c", text: "Decrease" },
      { id: "d", text: "Lower" }
    ],
    difficulty: "C1"
  },

  // Inference and Critical Thinking (C1-C2 level)
  {
    id: "inf1",
    type: "reading",
    text: "Based on the passage, what can be inferred about the relationship between economic development and environmental protection?",
    readingPassage: "Developing nations often face the unenviable choice between economic growth and environmental preservation. The immediate needs of poverty alleviation and infrastructure development frequently take precedence over long-term environmental considerations. However, progressive policy frameworks demonstrate that sustainable development models can simultaneously address economic imperatives while safeguarding ecological integrity. The key lies in adopting innovative approaches that recognize environmental health as fundamental to sustained economic prosperity.",
    options: [
      { id: "a", text: "They are mutually exclusive and cannot coexist" },
      { id: "b", text: "Economic development always harms the environment" },
      { id: "c", text: "They can be balanced through innovative policy approaches" },
      { id: "d", text: "Environmental protection should always take priority" }
    ],
    difficulty: "C1"
  },

  // Advanced Conditional Structures (B2-C1 level)
  {
    id: "g2",
    type: "multiple-choice",
    text: "Complete the sentence with the most appropriate conditional structure: _____ the government implemented stricter regulations earlier, the environmental crisis could have been averted.",
    options: [
      { id: "a", text: "If" },
      { id: "b", text: "Had" },
      { id: "c", text: "Should" },
      { id: "d", text: "Were" }
    ],
    difficulty: "B2"
  },

  // Academic Discourse Markers (C1 level)
  {
    id: "dm1",
    type: "multiple-choice",
    text: "Which discourse marker best introduces a contrasting viewpoint in academic writing?",
    options: [
      { id: "a", text: "However" },
      { id: "b", text: "Conversely" },
      { id: "c", text: "Nevertheless" },
      { id: "d", text: "Notwithstanding this perspective" }
    ],
    difficulty: "C1"
  },

  // Complex Sentence Analysis (C2 level)
  {
    id: "sa1",
    type: "multiple-choice",
    text: "Identify the sentence that demonstrates the highest level of syntactic complexity and academic register:",
    options: [
      { id: "a", text: "The study shows that climate change affects many things." },
      { id: "b", text: "Climate change has various impacts on different systems." },
      { id: "c", text: "The multifaceted ramifications of anthropogenic climate change permeate diverse ecological and socioeconomic systems." },
      { id: "d", text: "Climate change impacts many areas of life and society significantly." }
    ],
    difficulty: "C2"
  },

  // Inference from Data (B2-C1 level)
  {
    id: "data1",
    type: "reading",
    text: "Based on the data presented, what trend can be observed regarding renewable energy adoption?",
    readingPassage: "Recent statistical analyses reveal compelling trends in global renewable energy adoption. Solar power capacity increased by 22% annually from 2018-2023, while wind energy expanded by 15% during the same period. Traditional fossil fuel investments decreased by 8% year-over-year, with several major economies announcing carbon neutrality targets. Investment in renewable infrastructure reached $300 billion in 2023, representing a 40% increase from 2020 levels.",
    options: [
      { id: "a", text: "Renewable energy growth is declining globally" },
      { id: "b", text: "Solar energy is expanding faster than wind energy" },
      { id: "c", text: "Fossil fuel investments are increasing rapidly" },
      { id: "d", text: "Investment levels have remained stable since 2020" }
    ],
    difficulty: "B2"
  },

  // Advanced Vocabulary in Academic Context (C2 level)
  {
    id: "v2",
    type: "multiple-choice",
    text: "In the context of research methodology, 'spurious correlation' refers to:",
    options: [
      { id: "a", text: "A strong relationship between variables" },
      { id: "b", text: "A false or misleading statistical relationship" },
      { id: "c", text: "An expected correlation between factors" },
      { id: "d", text: "A correlation that proves causation" }
    ],
    difficulty: "C2"
  },

  // Critical Analysis (C1 level)
  {
    id: "ca1",
    type: "reading",
    text: "The author's argument structure can best be described as:",
    readingPassage: "Proponents of universal basic income (UBI) argue that it provides essential economic security in an increasingly automated world. They contend that UBI would eliminate poverty, reduce bureaucratic overhead, and provide individuals with the freedom to pursue education or entrepreneurship. Critics, however, question the fiscal sustainability of such programs and worry about potential disincentive effects on work motivation. While pilot programs have shown mixed results, the debate continues to evolve as economic conditions change.",
    options: [
      { id: "a", text: "Presenting only supporting evidence for UBI" },
      { id: "b", text: "Balanced examination of multiple perspectives" },
      { id: "c", text: "Strongly arguing against UBI implementation" },
      { id: "d", text: "Focusing solely on economic data" }
    ],
    difficulty: "C1"
  },

  // Advanced Passive Constructions (B2-C1 level)
  {
    id: "g3",
    type: "multiple-choice",
    text: "Select the most appropriate passive construction for academic writing:",
    options: [
      { id: "a", text: "Researchers conducted the study last year." },
      { id: "b", text: "The study was conducted by researchers last year." },
      { id: "c", text: "The study was conducted using rigorous methodological protocols." },
      { id: "d", text: "Someone conducted the study using proper methods." }
    ],
    difficulty: "B2"
  },

  // Pragmatic Understanding (C1-C2 level)
  {
    id: "prag1",
    type: "multiple-choice",
    text: "In the statement 'The minister's response was diplomatically phrased,' the word 'diplomatically' suggests:",
    options: [
      { id: "a", text: "The response was honest and direct" },
      { id: "b", text: "The response was carefully worded to avoid offense" },
      { id: "c", text: "The response was related to international relations" },
      { id: "d", text: "The response was given by a diplomat" }
    ],
    difficulty: "C1"
  },

  // Complex Cause-Effect Relationships (C1 level)
  {
    id: "ce1",
    type: "reading",
    text: "According to the passage, what is the primary catalyst for the described social changes?",
    readingPassage: "The digital revolution has fundamentally altered social interaction patterns across generations. While social media platforms facilitate global connectivity, they simultaneously contribute to increased social isolation and anxiety among young adults. This paradox stems from the substitution of meaningful face-to-face interactions with superficial digital exchanges. Consequently, mental health professionals report a surge in depression and anxiety disorders, particularly among individuals aged 18-25 who have never known a world without constant digital connectivity.",
    options: [
      { id: "a", text: "Mental health awareness campaigns" },
      { id: "b", text: "Generational differences in communication" },
      { id: "c", text: "The widespread adoption of digital technology" },
      { id: "d", text: "Changes in educational systems" }
    ],
    difficulty: "C1"
  },

  // Nuanced Vocabulary Distinctions (C2 level)
  {
    id: "v3",
    type: "multiple-choice",
    text: "Which word pair best demonstrates the subtle distinction between 'effect' and 'affect' in academic contexts?",
    options: [
      { id: "a", text: "Climate change will effect/affect global temperatures significantly." },
      { id: "b", text: "The effect/affect of the policy was immediately apparent." },
      { id: "c", text: "Temperature increases effect/affect agricultural productivity." },
      { id: "d", text: "Both B and C demonstrate correct usage" }
    ],
    difficulty: "C2"
  },

  // Synthesis and Evaluation (C2 level)
  {
    id: "syn1",
    type: "reading",
    text: "The passage demonstrates which logical fallacy in its argument structure?",
    readingPassage: "Since the implementation of the new educational curriculum, standardized test scores have improved by 15%. Additionally, student engagement surveys indicate higher levels of satisfaction with classroom activities. These improvements clearly demonstrate that the curriculum reform is responsible for enhanced educational outcomes. Therefore, all schools should immediately adopt this curriculum to ensure academic success.",
    options: [
      { id: "a", text: "Ad hominem attack" },
      { id: "b", text: "False dichotomy" },
      { id: "c", text: "Post hoc ergo propter hoc (false cause)" },
      { id: "d", text: "Straw man argument" }
    ],
    difficulty: "C2"
  },

  // Advanced Modal Usage (C1 level)
  {
    id: "mod1",
    type: "multiple-choice",
    text: "Choose the modal verb that best expresses academic speculation:",
    options: [
      { id: "a", text: "The results must indicate a correlation." },
      { id: "b", text: "The results might suggest a correlation." },
      { id: "c", text: "The results will show a correlation." },
      { id: "d", text: "The results can prove a correlation." }
    ],
    difficulty: "C1"
  },

  // Meta-linguistic Awareness (C2 level)
  {
    id: "meta1",
    type: "multiple-choice",
    text: "In academic discourse, hedging language serves to:",
    options: [
      { id: "a", text: "Make statements more definitive and certain" },
      { id: "b", text: "Express uncertainty and allow for alternative interpretations" },
      { id: "c", text: "Simplify complex ideas for general audiences" },
      { id: "d", text: "Eliminate ambiguity from research findings" }
    ],
    difficulty: "C2"
  },

  // Contextual Inference (C1 level)
  {
    id: "ctx1",
    type: "reading",
    text: "The tone of this passage can best be characterized as:",
    readingPassage: "While artificial intelligence promises revolutionary advances in healthcare diagnostics, we must proceed with measured optimism. The integration of AI systems into clinical practice requires rigorous validation, comprehensive training protocols, and robust ethical frameworks. Premature implementation without adequate safeguards could undermine patient safety and professional standards. The medical community must balance innovation with responsibility.",
    options: [
      { id: "a", text: "Enthusiastically supportive" },
      { id: "b", text: "Cautiously optimistic" },
      { id: "c", text: "Strongly pessimistic" },
      { id: "d", text: "Completely neutral" }
    ],
    difficulty: "C1"
  },

  // Final Advanced Synthesis Question (C2 level)
  {
    id: "final1",
    type: "reading",
    text: "This passage exemplifies which rhetorical strategy?",
    readingPassage: "Consider the smartphone in your pocket—a device more powerful than the computers that guided Apollo missions to the moon. Yet this marvel of technology often serves merely to scroll through ephemeral social media content. This juxtaposition illustrates humanity's peculiar relationship with progress: we possess unprecedented capabilities but frequently apply them to trivial pursuits. Perhaps our challenge lies not in advancing technology further, but in cultivating wisdom to match our technical prowess.",
    options: [
      { id: "a", text: "Deductive reasoning from general to specific" },
      { id: "b", text: "Inductive reasoning building to a conclusion" },
      { id: "c", text: "Juxtaposition to highlight irony and provoke reflection" },
      { id: "d", text: "Chronological narrative structure" }
    ],
    difficulty: "C2"
  }
];

// Updated correct answers for the new challenging questions
const correctAnswers: { [key: string]: string } = {
  "rc1": "b", // Habitat loss from urbanization and agriculture
  "rc2": "a", // Unrealistic expectations and oversimplification
  "g1": "c", // Most sophisticated sentence structure
  "v1": "b", // Mitigate
  "inf1": "c", // They can be balanced through innovative approaches
  "g2": "b", // Had (third conditional)
  "dm1": "d", // Notwithstanding this perspective (most sophisticated)
  "sa1": "c", // Most syntactically complex sentence
  "data1": "b", // Solar energy expanding faster than wind
  "v2": "b", // Spurious correlation definition
  "ca1": "b", // Balanced examination
  "g3": "c", // Most appropriate passive construction
  "prag1": "b", // Diplomatically suggests careful wording
  "ce1": "c", // Digital revolution as catalyst
  "v3": "d", // Both B and C demonstrate correct usage
  "syn1": "c", // Post hoc ergo propter hoc fallacy
  "mod1": "b", // Might (academic speculation)
  "meta1": "b", // Hedging allows for alternatives
  "ctx1": "b", // Cautiously optimistic tone
  "final1": "c", // Juxtaposition strategy
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
    <div className="space-y-8 max-w-4xl mx-auto bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-8 rounded-2xl shadow-xl">
      <div className="text-center mb-8 bg-white p-6 rounded-xl shadow-md border border-purple-200">
        <div className="flex items-center justify-center gap-3 mb-4">
          <BookOpen className="h-8 w-8 text-purple-600" />
          <h1 className="text-3xl font-playfair font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Advanced IELTS Assessment
          </h1>
        </div>
        <p className="text-gray-600 text-lg">
          Challenge yourself with advanced questions designed to assess high-level English proficiency.
        </p>
        <div className="mt-4 flex items-center justify-center gap-4 text-sm text-purple-700">
          <span className="bg-purple-100 px-3 py-1 rounded-full font-medium">20 Advanced Questions</span>
          <span className="bg-blue-100 px-3 py-1 rounded-full font-medium">Comprehension Focus</span>
          <span className="bg-indigo-100 px-3 py-1 rounded-full font-medium">C1-C2 Level</span>
        </div>
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
