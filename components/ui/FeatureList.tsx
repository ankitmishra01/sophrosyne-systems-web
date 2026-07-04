import type { CSSProperties } from "react";

export type Feature = { title: string; body: string };

// The anyteam numbered feature list: gold numeral, bold label, muted description.
export default function FeatureList({
  items,
  dark = false,
  start = 1,
  style,
}: {
  items: Feature[];
  dark?: boolean;
  start?: number;
  style?: CSSProperties;
}) {
  const gold = dark ? "#C7A14A" : "#B5862E";
  const titleCol = dark ? "#F1EEE2" : "#16241B";
  const bodyCol = dark ? "var(--color-on-dark-mid)" : "#4A584E";
  const rule = dark ? "rgba(255,255,255,0.10)" : "rgba(27,42,33,0.10)";

  return (
    <ol style={{ listStyle: "none", margin: 0, padding: 0, ...style }}>
      {items.map((f, i) => (
        <li
          key={f.title}
          style={{
            display: "grid",
            gridTemplateColumns: "28px 1fr",
            gap: 16,
            padding: "20px 0",
            borderTop: i === 0 ? "none" : `1px solid ${rule}`,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 15,
              fontWeight: 600,
              color: gold,
              fontVariantNumeric: "tabular-nums",
              paddingTop: 2,
            }}
          >
            {String(start + i).padStart(2, "0")}
          </span>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.05rem",
                fontWeight: 600,
                color: titleCol,
                letterSpacing: "-0.01em",
                marginBottom: 5,
              }}
            >
              {f.title}
            </div>
            <p style={{ margin: 0, fontSize: "0.98rem", lineHeight: 1.55, color: bodyCol }}>{f.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
