"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, BriefcaseBusiness, Mail } from "lucide-react";
import { CircuitCanvas } from "@/components/CircuitCanvas";
import { gsap } from "@/lib/gsap";
import { profile } from "@/lib/profile";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;

    const ctx = gsap.context(() => {
      const introDelay = isMobile ? 1.05 : 0.35;
      const imageExitX = isMobile ? "68vw" : "48vw";

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
        ".text-left-part, .text-right-part, .hero-bottom-info, .hero-copy",
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

      gsap.fromTo(
        ".hero-image-pill",
        { x: 0, autoAlpha: 1, scale: 1 },
        {
          x: imageExitX,
          autoAlpha: 0,
          scale: isMobile ? 0.92 : 0.9,
          rotate: isMobile ? 2 : 4,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: isMobile ? "65% top" : "bottom top",
            scrub: 0.7,
          },
        }
      );

      if (isMobile) return;

      gsap.to(".text-left-part", {
        y: "-9vh",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".text-right-part", {
        y: "-14vh",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden overflow-x-clip bg-[var(--color-bg)] px-[clamp(1rem,5vw,5rem)] pb-28 pt-24 sm:min-h-[820px] sm:pb-32 sm:pt-28 lg:h-[108svh] lg:min-h-[840px] lg:pb-16 lg:pt-16"
    >
      <div className="absolute inset-0 z-0 bg-mesh mix-blend-overlay opacity-50 pointer-events-none" />
      <CircuitCanvas />

      <div className="relative z-30 mx-auto flex w-full max-w-[1500px] flex-col items-center justify-center gap-5 py-[4vh] lg:block lg:min-h-[760px] lg:py-0">
        
        {/* LUIZ */}
        <div className="text-left-part relative z-10 w-full max-w-full text-center lg:absolute lg:left-0 lg:top-[15%] lg:w-[58%] lg:text-left">
          <span className="mb-2 block font-gloria text-xl tracking-normal text-[var(--color-accent-orange)] sm:mb-3 sm:text-2xl">
            {profile.role}
          </span>
          <h1 className="max-w-full font-clash text-[clamp(4.2rem,20vw,8rem)] font-extrabold uppercase leading-[0.86] tracking-normal text-[var(--color-dark)] sm:text-[clamp(5.4rem,17vw,9rem)] lg:text-[clamp(8rem,14vw,14rem)]">
            Luiz
          </h1>
        </div>

        {/* IMAGE */}
        <div
          data-cursor="hover"
          className="hero-image-anchor relative z-30 aspect-[4/5] w-[min(70vw,320px)] max-w-full lg:absolute lg:left-1/2 lg:top-[50%] lg:w-[min(32vw,480px)] lg:-translate-x-1/2 lg:-translate-y-1/2"
        >
          <div className="hero-image-pill relative h-full w-full isolate overflow-hidden rounded-[36px] shadow-[0_34px_90px_rgba(0,0,0,0.18)] ring-1 ring-inset ring-white/15 sm:rounded-[44px] lg:rounded-[56px]">
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/10 via-transparent to-white/5 mix-blend-overlay pointer-events-none" />
            <Image
              src="/profile-enhanced.jpg"
              alt="Luiz Messias"
              fill
              sizes="(max-width: 640px) 70vw, (max-width: 1024px) 320px, 480px"
              quality={100}
              className="object-cover object-[54%_44%] transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
              priority
            />
          </div>
        </div>

        {/* MESSIAS */}
        <div className="text-right-part relative z-10 w-full max-w-full text-center lg:absolute lg:bottom-[1.5%] lg:right-0 lg:w-full lg:text-center xl:bottom-[-11%] 2xl:bottom-[-14%]">
          <p className="max-w-full font-clash text-[clamp(4.2rem,20vw,8rem)] font-extrabold uppercase leading-[0.86] tracking-normal text-[var(--color-dark)] sm:text-[clamp(5.4rem,17vw,9rem)] lg:text-[clamp(8rem,14vw,14rem)]">
            Messias
          </p>
        </div>

        {/* BUTTONS */}
        <div className="hero-copy mt-4 flex w-full max-w-[25rem] flex-col items-center gap-3 px-1 lg:absolute lg:right-0 lg:top-10 lg:mt-0 lg:w-auto lg:max-w-none lg:flex-row lg:gap-3 lg:px-0">
          <Link
            href="/projetos"
            data-cursor="hover"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#111] px-5 text-center font-general text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#ff6a00] sm:text-sm lg:w-auto lg:px-5"
          >
            <BriefcaseBusiness size={17} />
            Ver projetos
          </Link>
          <Link
            href="#contact"
            data-cursor="hover"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white/80 px-5 text-center font-general text-[13px] font-semibold uppercase tracking-[0.12em] text-[#111] backdrop-blur transition-colors hover:border-[#ff6a00] hover:text-[#ff6a00] sm:text-sm lg:w-auto lg:px-5"
          >
            <Mail size={17} />
            Falar comigo
          </Link>
        </div>
      </div>

      <div className="hero-bottom-info absolute bottom-6 left-[5vw] right-[5vw] z-40 hidden items-end justify-between text-xs font-semibold uppercase tracking-widest text-[#888] opacity-80 sm:flex">
        <span className="font-general max-w-[200px] text-left">{profile.stackLine}</span>
        <span className="inline-flex items-center gap-2 font-general">
          Role para explorar <ArrowDown size={14} />
        </span>
      </div>
    </section>
  );
}
