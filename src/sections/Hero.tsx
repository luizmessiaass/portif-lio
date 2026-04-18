"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { CircuitCanvas } from "@/components/CircuitCanvas";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;

    const ctx = gsap.context(() => {
      const introDelay = isMobile ? 1.05 : 0.35;

      gsap.fromTo(
        ".hero-image-pill",
        { autoAlpha: 0, y: isMobile ? 22 : 32, scale: 0.96 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: isMobile ? 0.7 : 0.8,
          delay: introDelay,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".text-left-part, .text-right-part, .hero-bottom-info",
        { autoAlpha: 0, y: isMobile ? 18 : 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: isMobile ? 0.62 : 0.75,
          delay: introDelay + 0.1,
          stagger: 0.08,
          ease: "power3.out",
        }
      );

      if (isMobile) {
        gsap.to(".hero-image-pill", {
          y: -18,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.45,
          },
        });
        return;
      }

      gsap.to(".text-left-part", {
        y: "-15vh",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
      
      gsap.to(".text-right-part", {
        y: "-25vh",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(".hero-image-pill", {
        y: "5vh",
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative w-full h-[120vh] min-h-[900px] flex flex-col justify-center overflow-hidden bg-[var(--color-bg)] pt-20 pb-0"
    >
      <div className="absolute inset-0 bg-mesh mix-blend-overlay opacity-50 z-0 pointer-events-none" />
      <CircuitCanvas />

      <div
        data-cursor="hover"
        className="hero-image-pill absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] sm:w-[28vw] max-w-[400px] aspect-[3/4] rounded-[40px] sm:rounded-[56px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.20)] z-20 isolate"
      >
        <Image
          src="/profile.jpg"
          alt="Luiz Messias"
          fill
          sizes="(max-width: 640px) 55vw, (max-width: 1024px) 28vw, 400px"
          quality={85}
          className="object-cover object-center transition-transform duration-1000 hover:scale-105"
          priority
        />
      </div>

      {/* Text — justify-between: LUIZ no topo, MESSIAS na base */}
      <div className="absolute inset-0 flex flex-col justify-between px-[5vw] pt-[8vh] pb-[8vh]">

        {/* LUIZ — topo, z-30, passa na frente da foto */}
        <div className="relative z-30">
          <div className="text-left-part w-full flex items-center mb-2 pl-1 opacity-60">
            <span className="font-gloria text-xl tracking-wider text-[var(--color-accent-orange)]">
              Next.js · Node.js · PostgreSQL · GSAP
            </span>
          </div>
          <div className="text-left-part w-full overflow-visible">
            <h1 className="font-clash font-extrabold text-[clamp(5rem,16vw,19rem)] leading-[0.85] tracking-[-0.04em] text-[var(--color-dark)] uppercase">
              LUIZ
            </h1>
          </div>
        </div>

        {/* MESSIAS — base, z-30, passa na frente da foto */}
        <div className="relative z-30">
          <div className="text-right-part w-full flex justify-end pr-[8vw] mb-2 opacity-60">
            <span className="font-gloria text-xl tracking-wider text-[var(--color-accent-orange)] text-right">
              Full Stack Developer · Balneário Camboriú
            </span>
          </div>
          <div className="text-right-part w-full flex justify-end overflow-visible">
            <p className="font-clash font-extrabold text-[clamp(5rem,16vw,19rem)] leading-[0.85] tracking-[-0.04em] text-[var(--color-dark)] uppercase m-0">
              MESSIAS
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar Info */}
      <div className="hero-bottom-info absolute bottom-6 left-[5vw] right-[5vw] flex justify-between items-end z-40 opacity-60">
        <span className="font-general uppercase tracking-widest text-xs font-semibold">
          Baseado em Balneário Camboriú, SC
        </span>
        <span className="hidden sm:block font-general uppercase tracking-widest text-xs font-semibold">
          Role para explorar ↓
        </span>
      </div>
    </section>
  );
}
