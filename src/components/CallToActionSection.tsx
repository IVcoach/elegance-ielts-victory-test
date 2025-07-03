
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, CheckCircle, Clock, Users, Award } from "lucide-react";
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
            Ready to Achieve Your IELTS Goals?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful students who achieved their target scores with our expert coaching
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-orange-200 transform hover:scale-105 transition-all">
            <CheckCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Coaching</h3>
            <p className="text-gray-600">Tailored learning plans based on your current level and goals</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-amber-200 transform hover:scale-105 transition-all">
            <Clock className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Schedule</h3>
            <p className="text-gray-600">Learn at your own pace with 24/7 support available</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-orange-200 transform hover:scale-105 transition-all">
            <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
            <p className="text-gray-600">90% of our students achieve their target score</p>
          </div>
        </div>

        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsAppContact}
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg shadow-xl transform hover:scale-105 transition-all flex items-center gap-3 px-8 py-4"
            >
              <MessageCircle className="h-6 w-6" />
              Get Expert Consultation
            </Button>
            
            <Button 
              onClick={handleTelegramJoin}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg shadow-xl transform hover:scale-105 transition-all flex items-center gap-3 px-8 py-4"
            >
              <Send className="h-6 w-6" />
              Join Study Community
            </Button>
          </div>
          
          <p className="text-sm text-gray-600 italic">
            Start your IELTS success journey today with V&C Elegance
          </p>
        </div>
      </div>
    </section>
  );
}
