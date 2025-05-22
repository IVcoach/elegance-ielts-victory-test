import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TestProgressBar } from "@/components/TestProgressBar";
import { Question, QuestionCard } from "@/components/QuestionCard";
import { CEFRScore, CEFRLevel, ScoreSection } from "@/components/CEFRScore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Book, Award, Star } from "lucide-react";

// Professional IELTS-style questions aligned with CEFR levels
const sampleQuestions: Question[] = [
  // Grammar Questions
  {
    id: "q1",
    type: "multiple-choice",
    text: "Choose the correct form to complete this sentence: If the government _____ taxes, public services would improve.",
    options: [
      { id: "a", text: "raises" },
      { id: "b", text: "would raise" },
      { id: "c", text: "raised" },
      { id: "d", text: "had raised" }
    ],
    difficulty: "B2" // CEFR Level - IELTS 6.0-6.5
  },
  {
    id: "q2",
    type: "multiple-choice",
    text: "Select the most appropriate academic synonym for 'significant':",
    options: [
      { id: "a", text: "big" },
      { id: "b", text: "considerable" },
      { id: "c", text: "nice" },
      { id: "d", text: "certain" }
    ],
    difficulty: "C1" // CEFR Level - IELTS 7.0-8.0
  },
  {
    id: "q3",
    type: "fill-in-blank",
    text: "The environmental consequences of deforestation are _____ severe. (Use an appropriate intensifier)",
    difficulty: "C1" // CEFR Level - IELTS 7.0-8.0
  },
  // Vocabulary Questions
  {
    id: "q4",
    type: "multiple-choice",
    text: "Which word collocates most naturally with 'conduct' in academic writing?",
    options: [
      { id: "a", text: "a test" },
      { id: "b", text: "research" },
      { id: "c", text: "money" },
      { id: "d", text: "a car" }
    ],
    difficulty: "B2" // CEFR Level - IELTS 6.0-6.5
  },
  {
    id: "q5",
    type: "fill-in-blank",
    text: "In the aftermath of the economic crisis, the government implemented _____ measures to stimulate growth. (Use an appropriate adjective)",
    difficulty: "C1" // CEFR Level - IELTS 7.0-8.0
  },
  // Reading Comprehension Questions
  {
    id: "q6",
    type: "reading",
    text: "According to the passage, what is the main reason for the decline in bee populations?",
    readingPassage: "The precipitous decline in global bee populations has alarmed scientists and policymakers alike, given the crucial ecological and economic roles these pollinators play. Research indicates that a combination of factors is responsible, including widespread pesticide use, habitat loss due to urban development and industrialized agriculture, climate change causing shifts in flowering seasons, and the spread of parasites and diseases. Among these various contributors, systematic studies have consistently identified neonicotinoid pesticides as having the most substantial deleterious impact on bee colonies. These chemicals, even at sub-lethal doses, disrupt bees' navigational abilities, impair learning and memory, reduce fertility, and compromise immune systems, making colonies more vulnerable to other stressors.",
    options: [
      { id: "a", text: "Climate change" },
      { id: "b", text: "Neonicotinoid pesticides" },
      { id: "c", text: "Urban development" },
      { id: "d", text: "Parasites and diseases" }
    ],
    difficulty: "C1" // CEFR Level - IELTS 7.0-8.0
  },
  {
    id: "q7",
    type: "reading",
    text: "What can be inferred from the passage about renewable energy investment?",
    readingPassage: "Global investment in renewable energy has experienced substantial growth over the past decade, reaching $282.2 billion in 2019. This figure, while impressive, still falls short of the estimated $500 billion annual investment needed by 2030 to achieve international climate targets. Interestingly, developing economies have begun to outpace developed nations in renewable energy spending, with China alone accounting for nearly a third of global investments. Financial analysts note that the declining costs of solar and wind technologies have improved return-on-investment prospects, attracting private capital that previously viewed the sector with skepticism. However, policy uncertainty in several major economies continues to impede the acceleration of investment to required levels.",
    options: [
      { id: "a", text: "Current investment levels are sufficient to meet climate goals" },
      { id: "b", text: "Developed nations lead in renewable energy investment" },
      { id: "c", text: "Investment has increased but remains inadequate for climate targets" },
      { id: "d", text: "Financial returns on renewable energy are poor" }
    ],
    difficulty: "C2" // CEFR Level - IELTS 8.5-9.0
  },
  // More varied questions
  {
    id: "q8",
    type: "multiple-choice",
    text: "Which of these expressions would be most appropriate in the introduction of a formal academic essay?",
    options: [
      { id: "a", text: "This essay is gonna talk about globalization." },
      { id: "b", text: "I think globalization is interesting." },
      { id: "c", text: "This paper examines the multifaceted impacts of globalization." },
      { id: "d", text: "Globalization is really important nowadays." }
    ],
    difficulty: "B2" // CEFR Level - IELTS 6.0-6.5
  },
  {
    id: "q9",
    type: "multiple-choice",
    text: "Which sentence contains correct punctuation?",
    options: [
      { id: "a", text: "The results which were unexpected, contradicted our hypothesis." },
      { id: "b", text: "The results, which were unexpected contradicted our hypothesis." },
      { id: "c", text: "The results, which were unexpected, contradicted our hypothesis." },
      { id: "d", text: "The results which were unexpected contradicted our hypothesis." }
    ],
    difficulty: "B1" // CEFR Level - IELTS 5.0-6.0
  },
  {
    id: "q10",
    type: "multiple-choice",
    text: "Which of these best exemplifies a coherent paragraph structure?",
    options: [
      { id: "a", text: "Main idea, supporting detail, supporting detail, conclusion" },
      { id: "b", text: "Supporting detail, main idea, conclusion, supporting detail" },
      { id: "c", text: "Conclusion, supporting detail, supporting detail, main idea" },
      { id: "d", text: "Supporting detail, supporting detail, conclusion, main idea" }
    ],
    difficulty: "B2" // CEFR Level - IELTS 6.0-6.5
  },
  {
    id: "q11",
    type: "reading",
    text: "What is the author's primary argument regarding urban planning?",
    readingPassage: "Contemporary approaches to urban planning must transcend mere aesthetic considerations and infrastructural functionality. The most successful urban environments integrate social equity, environmental sustainability, and economic vibrancy into their foundational design principles. Cities that have prioritized single-factor optimization—whether for traffic flow, commercial development, or architectural prominence—have frequently encountered unforeseen challenges in social cohesion and ecological resilience. Recent studies demonstrate that multi-dimensional planning methodologies, while initially more complex to implement, yield substantially more robust urban ecosystems capable of adapting to demographic shifts, climate pressures, and economic fluctuations. This holistic paradigm represents not merely a theoretical ideal but a practical necessity in an era of unprecedented urbanization and environmental uncertainty.",
    options: [
      { id: "a", text: "Aesthetic considerations should be the primary factor in urban design" },
      { id: "b", text: "Single-factor optimization leads to more efficient urban development" },
      { id: "c", text: "Urban planning should integrate multiple dimensions including social, environmental, and economic factors" },
      { id: "d", text: "Traditional approaches to urban planning are sufficient for modern challenges" }
    ],
    difficulty: "C2" // CEFR Level - IELTS 8.5-9.0
  },
  {
    id: "q12",
    type: "multiple-choice",
    text: "Which of these transitional phrases would be most appropriate to introduce a contradictory point in an academic essay?",
    options: [
      { id: "a", text: "Moreover" },
      { id: "b", text: "Nevertheless" },
      { id: "c", text: "For example" },
      { id: "d", text: "In conclusion" }
    ],
    difficulty: "B1" // CEFR Level - IELTS 5.0-6.0
  },
  {
    id: "q13",
    type: "fill-in-blank",
    text: "The company's profits _____ significantly last quarter, leading to increased shareholder confidence. (Use an appropriate verb in the past tense)",
    difficulty: "B1" // CEFR Level - IELTS 5.0-6.0
  },
  {
    id: "q14",
    type: "multiple-choice",
    text: "Which sentence demonstrates the correct use of subject-verb agreement?",
    options: [
      { id: "a", text: "The collection of artifacts from the excavation site were displayed in the museum." },
      { id: "b", text: "The collection of artifacts from the excavation site was displayed in the museum." },
      { id: "c", text: "The collection of artifacts from the excavation site have been displayed in the museum." },
      { id: "d", text: "The collection of artifacts from the excavation site is being displayed in the museum since last year." }
    ],
    difficulty: "B1" // CEFR Level - IELTS 5.0-6.0
  },
  {
    id: "q15",
    type: "reading",
    text: "Based on the passage, what can be inferred about the relationship between diet and cognitive function?",
    readingPassage: "Recent neurological research has illuminated complex connections between dietary patterns and cognitive function across the lifespan. Longitudinal studies tracking subjects over decades suggest that diets rich in omega-3 fatty acids, antioxidants, and anti-inflammatory compounds correlate with preserved cognitive abilities in later life. Particularly notable is the emergence of evidence indicating that dietary interventions may prove most effective when implemented during critical developmental periods or before the onset of cognitive decline, rather than as remedial measures. While the precise mechanisms remain under investigation, researchers have identified several pathways through which nutritional components influence neural processes, including modulation of neurotransmitter systems, regulation of inflammatory responses, and maintenance of vascular health in cerebral tissues.",
    options: [
      { id: "a", text: "Dietary interventions are only effective as treatments after cognitive decline begins" },
      { id: "b", text: "The mechanisms connecting diet and brain function are completely understood" },
      { id: "c", text: "Preventive dietary measures may be more effective than remedial approaches" },
      { id: "d", text: "Only omega-3 fatty acids have been shown to affect cognitive function" }
    ],
    difficulty: "C1" // CEFR Level - IELTS 7.0-8.0
  },
  {
    id: "q16",
    type: "multiple-choice",
    text: "Which of these would be the most appropriate reporting verb to use when presenting controversial research findings in an academic paper?",
    options: [
      { id: "a", text: "The researchers proved that..." },
      { id: "b", text: "The researchers suggest that..." },
      { id: "c", text: "The researchers think that..." },
      { id: "d", text: "The researchers feel that..." }
    ],
    difficulty: "B2" // CEFR Level - IELTS 6.0-6.5
  },
  {
    id: "q17",
    type: "multiple-choice",
    text: "In academic writing, which of these would be the most effective way to avoid plagiarism?",
    options: [
      { id: "a", text: "Changing a few words in the original text" },
      { id: "b", text: "Using quotation marks but not citing the source" },
      { id: "c", text: "Properly paraphrasing and citing the original source" },
      { id: "d", text: "Only using sources that are not well-known" }
    ],
    difficulty: "B2" // CEFR Level - IELTS 6.0-6.5
  },
  {
    id: "q18",
    type: "fill-in-blank",
    text: "The research findings _____ the hypothesis that regular exercise improves mental health. (Use an appropriate verb that indicates supporting evidence)",
    difficulty: "C1" // CEFR Level - IELTS 7.0-8.0
  },
  {
    id: "q19",
    type: "multiple-choice",
    text: "Which of the following represents the most balanced approach to presenting opposing viewpoints in an argumentative essay?",
    options: [
      { id: "a", text: "Presenting only evidence that supports your position" },
      { id: "b", text: "Briefly mentioning opposing views but dismissing them as incorrect" },
      { id: "c", text: "Presenting opposing arguments fairly before explaining why your position is more compelling" },
      { id: "d", text: "Giving equal space to all viewpoints without taking a position" }
    ],
    difficulty: "C1" // CEFR Level - IELTS 7.0-8.0
  },
  {
    id: "q20",
    type: "reading",
    text: "What does the author suggest about international cooperation on climate change?",
    readingPassage: "The evolution of international climate agreements reflects both the growing scientific consensus regarding anthropogenic climate change and the persistent challenges of coordinating action among nations with diverse economic interests and capabilities. While the 1997 Kyoto Protocol established the principle of 'common but differentiated responsibilities,' its impact was limited by the non-participation of major emitters and the absence of enforcement mechanisms. The 2015 Paris Agreement marked a significant shift toward universal participation through nationally determined contributions, yet questions remain about whether these voluntary commitments will collectively achieve sufficient emissions reductions to limit global warming to the targeted 1.5°C above pre-industrial levels. Recent analyses suggest that even with full implementation of current pledges, the world remains on track for approximately 2.7°C of warming by 2100, highlighting the substantial gap between political commitments and scientific requirements.",
    options: [
      { id: "a", text: "International agreements have successfully solved the climate crisis" },
      { id: "b", text: "Current commitments under the Paris Agreement are likely insufficient to meet climate targets" },
      { id: "c", text: "The Kyoto Protocol was more effective than the Paris Agreement" },
      { id: "d", text: "Scientific consensus on climate change has decreased over time" }
    ],
    difficulty: "C2" // CEFR Level - IELTS 8.5-9.0
  }
];

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
  const score = (correctAnswers / totalQuestions) * 100;
  
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
  
  return { cefrLevel, ieltsBand, overallScore: Math.round(score) };
};

// IELTS imagery with enhanced visual design
const IeltsImagery = () => {
  return (
    <div className="flex items-center justify-center -mb-6 relative z-20">
      <div className="grid grid-cols-3 gap-5 max-w-xl">
        {/* IELTS Certificate Image */}
        <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-brand-blue/80 transform -rotate-6 hover:scale-105 transition-all">
          <div className="bg-gradient-to-r from-brand-navy to-brand-blue h-24 w-full flex items-center justify-center p-2">
            <div className="bg-white/90 rounded p-2 w-full text-center">
              <h4 className="text-brand-navy font-bold text-sm">IELTS</h4>
              <p className="text-brand-blue text-xs">Band 8.0</p>
            </div>
          </div>
        </div>
        
        {/* IELTS Test Book */}
        <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-brand-blue/80 transform rotate-3 scale-110 z-10 hover:scale-125 transition-all">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 h-28 w-full flex flex-col items-center justify-center p-2">
            <div className="text-center">
              <p className="text-brand-navy text-xs">Assessment</p>
            </div>
          </div>
        </div>
        
        {/* IELTS Score Report */}
        <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-brand-blue/80 transform rotate-6 hover:scale-105 transition-all">
          <div className="bg-gradient-to-r from-indigo-100 to-blue-200 h-24 w-full flex items-center justify-center p-2">
            <div className="flex flex-col items-center">
              <div className="text-center mt-1">
                <p className="text-brand-navy text-xs">Score Report</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Service Icons Component
const ServiceIcons = () => {
  const services = [
    { icon: <Book className="h-8 w-8" />, title: "IELTS Materials", description: "Access top-quality study resources" },
    { icon: <Award className="h-8 w-8" />, title: "Professional Assessment", description: "Get evaluated by certified examiners" },
    { icon: <Star className="h-8 w-8" />, title: "Personalized Guidance", description: "One-on-one mentoring sessions" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {services.map((service, index) => (
        <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 bg-brand-navy/10 rounded-full text-brand-navy">
              {service.icon}
            </div>
            <h3 className="font-medium text-lg">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Quiz Intro Component
const QuizIntro = ({ onStartTest }: { onStartTest: () => void }) => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <IeltsImagery />
      
      <h1 className="text-3xl font-playfair font-bold text-brand-navy mb-6">
        Discover Your English Proficiency Level
      </h1>
      
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <p className="text-lg mb-4">
          Take our professional IELTS placement test to find out your current English level according to
          the Common European Framework of Reference (CEFR) and get an estimated IELTS band score.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-3 bg-brand-cream rounded-lg">
            <p className="text-sm font-medium">20 Questions</p>
          </div>
          <div className="p-3 bg-brand-cream rounded-lg">
            <p className="text-sm font-medium">15-20 Minutes</p>
          </div>
          <div className="p-3 bg-brand-cream rounded-lg">
            <p className="text-sm font-medium">Instant Results</p>
          </div>
          <div className="p-3 bg-brand-cream rounded-lg">
            <p className="text-sm font-medium">CEFR Aligned</p>
          </div>
        </div>
        
        <div className="mt-6">
          <Button 
            className="bg-brand-gold hover:bg-opacity-90 text-white px-6 py-6 h-auto text-lg"
            onClick={onStartTest}
          >
            Start Your Assessment Now
          </Button>
        </div>
      </div>
      
      <ServiceIcons />
      
      <div className="p-5 bg-gradient-to-r from-blue-500/20 via-brand-blue/40 to-indigo-400/30 rounded-lg mt-8 shadow-lg border border-white/40">
        <p className="font-bold text-brand-navy text-xl">
          <span className="bg-gradient-to-r from-brand-navy to-brand-blue text-transparent bg-clip-text">
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

// Facts Box Component
const IeltsFactsBox = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 my-8">
      <h3 className="text-xl font-medium text-brand-navy mb-4">IELTS Quick Facts</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-start">
          <div className="mr-3 text-brand-blue">•</div>
          <p className="text-sm">IELTS is accepted by over 11,000 organizations in 140 countries</p>
        </div>
        <div className="flex items-start">
          <div className="mr-3 text-brand-blue">•</div>
          <p className="text-sm">More than 3.5 million tests are taken each year</p>
        </div>
        <div className="flex items-start">
          <div className="mr-3 text-brand-blue">•</div>
          <p className="text-sm">Tests all four language skills: listening, reading, writing and speaking</p>
        </div>
        <div className="flex items-start">
          <div className="mr-3 text-brand-blue">•</div>
          <p className="text-sm">Available in Academic and General Training formats</p>
        </div>
      </div>
    </div>
  );
};

const Test = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [testCompleted, setTestCompleted] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const [cefrLevel, setCefrLevel] = useState<CEFRLevel | null>(null);
  const [ieltsBand, setIeltsBand] = useState<string | null>(null);
  const [overallScore, setOverallScore] = useState(0);
  const [sectionScores, setSectionScores] = useState<ScoreSection[]>([]);
  
  // Handle user starting the test
  const startTest = () => {
    setTestStarted(true);
  };
  
  // Handle user's answer
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
    // This would be a more sophisticated algorithm in a real app
    // For now, we'll simulate results 
    const correctAnswersCount = Math.round((finalAnswers.length * 0.7)); // Simulating 70% correct answers
    const { cefrLevel: level, ieltsBand: band, overallScore: score } = calculateResults(correctAnswersCount, sampleQuestions.length);
    
    // Calculate mock section scores
    const mockSectionScores: ScoreSection[] = [
      { name: "Grammar", score: Math.round(65 + Math.random() * 20) }, 
      { name: "Vocabulary", score: Math.round(70 + Math.random() * 15) },
      { name: "Reading", score: Math.round(60 + Math.random() * 25) },
      { name: "Academic Writing", score: Math.round(65 + Math.random() * 20) }
    ];
    
    setCefrLevel(level);
    setIeltsBand(band);
    setOverallScore(score);
    setSectionScores(mockSectionScores);
    setTestCompleted(true);
    
    toast({
      title: "Test Completed!",
      description: `Your IELTS Band Score: ${band} (${level})`,
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
    setTestStarted(false);
    setCefrLevel(null);
    setIeltsBand(null);
    setOverallScore(0);
    setSectionScores([]);
  };
  
  // Find the description for the current IELTS band
  const bandDescription = ieltsBand ? ieltsDescriptions.find(desc => desc.band === ieltsBand)?.description : "";
  
  // Determine which content to show based on test state
  let content;
  
  if (!testStarted) {
    content = <QuizIntro onStartTest={startTest} />;
  } else if (!testCompleted) {
    content = (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-playfair font-bold text-brand-navy mb-2">
            IELTS Placement Test
          </h1>
          <p className="text-gray-600">
            Answer the questions below to determine your current English level and IELTS band score.
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
    );
  } else {
    content = (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-playfair font-bold text-brand-navy mb-2">
            Your IELTS Results
          </h1>
          <p className="text-gray-600">
            Based on your test performance, we've assessed your English proficiency.
          </p>
        </div>
        
        {cefrLevel && (
          <div className="space-y-6">
            <Card className="w-full max-w-2xl mx-auto animate-fade-in">
              <CardContent className="pt-6 space-y-6">
                <div className="text-center">
                  <div className="inline-block px-5 py-3 bg-brand-blue text-white rounded-full font-bold text-2xl mb-3">
                    IELTS Band {ieltsBand}
                  </div>
                  <p className="text-lg text-muted-foreground">{bandDescription}</p>
                </div>
                
                <div className="flex justify-center items-center mb-6">
                  <div className="relative w-36 h-36">
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
                
                <div className="text-center pb-4">
                  <div className="inline-block px-4 py-2 bg-brand-navy/10 rounded-md font-medium mb-2">
                    CEFR Level: <span className="font-bold">{cefrLevel}</span>
                  </div>
                </div>
                
                {sectionScores && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-center">Section Breakdown</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {sectionScores.map((section) => (
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
                  <Button 
                    variant="outline" 
                    className="flex-1 border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                    onClick={handleShare}
                  >
                    Share Results & Join @ieltsvc
                  </Button>
                  
                  <Button 
                    className="flex-1 bg-brand-gold hover:bg-opacity-90"
                    onClick={handleDownloadCertificate}
                  >
                    Download Certificate
                  </Button>
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
            
            <IeltsFactsBox />
          </div>
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
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-24 px-4 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          {content}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Test;
