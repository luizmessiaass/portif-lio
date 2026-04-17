import type { Metadata } from "next";
import { clashDisplay, generalSans, gloriaHallelujah } from "./fonts";
import "./globals.css";
import { AppProviders } from "./providers/app-providers";
import { BackgroundNoise } from "@/components/BackgroundNoise";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import { CustomCursor } from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Luiz Messias | Desenvolvedor Full Stack",
  description: "Portfólio pessoal construído com foco em design e performance premium.",
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
