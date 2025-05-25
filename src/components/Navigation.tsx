
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { TelegramDialog } from "./TelegramDialog";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="w-full bg-white bg-opacity-95 backdrop-blur-sm fixed top-0 z-50 border-b shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <img 
            src="/lovable-uploads/2b59e768-d5ce-4555-89d3-872a72db7377.png" 
            alt="IELTS Victory Logo" 
            className="h-24 w-auto transform hover:scale-105 transition-transform" 
          />
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <GraduationCap className="h-6 w-6" />
              <div className="flex flex-col">
                <span className="font-bold text-lg">IELTS Victory</span>
                <span className="text-xs italic opacity-90">Your Success, Our Goal</span>
              </div>
            </div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-semibold text-lg text-gray-700 hover:text-brand-blue transition-colors">Home</Link>
          <Link to="/test" className="font-semibold text-lg text-gray-700 hover:text-brand-blue transition-colors">Test</Link>
          <TelegramDialog />
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn("md:hidden absolute top-full left-0 right-0 bg-white border-b transform transition-transform duration-300 ease-in-out shadow-lg", isOpen ? "translate-y-0" : "-translate-y-full")}>
        <div className="container mx-auto px-4 py-4 flex flex-col gap-6">
          <Link to="/" className="font-semibold text-lg text-gray-700 hover:text-brand-blue transition-colors py-2" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/test" className="font-semibold text-lg text-gray-700 hover:text-brand-blue transition-colors py-2" onClick={() => setIsOpen(false)}>
            Test
          </Link>
          <div onClick={() => setIsOpen(false)}>
            <TelegramDialog />
          </div>
        </div>
      </div>
    </nav>
  );
}
