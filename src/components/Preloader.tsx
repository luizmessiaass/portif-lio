"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

const greetings = ["Olá", "Hello"];

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shouldSkip = window.matchMedia(
      "(max-width: 768px), (prefers-reduced-motion: reduce)"
    ).matches;

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
      { autoAlpha: 0, y: 16 },
      { autoAlpha: 1, y: 0, duration: 0.16, delay: 0.08 }
    )
      .to(textRef.current, {
        autoAlpha: 0,
        y: -14,
        duration: 0.16,
        delay: 0.18,
        onComplete: () => setIndex(1),
      })
      .set(textRef.current, { y: 14 })
      .to(textRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.16,
      })
      .to(containerRef.current, {
        yPercent: -100,
        autoAlpha: 0,
        duration: 0.36,
        delay: 0.12,
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
      className="fixed inset-0 z-[99999] hidden items-center justify-center bg-[#0b0b0b] text-white md:flex"
    >
      <div
        ref={textRef}
        style={{ fontFamily: "var(--font-clash)" }}
        className="font-semibold tracking-[-2px] text-[clamp(2.5rem,8vw,5rem)]"
      >
        {greetings[index]}
      </div>
    </div>
  );
}
