"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Monitor, 
  Database, 
  ShoppingCart, 
  TrendingUp, 
  Cpu, 
  Zap,
  Award,
  BrainCircuit,
  Calendar
} from "lucide-react";

interface Milestone {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  tech?: string[];
  icon: any;
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
    icon: Monitor
  },
  {
    type: "job",
    title: "Automação e Visão Sistêmica",
    subtitle: "Bunge & BRF",
    period: "Set 2022 – Fev 2024",
    description: "Depois, passei por ambientes bem diferentes. Na Bunge e na BRF, mergulhei em automação de processos fiscais e contábeis, lidando com VBA, SAP, SQL, dados em alta volumetria, auditoria e rotinas críticas. Foi ali que comecei a desenvolver uma visão mais sistêmica: antes de automatizar ou desenvolver qualquer solução, é preciso entender o fluxo, os riscos, os usuários envolvidos e o impacto que aquilo gera na operação.",
    tech: ["VBA", "SAP", "SQL", "High Volume Data"],
    icon: Database
  },
  {
    type: "job",
    title: "E-commerce e Integração de Sistemas",
    subtitle: "Mapfit Group",
    period: "Fev 2024 – Dez 2024",
    description: "Com o tempo, minha atuação foi se aproximando cada vez mais do digital, do e-commerce e da construção de soluções integradas. No Mapfit Group, desenvolvi e estruturei uma operação em WordPress/WooCommerce, integrando site, marketplaces como Mercado Livre, Shopee e Magalu, além do Bling ERP. Essa experiência reforçou algo que se tornou central na minha forma de trabalhar: tecnologia não pode viver isolada. Ela precisa conectar vendas, estoque, faturamento, pedidos, dados e tomada de decisão.",
    tech: ["WordPress", "WooCommerce", "Bling ERP", "Marketplaces"],
    icon: ShoppingCart
  },
  {
    type: "job",
    title: "Liderança e Escala Operacional",
    subtitle: "Studio416x & Revenda de Calçados",
    period: "Jan 2024 – Jun 2025",
    description: "Essa visão ganhou ainda mais força em experiências de liderança operacional. No Studio416x, conduzi operações de e-commerce com mais de 26 marcas ativas, olhando para margem, previsibilidade, escala e performance. Na Revenda de Calçados, liderei uma transformação digital do zero, reestruturando modelo comercial, implementando dropshipping, consolidando presença em marketplaces e conectando estoque, vendas e faturamento em uma operação integrada — chegando a entregar crescimento de até R$ 100 mil mensais em faturamento.",
    impact: "Crescimento de R$ 100 mil mensais em faturamento.",
    tech: ["Operations", "Performance", "Scale", "Dropshipping"],
    icon: TrendingUp
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
      { name: "Couchbase Associate Architect", date: "Nov/25", color: "#ED1F24" }
    ]
  },
  {
    type: "job",
    title: "Arquitetura Full Stack & Liderança Técnica",
    subtitle: "Avant I.A (Grupo Next Ecommerce)",
    period: "Set 2025 – Maio 2026",
    description: "Uma das experiências mais marcantes veio no Grupo Next Ecommerce, atuando na Avant I.A. Foi ali que consolidei minha atuação como Desenvolvedor Full Stack com mentalidade de liderança técnica, trabalhando com Next.js, React, TypeScript, Supabase, PostgreSQL, integrações com APIs do Mercado Livre e Shopee, infraestrutura em VPS e soluções com IA aplicada usando Claude e OpenAI. Mais do que apenas desenvolver features, passei a atuar em decisões de arquitetura, modelagem de dados, integrações críticas, deploy, performance, segurança e evolução de produto.",
    tech: ["Next.js", "TypeScript", "Supabase", "OpenAI/Claude"],
    icon: Cpu
  },
  {
    type: "job",
    title: "Elevater: De Ferramenta a Produto",
    subtitle: "Avant I.A",
    period: "Case de Sucesso",
    description: "Entre os projetos desse período, o que mais me marcou foi o Elevater: uma plataforma construída do zero para substituir uma ferramenta externa que custava cerca de R$ 30 mil por mês. O projeto saiu do papel, foi para produção e depois evoluiu para um produto comercializável. Foi uma experiência que exigiu não só execução técnica, mas também visão de produto, priorização, tomada de decisão, entendimento de negócio e responsabilidade sobre a qualidade da solução entregue.",
    impact: "Economia direta de R$ 30 mil/mês.",
    tech: ["Product Architecture", "Cost Optimization", "VPS"],
    icon: Zap
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
      { name: "Azure Fundamentals", date: "Jan/26", color: "#00A4EF" }
    ]
  }
];

export function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      }
    });

    tl.to(lineRef.current, { height: "100%", ease: "none" }, 0);
    tl.to(orbRef.current, { top: "100%", ease: "none" }, 0);

    const cards = gsap.utils.toArray(".journey-card");
    cards.forEach((card: any) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="journey" className="relative bg-white py-24 sm:py-32 selection:bg-[#ff6a00] selection:text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-24 sm:mb-32">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-[1px] w-12 bg-black/20" />
            <span className="font-general text-[12px] font-bold uppercase tracking-[0.2em] text-[#888]">
              / Trajetória Profissional
            </span>
          </div>
          <h2 className="font-clash text-[clamp(2.5rem,8vw,5.5rem)] font-semibold leading-[0.96] tracking-tight text-[#111]">
            A Trajetória <br /> <span className="text-[#ff6a00]">(In)</span>comum.
          </h2>
          <p className="mt-8 max-w-[800px] font-general text-lg leading-relaxed text-[#555]">
            Me chamo Luiz Henrique, Tenho 24 anos, sou de Santa Catarina, e minha trajetória profissional nunca foi exatamente linear — e foi justamente essa combinação de contextos que moldou a forma como penso tecnologia hoje.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-[2px] bg-black/5 sm:left-1/2 sm:-translate-x-1/2">
            <div ref={lineRef} className="h-0 w-full bg-[#ff6a00] origin-top" />
            <div ref={orbRef} className="absolute -left-[4px] top-0 h-3 w-3 rounded-full bg-white border-2 border-[#ff6a00] shadow-[0_0_10px_rgba(255,106,0,0.5)] z-20" />
          </div>

          <div className="space-y-24 sm:space-y-32">
            {milestones.map((item, i) => (
              <div key={i} className={`relative flex flex-col sm:flex-row items-start ${
                i % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}>
                <div className="absolute left-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#ff6a00] bg-white sm:left-1/2" />

                <div className="w-full sm:w-[45%] pl-16 sm:pl-0">
                  <div className={`journey-card relative rounded-[32px] border ${
                    item.type === 'cert-cluster' ? 'border-[#ff6a00]/10 bg-[#ff6a00]/5' : 'border-black/5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.03)]'
                  } p-6 sm:p-10 transition-all hover:border-[#ff6a00]/20`}>
                    
                    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                          item.type === 'cert-cluster' ? 'bg-[#ff6a00]/20 text-[#ff6a00]' : 'bg-[#fafafa] text-[#111]'
                        }`}>
                          <item.icon size={24} strokeWidth={1.5} />
                        </div>
                        <div>
                          <span className="block font-general text-xs font-bold uppercase tracking-widest text-[#ff6a00]">
                            {item.subtitle}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 font-general text-[11px] font-bold uppercase tracking-widest text-[#888]">
                        <Calendar size={12} />
                        {item.period}
                      </div>
                    </div>

                    <h3 className="mb-4 font-clash text-2xl font-semibold text-[#111] sm:text-3xl">
                      {item.title}
                    </h3>

                    {item.type === 'job' ? (
                      <>
                        <p className="font-general text-base leading-relaxed text-[#666]">
                          {item.description}
                        </p>

                        {item.impact && (
                          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#ff6a00]/5 px-5 py-2.5 border border-[#ff6a00]/10">
                            <TrendingUp size={16} className="text-[#ff6a00]" />
                            <span className="font-general text-sm font-bold text-[#ff6a00]">
                              {item.impact}
                            </span>
                          </div>
                        )}

                        <div className="mt-8 flex flex-wrap gap-2">
                          {item.tech?.map((t) => (
                            <span key={t} className="rounded-full bg-[#f5f5f5] px-3 py-1 font-general text-[10px] font-bold uppercase tracking-tight text-[#444]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className="grid grid-cols-1 gap-3">
                        {item.certs?.map((cert, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-2xl bg-white/50 p-4 border border-black/5 hover:bg-white transition-colors">
                            <div className="flex items-center gap-4">
                              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: cert.color }} />
                              <span className="font-general text-sm font-medium text-[#444]">{cert.name}</span>
                            </div>
                            <span className="font-general text-[10px] font-bold text-[#999]">{cert.date}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Smooth Transition to Next Section */}
        <div className="mt-48 pb-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-12 flex justify-center">
              <div className="h-24 w-[2px] bg-gradient-to-b from-[#ff6a00] to-transparent" />
            </div>
            
            <h3 className="font-clash text-4xl font-semibold text-[#111] sm:text-5xl">
              Visão de <span className="text-[#ff6a00]">Tech Lead</span>
            </h3>
            
            <div className="mt-10 font-general text-lg leading-relaxed text-[#555]">
              <p>
                Hoje, me vejo como um profissional em transição natural para uma atuação de <span className="text-[#111] font-bold">Tech Lead</span>: alguém que continua próximo ao código, mas que também pensa em arquitetura, produto, operação, pessoas e escala. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
