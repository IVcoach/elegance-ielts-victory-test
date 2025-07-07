
import { Star, Clock, ArrowLeft, ArrowRight, MessageSquare, PenTool, Users, Crown, MessageCircle, BookOpen, Headphones, FileText, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Coach, SessionType } from "./LiveCoachingBooking";

// Updated session types to include all skills
export type ExtendedSessionType = "speaking" | "writing" | "reading" | "listening" | "grammar" | "general-language";

const mockCoaches: Coach[] = [
  // VIP Head Coaches - All with comprehensive specialized services
  {
    id: "vip-1",
    name: "Sammy",
    specializations: ["speaking", "writing", "reading", "listening", "grammar", "general-language"] as SessionType[],
    rating: 5.0,
    experience: "12+ years",
    price: 0, // Negotiable
    currency: "EUR",
    bio: "Premium VIP Head Coach specializing in rapid score improvement strategies, comprehensive mock exam analysis, and personalized study plans. Expert in all IELTS skills with proven track record of helping students jump from Band 5 to Band 8+. Offers exclusive job interview preparation sessions.",
    country: "Netherlands",
    isHeadCoach: true
  },
  {
    id: "vip-2", 
    name: "Evans",
    specializations: ["speaking", "writing", "reading", "listening", "grammar", "general-language"] as SessionType[],
    rating: 5.0,
    experience: "15+ years",
    price: 0, // Negotiable
    currency: "EUR",
    bio: "Senior VIP Head Coach with 15+ years of expertise in advanced IELTS strategies and exam psychology. Specializes in finding innovative solutions to overcome score plateaus, comprehensive mock exam sessions with detailed analysis, and career-focused English coaching including job interview mastery.",
    country: "Netherlands",
    isHeadCoach: true
  },
  {
    id: "vip-3",
    name: "Brian", 
    specializations: ["speaking", "writing", "reading", "listening", "grammar", "general-language"] as SessionType[],
    rating: 5.0,
    experience: "10+ years",
    price: 0, // Negotiable
    currency: "EUR",
    bio: "VIP Head Coach renowned for innovative score-jumping techniques and breakthrough teaching methods. Expert in identifying and solving specific improvement barriers, conducting intensive mock exams with comprehensive feedback, and specialized job interview coaching for international professionals.",
    country: "Netherlands",
    isHeadCoach: true
  },
  {
    id: "vip-4",
    name: "Lisa",
    specializations: ["speaking", "writing", "reading", "listening", "grammar", "general-language"] as SessionType[],
    rating: 5.0,
    experience: "11+ years", 
    price: 0, // Negotiable
    currency: "EUR",
    bio: "VIP Head Coach specializing in personalized score improvement strategies and confidence building across all IELTS skills. Expert in rapid band score enhancement, detailed mock exam analysis, strategic study planning, and professional job interview preparation for career advancement.",
    country: "Netherlands",
    isHeadCoach: true
  },
  // Regular Coaches - Europe/Americas with varied skill combinations
  {
    id: "1",
    name: "Sarah Johnson",
    specializations: ["speaking", "listening"] as SessionType[],
    rating: 4.9,
    experience: "8 years",
    price: 0, // Negotiable
    currency: "EUR", 
    bio: "IELTS expert with 8+ years of experience specializing in speaking confidence and listening comprehension strategies. Helps students achieve fluency and accurate understanding.",
    country: "Netherlands"
  },
  {
    id: "2",
    name: "Michael Chen",
    specializations: ["writing", "grammar"] as SessionType[],
    rating: 4.8,
    experience: "6 years",
    price: 0, // Negotiable
    currency: "EUR",
    bio: "Former IELTS examiner with expertise in writing assessment and advanced grammar structures. Specializes in improving writing band scores and grammatical accuracy.",
    country: "Netherlands",
    isFormerExaminer: true
  },
  {
    id: "3", 
    name: "Emma Thompson",
    specializations: ["reading", "general-language"] as SessionType[],
    rating: 4.9,
    experience: "10 years",
    price: 0, // Negotiable
    currency: "EUR",
    bio: "Comprehensive IELTS trainer with expertise in reading strategies and general language development. Focuses on comprehension techniques and overall language proficiency.",
    country: "Netherlands"
  },
  {
    id: "4",
    name: "Marco Rossi", 
    specializations: ["speaking", "grammar"] as SessionType[],
    rating: 4.7,
    experience: "5 years",
    price: 0, // Negotiable
    currency: "EUR",
    bio: "Passionate coach specializing in speaking fluency and grammatical accuracy. Helps students build confidence while mastering complex grammar structures.",
    country: "Italy"
  },
  {
    id: "5",
    name: "Giulia Bianchi",
    specializations: ["writing", "reading"] as SessionType[],
    rating: 4.8,
    experience: "7 years", 
    price: 0, // Negotiable
    currency: "EUR",
    bio: "Italian expert focusing on writing techniques and reading comprehension strategies. Helps students achieve Band 7+ in academic skills.",
    country: "Italy"
  },
  {
    id: "6",
    name: "Antonio Martinez",
    specializations: ["listening", "general-language"] as SessionType[],
    rating: 4.6,
    experience: "4 years",
    price: 0, // Negotiable
    currency: "EUR", 
    bio: "Dedicated tutor specializing in listening skills and general language development. Known for patient teaching approach and clear explanations.",
    country: "Italy"
  },
  // Asia/Middle East Coaches - All negotiable pricing
  {
    id: "7",
    name: "Reza Ahmadi",
    specializations: ["speaking", "writing", "grammar"] as SessionType[],
    rating: 4.9,
    experience: "9 years",
    price: 0, // Negotiable
    currency: "EUR",
    bio: "Experienced Iranian trainer with 9 years of expertise in speaking, writing, and grammar. Bilingual coach who understands Persian speakers' specific challenges.",
    country: "Iran",
    priceDiscussion: true
  },
  {
    id: "8", 
    name: "Maryam Hosseini",
    specializations: ["writing", "reading"] as SessionType[],
    rating: 4.8,
    experience: "6 years",
    price: 0, // Negotiable
    currency: "EUR",
    bio: "Iranian specialist in academic writing and reading comprehension strategies. Expert in task achievement and comprehension techniques.",
    country: "Iran",
    priceDiscussion: true
  },
  {
    id: "9",
    name: "Ali Karimi", 
    specializations: ["speaking", "listening"] as SessionType[],
    rating: 4.7,
    experience: "5 years",
    price: 0, // Negotiable
    currency: "EUR",
    bio: "Iranian coach focusing on pronunciation improvement and listening skills development for Persian speakers seeking fluency enhancement.",
    country: "Iran",
    priceDiscussion: true
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
      case "reading":
        return <BookOpen size={14} />;
      case "listening":
        return <Headphones size={14} />;
      case "grammar":
        return <FileText size={14} />;
      case "general-language":
        return <Languages size={14} />;
      default:
        return <Users size={14} />;
    }
  };

  const getSessionColor = (type: SessionType) => {
    switch (type) {
      case "speaking":
        return "bg-blue-100 text-blue-700";
      case "writing":
        return "bg-green-100 text-green-700";
      case "reading":
        return "bg-purple-100 text-purple-700";
      case "listening":
        return "bg-orange-100 text-orange-700";
      case "grammar":
        return "bg-red-100 text-red-700";
      case "general-language":
        return "bg-indigo-100 text-indigo-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getSessionLabel = (type: SessionType) => {
    switch (type) {
      case "general-language":
        return "General Language";
      default:
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };

  const getCountryFlag = (country: string) => {
    switch (country) {
      case "Netherlands":
        return "🇳🇱";
      case "Italy":
        return "🇮🇹";
      case "Iran":
        return "🇮🇷";
      default:
        return "🌍";
    }
  };

  const handleCoachSelect = (coach: Coach) => {
    onSelect(coach);
  };

  // Sort coaches to show VIP coaches first
  const sortedCoaches = [...filteredCoaches].sort((a, b) => {
    if (a.isHeadCoach && !b.isHeadCoach) return -1;
    if (!a.isHeadCoach && b.isHeadCoach) return 1;
    return 0;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back to Session Types
        </Button>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Choose Your Coach
          </h2>
          <p className="text-gray-600">
            Select an expert coach for your {sessionType} session
          </p>
        </div>
        
        <div className="w-40" /> {/* Spacer for centering */}
      </div>

      {/* Pricing Notice */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border-2 border-amber-200">
        <div className="flex items-center justify-center gap-4 mb-3">
          <MessageCircle className="h-6 w-6 text-amber-600" />
          <h3 className="text-lg font-bold text-gray-900">Flexible Pricing</h3>
        </div>
        <div className="text-center text-gray-700">
          <p className="font-semibold mb-2">All coaching sessions feature negotiable pricing</p>
          <p className="text-sm">Rates are customized based on your package level, number of sessions, and specific requirements. Contact us via WhatsApp to discuss your personalized pricing plan.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCoaches.map((coach) => (
          <Card
            key={coach.id}
            className={cn(
              "overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2 hover:border-[#0A3D62]/30 relative",
              coach.isHeadCoach && "border-[#D4AF37] bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 shadow-xl transform hover:scale-105"
            )}
          >
            {/* Enhanced VIP Coach Effects */}
            {coach.isHeadCoach && (
              <>
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-yellow-500 to-[#D4AF37] rounded-lg opacity-75 animate-pulse"></div>
                <div className="absolute inset-[2px] bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 rounded-lg"></div>
                
                {/* Floating crown effect */}
                <div className="absolute -top-3 -right-3 z-20">
                  <div className="bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-white p-2 rounded-full shadow-xl animate-bounce">
                    <Crown size={16} />
                  </div>
                </div>
              </>
            )}

            <CardContent className={cn("p-6 relative", coach.isHeadCoach && "z-10")}>
              {/* VIP Coach Crown */}
              {coach.isHeadCoach && (
                <div className="flex justify-center mb-3">
                  <div className="bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    <Crown size={14} />
                    VIP PREMIUM MENTOR
                    <Crown size={14} />
                  </div>
                </div>
              )}

              {/* Coach Avatar & Basic Info */}
              <div className="text-center mb-4">
                <div className={cn(
                  "w-20 h-20 mx-auto mb-3 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg",
                  coach.isHeadCoach 
                    ? "bg-gradient-to-r from-[#D4AF37] via-yellow-500 to-[#D4AF37] ring-4 ring-yellow-300" 
                    : "bg-gradient-to-r from-[#0A3D62] to-[#D4AF37]"
                )}>
                  {coach.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className={cn(
                  "font-bold text-xl mb-1",
                  coach.isHeadCoach ? "text-[#D4AF37] text-2xl" : "text-gray-900"
                )}>
                  {coach.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-lg">{getCountryFlag(coach.country!)}</span>
                  <span className="text-gray-600 text-sm">{coach.country}</span>
                  {coach.isFormerExaminer && (
                    <Badge className="bg-red-100 text-red-700 text-xs">
                      Ex-Examiner
                    </Badge>
                  )}
                </div>
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
                      getSessionColor(spec),
                      coach.isHeadCoach && "ring-1 ring-[#D4AF37]"
                    )}
                  >
                    {getSessionIcon(spec)}
                    {getSessionLabel(spec)}
                  </Badge>
                ))}
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-4">
                {coach.bio}
              </p>

              {/* Negotiable Pricing & Book Button */}
              <div className="border-t pt-4">
                <div className="mb-3">
                  <div className="flex items-center justify-center gap-2 text-center mb-2">
                    <MessageCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-semibold text-gray-700">
                      {coach.isHeadCoach ? "VIP Premium Pricing" : "Flexible Pricing"}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    {coach.isHeadCoach 
                      ? "Customized rates based on package and sessions via WhatsApp" 
                      : "Negotiable based on package level and session count"}
                  </p>
                </div>
                
                <Button 
                  className={cn(
                    "w-full transition-all duration-200 group-hover:scale-105 font-bold",
                    coach.isHeadCoach
                      ? "bg-gradient-to-r from-[#D4AF37] via-yellow-500 to-[#D4AF37] hover:from-[#D4AF37]/90 hover:via-yellow-500/90 hover:to-[#D4AF37]/90 shadow-xl text-black"
                      : "bg-gradient-to-r from-[#0A3D62] to-[#0A3D62]/80 hover:from-[#0A3D62]/90 hover:to-[#0A3D62]"
                  )}
                  onClick={() => handleCoachSelect(coach)}
                >
                  {coach.isHeadCoach ? "Select VIP Mentor" : "Select Coach"}
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
          <Button
            variant="outline"
            onClick={onBack}
            className="mt-4"
          >
            Try Different Session Type
          </Button>
        </div>
      )}
    </div>
  );
}
