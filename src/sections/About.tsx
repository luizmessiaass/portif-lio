"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

const services = [
  {
    id: "01.",
    title: "Web Design",
    accent: "Feito pra impressionar",
    description: "Sites bonitos que não carregam não servem pra nada. Construo com Next.js, animações fluidas via GSAP e componentes otimizados do zero. Performance medida em Lighthouse, design que fica na memória de quem acessa.",
    tags: ["React", "Next.js", "TypeScript", "GSAP", "Tailwind CSS"]
  },
  {
    id: "02.",
    title: "Desenvolvimento de Produto",
    accent: "Construído do zero",
    description: "Já entreguei sistemas em produção para clientes reais. Controle de acesso por função (RBAC), OAuth com marketplaces, automação por agentes de IA e workers Node.js rodando 24h. Sei o peso de entregar algo que outras pessoas dependem todo dia.",
    tags: ["Node.js", "PostgreSQL", "Supabase", "React Flow", "Claude AI"]
  },
  {
    id: "03.",
    title: "Marketing Digital",
    accent: "Resultado mensurável",
    description: "Marketing sem número é chute. Configuro GA4, Pixel e Google Ads corretamente, crio os criativos no Figma e acompanho o retorno em tempo real. Você sabe exatamente quanto cada campanha gerou. Sem depender do feeling de ninguém.",
    tags: ["Figma", "Branding", "SEO/SEM", "Google Ads", "Analytics"]
  }
];

export function About() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;

    const ctx = gsap.context(() => {

      // 1. Label + H2 entrance
      gsap.from(".about-label", {
        y: isMobile ? 16 : 24, opacity: 0, duration: isMobile ? 0.48 : 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ".about-header", start: "top 88%" }
      });

      // Split H2 words — each word slides up from clip
      gsap.from(".about-h2-word", {
        y: isMobile ? "70%" : "110%", opacity: 0,
        duration: isMobile ? 0.58 : 0.7, ease: "power3.out",
        stagger: isMobile ? 0.035 : 0.06,
        scrollTrigger: { trigger: ".about-header", start: "top 82%" }
      });

      // 2. Left column stagger
      gsap.from([".about-h3", ".about-body"], {
        y: isMobile ? 24 : 40, opacity: 0, duration: isMobile ? 0.58 : 0.7, ease: "power2.out", stagger: 0.14,
        scrollTrigger: { trigger: ".about-left", start: "top 80%" }
      });

      // 3. Service cards staggered entrance
      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, i) => {
        gsap.from(card, {
          y: isMobile ? 34 : 70, opacity: 0, duration: isMobile ? 0.62 : 0.9, ease: "power3.out",
          delay: i * (isMobile ? 0.06 : 0.13),
          scrollTrigger: { trigger: card, start: "top 88%" }
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Split H2 into word spans for animation
  const h2Words1 = ["Da", "ideia", "ao", "produto", "final."];
  const h2Words2 = ["Sem", "precisar", "contratar", "quatro", "pessoas", "diferentes."];

  return (
    <section id="about" className="relative w-full px-[5vw] py-32 bg-transparent" ref={containerRef}>

      <div className="about-header max-w-[1300px] mx-auto w-full mb-16 relative z-0 flex flex-col items-start px-2 sm:px-6">
        <span className="about-label text-[12px] uppercase tracking-[0.2em] font-semibold text-[#888] mb-6 block font-general">
          / Como posso te ajudar
        </span>
        <h2 className="font-clash font-semibold text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-[var(--color-dark)] tracking-[-0.02em] max-w-[800px] text-balance overflow-hidden">
          {h2Words1.map((word, i) => (
            <span key={i} className="about-h2-word inline-block mr-[0.25em]">{word}</span>
          ))}
          <span className="text-[#888]">
            {h2Words2.map((word, i) => (
              <span key={i} className="about-h2-word inline-block mr-[0.25em]">{word}</span>
            ))}
          </span>
        </h2>
      </div>

      <div className="max-w-[1300px] mx-auto w-full flex flex-col lg:flex-row gap-10 lg:gap-20 pt-10">

        <div className="about-left w-full lg:w-[35%] relative">
          <div className="lg:sticky lg:top-40 flex flex-col gap-6">
            <h3 className="about-h3 font-clash font-semibold text-3xl md:text-5xl text-[var(--color-dark)] leading-tight tracking-[-0.02em] text-balance">
              Por que trabalhar comigo?
            </h3>
            <p className="about-body font-general text-[17px] sm:text-lg text-[#666] leading-relaxed max-w-[400px] text-pretty">
              Não aprendi só em tutorial. Já construí vários sistemas reais: plataformas de gestão, integrações com marketplaces, automação com IA, dashboards analíticos e muito mais. Cada projeto novo carrega o aprendizado de tudo que veio antes.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[65%] flex flex-col gap-8 pb-[10vh]">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-cursor="hover"
              className="service-card w-full rounded-[40px] p-8 sm:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-black/5 bg-white flex flex-col justify-between overflow-hidden transition-all duration-500 min-h-[40vh] lg:sticky"
              style={{
                top: `calc(15vh + ${index * 40}px)`,
                zIndex: index + 1
              }}
            >
              <div className="flex flex-col mb-16 relative z-10 w-full">
                <span className="font-gloria text-xl sm:text-2xl text-[var(--color-accent-orange)] opacity-80 mb-2">
                  {service.accent}
                </span>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-clash font-medium text-4xl sm:text-5xl text-[var(--color-dark)] tracking-[-0.02em]">
                    {service.id}
                  </span>
                  <h3 className="font-clash font-semibold text-4xl sm:text-5xl text-[var(--color-dark)] tracking-[-0.02em] leading-tight break-words">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col relative z-10 w-full max-w-[500px]">
                <p className="font-general text-[17px] sm:text-[19px] leading-relaxed text-[#444] mb-8 text-pretty">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full border border-black/10 text-sm font-general font-medium bg-[#f9f9f9] text-[#222]"
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
