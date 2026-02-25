"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimateIn } from "./AnimateIn";

const goals = [
  {
    title: "Dream Home",
    label: "Housing",
    src: "/images/goal-housing.png",
    alt: "Young Indonesian couple in front of their dream tropical home at golden hour",
  },
  {
    title: "Perfect Wedding",
    label: "Wedding",
    src: "/images/goal-wedding.png",
    alt: "Traditional Javanese wedding ceremony with flowers and golden lighting",
  },
  {
    title: "Peaceful Retirement",
    label: "Retirement",
    src: "/images/goal-retirement.png",
    alt: "Retired Indonesian couple enjoying coffee overlooking Bali rice terraces at sunset",
  },
];

const benefits = [
  {
    title: "Multiple BTC Pockets",
    description:
      "Housing, wedding, retirement, travel—create a dedicated pocket for each goal and DCA IDR into BTC per pocket.",
    icon: "🎯",
  },
  {
    title: "Auto DCA",
    description:
      "Set recurring buys and let Arka auto-invest your IDR into Bitcoin. Smooth out volatility with dollar-cost averaging.",
    icon: "📈",
  },
  {
    title: "Tokocrypto integration",
    description:
      "Secure virtual accounts via Tokocrypto. KYC-verified, trusted infrastructure for your BTC savings.",
    icon: "🛡️",
  },
  {
    title: "See all your savings in one place",
    description:
      "One dashboard, all your BTC pockets, clear progress on every goal. Start from as little as Rp 100.000.",
    icon: "📊",
  },
];

function GoalCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setActive((prev) => (prev + 1) % goals.length),
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
      {/* Slides */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl">
        {goals.map((goal, i) => (
          <div
            key={goal.title}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              i === active
                ? "opacity-100 scale-100 translate-x-0"
                : i === (active + 1) % goals.length
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
                {goal.label}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-white drop-shadow-lg sm:text-3xl">
                {goal.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Dots + progress */}
      <div className="mt-6 flex items-center justify-center gap-3">
        {goals.map((goal, i) => (
          <button
            key={goal.title}
            type="button"
            aria-label={`Go to ${goal.title}`}
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

export function WhyArka() {
  return (
    <section className="bg-gradient-to-b from-arka-surface/50 to-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn animation="fade-up">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Arka
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            DCA your IDR into Bitcoin for every savings goal. Built for Indonesian
            savers who want a modern, app-first approach.
          </p>
        </AnimateIn>

        <AnimateIn animation="scale" delay={200}>
          <GoalCarousel />
          <p className="mt-4 text-center text-sm text-gray-500">
            Create a BTC pocket for every life goal—start saving today.
          </p>
        </AnimateIn>

        {/* Benefit cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <AnimateIn key={benefit.title} animation="fade-up" delay={i * 100}>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-arka-primary/30 hover:shadow-lg hover:-translate-y-1">
                <span className="text-3xl" role="img" aria-hidden>
                  {benefit.icon}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{benefit.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
