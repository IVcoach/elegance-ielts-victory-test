
import React, { useState, useEffect } from 'react';
import { GraduationCap, ArrowDown, Sparkles } from "lucide-react";

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

  return (
    <section className="relative min-h-screen bg-white pt-20 md:pt-0 overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50" />
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
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
            <span className="text-gray-800 font-bold text-base">V&C Elegance</span>
            <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm" />
          </div>

          {/* Main Heading */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="text-gray-900 block mb-2">
              V&C Elegance
            </span>
            <span className="text-blue-600 text-3xl md:text-4xl lg:text-5xl">
              The Netherlands
            </span>
          </h1>

          {/* Professional Subtitle */}
          <div className={`bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 mb-10 shadow-lg transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="font-bold mb-4 text-gray-900 text-2xl md:text-3xl lg:text-4xl">Leading Educational Company</h2>
            <p className="text-lg md:text-xl text-gray-700">
              Dedicated to <span className="font-bold text-blue-600">Exam Success</span> and <span className="text-green-600 font-bold">Professional Growth</span>
            </p>
          </div>

          {/* Mission Statement */}
          <div className={`bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 mb-10 shadow-lg transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              "Our mission is to <span className="font-bold text-blue-600">revolutionize language education</span> by blending 
              <span className="font-bold text-indigo-600"> personalized teaching</span> with 
              <span className="font-bold text-purple-600"> innovative technology</span>, making learning 
              <span className="font-bold text-green-600">effortless, interactive, and enjoyable</span>."
            </p>
          </div>

          {/* Vision Quote */}
          <div className={`relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 mb-12 shadow-lg transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Sparkles className="absolute top-4 right-4 w-6 h-6 text-blue-500" />
            <p className="text-gray-900 font-bold text-lg md:text-2xl lg:text-3xl">
              Join us on this exciting journey—what you see today is just the 
              <span className="font-black text-blue-600 text-xl md:text-3xl lg:text-4xl"> tip of the iceberg</span>.
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
