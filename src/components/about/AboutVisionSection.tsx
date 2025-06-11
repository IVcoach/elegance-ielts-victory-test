import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, Brain, Gamepad2, Leaf, Eye, Sparkles, ArrowRight } from "lucide-react";
export const AboutVisionSection = () => {
  const [activeVision, setActiveVision] = useState(0);
  const visions = [{
    icon: Brain,
    title: 'AI IELTS Coach',
    description: 'Training AI to serve as an expert IELTS coach for personalized guidance',
    color: 'from-orange-400 to-red-500'
  }, {
    icon: Gamepad2,
    title: 'VR & Metaverse',
    description: 'Creating immersive, game-based learning experiences using VR and the metaverse',
    color: 'from-pink-400 to-purple-500'
  }, {
    icon: Leaf,
    title: 'Natural Learning',
    description: 'Developing environments for natural, engaging, and effortless adult learning experiences',
    color: 'from-green-400 to-emerald-500'
  }];
  return <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Holographic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent">
          <div style={{
          backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
          backgroundSize: '50px 50px'
        }} className="absolute inset-0 bg-gray-400"></div>
        </div>
        
        {[...Array(12)].map((_, i) => <div key={i} className="absolute w-4 h-4 border border-cyan-400/30 rounded-full animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 2}s`
      }} />)}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-cyan-400/30 px-6 py-3 rounded-full mb-6">
            <Zap className="w-5 h-5 text-cyan-300" />
            <span className="text-cyan-200 font-semibold">Our Future Vision</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            The Future of
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent block">
              Language Learning
            </span>
          </h2>
        </div>

        {/* Vision Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {visions.map((vision, index) => <div key={index} className="group relative cursor-pointer transition-all duration-700 hover:scale-105" onClick={() => setActiveVision(index)}>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className={`relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 h-full transition-all duration-500 ${activeVision === index ? 'bg-white/10 border-cyan-400/30' : 'hover:bg-white/10'}`}>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-r ${vision.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative`}>
                    <vision.icon className="w-10 h-10 text-white" />
                    <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl animate-pulse"></div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 text-slate-950">
                    {vision.title}
                  </h3>

                  <p className="mb-6 leading-relaxed transition-colors duration-300 text-slate-950">
                    {vision.description}
                  </p>

                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-slate-950">In Development</span>
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="relative bg-white/5 backdrop-blur-md border border-cyan-400/30 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Eye className="w-6 h-6 text-cyan-300" />
                <span className="text-lg font-semibold text-slate-950">Vision 2030</span>
                <Sparkles className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-slate-950">
                The Future is <span className="text-cyan-300">Now</span>
              </h3>
              <p className="text-lg mb-6 text-slate-950">
                Join us as we shape the future of language education through cutting-edge technology and innovative teaching methodologies.
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  <Link to="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};