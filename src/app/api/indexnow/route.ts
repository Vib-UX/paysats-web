import { NextResponse } from "next/server";
import { INDEXNOW_KEY, SITE_URL } from "@/lib/constants";
import { blogPosts } from "@/lib/content/blog";

const URL_LIST = [
  SITE_URL,
  `${SITE_URL}/loans`,
  `${SITE_URL}/bitcoin-card`,
  `${SITE_URL}/dca-calculator`,
  `${SITE_URL}/bitcoin-indonesia`,
  `${SITE_URL}/blog`,
  ...blogPosts.map((post) => `${SITE_URL}/blog/${post.slug}`),
];

/**
 * POST /api/indexnow — notify IndexNow (Bing et al.) of URL updates.
 * Protect in production with INDEXNOW_SECRET env if exposing publicly.
 */
export async function POST(request: Request) {
  const secret = process.env.INDEXNOW_SECRET;
  if (secret) {
    const header = request.headers.get("x-indexnow-secret");
    if (header !== secret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const body = {
    host: new URL(SITE_URL).host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: URL_LIST,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  return NextResponse.json(
    {
      ok: res.ok,
      status: res.status,
      submitted: URL_LIST.length,
      keyLocation: body.keyLocation,
    },
    { status: res.ok ? 200 : 502 },
  );
}

export async function GET() {
  return NextResponse.json({
    message: "POST to submit sitemap URLs to IndexNow",
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlCount: URL_LIST.length,
  });
}
