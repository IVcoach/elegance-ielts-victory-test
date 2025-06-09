
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
    <section className="py-20 px-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white relative overflow-hidden">
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

      <div className="container max-w-5xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Achieve Your IELTS Goals?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful students who achieved their target scores with our proven coaching methods.
          </p>
        </div>

        {/* CTA Buttons - Centered */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 max-w-2xl mx-auto">
          <Button 
            onClick={handleWhatsAppContact}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl transform hover:scale-105 transition-all flex items-center gap-3 text-lg"
          >
            <MessageCircle className="h-6 w-6" />
            Start Your Journey
          </Button>
          
          <Button 
            onClick={handleTelegramJoin}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl transform hover:scale-105 transition-all flex items-center gap-3 text-lg"
          >
            <Send className="h-6 w-6" />
            Join Study Community
          </Button>
        </div>

        {/* Benefits Grid - Improved Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transform hover:scale-105 transition-all">
            <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
            <p className="text-gray-300">90% of our students achieve their target score within 2 attempts</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transform hover:scale-105 transition-all">
            <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
            <p className="text-gray-300">Get help whenever you need it with our round-the-clock assistance</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transform hover:scale-105 transition-all">
            <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Expert Coaching</h3>
            <p className="text-gray-300">Cambridge certified instructors with 5+ years of experience</p>
          </div>
        </div>
        
        {/* Professional Statistics - Better Spacing */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300 max-w-4xl mx-auto mb-12">
          <div className="text-center transform hover:scale-105 transition-all p-4">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50K+</div>
            <div className="text-sm md:text-base font-medium">Hours Coaching</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-all p-4">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">90%</div>
            <div className="text-sm md:text-base font-medium">Success Rate</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-all p-4">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-sm md:text-base font-medium">Support</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-all p-4">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">2000+</div>
            <div className="text-sm md:text-base font-medium">Successful Students</div>
          </div>
        </div>

        {/* Trust indicators - Centered */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-3xl mx-auto">
          <p className="text-xl font-bold text-white mb-4">🎯 Why Choose V&C Elegance?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
            <p className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Cambridge University CERF Certified
            </p>
            <p className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              IDP Education Protocols Verified
            </p>
            <p className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-400" />
              Business Registration: 000061974544
            </p>
            <p className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-yellow-400" />
              5+ Years Proven Track Record
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
