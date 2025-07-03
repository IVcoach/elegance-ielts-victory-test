
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Enhanced student success stories with more diverse backgrounds
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
    quote: "V&C Elegance's innovative teaching methods and regular feedback made all the difference in my preparation. I achieved Band 7 in just 8 weeks!"
  },
  {
    name: "Fatih",
    country: "Turkey",
    score: "Band 7.5",
    achievement: "Now residing in Germany",
    photo: "/placeholder.svg",
    quote: "The comprehensive coaching approach helped me achieve Band 7.5 and secure my dream job in Berlin. The speaking practice sessions were incredibly effective."
  },
  {
    name: "Elif",
    country: "Turkey",
    score: "Band 7",
    achievement: "Immigration to Canada successful",
    photo: "/placeholder.svg",
    quote: "Thanks to V&C Elegance's expert guidance, I achieved Band 7 and successfully immigrated to Canada. The writing improvement techniques were game-changing."
  },
  {
    name: "Klaus",
    country: "Germany",
    score: "Band 7.5",
    achievement: "PhD program acceptance",
    photo: "/placeholder.svg",
    quote: "As a German speaker, I struggled with IELTS initially. V&C Elegance's personalized approach helped me achieve Band 7.5 for my PhD application."
  },
  {
    name: "Anna",
    country: "Germany",
    score: "Band 7",
    achievement: "Master's program in Australia",
    photo: "/placeholder.svg",
    quote: "The structured learning path and dedicated mentors helped me achieve Band 7. I'm now pursuing my Master's degree in Melbourne!"
  },
  {
    name: "David",
    country: "Canada",
    score: "Band 7.5",
    achievement: "Career advancement opportunity",
    photo: "/placeholder.svg",
    quote: "Living in Canada, I needed IELTS for career advancement. V&C Elegance's flexible scheduling and expert coaching helped me achieve Band 7.5."
  },
  {
    name: "Sarah",
    country: "Canada",
    score: "Band 7",
    achievement: "University transfer successful",
    photo: "/placeholder.svg",
    quote: "The coaching methodology at V&C Elegance is exceptional. I achieved Band 7 and successfully transferred to my dream university program."
  },
  {
    name: "Ahmed",
    country: "Egypt",
    score: "Band 7.5",
    achievement: "Medical residency in UK",
    photo: "/placeholder.svg",
    quote: "The intensive preparation program helped me achieve Band 7.5 for my medical residency application in the UK. Excellent coaching!"
  },
  {
    name: "Priya",
    country: "India",
    score: "Band 8",
    achievement: "Engineering Master's in Germany",
    photo: "/placeholder.svg",
    quote: "V&C Elegance's systematic approach and mock tests helped me achieve Band 8. Now pursuing my Master's in Engineering in Munich!"
  },
  {
    name: "Carlos",
    country: "Brazil",
    score: "Band 7",
    achievement: "Business degree in Netherlands",
    photo: "/placeholder.svg",
    quote: "The personalized feedback and speaking practice sessions were invaluable. Achieved Band 7 and got admitted to my business program!"
  },
  {
    name: "Yuki",
    country: "Japan",
    score: "Band 7.5",
    achievement: "Research position in UK",
    photo: "/placeholder.svg",
    quote: "The writing workshops and individual coaching helped me overcome my challenges. Now working as a researcher in London!"
  },
  {
    name: "Maria",
    country: "Spain",
    score: "Band 7",
    achievement: "Teaching position in Ireland",
    photo: "/placeholder.svg",
    quote: "V&C Elegance's comprehensive approach to all four skills helped me achieve my target score and secure my teaching position."
  },
  {
    name: "Ali",
    country: "Pakistan",
    score: "Band 7.5",
    achievement: "Immigration to Australia",
    photo: "/placeholder.svg",
    quote: "The expert guidance and structured learning plan helped me achieve Band 7.5. Successfully immigrated to Australia with my family!"
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
    quote: "The structured learning path and dedicated mentors at V&C Elegance addressed my specific needs perfectly."
  },
  {
    name: "Nasrin",
    country: "Iran",
    score: "Band 8",
    achievement: "Got scholarship and now living in Scotland",
    photo: "/placeholder.svg",
    quote: "The expert guidance and personalized coaching at V&C Elegance helped me achieve Band 8 and secure my scholarship to Scotland."
  },
  {
    name: "Artin",
    country: "Iran",
    score: "Band 7",
    achievement: "Now residing in Canada",
    photo: "/placeholder.svg",
    quote: "I'm grateful for the unique teaching methodology and expert guidance. The coaches exceeded my expectations."
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
