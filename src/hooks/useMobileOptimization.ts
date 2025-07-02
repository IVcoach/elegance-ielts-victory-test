
import { useEffect, useState, useCallback, useRef } from 'react';
import { 
  isMobileDevice, 
  isTouchDevice, 
  getViewportDimensions, 
  debounce, 
  optimizeForBattery,
  getNetworkQuality,
  MOBILE_CONSTANTS 
} from '@/utils/mobileOptimization';

interface MobileOptimizationOptions {
  enableTouchGestures?: boolean;
  enableBatteryOptimization?: boolean;
  enableNetworkOptimization?: boolean;
  autoSaveInterval?: number;
}

export function useMobileOptimization(options: MobileOptimizationOptions = {}) {
  const {
    enableTouchGestures = true,
    enableBatteryOptimization = true,
    enableNetworkOptimization = true,
    autoSaveInterval = MOBILE_CONSTANTS.AUTO_SAVE_INTERVAL
  } = options;

  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [networkQuality, setNetworkQuality] = useState<'slow' | 'fast' | 'offline'>('fast');
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const lastTouchRef = useRef<number>(0);

  // Initialize mobile detection
  useEffect(() => {
    setIsMobile(isMobileDevice());
    setIsTouch(isTouchDevice());
    setViewport(getViewportDimensions());
    setNetworkQuality(getNetworkQuality());
    setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
  }, []);

  // Handle viewport changes
  const handleResize = useCallback(() => {
    const newViewport = getViewportDimensions();
    setViewport(newViewport);
    setOrientation(newViewport.height > newViewport.width ? 'portrait' : 'landscape');
  }, []);

  const debouncedResize = useCallback(debounce(handleResize, 150), [handleResize]);

  useEffect(() => {
    window.addEventListener('resize', debouncedResize);
    window.addEventListener('orientationchange', debouncedResize);
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
      window.removeEventListener('orientationchange', debouncedResize);
    };
  }, [debouncedResize]);

  // Battery optimization
  useEffect(() => {
    if (enableBatteryOptimization && isMobile) {
      optimizeForBattery();
    }
  }, [enableBatteryOptimization, isMobile]);

  // Network quality monitoring
  useEffect(() => {
    if (enableNetworkOptimization) {
      const handleOnline = () => setNetworkQuality(getNetworkQuality());
      const handleOffline = () => setNetworkQuality('offline');

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }
  }, [enableNetworkOptimization]);

  // Prevent rapid touch events
  const preventRapidTouch = useCallback((callback: () => void, delay = MOBILE_CONSTANTS.DEBOUNCE_DELAY) => {
    const now = Date.now();
    if (now - lastTouchRef.current > delay) {
      lastTouchRef.current = now;
      callback();
    }
  }, []);

  // Optimized scroll handler
  const createOptimizedScrollHandler = useCallback((handler: (event: Event) => void) => {
    let ticking = false;
    
    return (event: Event) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handler(event);
          ticking = false;
        });
        ticking = true;
      }
    };
  }, []);

  // Apply mobile-specific CSS classes
  useEffect(() => {
    const root = document.documentElement;
    
    if (isMobile) {
      root.classList.add('mobile-device');
    }
    
    if (isTouch) {
      root.classList.add('touch-device');
    }
    
    root.classList.toggle('portrait', orientation === 'portrait');
    root.classList.toggle('landscape', orientation === 'landscape');
    root.classList.toggle('slow-network', networkQuality === 'slow');
    root.classList.toggle('offline', networkQuality === 'offline');
    
    return () => {
      root.classList.remove('mobile-device', 'touch-device', 'portrait', 'landscape', 'slow-network', 'offline');
    };
  }, [isMobile, isTouch, orientation, networkQuality]);

  // Performance metrics
  const getPerformanceMetrics = useCallback(() => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        ttfb: navigation.responseStart - navigation.requestStart
      };
    }
    return null;
  }, []);

  return {
    isMobile,
    isTouch,
    viewport,
    networkQuality,
    orientation,
    preventRapidTouch,
    createOptimizedScrollHandler,
    getPerformanceMetrics,
    // Utility functions
    isLandscape: orientation === 'landscape',
    isPortrait: orientation === 'portrait',
    isSlowNetwork: networkQuality === 'slow',
    isOffline: networkQuality === 'offline',
    // Screen size helpers
    isSmallScreen: viewport.width < 480,
    isMediumScreen: viewport.width >= 480 && viewport.width < 768,
    isLargeScreen: viewport.width >= 768,
  };
}
