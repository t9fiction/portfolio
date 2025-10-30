import { useCallback, useRef } from 'react';

// Debounce hook for performance optimization
export const useDebounce = <T extends unknown[]>(
  callback: (...args: T) => void, 
  delay: number
) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return useCallback((...args: T) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => callback(...args), delay);
  }, [callback, delay]);
};

// Throttle hook for scroll events
export const useThrottle = <T extends unknown[]>(
  callback: (...args: T) => void, 
  delay: number
) => {
  const lastRun = useRef(Date.now());

  return useCallback((...args: T) => {
    if (Date.now() - lastRun.current >= delay) {
      callback(...args);
      lastRun.current = Date.now();
    }
  }, [callback, delay]);
};

// Lazy loading utility
export const lazyLoad = <T>(importFunc: () => Promise<T>) => {
  return importFunc();
};

// Image optimization utility
export const optimizeImage = (src: string, width?: number, height?: number) => {
  if (!src) return '';
  
  // Add optimization parameters for Next.js Image component
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('q', '75'); // Quality
  
  return `${src}?${params.toString()}`;
};
