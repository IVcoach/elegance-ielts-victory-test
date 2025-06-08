
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Award, TrendingUp, Target, Users, CheckCircle, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

export function SuccessStoriesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 animate-pulse">
          <GraduationCap className="h-16 w-16 text-blue-600" />
        </div>
        <div className="absolute bottom-20 right-20 animate-pulse delay-1000">
          <Briefcase className="h-16 w-16 text-green-600" />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Users className="h-10 w-10 text-blue-800" />
            <h2 className="text-5xl font-bold text-gray-900 bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <Users className="h-10 w-10 text-blue-800" />
          </div>
          <p className="text-xl text-gray-600 font-medium mb-4">
            Testimonials from our successful students worldwide
          </p>
          <div className="flex justify-center items-center gap-2 mb-6">
            <MapPin className="h-5 w-5 text-red-500" />
            <span className="text-sm text-gray-600">Students from 15+ countries achieved their dreams</span>
          </div>
          <Separator className="w-32 h-1 bg-gradient-to-r from-blue-700 to-purple-700 mx-auto rounded-full" />
        </div>
        
        {/* Enhanced intro card */}
        <Card className="border-0 shadow-2xl overflow-hidden mb-16 bg-gradient-to-br from-white to-blue-50 relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"></div>
          <CardContent className="p-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🌟 Our Comprehensive IELTS Success Program
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Supporting international students seeking academic opportunities and skilled professionals 
                pursuing immigration pathways. We provide expert guidance for IELTS success, job interviews, 
                and university applications with personalized coaching that adapts to your learning style.
              </p>
            </div>
            
            {/* Key benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-blue-100">
                <GraduationCap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900">Academic Success</h4>
                <p className="text-sm text-gray-600">University admissions & scholarships</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-green-100">
                <Briefcase className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900">Career Growth</h4>
                <p className="text-sm text-gray-600">Professional opportunities abroad</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-purple-100">
                <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900">Immigration Success</h4>
                <p className="text-sm text-gray-600">Visa approvals & permanent residency</p>
              </div>
            </div>
            
            <TestimonialCarousel />
            
            <p className="text-center text-base text-gray-500 mt-8 font-medium italic">
              "Join 2,000+ students who transformed their futures with our proven IELTS coaching system"
            </p>
          </CardContent>
        </Card>
        
        {/* Enhanced Success Rate Display */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 p-10 rounded-2xl shadow-2xl border-2 border-blue-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500"></div>
          
          <h3 className="text-center text-4xl font-bold text-gray-900 mb-4">
            🏆 Our Professional Success Rate
          </h3>
          <p className="text-center text-lg text-gray-600 mb-10 font-medium">
            Based on 2,000+ students over 5 years of dedicated coaching
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="professional-card flex items-center gap-6 transform hover:scale-105 transition-all border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-yellow-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
              <Award className="h-12 w-12 text-yellow-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-gray-900">Band 8+</span>
                  <span className="text-xl font-bold text-yellow-600">10%</span>
                </div>
                <Progress value={10} className="h-4 bg-yellow-200" />
                <p className="text-xs text-gray-600 mt-2">Elite performance level</p>
              </div>
            </div>
            
            <div className="professional-card flex items-center gap-6 transform hover:scale-105 transition-all border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-green-400"></div>
              <TrendingUp className="h-12 w-12 text-green-700 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-gray-900">Band 7-7.5</span>
                  <span className="text-xl font-bold text-green-700">55%</span>
                </div>
                <Progress value={55} className="h-4 bg-green-200" />
                <p className="text-xs text-gray-600 mt-2">University ready</p>
              </div>
            </div>
            
            <div className="professional-card flex items-center gap-6 transform hover:scale-105 transition-all border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-400"></div>
              <Target className="h-12 w-12 text-blue-700 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-gray-900">Band 6.5</span>
                  <span className="text-xl font-bold text-blue-700">35%</span>
                </div>
                <Progress value={35} className="h-4 bg-blue-200" />
                <p className="text-xs text-gray-600 mt-2">Immigration qualified</p>
              </div>
            </div>
          </div>
          
          <div className="text-center professional-card border-2 border-green-200 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-400"></div>
            <div className="pt-4">
              <p className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3 mb-2">
                <CheckCircle className="h-10 w-10 text-green-700" />
                90% achieve target score by 2nd attempt
              </p>
              <p className="text-lg text-gray-700 font-medium mb-2">
                With over 50,000 hours of professional coaching experience
              </p>
              <p className="text-sm text-gray-600 italic">
                "Most students see significant improvement within 4-6 weeks"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
