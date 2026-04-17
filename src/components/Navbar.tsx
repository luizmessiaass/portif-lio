"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export function Navbar() {
  const [time, setTime] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Luiz.messiaass@gmail.com");
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  };

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Serviços", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
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
        className={`fixed bottom-8 left-2 right-2 z-[9999] translate-x-0 backdrop-blur-xl rounded-full p-2 shadow-2xl flex items-center justify-center gap-1 transition-all duration-500 hover:scale-[1.02] sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:gap-4 ${
          scrolled
            ? "bg-[#111]/90 border border-white/10"
            : "bg-white/5 border border-white/10"
        }`}
      >
        {/* Relógio */}
        <div className="pl-4 text-[#888] text-xs font-general tabular-nums whitespace-nowrap hidden sm:block tracking-widest">
          {time || "00:00:00"} SP
        </div>

        <div className="w-[1px] h-4 bg-white/10 hidden sm:block" />

        {/* Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-3 sm:px-5 sm:py-2.5 text-[13px] font-general font-medium rounded-full text-white transition-all duration-300 hover:bg-white/5 hover:text-[#ff4d00] min-h-[44px] flex items-center"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="w-[1px] h-4 bg-white/10" />

        {/* Action Email */}
        <button
          onClick={handleCopyEmail}
          className="px-4 py-3 sm:px-5 sm:py-2.5 text-[13px] font-general font-medium rounded-full text-black bg-white transition-all duration-300 hover:bg-[#ff4d00] hover:text-white min-h-[44px]"
        >
          Email
        </button>
      </nav>
    </>
  );
}
