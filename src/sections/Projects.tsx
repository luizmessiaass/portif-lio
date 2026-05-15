"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { projects } from "@/lib/projects";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export function Projects() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;

    const ctx = gsap.context(() => {
      gsap.from(".projects-label", {
        y: isMobile ? 14 : 20,
        opacity: 0,
        duration: isMobile ? 0.48 : 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: ".projects-header", start: "top 88%" },
      });

      gsap.from([".projects-h2", ".projects-body"], {
        y: isMobile ? 24 : 50,
        opacity: 0,
        duration: isMobile ? 0.58 : 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".projects-header", start: "top 82%" },
      });

      gsap.from(".projects-cta", {
        x: isMobile ? 0 : 30,
        y: isMobile ? 16 : 0,
        opacity: 0,
        duration: isMobile ? 0.5 : 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: ".projects-header", start: "top 75%" },
      });

      gsap.utils.toArray<HTMLElement>(".project-item").forEach((item) => {
        gsap.from(item, {
          y: isMobile ? 34 : 80,
          opacity: 0,
          duration: isMobile ? 0.68 : 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 88%" },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="relative w-full overflow-x-clip bg-transparent px-[clamp(1rem,5vw,5rem)] py-20 sm:py-32" ref={containerRef}>
      <div className="projects-header max-w-[1300px] mx-auto w-full mb-12 sm:mb-20 relative z-0 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-10 px-2 sm:px-6">
        <div className="flex flex-col gap-4 max-w-[640px]">
          <span className="projects-label text-[12px] uppercase tracking-[0.2em] font-semibold text-[#888] font-general">
            / Cases full stack
          </span>
          <h2 className="projects-h2 font-clash text-[clamp(2.4rem,10vw,4.5rem)] font-semibold leading-[1.06] tracking-normal text-[var(--color-dark)] text-balance sm:text-[clamp(3.2rem,5vw,4.5rem)]">
            Sistemas que já <span className="text-[#888]">tirei do papel</span>
          </h2>
          <p className="projects-body font-general text-[17px] text-[#666] leading-relaxed mt-2 text-pretty">
            Uma seleção dos projetos que melhor mostram desenvolvimento full stack: interface, back-end, dados, autenticação, integrações, automações e deploy.
          </p>
        </div>

        <Link
          href="/projetos"
          data-cursor="hover"
          className="projects-cta group flex items-center gap-2 border-b border-black pb-1 hover:border-[#ff6a00] transition-colors min-h-[44px]"
        >
          <span className="text-sm font-general uppercase tracking-widest text-[#111] group-hover:text-[#ff6a00] transition-colors font-semibold">
            Ver todos os projetos
          </span>
          <span className="transform group-hover:translate-x-2 transition-transform text-[#111] group-hover:text-[#ff6a00]">→</span>
        </Link>
      </div>

      <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-6 px-2 sm:px-6">
        {featuredProjects.map((project) => (
          <Link
            href={`/projetos/${project.slug}`}
            key={project.id}
            data-cursor="hover"
            className="project-item group flex min-h-[470px] flex-col rounded-[28px] border border-black/5 bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(0,0,0,0.12)] sm:p-4 lg:min-h-[500px]"
          >
            <div className={`relative mb-6 aspect-[1850/872] overflow-hidden rounded-[22px] bg-gradient-to-br ${project.tone} ring-1 ring-black/5`}>
              {project.coverImage ? (
                <Image
                  src={project.coverImage}
                  alt={project.coverAlt ?? project.title}
                  fill
                  sizes="(max-width: 1024px) 90vw, 30vw"
                  quality={95}
                  className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
              ) : (
                <div className="absolute inset-0">
                  <div className="absolute inset-5 rounded-[18px] border border-white/20 bg-white/10 backdrop-blur-sm" />
                  <div className="absolute left-8 right-8 top-8 h-3 rounded-full bg-white/20" />
                  <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3">
                    <div className="h-16 rounded-2xl bg-white/20" />
                    <div className="h-16 rounded-2xl bg-white/10" />
                    <div className="h-16 rounded-2xl bg-white/20" />
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-black/45 px-2.5 py-1 font-general text-[9px] font-semibold uppercase tracking-[0.13em] text-white/75 backdrop-blur sm:left-5 sm:top-5">
                {project.shortCategory}
              </span>
            </div>

            <div className="flex flex-1 flex-col px-2 pb-2">
              <div className="mb-5 flex items-start justify-between gap-4">
                <h3 className="font-clash text-[clamp(1.75rem,7vw,3rem)] font-semibold leading-tight tracking-normal text-[var(--color-dark)] transition-colors duration-300 group-hover:text-[#ff6a00] sm:text-3xl">
                  {project.title}
                </h3>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 text-lg leading-none text-[#111] transition-all duration-300 group-hover:border-[#ff6a00] group-hover:bg-[#ff6a00] group-hover:text-white">
                  ↗
                </span>
              </div>
              <p className="font-general text-[15px] leading-relaxed text-[#666] text-pretty">{project.description}</p>
              <p className="mt-6 font-general text-sm font-semibold uppercase tracking-[0.16em] text-[#111]">
                {project.impact}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                {project.stack.slice(0, 4).map((tag) => (
                  <span key={tag} className="rounded-full border border-black/10 bg-[#f9f9f9] px-3 py-1.5 font-general text-xs font-semibold text-[#333]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
