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
          scrub: true,
        },
      });

      gsap.to(".text-right-part", {
        y: "-25vh",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-image-pill", {
        y: "5vh",
        scale: 1.05,
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
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-[var(--color-bg)] px-[5vw] pb-32 pt-28 sm:min-h-[840px] lg:h-[112vh] lg:min-h-[900px]"
    >
      <div className="absolute inset-0 z-0 bg-mesh mix-blend-overlay opacity-50 pointer-events-none" />
      <CircuitCanvas />

      <div className="relative z-30 flex w-full flex-col items-center gap-6 pt-[8vh] pb-[5vh] lg:static lg:block">
        
        {/* LUIZ */}
        <div className="text-left-part w-full text-center lg:absolute lg:inset-x-[5vw] lg:top-[14vh] lg:w-auto lg:text-left">
          <span className="mb-2 block font-gloria text-xl tracking-normal text-[var(--color-accent-orange)] sm:mb-3 sm:text-2xl">
            {profile.role}
          </span>
          <h1 className="font-clash text-[clamp(5.5rem,18vw,8rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.03em] text-[var(--color-dark)] lg:text-[13rem] xl:text-[16rem]">
            Luiz
          </h1>
        </div>

        {/* IMAGE */}
        <div
          data-cursor="hover"
          className="hero-image-pill relative z-20 aspect-[3/4] w-[55vw] max-w-[280px] isolate overflow-hidden rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.15)] ring-1 ring-inset ring-white/10 lg:absolute lg:left-1/2 lg:top-[46%] lg:w-[28vw] lg:max-w-[400px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-[56px]"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/10 via-transparent to-white/5 mix-blend-overlay pointer-events-none" />
          <Image
            src="/profile.jpg"
            alt="Luiz Messias"
            fill
            sizes="(max-width: 640px) 55vw, (max-width: 1024px) 28vw, 400px"
            quality={95}
            className="object-cover object-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110"
            priority
          />
        </div>

        {/* MESSIAS */}
        <div className="text-right-part w-full text-center lg:absolute lg:inset-x-[5vw] lg:top-[14vh] lg:w-auto lg:text-right lg:mt-[42vh]">
          <p className="font-clash text-[clamp(5.5rem,18vw,8rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.03em] text-[var(--color-dark)] lg:text-[13rem] xl:text-[16rem]">
            Messias
          </p>
        </div>

        {/* BUTTONS */}
        <div className="hero-copy mt-4 flex w-full flex-col items-center gap-4 px-4 lg:absolute lg:right-[5vw] lg:top-24 lg:mt-0 lg:w-auto lg:flex-row lg:gap-3 lg:px-0">
          <Link
            href="/projetos"
            data-cursor="hover"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#111] px-6 font-general text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#ff6a00] lg:w-auto lg:px-5"
          >
            <BriefcaseBusiness size={17} />
            Ver projetos
          </Link>
          <Link
            href="#contact"
            data-cursor="hover"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white/80 px-6 font-general text-sm font-semibold uppercase tracking-[0.14em] text-[#111] backdrop-blur transition-colors hover:border-[#ff6a00] hover:text-[#ff6a00] lg:w-auto lg:px-5"
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
