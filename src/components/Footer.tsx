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
              
              <div className="bg-white/80 backdrop-blur-sm p-6 shadow-lg border-2 border-blue-200 transform hover:scale-105 transition-all max-w-md my-0 px-[46px] rounded-xl py-[76px] mx-[220px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <div className="bg-green-600 p-2 rounded-full">
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-gray-800 font-bold text-sm">WhatsApp Support</div>
                      <a href="https://wa.me/+31631267353" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors font-bold text-lg hover:underline">
                        +31 631 267 353
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3">
                    <div className="bg-blue-600 p-2 rounded-full">
                      <Mail className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-gray-800 font-bold text-sm">Email Support</div>
                      <a href="mailto:vcelegance@consultant.com" className="text-blue-600 hover:text-blue-700 transition-colors font-bold text-lg hover:underline px-0 py-[10px]">
                        vcelegance@consultant.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Social Media Links */}
              <div className="flex items-center justify-center gap-8 mb-6 mt-6">
                <a href="https://t.me/ieltstori" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-all transform hover:scale-110 px-[46px] py-[6px]">
                  <div className="bg-blue-500 p-2 rounded-full group-hover:bg-blue-600 transition-colors">
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">@ieltstori</span>
                </a>
                
                <a href="https://www.instagram.com/ielts.tory" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border-2 border-pink-200 hover:border-pink-400 transition-all transform hover:scale-110 px-[46px] py-[6px]">
                  <div className="bg-pink-500 p-2 rounded-full group-hover:bg-pink-600 transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white py-0 my-0 mx-0 px-0">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-800 group-hover:text-pink-600 transition-colors">Instagram</span>
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