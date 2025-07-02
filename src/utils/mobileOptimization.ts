
// Mobile optimization utilities for touch targets, spacing, and performance

export const MOBILE_CONSTANTS = {
  TOUCH_TARGET_MIN: 44, // Minimum touch target size in pixels
  TOUCH_TARGET_OPTIMAL: 48, // Optimal touch target size for better UX
  SAFE_AREA_PADDING: 16, // Safe area padding for mobile devices
  GESTURE_THRESHOLD: 50, // Minimum distance for swipe gestures
  DEBOUNCE_DELAY: 300, // Debounce delay for preventing rapid touches
  AUTO_SAVE_INTERVAL: 30000, // Auto-save interval in milliseconds
};

// Check if device is mobile
export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Check if device supports touch
export const isTouchDevice = (): boolean => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Get viewport dimensions
export const getViewportDimensions = () => {
  return {
    width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
  };
};

// Debounce function for touch events
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// Optimize for battery usage
export const optimizeForBattery = () => {
  // Reduce animation frame rate on battery save mode
  if ('getBattery' in navigator) {
    (navigator as any).getBattery().then((battery: any) => {
      if (battery.charging === false && battery.level < 0.2) {
        document.documentElement.classList.add('battery-save-mode');
      }
    });
  }
};

// Check network connection quality
export const getNetworkQuality = (): 'slow' | 'fast' | 'offline' => {
  if (!navigator.onLine) return 'offline';
  
  const connection = (navigator as any).connection;
  if (connection) {
    const effectiveType = connection.effectiveType;
    if (effectiveType === 'slow-2g' || effectiveType === '2g') {
      return 'slow';
    }
  }
  
  return 'fast';
};

// Preload critical resources
export const preloadCriticalResources = (urls: string[]) => {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = 'fetch';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Lazy load non-critical resources
export const lazyLoadResource = (url: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fetch(url)
            .then(response => response.json())
            .then(resolve)
            .catch(reject);
          observer.disconnect();
        }
      });
    });
    
    // Create a placeholder element to observe
    const placeholder = document.createElement('div');
    document.body.appendChild(placeholder);
    observer.observe(placeholder);
  });
};

// Handle touch gestures
export interface TouchGestureOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  threshold?: number;
}

export const handleTouchGestures = (
  element: HTMLElement,
  options: TouchGestureOptions
) => {
  let startX = 0;
  let startY = 0;
  let endX = 0;
  let endY = 0;
  
  const threshold = options.threshold || MOBILE_CONSTANTS.GESTURE_THRESHOLD;
  
  const handleTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
  };
  
  const handleTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];
    endX = touch.clientX;
    endY = touch.clientY;
  };
  
  const handleTouchEnd = () => {
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (deltaX > threshold && options.onSwipeRight) {
        options.onSwipeRight();
      } else if (deltaX < -threshold && options.onSwipeLeft) {
        options.onSwipeLeft();
      }
    } else {
      // Vertical swipe
      if (deltaY > threshold && options.onSwipeDown) {
        options.onSwipeDown();
      } else if (deltaY < -threshold && options.onSwipeUp) {
        options.onSwipeUp();
      }
    }
  };
  
  element.addEventListener('touchstart', handleTouchStart, { passive: true });
  element.addEventListener('touchmove', handleTouchMove, { passive: true });
  element.addEventListener('touchend', handleTouchEnd, { passive: true });
  
  return () => {
    element.removeEventListener('touchstart', handleTouchStart);
    element.removeEventListener('touchmove', handleTouchMove);
    element.removeEventListener('touchend', handleTouchEnd);
  };
};

// Optimize images for mobile
export const optimizeImageForMobile = (src: string, options?: {
  width?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg';
}): string => {
  const { width = 800, quality = 80, format = 'webp' } = options || {};
  
  // For now, return the original src
  // In production, this would integrate with an image optimization service
  return src;
};

// Safe area detection for iOS devices
export const getSafeAreaInsets = () => {
  const style = getComputedStyle(document.documentElement);
  return {
    top: parseInt(style.getPropertyValue('--sat') || '0'),
    right: parseInt(style.getPropertyValue('--sar') || '0'),
    bottom: parseInt(style.getPropertyValue('--sab') || '0'),
    left: parseInt(style.getPropertyValue('--sal') || '0'),
  };
};
