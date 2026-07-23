"use client";

import { useI18n } from "@/lib/i18n";

export function LoansPageContent({ appUrl }: { appUrl: string }) {
  const { t } = useI18n();

  const points = [
    { title: t("loans.point1.title"), desc: t("loans.point1.desc") },
    { title: t("loans.point2.title"), desc: t("loans.point2.desc") },
    { title: t("loans.point3.title"), desc: t("loans.point3.desc") },
  ];

  return (
    <section className="bg-gradient-to-br from-paysats-surface via-white to-orange-50/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="inline-block rounded-full bg-paysats-primary/10 px-4 py-1.5 text-sm font-semibold text-paysats-primary-dark">
          {t("loans.badge")}
        </span>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {t("loans.title")}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
          {t("loans.subtitle")}
        </p>
        <a
          href={appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-full bg-paysats-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-paysats-primary/25 transition-all hover:bg-paysats-primary-dark focus:outline-none focus:ring-2 focus:ring-paysats-primary focus:ring-offset-2"
        >
          {t("loans.cta")}
        </a>
        <ul className="mt-14 grid gap-6 sm:grid-cols-3">
          {points.map((point) => (
            <li
              key={point.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="font-display text-lg font-semibold text-gray-900">
                {point.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {point.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
