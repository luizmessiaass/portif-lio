import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, FolderGit2, Layers3, Monitor } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { getProjectBySlug, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projeto não encontrado | Luiz Messias",
    };
  }

  return {
    title: `${project.title} | Projeto`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const heroImage = project.coverImage ?? project.gallery[0]?.src;
  const intro = project.intro ?? project.description;
  const context = project.context ?? project.overview;
  const origin = project.origin ?? project.solution;
  const galleryLabel = project.gallery.length === 1 ? "1 tela mapeada" : `${project.gallery.length} telas mapeadas`;

  return (
    <>
      <Navbar />
      <main className="relative min-h-dvh px-[5vw] pb-36 pt-16 sm:pt-20">
        <article className="mx-auto flex w-full max-w-[1320px] flex-col gap-16 px-2 sm:px-6">
          <header className="flex flex-col gap-10 border-b border-black/10 pb-10">
            <Link
              href="/projetos"
              data-cursor="hover"
              className="inline-flex min-h-[44px] w-fit items-center gap-2 font-general text-sm font-semibold uppercase tracking-[0.18em] text-[#666] transition-colors hover:text-[#ff6a00]"
            >
              <ArrowLeft size={16} />
              Voltar para projetos
            </Link>

            <div className="grid gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-end">
              <div>
                <span className="mb-5 inline-flex items-center gap-2 font-general text-[12px] font-semibold uppercase tracking-[0.2em] text-[#888]">
                  <Layers3 size={15} />
                  {project.category} / {project.shortCategory}
                </span>
                <h1 className="font-clash text-[clamp(3.25rem,9vw,9rem)] font-semibold leading-[0.9] tracking-normal text-[var(--color-dark)] text-balance">
                  {project.title}
                </h1>
              </div>

              <div className="flex flex-col gap-5">
                <p className="font-general text-[18px] leading-relaxed text-[#555] text-pretty">
                  {project.description}
                </p>
                <p className="border-l-2 border-[#ff6a00] pl-4 font-general text-sm font-semibold uppercase tracking-[0.14em] text-[#111]">
                  {project.impact}
                </p>
              </div>
            </div>
          </header>

          <section className={`relative overflow-hidden rounded-[32px] bg-gradient-to-br ${project.tone} shadow-[0_30px_90px_rgba(0,0,0,0.14)]`}>
            <div className="relative aspect-[16/10] w-full md:aspect-[1850/872]">
              {heroImage ? (
                <Image
                  src={heroImage}
                  alt={project.coverAlt ?? project.title}
                  fill
                  priority
                  sizes="90vw"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0">
                  <div className="absolute inset-8 rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-sm" />
                  <div className="absolute bottom-10 left-10 right-10 grid grid-cols-3 gap-4">
                    <div className="h-24 rounded-[24px] bg-white/20" />
                    <div className="h-24 rounded-[24px] bg-white/10" />
                    <div className="h-24 rounded-[24px] bg-white/20" />
                  </div>
                </div>
              )}
            </div>
          </section>

          <section className="grid gap-8 border-b border-black/10 pb-14 lg:grid-cols-[0.34fr_0.66fr]">
            <div className="flex flex-col gap-6">
              <div>
                <span className="mb-4 block font-general text-[12px] font-semibold uppercase tracking-[0.2em] text-[#888]">
                  / 01 Texto inicial
                </span>
                <h2 className="font-clash text-4xl font-semibold leading-tight tracking-normal text-[#111] sm:text-5xl">
                  Visão geral
                </h2>
              </div>

              <aside className="rounded-[24px] border border-black/5 bg-[#111] p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                <span className="mb-4 flex items-center gap-2 font-general text-[12px] font-semibold uppercase tracking-[0.2em] text-white/55">
                  <FolderGit2 size={15} />
                  Fonte
                </span>
                <p className="break-words font-general text-sm leading-relaxed text-white/80">
                  {project.sourcePath}
                </p>
              </aside>
            </div>

            <div className="flex flex-col gap-8">
              <p className="font-general text-[clamp(1.35rem,2vw,2.15rem)] leading-[1.35] text-[#222] text-pretty">
                {intro}
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {project.examples.map((example) => (
                  <div key={example} className="rounded-[22px] border border-black/5 bg-white p-5 shadow-[0_14px_38px_rgba(0,0,0,0.04)]">
                    <Monitor className="mb-4 text-[#ff6a00]" size={21} />
                    <p className="font-general text-xs font-semibold uppercase leading-relaxed tracking-[0.14em] text-[#111]">
                      {example}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span key={tag} className="rounded-full border border-black/10 bg-[#f9f9f9] px-3 py-2 font-general text-xs font-semibold text-[#333]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-8 border-b border-black/10 pb-14 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <span className="mb-4 block font-general text-[12px] font-semibold uppercase tracking-[0.2em] text-[#888]">
                / 02 Contexto
              </span>
              <h2 className="font-clash text-4xl font-semibold leading-tight tracking-normal text-[#111] sm:text-5xl">
                Por que o projeto existe
              </h2>
            </div>

            <div className="grid gap-5">
              <article className="rounded-[26px] border border-black/5 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.05)] sm:p-9">
                <span className="mb-4 block font-general text-[12px] font-semibold uppercase tracking-[0.18em] text-[#888]">
                  Contexto do projeto
                </span>
                <p className="font-general text-[18px] leading-relaxed text-[#444] text-pretty">
                  {context}
                </p>
              </article>

              <article className="rounded-[26px] border border-black/5 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.05)] sm:p-9">
                <span className="mb-4 block font-general text-[12px] font-semibold uppercase tracking-[0.18em] text-[#888]">
                  Como nasceu
                </span>
                <p className="font-general text-[18px] leading-relaxed text-[#444] text-pretty">
                  {origin}
                </p>
              </article>

              <div className="grid gap-5 md:grid-cols-2">
                <article className="rounded-[24px] border border-black/5 bg-[#f8f8f8] p-6">
                  <span className="mb-3 block font-general text-[12px] font-semibold uppercase tracking-[0.18em] text-[#888]">
                    Problema
                  </span>
                  <p className="font-general text-[16px] leading-relaxed text-[#555]">
                    {project.challenge}
                  </p>
                </article>
                <article className="rounded-[24px] border border-black/5 bg-[#f8f8f8] p-6">
                  <span className="mb-3 block font-general text-[12px] font-semibold uppercase tracking-[0.18em] text-[#888]">
                    Solução
                  </span>
                  <p className="font-general text-[16px] leading-relaxed text-[#555]">
                    {project.solution}
                  </p>
                </article>
              </div>
            </div>
          </section>

          {project.gallery.length > 0 ? (
            <section className="grid gap-8 border-b border-black/10 pb-14 lg:grid-cols-[0.34fr_0.66fr]">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <span className="mb-4 block font-general text-[12px] font-semibold uppercase tracking-[0.2em] text-[#888]">
                  / 03 Telas do projeto
                </span>
                <h2 className="font-clash text-4xl font-semibold leading-tight tracking-normal text-[#111] sm:text-5xl">
                  {galleryLabel}
                </h2>
                {project.captureNote ? (
                  <p className="mt-5 font-general text-[15px] leading-relaxed text-[#666] text-pretty">
                    {project.captureNote}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-8">
                {project.gallery.map((image, index) => (
                  <figure key={image.src} className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                    <div className="flex items-center justify-between gap-4 border-b border-black/5 px-5 py-4 sm:px-6">
                      <span className="font-general text-[11px] font-semibold uppercase tracking-[0.18em] text-[#888]">
                        Tela {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="line-clamp-1 text-right font-general text-xs font-semibold uppercase tracking-[0.12em] text-[#222]">
                        {image.alt}
                      </span>
                    </div>
                    <div className="relative aspect-[16/10] w-full bg-[#eeeeee]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="90vw"
                        className="object-contain"
                      />
                    </div>
                    <figcaption className="border-t border-black/5 p-5 font-general text-sm leading-relaxed text-[#555] sm:p-6">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ) : null}

          <section className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <span className="mb-4 block font-general text-[12px] font-semibold uppercase tracking-[0.2em] text-[#888]">
                / 04 Detalhamento
              </span>
              <h2 className="font-clash text-4xl font-semibold leading-tight tracking-normal text-[#111] sm:text-5xl">
                O que o produto cobre
              </h2>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[26px] border border-black/5 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.05)] sm:p-9">
                <span className="mb-5 block font-general text-[12px] font-semibold uppercase tracking-[0.18em] text-[#888]">
                  Destaques
                </span>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3 font-general text-sm leading-relaxed text-[#444]">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-[#ff6a00]" size={17} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {project.detailSections.map((section) => (
                  <article key={section.title} className="rounded-[24px] border border-black/5 bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.04)]">
                    <span className="mb-3 block font-general text-[12px] font-semibold uppercase tracking-[0.18em] text-[#888]">
                      {section.title}
                    </span>
                    <p className="font-general text-[15px] leading-relaxed text-[#555]">
                      {section.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <Link
            href="/projetos"
            data-cursor="hover"
            className="group mb-6 inline-flex min-h-[56px] w-fit items-center gap-3 rounded-full bg-[#111] px-6 font-general text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#ff6a00]"
          >
            Ver outros projetos
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </article>
      </main>
    </>
  );
}
