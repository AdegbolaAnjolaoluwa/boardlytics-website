import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { hero } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const markData = await readFile(join(process.cwd(), "public/brand/mark.png"));
  const markSrc = `data:image/png;base64,${markData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A1D3D",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markSrc} width={56} height={56} style={{ borderRadius: 14 }} alt="" />
          <span style={{ color: "white", fontSize: 32, fontWeight: 700 }}>Boardlytics</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 920 }}>
          <span style={{ color: "white", fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
            {hero.headlineLine1}
          </span>
          <span style={{ color: "#5CA1FF", fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
            {hero.headlineLine2}
          </span>
        </div>

        <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 26, marginTop: 32, maxWidth: 760 }}>
          Governance technology for Africa&rsquo;s boards.
        </span>
      </div>
    ),
    { ...size }
  );
}
