
import React, { useState } from 'react';
import { Sparkles, MessageSquare, FileText, Headphones, Video, Target, Users, ChevronRight } from "lucide-react";

export const AboutServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: MessageSquare,
      title: 'Speaking Assessment',
      description: 'One-on-one speaking evaluations with expert feedback',
      features: ['Pronunciation coaching', 'Fluency development', 'Mock IELTS tests', 'Personalized improvement plans'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: FileText,
      title: 'Writing Assessment',
      description: 'Comprehensive writing evaluation and enhancement',
      features: ['Task 1 & 2 evaluation', 'Grammar enhancement', 'Structure improvement', 'Band score prediction'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      icon: Headphones,
      title: 'Listening & Reading',
      description: 'Comprehensive skill development programs',
      features: ['Strategy training', 'Practice tests', 'Time management', 'Skill development'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      icon: Video,
      title: 'Online Coaching',
      description: 'Live interactive sessions with flexible scheduling',
      features: ['Live sessions', 'Flexible scheduling', 'Recorded lessons', '24/7 support'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      icon: Target,
      title: 'Exam Preparation',
      description: 'Specialized preparation for IELTS, TOEFL, PTE, FCE',
      features: ['Test strategies', 'Score improvement', 'Registration guidance', 'Expert coaching'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 6,
      icon: Users,
      title: 'Professional Consultation',
      description: 'Career guidance and university application support',
      features: ['Career guidance', 'University support', 'Immigration requirements', 'Professional development'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-cyan-300" />
            <span className="text-white font-semibold">Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Comprehensive
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent block">
              IELTS Solutions
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 h-full transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:shadow-2xl ${hoveredService === service.id ? 'transform -translate-y-2' : ''}`}>
                
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-gray-400 group-hover:text-cyan-200 transition-colors duration-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="flex items-center space-x-2 text-cyan-300 hover:text-white font-semibold transition-colors duration-300 group-hover:translate-x-2">
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
