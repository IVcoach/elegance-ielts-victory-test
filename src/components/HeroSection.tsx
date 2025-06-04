
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Trophy, Send, CheckCircle, MessageCircle } from "lucide-react";
import { useStarEffect } from "@/hooks/useStarEffect";

export function HeroSection() {
  const createStarEffect = useStarEffect();
  
  const handleTelegramResources = (e: React.MouseEvent) => {
    createStarEffect(e);
    window.open("https://t.me/ieltstori", "_blank", "noopener,noreferrer");
  };
  
  const handleWhatsAppContact = (e: React.MouseEvent) => {
    createStarEffect(e);
    const text = "Hello! I'm interested in IELTS coaching and would like more information about your programs.";
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/+31631267353?text=${encodedText}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="hero-gradient pt-24 pb-16 px-4 md:pt-32 md:pb-24">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in order-2 lg:order-1">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 lg:text-7xl">
              Professional IELTS Coaching <br />
              <span className="text-3xl md:text-4xl text-blue-800">
                Achieve Your Target Score
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 font-medium leading-relaxed">
              With over 50,000 hours of dedicated coaching experience and a proven 90% success rate, 
              V&C Elegance provides comprehensive IELTS preparation that delivers results.
            </p>
            
            {/* Enhanced Verification Badge */}
            <div className="bg-white/90 p-6 rounded-xl shadow-lg mb-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <span className="text-xl font-bold text-gray-900">Officially Verified</span>
              </div>
              <p className="text-base text-gray-700 mb-2">
                Cambridge University CERF Standards & IDP Education Protocols
              </p>
              <p className="text-sm text-gray-600">
                Establishment: 000061974544
              </p>
            </div>
            
            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <Button asChild size="lg" className="professional-button text-lg">
                <Link to="/test" onClick={createStarEffect} className="py-0 px-[130px]">Start Free Assessment</Link>
              </Button>
              <Button onClick={handleTelegramResources} size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold shadow-xl transform hover:scale-105 transition-all flex items-center gap-2">
                <Send className="h-5 w-5" />
                Join @ieltstori Community
              </Button>
              <Button onClick={handleWhatsAppContact} size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold shadow-xl transform hover:scale-105 transition-all flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Consultation
              </Button>
            </div>
            
            {/* Enhanced Professional Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-blue-800">50K+</div>
                <div className="text-sm text-gray-600 font-medium">Hours Coaching</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-green-700">90%</div>
                <div className="text-sm text-gray-600 font-medium">Success Rate</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-purple-700">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Support</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-orange-600">Expert</div>
                <div className="text-sm text-gray-600 font-medium">Guidance</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in order-1 lg:order-2">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/70 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <img alt="Professional IELTS coaching environment" className="w-full h-full object-cover" src="/lovable-uploads/beea0598-c030-434b-9144-f1c9a9bbef8c.jpg" />
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full shadow-lg">
              <Award className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-600 to-green-700 text-white p-3 rounded-full shadow-lg">
              <Trophy className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
