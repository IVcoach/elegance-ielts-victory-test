
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
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Achieve Your
            <span className="text-pink-600 block">IELTS Goals?</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Join thousands of successful students who achieved their target scores with our personalized coaching approach.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">95% of our students achieve their target scores</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Clock className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Track</h3>
              <p className="text-gray-600">Get results in as little as 4-6 weeks</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Award className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Learn from certified IELTS instructors</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsAppContact}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Start Your Journey Today
            </Button>
            
            <Button 
              onClick={handleTelegramJoin}
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
            >
              <Send className="w-6 h-6" />
              Join Our Community
            </Button>
          </div>
          
          <div className="mt-8 flex justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>5000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
