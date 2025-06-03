import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, GraduationCap } from "lucide-react";
export const IcebergTip = () => {
  return <section className="pt-32 pb-8 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Main Iceberg Tip with Realistic Shape */}
        <div className="relative bg-gradient-to-b from-white via-iceberg-ice to-blue-50 mx-auto max-w-3xl transform hover:scale-[1.02] transition-transform duration-700 shadow-2xl" style={{
        clipPath: "polygon(35% 0%, 65% 0%, 85% 100%, 15% 100%)",
        minHeight: "400px"
      }}>
          <div className="p-16 pt-20">
            <div className="flex items-center justify-center gap-4 mb-8 transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <GraduationCap className="h-20 w-20 text-blue-800" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-6xl font-bold unified-heading mb-2 md:text-lg">
                  V&C Elegance
                </h1>
                <p className="text-2xl unified-accent tracking-wide">The Netherlands</p>
              </div>
            </div>
            
            <div className="unified-card border-4 border-blue-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Award className="h-10 w-10 text-blue-800 animate-bounce-slow" />
                <span className="font-bold unified-heading text-xl">Leading Educational Company</span>
              </div>
              <p className="text-xl unified-text font-semibold leading-relaxed">
                Dedicated to <span className="unified-accent text-xs">innovative language learning</span> and <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent font-black">exam success</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};