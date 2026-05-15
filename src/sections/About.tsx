"use client";

import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { capabilities, profile } from "@/lib/profile";

export function About() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;

    const ctx = gsap.context(() => {
      gsap.from(".about-label", {
        y: isMobile ? 16 : 24,
        opacity: 0,
        duration: isMobile ? 0.48 : 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: ".about-header", start: "top 88%" },
      });

      gsap.from(".about-h2-word", {
        y: isMobile ? "70%" : "110%",
        opacity: 0,
        duration: isMobile ? 0.58 : 0.7,
        ease: "power3.out",
        stagger: isMobile ? 0.035 : 0.06,
        scrollTrigger: { trigger: ".about-header", start: "top 82%" },
      });

      gsap.from([".about-h3", ".about-body"], {
        y: isMobile ? 24 : 40,
        opacity: 0,
        duration: isMobile ? 0.58 : 0.7,
        ease: "power2.out",
        stagger: 0.14,
        scrollTrigger: { trigger: ".about-left", start: "top 80%" },
      });

      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, index) => {
        gsap.from(card, {
          y: isMobile ? 34 : 70,
          opacity: 0,
          duration: isMobile ? 0.62 : 0.9,
          ease: "power3.out",
          delay: index * (isMobile ? 0.06 : 0.13),
          scrollTrigger: { trigger: card, start: "top 88%" },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const h2Words1 = ["Desenvolvimento", "full", "stack"];
  const h2Words2 = ["para", "tirar", "sistemas", "do", "papel."];

  return (
    <section id="about" className="relative w-full rounded-[40px] bg-[#ededed] px-[5vw] py-32 sm:rounded-[60px]" ref={containerRef}>
      <div className="about-header relative z-0 mx-auto mb-16 flex w-full max-w-[1300px] flex-col items-start px-2 sm:px-6">
        <span className="about-label mb-6 block font-general text-[12px] font-semibold uppercase tracking-[0.2em] text-[#888]">
          / Como posso te ajudar
        </span>
        <h2 className="max-w-[920px] overflow-hidden font-clash text-5xl font-semibold leading-[1.05] tracking-normal text-[var(--color-dark)] text-balance sm:text-6xl lg:text-7xl">
          {h2Words1.map((word) => (
            <span key={word} className="about-h2-word mr-[0.25em] inline-block">
              {word}
            </span>
          ))}
          <span className="text-[#888]">
            {h2Words2.map((word) => (
              <span key={word} className="about-h2-word mr-[0.25em] inline-block">
                {word}
              </span>
            ))}
          </span>
        </h2>
      </div>

      <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-10 px-2 pt-10 sm:px-6 lg:flex-row lg:gap-20">
        <div className="about-left relative w-full lg:w-[35%]">
          <div className="flex flex-col gap-6 lg:sticky lg:top-40">
            <h3 className="about-h3 font-clash text-3xl font-semibold leading-tight tracking-normal text-[var(--color-dark)] text-balance md:text-5xl">
              Full stack com visão de produto, dados e negócio.
            </h3>
            <p className="about-body max-w-[460px] font-general text-[17px] leading-relaxed text-[#666] text-pretty sm:text-lg">
              {profile.summary}
            </p>
            
            <div className="about-body mt-2 flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-[var(--color-accent-orange)] lg:hidden">
              <ArrowRight size={16} className="animate-pulse" />
              Arraste para ver os serviços
            </div>
          </div>
        </div>

        <div className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-12 lg:w-[65%] lg:flex-col lg:gap-8 lg:overflow-visible lg:pb-[10vh] hide-scrollbar -mx-[5vw] px-[5vw] lg:mx-0 lg:px-0">
          {capabilities.map((service, index) => (
            <div
              key={service.id}
              data-cursor="hover"
              className="service-card flex min-h-[42vh] w-[85vw] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 sm:w-[60vw] sm:p-12 lg:sticky lg:w-full lg:min-h-[38vh]"
              style={{
                top: `calc(15vh + ${index * 40}px)`,
                zIndex: index + 1,
              }}
            >
              <div className="relative z-10 mb-14 flex w-full flex-col">
                <span className="mb-2 font-gloria text-xl text-[var(--color-accent-orange)] opacity-80 sm:text-2xl">
                  {service.accent}
                </span>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-clash text-4xl font-medium tracking-normal text-[var(--color-dark)] sm:text-5xl">
                    {service.id}
                  </span>
                  <h3 className="break-words font-clash text-4xl font-semibold leading-tight tracking-normal text-[var(--color-dark)] sm:text-5xl">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="relative z-10 flex w-full max-w-[560px] flex-col">
                <p className="mb-8 font-general text-[17px] leading-relaxed text-[#444] text-pretty sm:text-[19px]">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 bg-[#f9f9f9] px-4 py-2 font-general text-sm font-medium text-[#222]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
