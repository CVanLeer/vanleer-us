"use client";

import { useEffect, useRef, useCallback } from "react";

interface MouseParallaxOptions {
  speed?: number;
  tilt?: boolean;
}

export function useMouseParallax({
  speed = 0.02,
  tilt = true,
}: MouseParallaxOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const current = useRef({ x: 0.5, y: 0.5 });
  const raf = useRef<number>(0);
  const isTouch = useRef(false);

  const animate = useCallback(() => {
    if (isTouch.current) return;

    // Ease toward target
    current.current.x += (mouse.current.x - current.current.x) * 0.08;
    current.current.y += (mouse.current.y - current.current.y) * 0.08;

    const el = ref.current;
    if (el) {
      const dx = (current.current.x - 0.5) * 2; // -1 to 1
      const dy = (current.current.y - 0.5) * 2;

      const shiftX = dx * speed * 40; // px
      const shiftY = dy * speed * 40;
      const rotateY = tilt ? dx * speed * 120 : 0; // deg
      const rotateX = tilt ? -dy * speed * 120 : 0;

      el.style.transform = `perspective(1200px) translateX(${shiftX}px) translateY(${shiftY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    raf.current = requestAnimationFrame(animate);
  }, [speed, tilt]);

  useEffect(() => {
    // Detect touch device
    if (typeof window !== "undefined" && "ontouchstart" in window) {
      isTouch.current = true;
      return;
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = e.clientY / window.innerHeight;
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf.current);
    };
  }, [animate]);

  return ref;
}
