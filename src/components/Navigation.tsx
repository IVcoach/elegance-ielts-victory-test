
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { TelegramDialog } from "./TelegramDialog";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white bg-opacity-90 backdrop-blur-sm fixed top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/89c6d611-21a6-47a1-aa09-5681723e077d.png" 
            alt="IELTS Victory Logo" 
            className="h-12 w-auto" 
          />
          <span className="font-playfair font-bold text-xl text-brand-navy">V&C Elegance</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium text-gray-700 hover:text-brand-blue transition-colors">Home</Link>
          <Link to="/test" className="font-medium text-gray-700 hover:text-brand-blue transition-colors">Test</Link>
          {/* Additional links to be enabled once pages are created
          <Link to="/dashboard" className="font-medium text-gray-700 hover:text-brand-blue transition-colors">Dashboard</Link>
          */}
          <TelegramDialog />
          {/* Login button to be enabled once page is created
          <Button variant="outline" className="border-brand-gold text-brand-navy hover:bg-brand-cream">
            <Link to="/login">Sign In</Link>
          </Button>
          */}
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white border-b transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="container mx-auto px-4 py-3 flex flex-col gap-4">
          <Link 
            to="/" 
            className="font-medium text-gray-700 hover:text-brand-blue transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/test" 
            className="font-medium text-gray-700 hover:text-brand-blue transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Test
          </Link>
          {/* Additional mobile links to be enabled once pages are created
          <Link 
            to="/dashboard" 
            className="font-medium text-gray-700 hover:text-brand-blue transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Button 
            variant="outline" 
            className="border-brand-gold text-brand-navy hover:bg-brand-cream w-full mb-2"
            onClick={() => setIsOpen(false)}
          >
            <Link to="/login">Sign In</Link>
          </Button>
          */}
          <div onClick={() => setIsOpen(false)}>
            <TelegramDialog />
          </div>
        </div>
      </div>
    </nav>
  );
}
