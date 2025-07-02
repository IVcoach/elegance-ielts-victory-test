
import { useEffect, useState, useCallback } from 'react';

interface AccessibilityPreferences {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
}

export function useAccessibility() {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    screenReader: false
  });

  useEffect(() => {
    // Load preferences from localStorage
    const savedPrefs = localStorage.getItem('accessibility-preferences');
    if (savedPrefs) {
      try {
        setPreferences(JSON.parse(savedPrefs));
      } catch (error) {
        console.error('Failed to parse accessibility preferences:', error);
      }
    }

    // Detect system preferences
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const updateSystemPrefs = () => {
      setPreferences(prev => ({
        ...prev,
        highContrast: highContrastQuery.matches,
        reducedMotion: reducedMotionQuery.matches
      }));
    };

    updateSystemPrefs();
    highContrastQuery.addEventListener('change', updateSystemPrefs);
    reducedMotionQuery.addEventListener('change', updateSystemPrefs);

    return () => {
      highContrastQuery.removeEventListener('change', updateSystemPrefs);
      reducedMotionQuery.removeEventListener('change', updateSystemPrefs);
    };
  }, []);

  const updatePreferences = useCallback((newPrefs: Partial<AccessibilityPreferences>) => {
    setPreferences(prev => {
      const updated = { ...prev, ...newPrefs };
      localStorage.setItem('accessibility-preferences', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const applyAccessibilityClasses = useCallback(() => {
    const root = document.documentElement;
    
    // High contrast mode
    root.classList.toggle('high-contrast', preferences.highContrast);
    
    // Reduced motion
    root.classList.toggle('reduce-motion', preferences.reducedMotion);
    
    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${preferences.fontSize}`);
  }, [preferences]);

  useEffect(() => {
    applyAccessibilityClasses();
  }, [applyAccessibilityClasses]);

  return {
    preferences,
    updatePreferences,
    isHighContrast: preferences.highContrast,
    isReducedMotion: preferences.reducedMotion,
    fontSize: preferences.fontSize
  };
}
