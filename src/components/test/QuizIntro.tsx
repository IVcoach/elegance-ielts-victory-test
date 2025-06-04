
import { Button } from "@/components/ui/button";
import { Shield, Award, Zap, MessageSquare, UserCheck, Clock, CheckCircle } from "lucide-react";
import { ServiceIcons } from "./ServiceIcons";

interface QuizIntroProps {
  onStartTest: () => void;
  onShowPractice: () => void;
}

export const QuizIntro = ({ onStartTest, onShowPractice }: QuizIntroProps) => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Professional IELTS Placement Test
      </h1>
      <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
        Comprehensive 20-minute assessment with CEFR-aligned questions for accurate IELTS band estimation
      </p>
      
      {/* Enhanced Officially Verified Assessment Section with Visual Symbols */}
      <div className="mb-8 p-8 bg-white rounded-2xl shadow-xl border border-gray-200 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-x-16 -translate-y-16 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-green-100 to-blue-100 rounded-full translate-x-20 translate-y-20 opacity-50"></div>
        
        {/* Header with Shield Icon */}
        <div className="relative z-10 mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full shadow-lg">
              <Shield className="h-10 w-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Officially Verified Assessment</h2>
          <div className="flex items-center justify-center gap-2 text-blue-800 font-semibold text-lg">
            <Award className="h-5 w-5" />
            <span>Cambridge University CERF Standards & IDP Education Protocols</span>
            <Award className="h-5 w-5" />
          </div>
        </div>
        
        {/* Feature cards with enhanced visual design */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="group hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-green-600 p-3 rounded-full group-hover:rotate-12 transition-transform">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Instant Results</h3>
              </div>
              <p className="text-gray-700">Get your estimated IELTS band score immediately</p>
              <div className="mt-3 flex justify-end">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <div className="group hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-blue-600 p-3 rounded-full group-hover:rotate-12 transition-transform">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Professional Feedback</h3>
              </div>
              <p className="text-gray-700">Personalized guidance for improvement</p>
              <div className="mt-3 flex justify-end">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <div className="group hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border-2 border-purple-200 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-purple-600 p-3 rounded-full group-hover:rotate-12 transition-transform">
                  <UserCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Expert Assessment</h3>
              </div>
              <p className="text-gray-700">Submit speaking/writing for detailed evaluation</p>
              <div className="mt-3 flex justify-end">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <div className="group hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border-2 border-orange-200 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-orange-600 p-3 rounded-full group-hover:rotate-12 transition-transform">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Secure & Accurate</h3>
              </div>
              <p className="text-gray-700">Results delivered within 48 hours</p>
              <div className="mt-3 flex justify-end">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action buttons with enhanced styling */}
        <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-6 mt-8">
          <Button className="professional-button text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all" onClick={onStartTest}>
            <CheckCircle className="h-5 w-5 mr-2" />
            Start Professional Assessment
          </Button>
          <Button variant="outline" className="border-2 border-blue-800 text-blue-800 hover:bg-blue-50 px-8 py-4 h-auto text-lg font-bold shadow-md transform hover:scale-105 transition-all" onClick={onShowPractice}>
            <MessageSquare className="h-5 w-5 mr-2" />
            Speaking & Writing Assessment
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="relative z-10 mt-8 flex items-center justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            <span>ISO Certified</span>
          </div>
        </div>
      </div>
      
      <ServiceIcons />
      
      <div className="p-8 bg-gradient-to-r from-gray-100 via-blue-50 to-gray-100 rounded-2xl mt-8 shadow-xl border border-gray-200">
        <p className="font-bold text-gray-900 text-2xl">
          <span className="text-blue-800">
            Professional IELTS Resources & Consultation
          </span>
          <br />
          <span className="text-xl mt-2 inline-block text-gray-700">
            Available for students enrolled in our coaching program
          </span>
        </p>
      </div>
    </div>
  );
};
