import type { CSSProperties, ReactNode } from "react";

type Size = "hero" | "display" | "h2";

const FS: Record<Size, string> = {
  hero: "var(--fs-hero)",
  display: "var(--fs-display)",
  h2: "var(--fs-h2)",
};

// Big two-tone headline: ink base with one phrase in pine (or gold on dark),
// the anyteam "The team behind every rep." device. Pass the accent phrase via
// `accent`; it renders after `children`. For arbitrary composition, just pass
// JSX children and omit accent.
export default function DisplayHeading({
  children,
  accent,
  size = "display",
  as: Tag = "h2",
  dark = false,
  accentColor,
  style,
}: {
  children?: ReactNode;
  accent?: ReactNode;
  size?: Size;
  as?: "h1" | "h2" | "h3";
  dark?: boolean;
  accentColor?: string;
  style?: CSSProperties;
}) {
  const Component = Tag as "h2";
  const accentCol = accentColor ?? (dark ? "#C7A14A" : "#1E4D38");
  return (
    <Component
      style={{
        fontFamily: "var(--font-display)",
        fontSize: FS[size],
        fontWeight: 600,
        lineHeight: size === "hero" ? 1.0 : 1.05,
        letterSpacing: size === "hero" ? "-0.035em" : "-0.025em",
        color: dark ? "#F1EEE2" : "#16241B",
        textWrap: "balance",
        ...style,
      }}
    >
      {children}
      {accent ? (
        <>
          {" "}
          <span style={{ color: accentCol }}>{accent}</span>
        </>
      ) : null}
    </Component>
  );
}
