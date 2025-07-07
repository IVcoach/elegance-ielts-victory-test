
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BookOpen } from "lucide-react";
import { assessmentImages } from "./TestData";

interface TestHeaderProps {
  onTelegramResources: () => void;
}

export function TestHeader({
  onTelegramResources
}: TestHeaderProps) {
  return (
    <div className="text-center mb-8 bg-white p-6 rounded-xl shadow-md border border-purple-200">
      <div className="flex items-center justify-center gap-3 mb-4">
        <BookOpen className="h-8 w-8 text-purple-600" />
        <h1 className="text-3xl font-playfair font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-transparent bg-clip-text">
          IELTS Assessment Test
        </h1>
      </div>
      <p className="text-gray-600 text-lg mb-6 font-semibold">
        Your Gateway to IELTS Success - Take Our Comprehensive Assessment Now!
      </p>
      
      {/* Image Carousel with Text Overlay */}
      <div className="mb-6">
        <Carousel className="w-full max-w-md mx-auto">
          <CarouselContent>
            {assessmentImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg relative">
                  <img src={image} alt={`IELTS Assessment ${index + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
                    <h3 className="text-white text-xl font-bold mb-1">IELTS Victory</h3>
                    <p className="text-white text-sm italic">Your Success, Our Goal</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      
      <div className="mt-4 flex items-center justify-center gap-4 text-sm text-purple-700 mb-6">
        <span className="bg-purple-100 px-3 py-1 rounded-full font-medium">20 Questions</span>
        <span className="bg-blue-100 px-3 py-1 rounded-full font-medium">Multiple Choice</span>
        <span className="bg-indigo-100 px-3 py-1 rounded-full font-medium">A1-C2 Level</span>
      </div>
      
      {/* Motivational message instead of button */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
        <p className="text-blue-800 font-bold text-lg">
          🎯 Ready to discover your IELTS potential? Let's begin your journey to success!
        </p>
      </div>
    </div>
  );
}
