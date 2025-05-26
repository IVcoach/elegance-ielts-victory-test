
import { Question } from "@/components/QuestionCard";

// Enhanced IELTS-style multiple choice questions
export const testQuestions: Question[] = [
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
export const correctAnswers: { [key: string]: string } = {
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
export const assessmentImages = [
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop", // Students studying
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop", // Laptop with coding - academic setting
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop", // People with laptops - learning environment
  "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop", // Graduation cap - academic achievement
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop"  // Students in classroom
];
