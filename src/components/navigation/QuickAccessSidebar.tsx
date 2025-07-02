
import { useState } from "react";
import { 
  BookOpen, 
  Clock, 
  TrendingUp, 
  Calendar,
  ChevronLeft,
  ChevronRight,
  Play
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RecentActivity {
  id: string;
  type: "test" | "practice" | "coaching";
  title: string;
  date: string;
  progress?: number;
  score?: string;
}

const mockRecentActivities: RecentActivity[] = [
  {
    id: "1",
    type: "test",
    title: "IELTS Placement Test",
    date: "2 hours ago",
    score: "Band 6.5"
  },
  {
    id: "2", 
    type: "practice",
    title: "Speaking Practice",
    date: "Yesterday",
    progress: 75
  },
  {
    id: "3",
    type: "coaching",
    title: "Writing Session with Sarah",
    date: "3 days ago"
  }
];

interface QuickAccessSidebarProps {
  className?: string;
}

export function QuickAccessSidebar({ className }: QuickAccessSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const getActivityIcon = (type: RecentActivity["type"]) => {
    switch (type) {
      case "test":
        return <BookOpen size={16} className="text-[#0A3D62]" />;
      case "practice":
        return <Play size={16} className="text-green-600" />;
      case "coaching":
        return <Calendar size={16} className="text-[#D4AF37]" />;
    }
  };

  const getActivityColor = (type: RecentActivity["type"]) => {
    switch (type) {
      case "test":
        return "bg-blue-50 text-[#0A3D62] border-blue-200";
      case "practice":
        return "bg-green-50 text-green-700 border-green-200";
      case "coaching":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
    }
  };

  return (
    <div 
      className={cn(
        "fixed left-0 top-20 bottom-0 bg-white border-r border-gray-200 shadow-lg z-40",
        "transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-80",
        className
      )}
    >
      {/* Toggle Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={cn(
          "absolute -right-3 top-6 w-6 h-6 rounded-full border border-gray-200 bg-white shadow-md",
          "hover:shadow-lg transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:ring-offset-2"
        )}
      >
        {isCollapsed ? (
          <ChevronRight size={12} />
        ) : (
          <ChevronLeft size={12} />
        )}
      </Button>

      <div className="p-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp size={20} className="text-[#0A3D62] flex-shrink-0" />
          {!isCollapsed && (
            <h3 className="font-semibold text-gray-900">Quick Access</h3>
          )}
        </div>

        {/* Recent Activities */}
        <div className="space-y-4">
          {!isCollapsed && (
            <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Recent Activities
            </h4>
          )}
          
          <div className="space-y-2">
            {mockRecentActivities.map((activity) => (
              <Link
                key={activity.id}
                to={activity.type === "test" ? "/test" : activity.type === "practice" ? "/test?practice=true" : "/coaching"}
                className={cn(
                  "block p-3 rounded-lg border transition-all duration-200",
                  "hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:ring-offset-2",
                  getActivityColor(activity.type)
                )}
              >
                {isCollapsed ? (
                  <div className="flex justify-center">
                    {getActivityIcon(activity.type)}
                  </div>
                ) : (
                  <>
                    <div className="flex items-start gap-2 mb-2">
                      {getActivityIcon(activity.type)}
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">
                          {activity.title}
                        </div>
                        <div className="text-xs opacity-75">
                          {activity.date}
                        </div>
                      </div>
                    </div>
                    
                    {activity.score && (
                      <Badge variant="secondary" className="text-xs">
                        {activity.score}
                      </Badge>
                    )}
                    
                    {activity.progress && (
                      <div className="mt-2">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>{activity.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-[#0A3D62] h-1.5 rounded-full transition-all duration-500"
                            style={{ width: `${activity.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        {!isCollapsed && (
          <div className="mt-8 space-y-3">
            <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Quick Actions
            </h4>
            
            <Link
              to="/test"
              className="flex items-center gap-2 p-2 text-sm font-medium text-[#0A3D62] hover:bg-blue-50 rounded-lg transition-colors"
            >
              <BookOpen size={16} />
              <span>Take New Test</span>
            </Link>
            
            <Link
              to="/coaching"
              className="flex items-center gap-2 p-2 text-sm font-medium text-[#D4AF37] hover:bg-yellow-50 rounded-lg transition-colors"
            >
              <Calendar size={16} />
              <span>Book Coaching</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
