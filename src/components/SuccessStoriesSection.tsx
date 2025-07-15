import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
export function SuccessStoriesSection() {
  return <section className="py-16 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Testimonials from our successful students worldwide
          </p>
        </div>
        
        {/* Testimonial Carousel */}
        <TestimonialCarousel />
        
        <p className="text-center text-sm text-gray-500 mt-6 font-medium italic">"Join 1400+ students who transformed their futures with our proven IELTS coaching system"</p>
      </div>
    </section>;
}