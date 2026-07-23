import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import { SITE_URL } from "@/lib/constants";
import {
  defaultDescription,
  defaultTitle,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | PaySats",
  },
  description: defaultDescription,
  keywords: [
    "Borrow Rupiah Against Bitcoin",
    "Bitcoin Savings Indonesia",
    "Bitcoin DCA Indonesia",
    "pinjam Rupiah jaminan Bitcoin",
    "tabungan Bitcoin Indonesia",
    "PaySats",
  ],
  authors: [{ name: "PaySats", url: SITE_URL }],
  creator: "PaySats",
  publisher: "PaySats",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      id: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    url: SITE_URL,
    siteName: "PaySats",
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    creator: "@paysats_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable}`}>
      <body className="antialiased font-sans bg-white text-gray-900">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
