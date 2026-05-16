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
  CheckCircle2,
  Calendar
} from "lucide-react";

interface Milestone {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  highlights?: string[];
  tech?: string[];
  icon: any;
  impact?: string;
}

const milestones: Milestone[] = [
  {
    title: "O Início: Software em Produção",
    subtitle: "Lince Tech",
    period: "Fev 2021 – Mar 2022",
    description: "Foi meu primeiro contato real com software em produção, trabalhando com front-end, correção de bugs e suporte técnico. Ali aprendi que detalhes importam, que experiência do usuário não é apenas uma camada visual e que sistemas precisam ser pensados para funcionar no dia a dia, com estabilidade, clareza e propósito.",
    highlights: ["Foco em estabilidade operacional", "Primeiro contato com UI/UX real", "Resolução de problemas em produção"],
    tech: ["HTML", "CSS", "Javascript", "UI/UX"],
    icon: Monitor
  },
  {
    title: "Visão Sistêmica e Dados",
    subtitle: "Bunge & BRF",
    period: "Set 2022 – Fev 2024",
    description: "Mergulhei em automação de processos fiscais e contábeis, lidando com VBA, SAP, SQL e dados em alta volumetria. Foi ali que comecei a desenvolver uma visão mais sistêmica: antes de automatizar ou desenvolver qualquer solução, é preciso entender o fluxo, os riscos, os usuários envolvidos e o impacto que aquilo gera na operação.",
    highlights: ["Automação de processos críticos", "Manipulação de dados em alta volumetria", "Auditoria e rotinas operacionais"],
    tech: ["SQL", "SAP", "VBA", "RPA", "BI"],
    icon: Database
  },
  {
    title: "Tecnologia que Conecta",
    subtitle: "Mapfit Group",
    period: "Fev 2024 – Dez 2024",
    description: "Desenvolvi e estruturei uma operação integrada em WordPress/WooCommerce, conectando site, marketplaces (Mercado Livre, Shopee, Magalu) e Bling ERP. Essa experiência reforçou algo que se tornou central na minha forma de trabalhar: tecnologia não pode viver isolada. Ela precisa conectar vendas, estoque, faturamento, pedidos e tomada de decisão.",
    highlights: ["Estruturação de operação integrada", "Conexão de múltiplos Marketplaces", "Sincronização de fluxo ERP"],
    tech: ["WordPress", "WooCommerce", "Bling API", "Marketplace API"],
    icon: ShoppingCart
  },
  {
    title: "Liderança e Transformação",
    subtitle: "Studio416x & Revenda de Calçados",
    period: "Jan 2024 – Jun 2025",
    description: "Conduzi operações com mais de 26 marcas e liderei uma transformação digital do zero na Revenda de Calçados, reestruturando o modelo comercial e implementando dropshipping. Olhei para margem, previsibilidade e escala, consolidando a presença em marketplaces e conectando toda a cadeia operacional.",
    impact: "Crescimento de R$ 100 mil mensais em faturamento.",
    highlights: ["Gestão de 26+ marcas ativas", "Implementação de modelo Dropshipping", "Performance e escala de faturamento"],
    tech: ["Business Strategy", "Scale", "Operations", "Marketplaces"],
    icon: TrendingUp
  },
  {
    title: "Consolidação Full Stack & IA",
    subtitle: "Avant I.A (Grupo Next Ecommerce)",
    period: "Set 2025 – Maio 2026",
    description: "Consolidei minha atuação como Desenvolvedor Full Stack com mentalidade de liderança técnica. Mais do que desenvolver features, passei a atuar em decisões de arquitetura, modelagem de dados, infraestrutura VPS e soluções de IA aplicada usando Claude e OpenAI. O foco mudou para performance, segurança e evolução real de produto.",
    highlights: ["Liderança técnica em arquitetura", "Soluções com IA aplicada", "Gestão de infraestrutura e deploy"],
    tech: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Claude API"],
    icon: Cpu
  },
  {
    title: "Elevater: O Case de Produto",
    subtitle: "Avant I.A",
    period: "Destaque Técnico",
    description: "Construí do zero uma plataforma para substituir uma ferramenta externa que custava R$ 30 mil mensais. O projeto saiu do papel, foi para produção e evoluiu para um produto comercializável. Uma experiência que exigiu execução técnica, visão de produto, priorização e total responsabilidade sobre a qualidade da solução entregue.",
    impact: "Economia direta de R$ 30 mil/mês e conversão em produto comercial.",
    highlights: ["Visão de produto de ponta a ponta", "Tomada de decisão arquitetural", "Responsabilidade sobre qualidade e escala"],
    tech: ["Product Vision", "Full Stack", "Cost Optimization", "VPS Architecture"],
    icon: Zap
  }
];

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".milestone-card");
    const icons = gsap.utils.toArray(".milestone-icon");

    // Animação da linha central
    gsap.fromTo(lineRef.current, 
      { height: 0 },
      { 
        height: "100%", 
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: true
        }
      }
    );

    // Animação de entrada dos cards
    cards.forEach((card: any, i) => {
      gsap.fromTo(card, 
        { 
          opacity: 0, 
          x: i % 2 === 0 ? -50 : 50,
          scale: 0.95
        },
        { 
          opacity: 1, 
          x: 0,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animação dos ícones na linha
    icons.forEach((icon: any) => {
      gsap.fromTo(icon,
        { scale: 0, backgroundColor: "#111" },
        { 
          scale: 1, 
          backgroundColor: "#ff6a00",
          duration: 0.5,
          scrollTrigger: {
            trigger: icon,
            start: "top 80%",
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
    <section id="journey" className="py-24 sm:py-32 overflow-hidden" ref={containerRef}>
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mb-20">
          <span className="mb-5 block font-general text-[12px] font-semibold uppercase tracking-[0.2em] text-[#888]">
            / Trajetória Profissional
          </span>
          <h2 className="font-clash text-[clamp(2.5rem,8vw,5.5rem)] font-semibold leading-[0.96] tracking-tight text-[var(--color-dark)]">
            A Trajetória <br /> <span className="text-[#ff6a00]">(In)</span>comum.
          </h2>
          <p className="mt-8 max-w-[700px] font-general text-lg leading-relaxed text-[#555]">
            Me chamo Luiz Henrique, tenho 24 anos e minha trajetória nunca foi linear. 
            Essa combinação de contextos moldou a forma como penso tecnologia hoje: 
            <strong> base técnica, visão de processo e foco em resultados de negócio.</strong>
          </p>
        </div>

        <div className="relative">
          {/* Linha Central (Desktop) */}
          <div className="absolute left-8 top-0 h-full w-[2px] bg-black/5 sm:left-1/2 sm:-translate-x-1/2">
            <div ref={lineRef} className="h-0 w-full bg-[#ff6a00] origin-top" />
          </div>

          <div className="space-y-20 sm:space-y-32">
            {milestones.map((item, i) => (
              <div 
                key={i} 
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  i % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Ícone na Linha */}
                <div className="milestone-icon absolute left-8 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full border-2 border-[#ff6a00] bg-[#111] sm:left-1/2" />

                {/* Card de Conteúdo */}
                <div className="w-full sm:w-[45%] pl-16 sm:pl-0">
                  <div className="milestone-card group rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all hover:border-[#ff6a00]/20 hover:shadow-[0_30px_70px_rgba(255,106,0,0.08)] sm:p-10">
                    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fafafa] text-[#111] group-hover:bg-[#ff6a00] group-hover:text-white transition-colors">
                        <item.icon size={24} />
                      </div>
                      <div className="flex items-center gap-2 font-general text-[11px] font-bold uppercase tracking-widest text-[#888]">
                        <Calendar size={12} />
                        {item.period}
                      </div>
                    </div>

                    <div className="mb-2">
                      <span className="font-general text-xs font-bold uppercase tracking-widest text-[#ff6a00]">
                        {item.subtitle}
                      </span>
                      <h3 className="mt-1 font-clash text-2xl font-semibold text-[#111] sm:text-3xl">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-4 font-general text-base leading-relaxed text-[#666]">
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
                      {item.tech?.map((tag) => (
                        <span key={tag} className="rounded-full bg-[#f5f5f5] px-3 py-1 font-general text-[10px] font-bold uppercase tracking-tight text-[#444]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {item.highlights && (
                      <div className="mt-8 space-y-3 pt-6 border-t border-black/5">
                        {item.highlights.map((h, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 size={16} className="mt-0.5 text-[#ff6a00] shrink-0" />
                            <span className="font-general text-sm text-[#444]">{h}</span>
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

        {/* Closing / Future Vision */}
        <div className="mt-32 rounded-[40px] bg-[#111] p-8 sm:p-16 text-center shadow-2xl">
          <h3 className="font-clash text-3xl font-semibold text-white sm:text-5xl">
            Visão de <span className="text-[#ff6a00]">Tech Lead</span>
          </h3>
          <p className="mx-auto mt-8 max-w-[800px] font-general text-lg leading-relaxed text-[#999]">
            Hoje, me vejo como um profissional em transição natural para uma atuação de Tech Lead: 
            alguém que continua próximo ao código, mas que também pensa em <strong>arquitetura, produto, operação e escala.</strong> 
            Gosto de traduzir necessidades de negócio em sistemas que funcionem não apenas tecnicamente, 
            mas dentro da realidade de quem os utiliza.
          </p>
          <div className="mt-12 flex justify-center">
             <a 
              href="#contact" 
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#ff6a00] px-10 font-general text-base font-bold text-white transition-all hover:scale-105"
            >
              Vamos conversar sobre o seu projeto?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
