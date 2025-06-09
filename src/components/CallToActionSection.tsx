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
  return <section className="py-16 px-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-16 animate-pulse">
          <Award className="h-12 w-12 text-yellow-400" />
        </div>
        <div className="absolute bottom-16 right-16 animate-pulse delay-1000">
          <Users className="h-12 w-12 text-blue-400" />
        </div>
      </div>

      <div className="container max-w-4xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <div className="mb-12">
          
          
        </div>

        {/* CTA Buttons - Centered */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 max-w-xl mx-auto">
          
          
          
        </div>

        {/* Benefits Grid - Improved Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 transform hover:scale-105 transition-all">
            <CheckCircle className="h-10 w-10 text-green-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Proven Results</h3>
            <p className="text-gray-300 text-sm">90% of our students achieve their target score within 2 attempts</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 transform hover:scale-105 transition-all">
            <Clock className="h-10 w-10 text-blue-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">24/7 Support</h3>
            <p className="text-gray-300 text-sm">Get help whenever you need it with our round-the-clock assistance</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 transform hover:scale-105 transition-all">
            <Award className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Expert Coaching</h3>
            <p className="text-gray-300 text-sm">Cambridge certified instructors with 5+ years of experience</p>
          </div>
        </div>
        
        {/* Professional Statistics - Better Spacing */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300 max-w-3xl mx-auto mb-10">
          <div className="text-center transform hover:scale-105 transition-all p-3">
            <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">50K+</div>
            <div className="text-xs md:text-sm font-medium">Hours Coaching</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-all p-3">
            <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">90%</div>
            <div className="text-xs md:text-sm font-medium">Success Rate</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-all p-3">
            <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">24/7</div>
            <div className="text-xs md:text-sm font-medium">Support</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-all p-3">
            <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">2000+</div>
            <div className="text-xs md:text-sm font-medium">Successful Students</div>
          </div>
        </div>

        {/* Trust indicators - Centered */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 max-w-2xl mx-auto">
          <p className="text-lg font-bold text-white mb-3">🎯 Why Choose V&C Elegance?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-300">
            <p className="flex items-center justify-center gap-2">
              <CheckCircle className="h-3 w-3 text-green-400" />
              Cambridge University CERF Certified
            </p>
            <p className="flex items-center justify-center gap-2">
              <CheckCircle className="h-3 w-3 text-green-400" />
              IDP Education Protocols Verified
            </p>
            <p className="flex items-center justify-center gap-2">
              <CheckCircle className="h-3 w-3 text-blue-400" />
              Business Registration: 000061974544
            </p>
            <p className="flex items-center justify-center gap-2">
              <CheckCircle className="h-3 w-3 text-yellow-400" />
              5+ Years Proven Track Record
            </p>
          </div>
        </div>
      </div>
    </section>;
}