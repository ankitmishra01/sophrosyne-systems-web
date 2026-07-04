import Link from "next/link";
import type { CSSProperties } from "react";

type Variant = "primary" | "gold" | "secondary" | "ghost" | "on-dark";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  target?: string;
  rel?: string;
  type?: "submit" | "button" | "reset";
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  style,
  onClick,
  target,
  rel,
  type,
}: ButtonProps) {
  const cls = `btn btn-${size} btn-${variant}${className ? ` ${className}` : ""}`;

  if (href) {
    const isExternal = href.startsWith("http://") || href.startsWith("https://");
    if (isExternal) {
      return (
        <a href={href} className={cls} style={style} target={target} rel={rel ?? "noopener noreferrer"}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} style={style} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
