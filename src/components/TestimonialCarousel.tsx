
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Student success stories
const studentTestimonials = [
  {
    name: "Diana",
    country: "Iran",
    score: "Band 8",
    achievement: "Got scholarship from U.K.",
    photo: "/placeholder.svg",
  },
  {
    name: "Mert",
    country: "Turkey",
    score: "Band 7",
    achievement: "Successfully admitted to graduate program",
    photo: "/placeholder.svg",
  },
  {
    name: "Liam",
    country: "The Netherlands",
    score: "Band 8",
    achievement: "Secured academic position abroad",
    photo: "/placeholder.svg",
  },
  {
    name: "Mohammad",
    country: "Vancouver",
    score: "Band 7",
    achievement: "IELTS General for immigration",
    photo: "/placeholder.svg",
  },
  {
    name: "Shahin",
    country: "Iran",
    score: "Band 6.5",
    achievement: "Pursuing further education",
    photo: "/placeholder.svg",
  },
  {
    name: "Bahar",
    country: "Iran",
    score: "Band 7",
    achievement: "Now residing in London",
    photo: "/placeholder.svg",
  },
  {
    name: "Maral",
    country: "Iran",
    score: "Band 7",
    achievement: "Academic advancement",
    photo: "/placeholder.svg",
  },
  {
    name: "Parham",
    country: "Iran",
    score: "Band 6.5",
    achievement: "Now residing in Germany",
    photo: "/placeholder.svg",
  },
  {
    name: "Mohammad",
    country: "Iran",
    score: "Band 7",
    achievement: "Now residing in the US",
    photo: "/placeholder.svg",
  },
  {
    name: "Artin",
    country: "Iran",
    score: "Band 7",
    achievement: "Now residing in Canada",
    photo: "/placeholder.svg",
  },
  {
    name: "Fatih",
    country: "Turkey",
    score: "Band 7",
    achievement: "Now residing in Germany",
    photo: "/placeholder.svg",
  }
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Automatically advance the carousel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % studentTestimonials.length);
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused]);
  
  // Display 3 testimonials at a time, centered on currentIndex
  const displayItems = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + studentTestimonials.length) % studentTestimonials.length;
      items.push({
        ...studentTestimonials[index],
        position: i
      });
    }
    return items;
  };
  
  return (
    <div 
      className="relative h-64 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 flex justify-center items-center">
        {displayItems().map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className={cn(
              "absolute w-full max-w-xs p-4 bg-white rounded-lg shadow-lg transition-all duration-500 transform",
              item.position === -1 && "opacity-50 scale-90 -translate-x-32 z-10",
              item.position === 0 && "opacity-100 scale-100 translate-x-0 z-20",
              item.position === 1 && "opacity-50 scale-90 translate-x-32 z-10"
            )}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-purple-600">
                  {item.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">from {item.country}</p>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">IELTS Score:</span>
                <span className="font-semibold text-purple-700">{item.score}</span>
              </div>
              <p className="text-sm italic">{item.achievement}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {studentTestimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              idx === currentIndex ? "bg-purple-600 w-4" : "bg-gray-300"
            )}
          />
        ))}
      </div>
    </div>
  );
}
