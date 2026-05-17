"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import { StackChip } from "@/components/StackChip";
import { gsap } from "@/lib/gsap";
import { projectFilters, projects, type ProjectFilter } from "@/lib/projects";

export function ProjectsArchive() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("Todos");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "Todos") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    // Animação leve sempre que os projetos visíveis mudarem (ao filtrar)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;
    
    gsap.fromTo(".project-card",
      { opacity: 0, y: 16, scale: 0.985 },
      { opacity: 1, y: 0, scale: 1, duration: 0.28, stagger: 0.025, ease: "power2.out", overwrite: "auto" }
    );
  }, [visibleProjects]);

  return (
    <main className="relative min-h-dvh overflow-x-clip px-[clamp(1rem,5vw,5rem)] pb-40 pt-16 sm:pt-20">
      <section className="mx-auto flex w-full max-w-[1300px] flex-col gap-12 px-2 sm:px-6">
        <div className="flex flex-col gap-8 border-b border-black/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[760px]">
            <Link
              href="/#projects"
              data-cursor="hover"
              className="mb-10 inline-flex min-h-[44px] items-center font-general text-sm font-semibold uppercase tracking-[0.18em] text-[#666] transition-colors hover:text-[#ff6a00]"
            >
              ← Voltar para a home
            </Link>
            <span className="mb-5 block font-general text-[12px] font-semibold uppercase tracking-[0.2em] text-[#888]">
              / Cases full stack
            </span>
            <h1 className="font-clash text-[clamp(2.5rem,8vw,8.5rem)] font-semibold leading-[0.96] tracking-normal text-[var(--color-dark)] text-pretty">
              Sistemas, dashboards e automações em detalhe.
            </h1>
          </div>

          <div className="flex flex-col gap-4">
            <p className="max-w-[420px] font-general text-[17px] leading-relaxed text-[#666] text-pretty">
              Uma visão organizada dos projetos por tipo de entrega, stack, impacto e evidências visuais de desenvolvimento full stack.
            </p>
            <div className="flex items-center gap-2 font-general text-xs font-bold uppercase tracking-widest text-[#111]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff6a00]" />
              {visibleProjects.length} {visibleProjects.length === 1 ? 'Projeto encontrado' : 'Projetos encontrados'}
            </div>
          </div>
        </div>

        <div className="sticky top-4 z-40 -mx-2 flex max-w-[calc(100vw-2rem)] scroll-px-2 gap-2 overflow-x-auto overscroll-x-contain px-2 py-3 backdrop-blur-sm sm:top-6 sm:max-w-none hide-scrollbar">
          {projectFilters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                data-cursor="hover"
                onClick={() => setActiveFilter(filter)}
                className={`min-h-[42px] shrink-0 rounded-full border px-4 font-general text-[13px] font-semibold transition-all sm:min-h-[44px] sm:px-5 sm:text-sm ${
                  isActive
                    ? "border-[#111] bg-[#111] text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)]"
                    : "border-black/10 bg-white/70 text-[#444] hover:border-[#ff6a00] hover:text-[#ff6a00]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <Link
              href={`/projetos/${project.slug}`}
              key={project.id}
              data-cursor="hover"
              className="project-card group flex min-h-[390px] flex-col overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(0,0,0,0.12)] sm:min-h-[480px]"
            >
              <div className={`relative aspect-[1850/872] overflow-hidden bg-gradient-to-br ${project.tone}`}>
                {project.coverImage ? (
                  <Image
                    src={project.coverImage}
                    alt={project.coverAlt ?? project.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 45vw"
                    quality={index < 2 ? 76 : 70}
                    loading={index < 2 ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="absolute inset-0">
                    <div className="absolute inset-6 rounded-[24px] border border-white/20 bg-white/10 backdrop-blur-sm" />
                    <div className="absolute left-10 right-10 top-10 flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-white/70" />
                      <span className="h-3 w-3 rounded-full bg-white/40" />
                      <span className="h-3 w-3 rounded-full bg-white/20" />
                    </div>
                    <div className="absolute bottom-10 left-10 right-10 grid grid-cols-[1fr_0.7fr] gap-4">
                      <div className="h-28 rounded-[22px] bg-white/20" />
                      <div className="flex flex-col gap-4">
                        <div className="h-12 rounded-2xl bg-white/15" />
                        <div className="h-12 rounded-2xl bg-white/25" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-black/45 px-2.5 py-1 font-general text-[9px] font-semibold uppercase tracking-[0.13em] text-white/75 backdrop-blur sm:left-6 sm:top-6">
                  {project.shortCategory}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 pb-8 sm:p-8">
                <div className="mb-6 flex items-start justify-between gap-5">
                  <div>
                    <span className="mb-3 inline-flex items-center gap-2 font-general text-xs font-semibold uppercase tracking-[0.18em] text-[#888]">
                      <Layers3 size={15} />
                      {project.category}
                    </span>
                    <h2 className="font-clash text-[clamp(2rem,8vw,3rem)] font-semibold leading-tight tracking-normal text-[#111] text-balance sm:text-4xl">
                      {project.title}
                    </h2>
                  </div>
                  <span
                    aria-label={`Abrir ${project.title}`}
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#111] text-white transition-colors group-hover:bg-[#ff6a00]"
                  >
                    <ArrowUpRight size={20} />
                  </span>
                </div>

                <p className="line-clamp-2 font-general text-[16px] leading-relaxed text-[#555] text-pretty">{project.description}</p>

                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {project.stack.map((tag) => (
                    <StackChip key={tag} label={tag} />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
