
import React, { useState } from 'react';
import { Zap, Brain, Gamepad2, Leaf } from "lucide-react";

export const AboutVisionSection = () => {
  const [activeVision, setActiveVision] = useState(0);
  
  const visions = [
    {
      icon: Brain,
      title: 'AI IELTS Coach',
      description: 'Training AI to serve as an expert IELTS coach for personalized guidance',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Gamepad2,
      title: 'VR & Metaverse',
      description: 'Creating immersive, game-based learning experiences using VR and the metaverse',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Leaf,
      title: 'Natural Learning',
      description: 'Developing environments for natural, engaging, and effortless adult learning experiences',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white border border-blue-200 px-6 py-3 rounded-full mb-6 shadow-sm">
            <Zap className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-blue-800">Our Future Vision</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            The Future of
            <span className="text-blue-600 block">
              Language Learning
            </span>
          </h2>
        </div>

        {/* Vision Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {visions.map((vision, index) => (
            <div 
              key={index} 
              className="group relative cursor-pointer transition-all duration-500 hover:scale-105" 
              onClick={() => setActiveVision(index)}
            >
              <div className={`bg-white border border-gray-200 rounded-3xl p-8 h-full transition-all duration-500 shadow-lg hover:shadow-xl ${
                activeVision === index ? 'ring-2 ring-blue-200' : ''
              }`}>
                <div className={`w-20 h-20 bg-gradient-to-r ${vision.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <vision.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {vision.title}
                </h3>

                <p className="mb-6 leading-relaxed text-gray-700">
                  {vision.description}
                </p>

                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600">In Development</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
