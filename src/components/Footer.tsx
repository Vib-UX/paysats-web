"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  const productLinks = [
    { href: "/loans", label: t("hub.loans.title") },
    { href: "/dca-calculator", label: t("hub.dca.title") },
    { href: "/bitcoin-card", label: t("hub.card.title") },
    { href: "/bitcoin-indonesia", label: t("hubPage.title") },
    { href: "/blog", label: t("blog.badge") },
  ];

  const legalLinks = [
    { href: "/privacy", label: t("footer.privacy") },
    { href: "/terms", label: t("footer.terms") },
    { href: "https://x.com/paysats_", label: "X / Twitter", external: true },
    { href: `mailto:${CONTACT_EMAIL}`, label: "Email", external: true },
  ];

  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <span className="flex items-center gap-2 font-display text-lg font-bold text-gray-900">
            <Image
              src="/images/logo.svg"
              alt="PaySats logo"
              width={28}
              height={28}
              className="h-7 w-7 rounded-lg"
            />
            PaySats
          </span>
          <nav aria-label="Product" className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
            {productLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-paysats-primary transition focus:outline-none focus:ring-2 focus:ring-paysats-primary focus:ring-offset-2 rounded"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Legal and social" className="flex flex-wrap gap-6">
            {legalLinks.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-paysats-primary transition focus:outline-none focus:ring-2 focus:ring-paysats-primary focus:ring-offset-2 rounded"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-paysats-primary transition focus:outline-none focus:ring-2 focus:ring-paysats-primary focus:ring-offset-2 rounded"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>
        <p className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} PaySats. {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
