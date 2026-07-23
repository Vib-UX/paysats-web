"use client";

import { useI18n } from "@/lib/i18n";

export function DcaPageIntro() {
  const { t } = useI18n();

  return (
    <section className="bg-gradient-to-b from-paysats-surface/50 to-white pt-16 pb-2 sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="inline-block rounded-full bg-paysats-primary/10 px-4 py-1.5 text-sm font-semibold text-paysats-primary-dark">
          {t("dcaPage.badge")}
        </span>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {t("dcaPage.title")}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-gray-600">
          {t("dcaPage.subtitle")}
        </p>
      </div>
    </section>
  );
}
