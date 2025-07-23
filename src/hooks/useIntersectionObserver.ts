"use client";

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        
        if (isVisible && (!triggerOnce || !hasTriggered)) {
          setIsIntersecting(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else if (!triggerOnce && !isVisible) {
          setIsIntersecting(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return { ref, isIntersecting };
};

// Animation variants
export const animationVariants = {
  fadeIn: {
    initial: 'opacity-0',
    animate: 'opacity-100 transition-opacity duration-1000 ease-out',
  },
  slideUp: {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0 transition-all duration-800 ease-out',
  },
  slideLeft: {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0 transition-all duration-800 ease-out',
  },
  slideRight: {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0 transition-all duration-800 ease-out',
  },
  scale: {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100 transition-all duration-700 ease-out',
  },
  stagger: {
    initial: 'opacity-0 translate-y-4',
    animate: 'opacity-100 translate-y-0 transition-all duration-600 ease-out',
  },
};
