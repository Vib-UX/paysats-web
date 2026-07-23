"use client";

import Image from "next/image";
import Link from "next/link";
import { APP_URL } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";
import { BtcTicker } from "./BtcTicker";

export function Navbar() {
  const { locale, toggleLocale, t } = useI18n();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold text-gray-900">
            <Image
              src="/images/logo.svg"
              alt="PaySats logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg"
              priority
            />
            PaySats
          </Link>
          <BtcTicker />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-700 transition-all hover:border-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-paysats-primary focus:ring-offset-2"
            aria-label={
              locale === "id"
                ? "Switch language to English"
                : "Ganti bahasa ke Bahasa Indonesia"
            }
          >
            {locale === "id" ? "EN" : "ID"}
          </button>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-paysats-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-paysats-primary/25 transition-all hover:bg-paysats-primary-dark hover:shadow-xl hover:shadow-paysats-primary/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-paysats-primary focus:ring-offset-2"
          >
            {t("nav.joinWaitlist")}
          </a>
        </div>
      </nav>
    </header>
  );
}
