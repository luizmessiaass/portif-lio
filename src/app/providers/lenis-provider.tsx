"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "@/lib/gsap";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const shouldSmoothScroll = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
    ).matches;

    if (!shouldSmoothScroll) return;

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    const lenisTickerFn = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(lenisTickerFn);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenisTickerFn);
    };
  }, []);

  return <>{children}</>;
}
