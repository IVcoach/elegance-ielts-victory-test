
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
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 pt-20 md:pt-0 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Primary Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-pink-900/80" />
        
        {/* Dynamic Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1 h-1 md:w-2 md:h-2 bg-white/40 rounded-full animate-pulse" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }} 
            />
          ))}
        </div>

        {/* Aurora Effect */}
        <div className="absolute top-0 left-0 right-0 h-64 md:h-96 bg-gradient-to-b from-cyan-400/30 via-blue-400/20 to-transparent animate-pulse" />
        
        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-64 bg-gradient-to-t from-purple-600/40 via-pink-500/30 to-transparent" />
      </div>

      {/* Enhanced Iceberg - Hidden on mobile for performance */}
      <div className="hidden lg:block absolute inset-0 flex items-center justify-center">
        <div className="relative" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
          {/* Iceberg Tip */}
          <div className="relative z-10">
            <div className="w-96 h-72 bg-gradient-to-b from-white/90 via-cyan-50/80 to-blue-100/70 transform rotate-12 rounded-t-full shadow-2xl backdrop-blur-sm border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-cyan-200/50 rounded-t-full" />
              <div className="absolute top-6 left-10 w-20 h-10 bg-white/60 rounded-full blur-sm" />
              <div className="absolute top-16 right-8 w-16 h-8 bg-white/40 rounded-full blur-sm" />
              <Sparkles className="absolute top-8 right-12 w-6 h-6 text-cyan-300 animate-pulse" />
            </div>
          </div>

          {/* Iceberg Underwater */}
          <div 
            className="absolute top-56 left-0 w-[28rem] h-[28rem] bg-gradient-to-b from-cyan-200/50 via-blue-300/30 to-blue-600/20 transform rotate-12 rounded-b-full opacity-70 backdrop-blur-sm"
            style={{ transform: `translateY(${Math.min(scrollY * 0.1, 80)}px) rotate(12deg)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-300/20 to-blue-700/30 rounded-b-full" />
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Company Badge */}
          <div className={`inline-flex items-center space-x-3 bg-white/15 backdrop-blur-lg border border-white/30 px-4 md:px-8 py-3 md:py-4 rounded-full mb-6 md:mb-8 shadow-lg transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <GraduationCap className="w-5 h-5 md:w-7 md:h-7 text-cyan-300" />
            <span className="text-white font-bold text-sm md:text-lg">V&C Elegance</span>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse shadow-lg" />
          </div>

          {/* Main Heading */}
          <h1 className={`text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4 md:mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent text-4xl md:text-6xl lg:text-8xl drop-shadow-lg">
              V&C Elegance
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent text-2xl md:text-4xl lg:text-6xl drop-shadow-lg">
              The Netherlands
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <div className={`bg-white/15 backdrop-blur-lg border border-white/30 rounded-2xl md:rounded-3xl p-6 md:p-8 mb-6 md:mb-10 shadow-xl transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="font-bold mb-3 text-white text-2xl md:text-4xl lg:text-6xl drop-shadow-lg">Leading Educational Company</h2>
            <p className="text-lg md:text-2xl text-white drop-shadow-md">
              Dedicated to <span className="font-bold text-amber-300 text-xl md:text-3xl lg:text-4xl drop-shadow-lg">Exam Success</span> and <span className="text-green-300 font-bold text-xl md:text-3xl drop-shadow-lg">Professional Growth</span>
            </p>
          </div>

          {/* Enhanced Mission Statement */}
          <div className={`bg-gradient-to-r from-white/10 to-cyan-100/10 backdrop-blur-lg border border-white/30 rounded-2xl md:rounded-3xl p-6 md:p-10 mb-6 md:mb-10 shadow-xl transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 text-white drop-shadow-lg">Our Mission</h2>
            <p className="text-base md:text-xl leading-relaxed text-white drop-shadow-md">
              "Our mission is to <span className="font-bold text-cyan-200 text-lg md:text-2xl">revolutionize language education</span> by blending 
              <span className="font-bold text-purple-200 text-lg md:text-2xl"> personalized teaching</span> with 
              <span className="font-bold text-orange-300 text-lg md:text-2xl"> innovative technology</span>, making learning 
              <span className="font-bold text-pink-200 text-lg md:text-2xl">effortless, interactive, and enjoyable</span>."
            </p>
          </div>

          {/* Enhanced Iceberg Quote */}
          <div className={`relative bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-lg border border-white/30 rounded-2xl md:rounded-3xl p-6 md:p-8 mb-8 md:mb-12 shadow-xl transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Sparkles className="absolute top-4 right-4 w-6 h-6 text-amber-300 animate-pulse" />
            <p className="text-white font-bold text-lg md:text-3xl lg:text-4xl drop-shadow-lg">
              Join us on this exciting journey—what you see today is just the 
              <span className="font-black text-amber-300 text-xl md:text-4xl lg:text-5xl drop-shadow-lg"> tip of the iceberg</span>.
            </p>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="animate-bounce">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 inline-block shadow-lg">
              <ArrowDown className="w-6 h-6 md:w-8 md:h-8 text-cyan-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
