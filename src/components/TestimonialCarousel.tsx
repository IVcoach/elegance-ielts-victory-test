
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Student success stories with satisfaction quotes
const studentTestimonials = [
  {
    name: "Diana",
    country: "Iran",
    score: "Band 8",
    achievement: "Got scholarship from U.K.",
    photo: "/placeholder.svg",
    quote: "The AI-powered customized study plan was incredible! The personalized coaching helped me understand my weaknesses and improve systematically."
  },
  {
    name: "Mert",
    country: "Turkey",
    score: "Band 7",
    achievement: "Successfully admitted to graduate program",
    photo: "/placeholder.svg",
    quote: "The unique teaching method with AI analysis made all the difference. I could see my progress in real-time and focus on what mattered most."
  },
  {
    name: "Liam",
    country: "The Netherlands",
    score: "Band 8",
    achievement: "Secured academic position abroad",
    photo: "/placeholder.svg",
    quote: "The mentoring was exceptional! The customized approach and AI feedback helped me achieve my target score faster than I expected."
  },
  {
    name: "Mohammad",
    country: "Vancouver",
    score: "Band 7",
    achievement: "IELTS General for immigration",
    photo: "/placeholder.svg",
    quote: "The coaching methodology is truly unique. The AI-driven personalized plan addressed my specific needs perfectly."
  },
  {
    name: "Shahin",
    country: "Iran",
    score: "Band 6.5",
    achievement: "Pursuing further education",
    photo: "/placeholder.svg",
    quote: "I was amazed by how the AI customized my learning path. The mentoring sessions were focused and incredibly effective."
  },
  {
    name: "Bahar",
    country: "Iran",
    score: "Band 7",
    achievement: "Now residing in London",
    photo: "/placeholder.svg",
    quote: "The unique AI-powered teaching method helped me identify and fix my mistakes quickly. Outstanding personalized guidance!"
  },
  {
    name: "Maral",
    country: "Iran",
    score: "Band 7",
    achievement: "Academic advancement",
    photo: "/placeholder.svg",
    quote: "The customized study plan with AI analysis was a game-changer. I felt confident and well-prepared for the exam."
  },
  {
    name: "Parham",
    country: "Iran",
    score: "Band 6.5",
    achievement: "Now residing in Germany",
    photo: "/placeholder.svg",
    quote: "The mentoring approach is exceptional. The AI-driven insights helped me understand exactly what I needed to improve."
  },
  {
    name: "Mohammad",
    country: "Iran",
    score: "Band 7",
    achievement: "Now residing in the US",
    photo: "/placeholder.svg",
    quote: "The personalized coaching with AI technology made my preparation so much more efficient and targeted."
  },
  {
    name: "Artin",
    country: "Iran",
    score: "Band 7",
    achievement: "Now residing in Canada",
    photo: "/placeholder.svg",
    quote: "I'm grateful for the unique teaching methodology. The AI-customized plan and expert mentoring exceeded my expectations."
  },
  {
    name: "Fatih",
    country: "Turkey",
    score: "Band 7",
    achievement: "Now residing in Germany",
    photo: "/placeholder.svg",
    quote: "The combination of AI analysis and personalized coaching is brilliant. I achieved my target score with confidence!"
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
