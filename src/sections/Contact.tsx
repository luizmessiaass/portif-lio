"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

const whatsappUrl = "https://wa.me/5547997539380";
const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/luiz-henrique-messias/",
    icon: "/social/linkedin.svg",
  },
  {
    label: "GitHub",
    href: "https://github.com/LuizHenriiqueeMessias",
    icon: "/social/github.svg",
  },
];

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
    <section ref={containerRef} id="contact" className="relative mt-10 flex w-full flex-col items-center overflow-x-clip rounded-t-[32px] bg-[#111] px-[clamp(1rem,5vw,5rem)] pb-28 pt-20 text-white sm:mt-20 sm:rounded-t-[60px] sm:pb-10 sm:pt-32">

      <div className="w-full max-w-[1300px] h-[1px] bg-white/10 mb-12 sm:mb-20" />

      <div className="max-w-[1300px] mx-auto w-full flex flex-col items-center text-center">
        <span className="contact-label text-[12px] uppercase tracking-[0.2em] font-semibold text-[#aaa] mb-8 block relative font-general">
          / Bora conversar
        </span>

        <h2
          ref={textRef}
          className="mb-12 max-w-[780px] cursor-pointer font-clash text-[clamp(2.05rem,9vw,3.1rem)] font-semibold leading-[1.05] tracking-normal text-white transition-colors duration-500 hover:text-[#ff6a00] text-balance sm:text-[clamp(2.25rem,5vw,4.9rem)]"
        >
          Precisa tirar um sistema do papel?
        </h2>

        <a
          ref={btnRef}
          data-cursor="hover"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Conversar pelo WhatsApp"
          className="group relative inline-flex min-h-[56px] w-full max-w-[25rem] items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-6 py-5 text-center font-general text-base font-semibold text-[#111] shadow-2xl sm:w-auto sm:max-w-none sm:px-12 sm:py-6 sm:text-xl"
        >
          <div className="absolute inset-0 translate-y-[101%] bg-[#25d366] transition-transform duration-500 group-hover:translate-y-0" />
          <span
            aria-hidden="true"
            className="relative z-10 h-6 w-6 shrink-0 bg-[#25d366] transition-colors duration-300 group-hover:bg-white"
            style={{
              mask: "url(/stack/whatsapp.svg) center / contain no-repeat",
              WebkitMask: "url(/stack/whatsapp.svg) center / contain no-repeat",
            }}
          />
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            Vamos falar no WhatsApp
          </span>
        </a>
      </div>

      <div className="w-full max-w-[1300px] mt-20 sm:mt-32 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 text-[#aaa] text-xs uppercase tracking-widest font-general border-t border-white/10 pt-8 font-semibold">
        <div className="flex gap-6">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex min-h-[44px] items-center gap-2 transition-colors hover:text-white"
            >
              <span
                aria-hidden="true"
                className="h-[17px] w-[17px] bg-current"
                style={{
                  mask: `url(${icon}) center / contain no-repeat`,
                  WebkitMask: `url(${icon}) center / contain no-repeat`,
                }}
              />
              {label}
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
