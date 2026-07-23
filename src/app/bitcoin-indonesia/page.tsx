import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/content/blog";
import {
  absoluteUrl,
  breadcrumbSchema,
  faqPageSchema,
  homeFaqs,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { MarketingShell } from "@/components/MarketingShell";
import { HubPageContent } from "@/components/pages/HubPageContent";

export const metadata: Metadata = {
  title: "Bitcoin DCA & BTC-Backed Loans in Indonesia",
  description:
    "Content hub for Bitcoin DCA Indonesia and borrowing Rupiah against Bitcoin. Guides, calculator, loans, and the PaySats Bitcoin Card.",
  alternates: { canonical: "/bitcoin-indonesia" },
  openGraph: {
    title: "Bitcoin DCA & BTC-Backed Loans in Indonesia | PaySats",
    description:
      "Structured hub for Indonesian Bitcoin savings, DCA, and crypto lending intent.",
    url: absoluteUrl("/bitcoin-indonesia"),
    type: "website",
  },
};

const pillars = [
  {
    href: "/dca-calculator",
    title: "Bitcoin DCA Calculator",
    titleId: "Kalkulator Bitcoin DCA",
    desc: "Simulate IDR DCA into BTC vs deposits, IHSG, and gold—plus Indonesian FAQ.",
  },
  {
    href: "/loans",
    title: "Borrow Rupiah Against Bitcoin",
    titleId: "Pinjam Rupiah dengan Jaminan Bitcoin",
    desc: "BTC-backed loans that send Rupiah to your bank or e-wallet without selling.",
  },
  {
    href: "/bitcoin-card",
    title: "PaySats Bitcoin Card",
    titleId: "Kartu Bitcoin PaySats",
    desc: "Spend BTC savings anywhere Visa is accepted; settle in Rupiah. Coming soon.",
  },
  {
    href: "/blog",
    title: "Guides & articles",
    titleId: "Panduan & artikel",
    desc: "Bahasa Indonesia content velocity for DCA and crypto lending search intent.",
  },
];

export default function BitcoinIndonesiaHubPage() {
  return (
    <>
      <JsonLd
        data={[
          faqPageSchema(homeFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Bitcoin Indonesia Hub", path: "/bitcoin-indonesia" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Bitcoin DCA & BTC-Backed Loans in Indonesia",
            url: absoluteUrl("/bitcoin-indonesia"),
            isPartOf: { "@type": "WebSite", url: absoluteUrl("/") },
          },
        ]}
      />
      <MarketingShell>
        <HubPageContent pillars={pillars} posts={blogPosts} />
        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">
              Looking for the product overview?{" "}
              <Link href="/" className="font-semibold text-paysats-primary hover:underline">
                Back to PaySats home
              </Link>
            </p>
          </div>
        </section>
      </MarketingShell>
    </>
  );
}
