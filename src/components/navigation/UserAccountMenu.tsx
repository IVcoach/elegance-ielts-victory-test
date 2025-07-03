
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

export function UserAccountMenu({
  user,
  onSignOut
}: UserAccountMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Mock user data if none provided
  const currentUser = user || {
    name: "Student",
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
        className="flex items-center gap-2 h-10 px-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
          <User size={16} className="text-purple-600" />
        </div>
        <span className="hidden md:block font-medium">{currentUser.name}</span>
        <ChevronDown size={16} className={cn("transition-transform", isOpen && "rotate-180")} />
      </Button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-scale-in">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <User size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">{currentUser.name}</p>
                  <p className="text-sm text-gray-500">{currentUser.email}</p>
                  <p className="text-xs text-purple-600">{currentUser.level}</p>
                </div>
              </div>
            </div>

            <div className="p-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <div className="flex-1">
                    <p className="font-medium">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="p-2 border-t border-gray-100">
              <Button
                variant="ghost"
                className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={() => {
                  onSignOut?.();
                  setIsOpen(false);
                }}
              >
                <LogOut size={16} className="mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
