import type { Metadata } from "next";
import { clashDisplay, generalSans, gloriaHallelujah } from "./fonts";
import "./globals.css";
import { AppProviders } from "./providers/app-providers";
import { BackgroundNoise } from "@/components/BackgroundNoise";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import { CustomCursor } from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Luiz Messias | Desenvolvedor Full Stack",
  description:
    "Portfólio de desenvolvimento full stack com sistemas SaaS, dashboards, automações, integrações, APIs, bancos de dados e IA aplicada a produto.",
  openGraph: {
    title: "Luiz Messias | Desenvolvedor Full Stack",
    description:
      "Sistemas full stack com Next.js, React, Node.js, PostgreSQL, Supabase, integrações externas, automações e IA aplicada.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${clashDisplay.variable} ${generalSans.variable} ${gloriaHallelujah.variable}`}>
      <body>
        <BackgroundOrbs />
        <BackgroundNoise />
        <CustomCursor />
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
