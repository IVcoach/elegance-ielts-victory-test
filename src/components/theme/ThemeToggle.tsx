
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun size={16} />;
      case "dark":
        return <Moon size={16} />;
      case "system":
        return <Monitor size={16} />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Light mode";
      case "dark":
        return "Dark mode";  
      case "system":
        return "System theme";
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className={cn(
        "h-9 w-9 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800",
        "focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:ring-offset-2",
        "transition-all duration-200"
      )}
      title={getLabel()}
    >
      <div className="transition-transform duration-200 hover:scale-110">
        {getIcon()}
      </div>
      <span className="sr-only">{getLabel()}</span>
    </Button>
  );
}
