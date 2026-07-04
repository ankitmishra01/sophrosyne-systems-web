import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import DisplayHeading from "@/components/ui/DisplayHeading";

// Eyebrow + two-tone display heading (+ optional lead). Centered or left.
export default function SectionHeader({
  eyebrow,
  index,
  title,
  accent,
  lead,
  align = "center",
  dark = false,
  size = "display",
  maxWidth = 760,
}: {
  eyebrow?: string;
  index?: string;
  title: ReactNode;
  accent?: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  size?: "hero" | "display" | "h2";
  maxWidth?: number;
}) {
  const centered = align === "center";
  return (
    <Reveal
      style={{
        maxWidth,
        margin: centered ? "0 auto" : undefined,
        textAlign: centered ? "center" : "left",
      }}
    >
      {eyebrow ? (
        <div style={{ display: centered ? "flex" : "block", justifyContent: "center", marginBottom: 18 }}>
          <Eyebrow index={index} dark={dark}>
            {eyebrow}
          </Eyebrow>
        </div>
      ) : null}
      <DisplayHeading as="h2" size={size} dark={dark} accent={accent}>
        {title}
      </DisplayHeading>
      {lead ? (
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.6,
            color: dark ? "var(--color-on-dark-mid)" : "#4A584E",
            margin: centered ? "20px auto 0" : "20px 0 0",
            maxWidth: 620,
          }}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
