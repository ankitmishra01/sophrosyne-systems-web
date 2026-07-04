"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

// Lightweight, dependency-free scroll reveal. Standardizes the reveal pattern
// that was re-declared with framer-motion in every section. Respects
// prefers-reduced-motion via the .reveal CSS (see globals.css).
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "li" | "section" | "article" | "header";
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "-60px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as "div";
  return (
    <Component
      ref={ref}
      className={`reveal${shown ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </Component>
  );
}
