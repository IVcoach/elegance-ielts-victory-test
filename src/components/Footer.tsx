import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Award, Users, CheckCircle, Star, Trophy, Globe, Heart, Sparkles } from "lucide-react";
export function Footer() {
  return <footer className="bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900 py-20 border-t border-gray-200 relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-8 left-8 animate-pulse">
          <Award className="h-12 w-12 text-pink-600" />
        </div>
        <div className="absolute bottom-8 right-8 animate-pulse delay-1000">
          <Users className="h-12 w-12 text-blue-600" />
        </div>
        <div className="absolute top-1/2 left-1/4 animate-pulse delay-2000">
          <Trophy className="h-8 w-8 text-amber-600" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-pulse delay-3000">
          <Sparkles className="h-10 w-10 text-purple-600" />
        </div>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full shadow-lg">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                IELTStory
              </h2>
              <div className="bg-gradient-to-r from-pink-600 to-orange-600 p-3 rounded-full shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            <p className="text-xl text-gray-700 font-medium">
              Powered by V&C Elegance - Transforming Dreams into Achievements
            </p>
          </div>

          {/* Main Content with Enhanced Design */}
          <div className="text-center bg-gradient-to-r from-pink-50 via-blue-50 to-purple-50 p-10 rounded-3xl border-3 border-gradient shadow-2xl">
            {/* Consolidated Get In Touch Section */}
            <div className="mb-8 py-[10px] my-[10px] mx-0 px-0 rounded">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-2">
                <Star className="h-6 w-6 text-amber-500" />
                Get In Touch
                <Star className="h-6 w-6 text-amber-500" />
              </h3>
              
              
              
              {/* Enhanced Social Media Links */}
              <div className="flex items-center justify-center gap-8 mb-6 mt-6">
                <a href="https://t.me/ieltstori" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-all transform hover:scale-110 px-[46px] py-[6px]">
                  
                  <span className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors my-[10px] mx-[10px] py-[10px] text-left">@ieltstori</span>
                </a>
                
                <a href="https://www.instagram.com/ielts.tory" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border-2 border-pink-200 hover:border-pink-400 transition-all transform hover:scale-110 my-[10px] mx-0 px-[30px] py-[20px]">
                  
                  <span className="font-bold text-gray-800 group-hover:text-pink-600 transition-colors my-[10px] text-left">Instagram</span>
                </a>
              </div>
            </div>

            {/* Enhanced Company Information */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-2 border-gray-200 mb-6">
              <p className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                <Trophy className="h-6 w-6 text-amber-600" />
                © 2025 IELTStory Educational Consultancy
                <Trophy className="h-6 w-6 text-amber-600" />
              </p>
              <p className="text-lg text-gray-700 mb-4 font-semibold">1400+</p>
              <p className="text-xl text-gray-800 italic font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Your Success, Our Goal</p>
            </div>

            {/* Success Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border-2 border-orange-200 transform hover:scale-105 transition-all">
                <div className="text-2xl font-bold text-orange-700">50K+</div>
                <div className="text-sm text-gray-700 font-medium">Hours Coaching</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border-2 border-green-200 transform hover:scale-105 transition-all">
                <div className="text-2xl font-bold text-green-700">90%</div>
                <div className="text-sm text-gray-700 font-medium">Success Rate</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border-2 border-blue-200 transform hover:scale-105 transition-all">
                <div className="text-2xl font-bold text-blue-700">24/7</div>
                <div className="text-sm text-gray-700 font-medium">Support</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border-2 border-purple-200 transform hover:scale-105 transition-all">
                <div className="text-2xl font-bold text-purple-700">1400+</div>
                <div className="text-sm text-gray-700 font-medium">Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}