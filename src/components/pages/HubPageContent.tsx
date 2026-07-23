"use client";

import Link from "next/link";
import type { BlogPost } from "@/lib/content/blog";
import { useI18n } from "@/lib/i18n";

type Pillar = {
  href: string;
  title: string;
  titleId: string;
  desc: string;
};

export function HubPageContent({
  pillars,
  posts,
}: {
  pillars: Pillar[];
  posts: BlogPost[];
}) {
  const { locale, t } = useI18n();

  return (
    <>
      <section className="bg-gradient-to-br from-paysats-surface via-white to-orange-50/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-paysats-primary/10 px-4 py-1.5 text-sm font-semibold text-paysats-primary-dark">
            {t("hubPage.badge")}
          </span>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t("hubPage.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-gray-600">
            {t("hubPage.subtitle")}
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
          {pillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-paysats-primary/40 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-paysats-primary focus:ring-offset-2"
            >
              <h2 className="font-display text-xl font-semibold text-gray-900">
                {locale === "id" ? pillar.titleId : pillar.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {pillar.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-gray-900">
            {t("hub.blog.title")}
          </h2>
          <ul className="mt-6 space-y-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-xl border border-gray-200 bg-white px-5 py-4 transition hover:border-paysats-primary/40 focus:outline-none focus:ring-2 focus:ring-paysats-primary focus:ring-offset-2"
                >
                  <h3 className="font-display font-semibold text-gray-900">
                    {locale === "id" ? post.titleId : post.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {locale === "id" ? post.descriptionId : post.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
