"use client";

import Image from "next/image";
import { APP_URL } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";
import { AnimateIn } from "./AnimateIn";

export function BitcoinCard({ hideIntro = false }: { hideIntro?: boolean }) {
  const { t } = useI18n();

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <AnimateIn animation="fade-left" className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/images/paysats-bitcoin-card-hero.png"
                alt="PaySats Bitcoin Card with app screens showing BTC wallet, savings balance, and Bitcoin price chart"
                width={1024}
                height={576}
                sizes="(max-width: 1024px) 100vw, 512px"
                className="w-full rounded-xl animate-float-slow"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-paysats-primary/10 animate-pulse-glow blur-2xl" aria-hidden />
              <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-paysats-accent/15 animate-pulse-glow blur-2xl" style={{ animationDelay: "2s" }} aria-hidden />
            </div>
          </AnimateIn>
          <div className="order-1 lg:order-2">
            {!hideIntro && (
              <AnimateIn animation="fade-up">
                <span className="inline-block rounded-full bg-paysats-primary/10 px-4 py-1.5 text-sm font-semibold text-paysats-primary-dark">
                  {t("card.soon")}
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {t("card.title")}
                </h2>
                <p className="mt-4 text-xl text-gray-600">
                  {t("card.subtitle")}
                </p>
              </AnimateIn>
            )}
            <AnimateIn animation="fade-up" delay={200}>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-paysats-primary text-xs text-white font-bold">
                    ₿
                  </span>
                  <span className="text-gray-600">
                    <strong className="text-gray-900">{t("card.feat1.title")}</strong>{" "}
                    {t("card.feat1.desc")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-paysats-primary text-xs text-white font-bold">
                    ₿
                  </span>
                  <span className="text-gray-600">
                    <strong className="text-gray-900">{t("card.feat2.title")}</strong>{" "}
                    {t("card.feat2.desc")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-paysats-primary text-xs text-white font-bold">
                    ₿
                  </span>
                  <span className="text-gray-600">
                    <strong className="text-gray-900">{t("card.feat3.title")}</strong>{" "}
                    {t("card.feat3.desc")}
                  </span>
                </li>
              </ul>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={400}>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex rounded-full bg-paysats-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-paysats-primary/25 transition-all hover:bg-paysats-primary-dark hover:shadow-xl hover:shadow-paysats-primary/30 focus:outline-none focus:ring-2 focus:ring-paysats-primary focus:ring-offset-2"
              >
                {t("card.cta")}
              </a>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
