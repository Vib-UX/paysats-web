import type { Metadata } from "next";
import {
  absoluteUrl,
  breadcrumbSchema,
  cardFaqs,
  faqPageSchema,
  financialProductCardSchema,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { MarketingShell } from "@/components/MarketingShell";
import { BitcoinCard } from "@/components/BitcoinCard";
import { FaqSection } from "@/components/FaqSection";
import { ContentHubLinks } from "@/components/ContentHubLinks";
import { CardPageIntro } from "@/components/pages/CardPageIntro";

export const metadata: Metadata = {
  title: "PaySats Bitcoin Card – Spend BTC, Settle in Rupiah",
  description:
    "Indonesia's Bitcoin-powered debit card. Spend BTC savings anywhere Visa is accepted and settle in Rupiah. Coming soon on PaySats.",
  alternates: { canonical: "/bitcoin-card" },
  openGraph: {
    title: "PaySats Bitcoin Card | Indonesia",
    description:
      "Spend Bitcoin savings anywhere Visa is accepted. Settle in Rupiah. Coming soon.",
    url: absoluteUrl("/bitcoin-card"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PaySats Bitcoin Card | Indonesia",
    description:
      "Spend Bitcoin savings anywhere Visa is accepted. Settle in Rupiah. Coming soon.",
  },
};

export default function BitcoinCardPage() {
  return (
    <>
      <JsonLd
        data={[
          financialProductCardSchema(),
          faqPageSchema(cardFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Bitcoin Card", path: "/bitcoin-card" },
          ]),
        ]}
      />
      <MarketingShell>
        <CardPageIntro />
        <BitcoinCard hideIntro />
        <FaqSection title="Bitcoin Card FAQ" faqs={cardFaqs} />
        <ContentHubLinks exclude="/bitcoin-card" />
      </MarketingShell>
    </>
  );
}
