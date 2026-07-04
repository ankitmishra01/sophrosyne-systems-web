import type { CSSProperties } from "react";

// Small uppercase label with a gold dot (and optional "NN ·" index), matching
// the anyteam "01 · WORKING BEFORE THE REP IS" eyebrow. `dark` for dark bands.
export default function Eyebrow({
  children,
  index,
  dark = false,
  style,
}: {
  children: React.ReactNode;
  index?: string;
  dark?: boolean;
  style?: CSSProperties;
}) {
  const gold = dark ? "#C7A14A" : "#B5862E";
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "var(--font-libre-franklin), sans-serif",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: gold,
        ...style,
      }}
    >
      <span
        aria-hidden
        style={{ width: 7, height: 7, borderRadius: "50%", background: gold, flexShrink: 0 }}
      />
      {index ? <span style={{ opacity: 0.75 }}>{index} ·</span> : null}
      <span>{children}</span>
    </div>
  );
}
