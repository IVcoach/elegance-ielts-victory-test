
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Award, Users, CheckCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 animate-pulse">
          <Award className="h-12 w-12 text-yellow-400" />
        </div>
        <div className="absolute bottom-10 right-10 animate-pulse delay-1000">
          <Users className="h-12 w-12 text-blue-400" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content - Centered Layout */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Company Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              V&C Elegance
            </h2>
            <p className="text-xl font-medium text-gray-100 mb-6">
              Your professional coach for IELTS excellence
            </p>
            
            {/* Trust badges - Centered */}
            <div className="flex flex-col items-center space-y-3 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-medium">Cambridge University CERF Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-medium">IDP Education Protocols Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-yellow-400 font-medium">5+ Years Excellence Record</span>
              </div>
            </div>
          </div>
          
          {/* Contact Information - Centered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 transform hover:scale-105 transition-all">
              <div className="flex items-center gap-3 mb-3 justify-center">
                <Phone className="h-6 w-6 text-blue-400" />
                <span className="text-white font-bold text-lg">WhatsApp Support</span>
              </div>
              <a href="https://wa.me/+31631267353" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-300 hover:text-blue-200 transition-colors font-medium block">
                +31 631 267 353
              </a>
              <p className="text-sm text-gray-400 mt-2">24/7 Available for consultations</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 transform hover:scale-105 transition-all">
              <div className="flex items-center gap-3 mb-3 justify-center">
                <Mail className="h-6 w-6 text-green-400" />
                <span className="text-white font-bold text-lg">Email Support</span>
              </div>
              <a href="mailto:vcelegance@consultant.com" className="text-xl text-green-300 hover:text-green-200 transition-colors font-medium block">
                vcelegance@consultant.com
              </a>
              <p className="text-sm text-gray-400 mt-2">Response within 24 hours</p>
            </div>
          </div>

          {/* Business Registration - Centered */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 max-w-md mx-auto mb-12">
            <p className="font-medium text-gray-100 mb-2 flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-blue-400" />
              Business Registration
            </p>
            <p className="text-sm text-gray-300">Number: 000061974544</p>
            <p className="text-sm text-gray-300">Registered in The Netherlands</p>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-600 pt-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="font-bold text-white text-lg mb-2">
                © 2025 V&C Elegance IELTS Coaching. All rights reserved.
              </p>
              <p className="text-gray-300 font-medium mb-3">
                🇳🇱 Proudly serving from Amsterdam, The Netherlands
              </p>
              <div className="flex justify-center items-center gap-4 text-sm text-gray-400 flex-wrap">
                <span>✅ Cambridge Certified</span>
                <span className="hidden sm:inline">•</span>
                <span>✅ IDP Verified</span>
                <span className="hidden sm:inline">•</span>
                <span>✅ EU Registered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
