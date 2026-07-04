import type { CSSProperties, ReactNode } from "react";

type Bg = "parchment" | "sage" | "pine" | "pine-black" | "ink" | "transparent";

const BG: Record<Bg, string> = {
  parchment: "#F4F0E6",
  sage: "#ECF1EC",
  pine: "#1E4D38",
  "pine-black": "#141F17",
  ink: "#21271F",
  transparent: "transparent",
};

// Is this a dark band? (drives default text color)
const DARK: Record<Bg, boolean> = {
  parchment: false,
  sage: false,
  pine: true,
  "pine-black": true,
  ink: true,
  transparent: false,
};

export function Container({
  children,
  size = 1200,
  style,
  className,
}: {
  children: ReactNode;
  size?: number;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{ maxWidth: size, margin: "0 auto", width: "100%", ...style }}
    >
      {children}
    </div>
  );
}

export default function Section({
  children,
  bg = "parchment",
  id,
  py,
  container = true,
  size = 1200,
  className,
  style,
}: {
  children: ReactNode;
  bg?: Bg;
  id?: string;
  py?: number | string;
  container?: boolean;
  size?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const dark = DARK[bg];
  return (
    <section
      id={id}
      className={className}
      style={{
        background: BG[bg],
        color: dark ? "var(--color-on-dark-bright)" : "#1B2A21",
        padding: `${py ?? "var(--section-py)"} var(--pad-h)`,
        position: "relative",
        ...style,
      }}
    >
      {container ? <Container size={size}>{children}</Container> : children}
    </section>
  );
}
