
import { Star, Clock, ArrowLeft, ArrowRight, MessageSquare, PenTool, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Coach, SessionType } from "./LiveCoachingBooking";

const mockCoaches: Coach[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    specializations: ["speaking", "general"],
    rating: 4.9,
    experience: "8 years",
    price: 45,
    currency: "USD",
    bio: "IELTS expert with 8+ years of experience helping students achieve their target scores. Specialized in speaking confidence and test strategies."
  },
  {
    id: "2", 
    name: "Michael Chen",
    specializations: ["writing", "general"],
    rating: 4.8,
    experience: "6 years",
    price: 50,
    currency: "USD",
    bio: "Former IELTS examiner with expertise in writing assessment. Helps students improve their writing band scores significantly."
  },
  {
    id: "3",
    name: "Emma Thompson", 
    specializations: ["speaking", "writing", "general"],
    rating: 4.9,
    experience: "10 years",
    price: 60,
    currency: "USD",
    bio: "Comprehensive IELTS trainer with decade of experience. Specializes in all four skills and exam strategies."
  }
];

interface CoachSelectionProps {
  sessionType?: SessionType;
  onSelect: (coach: Coach) => void;
  onBack: () => void;
}

export function CoachSelection({ sessionType, onSelect, onBack }: CoachSelectionProps) {
  const filteredCoaches = sessionType 
    ? mockCoaches.filter(coach => coach.specializations.includes(sessionType))
    : mockCoaches;

  const getSessionIcon = (type: SessionType) => {
    switch (type) {
      case "speaking":
        return <MessageSquare size={14} />;
      case "writing":
        return <PenTool size={14} />;
      case "general":
        return <Users size={14} />;
    }
  };

  const getSessionColor = (type: SessionType) => {
    switch (type) {
      case "speaking":
        return "bg-blue-100 text-blue-700";
      case "writing":
        return "bg-green-100 text-green-700";
      case "general":
        return "bg-purple-100 text-purple-700";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back
        </Button>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Choose Your Coach
          </h2>
          <p className="text-gray-600">
            Select an expert coach for your {sessionType} session
          </p>
        </div>
        
        <div className="w-20" /> {/* Spacer for centering */}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCoaches.map((coach) => (
          <Card
            key={coach.id}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-2 hover:border-[#0A3D62]/30"
          >
            <CardContent className="p-6">
              {/* Coach Avatar & Basic Info */}
              <div className="text-center mb-4">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-r from-[#0A3D62] to-[#D4AF37] flex items-center justify-center text-white font-bold text-2xl">
                  {coach.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-1">
                  {coach.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-[#D4AF37] fill-current" />
                    <span className="font-semibold text-gray-700">
                      {coach.rating}
                    </span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock size={14} />
                    <span>{coach.experience}</span>
                  </div>
                </div>
              </div>

              {/* Specializations */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {coach.specializations.map((spec) => (
                  <Badge
                    key={spec}
                    variant="secondary"
                    className={cn(
                      "text-xs flex items-center gap-1",
                      getSessionColor(spec)
                    )}
                  >
                    {getSessionIcon(spec)}
                    {spec.charAt(0).toUpperCase() + spec.slice(1)}
                  </Badge>
                ))}
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {coach.bio}
              </p>

              {/* Price & Book Button */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-[#D4AF37]">
                    ${coach.price}
                  </span>
                  <span className="text-gray-500 text-sm">per session</span>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-[#0A3D62] to-[#0A3D62]/80 hover:from-[#0A3D62]/90 hover:to-[#0A3D62] transition-all duration-200 group-hover:scale-105"
                  onClick={() => onSelect(coach)}
                >
                  Select Coach
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCoaches.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No coaches available for {sessionType} sessions at the moment.
          </p>
        </div>
      )}
    </div>
  );
}
