"use client";

import { useI18n } from "@/lib/i18n";
import { AnimateIn } from "./AnimateIn";

const stepKeys = [
  { step: "01", title: "how.step1.title", desc: "how.step1.desc" },
  { step: "02", title: "how.step2.title", desc: "how.step2.desc" },
  { step: "03", title: "how.step3.title", desc: "how.step3.desc" },
] as const;

export function HowItWorks() {
  const { t } = useI18n();

  return (
    <section id="how-it-works" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn animation="fade-up">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("how.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            {t("how.subtitle")}
          </p>
        </AnimateIn>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stepKeys.map((item, i) => (
            <AnimateIn key={item.step} animation="fade-up" delay={i * 150}>
              <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-arka-primary/30 hover:shadow-lg hover:shadow-arka-primary/5 hover:-translate-y-1">
                <span className="text-4xl font-bold text-arka-primary/30 font-display">
                  {item.step}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-gray-900">
                  {t(item.title)}
                </h3>
                <p className="mt-2 text-gray-600">{t(item.desc)}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
