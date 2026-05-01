import { ImageResponse } from "next/og";

export const alt = "FlowMason AI - Build software faster with an AI Delivery Stream";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f5f0e6",
          color: "#1c1917",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#57534e", fontSize: 32, fontWeight: 800, letterSpacing: 6 }}>
            FLOWMASON AI
          </div>
          <div style={{ fontSize: 78, fontWeight: 800, letterSpacing: -4, lineHeight: 1.02, marginTop: 34, maxWidth: 980 }}>
            Build software faster with an AI Delivery Stream.
          </div>
          <div style={{ color: "#57534e", fontSize: 30, lineHeight: 1.35, marginTop: 34, maxWidth: 940 }}>
            Messy product work shaped into reliable AI-assisted delivery flows.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
