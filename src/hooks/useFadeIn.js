import { useEffect } from 'react';

/**
 * Replicates the original vanilla-JS scroll fade-in behavior.
 * Observes every element with the `.fade-in` class and adds `.visible`
 * once it enters the viewport. Respects prefers-reduced-motion.
 */
export default function useFadeIn(deps = []) {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      fadeElements.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
