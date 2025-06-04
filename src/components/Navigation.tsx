
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { TelegramDialog } from "./TelegramDialog";
import { useStarEffect } from "@/hooks/useStarEffect";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const createStarEffect = useStarEffect();

  return (
    <nav className="w-full bg-white bg-opacity-95 backdrop-blur-sm fixed top-0 z-50 border-b shadow-lg">
      <div className="container mx-auto py-3 flex items-center justify-between px-[44px]">
        <Link to="/" className="flex items-center gap-4">
          <img 
            alt="IELTS Victory Logo" 
            className="h-24 w-auto transform hover:scale-105 transition-transform object-contain" 
            src="/lovable-uploads/1fe98a0e-4992-4f28-8c3b-2e5312053128.png" 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-semibold text-lg text-gray-700 hover:text-blue-800 transition-colors">
            Home
          </Link>
          <Link to="/test" className="font-semibold text-lg text-gray-700 hover:text-blue-800 transition-colors">
            Placement Test
          </Link>
          <Link to="/test?practice=true" className="font-semibold text-lg text-gray-700 hover:text-blue-800 transition-colors">
            Speaking & Writing
          </Link>
          <Link to="/about" className="font-semibold text-lg text-gray-700 hover:text-blue-800 transition-colors">
            About Us
          </Link>
          <Button 
            onClick={(e) => {
              createStarEffect(e);
              window.open("https://t.me/ieltstori", "_blank", "noopener,noreferrer");
            }}
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold px-6 py-2 shadow-md transform hover:scale-105 transition-all"
          >
            Free Resources
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white border-b transform transition-transform duration-300 ease-in-out shadow-lg",
        isOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="container mx-auto px-4 py-4 flex flex-col gap-6">
          <Link 
            to="/" 
            className="font-semibold text-lg text-gray-700 hover:text-blue-800 transition-colors py-2" 
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/test" 
            className="font-semibold text-lg text-gray-700 hover:text-blue-800 transition-colors py-2" 
            onClick={() => setIsOpen(false)}
          >
            Placement Test
          </Link>
          <Link 
            to="/test?practice=true" 
            className="font-semibold text-lg text-gray-700 hover:text-blue-800 transition-colors py-2" 
            onClick={() => setIsOpen(false)}
          >
            Speaking & Writing
          </Link>
          <Link 
            to="/about" 
            className="font-semibold text-lg text-gray-700 hover:text-blue-800 transition-colors py-2" 
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Button 
            onClick={(e) => {
              createStarEffect(e);
              window.open("https://t.me/ieltstori", "_blank", "noopener,noreferrer");
              setIsOpen(false);
            }}
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold px-6 py-2 shadow-md"
          >
            Free Resources
          </Button>
        </div>
      </div>
    </nav>
  );
}
