"use client";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal hook using IntersectionObserver.
 * Returns a ref to attach to the element and a `visible` boolean.
 * Once visible, the observer disconnects so it fires only once.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useReveal(threshold = 0.12) {
  // typed as any so callers can attach to section, div, etc. without casting
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user's motion preference
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
