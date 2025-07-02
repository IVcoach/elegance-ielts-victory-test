
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SearchBar } from "./navigation/SearchBar";
import { UserAccountMenu } from "./navigation/UserAccountMenu";
import { ThemeToggle } from "./theme/ThemeToggle";
import { AccessibilityMenu } from "./accessibility/AccessibilityMenu";
import { SkipLink } from "./accessibility/SkipLink";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { containerRef } = useKeyboardNavigation({
    enableEscapeKey: true,
    onEscape: () => setIsOpen(false)
  });

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
      path: "/coaching",
      label: "Live Coaching"
    },
    {
      path: "/about",
      label: "About Us"
    }
  ];

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      
      <nav 
        ref={containerRef}
        className="w-full bg-white/95 backdrop-blur-sm fixed top-0 z-50 border-b border-gray-200 shadow-sm"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto py-3 flex items-center justify-between px-4 md:px-12">
          <Link 
            to="/" 
            className="flex items-center gap-2 md:gap-4 focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:ring-offset-2 rounded-md"
            aria-label="IELTS Victory - Go to homepage"
          >
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
          <div className="hidden lg:flex items-center gap-6 xl:gap-8" role="menubar">
            {navItems.map(item => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={cn(
                  "font-semibold text-base xl:text-lg transition-all duration-200 px-3 py-2 rounded-lg relative min-h-[44px] flex items-center",
                  "hover:text-pink-600 hover:bg-pink-50 focus:text-pink-600 focus:bg-pink-50 hover:scale-105",
                  "focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:ring-offset-2",
                  isActive(item.path) 
                    ? "text-pink-600 bg-pink-50 border-b-2 border-pink-600" 
                    : "text-gray-700"
                )}
                role="menuitem"
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-4">
            <SearchBar className="w-64 lg:w-80" />
            <AccessibilityMenu />
            <ThemeToggle />
            <UserAccountMenu />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:ring-offset-2" 
            onClick={handleMenuToggle} 
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X size={24} className="text-gray-700" aria-hidden="true" />
            ) : (
              <Menu size={24} className="text-gray-700" aria-hidden="true" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg",
            "transform transition-all duration-300 ease-in-out",
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          )}
          aria-hidden={!isOpen}
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            {/* Mobile Search */}
            <SearchBar 
              className="w-full"
              onResultSelect={handleMenuClose}
            />
            
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-2" role="none">
              {navItems.map(item => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={cn(
                    "font-semibold text-lg py-4 px-4 rounded-lg transition-all duration-200 min-h-[56px] flex items-center",
                    "hover:text-pink-600 hover:bg-pink-50 focus:text-pink-600 focus:bg-pink-50",
                    "focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:ring-offset-2",
                    "active:bg-pink-100 active:scale-95",
                    isActive(item.path) 
                      ? "text-pink-600 bg-pink-50 border-l-4 border-pink-600" 
                      : "text-gray-700"
                  )}
                  onClick={handleMenuClose}
                  role="menuitem"
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <AccessibilityMenu />
              <ThemeToggle />
              <UserAccountMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
