import { ImageResponse } from "next/og";
import { images } from "@/lib/images";
import { cormorantFonts } from "@/lib/og-fonts";
import { site } from "@/lib/site";

// Share preview used by every page (WhatsApp, Instagram DMs, Facebook, X, iMessage…).
export const alt = `${site.name} — bespoke bridal & couture`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = images.hero.src.replace("w=1600", "w=600&h=630");

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#FAF7F2" }}>
        <img src={photo} alt="" width={480} height={630} style={{ objectFit: "cover" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "0 80px",
            fontFamily: "Cormorant",
            color: "#111111",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
            <span style={{ fontSize: 84, fontWeight: 500, letterSpacing: "0.18em" }}>BEYOU</span>
            <span style={{ fontSize: 56, fontStyle: "italic", color: "#C9A96E" }}>by Emi</span>
          </div>
          <div style={{ width: 72, height: 2, background: "#C9A96E", margin: "36px 0" }} />
          <div style={{ fontSize: 40, lineHeight: 1.25 }}>Bespoke bridal, traditional</div>
          <div style={{ fontSize: 40, lineHeight: 1.25 }}>&amp; evening couture.</div>
          <div style={{ fontSize: 26, marginTop: 40, letterSpacing: "0.3em", color: "#6b6b6b" }}>
            BENIN CITY · NIGERIA
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: await cormorantFonts() },
  );
}
