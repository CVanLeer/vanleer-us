"use client";

import { useEffect, useRef } from "react";

interface ScrollDepthOptions {
  speed?: number;
}

export function useScrollDepth({ speed = 0.03 }: ScrollDepthOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        if (!el) {
          ticking.current = false;
          return;
        }
        const rect = el.getBoundingClientRect();
        const viewH = window.innerHeight;
        // 0 when element center is at viewport center, negative above, positive below
        const centerOffset = rect.top + rect.height / 2 - viewH / 2;
        const offsetY = centerOffset * speed;

        el.style.transform = `translateY(${offsetY}px)`;
        ticking.current = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Initial position

    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return ref;
}
