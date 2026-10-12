import { ImageResponse } from "next/og";
import { cormorantFonts } from "@/lib/og-fonts";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#111111",
          color: "#C9A96E",
          fontFamily: "Cormorant",
          fontSize: 52,
          fontWeight: 500,
          paddingBottom: 4,
        }}
      >
        B
      </div>
    ),
    { ...size, fonts: await cormorantFonts() },
  );
}
