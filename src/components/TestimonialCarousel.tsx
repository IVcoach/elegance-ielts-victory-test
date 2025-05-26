
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Student success stories with diverse coaching satisfaction quotes
const studentTestimonials = [
  {
    name: "Diana",
    country: "Iran",
    score: "Band 8",
    achievement: "Got scholarship from U.K.",
    photo: "/placeholder.svg",
    quote: "The personalized study plan and one-on-one mentoring sessions helped me identify my weak areas and improve systematically."
  },
  {
    name: "Mert",
    country: "Turkey",
    score: "Band 7",
    achievement: "Successfully admitted to graduate program",
    photo: "/placeholder.svg",
    quote: "The innovative teaching methods and regular feedback from IELTS Victory coaches made all the difference in my preparation."
  },
  {
    name: "Liam",
    country: "The Netherlands",
    score: "Band 8",
    achievement: "Secured academic position abroad",
    photo: "/placeholder.svg",
    quote: "The comprehensive coaching approach and expert guidance helped me achieve my target score faster than expected."
  },
  {
    name: "Mohammad",
    country: "Vancouver",
    score: "Band 7",
    achievement: "IELTS General for immigration",
    photo: "/placeholder.svg",
    quote: "The structured learning path and dedicated mentors at IELTS Victory addressed my specific needs perfectly."
  },
  {
    name: "Shahin",
    country: "Iran",
    score: "Band 6.5",
    achievement: "Pursuing further education",
    photo: "/placeholder.svg",
    quote: "I was amazed by the customized coaching methodology. The mentoring sessions were focused and incredibly effective."
  },
  {
    name: "Bahar",
    country: "Iran",
    score: "Band 7",
    achievement: "Now residing in London",
    photo: "/placeholder.svg",
    quote: "The unique teaching strategies and constant support from IELTS Victory coaches helped me fix my weaknesses quickly."
  },
  {
    name: "Maral",
    country: "Iran",
    score: "Band 7",
    achievement: "Academic advancement",
    photo: "/placeholder.svg",
    quote: "The personalized attention and proven techniques were game-changers. I felt confident and well-prepared for the exam."
  },
  {
    name: "Parham",
    country: "Iran",
    score: "Band 6.5",
    achievement: "Now residing in Germany",
    photo: "/placeholder.svg",
    quote: "The mentoring approach is exceptional. The coaches helped me understand exactly what I needed to improve."
  },
  {
    name: "Mohammad",
    country: "Iran",
    score: "Band 7",
    achievement: "Now residing in the US",
    photo: "/placeholder.svg",
    quote: "The specialized coaching techniques and regular practice sessions made my preparation so much more efficient and targeted."
  },
  {
    name: "Artin",
    country: "Iran",
    score: "Band 7",
    achievement: "Now residing in Canada",
    photo: "/placeholder.svg",
    quote: "I'm grateful for the unique teaching methodology and expert guidance. The coaches exceeded my expectations."
  },
  {
    name: "Fatih",
    country: "Turkey",
    score: "Band 7",
    achievement: "Now residing in Germany",
    photo: "/placeholder.svg",
    quote: "The combination of proven strategies and personalized coaching is brilliant. I achieved my target score with confidence!"
  },
  {
    name: "Nasrin",
    country: "Iran",
    score: "Band 8",
    achievement: "Got scholarship and now living in Scotland",
    photo: "/placeholder.svg",
    quote: "The expert guidance and personalized coaching at IELTS Victory helped me achieve Band 8 and secure my scholarship to Scotland."
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
      }, 4000);
      
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
      className="relative h-80 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 flex justify-center items-center">
        {displayItems().map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className={cn(
              "absolute w-full max-w-sm p-4 bg-white rounded-lg shadow-lg transition-all duration-500 transform",
              item.position === -1 && "opacity-50 scale-90 -translate-x-40 z-10",
              item.position === 0 && "opacity-100 scale-100 translate-x-0 z-20",
              item.position === 1 && "opacity-50 scale-90 translate-x-40 z-10"
            )}
          >
            <div className="flex items-center space-x-4 mb-3">
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
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">IELTS Score:</span>
                <span className="font-semibold text-purple-700">{item.score}</span>
              </div>
              <p className="text-sm italic text-gray-700">{item.achievement}</p>
              <p className="text-xs text-gray-600 leading-relaxed mt-2">
                "{item.quote}"
              </p>
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
