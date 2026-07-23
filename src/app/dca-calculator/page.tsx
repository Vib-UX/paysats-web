import type { Metadata } from "next";
import {
  absoluteUrl,
  breadcrumbSchema,
  dcaFaqs,
  faqPageSchema,
  financialProductDcaSchema,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { MarketingShell } from "@/components/MarketingShell";
import { WhyBtc } from "@/components/WhyBtc";
import { FaqSection } from "@/components/FaqSection";
import { ContentHubLinks } from "@/components/ContentHubLinks";
import { DcaPageIntro } from "@/components/pages/DcaPageIntro";

export const metadata: Metadata = {
  title: "Bitcoin DCA Calculator Indonesia",
  description:
    "Free Bitcoin DCA calculator for Indonesia. Compare BTC vs deposits, IHSG & gold in Rupiah. FAQ for long-tail Bitcoin savings queries.",
  alternates: { canonical: "/dca-calculator" },
  openGraph: {
    title: "Bitcoin DCA Calculator Indonesia | PaySats",
    description:
      "Simulate Bitcoin DCA in IDR vs deposits, IHSG, and gold. Built for Indonesian savers.",
    url: absoluteUrl("/dca-calculator"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin DCA Calculator Indonesia | PaySats",
    description:
      "Simulate Bitcoin DCA in IDR vs deposits, IHSG, and gold. Built for Indonesian savers.",
  },
};

export default function DcaCalculatorPage() {
  return (
    <>
      <JsonLd
        data={[
          financialProductDcaSchema(),
          faqPageSchema(dcaFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Bitcoin DCA Calculator", path: "/dca-calculator" },
          ]),
        ]}
      />
      <MarketingShell>
        <DcaPageIntro />
        <WhyBtc />
        <FaqSection title="Bitcoin DCA Indonesia FAQ" faqs={dcaFaqs} />
        <ContentHubLinks exclude="/dca-calculator" />
      </MarketingShell>
    </>
  );
}
