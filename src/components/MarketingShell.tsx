"use client";

import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </I18nProvider>
  );
}
