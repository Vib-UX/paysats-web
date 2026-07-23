"use client";

import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyPaySats } from "@/components/WhyPaySats";
import { WhyBtc } from "@/components/WhyBtc";
import { BitcoinCard } from "@/components/BitcoinCard";
import { Footer } from "@/components/Footer";
import { FaqSection } from "@/components/FaqSection";
import { ContentHubLinks } from "@/components/ContentHubLinks";
import { homeFaqs } from "@/lib/seo";
import { useI18n } from "@/lib/i18n";

function PageContent() {
  const { t } = useI18n();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <BitcoinCard />
        <WhyPaySats />
        <WhyBtc />
        <FaqSection title={t("hero.faqTitle")} faqs={homeFaqs} />
        <ContentHubLinks />
        <Footer />
      </main>
    </>
  );
}

export function HomePage() {
  return (
    <I18nProvider>
      <PageContent />
    </I18nProvider>
  );
}
