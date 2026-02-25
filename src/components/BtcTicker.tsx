"use client";

import { useEffect, useState } from "react";

const COINGECKO_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=idr&include_24hr_change=true";

interface PriceData {
  price: number;
  change24h: number;
}

export function BtcTicker() {
  const [data, setData] = useState<PriceData | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchPrice() {
      try {
        const res = await fetch(COINGECKO_URL);
        if (!res.ok) return;
        const json = await res.json();
        if (cancelled) return;
        setData({
          price: json.bitcoin.idr,
          change24h: json.bitcoin.idr_24h_change,
        });
      } catch {
        /* silent — ticker is non-critical */
      }
    }

    fetchPrice();
    const interval = setInterval(fetchPrice, 60_000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  if (!data) return null;

  const full = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(data.price);

  const billions = data.price / 1_000_000_000;
  const short = `~${billions.toFixed(2)}B IDR`;

  const isUp = data.change24h >= 0;

  return (
    <div className="group relative hidden items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium sm:flex cursor-default">
      <span className="text-orange-500">₿</span>
      <span className="text-gray-700">{short}</span>
      <span className={isUp ? "text-green-600" : "text-red-500"}>
        {isUp ? "↑" : "↓"} {Math.abs(data.change24h).toFixed(1)}%
      </span>
      <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        {full}
      </span>
    </div>
  );
}
