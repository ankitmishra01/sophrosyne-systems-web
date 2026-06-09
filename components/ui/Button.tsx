"use client";

import Link from "next/link";
import { CSSProperties } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

const SIZES: Record<NonNullable<ButtonProps["size"]>, CSSProperties> = {
  sm: { fontSize: 12, padding: "8px 16px", letterSpacing: "0.04em" },
  md: { fontSize: 13, padding: "11px 22px", letterSpacing: "0.03em" },
  lg: { fontSize: 14, padding: "14px 28px", letterSpacing: "0.02em" },
};

const BASE: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "inherit",
  fontWeight: 600,
  borderRadius: "var(--radius-btn)",
  textDecoration: "none",
  border: "none",
  cursor: "pointer",
  transition: "opacity 200ms, background 200ms, border-color 200ms, transform 150ms",
  whiteSpace: "nowrap",
};

const VARIANTS: Record<NonNullable<ButtonProps["variant"]>, { style: CSSProperties; hover: CSSProperties }> = {
  primary: {
    style: { background: "#10b981", color: "#0a0f1a" },
    hover: { opacity: 0.85 },
  },
  secondary: {
    style: {
      background: "transparent",
      color: "#f8fafc",
      border: "1.5px solid rgba(248,250,252,0.22)",
    },
    hover: { borderColor: "rgba(248,250,252,0.55)" },
  },
  ghost: {
    style: { background: "transparent", color: "#10b981" },
    hover: { opacity: 0.75 },
  },
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  style: styleProp,
  onClick,
  target,
  rel,
}: ButtonProps) {
  const v = VARIANTS[variant];
  const s = SIZES[size];
  const style: CSSProperties = { ...BASE, ...v.style, ...s, ...styleProp };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    Object.assign(el.style, v.hover);
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    if (variant === "primary") el.style.opacity = "1";
    if (variant === "ghost") el.style.opacity = "1";
    if (variant === "secondary") el.style.borderColor = "rgba(248,250,252,0.22)";
  };

  if (href) {
    return (
      <Link
        href={href}
        style={style}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      style={style}
      className={className}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
