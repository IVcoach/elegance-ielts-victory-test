import React, { useState, useEffect } from 'react';
import { Award, Clock, Star, Users, BookOpen, Bot } from "lucide-react";

interface AboutAchievementsSectionProps {
  showBotModal: (show: boolean) => void;
}

export const AboutAchievementsSection = ({ showBotModal }: AboutAchievementsSectionProps) => {
  const [animatedStats, setAnimatedStats] = useState({
    hours: 0,
    successRate: 0,
    students: 0
  });

  useEffect(() => {
    // Animate statistics
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let step = 0;
      const statsTimer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setAnimatedStats({
          hours: Math.floor(50000 * progress),
          successRate: Math.floor(90 * progress),
          students: Math.floor(2000 * progress)
        });
        
        if (step >= steps) clearInterval(statsTimer);
      }, stepDuration);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md border border-white/40 px-6 py-3 rounded-full mb-6">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-semibold">Our Achievements</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Excellence in
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent block">
              Language Education
            </span>
          </h2>
        </div>

        {/* Achievement Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="group relative bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 hover:bg-white/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {animatedStats.hours.toLocaleString()}+
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Hours of Expert Coaching</h3>
            <p className="text-gray-600 leading-relaxed">Dedicated coaching experience with proven methodologies</p>
          </div>

          <div className="group relative bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 hover:bg-white/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
              {animatedStats.successRate}%
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Proven Success Rate</h3>
            <p className="text-gray-600 leading-relaxed">Students achieving their target IELTS scores</p>
          </div>

          <div className="group relative bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 hover:bg-white/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
              {animatedStats.students.toLocaleString()}+
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Successful Students</h3>
            <p className="text-gray-600 leading-relaxed">Students who achieved their target scores</p>
          </div>
        </div>

        {/* Expert Focus with Bot Integration */}
        <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-3xl p-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">IELTS, TOEFL, PTE & FCE Specialist</h3>
          </div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-6">
            Specializing in <span className="text-blue-600 font-semibold">speaking and writing skills</span> development through experienced IELTS mentors with 
            <span className="text-green-600 font-semibold"> over 10 years of expertise</span>
          </p>
          
          {/* Bot CTA */}
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 rounded-2xl p-6">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <Bot className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-blue-800">Get Expert Assessment via Bot</span>
            </div>
            <p className="text-blue-700 mb-4">
              Try our AI-powered placement test and connect with our expert mentors through @ieltstori_bot
            </p>
            <button
              onClick={() => showBotModal(true)}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
