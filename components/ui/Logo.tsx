interface LogoProps {
  variant?: "full" | "mark";
  size?: number;
}

export default function Logo({ variant = "full", size = 28 }: LogoProps) {
  const mark = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <circle cx="16" cy="16" r="13" stroke="#10b981" strokeWidth="1.5" />
      <line x1="16" y1="4" x2="16" y2="28" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
      <line x1="9" y1="15" x2="23" y2="15" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
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
            fontWeight: 700,
            color: "#f4f5f8",
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
          }}
        >
          Sophrosyne{" "}
          <span style={{ color: "#10b981", fontWeight: 400 }}>Systems</span>
        </span>
        <span
          style={{
            fontSize: 9,
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase" as const,
            color: "rgba(244,245,248,0.35)",
          }}
        >
          Higher Education · AI Infrastructure
        </span>
      </div>
    </div>
  );
}
