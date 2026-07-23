"use client";

import type { FaqItem } from "@/lib/seo";

type FaqSectionProps = {
  title: string;
  faqs: FaqItem[];
};

export function FaqSection({ title, faqs }: FaqSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          id="faq-heading"
          className="font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
        >
          {title}
        </h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-4 open:bg-white open:shadow-sm"
            >
              <summary className="cursor-pointer list-none font-display text-base font-semibold text-gray-900 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span
                    className="mt-0.5 shrink-0 text-paysats-primary transition group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
