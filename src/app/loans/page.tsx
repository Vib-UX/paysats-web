import type { Metadata } from "next";
import Link from "next/link";
import { APP_URL } from "@/lib/constants";
import {
  absoluteUrl,
  breadcrumbSchema,
  faqPageSchema,
  financialProductLoanSchema,
  loanFaqs,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { MarketingShell } from "@/components/MarketingShell";
import { FaqSection } from "@/components/FaqSection";
import { ContentHubLinks } from "@/components/ContentHubLinks";
import { LoansPageContent } from "@/components/pages/LoansPageContent";

export const metadata: Metadata = {
  title: "Borrow Rupiah Against Bitcoin",
  description:
    "Borrow Rupiah against Bitcoin without selling. BTC-backed loans for Indonesia—liquidity to your bank or e-wallet, self-custody.",
  alternates: { canonical: "/loans" },
  openGraph: {
    title: "Borrow Rupiah Against Bitcoin | PaySats",
    description:
      "Unlock Rupiah liquidity against your BTC without selling. Built for Indonesian Bitcoin savers.",
    url: absoluteUrl("/loans"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Borrow Rupiah Against Bitcoin | PaySats",
    description:
      "Unlock Rupiah liquidity against your BTC without selling. Built for Indonesian Bitcoin savers.",
  },
};

export default function LoansPage() {
  return (
    <>
      <JsonLd
        data={[
          financialProductLoanSchema(),
          faqPageSchema(loanFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "BTC-Backed Loans", path: "/loans" },
          ]),
        ]}
      />
      <MarketingShell>
        <LoansPageContent appUrl={APP_URL} />
        <FaqSection title="BTC-backed loan FAQ" faqs={loanFaqs} />
        <section className="bg-paysats-surface/40 py-12">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p className="text-gray-600">
              Prefer to stack first? Try the{" "}
              <Link
                href="/dca-calculator"
                className="font-semibold text-paysats-primary hover:underline"
              >
                Bitcoin DCA calculator
              </Link>{" "}
              or explore the{" "}
              <Link
                href="/bitcoin-indonesia"
                className="font-semibold text-paysats-primary hover:underline"
              >
                Indonesia content hub
              </Link>
              .
            </p>
          </div>
        </section>
        <ContentHubLinks exclude="/loans" />
      </MarketingShell>
    </>
  );
}
