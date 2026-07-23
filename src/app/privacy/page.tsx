import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacyContent } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How PaySats collects, uses, and protects your information. Self-custody protocol that holds as little data as possible.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | PaySats",
    description:
      "How PaySats collects, uses, and protects your information. Self-custody protocol that holds as little data as possible.",
    url: "/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return <LegalPage content={privacyContent} />;
}
