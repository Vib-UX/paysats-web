"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { AnimateIn } from "./AnimateIn";

const goalKeys = [
  {
    titleKey: "whyArka.goal1.title",
    labelKey: "whyArka.goal1.label",
    src: "/images/goal-housing.png",
    alt: "Young Indonesian couple in front of their dream tropical home at golden hour",
  },
  {
    titleKey: "whyArka.goal2.title",
    labelKey: "whyArka.goal2.label",
    src: "/images/goal-wedding.png",
    alt: "Traditional Javanese wedding ceremony with flowers and golden lighting",
  },
  {
    titleKey: "whyArka.goal3.title",
    labelKey: "whyArka.goal3.label",
    src: "/images/goal-retirement.png",
    alt: "Retired Indonesian couple enjoying coffee overlooking Bali rice terraces at sunset",
  },
] as const;

const benefitKeys = [
  { title: "whyArka.benefit1.title", desc: "whyArka.benefit1.desc", icon: "🔄", iconColor: "text-blue-500" },
  { title: "whyArka.benefit2.title", desc: "whyArka.benefit2.desc", icon: "💳", iconColor: "text-pink-500" },
  { title: "whyArka.benefit3.title", desc: "whyArka.benefit3.desc", icon: "💰", iconColor: "text-emerald-500" },
  { title: "whyArka.benefit4.title", desc: "whyArka.benefit4.desc", icon: "🛡️", iconColor: "text-violet-500" },
  { title: "whyArka.benefit5.title", desc: "whyArka.benefit5.desc", icon: "↔️", iconColor: "text-orange-500" },
  { title: "whyArka.benefit6.title", desc: "whyArka.benefit6.desc", icon: "👁️", iconColor: "text-purple-500" },
] as const;

function GoalCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { t } = useI18n();

  const next = useCallback(
    () => setActive((prev) => (prev + 1) % goalKeys.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <div
      className="relative mx-auto mt-14 max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl">
        {goalKeys.map((goal, i) => (
          <div
            key={goal.titleKey}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              i === active
                ? "opacity-100 scale-100 translate-x-0"
                : i === (active + 1) % goalKeys.length
                  ? "opacity-0 scale-105 translate-x-full"
                  : "opacity-0 scale-95 -translate-x-full"
            }`}
          >
            <Image
              src={goal.src}
              alt={goal.alt}
              fill
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div
              className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-700 delay-100 ${
                i === active
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="inline-block rounded-full bg-arka-primary/90 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                {t(goal.labelKey)}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-white drop-shadow-lg sm:text-3xl">
                {t(goal.titleKey)}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        {goalKeys.map((goal, i) => (
          <button
            key={goal.titleKey}
            type="button"
            aria-label={`Go to ${t(goal.titleKey)}`}
            onClick={() => setActive(i)}
            className="group relative h-2 overflow-hidden rounded-full transition-all duration-300"
            style={{ width: i === active ? 40 : 8 }}
          >
            <span className="absolute inset-0 rounded-full bg-gray-300" />
            {i === active && (
              <span
                className="absolute inset-0 rounded-full bg-arka-primary"
                style={{
                  animation: paused ? "none" : "progress 4s linear",
                }}
              />
            )}
            {i !== active && (
              <span className="absolute inset-0 rounded-full bg-gray-300 transition-colors group-hover:bg-gray-400" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function HeartbeatBadge() {
  const { t } = useI18n();
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-800 shadow-sm ring-1 ring-gray-200/80 backdrop-blur-sm">
      <span
        className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-red-500 animate-heartbeat"
        aria-hidden
      />
      {t("whyArka.earlyAccessBadge")}
    </span>
  );
}

export function WhyArka() {
  const { t } = useI18n();

  return (
    <section className="bg-gradient-to-b from-arka-surface/50 to-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn animation="fade-up">
          <div className="mb-4">
            <HeartbeatBadge />
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("whyArka.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            {t("whyArka.subtitle")}
          </p>
        </AnimateIn>

        <AnimateIn animation="scale" delay={200}>
          <GoalCarousel />
          <p className="mt-4 text-center text-sm text-gray-500">
            {t("whyArka.carousel.cta")}
          </p>
        </AnimateIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefitKeys.map((benefit, i) => (
            <AnimateIn key={benefit.title} animation="fade-up" delay={i * 80}>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-arka-primary/30 hover:shadow-lg hover:-translate-y-1">
                <span
                  className={`text-2xl sm:text-3xl ${benefit.iconColor ?? ""}`}
                  role="img"
                  aria-hidden
                >
                  {benefit.icon}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-gray-900">
                  {t(benefit.title)}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{t(benefit.desc)}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
