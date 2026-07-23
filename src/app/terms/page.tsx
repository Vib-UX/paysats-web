import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { termsContent } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of the PaySats website, protocol, and related Bitcoin savings services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | PaySats",
    description:
      "Terms governing use of the PaySats website, protocol, and related Bitcoin savings services.",
    url: "/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return <LegalPage content={termsContent} />;
}
