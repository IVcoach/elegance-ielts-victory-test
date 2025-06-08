
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Award, Users, CheckCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 animate-pulse">
          <Award className="h-12 w-12 text-yellow-400" />
        </div>
        <div className="absolute bottom-10 right-10 animate-pulse delay-1000">
          <Users className="h-12 w-12 text-blue-400" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Enhanced Company Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              V&C Elegance
            </h2>
            <p className="mb-4 text-lg font-medium text-gray-100">
              Your professional coach for IELTS excellence
            </p>
            
            {/* Trust badges */}
            <div className="space-y-3 mb-6">
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
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <p className="font-medium text-gray-100 mb-2">🏢 Business Registration</p>
              <p className="text-sm text-gray-300">Number: 000061974544</p>
              <p className="text-sm text-gray-300">Registered in The Netherlands</p>
            </div>
          </div>
          
          {/* Enhanced Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <Phone className="h-6 w-6 text-blue-400" />
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 transform hover:scale-105 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-white font-bold">WhatsApp Support</span>
                </div>
                <a 
                  href="https://wa.me/+31631267353" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg text-blue-300 hover:text-blue-200 transition-colors font-medium"
                >
                  +31 631 267 353
                </a>
                <p className="text-xs text-gray-400 mt-1">24/7 Available for consultations</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 transform hover:scale-105 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="h-5 w-5 text-green-400" />
                  <span className="text-white font-bold">Email Support</span>
                </div>
                <a 
                  href="mailto:vcelegance@consultant.com"
                  className="text-lg text-green-300 hover:text-green-200 transition-colors font-medium"
                >
                  vcelegance@consultant.com
                </a>
                <p className="text-xs text-gray-400 mt-1">Response within 24 hours</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 transform hover:scale-105 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span className="text-white font-bold">Location</span>
                </div>
                <p className="text-lg text-purple-300 font-medium">Amsterdam, The Netherlands</p>
                <p className="text-xs text-gray-400 mt-1">European Union Certified</p>
              </div>
            </div>
          </div>
          
          {/* Enhanced Connect Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <Users className="h-6 w-6 text-green-400" />
              Connect With Us
            </h2>
            
            <div className="space-y-6">
              {/* WhatsApp Connection */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <h3 className="text-lg font-bold text-white mb-3">🚀 Start Your Journey</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Get instant access to expert IELTS coaching and free consultation
                </p>
                <a 
                  href="https://wa.me/+31631267353" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 p-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg w-full justify-center font-bold"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  WhatsApp Consultation
                </a>
              </div>

              {/* Success Stats */}
              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm p-4 rounded-lg border border-blue-400/30">
                <h3 className="text-lg font-bold text-white mb-3">📊 Our Success Record</h3>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">2000+</div>
                    <div className="text-xs text-gray-300">Students</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">90%</div>
                    <div className="text-xs text-gray-300">Success</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Footer Bottom */}
        <div className="border-t border-gray-600 mt-16 pt-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="text-center">
              <p className="font-bold text-white text-lg mb-2">
                © 2025 V&C Elegance IELTS Coaching. All rights reserved.
              </p>
              <p className="text-gray-300 font-medium mb-3">
                🇳🇱 Proudly serving from Amsterdam, The Netherlands
              </p>
              <div className="flex justify-center items-center gap-4 text-sm text-gray-400">
                <span>✅ Cambridge Certified</span>
                <span>•</span>
                <span>✅ IDP Verified</span>
                <span>•</span>
                <span>✅ EU Registered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
