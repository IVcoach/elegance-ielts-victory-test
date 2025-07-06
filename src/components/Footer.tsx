
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Award, Users, CheckCircle, Star, Trophy } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white text-gray-900 py-16 border-t border-gray-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-8 animate-pulse">
          <Award className="h-10 w-10 text-pink-600" />
        </div>
        <div className="absolute bottom-8 right-8 animate-pulse delay-1000">
          <Users className="h-10 w-10 text-pink-600" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Company Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              V&C Elegance
            </h2>
            <p className="text-lg md:text-xl font-bold text-gray-800 mb-3">
              Your Professional Partner for IELTS Excellence
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-6 font-medium">
              Empowering students worldwide to achieve their dreams through expert IELTS coaching
            </p>
          </div>

          {/* Services Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-2xl border-2 border-blue-200 transform hover:scale-105 transition-all text-center">
              <Trophy className="h-8 w-8 text-blue-600 mb-3 mx-auto" />
              <h3 className="text-base font-bold text-gray-900 mb-2">IELTS Coaching</h3>
              <p className="text-sm text-gray-700">Comprehensive preparation for Academic & General Training with expert guidance and mock tests.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl border-2 border-green-200 transform hover:scale-105 transition-all text-center">
              <Users className="h-8 w-8 text-green-600 mb-3 mx-auto" />
              <h3 className="text-base font-bold text-gray-900 mb-2">Live Coaching</h3>
              <p className="text-sm text-gray-700">Personalized one-on-one sessions with flexible scheduling and progress tracking.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl border-2 border-purple-200 transform hover:scale-105 transition-all text-center">
              <Star className="h-8 w-8 text-purple-600 mb-3 mx-auto" />
              <h3 className="text-base font-bold text-gray-900 mb-2">Job Interview Prep</h3>
              <p className="text-sm text-gray-700">Professional interview coaching with mock interviews and confidence building.</p>
            </div>
          </div>

          {/* Support Links and Company Information */}
          <div className="text-center bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl border-2 border-pink-200">
            {/* Support Links */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700 font-medium text-sm">WhatsApp Support:</span>
                  <a 
                    href="https://wa.me/+31631267353" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-green-600 hover:text-green-700 transition-colors font-bold text-sm whitespace-nowrap"
                  >
                    +31 631 267 353
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-700 font-medium text-sm">Email Support:</span>
                  <a 
                    href="mailto:vcelegance@consultant.com" 
                    className="text-blue-600 hover:text-blue-700 transition-colors font-bold text-sm break-all"
                  >
                    vcelegance@consultant.com
                  </a>
                </div>
              </div>
            </div>

            <p className="text-lg font-bold text-gray-800 mb-4">
              © 2025 V&C Elegance IELTS Coaching. All rights reserved.
            </p>
            <p className="text-sm text-gray-700 mb-4 font-semibold">
              Licensed Educational Consultancy • Registration: 000061974544 (Netherlands)
            </p>
            <p className="text-base text-gray-700 italic font-medium">
              "Transforming dreams into achievements through excellence in IELTS education"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
