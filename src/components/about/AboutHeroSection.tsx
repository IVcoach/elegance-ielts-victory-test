
import React, { useState, useEffect } from 'react';
import { GraduationCap, ArrowDown, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutHeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const partnerOrganizations = [
    {
      name: "🇬🇧 British Council",
      location: "Netherlands",
      url: "https://www.britishcouncil.nl",
      color: "blue-600"
    },
    {
      name: "🌍 IELC",
      location: "Amsterdam",
      url: "https://www.ielc.nl",
      color: "green-600"
    },
    {
      name: "🎓 ALI",
      location: "Amsterdam",
      url: "https://www.ali.nl",
      color: "purple-600"
    },
    {
      name: "🏆 IDP",
      location: "Education",
      url: "https://www.idp.com",
      color: "red-600"
    }
  ];

  return (
    <section className="relative min-h-screen bg-white pt-20 md:pt-0 overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Minimal Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-200/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Company Badge */}
          <div className={`inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm border border-blue-200 px-6 py-3 rounded-full mb-8 shadow-lg transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <span className="text-gray-800 font-bold text-base">IELTStory</span>
            <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm" />
          </div>

          {/* Main Heading */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="text-blue-600 text-3xl md:text-4xl lg:text-5xl">
              The Netherlands
            </span>
          </h1>

          {/* Professional Subtitle */}
          <div className={`bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 mb-8 shadow-lg transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="font-bold mb-3 text-gray-900 text-xl md:text-2xl lg:text-3xl">Leading Educational Company</h2>
            <p className="text-base md:text-lg text-gray-700">
              Dedicated to <span className="font-bold text-blue-600">Exam Success</span> and <span className="text-green-600 font-bold">Professional Growth</span>
            </p>
          </div>

          {/* Mission Statement */}
          <div className={`bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 mb-8 shadow-lg transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              "Our mission is to <span className="font-bold text-blue-600">revolutionize language education</span> by blending 
              <span className="font-bold text-indigo-600"> personalized teaching</span> with 
              <span className="font-bold text-purple-600"> innovative technology</span>, making learning 
              <span className="font-bold text-green-600">effortless, interactive, and enjoyable</span>."
            </p>
          </div>

          {/* Enhanced Partnerships Information */}
          <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 mb-8 shadow-lg transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">IELTS Stories Partnerships</h3>
            <p className="text-base md:text-lg text-gray-700 mb-6 font-medium">
              IELTStory (powered by V&C Elegance) proudly cooperates with experienced mentors and IELTS coaches from leading institutions
            </p>
            
            {/* Enhanced Partner Logos with Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {partnerOrganizations.map((partner, index) => (
                <Button
                  key={index}
                  asChild
                  variant="outline"
                  className="bg-white p-4 h-auto rounded-lg shadow-md border-2 border-gray-200 transform hover:scale-105 transition-all hover:shadow-xl group"
                >
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    <div className={`text-${partner.color} font-bold text-sm md:text-base group-hover:scale-110 transition-transform`}>
                      {partner.name}
                    </div>
                    <div className="text-xs text-gray-600">{partner.location}</div>
                    <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </a>
                </Button>
              ))}
            </div>
            
            <div className="mt-6 text-sm text-gray-600 italic">
              Click on any partner to visit their official website
            </div>
          </div>

          {/* Vision Quote */}
          <div className={`relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 mb-12 shadow-lg transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Sparkles className="absolute top-4 right-4 w-6 h-6 text-blue-500" />
            <p className="text-gray-900 font-bold text-base md:text-xl lg:text-2xl">
              Join us on this exciting journey—what you see today is just the 
              <span className="font-black text-blue-600 text-lg md:text-2xl lg:text-3xl"> Tip of the Iceberg</span>.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 inline-block shadow-lg border border-gray-200">
              <ArrowDown className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
