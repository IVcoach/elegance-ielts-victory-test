
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
    <nav className="w-full bg-white/98 backdrop-blur-md fixed top-0 z-50 border-b border-gray-200 shadow-lg">
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
          className="md:hidden p-3 rounded-lg bg-white shadow-md border border-gray-200 hover:bg-gray-50 transition-all z-50 relative" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
        </button>
      </div>
      
      {/* Mobile Navigation Overlay */}
      <div className={cn(
        "md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out",
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      )}>
        {/* Dark Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={cn(
          "absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {/* Header with close button */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-pink-50 to-purple-50">
            <h3 className="text-lg font-bold text-gray-900">Navigation</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="p-6 space-y-2">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={cn(
                  "flex items-center font-semibold text-lg py-4 px-4 rounded-xl transition-all min-h-[60px]",
                  "hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:text-pink-600 active:scale-95",
                  "border border-transparent hover:border-pink-200",
                  isActive(item.path) 
                    ? "text-pink-600 bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200 shadow-sm" 
                    : "text-gray-700"
                )}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex-1">{item.label}</span>
                {isActive(item.path) && (
                  <div className="w-2 h-2 bg-pink-600 rounded-full animate-pulse" />
                )}
              </Link>
            ))}
          </div>
          
          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-50 to-transparent">
            <p className="text-sm text-gray-500 text-center">V&C Elegance IELTS</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
