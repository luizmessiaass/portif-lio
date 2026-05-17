"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

const greetings = ["Oi", "Hello", "Bem-vindo"];

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const completedRef = useRef(false);

  useEffect(() => {
    const shouldSkip = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    completedRef.current = false;

    const finish = () => {
      if (completedRef.current) return;
      completedRef.current = true;
      setVisible(false);
      onComplete?.();
    };

    const fallbackId = window.setTimeout(finish, shouldSkip ? 0 : 4400);

    if (shouldSkip) {
      return () => window.clearTimeout(fallbackId);
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: finish });

      gsap.set(containerRef.current, { yPercent: 0, autoAlpha: 1 });
      gsap.set(".preloader-word", { autoAlpha: 0, y: isMobile ? 14 : 18 });

      greetings.forEach((_, index) => {
        const selector = `.preloader-word-${index}`;

        tl.to(selector, {
          autoAlpha: 1,
          y: 0,
          duration: isMobile ? 0.32 : 0.36,
          ease: "power2.out",
        })
          .to(selector, {
            autoAlpha: index === greetings.length - 1 ? 1 : 0,
            y: index === greetings.length - 1 ? 0 : isMobile ? -12 : -16,
            duration: index === greetings.length - 1 ? 0.12 : 0.24,
            delay: index === greetings.length - 1 ? 0.48 : 0.46,
            ease: "power2.inOut",
          })
          .set(selector, { y: isMobile ? 14 : 18 });
      });

      tl.to(containerRef.current, {
        yPercent: -100,
        autoAlpha: 0,
        duration: isMobile ? 0.58 : 0.66,
        delay: isMobile ? 0.2 : 0.24,
        ease: "power2.inOut",
      });
    }, containerRef);

    return () => {
      window.clearTimeout(fallbackId);
      ctx.revert();
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[99999] flex min-h-dvh items-center justify-center bg-[#0b0b0b] text-white"
    >
      <div
        ref={wordsRef}
        style={{ fontFamily: "var(--font-clash)" }}
        className="relative h-[1.1em] w-full px-6 text-center font-semibold tracking-normal text-[clamp(2.5rem,8vw,5rem)]"
      >
        {greetings.map((greeting, index) => (
          <span
            key={greeting}
            className={`preloader-word preloader-word-${index} absolute inset-0 flex items-center justify-center opacity-0`}
          >
            {greeting}
          </span>
        ))}
      </div>
    </div>
  );
}
