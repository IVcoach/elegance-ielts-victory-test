
import { useState } from "react";
import { User, Settings, BookOpen, Trophy, LogOut, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface UserAccountMenuProps {
  user?: {
    name: string;
    email: string;
    avatar?: string;
    level?: string;
  };
  onSignOut?: () => void;
}

export function UserAccountMenu({ user, onSignOut }: UserAccountMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Mock user data if none provided
  const currentUser = user || {
    name: "IELTS Student",
    email: "student@example.com",
    level: "Intermediate B2"
  };

  const menuItems = [
    {
      icon: <User size={16} />,
      label: "My Profile",
      href: "/profile",
      description: "Personal information & preferences"
    },
    {
      icon: <BookOpen size={16} />,
      label: "Test History", 
      href: "/history",
      description: "View past test results"
    },
    {
      icon: <Trophy size={16} />,
      label: "Progress",
      href: "/progress", 
      description: "Track your improvement"
    },
    {
      icon: <Settings size={16} />,
      label: "Settings",
      href: "/settings",
      description: "Account & notification settings"
    }
  ];

  return (
    <div className="relative">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-lg",
          "hover:bg-gray-100 transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:ring-offset-2",
          isOpen && "bg-gray-100"
        )}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0A3D62] to-[#D4AF37] flex items-center justify-center text-white font-semibold text-sm">
          {currentUser.name.charAt(0).toUpperCase()}
        </div>
        <div className="hidden md:block text-left">
          <div className="font-medium text-gray-900 text-sm truncate max-w-32">
            {currentUser.name}
          </div>
          {currentUser.level && (
            <div className="text-xs text-gray-500">
              {currentUser.level}
            </div>
          )}
        </div>
        <ChevronDown 
          size={16} 
          className={cn(
            "text-gray-400 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </Button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-scale-in">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0A3D62] to-[#D4AF37] flex items-center justify-center text-white font-bold text-lg">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 truncate">
                    {currentUser.name}
                  </div>
                  <div className="text-sm text-gray-500 truncate">
                    {currentUser.email}
                  </div>
                  {currentUser.level && (
                    <div className="text-xs text-[#D4AF37] font-medium mt-1">
                      Current Level: {currentUser.level}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-2">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md",
                    "hover:bg-gray-50 transition-colors duration-200",
                    "focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:ring-offset-2"
                  )}
                >
                  <div className="text-gray-600">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm">
                      {item.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="p-2 border-t border-gray-100">
              <button
                onClick={() => {
                  onSignOut?.();
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-md",
                  "hover:bg-red-50 text-red-600 transition-colors duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                )}
              >
                <LogOut size={16} />
                <span className="font-medium text-sm">Sign Out</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
