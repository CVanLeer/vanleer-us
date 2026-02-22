"use client";

import { useRef, useEffect, useCallback } from "react";
import { useInView } from "@/hooks/useInView";

interface FloatingCardProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  id?: string;
  parallaxSpeed?: number;
  tilt?: boolean;
  className?: string;
}

export function FloatingCard({
  children,
  variant = "light",
  id,
  parallaxSpeed = 0.025,
  tilt = true,
  className = "",
}: FloatingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const current = useRef({ x: 0.5, y: 0.5 });
  const scrollOffset = useRef(0);
  const raf = useRef<number>(0);
  const isTouch = useRef(false);
  const { ref: inViewRef, inView } = useInView();

  // Merge refs
  const setRefs = useCallback(
    (node: HTMLDivElement | null) => {
      cardRef.current = node;
      // Assign to useInView ref
      (inViewRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    },
    [inViewRef]
  );

  useEffect(() => {
    if (typeof window !== "undefined" && "ontouchstart" in window) {
      isTouch.current = true;
    }
  }, []);

  // Combined animation loop: mouse parallax + scroll depth
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Scroll handler
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!el) { ticking = false; return; }
        const rect = el.getBoundingClientRect();
        const viewH = window.innerHeight;
        const centerOffset = rect.top + rect.height / 2 - viewH / 2;
        scrollOffset.current = centerOffset * parallaxSpeed;
        ticking = false;
      });
    }

    // Mouse handler
    function onMouseMove(e: MouseEvent) {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = e.clientY / window.innerHeight;
    }

    function animate() {
      if (!el) return;

      let transform = `translateY(${scrollOffset.current}px)`;

      if (!isTouch.current) {
        current.current.x += (mouse.current.x - current.current.x) * 0.08;
        current.current.y += (mouse.current.y - current.current.y) * 0.08;

        const dx = (current.current.x - 0.5) * 2;
        const dy = (current.current.y - 0.5) * 2;

        const shiftX = dx * parallaxSpeed * 40;
        const shiftY = dy * parallaxSpeed * 20;
        const rotY = tilt ? dx * parallaxSpeed * 100 : 0;
        const rotX = tilt ? -dy * parallaxSpeed * 100 : 0;

        transform = `perspective(1200px) translateX(${shiftX}px) translateY(${scrollOffset.current + shiftY}px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }

      el.style.transform = transform;
      raf.current = requestAnimationFrame(animate);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    if (!isTouch.current) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
    }
    onScroll();
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf.current);
    };
  }, [parallaxSpeed, tilt]);

  const cardClass = variant === "dark" ? "floating-card-dark" : "floating-card";

  return (
    <div
      ref={setRefs}
      id={id}
      className={`${cardClass} mx-4 md:mx-auto md:max-w-6xl ${
        inView ? "animate-card-float-in" : "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
