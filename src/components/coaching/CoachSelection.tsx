
import { Star, Clock, ArrowLeft, ArrowRight, MessageSquare, PenTool, Users, Crown, MessageCircle, CreditCard, Landmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Coach, SessionType } from "./LiveCoachingBooking";

const mockCoaches: Coach[] = [
  // Head Coaches
  {
    id: "head-1",
    name: "Sammy",
    specializations: ["speaking", "writing", "general"],
    rating: 5.0,
    experience: "12+ years",
    price: 0, // Price to be discussed
    currency: "EUR",
    bio: "Head Coach with 12+ years of experience. Expert in all IELTS skills with proven track record of helping students achieve band 8+.",
    country: "Netherlands",
    isHeadCoach: true
  },
  {
    id: "head-2",
    name: "Evans",
    specializations: ["speaking", "writing", "general"],
    rating: 5.0,
    experience: "15+ years",
    price: 0, // Price to be discussed
    currency: "EUR",
    bio: "Senior Head Coach with 15+ years of expertise. Specializes in advanced IELTS strategies and exam psychology.",
    country: "Netherlands",
    isHeadCoach: true
  },
  {
    id: "head-3",
    name: "Brian",
    specializations: ["speaking", "writing", "general"],
    rating: 5.0,
    experience: "10+ years",
    price: 0, // Price to be discussed
    currency: "EUR",
    bio: "Head Coach with 10+ years of experience. Known for innovative teaching methods and exceptional student success rates.",
    country: "Netherlands",
    isHeadCoach: true
  },
  {
    id: "head-4",
    name: "Lisa",
    specializations: ["speaking", "writing", "general"],
    rating: 5.0,
    experience: "11+ years",
    price: 0, // Price to be discussed
    currency: "EUR",
    bio: "Head Coach with 11+ years of expertise. Specializes in personalized learning plans and confidence building.",
    country: "Netherlands",
    isHeadCoach: true
  },
  // Regular Coaches - Europe/Americas (varied pricing around 15 EUR)
  {
    id: "1",
    name: "Sarah Johnson",
    specializations: ["speaking", "general"],
    rating: 4.9,
    experience: "8 years",
    price: 14,
    currency: "EUR",
    bio: "IELTS expert with 8+ years of experience helping students achieve their target scores. Specialized in speaking confidence and test strategies.",
    country: "Netherlands"
  },
  {
    id: "2", 
    name: "Michael Chen",
    specializations: ["writing", "general"],
    rating: 4.8,
    experience: "6 years",
    price: 17,
    currency: "EUR",
    bio: "Former IELTS examiner with expertise in writing assessment. Helps students improve their writing band scores significantly.",
    country: "Netherlands",
    isFormerExaminer: true
  },
  {
    id: "3",
    name: "Emma Thompson", 
    specializations: ["speaking", "writing", "general"],
    rating: 4.9,
    experience: "10 years",
    price: 15,
    currency: "EUR",
    bio: "Comprehensive IELTS trainer with decade of experience. Specializes in all four skills and exam strategies.",
    country: "Netherlands"
  },
  {
    id: "4",
    name: "Marco Rossi",
    specializations: ["speaking", "general"],
    rating: 4.7,
    experience: "5 years",
    price: 12,
    currency: "EUR",
    bio: "Passionate IELTS coach from Italy with 5 years of experience. Specializes in building speaking confidence and fluency.",
    country: "Italy"
  },
  {
    id: "5",
    name: "Giulia Bianchi",
    specializations: ["writing", "speaking", "general"],
    rating: 4.8,
    experience: "7 years",
    price: 16,
    currency: "EUR",
    bio: "Italian IELTS expert with strong focus on writing techniques and speaking strategies. Helps students achieve band 7+ scores.",
    country: "Italy"
  },
  {
    id: "6",
    name: "Antonio Martinez",
    specializations: ["general", "writing"],
    rating: 4.6,
    experience: "4 years",
    price: 13,
    currency: "EUR",
    bio: "Dedicated IELTS tutor from Italy with 4 years of experience. Known for clear explanations and patient teaching approach.",
    country: "Italy"
  },
  // Asia/Middle East Coaches - Price to be discussed
  {
    id: "7",
    name: "Reza Ahmadi",
    specializations: ["speaking", "writing", "general"],
    rating: 4.9,
    experience: "9 years",
    price: 0, // Price to be discussed
    currency: "EUR",
    bio: "Experienced Iranian IELTS trainer with 9 years of expertise. Bilingual coach who understands Persian speakers' challenges.",
    country: "Iran",
    priceDiscussion: true
  },
  {
    id: "8",
    name: "Maryam Hosseini",
    specializations: ["writing", "general"],
    rating: 4.8,
    experience: "6 years",
    price: 0, // Price to be discussed
    currency: "EUR",
    bio: "Iranian IELTS specialist with 6 years of experience. Expert in academic writing and task achievement strategies.",
    country: "Iran",
    priceDiscussion: true
  },
  {
    id: "9",
    name: "Ali Karimi",
    specializations: ["speaking", "general"],
    rating: 4.7,
    experience: "5 years",
    price: 0, // Price to be discussed
    currency: "EUR",
    bio: "Iranian IELTS coach with 5 years of experience. Focuses on pronunciation improvement and speaking fluency for Persian speakers.",
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

  // Sort coaches to show head coaches first
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

      {/* Payment Methods Notice */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-200">
        <div className="flex items-center justify-center gap-4 mb-3">
          <CreditCard className="h-6 w-6 text-green-600" />
          <h3 className="text-lg font-bold text-gray-900">Payment Methods</h3>
          <Landmark className="h-6 w-6 text-blue-600" />
        </div>
        <div className="flex items-center justify-center gap-6 text-sm font-semibold text-gray-700">
          <div className="flex items-center gap-2">
            <span>💳</span>
            <span>Credit Card</span>
          </div>
          <div className="flex items-center gap-2">
            <span>💎</span>
            <span>Mastercard</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🏦</span>
            <span>Bank Transfer</span>
          </div>
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
            {/* Enhanced Head Coach Effects */}
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
              {/* Head Coach Crown */}
              {coach.isHeadCoach && (
                <div className="flex justify-center mb-3">
                  <div className="bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    <Crown size={14} />
                    PREMIUM HEAD COACH
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
                {coach.isHeadCoach || coach.priceDiscussion ? (
                  <div className="mb-3">
                    <div className="flex items-center justify-center gap-2 text-center mb-2">
                      <MessageCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-semibold text-gray-700">
                        Premium pricing via WhatsApp
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 text-center">
                      {coach.isHeadCoach ? "Exclusive premium coaching rates" : "Based on experience and session requirements"}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-[#D4AF37]">
                      €{coach.price}
                    </span>
                    <span className="text-gray-500 text-sm">per session</span>
                  </div>
                )}
                
                <Button 
                  className={cn(
                    "w-full transition-all duration-200 group-hover:scale-105 font-bold",
                    coach.isHeadCoach
                      ? "bg-gradient-to-r from-[#D4AF37] via-yellow-500 to-[#D4AF37] hover:from-[#D4AF37]/90 hover:via-yellow-500/90 hover:to-[#D4AF37]/90 shadow-xl text-black"
                      : "bg-gradient-to-r from-[#0A3D62] to-[#0A3D62]/80 hover:from-[#0A3D62]/90 hover:to-[#0A3D62]"
                  )}
                  onClick={() => handleCoachSelect(coach)}
                >
                  {coach.isHeadCoach ? "Select Premium Coach" : "Select Coach"}
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
