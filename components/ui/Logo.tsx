interface LogoProps {
  variant?: "full" | "mark";
  size?: number;
  reversed?: boolean;
}

export default function Logo({ variant = "full", size = 28, reversed = false }: LogoProps) {
  // Brand guidelines: Radiant Sprout — stem opening into five rays of light
  // Strokes: Pine on light (#1E4D38), Sage on dark (#E7EFE8)
  // Gold seed: #C7A14A on light, #D8B45E on dark (brighter against dark bg)
  const strokeColor = reversed ? "#E7EFE8" : "#1E4D38";
  const seedColor   = reversed ? "#D8B45E" : "#C7A14A";

  const mark = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <g stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round">
        {/* Trunk */}
        <line x1="24" y1="45" x2="24" y2="26" />
        {/* Five rays fanning upward (branches + light) */}
        <line x1="24" y1="26" x2="9.3"  y2="17.5" />
        <line x1="24" y1="26" x2="15.5" y2="11.3" />
        <line x1="24" y1="26" x2="24"   y2="9"    />
        <line x1="24" y1="26" x2="32.5" y2="11.3" />
        <line x1="24" y1="26" x2="38.7" y2="17.5" />
      </g>
      {/* Gold seed — the only place gold touches the mark */}
      <circle cx="24" cy="26" r="3" fill={seedColor} />
    </svg>
  );

  if (variant === "mark") return mark;

  // Wordmark: scale text with the mark size
  // Brand guideline example: size=40 → Sophrosyne 26px, SYSTEMS 11px
  const nameSize    = Math.round(size * 0.65);
  const subSize     = Math.round(size * 0.275);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      {mark}
      <div style={{ display: "flex", flexDirection: "column", gap: 3, lineHeight: 1 }}>
        <span
          translate="no"
          style={{
            fontSize: nameSize,
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: reversed ? "#F1EEE2" : "#1B2A21",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
          }}
        >
          Sophrosyne
        </span>
        <span
          style={{
            fontSize: subSize,
            fontWeight: 600,
            fontFamily: "var(--font-libre-franklin), sans-serif",
            letterSpacing: "0.28em",
            textTransform: "uppercase" as const,
            // Brand guidelines: gold on dark, gold-dim on light
            color: reversed ? "#C7A14A" : "#B5862E",
          }}
        >
          Systems
        </span>
      </div>
    </div>
  );
}
