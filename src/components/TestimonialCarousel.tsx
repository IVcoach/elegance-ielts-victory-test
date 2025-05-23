
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  name: string;
  country: string;
  score: string;
  achievement: string;
}

export function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    { name: "Diana", country: "Iran", score: "Band 8", achievement: "Got scholarship" },
    { name: "Mert", country: "Turkey", score: "Band 7", achievement: "International student" },
    { name: "Liam", country: "The Netherlands", score: "Band 8", achievement: "Academic success" },
    { name: "Mohammad", country: "Vancouver", score: "Band 7", achievement: "IELTS General" },
    { name: "Shahin", country: "Iran", score: "Band 6.5", achievement: "Skill worker immigration" },
    { name: "Bahar", country: "Iran", score: "Band 7", achievement: "Now residing in London" },
    { name: "Maral", country: "Iran", score: "Band 7", achievement: "Academic success" },
    { name: "Parham", country: "Iran", score: "Band 6.5", achievement: "Now residing in Germany" },
    { name: "Mohammad", country: "Iran", score: "Band 7", achievement: "Now residing in the US" },
    { name: "Artin", country: "Iran", score: "Band 7", achievement: "Now residing in Canada" },
    { name: "Fatih", country: "Turkey", score: "Band 7", achievement: "Now residing in Germany" }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <div className="w-full overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="min-w-full border border-gray-200 shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">from {testimonial.country}</p>
                </div>
                <div className="bg-brand-blue text-white px-2 py-1 rounded text-sm">
                  {testimonial.score}
                </div>
              </div>
              <p className="text-gray-700">{testimonial.achievement}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-brand-blue' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
