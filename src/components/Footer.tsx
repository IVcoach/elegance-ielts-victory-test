
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Award, Users, CheckCircle, Globe, Heart } from "lucide-react";

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
        <div className="max-w-6xl mx-auto">
          {/* Company Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              V&C Elegance
            </h2>
            <p className="text-xl font-semibold text-gray-700 mb-2">
              Your Professional Partner for IELTS Excellence
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Empowering students worldwide to achieve their dreams through expert IELTS coaching
            </p>
          </div>

          {/* Partnership Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border-2 border-pink-100">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-pink-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Trusted Partners</h3>
                <Heart className="h-6 w-6 text-pink-600" />
              </div>
              <p className="text-gray-700 font-medium">
                V&C Elegance proudly collaborates with leading institutions and certified mentors
              </p>
            </div>

            {/* Partner Institutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  International Partnerships
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    British Council Netherlands
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    International English Language Centre (IELC), Amsterdam
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Amsterdam Language Institute (ALI)
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-600" />
                  Certifications & Standards
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Cambridge University CERF Certified
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    IDP Education Protocols Verified
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    5+ Years Excellence Record
                  </li>
                </ul>
              </div>
            </div>

            {/* Partner Logos */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4 font-medium">
                Trusted by leading educational institutions worldwide
              </p>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <span className="text-sm font-semibold text-gray-700">British Council</span>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <span className="text-sm font-semibold text-gray-700">IDP Education</span>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <span className="text-sm font-semibold text-gray-700">IELC Amsterdam</span>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <span className="text-sm font-semibold text-gray-700">ALI</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Location */}
            <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-gray-200 transform hover:scale-105 transition-all">
              <div className="flex items-center gap-2 mb-3 justify-center">
                <MapPin className="h-6 w-6 text-pink-600" />
                <span className="text-gray-900 font-bold text-lg">Our Location</span>
              </div>
              <p className="text-gray-700 font-medium mb-2">🇳🇱 Amsterdam, The Netherlands</p>
              <p className="text-sm text-gray-600">Serving students globally from our European headquarters</p>
            </div>

            {/* WhatsApp Support */}
            <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-gray-200 transform hover:scale-105 transition-all">
              <div className="flex items-center gap-2 mb-3 justify-center">
                <Phone className="h-6 w-6 text-green-600" />
                <span className="text-gray-900 font-bold text-lg">WhatsApp Support</span>
              </div>
              <a 
                href="https://wa.me/+31631267353" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl text-green-600 hover:text-green-700 transition-colors font-bold block mb-2"
              >
                +31 631 267 353
              </a>
              <p className="text-sm text-gray-600">Available 24/7 for consultations</p>
            </div>
            
            {/* Email Support */}
            <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-gray-200 transform hover:scale-105 transition-all md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-3 justify-center">
                <Mail className="h-6 w-6 text-blue-600" />
                <span className="text-gray-900 font-bold text-lg">Email Support</span>
              </div>
              <a 
                href="mailto:vcelegance@consultant.com" 
                className="text-xl text-blue-600 hover:text-blue-700 transition-colors font-bold block mb-2"
              >
                vcelegance@consultant.com
              </a>
              <p className="text-sm text-gray-600">Response within 24 hours</p>
            </div>
          </div>

          {/* Company Information */}
          <div className="text-center bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-xl border border-pink-200">
            <p className="text-lg font-medium text-gray-700 mb-4">
              © 2025 V&C Elegance IELTS Coaching. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Licensed Educational Consultancy • Registration: 000061974544 (Netherlands)
            </p>
            <p className="text-sm text-gray-600 italic">
              "Transforming dreams into achievements through excellence in IELTS education"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
