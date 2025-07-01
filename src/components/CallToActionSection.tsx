
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
    <section className="py-16 px-6 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Achieve Your IELTS Goals?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who achieved their target scores with our proven coaching methods.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <Button 
            onClick={handleWhatsAppContact}
            size="lg" 
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-8 py-4 text-lg shadow-xl transform hover:scale-105 transition-all flex items-center gap-3"
          >
            <MessageCircle className="h-6 w-6" />
            Start Your Journey
          </Button>
          
          <Button 
            onClick={handleTelegramJoin}
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 text-lg shadow-xl transform hover:scale-105 transition-all flex items-center gap-3"
          >
            <Send className="h-6 w-6" />
            Join Study Group
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Proven Results</h3>
            <p className="text-gray-600">90% success rate with personalized coaching</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock guidance and assistance</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <Award className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Coaching</h3>
            <p className="text-gray-600">Cambridge certified professional guidance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
