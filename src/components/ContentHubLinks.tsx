"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const links = [
  {
    href: "/loans",
    titleKey: "hub.loans.title" as const,
    descKey: "hub.loans.desc" as const,
  },
  {
    href: "/dca-calculator",
    titleKey: "hub.dca.title" as const,
    descKey: "hub.dca.desc" as const,
  },
  {
    href: "/bitcoin-card",
    titleKey: "hub.card.title" as const,
    descKey: "hub.card.desc" as const,
  },
  {
    href: "/blog",
    titleKey: "hub.blog.title" as const,
    descKey: "hub.blog.desc" as const,
  },
];

export function ContentHubLinks({
  exclude,
  title,
}: {
  exclude?: string;
  title?: string;
}) {
  const { t } = useI18n();
  const items = links.filter((link) => link.href !== exclude);

  return (
    <section className="border-t border-gray-100 bg-gray-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-xl font-bold text-gray-900 sm:text-2xl">
          {title ?? t("hub.related")}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-xl border border-gray-200 bg-white p-5 transition hover:border-paysats-primary/40 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-paysats-primary focus:ring-offset-2"
            >
              <h3 className="font-display text-base font-semibold text-gray-900">
                {t(link.titleKey)}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{t(link.descKey)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
