
import { CEFRLevel, ScoreSection } from "@/components/CEFRScore";

// IELTS band descriptions aligned with CEFR levels
export interface IELTSBandDescription {
  band: string;
  description: string;
  cefrLevel: CEFRLevel;
}

export const ieltsDescriptions: IELTSBandDescription[] = [{
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
export const calculateResults = (correctAnswers: number, totalQuestions: number) => {
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

// Calculate mock section scores for result display
export const getMockSectionScores = (correctAnswers: number, totalQuestions: number): ScoreSection[] => {
  const baseScore = correctAnswers / totalQuestions * 100;
  return [{
    name: "Grammar",
    score: Math.max(0, Math.min(100, baseScore + Math.random() * 10 - 5))
  }, {
    name: "Vocabulary",
    score: Math.max(0, Math.min(100, baseScore + Math.random() * 10 - 5))
  }];
};
