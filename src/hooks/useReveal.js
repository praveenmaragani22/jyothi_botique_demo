import { useEffect, useRef } from 'react';

/**
 * Attaches IntersectionObserver to add .visible class when element enters viewport.
 * Returns a ref to attach to the element.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * Staggered reveal for a list of children.
 * Adds .visible with a delay based on index.
 */
export function useStaggerReveal(count, threshold = 0.1) {
  const parentRef = useRef(null);

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    const children = Array.from(parent.children);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 120);
          });
          observer.unobserve(parent);
        }
      },
      { threshold }
    );

    observer.observe(parent);
    return () => observer.disconnect();
  }, [count, threshold]);

  return parentRef;
}
