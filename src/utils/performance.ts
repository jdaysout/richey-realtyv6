import { useEffect } from 'react';

// Image optimization
export const optimizeImage = (url: string, width: number): string => {
  if (url.includes('unsplash.com')) {
    return `${url}&w=${width}&q=80&auto=format`;
  }
  return url;
};

// Lazy loading helper
export const useLazyLoad = (elementRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLImageElement;
            if (element.dataset.src) {
              element.src = element.dataset.src;
              observer.unobserve(element);
            }
          }
        });
      },
      { rootMargin: '50px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [elementRef]);
};