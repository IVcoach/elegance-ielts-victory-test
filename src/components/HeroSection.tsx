
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Trophy, Send, CheckCircle, MessageCircle, Users, Globe } from "lucide-react";
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
  return <section className="hero-gradient pt-20 pb-16 px-6 md:pt-28 md:pb-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-pulse">
          <Users className="h-8 w-8 text-orange-600" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <Globe className="h-12 w-12 text-amber-600" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-pulse delay-2000">
          <Award className="h-10 w-10 text-orange-700" />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content - Order 2 on mobile (below image) */}
          <div className="animate-fade-in order-2 text-center lg:text-left">
            {/* Main Heading */}
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 text-center px-0 mx-0 my-[30px]">
                Professional IELTS Coaching
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl text-orange-700 bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
                  Achieve Your Target Score
                </span>
              </h1>
            </div>

            <p className="text-base md:text-lg text-gray-800 mb-6 font-medium leading-relaxed max-w-2xl">
              With over 50,000 hours of dedicated coaching experience and a proven 90% success rate, 
              IELTStory (powered by V&C Elegance) provides comprehensive IELTS preparation that delivers exceptional results.
            </p>
            
            {/* Verification Badge */}
            <div className="bg-white/95 p-4 rounded-xl shadow-lg mb-6 border-2 border-orange-200 relative overflow-hidden max-w-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500"></div>
              <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
                <CheckCircle className="h-6 w-6 text-orange-600" />
                <span className="text-lg font-bold text-gray-900">Officially Verified Coach</span>
              </div>
              <div className="space-y-1 text-center lg:text-left">
                <p className="text-sm text-gray-800 font-medium flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle className="h-3 w-3 text-orange-600" />
                  Cambridge University CERF Standards Certified
                </p>
                <p className="text-sm text-gray-800 font-medium flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle className="h-3 w-3 text-orange-600" />
                  IDP Education Protocols Verified
                </p>
                <p className="text-xs text-gray-700 font-medium flex items-center gap-2 justify-center lg:justify-start">
                  <Award className="h-3 w-3 text-amber-600" />
                  Company License: 000061974544 (Netherlands)
                </p>
              </div>
            </div>
            
            {/* Redesigned Action Buttons */}
            <div className="flex flex-col gap-3 mb-6 max-w-md mx-auto lg:mx-0">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-base py-5 px-6 shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-orange-400 min-h-[50px] w-full">
                <Link to="/test" onClick={createStarEffect} className="flex items-center justify-center gap-2">
                  
                  <span className="font-black text-center text-slate-950">Start Free Assessment</span>
                </Link>
              </Button>
              
              <Button onClick={handleTelegramResources} size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-base py-5 shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-400 min-h-[50px] w-full">
                <span className="text-lg mr-2">Free Expert Advice</span>
                <span className="font-black text-center text-gray-950">Study Community with Free Resources</span>
              </Button>
              
              <Button onClick={handleWhatsAppContact} size="lg" className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold text-base py-5 shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-green-400 min-h-[50px] w-full">
                <span className="text-lg mr-2">💬</span>
                <span className="font-black text-center text-gray-950">Expert Advice</span>
              </Button>
            </div>
            
            {/* Professional Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl">
              <div className="text-center p-3 bg-white/90 rounded-lg shadow-md border-2 border-orange-100 transform hover:scale-105 transition-all">
                <div className="text-xl font-bold text-orange-700">50K+</div>
                <div className="text-xs text-gray-700 font-medium">Hours Coaching</div>
              </div>
              <div className="text-center p-3 bg-white/90 rounded-lg shadow-md border-2 border-amber-100 transform hover:scale-105 transition-all">
                <div className="text-xl font-bold text-amber-700">90%</div>
                <div className="text-xs text-gray-700 font-medium">Success Rate</div>
              </div>
              <div className="text-center p-3 bg-white/90 rounded-lg shadow-md border-2 border-orange-100 transform hover:scale-105 transition-all">
                <div className="text-xl font-bold text-orange-600">24/7</div>
                <div className="text-xs text-gray-700 font-medium">Support</div>
              </div>
              <div className="text-center p-3 bg-white/90 rounded-lg shadow-md border-2 border-amber-100 transform hover:scale-105 transition-all">
                <div className="text-xl font-bold text-amber-600">1400+</div>
                <div className="text-xs text-gray-700 font-medium">Students</div>
              </div>
            </div>
          </div>
          
          {/* Image - Order 1 on mobile (above content) */}
          <div className="relative animate-fade-in order-1">
            {/* Enhanced Image Container */}
            <div className="relative max-w-lg mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/70 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 relative">
                <img alt="Professional IELTS coaching environment" className="w-full h-full object-cover" src="/lovable-uploads/beea0598-c030-434b-9144-f1c9a9bbef8c.jpg" />
                {/* Overlay with credentials */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-white font-bold text-sm">✨ Cambridge Certified Coach</p>
                  <p className="text-white/90 text-xs">Over 1400+ successful students</p>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white p-3 rounded-full shadow-lg animate-pulse">
                <Award className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-amber-600 to-orange-700 text-white p-3 rounded-full shadow-lg animate-pulse">
                <Trophy className="h-6 w-6" />
              </div>
              
              {/* Success rate badge */}
              <div className="absolute top-4 left-4 bg-amber-400 text-black px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                90% Success Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
