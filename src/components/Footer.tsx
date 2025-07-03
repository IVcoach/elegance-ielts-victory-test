
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Award, Users, CheckCircle, Star, Trophy } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white text-gray-900 py-20 border-t border-gray-200 relative overflow-hidden">
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
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              V&C Elegance
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Your Professional Partner for IELTS Excellence
            </p>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              Empowering students worldwide to achieve their dreams through expert IELTS coaching
            </p>
          </div>

          {/* Services Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border-2 border-blue-200 transform hover:scale-105 transition-all text-center">
              <Trophy className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">IELTS Coaching</h3>
              <p className="text-gray-700">Comprehensive preparation for Academic & General Training with expert guidance and mock tests.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200 transform hover:scale-105 transition-all text-center">
              <Users className="h-12 w-12 text-green-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Live Coaching</h3>
              <p className="text-gray-700">Personalized one-on-one sessions with flexible scheduling and progress tracking.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-200 transform hover:scale-105 transition-all text-center">
              <Star className="h-12 w-12 text-purple-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Job Interview Prep</h3>
              <p className="text-gray-700">Professional interview coaching with mock interviews and confidence building.</p>
            </div>
          </div>

          {/* Partnership Information */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-10 rounded-2xl border-2 border-blue-200 mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Partnerships</h3>
            <p className="text-xl text-gray-700 mb-8 font-medium">
              V&C Elegance proudly cooperates with experienced mentors and IELTS coaches from leading institutions
            </p>
            
            {/* Partner Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gray-200 transform hover:scale-105 transition-all">
                <div className="text-center">
                  <div className="text-blue-600 font-bold text-lg mb-2">🇬🇧 British Council</div>
                  <div className="text-sm text-gray-600">Netherlands</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gray-200 transform hover:scale-105 transition-all">
                <div className="text-center">
                  <div className="text-green-600 font-bold text-lg mb-2">🌍 IELC</div>
                  <div className="text-sm text-gray-600">Amsterdam</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gray-200 transform hover:scale-105 transition-all">
                <div className="text-center">
                  <div className="text-purple-600 font-bold text-lg mb-2">🎓 ALI</div>
                  <div className="text-sm text-gray-600">Amsterdam</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gray-200 transform hover:scale-105 transition-all">
                <div className="text-center">
                  <div className="text-red-600 font-bold text-lg mb-2">🏆 IDP</div>
                  <div className="text-sm text-gray-600">Education</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* WhatsApp Support */}
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-200 transform hover:scale-105 transition-all">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <Phone className="h-8 w-8 text-green-600" />
                <span className="text-gray-900 font-bold text-2xl">WhatsApp Support</span>
              </div>
              <a 
                href="https://wa.me/+31631267353" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl text-green-600 hover:text-green-700 transition-colors font-bold block mb-3"
              >
                +31 631 267 353
              </a>
              <p className="text-lg text-gray-600">Available 24/7 for consultations</p>
            </div>
            
            {/* Email Support */}
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-200 transform hover:scale-105 transition-all">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <Mail className="h-8 w-8 text-blue-600" />
                <span className="text-gray-900 font-bold text-2xl">Email Support</span>
              </div>
              <a 
                href="mailto:vcelegance@consultant.com" 
                className="text-2xl text-blue-600 hover:text-blue-700 transition-colors font-bold block mb-3"
              >
                vcelegance@consultant.com
              </a>
              <p className="text-lg text-gray-600">Response within 24 hours</p>
            </div>
          </div>

          {/* Company Information */}
          <div className="text-center bg-gradient-to-r from-pink-50 to-purple-50 p-10 rounded-2xl border-2 border-pink-200">
            <p className="text-2xl font-bold text-gray-800 mb-6">
              © 2025 V&C Elegance IELTS Coaching. All rights reserved.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-semibold">
              Licensed Educational Consultancy • Registration: 000061974544 (Netherlands)
            </p>
            <p className="text-xl text-gray-700 italic font-medium">
              "Transforming dreams into achievements through excellence in IELTS education"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
