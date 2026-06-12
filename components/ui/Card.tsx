"use client";

import { useState, CSSProperties } from "react";

interface CardProps {
  highlight?: boolean;
  hoverable?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function Card({
  highlight = false,
  hoverable = false,
  children,
  className,
  style,
}: CardProps) {
  const [hovered, setHovered] = useState(false);

  const base: CSSProperties = {
    background: highlight ? "#1E4D38" : "#FFFFFF",
    border: highlight
      ? "1.5px solid rgba(30,77,56,0.40)"
      : "1px solid rgba(27,42,33,0.10)",
    borderRadius: "var(--radius-card)",
    boxShadow: highlight ? "var(--shadow-pine)" : "var(--shadow-card)",
    transition:
      "border-color 200ms, background 200ms, transform 200ms, box-shadow 200ms",
    ...(hoverable && hovered
      ? {
          borderColor: highlight
            ? "rgba(30,77,56,0.65)"
            : "rgba(27,42,33,0.20)",
          transform: "translateY(-3px)",
          boxShadow: highlight ? "var(--shadow-pine)" : "var(--shadow-card-lg)",
        }
      : {}),
    ...style,
  };

  return (
    <div
      style={base}
      className={className}
      onMouseEnter={() => hoverable && setHovered(true)}
      onMouseLeave={() => hoverable && setHovered(false)}
    >
      {children}
    </div>
  );
}
