"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

const greetings = ["Olá", "Hello", "Bem-vindo"];

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shouldSkip = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (shouldSkip) {
      const timeoutId = window.setTimeout(() => {
        setVisible(false);
        onComplete?.();
      }, 0);

      return () => window.clearTimeout(timeoutId);
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setVisible(false);
        onComplete?.();
      },
    });

    gsap.set(containerRef.current, { yPercent: 0, autoAlpha: 1 });

    tl.fromTo(
      textRef.current,
      { autoAlpha: 0, y: isMobile ? 12 : 16 },
      { autoAlpha: 1, y: 0, duration: isMobile ? 0.2 : 0.16, delay: 0.08 }
    )
      .to(textRef.current, {
        autoAlpha: 0,
        y: isMobile ? -10 : -14,
        duration: isMobile ? 0.16 : 0.16,
        delay: isMobile ? 0.16 : 0.18,
        onComplete: () => setIndex(1),
      })
      .set(textRef.current, { y: isMobile ? 10 : 14 })
      .to(textRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: isMobile ? 0.18 : 0.16,
      })
      .to(textRef.current, {
        autoAlpha: 0,
        y: isMobile ? -10 : -14,
        duration: 0.16,
        delay: isMobile ? 0.14 : 0.18,
        onComplete: () => setIndex(2),
      })
      .set(textRef.current, { y: isMobile ? 10 : 14 })
      .to(textRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: isMobile ? 0.18 : 0.16,
      })
      .to(containerRef.current, {
        yPercent: -100,
        autoAlpha: 0,
        duration: isMobile ? 0.32 : 0.36,
        delay: isMobile ? 0.1 : 0.12,
        ease: "power2.inOut",
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex min-h-dvh items-center justify-center bg-[#0b0b0b] text-white"
    >
      <div
        ref={textRef}
        style={{ fontFamily: "var(--font-clash)" }}
        className="px-6 text-center font-semibold tracking-normal text-[clamp(2.5rem,8vw,5rem)]"
      >
        {greetings[index]}
      </div>
    </div>
  );
}
