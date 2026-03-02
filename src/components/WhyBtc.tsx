"use client";

import dynamic from "next/dynamic";
import { useI18n } from "@/lib/i18n";
import { AnimateIn } from "./AnimateIn";

const IdrDcaCalculator = dynamic(
  () =>
    import("@predator_757/bitflation-idr-dca").then((mod) => mod.IdrDcaCalculator),
  { ssr: false }
);

export function WhyBtc() {
  const { t } = useI18n();

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn animation="fade-up">
          <div className="idr-dca-calculator-wrapper w-full min-w-0 max-w-full overflow-x-hidden rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-5 shadow-sm sm:p-6 md:p-8">
            <h2 className="font-display text-xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-3xl">
              {t("whyBtc.calculatorTitle")}
            </h2>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              {t("whyBtc.calculatorSubtitle")}
            </p>
            <IdrDcaCalculator />
            <p className="mt-4 text-xs text-gray-500">
              {t("whyBtc.disclaimer")}
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
