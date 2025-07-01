
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
    { path: "/", label: "Home" },
    { path: "/test", label: "Placement Test" },
    { path: "/test?practice=true", label: "Speaking & Writing" },
    { path: "/about", label: "About Us" }
  ];

  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm fixed top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto py-2 md:py-3 flex items-center justify-between px-4 md:px-6 lg:px-12">
        <Link to="/" className="flex items-center gap-2 md:gap-4">
          <img 
            alt="IELTS Victory Logo" 
            className="h-12 md:h-16 lg:h-20 w-auto transform hover:scale-105 transition-transform object-contain" 
            src="/lovable-uploads/1fe98a0e-4992-4f28-8c3b-2e5312053128.png" 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={cn(
                "font-semibold text-base lg:text-lg transition-colors px-3 py-2 rounded-lg relative",
                "hover:text-pink-600 hover:bg-pink-50",
                isActive(item.path) 
                  ? "text-pink-600 bg-pink-50 border-b-2 border-pink-600" 
                  : "text-gray-700"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-50" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg z-40",
        "transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={cn(
                "font-semibold text-lg py-4 px-4 rounded-lg transition-colors min-h-[56px] flex items-center",
                "hover:text-pink-600 hover:bg-pink-50 active:bg-pink-100",
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
