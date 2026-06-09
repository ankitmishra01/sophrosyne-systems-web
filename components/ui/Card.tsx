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

  // Vercel-spec borders + Linear Nordic Gray bg
  const base: CSSProperties = {
    background: highlight ? "rgba(16,185,129,0.04)" : "rgba(255,255,255,0.02)",
    border: highlight
      ? "1.5px solid rgba(16,185,129,0.28)"
      : "1px solid rgba(255,255,255,0.08)",
    borderRadius: "var(--radius-card)",
    boxShadow: highlight ? "var(--shadow-emerald)" : "var(--shadow-card)",
    transition:
      "border-color 200ms, background 200ms, transform 200ms, box-shadow 200ms",
    ...(hoverable && hovered
      ? {
          borderColor: highlight
            ? "rgba(16,185,129,0.50)"
            : "rgba(255,255,255,0.15)",
          background: highlight
            ? "rgba(16,185,129,0.07)"
            : "rgba(255,255,255,0.035)",
          transform: "translateY(-3px)",
          boxShadow: highlight
            ? "var(--shadow-emerald)"
            : "var(--shadow-card-lg)",
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
