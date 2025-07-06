import { MessageSquare, PenTool, Users, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { SessionType } from "./LiveCoachingBooking";
interface SessionOption {
  type: SessionType;
  title: string;
  description: string;
  duration: number;
  price: number;
  features: string[];
  icon: React.ReactNode;
  color: string;
}
const sessionOptions: SessionOption[] = [{
  type: "speaking",
  title: "Speaking Practice",
  description: "Improve your speaking skills with personalized feedback",
  duration: 60,
  price: 45,
  features: ["Pronunciation guidance", "Fluency development", "Real IELTS speaking topics", "Instant feedback"],
  icon: <MessageSquare size={24} />,
  color: "from-blue-500 to-blue-600"
}, {
  type: "writing",
  title: "Writing Assessment",
  description: "Get expert review and improvement strategies",
  duration: 75,
  price: 55,
  features: ["Task 1 & 2 review", "Grammar correction", "Structure improvement", "Vocabulary enhancement"],
  icon: <PenTool size={24} />,
  color: "from-green-500 to-green-600"
}, {
  type: "general",
  title: "General Consultation",
  description: "Comprehensive IELTS preparation strategy",
  duration: 90,
  price: 65,
  features: ["Study plan creation", "All skills assessment", "Progress tracking", "Exam strategy"],
  icon: <Users size={24} />,
  color: "from-purple-500 to-purple-600"
}];
interface SessionTypeSelectionProps {
  onSelect: (sessionType: SessionType) => void;
}
export function SessionTypeSelection({
  onSelect
}: SessionTypeSelectionProps) {
  return <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Choose Your Session Type
        </h2>
        <p className="text-gray-600">
          Select the type of coaching session that best fits your needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {sessionOptions.map(option => <Card key={option.type} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-2 hover:border-[#0A3D62]/30" onClick={() => onSelect(option.type)}>
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
                    
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                {option.description}
              </p>

              <div className="space-y-2 mb-6">
                {option.features.map((feature, index) => <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0A3D62]" />
                    <span className="text-gray-700">{feature}</span>
                  </div>)}
              </div>

              <Button className="w-full bg-gradient-to-r from-[#0A3D62] to-[#0A3D62]/80 hover:from-[#0A3D62]/90 hover:to-[#0A3D62] transition-all duration-200 group-hover:scale-105" onClick={e => {
            e.stopPropagation();
            onSelect(option.type);
          }}>
                Select Session
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>)}
      </div>

      <div className="text-center text-sm text-gray-500">
        <p>All sessions include personalized feedback and action plan</p>
      </div>
    </div>;
}