"use client";

import { ARKA_DEMO_VIDEO } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { PhoneMockup } from "./PhoneMockup";
import { VideoWithPlaceholder } from "./VideoWithPlaceholder";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const { t } = useI18n();
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-arka-surface via-white to-orange-50/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h1
              className={`font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              {t("hero.title1")}
              <span className="text-arka-primary">{t("hero.titleAccent")}</span>
            </h1>
            <p
              className={`mt-5 text-lg leading-relaxed text-gray-600 sm:text-xl transition-all duration-700 ease-out delay-150 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              {t("hero.subtitle")}
            </p>
            <div
              className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 ease-out delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 rounded-full bg-arka-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-arka-primary/25 transition-all hover:bg-arka-primary-dark hover:shadow-xl hover:shadow-arka-primary/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-arka-primary focus:ring-offset-2"
              >
                <span
                  className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-white animate-heartbeat"
                  aria-hidden
                />
                {t("whyArka.earlyAccessBadge")}
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all hover:border-arka-primary hover:bg-arka-surface hover:text-arka-primary-dark hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-arka-primary focus:ring-offset-2"
              >
                {t("hero.howItWorks")}
              </a>
            </div>
          </div>

          <div className="relative">
            <PhoneMockup rollIn>
              {ARKA_DEMO_VIDEO ? (
                <VideoWithPlaceholder
                  src={ARKA_DEMO_VIDEO}
                  className="aspect-[9/19.5] w-[170px] sm:w-[185px]"
                />
              ) : (
                <div className="aspect-[9/19.5] w-[170px] sm:w-[185px] bg-gradient-to-b from-orange-200/50 to-orange-100/30 flex items-center justify-center">
                  <p className="text-center text-sm text-orange-700 px-4">
                    Add your demo video in <code className="text-xs">src/lib/constants.ts</code>
                  </p>
                </div>
              )}
            </PhoneMockup>

            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-arka-accent/20 blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-arka-primary/15 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
