"use client";

import { LenisProvider } from "./lenis-provider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      {children}
    </LenisProvider>
  );
}
