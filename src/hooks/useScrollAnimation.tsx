import { useEffect, useState, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
}: ScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<T>(null);

  useEffect(() => {
    const { current } = domRef;
    if (!current) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { domRef, isVisible };
}
