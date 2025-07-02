
import { useState } from 'react';
import { Settings, Eye, Type, Contrast, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useAccessibility } from '@/hooks/useAccessibility';
import { cn } from '@/lib/utils';

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { preferences, updatePreferences, isHighContrast } = useAccessibility();

  const handleToggleHighContrast = () => {
    updatePreferences({ highContrast: !preferences.highContrast });
  };

  const handleToggleReducedMotion = () => {
    updatePreferences({ reducedMotion: !preferences.reducedMotion });
  };

  const handleFontSizeChange = (size: 'small' | 'medium' | 'large') => {
    updatePreferences({ fontSize: size });
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "h-9 w-9 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800",
            "focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:ring-offset-2",
            "transition-all duration-200",
            isHighContrast && "ring-2 ring-yellow-400"
          )}
          aria-label="Accessibility settings"
          aria-expanded={isOpen}
          aria-haspopup="menu"
        >
          <Settings size={16} aria-hidden="true" />
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-80 p-6 bg-white border border-gray-200 shadow-lg"
        align="end"
        role="menu"
        aria-label="Accessibility preferences"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Eye size={20} aria-hidden="true" />
            <h3 className="text-lg font-semibold text-gray-900">
              Accessibility Settings
            </h3>
          </div>

          {/* High Contrast Mode */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Contrast size={16} aria-hidden="true" />
              <Label 
                htmlFor="high-contrast" 
                className="text-sm font-medium text-gray-700"
              >
                High Contrast Mode
              </Label>
            </div>
            <Switch
              id="high-contrast"
              checked={preferences.highContrast}
              onCheckedChange={handleToggleHighContrast}
              aria-describedby="high-contrast-desc"
            />
          </div>
          <p id="high-contrast-desc" className="text-xs text-gray-600">
            Increases contrast for better visibility
          </p>

          {/* Reduced Motion */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Volume2 size={16} aria-hidden="true" />
              <Label 
                htmlFor="reduced-motion" 
                className="text-sm font-medium text-gray-700"
              >
                Reduce Motion
              </Label>
            </div>
            <Switch
              id="reduced-motion"
              checked={preferences.reducedMotion}
              onCheckedChange={handleToggleReducedMotion}
              aria-describedby="reduced-motion-desc"
            />
          </div>
          <p id="reduced-motion-desc" className="text-xs text-gray-600">
            Minimizes animations and transitions
          </p>

          {/* Font Size */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Type size={16} aria-hidden="true" />
              <Label className="text-sm font-medium text-gray-700">
                Font Size
              </Label>
            </div>
            <div 
              className="flex gap-2" 
              role="radiogroup" 
              aria-label="Font size options"
            >
              {(['small', 'medium', 'large'] as const).map((size) => (
                <Button
                  key={size}
                  variant={preferences.fontSize === size ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFontSizeChange(size)}
                  className="capitalize"
                  role="radio"
                  aria-checked={preferences.fontSize === size}
                  aria-label={`${size} font size`}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              These settings are saved locally and persist across sessions.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
