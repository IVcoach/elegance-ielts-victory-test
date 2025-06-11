import React, { useState, useEffect } from 'react';
import { GraduationCap, ArrowDown } from "lucide-react";
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
  return <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-cyan-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Ocean Waves */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-cyan-600 via-blue-500 to-transparent opacity-80">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        </div>
        
        {/* Floating Ice Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 4}s`
        }} />)}
        </div>

        {/* Aurora Effect */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-green-400/20 via-blue-400/20 to-transparent animate-pulse"></div>
      </div>

      {/* Main Iceberg */}
      <div className="absolute inset-0 flex items-center justify-center" style={{
      transform: `translateY(${scrollY * 0.3}px)`
    }}>
        <div className="relative">
          {/* Iceberg Tip */}
          <div className="relative z-10">
            <div className="w-80 h-60 bg-gradient-to-b from-white via-blue-50 to-blue-100 transform rotate-12 rounded-t-full shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-blue-200/50 rounded-t-full"></div>
              <div className="absolute top-4 left-8 w-16 h-8 bg-white/60 rounded-full blur-sm"></div>
              <div className="absolute top-12 right-6 w-12 h-6 bg-white/40 rounded-full blur-sm"></div>
            </div>
          </div>

          {/* Iceberg Underwater */}
          <div className="absolute top-48 left-0 w-96 h-96 bg-gradient-to-b from-blue-200/60 via-blue-300/40 to-blue-500/20 transform rotate-12 rounded-b-full opacity-60" style={{
          transform: `translateY(${Math.min(scrollY * 0.1, 100)}px) rotate(12deg)`
        }}>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-300/30 to-blue-600/20 rounded-b-full"></div>
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 pt-32 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          {/* Company Badge */}
          <div className={`inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <GraduationCap className="w-6 h-6 text-cyan-300" />
            <span className="text-white font-semibold">V&C Elegance</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <h1 className={`text-6xl lg:text-8xl font-bold text-white mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-gray-950">
              V&C Elegance
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-white bg-clip-text text-4xl lg:text-5xl text-slate-950">
              The Netherlands
            </span>
          </h1>

          {/* Subtitle */}
          <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-2xl font-bold mb-2 text-gray-950">Leading Educational Company</h2>
            <p className="text-xl text-slate-950">
              Dedicated to <span className="font-semibold text-amber-500">Exam success</span> and <span className="text-green-300 font-semibold">exam success</span>
            </p>
          </div>

          {/* Mission Statement */}
          <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 mb-8 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">Our Mission</h2>
            <p className="text-lg leading-relaxed text-slate-950">
              "Our mission is to <span className="font-semibold text-slate-950">revolutionize language education</span> by blending 
              <span className="font-semibold text-slate-950"> personalized teaching</span> with 
              <span className="font-semibold text-orange-500"> innovative technology</span>, making learning 
              <span className="font-semibold text-slate-950">effortless, interactive, and enjoyable</span>."
            </p>
          </div>

          {/* Iceberg Quote */}
          <div className={`relative bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-xl text-white font-medium">
              Join us on this exciting journey—what you see today is just the 
              <span className="font-bold text-amber-500"> tip of the iceberg</span>.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-cyan-300 mx-auto" />
          </div>
        </div>
      </div>
    </section>;
};