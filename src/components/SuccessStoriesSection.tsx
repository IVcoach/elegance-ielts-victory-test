import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
export function SuccessStoriesSection() {
  return <section className="py-16 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 bg-transparent">
        <div className="absolute top-16 left-16 animate-pulse">
          <GraduationCap className="h-12 w-12 text-blue-600" />
        </div>
        <div className="absolute bottom-16 right-16 animate-pulse delay-1000">
          <Briefcase className="h-12 w-12 text-green-600" />
        </div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Users className="h-8 w-8 text-blue-800" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <Users className="h-8 w-8 text-blue-800" />
          </div>
          <p className="text-lg text-gray-600 font-medium mb-3 max-w-2xl mx-auto">
            Testimonials from our successful students worldwide
          </p>
          <div className="flex justify-center items-center gap-2 mb-4">
            <MapPin className="h-4 w-4 text-red-500" />
            <span className="text-sm text-gray-600">Students from 15+ countries achieved their dreams</span>
          </div>
          <Separator className="w-24 h-1 bg-gradient-to-r from-blue-700 to-purple-700 mx-auto rounded-full" />
        </div>
        
        {/* Enhanced intro card */}
        <Card className="border-0 shadow-xl overflow-hidden mb-12 bg-gradient-to-br from-white to-blue-50 relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"></div>
          <CardContent className="p-6 md:p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                🌟 Our Comprehensive IELTS Success Program
              </h3>
              <p className="text-base text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
                Supporting international students seeking academic opportunities and skilled professionals 
                pursuing immigration pathways. We provide expert guidance for IELTS success, job interviews, 
                and university applications with personalized coaching that adapts to your learning style.
              </p>
            </div>
            
            <TestimonialCarousel />
            
            <p className="text-center text-sm text-gray-500 mt-6 font-medium italic">"Join 1200+ students who transformed their futures with our proven IELTS coaching system"</p>
          </CardContent>
        </Card>
      </div>
    </section>;
}