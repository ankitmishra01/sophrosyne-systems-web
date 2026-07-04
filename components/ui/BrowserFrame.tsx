import type { CSSProperties, ReactNode } from "react";

// One reusable browser/app-window shell for all product mockups. Soft shadow,
// macOS traffic lights, optional URL/title bar. Wrap real portal-style UI inside.
export default function BrowserFrame({
  children,
  url,
  title,
  dark = false,
  padded = false,
  style,
}: {
  children: ReactNode;
  url?: string;
  title?: string;
  dark?: boolean;
  padded?: boolean;
  style?: CSSProperties;
}) {
  const bg = dark ? "#111318" : "#FFFFFF";
  const bar = dark ? "#171B21" : "#F2F0EA";
  const barText = dark ? "rgba(255,255,255,0.55)" : "rgba(27,42,33,0.5)";
  const border = dark ? "rgba(255,255,255,0.08)" : "rgba(27,42,33,0.10)";

  return (
    <div
      style={{
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 1px 2px rgba(27,42,33,0.06), 0 40px 80px -32px rgba(27,42,33,0.30)",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "11px 16px",
          background: bar,
          borderBottom: `1px solid ${border}`,
        }}
      >
        <div style={{ display: "flex", gap: 7 }} aria-hidden>
          {["#E6685B", "#E9B44C", "#5BB673"].map((c) => (
            <span key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, opacity: 0.9 }} />
          ))}
        </div>
        {url ? (
          <div
            style={{
              flex: 1,
              margin: "0 8px",
              maxWidth: 360,
              background: dark ? "rgba(255,255,255,0.06)" : "#FFFFFF",
              border: `1px solid ${border}`,
              borderRadius: 6,
              padding: "4px 12px",
              fontSize: 12,
              fontFamily: "var(--font-libre-franklin), sans-serif",
              color: barText,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {url}
          </div>
        ) : null}
        {title ? (
          <span style={{ fontSize: 12, fontWeight: 600, color: barText, letterSpacing: "0.02em" }}>{title}</span>
        ) : null}
      </div>
      <div style={{ padding: padded ? 22 : 0 }}>{children}</div>
    </div>
  );
}
