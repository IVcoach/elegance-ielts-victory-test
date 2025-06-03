
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Trophy, 
  Book,
  GraduationCap
} from "lucide-react";

export const AchievementsSection = () => {
  return (
    <section className="py-16 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="unified-card mx-auto max-w-5xl border-4 border-blue-300 backdrop-blur-sm bg-opacity-95 transform hover:scale-[1.02] transition-all duration-500">
          
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Trophy className="h-16 w-16 text-yellow-600 animate-bounce-slow" />
              <Book className="h-12 w-12 text-blue-600" />
              <GraduationCap className="h-14 w-14 text-purple-600" />
            </div>
            <h2 className="text-5xl font-bold unified-heading mb-4">Our Achievements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="unified-card border-3 border-yellow-300 transform hover:scale-110 hover:rotate-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Clock className="h-14 w-14 text-blue-800 mx-auto mb-4 animate-pulse" />
                <div className="text-4xl font-black unified-accent mb-3">50,000+</div>
                <div className="text-lg unified-text font-bold">Hours of Expert Coaching</div>
              </CardContent>
            </Card>
            
            <Card className="unified-card border-3 border-green-300 transform hover:scale-110 hover:rotate-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Star className="h-14 w-14 text-green-700 mx-auto mb-4 animate-pulse" />
                <div className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent mb-3">90%</div>
                <div className="text-lg unified-text font-bold">Proven Success Rate</div>
              </CardContent>
            </Card>
            
            <Card className="unified-card border-3 border-purple-300 transform hover:scale-110 hover:rotate-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <BookOpen className="h-14 w-14 text-purple-700 mx-auto mb-4 animate-pulse" />
                <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-violet-700 bg-clip-text text-transparent mb-3">IELTS, TOEFL</div>
                <div className="text-lg unified-text font-bold">PTE & FCE Specialist</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="unified-card border-3 border-blue-300">
            <div className="flex items-center gap-4 mb-4">
              <Users className="h-12 w-12 text-blue-800 animate-pulse" />
              <span className="text-3xl font-bold unified-heading">Expert Focus</span>
            </div>
            <p className="text-xl unified-text leading-relaxed">
              Specializing in <span className="unified-accent">speaking and writing skills</span> development through 
              experienced IELTS mentors with <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent font-black">over 10 years of expertise</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
