import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/lib/content/blog";
import { absoluteUrl, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { MarketingShell } from "@/components/MarketingShell";
import { BlogPostContent } from "@/components/pages/BlogPostContent";
import { ContentHubLinks } from "@/components/ContentHubLinks";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: absoluteUrl(`/blog/${post.slug}`),
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            url: absoluteUrl(`/blog/${post.slug}`),
            author: {
              "@type": "Organization",
              name: "PaySats",
              url: absoluteUrl("/"),
            },
            publisher: {
              "@type": "Organization",
              name: "PaySats",
              logo: {
                "@type": "ImageObject",
                url: absoluteUrl("/images/logo.png"),
              },
            },
            mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
            inLanguage: ["en", "id"],
            keywords: post.keywords.join(", "),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <MarketingShell>
        <BlogPostContent post={post} />
        <ContentHubLinks exclude="/blog" />
      </MarketingShell>
    </>
  );
}
