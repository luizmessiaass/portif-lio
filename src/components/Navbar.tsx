"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BriefcaseBusiness,
  Check,
  Home,
  Mail,
  Menu,
  MessageCircle,
  Route,
  UserRound,
  X,
} from "lucide-react";

type NavLink = {
  name: string;
  href: string;
  Icon: ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
};

const navLinks: NavLink[] = [
  { name: "Início", href: "/#hero", Icon: Home },
  { name: "Sobre", href: "/#about", Icon: UserRound },
  { name: "Jornada", href: "/#journey", Icon: Route },
  { name: "Projetos", href: "/projetos", Icon: BriefcaseBusiness },
  { name: "Contato", href: "/#contact", Icon: MessageCircle },
];

export function Navbar() {
  const pathname = usePathname();
  const [time, setTime] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hiddenByScroll, setHiddenByScroll] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const navVisible = mobileOpen || !hiddenByScroll;

  useEffect(() => {
    if (!window.matchMedia("(min-width: 640px)").matches) return;

    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("pt-BR", {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        setScrolled(currentY > 64);
        if (currentY < 96) {
          setHiddenByScroll(false);
        } else if (delta > 10) {
          setHiddenByScroll(true);
        } else if (delta < -10) {
          setHiddenByScroll(false);
        }

        lastScrollY.current = Math.max(currentY, 0);
        ticking = false;
      });

      ticking = true;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopyEmail = () => {
    void navigator.clipboard.writeText("Luiz.messiaass@gmail.com");
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  };

  const handleNavClick = () => {
    setMobileOpen(false);
    setHiddenByScroll(false);
  };

  const isActive = (href: string) =>
    href === "/projetos" ? pathname.startsWith("/projetos") : pathname === "/" && href === "/#hero";

  return (
    <>
      <div
        className={`fixed bottom-20 right-4 z-[9999] flex items-center gap-3 rounded-full border border-white/10 bg-[#111] px-5 py-2.5 text-white shadow-2xl transition-all duration-300 sm:bottom-8 sm:right-20 ${
          toastVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <span className="font-general text-sm">E-mail copiado!</span>
        <Check size={16} className="text-[#ff4d00]" />
      </div>

      <nav
        data-cursor="hover"
        aria-label="Navegação principal"
        className={`fixed bottom-4 right-4 z-[9999] flex max-w-[calc(100vw-2rem)] flex-col items-end transition-all duration-300 sm:hidden ${
          navVisible
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        {mobileOpen ? (
          <div className="mb-2 w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-[26px] border border-white/10 bg-[#111]/95 p-2 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map(({ name, href, Icon }) => (
                <Link
                  key={name}
                  href={href}
                  onClick={handleNavClick}
                  className={`flex min-h-12 items-center gap-2 rounded-[18px] px-3 font-general text-[12px] font-semibold transition-colors ${
                    isActive(href) ? "bg-white text-[#111]" : "text-white/82 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  <Icon size={17} strokeWidth={2.1} />
                  {name}
                </Link>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                handleCopyEmail();
                setMobileOpen(false);
              }}
              className="mt-1 flex min-h-12 w-full items-center justify-center gap-2 rounded-[18px] bg-white font-general text-[12px] font-semibold text-[#111] transition-colors hover:bg-[#ff4d00] hover:text-white"
            >
              <Mail size={17} strokeWidth={2.1} />
              E-mail
            </button>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          className={`inline-flex min-h-12 items-center gap-2 rounded-full border px-4 font-general text-[12px] font-semibold shadow-2xl backdrop-blur-xl transition-colors ${
            scrolled ? "border-white/10 bg-[#111]/92 text-white" : "border-white/15 bg-[#111]/76 text-white"
          }`}
        >
          {mobileOpen ? <X size={18} strokeWidth={2.2} /> : <Menu size={18} strokeWidth={2.2} />}
          {mobileOpen ? "Fechar" : "Menu"}
        </button>
      </nav>

      <nav
        data-cursor="hover"
        aria-label="Navegação principal"
        className={`fixed right-5 top-1/2 z-[9999] hidden -translate-y-1/2 transition-all duration-300 sm:block ${
          navVisible
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-4 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="rounded-full border border-white/10 bg-[#111]/88 p-1.5 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col items-center gap-1">
              {navLinks.map(({ name, href, Icon }) => (
                <Link
                  key={name}
                  href={href}
                  aria-label={name}
                  className={`group/link relative grid h-11 w-11 place-items-center rounded-full transition-colors ${
                    isActive(href) ? "bg-white text-[#111]" : "text-white/78 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  <Icon size={18} strokeWidth={2.1} />
                  <span className="pointer-events-none absolute right-[calc(100%+0.65rem)] top-1/2 -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-full border border-white/10 bg-[#111] px-3 py-1.5 font-general text-[11px] font-semibold text-white opacity-0 shadow-xl transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100 group-focus-visible/link:translate-x-0 group-focus-visible/link:opacity-100">
                    {name}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mx-auto my-1.5 h-px w-6 bg-white/10" />

            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copiar e-mail"
              className="group/link relative grid h-11 w-11 place-items-center rounded-full bg-white text-[#111] transition-colors hover:bg-[#ff4d00] hover:text-white"
            >
              <Mail size={18} strokeWidth={2.1} />
              <span className="pointer-events-none absolute right-[calc(100%+0.65rem)] top-1/2 -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-full border border-white/10 bg-[#111] px-3 py-1.5 font-general text-[11px] font-semibold text-white opacity-0 shadow-xl transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100 group-focus-visible/link:translate-x-0 group-focus-visible/link:opacity-100">
                E-mail
              </span>
            </button>
          </div>

          <span className="hidden rounded-full border border-black/5 bg-white/80 px-2.5 py-1 font-general text-[10px] font-semibold tabular-nums text-[#666] shadow-lg backdrop-blur lg:block">
            {time || "00:00"} SP
          </span>
        </div>
      </nav>
    </>
  );
}
