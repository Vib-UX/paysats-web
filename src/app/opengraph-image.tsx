import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PaySats – Borrow Rupiah Against Bitcoin | Bitcoin Savings Indonesia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** PaySats mark: two bars + center dot on copper gradient */
function PaySatsMark({ sizePx = 56 }: { sizePx?: number }) {
  const barW = Math.round(sizePx * 0.17);
  const barH = Math.round(sizePx * 0.64);
  const barR = Math.round(barW / 2);
  const gap = Math.round(sizePx * 0.18);
  const dot = Math.round(sizePx * 0.18);

  return (
    <div
      style={{
        width: sizePx,
        height: sizePx,
        borderRadius: Math.round(sizePx * 0.22),
        background: "linear-gradient(135deg, #be6640 0%, #d08850 55%, #dca060 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap,
      }}
    >
      <div
        style={{
          width: barW,
          height: barH,
          borderRadius: barR,
          background: "white",
        }}
      />
      <div
        style={{
          width: dot,
          height: dot,
          borderRadius: 999,
          background: "white",
        }}
      />
      <div
        style={{
          width: barW,
          height: barH,
          borderRadius: barR,
          background: "white",
        }}
      />
    </div>
  );
}

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #FFF7F3 0%, #FFFFFF 45%, #FFF1E8 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <PaySatsMark sizePx={56} />
          <span style={{ fontSize: 36, fontWeight: 700, color: "#111827" }}>
            PaySats
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 750,
              color: "#111827",
              lineHeight: 1.15,
              maxWidth: 980,
            }}
          >
            Borrow Rupiah Against Bitcoin
          </div>
          <div style={{ fontSize: 28, color: "#4B5563", maxWidth: 900 }}>
            Bitcoin Savings Indonesia · Auto-DCA from Rp 25,000 · Self-custody
          </div>
        </div>
        <div style={{ display: "flex", color: "#be6640", fontSize: 22, fontWeight: 600 }}>
          www.paysats.exchange
        </div>
      </div>
    ),
    { ...size },
  );
}
