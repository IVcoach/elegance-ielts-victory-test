
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Book, 
  Brain
} from "lucide-react";

export const MissionSection = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="unified-card border-4 border-blue-600 backdrop-blur-sm bg-opacity-90 transform hover:scale-[1.02] transition-all duration-500">
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <GraduationCap className="h-20 w-20 text-blue-800 animate-bounce-slow" />
            <Book className="h-16 w-16 text-purple-600 animate-pulse" />
            <Brain className="h-18 w-18 text-teal-600" />
          </div>
          
          <h2 className="text-6xl font-bold unified-heading mb-8">Our Mission</h2>
          
          <p className="text-3xl unified-text font-bold leading-relaxed mb-12">
            "Our mission is to <span className="unified-accent">revolutionize language education</span> by blending 
            <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent font-black"> personalized teaching</span> with 
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent font-black"> innovative technology</span>, making learning 
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent font-black">effortless, interactive, and enjoyable</span>."
          </p>
          
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 p-8 rounded-2xl text-white mb-10 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            <p className="text-2xl font-bold">
              Join us on this exciting journey—what you see today is just the tip of the iceberg.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Button asChild size="lg" className="professional-button px-12 py-6 text-xl rounded-2xl">
              <Link to="/test">Start Your Journey</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-4 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white font-bold shadow-2xl transform hover:scale-110 transition-all duration-300 px-12 py-6 text-xl rounded-2xl bg-white">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
