"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { AnimateIn } from "./AnimateIn";
import { Icon, type IconName } from "./icons";

const goalKeys = [
  {
    titleKey: "whyPaySats.goal1.title",
    labelKey: "whyPaySats.goal1.label",
    src: "/images/goal-housing.png",
    alt: "Young Indonesian couple in front of their dream tropical home at golden hour",
  },
  {
    titleKey: "whyPaySats.goal2.title",
    labelKey: "whyPaySats.goal2.label",
    src: "/images/goal-wedding.png",
    alt: "Traditional Javanese wedding ceremony with flowers and golden lighting",
  },
  {
    titleKey: "whyPaySats.goal3.title",
    labelKey: "whyPaySats.goal3.label",
    src: "/images/goal-retirement.png",
    alt: "Retired Indonesian couple enjoying coffee overlooking Bali rice terraces at sunset",
  },
] as const;

const benefitKeys = [
  { title: "whyPaySats.benefit7.title", desc: "whyPaySats.benefit7.desc", icon: "landmark", wide: true },
  { title: "whyPaySats.benefit1.title", desc: "whyPaySats.benefit1.desc", icon: "zap" },
  { title: "whyPaySats.benefit2.title", desc: "whyPaySats.benefit2.desc", icon: "shield-check" },
  { title: "whyPaySats.benefit3.title", desc: "whyPaySats.benefit3.desc", icon: "coins" },
  { title: "whyPaySats.benefit4.title", desc: "whyPaySats.benefit4.desc", icon: "file-code" },
  { title: "whyPaySats.benefit5.title", desc: "whyPaySats.benefit5.desc", icon: "feather" },
  { title: "whyPaySats.benefit6.title", desc: "whyPaySats.benefit6.desc", icon: "globe" },
] as const satisfies readonly {
  title: string;
  desc: string;
  icon: IconName;
  wide?: boolean;
}[];

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
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div
              className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-700 delay-100 ${
                i === active
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="inline-block rounded-full bg-paysats-primary/90 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
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
                className="absolute inset-0 rounded-full bg-paysats-primary"
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
      {t("whyPaySats.earlyAccessBadge")}
    </span>
  );
}

export function WhyPaySats() {
  const { t } = useI18n();

  return (
    <section className="bg-gradient-to-b from-paysats-surface/50 to-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn animation="fade-up">
          <div className="mb-4">
            <HeartbeatBadge />
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("whyPaySats.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            {t("whyPaySats.subtitle")}
          </p>
        </AnimateIn>

        <AnimateIn animation="scale" delay={200}>
          <GoalCarousel />
          <p className="mt-4 text-center text-sm text-gray-500">
            {t("whyPaySats.carousel.cta")}
          </p>
        </AnimateIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefitKeys.map((benefit, i) => {
            const wide = "wide" in benefit && benefit.wide;
            return (
              <AnimateIn
                key={benefit.title}
                animation="fade-up"
                delay={i * 80}
                className={wide ? "sm:col-span-2" : ""}
              >
                <div
                  className={`group h-full rounded-2xl border p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 ${
                    wide
                      ? "border-paysats-primary/40 bg-paysats-surface/60 hover:border-paysats-primary/60"
                      : "border-gray-200 bg-white hover:border-paysats-primary/30"
                  }`}
                >
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                      wide
                        ? "bg-paysats-primary text-white shadow-sm shadow-paysats-primary/30"
                        : "bg-paysats-surface text-paysats-primary ring-1 ring-paysats-primary/10 group-hover:bg-paysats-primary group-hover:text-white"
                    }`}
                  >
                    <Icon name={benefit.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-gray-900">
                    {t(benefit.title)}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{t(benefit.desc)}</p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
