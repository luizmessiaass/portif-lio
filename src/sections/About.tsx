"use client";

import { useRef, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CloudUpload,
  Code2,
  Database,
  LayoutDashboard,
  Monitor,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import { capabilities, profile } from "@/lib/profile";

const includeIcons = [Monitor, Code2, Database, CloudUpload];

const tagIcons: Partial<Record<string, LucideIcon>> = {
  "Next.js": Code2,
  React: Sparkles,
  "Node.js": Workflow,
  PostgreSQL: Database,
  "Deploy contínuo": Rocket,
  Deploy: Rocket,
  "Multi-tenant": LayoutDashboard,
  RBAC: ShieldCheck,
  Dashboards: BarChart3,
  Relatórios: BarChart3,
  APIs: Code2,
  Webhooks: Network,
  Workers: Workflow,
  Sincronização: CloudUpload,
  OpenAI: Sparkles,
  Claude: BrainCircuit,
  Agentes: Bot,
  Copilotos: BrainCircuit,
};

function ServiceTag({ label }: { label: string }) {
  const Icon = tagIcons[label] ?? Code2;

  return (
    <span className="inline-flex min-h-8 items-center gap-2 rounded-full border border-[#ff6a00]/18 bg-white/82 px-3 py-1 font-general text-[11px] font-semibold text-[#181818] shadow-[0_10px_22px_rgba(255,106,0,.06)] sm:min-h-9 sm:px-3.5 sm:text-xs">
      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white shadow-[inset_0_0_0_1px_rgba(255,106,0,.16)] sm:h-6 sm:w-6">
        <Icon size={14} strokeWidth={2.1} className="text-[#ff6a00] sm:h-4 sm:w-4" />
      </span>
      <span className="whitespace-nowrap">{label}</span>
    </span>
  );
}

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
    <section id="about" className="relative w-full overflow-x-clip rounded-[32px] bg-[#ededed] px-[clamp(1rem,5vw,5rem)] py-20 sm:rounded-[60px] sm:py-32" ref={containerRef}>
      <div className="about-header relative z-0 mx-auto mb-10 sm:mb-16 flex w-full max-w-[1300px] flex-col items-start px-2 sm:px-6">
        <span className="about-label mb-6 block font-general text-[12px] font-semibold uppercase tracking-[0.2em] text-[#888]">
          / Como posso te ajudar
        </span>
        <h2 className="max-w-[920px] overflow-hidden font-clash text-[clamp(2.55rem,11vw,4rem)] font-semibold leading-[1.08] tracking-normal text-[var(--color-dark)] text-balance sm:text-6xl lg:text-7xl">
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
            <h3 className="about-h3 font-clash text-[clamp(2rem,8vw,3rem)] font-semibold leading-tight tracking-normal text-[var(--color-dark)] text-balance md:text-5xl">
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

        <div className="-mx-[5vw] flex w-auto max-w-[100vw] snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-[5vw] pb-28 lg:mx-0 lg:w-[65%] lg:max-w-none lg:flex-col lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-[10vh] hide-scrollbar">
          {capabilities.map((service, index) => (
            <div
              key={service.id}
              data-cursor="hover"
              className="service-card group relative flex min-h-[390px] w-[84vw] shrink-0 snap-center flex-col overflow-hidden rounded-[28px] border border-white/90 bg-[#fffefd] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 sm:w-[60vw] sm:rounded-[34px] sm:p-8 lg:sticky lg:w-full lg:min-h-[38vh] lg:p-9 xl:p-10"
              style={{
                top: `calc(15vh + ${index * 40}px)`,
                zIndex: index + 1,
              }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_7%,rgba(255,106,0,.16),transparent_24%),linear-gradient(120deg,rgba(255,255,255,.94)_0%,rgba(255,250,246,.86)_58%,rgba(255,238,225,.58)_100%)]" />
              <div className="pointer-events-none absolute right-7 top-24 hidden h-28 w-24 bg-[radial-gradient(rgba(255,106,0,.18)_1px,transparent_1px)] opacity-55 [background-size:10px_10px] sm:block" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 bg-[radial-gradient(rgba(255,106,0,.18)_1px,transparent_1px)] opacity-55 [background-size:10px_10px]" />
              <div className="pointer-events-none absolute -bottom-5 right-2 font-clash text-[7rem] font-semibold leading-none tracking-normal text-[#ff6a00]/[0.065] sm:text-[8.5rem] xl:text-[9.5rem]">
                {service.id.replace(".", "")}
              </div>

              <div className="relative z-10 flex items-center justify-between gap-5">
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[12px] border-2 border-[#ff6a00] bg-white/70 text-[#ff6a00] sm:h-11 sm:w-11">
                    <Code2 size={22} strokeWidth={2.2} />
                  </span>
                  <span className="min-w-0 break-words font-gloria text-[clamp(1.15rem,4.7vw,1.65rem)] leading-tight text-[#ff6a00] sm:text-[1.75rem]">
                    {service.accent}
                  </span>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#ff6a00]/15 bg-[#fff3ea] text-[#ff6a00] shadow-[0_14px_30px_rgba(255,106,0,.12)] sm:h-12 sm:w-12">
                  <ArrowUpRight size={22} strokeWidth={2} />
                </span>
              </div>

              <div className="relative z-10 mt-4 h-px w-[76%] bg-[#ff6a00]/45 sm:mt-5" />

              <div className="relative z-10 mt-5 flex items-center gap-4 sm:mt-6">
                <span className="block shrink-0 font-clash text-[clamp(3.15rem,13vw,5rem)] font-semibold leading-[.78] tracking-normal text-[#ff6a00] drop-shadow-[0_12px_18px_rgba(255,106,0,.12)] lg:text-[5.3rem]">
                  {service.id}
                </span>
                <span className="inline-flex rounded-full bg-[#fff7f1]/90 px-3 py-1.5 font-general text-[9px] font-bold uppercase tracking-[0.14em] text-[#ff6a00] shadow-[inset_0_0_0_1px_rgba(255,106,0,.08),0_10px_24px_rgba(255,106,0,.07)] sm:px-4 sm:text-[10px]">
                  {service.badge}
                </span>
              </div>

              <div className="relative z-10 mt-5 max-w-[640px] sm:mt-6">
                <h3 className="break-words font-clash text-[clamp(2.05rem,8.7vw,3.35rem)] font-semibold leading-[.98] tracking-normal text-[#050505] text-balance lg:text-[3.25rem] xl:text-[3.7rem]">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-[560px] font-general text-[clamp(.88rem,3.6vw,1rem)] leading-[1.55] text-[#252525] text-pretty sm:text-[1.05rem]">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 mt-4 h-px w-[58%] bg-[#ff6a00]/16 sm:mt-5" />

              <div className="relative z-10 mt-4 max-w-[620px] sm:mt-5">
                <span className="font-general text-[10px] font-bold uppercase tracking-[0.26em] text-[#ff6a00]">
                  Inclui:
                </span>
                <div className="mt-3 grid gap-x-4 gap-y-2 sm:grid-cols-2">
                  {service.includes.map((item, itemIndex) => {
                    const IncludeIcon = includeIcons[itemIndex] ?? Code2;

                    return (
                      <div key={item} className="flex items-center gap-2.5 font-general text-[11px] leading-snug text-[#1f1f1f] sm:text-[12px]">
                        <IncludeIcon size={17} strokeWidth={2.1} className="shrink-0 text-[#ff6a00]" />
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-5">
                  {service.tags.map((tag) => (
                    <ServiceTag key={tag} label={tag} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
