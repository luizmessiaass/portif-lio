"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canUseCursor = window.matchMedia(
      "(pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)"
    ).matches;

    if (!canUseCursor) return;

    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    // Set initial position off screen
    gsap.set([cursor, dot], { xPercent: -50, yPercent: -50, opacity: 0 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");
    const dotXSet = gsap.quickSetter(dot, "x", "px");
    const dotYSet = gsap.quickSetter(dot, "y", "px");

    let frameId: number | null = null;

    const tick = () => {
      pos.x += (mouse.x - pos.x) * 0.22;
      pos.y += (mouse.y - pos.y) * 0.22;
      xSet(pos.x);
      ySet(pos.y);

      if (Math.abs(mouse.x - pos.x) > 0.1 || Math.abs(mouse.y - pos.y) > 0.1) {
        frameId = requestAnimationFrame(tick);
      } else {
        frameId = null;
      }
    };

    const requestTick = () => {
      if (frameId === null) frameId = requestAnimationFrame(tick);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      dotXSet(mouse.x);
      dotYSet(mouse.y);
      requestTick();
      gsap.to([cursor, dot], { opacity: 1, duration: 0.1, overwrite: "auto" });
    };

    const handleHoverEnter = () => {
      gsap.to(cursor, { scale: 2.2, backgroundColor: "rgba(255, 77, 0, 0.15)", borderColor: "transparent", duration: 0.3 });
      gsap.to(dot, { scale: 0, duration: 0.2 });
    };

    const handleHoverLeave = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: "transparent", borderColor: "rgba(255, 255, 255, 0.5)", duration: 0.3 });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Add event listeners to all interactive elements
    const attachHoverEvents = () => {
      const interactives = document.querySelectorAll('a, button, [data-cursor="hover"], input, textarea, select');
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverEnter as EventListener);
        el.removeEventListener('mouseleave', handleHoverLeave as EventListener);
        el.addEventListener('mouseenter', handleHoverEnter as EventListener);
        el.addEventListener('mouseleave', handleHoverLeave as EventListener);
      });
    };

    attachHoverEvents();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-[99999] mix-blend-difference hidden md:block" 
      />
      <div 
        ref={cursorDotRef} 
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-[100000] mix-blend-difference hidden md:block" 
      />
    </>
  );
}
