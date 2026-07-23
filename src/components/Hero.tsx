"use client";

import {
  APP_URL,
  PAYSATS_DEMO_PLAYBACK_RATE,
  PAYSATS_DEMO_VIDEO,
  PAYSATS_DEMO_VIDEO_ASPECT,
} from "@/lib/constants";
import { useI18n } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { PhoneMockup } from "./PhoneMockup";
import { VideoWithPlaceholder } from "./VideoWithPlaceholder";

const CURRENCIES = [
  "Rupiah",
  "Baht",
  "Ringgit",
  "Peso",
  "Dong",
  "Kip",
  "Rupee",
  "Ngultrum",
  "Taka",
] as const;

const HOLD_MS = 1900;
const HOLD_RUPIAH_MS = 3200;
const EXIT_MS = 320;

function RotatingCurrency() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const hold = index === 0 ? HOLD_RUPIAH_MS : HOLD_MS;
    const id = setTimeout(() => setPhase("out"), hold);
    return () => clearTimeout(id);
  }, [index, reduced]);

  useEffect(() => {
    if (phase !== "out") return;
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % CURRENCIES.length);
      setPhase("in");
    }, EXIT_MS);
    return () => clearTimeout(id);
  }, [phase]);

  if (reduced) {
    return <span className="text-paysats-primary">{CURRENCIES[0]}</span>;
  }

  return (
    <span
      key={index}
      className={`inline-block text-paysats-primary ${phase === "out" ? "currency-out" : "currency-in"}`}
    >
      {CURRENCIES[index]}
    </span>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const { t } = useI18n();
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-paysats-surface via-white to-orange-50/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h1
              className={`font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              {t("hero.title1")}
              {t("hero.titleVerb")}
              <RotatingCurrency />
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
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-paysats-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-paysats-primary/25 transition-all hover:bg-paysats-primary-dark hover:shadow-xl hover:shadow-paysats-primary/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-paysats-primary focus:ring-offset-2"
              >
                {t("whyPaySats.earlyAccessBadge")}
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all hover:border-paysats-primary hover:bg-paysats-surface hover:text-paysats-primary-dark hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-paysats-primary focus:ring-offset-2"
              >
                {t("hero.howItWorks")}
              </a>
            </div>
          </div>

          <div className="relative">
            <PhoneMockup rollIn>
              {PAYSATS_DEMO_VIDEO ? (
                <VideoWithPlaceholder
                  src={PAYSATS_DEMO_VIDEO}
                  playbackRate={PAYSATS_DEMO_PLAYBACK_RATE}
                  className="w-[170px] sm:w-[185px]"
                  style={{ aspectRatio: PAYSATS_DEMO_VIDEO_ASPECT }}
                />
              ) : (
                <div
                  className="w-[170px] sm:w-[185px] bg-gradient-to-b from-orange-200/50 to-orange-100/30 flex items-center justify-center"
                  style={{ aspectRatio: PAYSATS_DEMO_VIDEO_ASPECT }}
                >
                  <p className="text-center text-sm text-orange-700 px-4">
                    Add your demo video in <code className="text-xs">src/lib/constants.ts</code>
                  </p>
                </div>
              )}
            </PhoneMockup>

            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-paysats-accent/20 blur-3xl animate-pulse-glow" aria-hidden />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-paysats-primary/15 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
