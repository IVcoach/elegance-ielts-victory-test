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
      <div className="absolute inset-0 opacity-10 -bottom-0 bg-white">
        <div className="absolute top-16 left-16 animate-pulse">
          <Award className="h-12 w-12 text-amber-400" />
        </div>
        <div className="absolute bottom-16 right-16 animate-pulse delay-1000">
          <Users className="h-12 w-12 text-orange-400" />
        </div>
      </div>

      <div className="container max-w-4xl mx-auto text-center relative z-10 bg-yellow-800">
        {/* Main Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Achieve Your
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"> IELTS Goals?</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their target scores with our expert guidance and proven methodology.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 max-w-xl mx-auto">
          <Button onClick={handleWhatsAppContact} size="lg" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold px-8 py-4 rounded-lg shadow-xl transform hover:scale-105 transition-all flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Start Your Journey
          </Button>
          
          <Button onClick={handleTelegramJoin} size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-lg shadow-xl transform hover:scale-105 transition-all flex items-center gap-2">
            <Send className="h-5 w-5" />
            Join Study Group
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transform hover:scale-105 transition-all">
            <CheckCircle className="h-10 w-10 text-orange-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2 text-slate-950">Proven Results</h3>
            <p className="text-sm text-slate-950">90% of our students achieve their target score within 2 attempts</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transform hover:scale-105 transition-all">
            <Clock className="h-10 w-10 text-amber-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2 text-slate-950">24/7 Support</h3>
            <p className="text-sm text-slate-950">Get help whenever you need it with our round-the-clock assistance</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transform hover:scale-105 transition-all">
            <Award className="h-10 w-10 text-orange-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2 text-slate-950">Expert Coaching</h3>
            <p className="text-sm text-slate-950">Cambridge certified instructors with 5+ years of experience</p>
          </div>
        </div>
        
        {/* Professional Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300 max-w-3xl mx-auto mb-10">
          <div className="text-center transform hover:scale-105 transition-all p-3">
            <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-1">50K+</div>
            <div className="text-xs md:text-sm font-medium bg-transparent">Hours Coaching</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-all p-3">
            <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">90%</div>
            <div className="text-xs md:text-sm font-medium">Success Rate</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-all p-3">
            <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-1">24/7</div>
            <div className="text-xs md:text-sm font-medium">Support</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-all p-3">
            <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">2000+</div>
            <div className="text-xs md:text-sm font-medium bg-transparent">Successful Students</div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
          <p className="text-lg font-bold text-white mb-3">🎯 Why Choose V&C Elegance?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-300">
            <p className="flex items-center justify-center gap-2 text-slate-950">
              <CheckCircle className="h-4 w-4 text-orange-400" />
              Cambridge University CERF Certified
            </p>
            <p className="flex items-center justify-center gap-2 text-slate-950">
              <CheckCircle className="h-4 w-4 text-orange-400" />
              IDP Education Protocols Verified
            </p>
            <p className="flex items-center justify-center gap-2 text-slate-950">
              <CheckCircle className="h-4 w-4 text-amber-400" />
              Company License: 000061974544
            </p>
            <p className="flex items-center justify-center gap-2 text-slate-950">
              <CheckCircle className="h-4 w-4 text-orange-400" />
              5+ Years Proven Track Record
            </p>
          </div>
        </div>
      </div>
    </section>;
}