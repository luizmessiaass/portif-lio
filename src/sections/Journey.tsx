"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import { StackChip } from "@/components/StackChip";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award,
  BrainCircuit,
  Calendar,
  Cpu,
  Database,
  Monitor,
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
    title: "Front-End Engineer & UX Foundation",
    subtitle: "Lince Tech",
    period: "Fev 2021 – Mar 2022",
    description: "Na Lince Tech, tive meu primeiro contato real com software em produção. Atuei no desenvolvimento e manutenção de interfaces front-end, correção de bugs no ERP Sienge, e ajustes de componentes de UI com foco em estabilidade e consistência visual. Foi ali que entendi que código que funciona localmente não é o mesmo que código que funciona para o usuário, e que cada detalhe de interface tem impacto direto na experiência real de quem usa o sistema.",
    tech: ["HTML/CSS", "JavaScript", "UI/UX", "Sienge ERP", "Bug Fixing", "Produção"],
    icon: Monitor,
  },
  {
    type: "job",
    title: "Automação de Processos & Engenharia de Dados",
    subtitle: "Bunge & BRF",
    period: "Set 2022 – Fev 2024",
    description: "Na Bunge e na BRF, desenvolvi automações para processos fiscais e contábeis críticos, trabalhando com SQL em alta volumetria, scripts VBA, Power Automate e integração com SAP. Construí dashboards e pipelines de dados no Power BI para suporte à tomada de decisão em operações de grande escala. Operar em ambientes enterprise onde um erro em produção tem impacto financeiro direto me formou com uma mentalidade que carrego até hoje: antes de escrever qualquer linha de código, é preciso entender o fluxo completo, os riscos envolvidos e o impacto real na operação.",
    tech: ["SQL", "VBA", "Power BI", "Power Automate", "SAP", "Alta Volumetria", "Ambiente Enterprise"],
    icon: Database,
  },
  {
    type: "job",
    title: "Full Stack Developer\nE-commerce & Integrações",
    subtitle: "Mapfit Group",
    period: "Fev 2024 – Dez 2024",
    description: "Na Mapfit Group, desenvolvi e estruturei uma operação completa de e-commerce sobre WordPress/WooCommerce, integrando APIs de marketplaces como Mercado Livre, Shopee e Magalu, e conectando toda a operação ao ERP Bling. Implementei fluxos que unificavam estoque, pedidos, faturamento e dados em tempo real, eliminando processos manuais e tornando a operação escalável. Foi onde consolidei minha visão de que integração bem feita é tão crítica quanto o produto em si.",
    tech: ["WordPress", "WooCommerce", "REST APIs", "Bling ERP", "Mercado Livre API", "Shopee API", "Magalu"],
    icon: ShoppingCart,
  },
  {
    type: "job",
    title: "Tech Lead & Co-founder\nE-commerce & Automação de Operações",
    subtitle: "Studio416x & Revenda de Calçados",
    period: "Jan 2024 – Jun 2025",
    description: "Co-fundei a Studio416x, onde liderei tecnicamente uma operação de e-commerce com mais de 26 marcas ativas, tomando decisões de arquitetura com foco em performance, escalabilidade e previsibilidade. A Revenda de Calçados surgiu como cliente da Studio416x e se tornou um dos projetos mais completos que conduzi: uma transformação digital do zero, implementando integração com marketplaces, estruturando o fluxo de dropshipping e conectando estoque, vendas e faturamento em uma operação unificada, chegando a R$ 100 mil mensais em faturamento.",
    impact: "Crescimento de R$ 100 mil mensais em faturamento.",
    tech: ["Co-founder", "Tech Lead", "E-commerce", "Integrações", "Dropshipping", "Automação", "Marketplaces", "Escala"],
    icon: TrendingUp,
  },
  {
    type: "job",
    title: "Analista de Sistemas & Dev",
    subtitle: "Colcci / AMC Têxtil",
    period: "Jan 2024 – Jun 2025",
    description: "Em paralelo à Studio416x, atuei como Analista de Sistemas na AMC Têxtil, empresa por trás da marca Colcci. Desenvolvi e otimizei queries e procedures no SSMS, criei data warehouses para dashboards em QlikView e Power BI, e participei ativamente da migração do ERP Consistem. Atuei no desenvolvimento de aplicações mobile para gestão de facções de costura e monitoramento de rotas logísticas, além de contribuir no desenvolvimento e integração do software PLM, conectando todo o ciclo de vida do produto, do desenvolvimento inicial ao setor comercial, com o ERP.",
    tech: ["SQL Server", "SSMS", "Power BI", "QlikView", "ERP Consistem", "PLM", "App Mobile", "Data Warehouse"],
    icon: Database,
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
    title: "Tech Lead & Full Stack Engineer",
    subtitle: "Avant I.A (Grupo Next Ecommerce)",
    period: "Set 2025 – Maio 2026",
    description: "Na Avant I.A., assumi o papel mais completo que já tive: liderei dois squads de desenvolvimento enquanto continuava na linha de frente como engenheiro. Eram decisões de arquitetura de manhã e pull requests à tarde. Desenvolvemos sistemas full stack para clientes externos, produtos reais, em produção, com usuários reais. Em paralelo, mentorava líderes de indústria na implementação de IA e automações dentro das suas empresas, traduzindo tecnologia em decisão estratégica. Trabalhei com Next.js, React, TypeScript, Supabase e PostgreSQL em sistemas multi-tenant com RBAC, workers de sincronização, integrações com APIs de marketplaces e IA aplicada via Claude. Foi aqui que entendi na prática o que separa um dev sênior de um tech lead: não é só escrever código melhor, é garantir que o time inteiro entregue código bom, e que o cliente saiba o que fazer com ele.",
    tech: ["Tech Lead", "Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Claude AI", "Workers", "Multi-tenant", "RBAC", "Mentoria", "IA Aplicada"],
    icon: Cpu,
  },
  {
    type: "job",
    title: "Elevater: De Ferramenta a Produto",
    subtitle: "Avant I.A",
    period: "Case de Sucesso",
    description: "Usávamos o Adman, uma ferramenta externa que custava cerca de R$ 30 mil por mês. A partir dessa dor, construí o Elevater: uma plataforma própria que impulsiona a operação em marketplaces. Do zero a um produto robusto, o Elevater conecta, automatiza e otimiza a gestão em Shopee, TikTok Shop, Mercado Livre e Amazon. Mais que tecnologia, o projeto exigiu visão de produto, priorização, integração e performance para gerar resultados reais e sustentáveis para o negócio.",
    impact: "Economia direta de R$ 30 mil/mês.",
    tech: ["Marketplaces", "Integração", "Performance", "Automação", "Crescimento", "Escalabilidade"],
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

const featuredTitleClassName =
  "mt-3 max-w-full whitespace-pre-line break-words font-clash text-[clamp(1.05rem,3.95vw,1.42rem)] font-semibold leading-[1.06] tracking-normal text-[#111] text-balance sm:mt-7 sm:text-[clamp(1.28rem,2.1vw,1.74rem)] lg:text-[clamp(1.42rem,1.7vw,1.92rem)]";

const compactTitleClassName =
  "mb-4 max-w-full whitespace-pre-line break-words font-clash text-[clamp(1.05rem,3.9vw,1.42rem)] font-semibold leading-[1.08] tracking-normal text-[#111] text-balance sm:text-[clamp(1.28rem,2.1vw,1.74rem)]";

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

function splitPeriod(period: string) {
  return period.split(/\s+[–-]\s+/);
}

type CompanyHeaderLogo = {
  src: string;
  width: number;
  height: number;
  imageClassName: string;
  badgeClassName: string;
  sizes: string;
};

function CompanyHeader({
  label,
  logos,
  textClassName,
}: {
  label: string;
  logos: CompanyHeaderLogo[];
  textClassName: string;
}) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className={`flex shrink-0 ${logos.length > 1 ? "-space-x-2" : ""}`}>
        {logos.map((logo) => (
          <div
            key={logo.src}
            className={`grid h-9 w-9 place-items-center rounded-xl shadow-[0_12px_28px_rgba(0,0,0,.08)] ring-1 ring-white/75 sm:h-14 sm:w-14 sm:rounded-2xl ${logo.badgeClassName}`}
          >
            <Image
              src={logo.src}
              alt=""
              width={logo.width}
              height={logo.height}
              className={`object-contain ${logo.imageClassName}`}
              sizes={logo.sizes}
              unoptimized
            />
          </div>
        ))}
      </div>
      <p className={`min-w-0 break-words font-general text-[9px] font-bold uppercase leading-snug tracking-[0.12em] sm:text-sm sm:tracking-[0.16em] ${textClassName}`}>
        {label}
      </p>
    </div>
  );
}

type CertificationVariant = "ai-cloud" | "microsoft";

const timelineColors = [
  "#e51f34",
  "#0c63c7",
  "#d7a23a",
  "#a84ccf",
  "#c8b177",
  "#4285f4",
  "#ff6a00",
  "#007485",
  "#00a4ef",
];

const timelineDarkSections = [false, false, false, false, true, false, true, true, false];
const TIMELINE_LINE_SMOOTH = 0.1;

const timelineGradient = `linear-gradient(180deg, ${timelineColors
  .map((color, index) => `${color} ${(index / (timelineColors.length - 1)) * 100}%`)
  .join(", ")})`;

const timelineBackgroundClasses = [
  "bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,.36),transparent_24%),radial-gradient(circle_at_86%_26%,rgba(255,132,142,.3),transparent_30%),linear-gradient(135deg,#fff7f8_0%,rgba(238,49,68,.82)_42%,rgba(179,16,34,.72)_100%)]",
  "bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,.3),transparent_24%),radial-gradient(circle_at_86%_78%,rgba(255,106,0,.28),transparent_34%),linear-gradient(135deg,#eef6ff_0%,rgba(8,104,216,.72)_34%,rgba(126,42,161,.66)_68%,rgba(255,90,18,.62)_100%)]",
  "bg-[radial-gradient(circle_at_78%_22%,rgba(215,162,58,.28),transparent_32%),radial-gradient(circle_at_18%_86%,rgba(215,162,58,.36),transparent_34%),linear-gradient(135deg,#fff8eb_0%,rgba(75,57,25,.64)_30%,rgba(26,26,26,.58)_62%,rgba(9,9,9,.52)_100%)]",
  "bg-[radial-gradient(circle_at_18%_64%,rgba(168,76,207,.38),transparent_32%),radial-gradient(circle_at_86%_24%,rgba(255,255,255,.23),transparent_28%),linear-gradient(135deg,#fff5ff_0%,rgba(125,49,143,.68)_42%,rgba(17,17,17,.6)_100%)]",
  "bg-[radial-gradient(circle_at_78%_22%,rgba(200,177,119,.25),transparent_34%),radial-gradient(circle_at_16%_86%,rgba(200,177,119,.34),transparent_36%),linear-gradient(135deg,#fffaf0_0%,rgba(43,38,25,.58)_34%,rgba(7,7,7,.62)_100%)]",
  "bg-[radial-gradient(circle_at_14%_16%,rgba(66,133,244,.34),transparent_30%),radial-gradient(circle_at_88%_26%,rgba(234,67,53,.28),transparent_30%),radial-gradient(circle_at_22%_86%,rgba(251,188,4,.3),transparent_34%),linear-gradient(135deg,#f5f9ff_0%,rgba(66,133,244,.5)_38%,rgba(52,168,83,.42)_100%)]",
  "bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,.42),transparent_30%),radial-gradient(circle_at_82%_74%,rgba(255,128,38,.35),transparent_40%),linear-gradient(135deg,#fff4ec_0%,rgba(255,106,0,.66)_38%,rgba(17,17,17,.58)_100%)]",
  "bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,.42),transparent_30%),radial-gradient(circle_at_82%_74%,rgba(0,201,216,.34),transparent_40%),linear-gradient(135deg,#eefafa_0%,rgba(0,116,133,.7)_36%,rgba(7,17,27,.62)_100%)]",
  "bg-[radial-gradient(circle_at_12%_16%,rgba(242,80,34,.28),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(127,186,0,.26),transparent_30%),radial-gradient(circle_at_18%_86%,rgba(0,164,239,.34),transparent_34%),linear-gradient(135deg,#f5fbff_0%,rgba(0,120,212,.58)_46%,rgba(255,185,0,.4)_100%)]",
];

function hexToRgb(hex: string) {
  const value = hex.replace("#", "");
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16),
  };
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value));
}

const certificationAssets: Record<
  CertificationVariant,
  {
    eyebrow: string;
    headline: string;
    period: string;
    accent: string;
    topIcon: LucideIcon;
    minHeight: string;
    cardClass: string;
    glowClass: string;
    patternClass: string;
    iconClass: string;
    eyebrowClass: string;
    dateClass: string;
    dividerClass: string;
    certCardClass: string;
    certIconClass: string;
    headerLogos: { kind: "google" | "oracle" | "couchbase" | "microsoft" }[];
    certLogos: { kind: "google" | "oracle" | "couchbase" | "azure" }[];
  }
> = {
  "ai-cloud": {
    eyebrow: "Google, Oracle & Couchbase",
    headline: "Especialização em IA & Cloud Foundation",
    period: "SET - NOV 2025",
    accent: "#f05a1a",
    topIcon: BrainCircuit,
    minHeight: "sm:min-h-[560px]",
    cardClass: "border-[#a9ccff] bg-[#fbfdff] shadow-[0_24px_70px_rgba(66,133,244,.13)]",
    glowClass: "bg-[radial-gradient(circle_at_14%_12%,rgba(66,133,244,.16),transparent_28%),radial-gradient(circle_at_92%_14%,rgba(234,67,53,.14),transparent_27%),radial-gradient(circle_at_10%_88%,rgba(251,188,4,.16),transparent_30%),radial-gradient(circle_at_92%_86%,rgba(52,168,83,.14),transparent_32%)]",
    patternClass: "bg-[repeating-linear-gradient(135deg,rgba(66,133,244,.08)_0,rgba(66,133,244,.08)_1px,transparent_1px,transparent_8px)]",
    iconClass: "border-[#d6e4ff] bg-[#e8f0fe] text-[#4285f4] shadow-[inset_0_1px_0_rgba(255,255,255,.9),0_12px_26px_rgba(66,133,244,.16)]",
    eyebrowClass: "text-[#4285f4]",
    dateClass: "text-[#5f6368]",
    dividerClass: "bg-[linear-gradient(90deg,#4285f4_0%,#ea4335_33%,#fbbc04_66%,#34a853_100%)]",
    certCardClass: "border-[#b8d6ff] bg-white/90 shadow-[0_12px_26px_rgba(66,133,244,.11)]",
    certIconClass: "border-[#b8d6ff] bg-[#f8fbff] shadow-[0_8px_18px_rgba(66,133,244,.12)]",
    headerLogos: [
      { kind: "google" },
      { kind: "oracle" },
      { kind: "couchbase" },
    ],
    certLogos: [
      { kind: "google" },
      { kind: "oracle" },
      { kind: "couchbase" },
    ],
  },
  microsoft: {
    eyebrow: "Microsoft Certified",
    headline: "Microsoft Cloud & Data Expert Path",
    period: "JAN - ABR 2026",
    accent: "#f05a1a",
    topIcon: Award,
    minHeight: "sm:min-h-[560px]",
    cardClass: "border-[#9ed0ff] bg-[#fbfdff] shadow-[0_24px_70px_rgba(0,120,212,.15)]",
    glowClass: "bg-[radial-gradient(circle_at_12%_13%,rgba(242,80,34,.16),transparent_27%),radial-gradient(circle_at_88%_12%,rgba(127,186,0,.14),transparent_26%),radial-gradient(circle_at_12%_88%,rgba(0,164,239,.17),transparent_30%),radial-gradient(circle_at_88%_86%,rgba(255,185,0,.18),transparent_32%)]",
    patternClass: "bg-[linear-gradient(90deg,rgba(242,80,34,.10)_0_25%,rgba(127,186,0,.10)_25%_50%,rgba(0,164,239,.10)_50%_75%,rgba(255,185,0,.12)_75%_100%)]",
    iconClass: "border-[#cfe7ff] bg-[#eaf5ff] text-[#0078d4] shadow-[inset_0_1px_0_rgba(255,255,255,.9),0_12px_26px_rgba(0,120,212,.18)]",
    eyebrowClass: "text-[#0078d4]",
    dateClass: "text-[#5f6368]",
    dividerClass: "bg-[linear-gradient(90deg,#f25022_0%,#7fba00_33%,#00a4ef_66%,#ffb900_100%)]",
    certCardClass: "border-[#acd7ff] bg-white/92 shadow-[0_12px_26px_rgba(0,120,212,.12)]",
    certIconClass: "border-[#acd7ff] bg-[#f7fbff] shadow-[0_8px_18px_rgba(0,120,212,.13)]",
    headerLogos: [
      { kind: "microsoft" },
    ],
    certLogos: [
      { kind: "azure" },
      { kind: "azure" },
      { kind: "azure" },
      { kind: "azure" },
      { kind: "azure" },
    ],
  },
};

function MaskLogo({
  src,
  color,
  className,
}: {
  src: string;
  color: string;
  className: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`block bg-current ${className}`}
      style={{
        color,
        mask: `url(${src}) center / contain no-repeat`,
        WebkitMask: `url(${src}) center / contain no-repeat`,
      }}
    />
  );
}

function MicrosoftLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center ${compact ? "gap-2" : "gap-3"}`}>
      <span className={`${compact ? "h-8 w-8" : "h-10 w-10"} grid grid-cols-2 gap-1`}>
        <span className="bg-[#f25022]" />
        <span className="bg-[#7fba00]" />
        <span className="bg-[#00a4ef]" />
        <span className="bg-[#ffb900]" />
      </span>
      <span className={`font-general font-semibold tracking-normal text-[#5f6368] ${compact ? "text-[20px]" : "text-[26px]"}`}>Microsoft</span>
    </div>
  );
}

function CertificationBrandLogo({
  kind,
  compact = false,
}: {
  kind: "google" | "oracle" | "couchbase" | "microsoft" | "azure";
  compact?: boolean;
}) {
  if (kind === "microsoft") return <MicrosoftLogo compact={compact} />;

  if (kind === "oracle") {
    return (
      <Image
        src="/certifications/oracle-logo.jpeg"
        alt="Oracle"
        width={compact ? 78 : 124}
        height={compact ? 24 : 38}
        className={`${compact ? "h-auto w-16" : "h-auto w-28"} object-contain mix-blend-multiply`}
        sizes={compact ? "64px" : "112px"}
        unoptimized
      />
    );
  }

  if (kind === "couchbase") {
    return (
      <div className="flex items-center gap-2">
        <MaskLogo
          src="/stack/couchbase.svg"
          color="#ed1f24"
          className={compact ? "h-8 w-8" : "h-10 w-10"}
        />
        {!compact ? (
          <span className="font-general text-[18px] font-bold tracking-[0.04em] text-[#101010]">COUCHBASE</span>
        ) : null}
      </div>
    );
  }

  if (kind === "azure") {
    return (
      <MaskLogo
        src="/stack/microsoftazure.svg"
        color="#0078d4"
        className={compact ? "h-8 w-8" : "h-10 w-10"}
      />
    );
  }

  return (
    <Image
      src="/certifications/google-logo.jpeg"
      alt="Google"
      width={compact ? 34 : 44}
      height={compact ? 34 : 44}
      className={`${compact ? "h-8 w-8" : "h-10 w-10"} rounded-full object-cover mix-blend-multiply`}
      sizes={compact ? "32px" : "40px"}
      unoptimized
    />
  );
}

function CertificationFeaturedCard({ item, variant }: { item: Milestone; variant: CertificationVariant }) {
  const config = certificationAssets[variant];
  const TopIcon = config.topIcon;

  return (
    <div className="journey-card relative min-w-0 max-w-full rounded-[28px] bg-transparent sm:rounded-[34px]">
      <div className={`relative overflow-hidden rounded-[24px] border-2 p-4 sm:rounded-[30px] sm:p-6 lg:p-7 ${config.minHeight} ${config.cardClass}`}>
        <div className={`pointer-events-none absolute inset-0 ${config.glowClass}`} />
        <div className={`pointer-events-none absolute bottom-0 right-0 h-48 w-64 rounded-tl-full opacity-80 ${config.patternClass}`} />

        <div className="relative flex items-center gap-3 sm:gap-4">
          <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-[18px] border sm:h-16 sm:w-16 sm:rounded-[20px] ${config.iconClass}`}>
            <TopIcon size={30} strokeWidth={1.55} />
          </div>
          <span className="h-9 w-px bg-black/12 sm:h-10" />
          <div className="flex min-w-0 flex-wrap items-center gap-3 sm:gap-4">
            {config.headerLogos.map((logo) => (
              <CertificationBrandLogo key={logo.kind} kind={logo.kind} />
            ))}
          </div>
        </div>

        <div className="relative mt-6">
          <p className={`font-general text-[11px] font-bold uppercase tracking-[0.32em] sm:text-[12px] ${config.eyebrowClass}`}>
            {config.eyebrow}
          </p>

          <div className={`mt-5 flex items-center gap-3 font-general text-[14px] font-semibold uppercase tracking-[0.24em] sm:text-[16px] ${config.dateClass}`}>
            <Calendar size={18} strokeWidth={1.8} />
            {config.period}
          </div>

          <h3 className="mt-5 max-w-full whitespace-pre-line break-words font-clash text-[clamp(1.05rem,3.95vw,1.42rem)] font-semibold leading-[1.08] tracking-normal text-[#08090c] text-balance sm:text-[clamp(1.32rem,2.15vw,1.82rem)]">
            {config.headline}
          </h3>
          <span className={`mt-5 block h-[3px] w-20 rounded-full ${config.dividerClass}`} />
        </div>

        <div className="relative mt-6 grid gap-3">
          {item.certs?.map((cert, index) => {
            const logo = config.certLogos[index] ?? config.certLogos[0];

            return (
              <div
                key={cert.name}
                className={`relative grid min-h-[58px] grid-cols-[44px_1px_minmax(0,1fr)_auto] items-center gap-3 overflow-hidden rounded-[18px] border-2 px-3 sm:min-h-[64px] sm:grid-cols-[52px_1px_minmax(0,1fr)_auto] sm:gap-4 sm:px-4 ${config.certCardClass}`}
              >
                <span
                  className="absolute inset-y-0 left-0 w-1.5"
                  style={{ backgroundColor: cert.color } as CSSProperties}
                />
                <span className={`grid h-10 w-10 place-items-center rounded-full border-2 sm:h-12 sm:w-12 ${config.certIconClass}`}>
                  <CertificationBrandLogo kind={logo.kind} compact />
                </span>
                <span className="h-8 w-px bg-black/12" />
                <span className="min-w-0 font-general text-[12px] font-medium leading-tight text-[#08090c] sm:text-[15px]">
                  {cert.name}
                </span>
                <span className="shrink-0 font-general text-[11px] font-medium text-[#909090] sm:text-[14px]">
                  {cert.date}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function LinceFeaturedCard({ item }: { item: Milestone }) {
  const [start, end] = splitPeriod(item.period);

  return (
    <div className="journey-card relative min-w-0 max-w-full overflow-hidden rounded-[24px] border-2 border-[#d90416]/35 bg-white p-0 shadow-[0_24px_70px_rgba(0,0,0,0.06)] transition-all duration-500 hover:border-[#d90416]/60 sm:rounded-[30px]">
      <div className="grid grid-cols-1 sm:min-h-[640px] sm:grid-cols-[220px_1fr]">
        <aside className="relative flex min-w-0 flex-col justify-between overflow-hidden bg-[#d90416] px-3 py-4 text-white max-sm:min-h-[84px] max-sm:flex-row max-sm:items-center sm:px-7 sm:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,.12),transparent_34%),radial-gradient(circle_at_38%_18%,rgba(255,255,255,.14),transparent_22%)]" />
          <div className="pointer-events-none absolute -right-28 top-40 h-72 w-72 rounded-full border border-white/14" />
          <div className="pointer-events-none absolute -right-16 bottom-28 h-40 w-64 rotate-12 rounded-[50%] border border-white/12" />
          <div className="pointer-events-none absolute -left-16 bottom-16 h-28 w-72 -rotate-6 rounded-[50%] border border-white/10" />

          <div className="relative scale-75 sm:mt-20 sm:scale-100">
            <LinceLogo />
          </div>

          <div className="relative font-general text-[9px] font-bold uppercase leading-relaxed tracking-[0.08em] sm:text-base">
            <span className="block">{start}</span>
            <span className="my-1 block">-</span>
            <span className="block">{end}</span>
          </div>
        </aside>

        <div className="min-w-0 px-3 py-5 sm:px-9 sm:py-12 lg:px-11">
          <CompanyHeader
            label={item.subtitle}
            textClassName="text-[#ff4d00]"
            logos={[
              {
                src: "/brands/lince-logo-white-solid.png",
                width: 900,
                height: 394,
                imageClassName: "h-auto w-8 sm:w-10",
                badgeClassName: "bg-[#d90416]",
                sizes: "(max-width: 640px) 32px, 40px",
              },
            ]}
          />
          <h3 className={featuredTitleClassName}>
            {item.title}
          </h3>
          <div className="mt-5 h-1 w-16 rounded-full bg-[#ff4d00]" />

          <p className="mt-4 font-general text-[11px] leading-[1.55] text-[#242424] text-pretty sm:mt-8 sm:text-[16px] sm:leading-[1.9]">
            {item.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-9 sm:gap-3">
            {item.tech?.map((tag) => (
              <StackChip
                key={tag}
                label={tag}
                className="min-h-9 border-transparent bg-[#fff1f1] text-[9px] font-bold uppercase tracking-[0.06em] text-[#b60d18] shadow-[inset_0_0_0_1px_rgba(182,13,24,.06)] sm:min-h-10 sm:px-4 sm:text-xs"
              />
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
    <div className="journey-card relative min-w-0 max-w-full overflow-hidden rounded-[24px] border-2 border-[#0c63c7]/35 bg-white p-0 shadow-[0_24px_70px_rgba(0,0,0,0.06)] transition-all duration-500 hover:border-[#ff4d00]/55 sm:rounded-[30px]">
      <div className="grid grid-cols-1 sm:min-h-[640px] sm:grid-cols-[220px_1fr]">
        <aside className="relative flex min-w-0 flex-col justify-between overflow-hidden bg-[linear-gradient(180deg,#005dcc_0%,#263aa5_42%,#9d2378_68%,#ff4d00_100%)] px-3 py-4 text-white max-sm:min-h-[84px] max-sm:flex-row max-sm:items-center sm:px-7 sm:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,.14),transparent_24%),linear-gradient(140deg,rgba(255,255,255,.12),transparent_36%)]" />
          <div className="pointer-events-none absolute -right-28 top-40 h-72 w-72 rounded-full border border-white/18" />
          <div className="pointer-events-none absolute -right-16 bottom-28 h-40 w-64 rotate-12 rounded-[50%] border border-white/14" />
          <div className="pointer-events-none absolute -left-16 bottom-16 h-28 w-72 -rotate-6 rounded-[50%] border border-white/12" />

          <div className="relative flex flex-row items-center gap-3 sm:mt-16 sm:flex-col sm:gap-8">
            <Image
              src="/brands/bunge-logo-white.png"
              alt="Bunge"
              width={720}
              height={214}
              className="h-auto w-16 sm:w-36"
              sizes="(max-width: 640px) 112px, 144px"
              unoptimized
            />
            <span className="h-8 w-px rounded-full bg-white/70 sm:h-1 sm:w-16" />
            <Image
              src="/brands/brf-logo-color-white.png"
              alt="BRF"
              width={1885}
              height={972}
              className="h-auto w-14 sm:w-32"
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

        <div className="min-w-0 px-3 py-5 sm:px-9 sm:py-12 lg:px-11">
          <CompanyHeader
            label={item.subtitle}
            textClassName="text-[#0c63c7]"
            logos={[
              {
                src: "/brands/bunge-logo-white.png",
                width: 720,
                height: 214,
                imageClassName: "h-auto w-8 sm:w-10",
                badgeClassName: "bg-[#005dcc]",
                sizes: "(max-width: 640px) 32px, 40px",
              },
              {
                src: "/brands/brf-logo-color-white.png",
                width: 1885,
                height: 972,
                imageClassName: "h-auto w-8 sm:w-10",
                badgeClassName: "bg-[#ff4d00]",
                sizes: "(max-width: 640px) 32px, 40px",
              },
            ]}
          />
          <h3 className={featuredTitleClassName}>
            {item.title}
          </h3>
          <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#0c63c7] to-[#ff6a00]" />

          <p className="mt-4 font-general text-[11px] leading-[1.55] text-[#242424] text-pretty sm:mt-8 sm:text-[16px] sm:leading-[1.9]">
            {item.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-9 sm:gap-3">
            {item.tech?.map((tag) => (
              <StackChip
                key={tag}
                label={tag}
                className="min-h-9 border-transparent bg-[#f3f7ff] text-[9px] font-bold uppercase tracking-[0.06em] text-[#0c63c7] shadow-[inset_0_0_0_1px_rgba(12,99,199,.08)] sm:min-h-10 sm:px-4 sm:text-xs"
              />
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
    <div className="journey-card relative min-w-0 max-w-full overflow-hidden rounded-[24px] border-2 border-[#d7a23a]/40 bg-white p-0 shadow-[0_24px_70px_rgba(0,0,0,0.06)] transition-all duration-500 hover:border-[#d7a23a]/65 sm:rounded-[30px]">
      <div className="grid grid-cols-1 sm:min-h-[640px] sm:grid-cols-[220px_1fr]">
        <aside className="relative flex min-w-0 flex-col justify-between overflow-hidden bg-[#171717] px-3 py-4 text-white max-sm:min-h-[84px] max-sm:flex-row max-sm:items-center sm:px-7 sm:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_42%_92%,rgba(209,155,45,.42),transparent_30%),linear-gradient(180deg,rgba(255,255,255,.04),transparent_32%)]" />
          <div className="pointer-events-none absolute -right-28 top-44 h-72 w-72 rounded-full border border-[#d7a23a]/55" />
          <div className="pointer-events-none absolute -right-16 bottom-28 h-40 w-64 rotate-12 rounded-[50%] border border-[#d7a23a]/45" />
          <div className="pointer-events-none absolute -left-16 bottom-16 h-28 w-72 -rotate-6 rounded-[50%] border border-[#d7a23a]/40" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_45%_100%,rgba(214,157,43,.34),transparent_62%)]" />

          <div className="relative flex justify-center sm:mt-20">
            <Image
              src="/brands/mapfit-logo-color.png"
              alt="Mapfit Group"
              width={957}
              height={307}
              className="h-auto w-20 sm:w-36"
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

        <div className="min-w-0 px-3 py-5 sm:px-9 sm:py-12 lg:px-11">
          <CompanyHeader
            label={item.subtitle}
            textClassName="text-[#b88319]"
            logos={[
              {
                src: "/brands/mapfit-logo-color.png",
                width: 957,
                height: 307,
                imageClassName: "h-auto w-11 sm:w-16",
                badgeClassName: "!w-14 bg-[#171717] px-1.5 sm:!w-20",
                sizes: "(max-width: 640px) 44px, 64px",
              },
            ]}
          />
          <h3 className={featuredTitleClassName}>
            {item.title}
          </h3>
          <div className="mt-5 h-1 w-16 rounded-full bg-[#d7a23a]" />

          <p className="mt-4 font-general text-[11px] leading-[1.55] text-[#242424] text-pretty sm:mt-8 sm:text-[16px] sm:leading-[1.9]">
            {item.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-9 sm:gap-3">
            {item.tech?.map((tag) => (
              <StackChip
                key={tag}
                label={tag}
                className="min-h-9 border-transparent bg-[#fff7e8] text-[9px] font-bold uppercase tracking-[0.06em] text-[#a56f10] shadow-[inset_0_0_0_1px_rgba(165,111,16,.1)] sm:min-h-10 sm:px-4 sm:text-xs"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StudioFeaturedCard({ item }: { item: Milestone }) {
  const [start, end] = splitPeriod(item.period);

  return (
    <div className="journey-card relative min-w-0 max-w-full overflow-hidden rounded-[24px] border-2 border-[#a84ccf]/40 bg-white p-0 shadow-[0_24px_70px_rgba(0,0,0,0.06)] transition-all duration-500 hover:border-[#a84ccf]/65 sm:rounded-[30px]">
      <div className="grid grid-cols-1 sm:min-h-[640px] sm:grid-cols-[220px_1fr]">
        <aside className="relative flex min-w-0 flex-col justify-between overflow-hidden bg-[#111111] px-3 py-4 text-white max-sm:min-h-[84px] max-sm:flex-row max-sm:items-center sm:px-7 sm:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_68%,rgba(145,42,182,.5),transparent_28%),linear-gradient(180deg,rgba(255,255,255,.035),transparent_36%)]" />
          <div className="pointer-events-none absolute -right-28 top-44 h-72 w-72 rounded-full border border-[#d779ff]/55" />
          <div className="pointer-events-none absolute -right-16 bottom-28 h-40 w-64 rotate-12 rounded-[50%] border border-[#d779ff]/45" />
          <div className="pointer-events-none absolute -left-16 bottom-16 h-28 w-72 -rotate-6 rounded-[50%] border border-[#d779ff]/36" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(circle_at_12%_70%,rgba(116,31,154,.46),transparent_58%)]" />

          <div className="relative flex flex-row items-center gap-3 text-center sm:mt-14 sm:flex-col sm:gap-10">
            <Image
              src="/brands/studio416x-logo-transparent.png"
              alt="Studio 416X"
              width={606}
              height={76}
              className="h-auto w-20 invert sm:w-36"
              sizes="(max-width: 640px) 80px, 144px"
              unoptimized
            />
            <span className="h-1 w-11 rounded-full bg-[#a84ccf] sm:w-16" />
            <div className="relative w-[72px] sm:w-[176px]">
              <Image
                src="/brands/revenda-calcados-logo-transparent.png"
                alt="Revenda de Calçados"
                width={873}
                height={313}
                className="h-auto w-full drop-shadow-[0_18px_34px_rgba(0,0,0,.34)]"
                sizes="(max-width: 640px) 112px, 176px"
                unoptimized
              />
            </div>
          </div>

          <div className="relative font-general text-[10px] font-bold uppercase leading-relaxed tracking-[0.1em] sm:text-base">
            <span className="block text-[#c657de]">{start}</span>
            <span className="my-1 block text-[#c657de]">-</span>
            <span className="block text-white">{end}</span>
          </div>
        </aside>

        <div className="min-w-0 px-3 py-5 sm:px-9 sm:py-12 lg:px-11">
          <CompanyHeader
            label={item.subtitle}
            textClassName="text-[#9a35b8]"
            logos={[
              {
                src: "/brands/studio416x-logo-transparent.png",
                width: 606,
                height: 76,
                imageClassName: "h-auto w-9 sm:w-11",
                badgeClassName: "bg-white",
                sizes: "(max-width: 640px) 36px, 44px",
              },
              {
                src: "/brands/revenda-calcados-logo-transparent.png",
                width: 873,
                height: 313,
                imageClassName: "h-auto w-9 sm:w-11",
                badgeClassName: "bg-[#111111]",
                sizes: "(max-width: 640px) 36px, 44px",
              },
            ]}
          />
          <h3 className={featuredTitleClassName}>
            {item.title}
          </h3>
          <div className="mt-5 h-1 w-16 rounded-full bg-[#a84ccf]" />

          <p className="mt-4 font-general text-[11px] leading-[1.55] text-[#242424] text-pretty sm:mt-8 sm:text-[16px] sm:leading-[1.9]">
            {item.description}
          </p>

          {item.impact && (
            <div className="mt-6 inline-flex items-center gap-3 rounded-[16px] border border-[#a84ccf]/20 bg-[#a84ccf]/5 px-4 py-3">
              <TrendingUp size={18} className="shrink-0 text-[#9a35b8]" />
              <span className="font-general text-[11px] font-bold uppercase leading-snug tracking-[0.05em] text-[#111] sm:text-xs">
                {item.impact}
              </span>
            </div>
          )}

          <div className="mt-7 flex flex-wrap gap-2 sm:gap-3">
            {item.tech?.map((tag) => (
              <StackChip
                key={tag}
                label={tag}
                className="min-h-9 border-transparent bg-[#fbf0ff] text-[9px] font-bold uppercase tracking-[0.06em] text-[#8d2ca9] shadow-[inset_0_0_0_1px_rgba(141,44,169,.08)] sm:min-h-10 sm:px-4 sm:text-xs"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ColcciAmcFeaturedCard({ item }: { item: Milestone }) {
  const [start, end] = splitPeriod(item.period);

  return (
    <div className="journey-card relative min-w-0 max-w-full overflow-hidden rounded-[24px] border-2 border-[#c8b177]/45 bg-white p-0 shadow-[0_24px_70px_rgba(0,0,0,0.08)] transition-all duration-500 hover:border-[#c8b177]/70 sm:rounded-[30px]">
      <div className="grid grid-cols-1 sm:min-h-[660px] sm:grid-cols-[220px_1fr]">
        <aside className="relative flex min-w-0 flex-col justify-between overflow-hidden bg-[#080807] px-3 py-4 text-white max-sm:min-h-[92px] max-sm:flex-row max-sm:items-center sm:px-7 sm:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_42%_18%,rgba(255,255,255,.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,.05),transparent_30%)]" />
          <div className="pointer-events-none absolute -right-24 top-28 h-72 w-72 rounded-[48%] border border-[#c8b177]/38 sm:-right-28 sm:top-48" />
          <div className="pointer-events-none absolute -right-20 bottom-24 h-56 w-80 -rotate-12 rounded-[50%] border border-[#c8b177]/28" />
          <div className="pointer-events-none absolute -left-24 bottom-16 h-40 w-96 rotate-[-18deg] rounded-[50%] border border-[#c8b177]/24" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(circle_at_58%_100%,rgba(200,177,119,.18),transparent_56%)]" />

          <div className="relative flex flex-row items-center gap-4 sm:mt-12 sm:flex-col sm:items-start sm:gap-10">
            <Image
              src="/brands/colcci-logo-white.png"
              alt="Colcci"
              width={506}
              height={146}
              className="h-auto w-[92px] drop-shadow-[0_14px_28px_rgba(255,255,255,.12)] sm:w-[150px]"
              sizes="(max-width: 640px) 92px, 150px"
              unoptimized
            />

            <span className="h-10 w-px bg-[#c8b177] sm:h-px sm:w-16" />

            <Image
              src="/brands/amc25-logo-white.png"
              alt="AMC Têxtil 25 anos"
              width={978}
              height={1060}
              className="h-auto w-[54px] drop-shadow-[0_14px_30px_rgba(255,255,255,.14)] sm:w-[118px]"
              sizes="(max-width: 640px) 54px, 118px"
              unoptimized
            />
          </div>

          <div className="relative text-right font-general text-[9px] font-bold uppercase leading-relaxed tracking-[0.09em] sm:text-left sm:text-base">
            <span className="block text-[#c8b177]">{start}</span>
            <span className="my-1 block text-[#c8b177]">-</span>
            <span className="block text-white">{end}</span>
          </div>
        </aside>

        <div className="min-w-0 px-3 py-5 sm:px-9 sm:py-12 lg:px-11">
          <CompanyHeader
            label={item.subtitle}
            textClassName="text-[#9b7d35]"
            logos={[
              {
                src: "/brands/colcci-logo-transparent.png",
                width: 506,
                height: 146,
                imageClassName: "h-auto w-11 sm:w-14",
                badgeClassName: "bg-white",
                sizes: "(max-width: 640px) 44px, 56px",
              },
              {
                src: "/brands/amc25-logo-transparent.png",
                width: 978,
                height: 1060,
                imageClassName: "h-7 w-7 sm:h-9 sm:w-9",
                badgeClassName: "bg-[#fbf8ef]",
                sizes: "(max-width: 640px) 28px, 36px",
              },
            ]}
          />
          <h3 className={featuredTitleClassName}>
            {item.title}
          </h3>
          <div className="mt-5 h-1 w-16 rounded-full bg-[#c8b177]" />

          <p className="mt-4 font-general text-[11px] leading-[1.55] text-[#242424] text-pretty sm:mt-8 sm:text-[16px] sm:leading-[1.9]">
            {item.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-9 sm:gap-3">
            {item.tech?.map((tag) => (
              <StackChip
                key={tag}
                label={tag}
                className="min-h-9 border-transparent bg-[#faf6ea] text-[9px] font-bold uppercase tracking-[0.06em] text-[#6f5b29] shadow-[inset_0_0_0_1px_rgba(111,91,41,.1)] sm:min-h-10 sm:px-4 sm:text-xs"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type MarketplaceKind = "shopee" | "tiktok" | "mercado-livre" | "amazon";

const elevaterMarketplaces: { name: string; kind: MarketplaceKind; labelColor: string }[] = [
  { name: "Shopee", kind: "shopee", labelColor: "#ee4d2d" },
  { name: "TikTok Shop", kind: "tiktok", labelColor: "#25f4ee" },
  { name: "Mercado Livre", kind: "mercado-livre", labelColor: "#f2d600" },
  { name: "Amazon", kind: "amazon", labelColor: "#ff9900" },
];

function MarketplaceLogo({ kind, className = "" }: { kind: MarketplaceKind; className?: string }) {
  if (kind === "shopee") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
        <path
          fill="currentColor"
          d="M15.9414 17.9633c.229-1.879-.981-3.077-4.1758-4.0969-1.548-.528-2.277-1.22-2.26-2.1719.065-1.056 1.048-1.825 2.352-1.85a5.2898 5.2898 0 0 1 2.8838.89c.116.072.197.06.263-.039.09-.145.315-.494.39-.62.051-.081.061-.187-.068-.281-.185-.1369-.704-.4149-.983-.5319a6.4697 6.4697 0 0 0-2.5118-.514c-1.909.008-3.4129 1.215-3.5389 2.826-.082 1.1629.494 2.1078 1.73 2.8278.262.152 1.6799.716 2.2438.892 1.774.552 2.695 1.5419 2.478 2.6969-.197 1.047-1.299 1.7239-2.818 1.7439-1.2039-.046-2.2878-.537-3.1278-1.19l-.141-.11c-.104-.08-.218-.075-.287.03-.05.077-.376.547-.458.67-.077.108-.035.168.045.234.35.293.817.613 1.134.775a6.7097 6.7097 0 0 0 2.8289.727 4.9048 4.9048 0 0 0 2.0759-.354c1.095-.465 1.8029-1.394 1.9449-2.554zM11.9986 1.4009c-2.068 0-3.7539 1.95-3.8329 4.3899h7.6657c-.08-2.44-1.765-4.3899-3.8328-4.3899zm7.8516 22.5981-.08.001-15.7843-.002c-1.074-.04-1.863-.91-1.971-1.991l-.01-.195L1.298 6.2858a.459.459 0 0 1 .45-.494h4.9748C6.8448 2.568 9.1607 0 11.9996 0c2.8388 0 5.1537 2.5689 5.2757 5.7898h4.9678a.459.459 0 0 1 .458.483l-.773 15.5883-.007.131c-.094 1.094-.979 1.9769-2.0709 2.0059z"
        />
      </svg>
    );
  }

  if (kind === "tiktok") {
    const path =
      "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z";

    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
        <path d={path} fill="#25f4ee" transform="translate(-1.1 .8)" />
        <path d={path} fill="#fe2c55" transform="translate(1.1 -.5)" />
        <path d={path} fill="#ffffff" />
      </svg>
    );
  }

  if (kind === "mercado-livre") {
    return (
      <Image
        src="/brands/mercado-livre-logo.webp"
        alt=""
        width={374}
        height={242}
        className={className}
        sizes="88px"
        unoptimized
      />
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className={className}>
      <text x="20" y="42" fill="#111111" fontFamily="Arial, Helvetica, sans-serif" fontSize="42" fontWeight="700">
        a
      </text>
      <path
        d="M17 45.5c9.5 6.5 22.5 6.4 32.8-.2"
        fill="none"
        stroke="#ff9900"
        strokeLinecap="round"
        strokeWidth="3.5"
      />
      <path d="m46.5 43.3 6.6 1.1-3 5.8" fill="none" stroke="#ff9900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
    </svg>
  );
}

function MarketplaceBadge({
  kind,
}: {
  name: string;
  kind: MarketplaceKind;
  labelColor: string;
}) {
  const badgeClassName =
    kind === "shopee"
      ? "bg-[#ee4d2d] text-white"
      : kind === "tiktok"
        ? "bg-black text-white"
        : kind === "mercado-livre"
          ? "bg-[#fff159] text-[#263283]"
          : "bg-white text-[#111]";

  return (
    <div className="min-w-0 text-center">
      <span
        className={`mx-auto grid h-12 w-12 place-items-center overflow-hidden rounded-[14px] shadow-[0_10px_22px_rgba(0,0,0,.09)] ring-1 ring-black/5 sm:h-14 sm:w-14 ${badgeClassName}`}
      >
        <MarketplaceLogo
          kind={kind}
          className={kind === "mercado-livre" ? "h-full w-full object-cover" : "h-7 w-7 sm:h-8 sm:w-8"}
        />
      </span>
    </div>
  );
}

function ElevaterCaseCard({ item }: { item: Milestone }) {
  return (
    <div data-elevater-case-card className="journey-card relative min-w-0 max-w-full overflow-hidden rounded-[24px] border-2 border-[#007485]/55 bg-[#f2fbfc] p-0 shadow-[0_24px_70px_rgba(0,116,133,0.12)] transition-all duration-500 hover:border-[#007485]/80 sm:rounded-[30px]">
      <div className="grid grid-cols-1 bg-[radial-gradient(circle_at_82%_12%,rgba(0,116,133,.12),transparent_26%),linear-gradient(135deg,#f8ffff_0%,#eefafa_46%,#ffffff_100%)] sm:min-h-[640px] sm:grid-cols-[220px_1fr]">
        <aside className="relative flex min-w-0 flex-col justify-start overflow-hidden border-b border-[#65c7d1]/45 bg-[#001015] px-3 py-4 text-white max-sm:min-h-[112px] max-sm:items-center sm:border-b-0 sm:border-r sm:px-7 sm:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_12%,rgba(0,105,140,.22),transparent_30%),linear-gradient(180deg,#00070b_0%,#001625_34%,#004d63_69%,#007181_100%)]" />
          <svg
            aria-hidden="true"
            viewBox="0 0 360 1536"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <path d="M0 0H360V398C255 352 152 310 0 258V0Z" fill="#000912" opacity="0.98" />
            <path d="M0 400C112 466 221 526 360 574V768C218 722 101 654 0 608V400Z" fill="#00364e" opacity="0.76" />
            <path d="M0 565C108 640 234 703 360 744V957C214 913 106 834 0 781V565Z" fill="#00465d" opacity="0.72" />
            <path d="M0 744C122 802 222 858 360 879V1138C223 1125 101 1055 0 1007V744Z" fill="#006478" opacity="0.72" />
            <path d="M0 956C118 1016 232 1065 360 1078V1536H0V956Z" fill="#007d8b" opacity="0.78" />
            <path d="M-38 1314C92 1214 225 1161 392 1144" fill="none" stroke="#64edf7" strokeOpacity="0.12" strokeWidth="1.2" />
            <path d="M-10 1424C95 1366 217 1330 384 1316" fill="none" stroke="#a7f8ff" strokeOpacity="0.09" strokeWidth="1" />
          </svg>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.3),transparent_28%,transparent_76%,rgba(0,0,0,.16))]" />

          <div className="relative flex flex-col items-center text-center max-sm:mt-0 sm:mt-2">
            <Image
              src="/brands/elevater-logo-transparent.png"
              alt="Elevater"
              width={281}
              height={85}
              className="h-auto w-[116px] drop-shadow-[0_0_18px_rgba(255,255,255,.12)] sm:w-[154px]"
              sizes="(max-width: 640px) 116px, 154px"
              unoptimized
            />
            <span className="mt-2 h-[2px] w-12 rounded-full bg-[radial-gradient(circle,#3cf6ff_0%,#00bed0_34%,rgba(0,190,208,0)_72%)] shadow-[0_0_18px_rgba(25,232,245,.9)] sm:mt-8 sm:w-28" />
            <p className="mt-2 max-w-[160px] font-general text-[9px] font-light leading-snug text-white/54 sm:mt-7 sm:max-w-[190px] sm:text-[13px] sm:leading-[1.45]">
              Gestão inteligente de campanhas no Mercado Livre
            </p>
          </div>
        </aside>

        <div className="min-w-0 px-3 py-5 sm:px-9 sm:py-12 lg:px-11">
          <h3 className="max-w-full whitespace-nowrap font-clash text-[clamp(1rem,4vw,1.2rem)] font-semibold leading-[1.06] tracking-normal text-[#111] sm:mt-2 sm:text-[clamp(1.08rem,1.45vw,1.35rem)] lg:text-[clamp(1.08rem,1.3vw,1.42rem)]">
            {item.title}
          </h3>
          <div className="mt-5 h-1 w-16 rounded-full bg-[#007485]" />

          <p className="mt-4 font-general text-[11px] leading-[1.55] text-[#242424] text-pretty sm:mt-8 sm:text-[16px] sm:leading-[1.9]">
            {item.description}
          </p>

          {item.impact && (
            <div className="mt-6 inline-flex items-center gap-3 rounded-[16px] border border-[#007485]/20 bg-[#007485]/5 px-4 py-3">
              <TrendingUp size={18} className="shrink-0 text-[#007485]" />
              <span className="font-general text-[11px] font-bold uppercase leading-snug tracking-[0.05em] text-[#111] sm:text-xs">
                {item.impact}
              </span>
            </div>
          )}

          <div className="mt-5 overflow-hidden rounded-[18px] border border-[#9fd8df] bg-[#f7feff] shadow-[0_16px_34px_rgba(0,116,133,.07)] sm:mt-7">
            <div className="flex items-start gap-3 border-b border-[#d1eef2] px-4 py-4">
              <TrendingUp size={22} strokeWidth={2.1} className="mt-0.5 shrink-0 text-[#007485]" />
              <p className="font-general text-[11px] font-bold uppercase leading-relaxed tracking-[0.12em] text-[#111] sm:text-[13px]">
                Economia e escala em{" "}
                <span style={{ color: elevaterMarketplaces[0].labelColor } as CSSProperties}>Shopee</span>
                <span>, </span>
                <span style={{ color: elevaterMarketplaces[1].labelColor } as CSSProperties}>TikTok Shop</span>
                <span>, </span>
                <span style={{ color: elevaterMarketplaces[2].labelColor } as CSSProperties}>Mercado Livre</span>
                <span> e </span>
                <span style={{ color: elevaterMarketplaces[3].labelColor } as CSSProperties}>Amazon</span>
                <span>.</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 px-4 py-4 sm:grid-cols-4">
              {elevaterMarketplaces.map((marketplace) => (
                <MarketplaceBadge key={marketplace.kind} {...marketplace} />
              ))}
            </div>

            <div className="grid grid-cols-1 gap-px border-t border-[#d1eef2] bg-[#d1eef2] sm:grid-cols-2">
              {["Integração completa", "Menos custo e retrabalho", "Otimização de processos", "Mais vendas e performance"].map((result) => (
                <div key={result} className="flex min-h-[48px] items-center gap-2 bg-white px-3 py-3">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#007485] text-white">
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3 w-3">
                      <path d="m3.5 8 2.8 2.8 6.2-6.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </span>
                  <span className="font-general text-[10px] font-semibold leading-tight tracking-normal text-[#1c2b31] sm:text-[11px]">
                    {result}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={`${item.impact ? "mt-7" : "mt-5"} flex flex-wrap gap-1.5 sm:mt-9 sm:gap-3`}>
            {item.tech?.map((tag) => (
              <StackChip
                key={tag}
                label={tag}
                className="min-h-9 border-transparent bg-[#eefafa] text-[9px] font-bold uppercase tracking-[0.06em] text-[#006c7a] shadow-[inset_0_0_0_1px_rgba(0,116,133,.08)] sm:min-h-10 sm:px-4 sm:text-xs"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AvantFeaturedCard({ item }: { item: Milestone }) {
  const [start, end] = splitPeriod(item.period);

  return (
    <div className="journey-card relative min-w-0 max-w-full overflow-hidden rounded-[24px] border-2 border-[#0d2635]/35 bg-white p-0 shadow-[0_24px_70px_rgba(0,0,0,0.06)] transition-all duration-500 hover:border-[#4f7487]/65 sm:rounded-[30px]">
      <div className="grid grid-cols-1 sm:min-h-[690px] sm:grid-cols-[220px_1fr]">
        <aside className="relative flex min-w-0 flex-col justify-between overflow-hidden bg-[linear-gradient(180deg,#06111a_0%,#173345_28%,#a6b7bd_53%,#4f7487_74%,#07111b_100%)] px-3 py-4 text-white max-sm:min-h-[84px] max-sm:flex-row max-sm:items-center sm:px-7 sm:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_54%,rgba(255,255,255,.34),transparent_26%),radial-gradient(circle_at_84%_78%,rgba(132,185,211,.32),transparent_42%)]" />
          <div className="pointer-events-none absolute -right-28 top-52 h-72 w-72 rounded-full border border-white/38" />
          <div className="pointer-events-none absolute -right-16 bottom-28 h-40 w-64 rotate-12 rounded-[50%] border border-white/28" />
          <div className="pointer-events-none absolute -left-16 bottom-16 h-28 w-72 -rotate-6 rounded-[50%] border border-white/24" />

          <div className="relative flex flex-row items-center gap-3 text-center sm:mt-14 sm:flex-col sm:gap-10">
            <Image
              src="/brands/next-ecommerce-logo-transparent.png"
              alt="Next Ecommerce"
              width={325}
              height={286}
              className="h-auto w-[46px] brightness-0 invert drop-shadow-[0_16px_30px_rgba(0,0,0,.22)] sm:w-[120px]"
              sizes="(max-width: 640px) 46px, 120px"
              unoptimized
            />

            <span className="h-px w-8 bg-white/50 sm:w-16" />

            <Image
              src="/brands/avant-mark-transparent.png"
              alt="Avant I.A"
              width={405}
              height={406}
              className="h-9 w-9 object-contain drop-shadow-[0_12px_28px_rgba(255,255,255,.18)] sm:h-20 sm:w-20"
              sizes="(max-width: 640px) 36px, 80px"
              unoptimized
            />

            <span className="h-px w-8 bg-white/50 sm:w-16" />

            <Image
              src="/brands/elevate-ecom-logo-transparent.png"
              alt="Elevate Ecom."
              width={769}
              height={360}
              className="h-auto w-[48px] drop-shadow-[0_16px_34px_rgba(0,0,0,.22)] sm:w-[132px]"
              sizes="(max-width: 640px) 48px, 132px"
              unoptimized
            />
          </div>

          <div className="relative font-general text-[8px] font-bold uppercase leading-relaxed tracking-[0.07em] sm:text-base">
            <span className="block">{start}</span>
            <span className="my-1 block">-</span>
            <span className="block">{end}</span>
          </div>
        </aside>

        <div className="min-w-0 px-2.5 py-4 sm:px-9 sm:py-12 lg:px-11">
          <div className="mb-3 sm:mb-5">
            <CompanyHeader
              label={item.subtitle}
              textClassName="text-[#ff6a00]"
              logos={[
                {
                  src: "/brands/next-ecommerce-badge.png",
                  width: 400,
                  height: 400,
                  imageClassName: "h-full w-full rounded-2xl object-cover",
                  badgeClassName: "overflow-hidden bg-transparent",
                  sizes: "(max-width: 640px) 44px, 56px",
                },
                {
                  src: "/brands/avant-mark-transparent.png",
                  width: 405,
                  height: 406,
                  imageClassName: "h-6 w-6 sm:h-7 sm:w-7",
                  badgeClassName: "bg-[#eef4f3]",
                  sizes: "(max-width: 640px) 24px, 28px",
                },
                {
                  src: "/brands/elevate-ecom-logo-transparent.png",
                  width: 769,
                  height: 360,
                  imageClassName: "h-auto w-8 sm:w-11",
                  badgeClassName: "bg-[#173345] px-1",
                  sizes: "(max-width: 640px) 32px, 44px",
                },
              ]}
            />
          </div>

          <div className="mb-3 flex items-center gap-2 font-general text-[8px] font-bold uppercase tracking-[0.12em] text-[#8a8a8a] sm:mb-6 sm:text-xs">
            <Calendar size={12} />
            {item.period}
          </div>

          <h3 className="max-w-full whitespace-pre-line break-words font-clash text-[clamp(1.05rem,3.95vw,1.42rem)] font-semibold leading-[1.06] tracking-normal text-[#111] text-balance sm:text-[clamp(1.28rem,2.1vw,1.74rem)] lg:text-[clamp(1.42rem,1.7vw,1.92rem)]">
            {item.title}
          </h3>
          <div className="mt-3 h-1 w-12 rounded-full bg-[#0d2635] sm:mt-5 sm:w-16" />

          <p className="mt-3 line-clamp-[9] font-general text-[10px] leading-[1.45] text-[#242424] text-pretty sm:mt-8 sm:text-[16px] sm:leading-[1.9]">
            {item.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-7 sm:gap-3">
            {item.tech?.map((tag) => (
              <StackChip
                key={tag}
                label={tag}
                className="min-h-8 border-transparent bg-[#f1f3f4] text-[9px] font-bold uppercase tracking-[0.06em] text-[#242424] shadow-[inset_0_0_0_1px_rgba(0,0,0,.04)] sm:min-h-9 sm:px-4 sm:text-xs"
              />
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-1.5 sm:mt-6 sm:grid-cols-3 sm:gap-3">
            {["Operations", "Performance", "Scale"].map((label) => (
              <StackChip
                key={label}
                label={label}
                className="min-h-10 justify-center border-transparent bg-[#f5f5f5] px-3 text-center text-[9px] font-bold uppercase tracking-[0.04em] text-[#1b1b1b] sm:text-xs"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineTrackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const paintCoverRef = useRef<HTMLDivElement>(null);
  const lineStateRef = useRef({
    currentR: 255,
    currentG: 106,
    currentB: 0,
    targetR: 255,
    targetG: 106,
    targetB: 0,
    currentPct: 0,
    targetPct: 0,
    isDark: false,
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const getLineSections = () => gsap.utils.toArray<HTMLElement>("[data-journey-line]");

    const getThemeAtScroll = () => {
      const lineSections = getLineSections();
      const mid = window.scrollY + window.innerHeight * 0.5;
      let idx = 0;
      let blend = 0;

      lineSections.forEach((sec, i) => {
        const top = sec.getBoundingClientRect().top + window.scrollY;
        const height = Math.max(sec.offsetHeight, 1);
        const rel = clamp01((mid - top) / height);

        if (mid >= top) {
          idx = i;
          blend = rel > 0.65 ? clamp01((rel - 0.65) / 0.35) : 0;
        }
      });

      const currentNode = lineSections[idx];
      const nextNode = lineSections[Math.min(idx + 1, lineSections.length - 1)] ?? currentNode;
      const currentColor = currentNode?.dataset.line ?? timelineColors[idx] ?? "#ff6a00";
      const nextColor = nextNode?.dataset.line ?? timelineColors[Math.min(idx + 1, timelineColors.length - 1)] ?? currentColor;
      const currentDark = currentNode?.dataset.dark === "1";
      const nextDark = nextNode?.dataset.dark === "1";
      const ca = hexToRgb(currentColor);
      const cb = hexToRgb(nextColor);

      return {
        r: lerp(ca.r, cb.r, blend),
        g: lerp(ca.g, cb.g, blend),
        b: lerp(ca.b, cb.b, blend),
        dark: blend > 0.5 ? nextDark : currentDark,
      };
    };

    const updateLineTargets = () => {
      if (!lineTrackRef.current) return;

      const trackRect = lineTrackRef.current.getBoundingClientRect();
      const state = lineStateRef.current;
      const theme = getThemeAtScroll();

      state.targetPct = clamp01((window.innerHeight * 0.5 - trackRect.top) / Math.max(trackRect.height, 1));
      state.targetR = theme.r;
      state.targetG = theme.g;
      state.targetB = theme.b;
      state.isDark = theme.dark;
    };

    const paintLine = () => {
      if (!lineRef.current || !lineTrackRef.current) return;

      const state = lineStateRef.current;
      state.currentR = lerp(state.currentR, state.targetR, TIMELINE_LINE_SMOOTH);
      state.currentG = lerp(state.currentG, state.targetG, TIMELINE_LINE_SMOOTH);
      state.currentB = lerp(state.currentB, state.targetB, TIMELINE_LINE_SMOOTH);
      state.currentPct = lerp(state.currentPct, state.targetPct, TIMELINE_LINE_SMOOTH);

      const r = Math.round(state.currentR);
      const g = Math.round(state.currentG);
      const b = Math.round(state.currentB);
      const rgb = `${r}, ${g}, ${b}`;

      lineTrackRef.current.style.background = state.isDark ? "rgba(255, 255, 255, 0.16)" : "rgba(17, 17, 17, 0.08)";
      lineRef.current.style.height = `${state.currentPct * 100}%`;
      lineRef.current.style.background = `linear-gradient(to bottom, rgba(${rgb}, 0.3), rgb(${rgb}))`;
      lineRef.current.style.boxShadow = `0 0 20px rgba(${rgb}, 0.22)`;
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom 30%",
        scrub: 1,
      },
    });

    if (paintCoverRef.current) {
      gsap.set(paintCoverRef.current, { yPercent: 0 });
      tl.to(paintCoverRef.current, { yPercent: 100, ease: "none" }, 0);
    }

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

    let rafId = 0;
    const renderLoop = () => {
      updateLineTargets();
      paintLine();
      rafId = requestAnimationFrame(renderLoop);
    };

    rafId = requestAnimationFrame(renderLoop);
    window.addEventListener("scroll", updateLineTargets, { passive: true });
    window.addEventListener("resize", updateLineTargets, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", updateLineTargets);
      window.removeEventListener("resize", updateLineTargets);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="journey" className="relative overflow-hidden bg-white py-16 selection:bg-[#ff6a00] selection:text-white sm:py-32">
      

      {/* Grid Pattern global de fundo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(17,17,17,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

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
          <div className="mt-7 max-w-[920px] border-l-4 border-[#ff6a00] bg-[#fff7f1] px-5 py-5 shadow-[0_18px_50px_rgba(255,106,0,.08)] sm:px-7 sm:py-6">
            <p className="font-general text-[clamp(1.05rem,2.4vw,1.55rem)] font-semibold leading-relaxed text-[#111] text-pretty">
              Me chamo <span className="text-[#ff6a00]">Luiz Henrique</span>, tenho 24 anos, sou de Santa Catarina, e minha trajetória profissional nunca foi exatamente linear. Foi justamente essa combinação de contextos que moldou a forma como penso tecnologia hoje.
            </p>
          </div>
        </div>

        {/* Timeline Path */}
        <div className="relative pb-24 sm:pb-40">
          {/* Main Line Path */}
          <div ref={lineTrackRef} className="absolute left-4 top-6 z-20 h-[calc(100%-1.5rem)] w-[3px] overflow-visible rounded-full bg-black/5 sm:left-1/2 sm:-translate-x-1/2">
            <div
              ref={lineRef}
              data-journey-line-fill="1"
              className="h-0 w-full origin-top rounded-full [will-change:height,background,box-shadow]"
              style={{ background: timelineGradient }}
            />
          </div>

          <div ref={paintCoverRef} className="pointer-events-none absolute left-1/2 top-0 z-[1] h-[125%] w-[220vw] -translate-x-1/2 bg-white will-change-transform">
            <div className="absolute -top-40 left-0 h-40 w-full bg-gradient-to-b from-transparent via-white/85 to-white blur-sm" />
            <div className="absolute -top-72 left-1/2 h-72 w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_16%_64%,rgba(255,255,255,.95),transparent_42%),radial-gradient(ellipse_at_48%_44%,rgba(255,255,255,.9),transparent_48%),radial-gradient(ellipse_at_82%_58%,rgba(255,255,255,.96),transparent_40%)] blur-[32px]" />
          </div>

          {/* Milestone List */}
          <div className="space-y-16 sm:space-y-32">
            {milestones.map((item, i) => (
              <div
                key={i}
                data-journey-index={i}
                data-journey-line="1"
                data-line={timelineColors[i] ?? "#ff6a00"}
                data-dark={timelineDarkSections[i] ? "1" : "0"}
                className={`relative flex flex-col items-start sm:flex-row ${
                  i % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {timelineBackgroundClasses[i] ? (
                  <div
                    className={`pointer-events-none absolute left-1/2 top-1/2 z-0 h-[calc(100%+80vh)] w-screen -translate-x-1/2 -translate-y-1/2 blur-[18px] ${timelineBackgroundClasses[i]} opacity-75 [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,.38)_16%,black_36%,black_64%,rgba(0,0,0,.32)_84%,transparent_100%)]`}
                  />
                ) : null}

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
                  ) : i === 3 ? (
                    <div data-journey-scene="4">
                      <StudioFeaturedCard item={item} />
                    </div>
                  ) : i === 4 ? (
                    <div data-journey-scene="0">
                      <ColcciAmcFeaturedCard item={item} />
                    </div>
                  ) : i === 5 ? (
                    <div data-journey-scene="0">
                      <CertificationFeaturedCard item={item} variant="ai-cloud" />
                    </div>
                  ) : i === 6 ? (
                    <div data-journey-scene="5">
                      <AvantFeaturedCard item={item} />
                    </div>
                  ) : i === 7 ? (
                    <div data-journey-scene="5">
                      <ElevaterCaseCard item={item} />
                    </div>
                  ) : i === 8 ? (
                    <div data-journey-scene="0">
                      <CertificationFeaturedCard item={item} variant="microsoft" />
                    </div>
                  ) : (
                    <div data-journey-scene="0" className={`journey-card relative rounded-[20px] border-2 ${
                      item.type === "cert-cluster" 
                        ? "border-[#ff6a00]/20 bg-[#ff6a00]/5" 
                        : item.subtitle.includes("Avant") 
                          ? "border-[#ff6a00]/15 bg-white" 
                          : "border-black/5 bg-white"
                    } p-4 shadow-[0_15px_40px_rgba(0,0,0,0.02)] transition-all hover:border-[#ff6a00]/40 sm:rounded-[32px] sm:p-10`}>
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
                      <h3 className={compactTitleClassName}>
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
                              <StackChip
                                key={t}
                                label={t}
                                className="min-h-6 border-transparent bg-[#f5f5f5] px-2.5 py-1 text-[9px] font-bold uppercase tracking-tight text-[#666]"
                              />
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
