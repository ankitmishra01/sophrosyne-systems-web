interface LogoProps {
  variant?: "full" | "mark";
  size?: number;
  reversed?: boolean;
}

export default function Logo({ variant = "full", size = 28, reversed = false }: LogoProps) {
  const pine = reversed ? "#E7EFE8" : "#1E4D38";
  const gold = "#C7A14A";

  const mark = (
    <svg
      width={size}
      height={(size * 36) / 32}
      viewBox="0 0 32 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      {/* Vertical beam */}
      <rect x="15.1" y="2" width="1.8" height="22" rx="0.9" fill={pine} />
      {/* Horizontal bar */}
      <rect x="5" y="7.2" width="22" height="1.8" rx="0.9" fill={pine} />
      {/* Left chain */}
      <line x1="6" y1="8.5" x2="6" y2="11.4" stroke={pine} strokeWidth="1.4" strokeLinecap="round" />
      {/* Right chain */}
      <line x1="26" y1="8.5" x2="26" y2="11.4" stroke={pine} strokeWidth="1.4" strokeLinecap="round" />
      {/* Left pan (lower — solid) */}
      <circle cx="6" cy="14.4" r="3.0" fill={pine} />
      {/* Right pan (higher — outline) */}
      <circle cx="26" cy="13.0" r="3.0" fill="none" stroke={pine} strokeWidth="1.5" />
      {/* Gold fulcrum triangle */}
      <path d="M16 23 L21.2 30 L10.8 30 Z" fill={gold} />
      {/* Base */}
      <rect x="8.5" y="29.8" width="15" height="1.8" rx="0.9" fill={pine} />
    </svg>
  );

  if (variant === "mark") return mark;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {mark}
      <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <span
          translate="no"
          style={{
            fontSize: 15,
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: reversed ? "#F1EEE2" : "#1B2A21",
            letterSpacing: "-0.01em",
            lineHeight: 1.15,
          }}
        >
          Sophrosyne
        </span>
        <span
          style={{
            fontSize: 8.5,
            fontWeight: 600,
            fontFamily: "var(--font-libre-franklin), sans-serif",
            letterSpacing: "0.16em",
            textTransform: "uppercase" as const,
            color: reversed ? "#C9D9CE" : "#B5862E",
          }}
        >
          Systems
        </span>
      </div>
    </div>
  );
}
