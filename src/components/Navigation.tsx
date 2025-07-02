
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    {
      path: "/",
      label: "Home"
    },
    {
      path: "/test",
      label: "Placement Test"
    },
    {
      path: "/test?practice=true",
      label: "Speaking & Writing"
    },
    {
      path: "/about",
      label: "About Us"
    }
  ];

  return (
    <nav className="w-full bg-white backdrop-blur-sm fixed top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto py-3 flex items-center justify-between px-4 md:px-12">
        <Link to="/" className="flex items-center gap-2 md:gap-4">
          <img 
            alt="IELTS Victory Logo" 
            src="/lovable-uploads/071dc905-9d2a-40df-876b-01819844c04f.png" 
            className="h-12 md:h-16 lg:h-20 w-auto transform hover:scale-105 transition-transform object-contain" 
            loading="eager"
            width="80"
            height="80"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={cn(
                "font-semibold text-base lg:text-lg transition-colors px-3 py-2 rounded-lg relative min-h-[44px] flex items-center",
                "hover:text-pink-600 hover:bg-pink-50 focus:text-pink-600 focus:bg-pink-50",
                isActive(item.path) 
                  ? "text-pink-600 bg-pink-50 border-b-2 border-pink-600" 
                  : "text-gray-700"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Button - Touch-friendly */}
        <button 
          className="md:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation - Improved accessibility and touch targets */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg",
          "transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
        aria-hidden={!isOpen}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
          {navItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={cn(
                "font-semibold text-lg py-4 px-4 rounded-lg transition-colors min-h-[56px] flex items-center",
                "hover:text-pink-600 hover:bg-pink-50 focus:text-pink-600 focus:bg-pink-50",
                "active:bg-pink-100", // Better feedback for touch
                isActive(item.path) 
                  ? "text-pink-600 bg-pink-50 border-l-4 border-pink-600" 
                  : "text-gray-700"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
