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
    background: highlight
      ? "rgba(16,185,129,0.04)"
      : "rgba(248,250,252,0.025)",
    border: highlight
      ? "1.5px solid rgba(16,185,129,0.32)"
      : "1px solid rgba(248,250,252,0.07)",
    borderRadius: "var(--radius-card)",
    transition: "border-color 220ms, background 220ms, transform 220ms, box-shadow 220ms",
    ...(hoverable && hovered
      ? {
          borderColor: highlight
            ? "rgba(16,185,129,0.55)"
            : "rgba(16,185,129,0.28)",
          background: highlight
            ? "rgba(16,185,129,0.07)"
            : "rgba(248,250,252,0.04)",
          transform: "translateY(-3px)",
          boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
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
