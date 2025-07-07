
import { MessageSquare, PenTool, Users, ArrowRight, BookOpen, Headphones, FileText, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SessionType } from "./LiveCoachingBooking";

interface SessionOption {
  type: SessionType;
  title: string;
  description: string;
  duration: number;
  features: string[];
  icon: React.ReactNode;
  color: string;
}

const sessionOptions: SessionOption[] = [
  {
    type: "speaking",
    title: "Speaking Practice",
    description: "Improve your speaking skills with personalized feedback",
    duration: 60,
    features: ["Pronunciation guidance", "Fluency development", "Real IELTS speaking topics", "Instant feedback"],
    icon: <MessageSquare size={24} />,
    color: "from-blue-500 to-blue-600"
  },
  {
    type: "writing",
    title: "Writing Assessment",
    description: "Get expert review and improvement strategies",
    duration: 75,
    features: ["Task 1 & 2 review", "Structure improvement", "Vocabulary enhancement", "Academic writing techniques"],
    icon: <PenTool size={24} />,
    color: "from-green-500 to-green-600"
  },
  {
    type: "reading",
    title: "Reading Comprehension",
    description: "Master reading strategies and comprehension techniques",
    duration: 60,
    features: ["Speed reading techniques", "Comprehension strategies", "Question type analysis", "Time management"],
    icon: <BookOpen size={24} />,
    color: "from-purple-500 to-purple-600"
  },
  {
    type: "listening",
    title: "Listening Skills",
    description: "Enhance your listening comprehension and note-taking",
    duration: 60,
    features: ["Accent recognition", "Note-taking strategies", "Audio analysis", "Concentration techniques"],
    icon: <Headphones size={24} />,
    color: "from-orange-500 to-orange-600"
  },
  {
    type: "grammar",
    title: "Grammar Mastery",
    description: "Perfect your grammar and sentence structures",
    duration: 60,
    features: ["Complex structures", "Error correction", "Grammar rules", "Practical application"],
    icon: <FileText size={24} />,
    color: "from-red-500 to-red-600"
  },
  {
    type: "general-language",
    title: "General Language",
    description: "Comprehensive language development and proficiency",
    duration: 90,
    features: ["Overall proficiency", "Language fluency", "Communication skills", "Confidence building"],
    icon: <Languages size={24} />,
    color: "from-indigo-500 to-indigo-600"
  }
];

interface SessionTypeSelectionProps {
  onSelect: (sessionType: SessionType) => void;
}

export function SessionTypeSelection({ onSelect }: SessionTypeSelectionProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Choose Your Session Type
        </h2>
        <p className="text-gray-600">
          Select the type of coaching session that best fits your needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sessionOptions.map((option) => (
          <Card
            key={option.type}
            className="relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-2 hover:border-[#0A3D62]/30"
            onClick={() => onSelect(option.type)}
          >
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${option.color}`} />
            
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${option.color} text-white`}>
                  {option.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {option.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{option.duration} min</span>
                    <span>•</span>
                    <span>Flexible pricing</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                {option.description}
              </p>

              <div className="space-y-2 mb-6">
                {option.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0A3D62]" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className="w-full bg-gradient-to-r from-[#0A3D62] to-[#0A3D62]/80 hover:from-[#0A3D62]/90 hover:to-[#0A3D62] transition-all duration-200 group-hover:scale-105"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(option.type);
                }}
              >
                Select Session
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center text-sm text-gray-500">
        <p>All sessions include personalized feedback and flexible pricing based on your package</p>
      </div>
    </div>
  );
}
