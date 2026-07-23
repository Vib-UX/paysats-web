"use client";

import Link from "next/link";
import type { BlogPost } from "@/lib/content/blog";
import { useI18n } from "@/lib/i18n";

export function BlogIndexContent({ posts }: { posts: BlogPost[] }) {
  const { locale, t } = useI18n();

  return (
    <section className="bg-gradient-to-b from-paysats-surface/40 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <span className="inline-block rounded-full bg-paysats-primary/10 px-4 py-1.5 text-sm font-semibold text-paysats-primary-dark">
          {t("blog.badge")}
        </span>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {t("blog.title")}
        </h1>
        <p className="mt-5 text-lg text-gray-600">{t("blog.subtitle")}</p>
        <ul className="mt-12 space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <time
                  dateTime={post.date}
                  className="text-xs font-medium text-gray-500"
                >
                  {post.date}
                </time>
                <h2 className="mt-2 font-display text-xl font-semibold text-gray-900">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-paysats-primary focus:outline-none focus:ring-2 focus:ring-paysats-primary focus:ring-offset-2 rounded"
                  >
                    {locale === "id" ? post.titleId : post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {locale === "id" ? post.descriptionId : post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-paysats-primary hover:underline"
                >
                  {t("blog.readMore")} →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
