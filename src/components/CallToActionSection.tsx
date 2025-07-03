
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Users, Award } from "lucide-react";
import { useStarEffect } from "@/hooks/useStarEffect";

export function CallToActionSection() {
  const createStarEffect = useStarEffect();

  const handleWhatsAppContact = (e: React.MouseEvent) => {
    createStarEffect(e);
    const text = "Hello! I'm ready to start my IELTS journey and would like to learn more about your coaching programs.";
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/+31631267353?text=${encodedText}`, "_blank", "noopener,noreferrer");
  };

  const handleTelegramJoin = (e: React.MouseEvent) => {
    createStarEffect(e);
    window.open("https://t.me/ieltstori", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-pulse">
          <Users className="h-12 w-12 text-orange-600" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-1000">
          <Award className="h-12 w-12 text-amber-600" />
        </div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={handleWhatsAppContact}
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 hover:from-emerald-600 hover:via-green-700 hover:to-teal-700 text-white font-bold text-xl shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-4 px-10 py-6 rounded-2xl border-4 border-white/20 backdrop-blur-sm min-h-[70px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <MessageCircle className="h-8 w-8 drop-shadow-lg" />
              <span className="relative z-10 drop-shadow-lg">💬 Expert Consultation</span>
            </Button>
            
            <Button 
              onClick={handleTelegramJoin}
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 hover:from-blue-600 hover:via-indigo-700 hover:to-purple-700 text-white font-bold text-xl shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-4 px-10 py-6 rounded-2xl border-4 border-white/20 backdrop-blur-sm min-h-[70px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Send className="h-8 w-8 drop-shadow-lg" />
              <span className="relative z-10 drop-shadow-lg">📚 Study Community</span>
            </Button>
          </div>
          
          <p className="text-lg text-gray-700 font-semibold italic bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-orange-200 max-w-2xl mx-auto">
            Start your IELTS success journey today with V&C Elegance
          </p>
        </div>
      </div>
    </section>
  );
}
