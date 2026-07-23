import { SITE_URL } from "@/lib/constants";

export const SITE_NAME = "PaySats";

/** Primary keywords for Indonesian market */
export const PRIMARY_KEYWORDS = {
  borrow: "Borrow Rupiah Against Bitcoin",
  savings: "Bitcoin Savings Indonesia",
  dca: "Bitcoin DCA Indonesia",
  loan: "Pinjaman Crypto Jaminan Bitcoin",
} as const;

export const defaultTitle =
  "Borrow Rupiah Against Bitcoin | Bitcoin Savings Indonesia – PaySats";

/** Keep under ~155–160 chars for SERP display */
export const defaultDescription =
  "Borrow Rupiah against Bitcoin without selling. Bitcoin savings & auto-DCA for Indonesia from Rp 25,000. Self-custody, DeFi-powered.";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/images/logo.png"),
    email: "hello@paysats.exchange",
    sameAs: ["https://x.com/paysats_"],
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    description: defaultDescription,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ["en", "id"],
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
}

export function financialProductLoanSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "PaySats BTC-Backed Loan",
    description:
      "Borrow Rupiah against Bitcoin without selling your BTC. Funds sent to your Indonesian bank account or e-wallet. Self-custody, DeFi-powered.",
    url: absoluteUrl("/loans"),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "ID",
    currency: "IDR",
    category: "https://schema.org/LoanOrCredit",
    audience: {
      "@type": "Audience",
      geographicArea: {
        "@type": "Country",
        name: "Indonesia",
      },
    },
  };
}

export function financialProductCardSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "PaySats Bitcoin Card",
    description:
      "Indonesia's Bitcoin-powered debit card. Spend BTC savings anywhere Visa is accepted, settle in Rupiah.",
    url: absoluteUrl("/bitcoin-card"),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "ID",
    category: "PaymentCard",
  };
}

export function financialProductDcaSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "PaySats Bitcoin DCA",
    description:
      "Auto dollar-cost average into Bitcoin in Indonesia from Rp 25,000. Self-custody BTC savings pockets powered by smart contracts.",
    url: absoluteUrl("/dca-calculator"),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "ID",
    feesAndCommissionsSpecification: "Negligible on-chain fees",
  };
}

export type FaqItem = { question: string; answer: string };

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const homeFaqs: FaqItem[] = [
  {
    question: "What is PaySats?",
    answer:
      "PaySats is a self-custody Bitcoin savings app for Indonesia. Auto-DCA into Bitcoin from Rp 25,000, then borrow Rupiah against your BTC without selling.",
  },
  {
    question: "Can I borrow Rupiah against Bitcoin?",
    answer:
      "Yes. PaySats lets you borrow Rupiah against Bitcoin and receive funds in your bank account or e-wallet while keeping your BTC. No sale, so you stay exposed to Bitcoin upside.",
  },
  {
    question: "How does Bitcoin DCA work in Indonesia?",
    answer:
      "Set an amount and frequency starting from Rp 25,000. Smart contracts execute your Bitcoin DCA automatically on-chain with self-custody and negligible fees.",
  },
  {
    question: "Is PaySats self-custody?",
    answer:
      "Yes. Your keys stay yours. PaySats uses smart wallets and on-chain execution so no third party holds your Bitcoin.",
  },
];

export const loanFaqs: FaqItem[] = [
  {
    question: "How do I borrow Rupiah against Bitcoin?",
    answer:
      "Stack BTC with PaySats DCA, then unlock a Rupiah loan against your Bitcoin collateral. Funds go to your Indonesian bank or e-wallet without selling your sats.",
  },
  {
    question: "Do I have to sell Bitcoin to get cash in Rupiah?",
    answer:
      "No. BTC-backed loans let you access Rupiah liquidity while your Bitcoin remains as collateral and can keep appreciating.",
  },
  {
    question: "Who is Bitcoin-backed lending for in Indonesia?",
    answer:
      "Indonesian savers who want Bitcoin savings Indonesia long-term but occasionally need Rupiah for daily life, emergencies, or goals—without a taxable BTC sale.",
  },
  {
    question: "Is the loan custodial?",
    answer:
      "PaySats is built around self-custody and DeFi-powered borrowing so you retain sovereignty over your assets versus depositing with a centralized lender.",
  },
];

export const dcaFaqs: FaqItem[] = [
  {
    question: "Apa itu Bitcoin DCA?",
    answer:
      "Dollar-cost averaging (DCA) berarti membeli Bitcoin secara rutin dengan jumlah tetap. Di PaySats, kamu bisa mulai dari Rp 25.000 per pocket untuk Bitcoin savings Indonesia.",
  },
  {
    question: "Kenapa DCA Bitcoin cocok untuk Indonesia?",
    answer:
      "DCA meredam volatilitas dan menghindari timing pasar. Cocok untuk penabung Rupiah yang ingin akumulasi BTC jangka panjang tanpa modal besar.",
  },
  {
    question: "Berapa minimum DCA di PaySats?",
    answer:
      "Kamu bisa mulai auto-DCA ke Bitcoin dari Rp 25.000. Buat pocket terpisah untuk rumah, pernikahan, pensiun, atau tujuan lain.",
  },
  {
    question: "Apakah kalkulator DCA menjamin hasil?",
    answer:
      "Tidak. Kalkulator memakai data historis perkiraan untuk membandingkan BTC, deposito, IHSG, dan emas. Kinerja masa lalu tidak menjamin hasil di masa depan.",
  },
];

export const cardFaqs: FaqItem[] = [
  {
    question: "What is the PaySats Bitcoin Card?",
    answer:
      "A Bitcoin-powered debit card for Indonesia that lets you spend BTC savings anywhere Visa is accepted, with settlement in Rupiah.",
  },
  {
    question: "Can I pay with Bitcoin and settle in Rupiah?",
    answer:
      "Yes. The card converts at the point of sale so you spend from your BTC pockets without manually selling first.",
  },
  {
    question: "When will the Bitcoin Card launch?",
    answer:
      "The PaySats Bitcoin Card is coming soon. Start Bitcoin savings today so your pockets are ready when the card launches.",
  },
];
