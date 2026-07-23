"use client";

import Link from "next/link";
import type { BlogPost } from "@/lib/content/blog";
import { useI18n } from "@/lib/i18n";

export function BlogPostContent({ post }: { post: BlogPost }) {
  const { locale, t } = useI18n();
  const title = locale === "id" ? post.titleId : post.title;
  const paragraphs = locale === "id" ? post.contentId : post.contentEn;

  return (
    <article className="bg-gradient-to-b from-paysats-surface/30 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex text-sm font-medium text-gray-500 transition hover:text-paysats-primary"
        >
          ← {t("blog.back")}
        </Link>
        <time
          dateTime={post.date}
          className="mt-6 block text-xs font-medium text-gray-500"
        >
          {post.date}
        </time>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>
        <div className="mt-8 space-y-4">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="leading-relaxed text-gray-600">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {post.keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
