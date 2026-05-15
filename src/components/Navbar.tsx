"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [time, setTime] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const navVisible = !isHome || scrolled;

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
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.45);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Luiz.messiaass@gmail.com");
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  };

  const navLinks = [
    { name: "Início", href: "/#hero" },
    { name: "Sobre", href: "/#about" },
    { name: "Projetos", href: "/projetos" },
    { name: "Contato", href: "/#contact" },
  ];

  return (
    <>
      <div
        className={`fixed bottom-[90px] left-1/2 -translate-x-1/2 z-[9999] bg-[#111] border border-white/10 text-white px-5 py-2.5 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-3 ${
          toastVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <span className="text-sm font-general">E-mail copiado!</span>
        <Check size={16} className="text-[#ff4d00]" />
      </div>

      <nav
        data-cursor="hover"
        className={`fixed bottom-5 left-2 right-2 z-[9999] max-w-[calc(100vw-1rem)] translate-x-0 overflow-hidden rounded-full p-1.5 shadow-2xl backdrop-blur-xl transition-all duration-500 sm:bottom-8 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:p-2 sm:hover:scale-[1.02] ${
          scrolled
            ? "bg-[#111]/90 border border-white/10"
            : "bg-[#111]/70 border border-white/15"
        } ${
          navVisible
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-5"
        }`}
      >
        <div className="flex min-w-0 items-center justify-center gap-0.5 sm:gap-4">
          <div className="hidden whitespace-nowrap pl-4 font-general text-xs tabular-nums tracking-widest text-[#888] sm:block">
            {time || "00:00:00"} SP
          </div>

          <div className="hidden h-4 w-[1px] bg-white/10 sm:block" />

          <div className="flex min-w-0 items-center gap-0.5 sm:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex min-h-[42px] min-w-0 items-center rounded-full px-2.5 font-general text-[12px] font-medium text-white transition-all duration-300 hover:bg-white/5 hover:text-[#ff4d00] sm:min-h-[44px] sm:px-5 sm:py-2.5 sm:text-[13px]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="h-4 w-[1px] shrink-0 bg-white/10" />

          <button
            onClick={handleCopyEmail}
            className="min-h-[42px] shrink-0 rounded-full bg-white px-3 font-general text-[12px] font-medium text-black transition-all duration-300 hover:bg-[#ff4d00] hover:text-white sm:min-h-[44px] sm:px-5 sm:py-2.5 sm:text-[13px]"
          >
            Email
          </button>
        </div>
      </nav>
    </>
  );
}
