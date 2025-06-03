
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Brain, 
  Users, 
  Globe
} from "lucide-react";

export const ApproachSection = () => {
  return (
    <section className="py-16 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="unified-card mx-auto max-w-6xl border-4 border-blue-400 backdrop-blur-sm bg-opacity-90 transform hover:scale-[1.02] transition-all duration-500">
          
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-6 mb-6">
              <Target className="h-16 w-16 text-blue-800 animate-pulse" />
              <Brain className="h-14 w-14 text-purple-600 animate-bounce-slow" />
            </div>
            <h2 className="text-5xl font-bold unified-heading mb-4">Our Approach</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <Card className="unified-card border-3 border-blue-400 transform hover:scale-105 hover:rotate-1 transition-all duration-300">
              <CardContent className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="h-12 w-12 text-blue-800 animate-pulse" />
                  <h3 className="text-3xl font-bold unified-heading">Personalized Learning</h3>
                </div>
                <p className="unified-text text-xl leading-relaxed">
                  Committed to recognizing that <span className="unified-accent">each student has unique learning styles</span>, 
                  continuously refining our teaching methods for maximum effectiveness.
                </p>
              </CardContent>
            </Card>
            
            <Card className="unified-card border-3 border-purple-400 transform hover:scale-105 hover:rotate-1 transition-all duration-300">
              <CardContent className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <Brain className="h-12 w-12 text-purple-700 animate-pulse" />
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">AI Integration</h3>
                </div>
                <p className="unified-text text-xl leading-relaxed">
                  Actively integrating <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent font-black">cutting-edge AI technology</span> to make 
                  training programs more adaptive and effective.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="unified-card border-3 border-green-400 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <Globe className="h-12 w-12 text-green-700 animate-bounce-slow" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">Comprehensive Platforms</h3>
            </div>
            <p className="text-xl unified-text mb-6">
              Offering comprehensive courses tailored to diverse learning needs on:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Coursera', 'YouTube', 'Udemy', 'edX'].map((platform, index) => (
                <div key={index} className="unified-card text-center transform hover:scale-110 transition-all duration-300 border-2 border-green-200">
                  <span className="font-bold text-green-700 text-lg">{platform}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
