
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Headset, 
  Cpu, 
  Brain
} from "lucide-react";

export const FutureVisionSection = () => {
  return (
    <section className="py-16 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="unified-card mx-auto max-w-7xl border-4 border-blue-500 backdrop-blur-sm bg-opacity-85 transform hover:scale-[1.02] transition-all duration-500">
          
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-6 mb-6">
              <Zap className="h-16 w-16 text-yellow-500 animate-bounce-slow" />
              <Headset className="h-14 w-14 text-pink-600 animate-pulse" />
              <Cpu className="h-12 w-12 text-orange-600" />
            </div>
            <h2 className="text-5xl font-bold unified-heading mb-4">Our Future Vision</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="unified-card border-3 border-orange-400 transform hover:scale-110 hover:rotate-2 transition-all duration-300">
              <CardContent className="p-10 text-center">
                <Cpu className="h-16 w-16 text-orange-600 mx-auto mb-6 animate-pulse" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent mb-6">AI IELTS Coach</h3>
                <p className="unified-text text-lg">
                  Training AI to serve as an <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent font-black">expert IELTS coach</span> 
                  for personalized guidance
                </p>
              </CardContent>
            </Card>
            
            <Card className="unified-card border-3 border-pink-400 transform hover:scale-110 hover:rotate-2 transition-all duration-300">
              <CardContent className="p-10 text-center">
                <Headset className="h-16 w-16 text-pink-600 mx-auto mb-6 animate-pulse" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-700 to-pink-500 bg-clip-text text-transparent mb-6">VR & Metaverse</h3>
                <p className="unified-text text-lg">
                  Creating <span className="bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent font-black">immersive, game-based learning experiences</span> 
                  using VR and the metaverse
                </p>
              </CardContent>
            </Card>
            
            <Card className="unified-card border-3 border-teal-400 transform hover:scale-110 hover:rotate-2 transition-all duration-300">
              <CardContent className="p-10 text-center">
                <Brain className="h-16 w-16 text-teal-600 mx-auto mb-6 animate-pulse" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent mb-6">Natural Learning</h3>
                <p className="unified-text text-lg">
                  Developing environments for <span className="bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent font-black">natural, engaging, and effortless</span> 
                  adult learning experiences
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
