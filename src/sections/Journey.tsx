"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award,
  BrainCircuit,
  Calendar,
  Code2,
  Cpu,
  Database,
  LayoutPanelTop,
  Monitor,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";

interface Milestone {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  tech?: string[];
  icon: LucideIcon;
  impact?: string;
  type?: "job" | "cert-cluster";
  certs?: { name: string; date: string; color: string }[];
}

const milestones: Milestone[] = [
  {
    type: "job",
    title: "A Base Técnica e UX",
    subtitle: "Lince Tech",
    period: "Fev 2021 – Mar 2022",
    description: "Comecei na Lince Tech, ainda como estagiário, trabalhando com front-end, correção de bugs, ajustes de interface e suporte técnico. Foi meu primeiro contato real com software em produção, onde aprendi que detalhes importam, que experiência do usuário não é apenas uma camada visual e que sistemas precisam ser pensados para funcionar no dia a dia, com estabilidade, clareza e propósito.",
    tech: ["Front-end", "UI/UX", "Stability"],
    icon: Monitor,
  },
  {
    type: "job",
    title: "Automação e Visão Sistêmica",
    subtitle: "Bunge & BRF",
    period: "Set 2022 – Fev 2024",
    description: "Depois, passei por ambientes bem diferentes. Na Bunge e na BRF, mergulhei em automação de processos fiscais e contábeis, lidando com VBA, SAP, SQL, dados em alta volumetria, auditoria e rotinas críticas. Foi ali que comecei a desenvolver uma visão mais sistêmica: antes de automatizar ou desenvolver qualquer solução, é preciso entender o fluxo, os riscos, os usuários envolvidos e o impacto que aquilo gera na operação.",
    tech: ["VBA", "SAP", "SQL", "High Volume Data"],
    icon: Database,
  },
  {
    type: "job",
    title: "E-commerce e Integração de Sistemas",
    subtitle: "Mapfit Group",
    period: "Fev 2024 – Dez 2024",
    description: "Com o tempo, minha atuação foi se aproximando cada vez mais do digital, do e-commerce e da construção de soluções integradas. No Mapfit Group, desenvolvi e estruturei uma operação em WordPress/WooCommerce, integrando site, marketplaces como Mercado Livre, Shopee e Magalu, além do Bling ERP. Essa experiência reforçou algo que se tornou central na minha forma de trabalhar: tecnologia não pode viver isolada. Ela precisa conectar vendas, estoque, faturamento, pedidos, dados e tomada de decisão.",
    tech: ["WordPress", "WooCommerce", "Bling ERP", "Marketplaces"],
    icon: ShoppingCart,
  },
  {
    type: "job",
    title: "Liderança e Escala Operacional",
    subtitle: "Studio416x & Revenda de Calçados",
    period: "Jan 2024 – Jun 2025",
    description: "Essa visão ganhou ainda mais força em experiências de liderança operacional. No Studio416x, conduzi operações de e-commerce com mais de 26 marcas ativas, olhando para margem, previsibilidade, escala e performance. Na Revenda de Calçados, liderei uma transformação digital do zero, reestruturando modelo comercial, implementando dropshipping, consolidando presença em marketplaces e conectando estoque, vendas e faturamento em uma operação integrada — chegando a entregar crescimento de até R$ 100 mil mensais em faturamento.",
    impact: "Crescimento de R$ 100 mil mensais em faturamento.",
    tech: ["Operations", "Performance", "Scale", "Dropshipping"],
    icon: TrendingUp,
  },
  {
    type: "cert-cluster",
    title: "Especialização em IA & Cloud Foundation",
    subtitle: "Google, Oracle & Couchbase",
    period: "Set – Nov 2025",
    icon: BrainCircuit,
    certs: [
      { name: "Generative AI Leader Certification", date: "Set/25", color: "#4285F4" },
      { name: "OCI 2025 AI Foundations Associate", date: "Out/25", color: "#F80000" },
      { name: "Couchbase Associate Architect", date: "Nov/25", color: "#ED1F24" },
    ],
  },
  {
    type: "job",
    title: "Arquitetura Full Stack & Liderança Técnica",
    subtitle: "Avant I.A (Grupo Next Ecommerce)",
    period: "Set 2025 – Maio 2026",
    description: "Uma das experiências mais marcantes veio no Grupo Next Ecommerce, atuando na Avant I.A. Foi ali que consolidei minha atuação como Desenvolvedor Full Stack com mentalidade de liderança técnica, trabalhando com Next.js, React, TypeScript, Supabase, PostgreSQL, integrações com APIs do Mercado Livre e Shopee, infraestrutura em VPS e soluções com IA aplicada usando Claude e OpenAI. Mais do que apenas desenvolver features, passei a atuar em decisões de arquitetura, modelagem de dados, integrações críticas, deploy, performance, segurança e evolução de produto.",
    tech: ["Next.js", "TypeScript", "Supabase", "OpenAI/Claude"],
    icon: Cpu,
  },
  {
    type: "job",
    title: "Elevater: De Ferramenta a Produto",
    subtitle: "Avant I.A",
    period: "Case de Sucesso",
    description: "Entre os projetos desse período, o que mais me marcou foi o Elevater: uma plataforma construída do zero para substituir uma ferramenta externa que custava cerca de R$ 30 mil por mês. O projeto saiu do papel, foi para produção e depois evoluiu para um produto comercializável. Foi uma experiência que exigiu não só execução técnica, mas também visão de produto, priorização, tomada de decisão, entendimento de negócio e responsabilidade sobre a qualidade da solução entregue.",
    impact: "Economia direta de R$ 30 mil/mês.",
    tech: ["Product Architecture", "Cost Optimization", "VPS"],
    icon: Zap,
  },
  {
    type: "cert-cluster",
    title: "Microsoft Cloud & Data Expert Path",
    subtitle: "Microsoft Certified",
    period: "Jan – Abr 2026",
    icon: Award,
    certs: [
      { name: "Fabric Data Engineer Associate", date: "Abr/26", color: "#00A4EF" },
      { name: "Azure AI Engineer Associate", date: "Mar/26", color: "#00A4EF" },
      { name: "Azure Data Fundamentals", date: "Fev/26", color: "#00A4EF" },
      { name: "Azure AI Fundamentals", date: "Jan/26", color: "#00A4EF" },
      { name: "Azure Fundamentals", date: "Jan/26", color: "#00A4EF" },
    ],
  },
];

function LinceLogo() {
  return (
    <Image
      src="/brands/lince-logo-white-solid.png"
      alt="Lince Tech"
      width={900}
      height={394}
      className="h-auto w-32 sm:w-36"
      sizes="(max-width: 640px) 128px, 144px"
      unoptimized
    />
  );
}

function TechChip({ label }: { label: string }) {
  const Icon = label === "Front-end" ? Code2 : label === "UI/UX" ? LayoutPanelTop : ShieldCheck;

  return (
    <span className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-[#fff1f1] px-2.5 font-general text-[9px] font-bold uppercase tracking-[0.06em] text-[#b60d18] shadow-[inset_0_0_0_1px_rgba(182,13,24,.06)] sm:min-h-10 sm:gap-2 sm:px-4 sm:text-xs">
      <Icon size={14} strokeWidth={2.2} />
      {label}
    </span>
  );
}

function splitPeriod(period: string) {
  return period.split(/\s+[–-]\s+/);
}

function LinceFeaturedCard({ item }: { item: Milestone }) {
  const [start, end] = splitPeriod(item.period);

  return (
    <div className="journey-card relative min-w-0 max-w-full overflow-hidden rounded-[24px] border border-black/5 bg-white p-0 shadow-[0_24px_70px_rgba(0,0,0,0.08)] sm:rounded-[30px]">
      <div className="grid grid-cols-[95px_1fr] sm:min-h-[640px] sm:grid-cols-[220px_1fr]">
        <aside className="relative flex min-w-0 flex-col justify-between overflow-hidden bg-[#d90416] px-3 py-6 text-white sm:px-7 sm:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,.12),transparent_34%),radial-gradient(circle_at_38%_18%,rgba(255,255,255,.14),transparent_22%)]" />
          <div className="pointer-events-none absolute -right-28 top-40 h-72 w-72 rounded-full border border-white/14" />
          <div className="pointer-events-none absolute -right-16 bottom-28 h-40 w-64 rotate-12 rounded-[50%] border border-white/12" />
          <div className="pointer-events-none absolute -left-16 bottom-16 h-28 w-72 -rotate-6 rounded-[50%] border border-white/10" />

          <div className="relative mt-10 scale-90 sm:mt-20 sm:scale-100">
            <LinceLogo />
          </div>

          <div className="relative font-general text-[11px] font-bold uppercase leading-relaxed tracking-[0.1em] sm:text-base">
            <span className="block">{start}</span>
            <span className="my-1 block">-</span>
            <span className="block">{end}</span>
          </div>
        </aside>

        <div className="min-w-0 px-4 py-6 sm:px-9 sm:py-12 lg:px-11">
          <p className="font-general text-[11px] font-bold uppercase tracking-[0.14em] text-[#ff4d00] sm:text-sm">
            {item.subtitle}
          </p>
          <h3 className="mt-4 max-w-[420px] break-words font-clash text-[clamp(1.25rem,6vw,2.55rem)] font-semibold leading-[1.1] tracking-normal text-[#111] text-balance sm:mt-7">
            {item.title}
          </h3>
          <div className="mt-5 h-1 w-16 rounded-full bg-[#ff4d00]" />

          <p className="mt-5 font-general text-[12px] leading-[1.7] text-[#242424] text-pretty sm:mt-8 sm:text-[16px] sm:leading-[1.9]">
            {item.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-2 sm:gap-3">
            {item.tech?.map((tag) => (
              <TechChip key={tag} label={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BungeBrfFeaturedCard({ item }: { item: Milestone }) {
  const [start, end] = splitPeriod(item.period);

  return (
    <div className="journey-card relative min-w-0 max-w-full overflow-hidden rounded-[24px] border border-black/5 bg-white p-0 shadow-[0_24px_70px_rgba(0,0,0,0.08)] sm:rounded-[30px]">
      <div className="grid grid-cols-[95px_1fr] sm:min-h-[640px] sm:grid-cols-[220px_1fr]">
        <aside className="relative flex min-w-0 flex-col justify-between overflow-hidden bg-[linear-gradient(180deg,#005dcc_0%,#263aa5_42%,#9d2378_68%,#ff4d00_100%)] px-3 py-6 text-white sm:px-7 sm:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,.14),transparent_24%),linear-gradient(140deg,rgba(255,255,255,.12),transparent_36%)]" />
          <div className="pointer-events-none absolute -right-28 top-40 h-72 w-72 rounded-full border border-white/18" />
          <div className="pointer-events-none absolute -right-16 bottom-28 h-40 w-64 rotate-12 rounded-[50%] border border-white/14" />
          <div className="pointer-events-none absolute -left-16 bottom-16 h-28 w-72 -rotate-6 rounded-[50%] border border-white/12" />

          <div className="relative mt-8 flex flex-col items-center gap-6 sm:mt-16 sm:gap-8">
            <Image
              src="/brands/bunge-logo-white.png"
              alt="Bunge"
              width={720}
              height={214}
              className="h-auto w-28 sm:w-36"
              sizes="(max-width: 640px) 112px, 144px"
              unoptimized
            />
            <span className="h-1 w-12 rounded-full bg-white/90 sm:w-16" />
            <Image
              src="/brands/brf-logo-color-white.png"
              alt="BRF"
              width={520}
              height={222}
              className="h-auto w-24 sm:w-32"
              sizes="(max-width: 640px) 96px, 128px"
              unoptimized
            />
          </div>

          <div className="relative font-general text-[10px] font-bold uppercase leading-relaxed tracking-[0.1em] sm:text-base">
            <span className="block">{start}</span>
            <span className="my-1 block">-</span>
            <span className="block">{end}</span>
          </div>
        </aside>

        <div className="min-w-0 px-4 py-6 sm:px-9 sm:py-12 lg:px-11">
          <p className="font-general text-[11px] font-bold uppercase tracking-[0.14em] text-[#0c63c7] sm:text-sm">
            {item.subtitle}
          </p>
          <h3 className="mt-4 max-w-[420px] break-words font-clash text-[clamp(1.25rem,6vw,2.55rem)] font-semibold leading-[1.1] tracking-normal text-[#111] text-balance sm:mt-7">
            {item.title}
          </h3>
          <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#0c63c7] to-[#ff6a00]" />

          <p className="mt-5 font-general text-[12px] leading-[1.7] text-[#242424] text-pretty sm:mt-8 sm:text-[16px] sm:leading-[1.9]">
            {item.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-2 sm:gap-3">
            {item.tech?.map((tag) => (
              <span key={tag} className="inline-flex min-h-9 items-center rounded-full bg-[#f3f7ff] px-3 font-general text-[9px] font-bold uppercase tracking-[0.06em] text-[#0c63c7] shadow-[inset_0_0_0_1px_rgba(12,99,199,.08)] sm:min-h-10 sm:px-4 sm:text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MapfitFeaturedCard({ item }: { item: Milestone }) {
  const [start, end] = splitPeriod(item.period);

  return (
    <div className="journey-card relative min-w-0 max-w-full overflow-hidden rounded-[24px] border border-black/5 bg-white p-0 shadow-[0_24px_70px_rgba(0,0,0,0.08)] sm:rounded-[30px]">
      <div className="grid grid-cols-[95px_1fr] sm:min-h-[640px] sm:grid-cols-[220px_1fr]">
        <aside className="relative flex min-w-0 flex-col justify-between overflow-hidden bg-[#171717] px-3 py-6 text-white sm:px-7 sm:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_42%_92%,rgba(209,155,45,.42),transparent_30%),linear-gradient(180deg,rgba(255,255,255,.04),transparent_32%)]" />
          <div className="pointer-events-none absolute -right-28 top-44 h-72 w-72 rounded-full border border-[#d7a23a]/55" />
          <div className="pointer-events-none absolute -right-16 bottom-28 h-40 w-64 rotate-12 rounded-[50%] border border-[#d7a23a]/45" />
          <div className="pointer-events-none absolute -left-16 bottom-16 h-28 w-72 -rotate-6 rounded-[50%] border border-[#d7a23a]/40" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_45%_100%,rgba(214,157,43,.34),transparent_62%)]" />

          <div className="relative mt-12 flex justify-center sm:mt-20">
            <Image
              src="/brands/mapfit-logo-color.png"
              alt="Mapfit Group"
              width={900}
              height={325}
              className="h-auto w-28 sm:w-36"
              sizes="(max-width: 640px) 112px, 144px"
              unoptimized
            />
          </div>

          <div className="relative font-general text-[10px] font-bold uppercase leading-relaxed tracking-[0.1em] sm:text-base">
            <span className="block text-[#d7a23a]">{start}</span>
            <span className="my-1 block text-[#d7a23a]">-</span>
            <span className="block text-white">{end}</span>
          </div>
        </aside>

        <div className="min-w-0 px-4 py-6 sm:px-9 sm:py-12 lg:px-11">
          <p className="font-general text-[11px] font-bold uppercase tracking-[0.14em] text-[#b88319] sm:text-sm">
            {item.subtitle}
          </p>
          <h3 className="mt-4 max-w-[420px] break-words font-clash text-[clamp(1.25rem,6vw,2.55rem)] font-semibold leading-[1.1] tracking-normal text-[#111] text-balance sm:mt-7">
            {item.title}
          </h3>
          <div className="mt-5 h-1 w-16 rounded-full bg-[#d7a23a]" />

          <p className="mt-5 font-general text-[12px] leading-[1.7] text-[#242424] text-pretty sm:mt-8 sm:text-[16px] sm:leading-[1.9]">
            {item.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-2 sm:gap-3">
            {item.tech?.map((tag) => (
              <span key={tag} className="inline-flex min-h-9 items-center rounded-full bg-[#fff7e8] px-3 font-general text-[9px] font-bold uppercase tracking-[0.06em] text-[#a56f10] shadow-[inset_0_0_0_1px_rgba(165,111,16,.1)] sm:min-h-10 sm:px-4 sm:text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const paintScene = () => {
      const layers = gsap.utils.toArray<HTMLElement>(".journey-bg-scene");
      const sceneCards = gsap.utils.toArray<HTMLElement>("[data-journey-scene]");

      if (!sectionRef.current || layers.length === 0 || sceneCards.length === 0) return;

      const viewportCenter = window.innerHeight * 0.5;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const firstCard = sceneCards[0].getBoundingClientRect();
      const linceCard = sceneCards.find((card) => card.dataset.journeyScene === "1")?.getBoundingClientRect();
      const bungeCard = sceneCards.find((card) => card.dataset.journeyScene === "2")?.getBoundingClientRect();
      const mapfitCard = sceneCards.find((card) => card.dataset.journeyScene === "3")?.getBoundingClientRect();
      const nextCard = sceneCards.find((card) => card.dataset.journeyScene === "0")?.getBoundingClientRect();

      if (!linceCard || !bungeCard || !mapfitCard) return;

      const linceCenter = linceCard.top + linceCard.height * 0.5;
      const bungeCenter = bungeCard.top + bungeCard.height * 0.5;
      const mapfitCenter = mapfitCard.top + mapfitCard.height * 0.5;
      const introCenter = firstCard.top - window.innerHeight * 0.8;
      const outroCenter = nextCard ? nextCard.top + nextCard.height * 0.6 : sectionRect.bottom;

      const progressBetween = (from: number, to: number) => {
        const val = (viewportCenter - from) / (to - from);
        return Math.max(0, Math.min(1, val * val * (3 - 2 * val)));
      };

      let weights = [1, 0, 0, 0];

      if (viewportCenter < linceCenter) {
        const p = progressBetween(introCenter, linceCenter);
        weights = [1 - p, p, 0, 0];
      } else if (viewportCenter < bungeCenter) {
        const p = progressBetween(linceCenter, bungeCenter);
        weights = [0, 1 - p, p, 0];
      } else if (viewportCenter < mapfitCenter) {
        const p = progressBetween(bungeCenter, mapfitCenter);
        weights = [0, 0, 1 - p, p];
      } else {
        const p = progressBetween(mapfitCenter, outroCenter);
        weights = [p, 0, 0, 1 - p];
      }

      layers.forEach((layer, index) => {
        layer.style.opacity = `${weights[index] ?? 0}`;
        layer.style.transition = "opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
      });
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl.to(lineRef.current, { height: "100%", ease: "none" }, 0);
    tl.to(orbRef.current, { top: "100%", ease: "none" }, 0);

    const cards = gsap.utils.toArray<HTMLElement>(".journey-card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: paintScene,
      onRefresh: paintScene,
    });

    let rafId = 0;
    const renderLoop = () => {
      paintScene();
      rafId = requestAnimationFrame(renderLoop);
    };

    rafId = requestAnimationFrame(renderLoop);
    window.addEventListener("resize", paintScene);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", paintScene);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="journey" className="relative overflow-hidden bg-white py-16 selection:bg-[#ff6a00] selection:text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="journey-bg-scene absolute inset-0 bg-white opacity-100" />
          
          {/* Lince Scene - Auras de Vermelho */}
          <div className="journey-bg-scene absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_20%_20%,rgba(241,50,63,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(201,0,21,0.1),transparent_50%),white]" />
          
          {/* Bunge Scene - Auras de Azul/Roxo/Laranja */}
          <div className="journey-bg-scene absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_30%_30%,rgba(8,104,216,0.12),transparent_45%),radial-gradient(circle_at_70%_70%,rgba(255,90,18,0.1),transparent_40%),white]" />
          
          {/* Mapfit Scene - Auras de Ouro/Escuro */}
          <div className="journey-bg-scene absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_50%_50%,rgba(215,162,58,0.08),transparent_60%),radial-gradient(circle_at_10%_90%,rgba(26,26,26,0.05),transparent_40%),white]" />
          
          <div className="absolute inset-0 bg-[radial-gradient(rgba(17,17,17,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
        </div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="mb-16 sm:mb-32">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[1px] w-8 bg-black/20 sm:w-12" />
            <span className="font-general text-[10px] font-bold uppercase tracking-[0.2em] text-[#888] sm:text-[12px]">
              / Trajetória Profissional
            </span>
          </div>
          <h2 className="font-clash text-[clamp(2rem,7vw,5rem)] font-semibold leading-tight tracking-tight text-[#111] text-pretty">
            A Trajetória <span className="text-[#ff6a00] italic">Escrita em Código.</span>
          </h2>
          <p className="mt-6 max-w-[750px] font-general text-base leading-relaxed text-[#555] text-pretty sm:text-lg">
            Me chamo Luiz Henrique, tenho 24 anos, sou de Santa Catarina, e minha trajetória profissional nunca foi exatamente linear — e foi justamente essa combinação de contextos que moldou a forma como penso tecnologia hoje.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Main Line Path */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-black/5 sm:left-1/2 sm:-translate-x-1/2">
            <div ref={lineRef} className="h-0 w-full origin-top bg-[#ff6a00]" />
            <div ref={orbRef} className="absolute -left-[4px] top-0 z-20 h-3 w-3 rounded-full border-2 border-[#ff6a00] bg-white shadow-[0_0_8px_rgba(255,106,0,0.4)]" />
          </div>

          {/* Milestone List */}
          <div className="space-y-16 sm:space-y-32">
            {milestones.map((item, i) => (
              <div
                key={i}
                className={`relative flex flex-col items-start sm:flex-row ${
                  i % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {i <= 2 && (
                  <div
                    className={`pointer-events-none absolute left-1/2 top-1/2 z-0 h-[calc(100%+130vh)] w-screen -translate-x-1/2 -translate-y-1/2 blur-0 ${
                      i === 0
                        ? "bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,.32),transparent_24%),radial-gradient(circle_at_86%_26%,rgba(255,180,180,.18),transparent_30%),linear-gradient(135deg,#fff4f4_0%,#f1323f_42%,#c90015_100%)]"
                        : i === 1
                          ? "bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,.3),transparent_24%),radial-gradient(circle_at_86%_78%,rgba(255,106,0,.28),transparent_34%),linear-gradient(135deg,#eef6ff_0%,#0868d8_34%,#7e2aa1_68%,#ff5a12_100%)]"
                          : "bg-[radial-gradient(circle_at_78%_22%,rgba(215,162,58,.26),transparent_32%),radial-gradient(circle_at_18%_86%,rgba(215,162,58,.34),transparent_34%),linear-gradient(135deg,#fff8eb_0%,#4b3919_30%,#1a1a1a_62%,#090909_100%)]"
                    } opacity-70 [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,.25)_12%,black_34%,black_66%,rgba(0,0,0,.25)_88%,transparent_100%)]`}
                  />
                )}

                {/* Connector Marker */}
                <div className="absolute left-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#ff6a00] bg-white sm:left-1/2" />

                {/* Content Card Container */}
                <div className="relative z-10 w-full pl-10 sm:w-[46%] sm:pl-0">
                  {i === 0 ? (
                    <div data-journey-scene="1">
                      <LinceFeaturedCard item={item} />
                    </div>
                  ) : i === 1 ? (
                    <div data-journey-scene="2">
                      <BungeBrfFeaturedCard item={item} />
                    </div>
                  ) : i === 2 ? (
                    <div data-journey-scene="3">
                      <MapfitFeaturedCard item={item} />
                    </div>
                  ) : (
                    <div data-journey-scene="0" className={`journey-card relative rounded-[20px] border ${
                      item.type === "cert-cluster" ? "border-[#ff6a00]/10 bg-[#ff6a00]/5" : "border-black/5 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.02)]"
                    } p-4 transition-all hover:border-[#ff6a00]/20 sm:rounded-[32px] sm:p-10`}>
                      {/* Card Header */}
                      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-xl sm:h-12 sm:w-12 sm:rounded-2xl ${
                            item.type === "cert-cluster" ? "bg-[#ff6a00]/20 text-[#ff6a00]" : "bg-[#fafafa] text-[#111]"
                          }`}>
                            <item.icon size={20} className="sm:h-6 sm:w-6" strokeWidth={1.5} />
                          </div>
                          <div>
                            <span className="block font-general text-[10px] font-bold uppercase tracking-widest text-[#ff6a00] sm:text-xs">
                              {item.subtitle}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 font-general text-[10px] font-bold uppercase tracking-widest text-[#aaa]">
                          <Calendar size={12} />
                          {item.period}
                        </div>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="mb-4 font-clash text-xl font-semibold leading-tight text-[#111] sm:text-3xl">
                        {item.title}
                      </h3>

                      {/* Milestone Description or Certs */}
                      {item.type === "job" ? (
                        <>
                          <p className="font-general text-sm leading-relaxed text-[#666] text-pretty sm:text-base">
                            {item.description}
                          </p>

                          {item.impact && (
                            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#ff6a00]/10 bg-[#ff6a00]/5 px-4 py-2">
                              <TrendingUp size={14} className="text-[#ff6a00]" />
                              <span className="font-general text-[11px] font-bold uppercase tracking-tight text-[#ff6a00] sm:text-xs">
                                {item.impact}
                              </span>
                            </div>
                          )}

                          <div className="mt-6 flex flex-wrap gap-1.5">
                            {item.tech?.map((t) => (
                              <span key={t} className="rounded-full bg-[#f5f5f5] px-2.5 py-1 font-general text-[9px] font-bold uppercase tracking-tight text-[#666]">
                                {t}
                              </span>
                            ))}
                          </div>
                        </>
                      ) : (
                        <div className="grid grid-cols-1 gap-2.5">
                          {item.certs?.map((cert, idx) => (
                            <div key={idx} className="flex items-center justify-between rounded-xl border border-black/5 bg-white/50 p-3 transition-colors hover:bg-white sm:p-4">
                              <div className="flex items-center gap-3 sm:gap-4">
                                <div className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: cert.color }} />
                                <span className="font-general text-[12px] font-medium leading-tight text-[#444] sm:text-sm">{cert.name}</span>
                              </div>
                              <span className="shrink-0 font-general text-[9px] font-bold text-[#aaa]">{cert.date}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ending Vision Section */}
        <div className="mt-32 pb-10 sm:mt-48">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <div className="mb-10 flex justify-center">
              <div className="h-20 w-[2px] bg-gradient-to-b from-[#ff6a00] to-transparent" />
            </div>

            <h3 className="font-clash text-3xl font-semibold text-[#111] sm:text-5xl">
              Visão de <span className="text-[#ff6a00]">Tech Lead</span>
            </h3>

            <div className="mt-8 font-general text-base leading-relaxed text-[#555] text-pretty sm:text-lg">
              <p>
                Hoje, me vejo como um profissional em transição natural para uma atuação de <span className="font-bold text-[#111]">Tech Lead</span>: alguém que continua próximo ao código, mas que também pensa em arquitetura, produto, operação, pessoas e escala.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
