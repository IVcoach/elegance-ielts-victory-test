
import React from 'react';
import { Target, Users, Sparkles } from "lucide-react";

export const AboutApproachSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-6 py-3 rounded-full mb-6">
            <Target className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-semibold">Our Approach</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Innovative Learning
            <span className="text-blue-600 block">
              Methodology
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <Users className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Personalized Learning</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Committed to recognizing that <span className="text-blue-600 font-semibold">each student has unique learning styles</span>, 
              continuously refining our teaching methods for maximum effectiveness.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <Sparkles className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">AI Integration</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Actively integrating <span className="text-purple-600 font-semibold">cutting-edge AI technology</span> to make 
              training programs more adaptive and effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
