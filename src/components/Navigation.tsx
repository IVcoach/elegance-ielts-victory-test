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
  const navItems = [{
    path: "/",
    label: "Home"
  }, {
    path: "/test",
    label: "Placement Test"
  }, {
    path: "/test?practice=true",
    label: "Speaking & Writing"
  }, {
    path: "/about",
    label: "About Us"
  }];
  return <nav className="w-full bg-white backdrop-blur-sm fixed top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto py-3 flex items-center justify-between px-6 md:px-12">
        <Link to="/" className="flex items-center gap-4">
          <img alt="IELTS Victory Logo" src="/lovable-uploads/071dc905-9d2a-40df-876b-01819844c04f.png" className="h-16 md:h-20 w-auto transform hover:scale-105 transition-transform object-contain" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => <Link key={item.path} to={item.path} className={cn("font-semibold text-lg transition-colors px-3 py-2 rounded-lg relative", "hover:text-pink-600 hover:bg-pink-50", isActive(item.path) ? "text-pink-600 bg-pink-50 border-b-2 border-pink-600" : "text-gray-700")}>
              {item.label}
            </Link>)}
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} className="text-gray-700" /> : <Menu size={28} className="text-gray-700" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn("md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg", "transform transition-transform duration-300 ease-in-out", isOpen ? "translate-y-0" : "-translate-y-full")}>
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navItems.map(item => <Link key={item.path} to={item.path} className={cn("font-semibold text-lg py-3 px-4 rounded-lg transition-colors min-h-[48px] flex items-center", "hover:text-pink-600 hover:bg-pink-50", isActive(item.path) ? "text-pink-600 bg-pink-50 border-l-4 border-pink-600" : "text-gray-700")} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>)}
        </div>
      </div>
    </nav>;
}