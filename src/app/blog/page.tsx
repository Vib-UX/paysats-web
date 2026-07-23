import type { Metadata } from "next";
import { blogPosts } from "@/lib/content/blog";
import { absoluteUrl, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { MarketingShell } from "@/components/MarketingShell";
import { BlogIndexContent } from "@/components/pages/BlogIndexContent";
import { ContentHubLinks } from "@/components/ContentHubLinks";

export const metadata: Metadata = {
  title: "Bitcoin DCA & Crypto Lending Blog Indonesia",
  description:
    "Bahasa Indonesia guides on Bitcoin DCA, Bitcoin savings, and borrowing Rupiah against Bitcoin for Indonesian search intent.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "PaySats Blog – Bitcoin DCA & Crypto Lending Indonesia",
    description:
      "Content velocity for Indonesian Bitcoin DCA and BTC-backed loan search intent.",
    url: absoluteUrl("/blog"),
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "PaySats Blog",
            url: absoluteUrl("/blog"),
            blogPost: blogPosts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              datePublished: post.date,
              url: absoluteUrl(`/blog/${post.slug}`),
              description: post.description,
            })),
          },
        ]}
      />
      <MarketingShell>
        <BlogIndexContent posts={blogPosts} />
        <ContentHubLinks exclude="/blog" />
      </MarketingShell>
    </>
  );
}
