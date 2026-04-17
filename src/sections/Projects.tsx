"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

const projects = [
  {
    id: 1,
    title: "Elevater",
    category: "Sistema · Multi-tenant · MeLi + Shopee · Claude AI",
    image: "/project-1.jpg"
  },
  {
    id: 2,
    title: "Project Beta",
    category: "Frontend • React",
    image: "/project-2.jpg"
  },
  {
    id: 3,
    title: "Project Gamma",
    category: "Awwwards • GSAP",
    image: "/project-3.jpg"
  }
];

export function Projects() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 1023px), (prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {

      // Section header reveal
      gsap.from(".projects-label", {
        y: 20, opacity: 0, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ".projects-header", start: "top 88%" }
      });
      gsap.from([".projects-h2", ".projects-body"], {
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.12,
        scrollTrigger: { trigger: ".projects-header", start: "top 82%" }
      });
      gsap.from(".projects-cta", {
        x: 30, opacity: 0, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ".projects-header", start: "top 75%" }
      });

      // Project items entrance
      gsap.utils.toArray<HTMLElement>(".project-item").forEach((item) => {
        gsap.from(item, {
          y: 80, opacity: 0, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 88%" }
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="relative w-full px-[5vw] py-32 bg-transparent" ref={containerRef}>

      <div className="projects-header max-w-[1300px] mx-auto w-full mb-24 relative z-0 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-10 px-2 sm:px-6">
        <div className="flex flex-col gap-4 max-w-[600px]">
          <span className="projects-label text-[12px] uppercase tracking-[0.2em] font-semibold text-[#888] font-general">
            / Projetos do Portfólio
          </span>
          <h2 className="projects-h2 font-clash font-semibold text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-[var(--color-dark)] tracking-[-0.02em] text-balance">
            O que já <span className="text-[#888]">construí</span>
          </h2>
          <p className="projects-body font-general text-[17px] text-[#666] leading-relaxed mt-2 text-pretty">
            Projetos que saíram da ideia e foram para produção. Cada um resolveu um problema real de alguém.
          </p>
        </div>
        <button type="button" data-cursor="hover" className="projects-cta group flex items-center gap-2 border-b border-black pb-1 hover:border-[#ff6a00] transition-colors min-h-[44px]">
          <span className="text-sm font-general uppercase tracking-widest text-[#111] group-hover:text-[#ff6a00] transition-colors font-semibold">
            Ver todos os projetos
          </span>
          <span className="transform group-hover:translate-x-2 transition-transform text-[#111] group-hover:text-[#ff6a00]">→</span>
        </button>
      </div>

      <div className="max-w-[1300px] mx-auto w-full flex flex-col gap-24 sm:gap-32 px-2 sm:px-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item group flex flex-col gap-6 w-full cursor-pointer"
          >
            {/* Image Container — scale + shadow on hover */}
            <div
              data-cursor="hover"
              className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-[40px] overflow-hidden bg-white border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 ease-out group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] group-hover:scale-[1.015]"
            >
              <div className="absolute inset-0 bg-[#e0e0e0] transition-transform duration-[1.5s] ease-out group-hover:scale-[1.04] flex items-center justify-center">
                <span className="text-black/30 font-general uppercase tracking-widest text-xs">Imagem do Projeto</span>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2 pt-2 px-2">
              <div className="flex justify-between items-center w-full">
                <h3 className="font-clash font-semibold text-3xl md:text-4xl text-[var(--color-dark)] tracking-[-0.01em] group-hover:text-[#ff6a00] transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out text-[#ff6a00] text-3xl leading-none font-light">
                  ↗
                </span>
              </div>
              <span className="font-general uppercase tracking-[0.2em] text-[#888] text-xs font-semibold mt-1">
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
