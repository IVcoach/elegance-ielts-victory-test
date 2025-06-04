
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Award, TrendingUp, Target, Users, CheckCircle } from "lucide-react";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

export function SuccessStoriesSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Users className="h-8 w-8 text-blue-800" />
            <h2 className="text-5xl font-bold text-gray-900">
              Success Stories
            </h2>
            <Users className="h-8 w-8 text-blue-800" />
          </div>
          <p className="text-xl text-gray-600 font-medium">Testimonials from our successful students worldwide</p>
          <Separator className="w-32 h-1 bg-gradient-to-r from-blue-700 to-blue-800 mx-auto mt-6 rounded-full" />
        </div>
        
        <Card className="border-0 shadow-xl overflow-hidden mb-12 bg-white">
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 mb-8 text-center font-medium leading-relaxed">
              "Our comprehensive IELTS preparation program supports international students seeking academic opportunities and skilled professionals pursuing immigration pathways. We provide expert guidance for IELTS success, job interviews, and university applications."
            </p>
            
            <div className="mb-6">
              <TestimonialCarousel />
            </div>
            
            <p className="text-center text-base text-gray-500 mt-6 font-medium">
              ...and hundreds more success stories from students across the globe
            </p>
          </CardContent>
        </Card>
        
        {/* Enhanced Success Rate Display */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-200">
          <h3 className="text-center text-4xl font-bold text-gray-900 mb-8">
            Our Professional Success Rate
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="professional-card flex items-center gap-6 transform hover:scale-105 transition-all border-2 border-yellow-200 bg-yellow-50">
              <Award className="h-12 w-12 text-yellow-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-gray-900">Band 8+</span>
                  <span className="text-xl font-bold text-yellow-600">10%</span>
                </div>
                <Progress value={10} className="h-4 bg-yellow-100" />
              </div>
            </div>
            
            <div className="professional-card flex items-center gap-6 transform hover:scale-105 transition-all border-2 border-green-200 bg-green-50">
              <TrendingUp className="h-12 w-12 text-green-700 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-gray-900">Band 7-7.5</span>
                  <span className="text-xl font-bold text-green-700">55%</span>
                </div>
                <Progress value={55} className="h-4 bg-green-100" />
              </div>
            </div>
            
            <div className="professional-card flex items-center gap-6 transform hover:scale-105 transition-all border-2 border-blue-200 bg-blue-50">
              <Target className="h-12 w-12 text-blue-700 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-gray-900">Band 6.5</span>
                  <span className="text-xl font-bold text-blue-700">35%</span>
                </div>
                <Progress value={35} className="h-4 bg-blue-100" />
              </div>
            </div>
          </div>
          
          <div className="text-center professional-card border-2 border-green-200 bg-green-50">
            <p className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-3">
              <CheckCircle className="h-8 w-8 text-green-700" />
              90% success rate after the second attempt
            </p>
            <p className="text-lg text-gray-700 mt-2 font-medium">
              With over 50,000 hours of professional coaching experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
