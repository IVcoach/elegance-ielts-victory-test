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
    name: "IELTS Student",
    email: "student@example.com",
    level: "Intermediate B2"
  };
  const menuItems = [{
    icon: <User size={16} />,
    label: "My Profile",
    href: "/profile",
    description: "Personal information & preferences"
  }, {
    icon: <BookOpen size={16} />,
    label: "Test History",
    href: "/history",
    description: "View past test results"
  }, {
    icon: <Trophy size={16} />,
    label: "Progress",
    href: "/progress",
    description: "Track your improvement"
  }, {
    icon: <Settings size={16} />,
    label: "Settings",
    href: "/settings",
    description: "Account & notification settings"
  }];
  return <div className="relative">
      

      {isOpen && <>
          
          <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-scale-in">
            

            <div className="p-2">
              {menuItems.map(item => {})}
            </div>

            <div className="p-2 border-t border-gray-100">
              
            </div>
          </div>
        </>}
    </div>;
}