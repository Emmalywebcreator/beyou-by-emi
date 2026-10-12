import { ImageResponse } from "next/og";
import { cormorantFonts } from "@/lib/og-fonts";

// Home-screen icon for iPhone/iPad.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#111111",
          fontFamily: "Cormorant",
        }}
      >
        <span style={{ color: "#FAF7F2", fontSize: 40, fontWeight: 500, letterSpacing: "0.16em", paddingLeft: 6 }}>BEYOU</span>
        <span style={{ color: "#C9A96E", fontSize: 30, fontStyle: "italic", marginTop: -2 }}>by Emi</span>
      </div>
    ),
    { ...size, fonts: await cormorantFonts() },
  );
}
