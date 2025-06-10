import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Award, Users, CheckCircle } from "lucide-react";
export function Footer() {
  return <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-8 animate-pulse">
          <Award className="h-10 w-10 text-amber-400" />
        </div>
        <div className="absolute bottom-8 right-8 animate-pulse delay-1000">
          <Users className="h-10 w-10 text-orange-400" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 bg-zinc-300">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Company Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-3 text-white bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              V&C Elegance
            </h2>
            <p className="text-lg font-medium text-gray-100 mb-4">
              Your professional partner for IELTS excellence
            </p>
            
            {/* Trust badges */}
            <div className="flex flex-col items-center space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-orange-400" />
                <span className="text-orange-400 font-medium text-sm">Cambridge University CERF Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-orange-400" />
                <span className="text-orange-400 font-medium text-sm">IDP Education Protocols Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-amber-400" />
                <span className="text-amber-400 font-medium text-sm">5+ Years Excellence Record</span>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 transform hover:scale-105 transition-all">
              <div className="flex items-center gap-2 mb-2 justify-center">
                <Phone className="h-5 w-5 text-orange-400" />
                <span className="text-white font-bold">WhatsApp Support</span>
              </div>
              <a href="https://wa.me/+31631267353" target="_blank" rel="noopener noreferrer" className="text-lg text-orange-300 hover:text-orange-200 transition-colors font-medium block">
                +31 631 267 353
              </a>
              <p className="text-xs text-gray-400 mt-1">24/7 Available for consultations</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 transform hover:scale-105 transition-all">
              <div className="flex items-center gap-2 mb-2 justify-center">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-white font-bold">Email Support</span>
              </div>
              <a href="mailto:vcelegance@consultant.com" className="text-lg text-amber-300 hover:text-amber-200 transition-colors font-medium block">
                vcelegance@consultant.com
              </a>
              <p className="text-xs text-gray-400 mt-1">Response within 24 hours</p>
            </div>
          </div>

          {/* Business Registration */}
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 max-w-xs mx-auto mb-8">
            <p className="font-medium text-gray-100 mb-1 flex items-center justify-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-orange-400" />
              Company Registration
            </p>
            <p className="text-xs text-gray-300">License Number: 000061974544</p>
            <p className="text-xs text-gray-300">Registered in The Netherlands</p>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-600 pt-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="font-bold text-white mb-2">
                © 2025 V&C Elegance IELTS Coaching. All rights reserved.
              </p>
              <p className="text-gray-300 font-medium mb-2 text-sm">
                🇳🇱 Proudly serving from Amsterdam, The Netherlands
              </p>
              <div className="flex justify-center items-center gap-3 text-xs text-gray-400 flex-wrap">
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
    </footer>;
}