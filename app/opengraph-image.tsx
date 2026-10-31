import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { hero } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const markData = await readFile(join(process.cwd(), "public/brand/mark.png"));
  const markSrc = `data:image/png;base64,${markData.toString("base64")}`;
  const { resolution, quorum, quorumStatus } = hero.meeting;
  const total = resolution.forVotes + resolution.against + resolution.abstain;
  const pct = (n: number) => (total > 0 ? Math.round((n / total) * 100) : 0);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#0A1D3D",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        {/* grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* glow */}
        <div
          style={{
            position: "absolute",
            left: -160,
            top: -160,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(20,97,255,0.45) 0%, rgba(20,97,255,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -120,
            bottom: -180,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(92,161,255,0.3) 0%, rgba(92,161,255,0) 70%)",
          }}
        />

        {/* left: brand + headline */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 0 72px 72px",
            width: 640,
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={markSrc} width={48} height={48} style={{ borderRadius: 12 }} alt="" />
            <span style={{ color: "white", fontSize: 28, fontWeight: 700 }}>Boardlytics</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "white", fontSize: 58, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1 }}>
              {hero.headlineLine1}
            </span>
            <span
              style={{
                color: "#5CA1FF",
                fontSize: 58,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: -1,
              }}
            >
              {hero.headlineLine2}
            </span>
          </div>

          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 22, marginTop: 28, maxWidth: 480, lineHeight: 1.4 }}>
            Governance technology for Africa&rsquo;s boards.
          </span>
        </div>

        {/* right: mini product card */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            flex: 1,
            paddingRight: 64,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 420,
              borderRadius: 18,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 40px 80px rgba(0,0,0,0.45)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#081833",
                padding: "16px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span style={{ color: "white", fontSize: 15, fontWeight: 600 }}>Board of Directors</span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>Live</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, background: "white", padding: "22px 20px" }}>
              <span style={{ color: "#5A6478", fontSize: 11, fontWeight: 600, letterSpacing: 1 }}>
                RESOLUTION 2 · VOTING OPEN
              </span>
              <span style={{ color: "#1A2233", fontSize: 15, lineHeight: 1.4 }}>{resolution.text}</span>

              {(
                [
                  ["For", resolution.forVotes, "#0E8A5F"],
                  ["Against", resolution.against, "#C2410C"],
                  ["Abstain", resolution.abstain, "#CBD5E1"],
                ] as const
              ).map(([label, value, color]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "#5A6478", fontSize: 13, width: 60 }}>{label}</span>
                  <div style={{ display: "flex", flex: 1, height: 8, borderRadius: 999, background: "#E2E8F2", overflow: "hidden" }}>
                    <div style={{ width: `${pct(value)}%`, height: "100%", background: color, borderRadius: 999 }} />
                  </div>
                  <span style={{ color: "#1A2233", fontSize: 13, fontWeight: 600, width: 18, textAlign: "right" }}>
                    {value}
                  </span>
                </div>
              ))}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 4,
                  background: "rgba(14,138,95,0.1)",
                  borderRadius: 10,
                  padding: "10px 14px",
                }}
              >
                <span style={{ color: "#1A2233", fontSize: 12 }}>{quorum}</span>
                <span style={{ color: "#0E8A5F", fontSize: 12, fontWeight: 700 }}>{quorumStatus}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
