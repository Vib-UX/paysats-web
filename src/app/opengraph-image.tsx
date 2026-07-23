import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "PaySats – Borrow Rupiah Against Bitcoin | Bitcoin Savings Indonesia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  // Use app icon (squircle mark only — public/images/logo.png has a black canvas)
  const logoData = await readFile(join(process.cwd(), "src/app/icon.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={64}
            height={64}
            alt="PaySats"
            style={{ borderRadius: 14 }}
          />
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
