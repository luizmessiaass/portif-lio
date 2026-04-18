"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef     = useRef<HTMLHeadingElement>(null);
  const btnRef      = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;

    if (shouldReduceMotion) return;

    const ctx = gsap.context(() => {

      // Existing text reveal
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: isMobile ? "top 60%" : "top 40%",
          scrub: isMobile ? false : 1,
        },
        y: isMobile ? 34 : 100, opacity: 0, rotationZ: isMobile ? 0 : 2, duration: isMobile ? 0.68 : 1
      });

      // Label + CTA button entrance
      gsap.from(".contact-label", {
        y: isMobile ? 14 : 20, opacity: 0, duration: isMobile ? 0.48 : 0.6, ease: "power2.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 85%" }
      });
      gsap.from(btnRef.current, {
        y: isMobile ? 18 : 30, opacity: 0, scale: 0.95, duration: isMobile ? 0.56 : 0.7, ease: "back.out(1.4)",
        scrollTrigger: { trigger: btnRef.current, start: "top 90%" }
      });

    }, containerRef);

    const btn = btnRef.current;
    if (!btn || !isFinePointer) return () => ctx.revert();

    const onMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width  / 2) * 0.35;
      const y = (e.clientY - rect.top  - rect.height / 2) * 0.35;
      gsap.to(btn, { x, y, duration: 0.35, ease: "power2.out" });
    };

    const onLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    };

    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);

    return () => {
      ctx.revert();
      btn.removeEventListener("mousemove", onMove);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section ref={containerRef} id="contact" className="relative w-full px-[5vw] pt-20 pb-10 bg-transparent flex flex-col items-center">

      <div className="w-full max-w-[1300px] h-[1px] bg-black/10 mb-20" />

      <div className="max-w-[1300px] mx-auto w-full flex flex-col items-center text-center">
        <span className="contact-label text-[12px] uppercase tracking-[0.2em] font-semibold text-[#888] mb-8 block relative font-general">
          / Bora conversar
        </span>

        <h2
          ref={textRef}
          className="font-clash font-semibold text-[clamp(3.5rem,8vw,8.5rem)] leading-[0.9] text-[var(--color-dark)] tracking-[-0.03em] mb-12 hover:text-[#ff6a00] transition-colors duration-500 cursor-pointer text-balance"
        >
          Tem um projeto em mente?
        </h2>

        <a
          ref={btnRef}
          data-cursor="hover"
          href="mailto:Luiz.messiaass@gmail.com"
          className="group relative inline-flex items-center justify-center px-12 py-6 rounded-full bg-[#111] text-white font-general font-semibold text-xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[#ff6a00] transition-transform duration-500 transform translate-y-[101%] group-hover:translate-y-0" />
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Me manda uma mensagem
          </span>
        </a>
      </div>

      <div className="w-full max-w-[1300px] mt-32 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 text-[#888] text-xs uppercase tracking-widest font-general border-t border-black/10 pt-8 font-semibold">
        <div className="flex gap-6">
          {["LinkedIn", "GitHub"].map(social => (
            <a key={social} href="#" className="hover:text-[var(--color-dark)] transition-colors min-h-[44px] flex items-center">
              {social}
            </a>
          ))}
        </div>
        <div className="flex flex-col sm:items-end items-center gap-1">
          <p>© {new Date().getFullYear()} Luiz Messias.</p>
          <p>Feito com Next.js & GSAP.</p>
        </div>
      </div>

    </section>
  );
}
