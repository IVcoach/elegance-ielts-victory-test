
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
    <section className="py-24 px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 animate-pulse">
          <Award className="h-16 w-16 text-yellow-400" />
        </div>
        <div className="absolute bottom-20 right-20 animate-pulse delay-1000">
          <Users className="h-16 w-16 text-blue-400" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-2000">
          <CheckCircle className="h-20 w-20 text-green-400" />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        {/* Enhanced heading */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Ready to Start Your IELTS Journey?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
            Join hundreds of successful students who achieved their target scores
          </p>
          <div className="flex justify-center items-center gap-2 mb-8">
            <Clock className="h-5 w-5 text-green-400" />
            <span className="text-green-400 font-bold">Free consultation available now!</span>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            onClick={handleWhatsAppContact}
            size="lg" 
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-xl py-6 px-8 shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-green-400"
          >
            <MessageCircle className="h-6 w-6 mr-3" />
            🚀 Start Free Consultation
          </Button>
          
          <Button 
            onClick={handleTelegramJoin}
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-xl py-6 px-8 shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-400"
          >
            <Send className="h-6 w-6 mr-3" />
            📚 Join Study Community
          </Button>
        </div>

        {/* Enhanced Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transform hover:scale-105 transition-all">
            <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">✅ Free Assessment</h3>
            <p className="text-gray-300">Get your current level evaluated</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transform hover:scale-105 transition-all">
            <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">👥 Expert Mentoring</h3>
            <p className="text-gray-300">Personalized 1-on-1 coaching</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transform hover:scale-105 transition-all">
            <Award className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">🏆 Proven Results</h3>
            <p className="text-gray-300">90% success rate guarantee</p>
          </div>
        </div>
        
        {/* Enhanced Professional Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-300">
          <div className="text-center transform hover:scale-105 transition-all">
            <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">50K+</div>
            <div className="text-sm md:text-base font-medium">Hours Coaching</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-all">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">90%</div>
            <div className="text-sm md:text-base font-medium">Success Rate</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-all">
            <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-sm md:text-base font-medium">Support</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-all">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">2000+</div>
            <div className="text-sm md:text-base font-medium">Successful Students</div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
          <p className="text-lg font-bold text-white mb-2">🎯 Why Choose V&C Elegance?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
            <p>✅ Cambridge University CERF Certified</p>
            <p>✅ IDP Education Protocols Verified</p>
            <p>✅ Business Registration: 000061974544</p>
            <p>✅ 5+ Years Proven Track Record</p>
          </div>
        </div>
      </div>
    </section>
  );
}
