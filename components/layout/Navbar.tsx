"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";

const NAV_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing",   href: "/pricing"   },
  { label: "About",     href: "/about"     },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) { setScrolled(true); return; }
    const fn = () => setScrolled(window.scrollY > 80);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [isHome]);

  useEffect(() => { setOpen(false); }, [pathname]);

  const bg = scrolled
    ? "rgba(15,23,42,0.97)"
    : "linear-gradient(180deg, rgba(15,23,42,0.72) 0%, rgba(15,23,42,0) 100%)";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: bg,
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        /* Vercel spec border */
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
        transition: "all 350ms cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          padding: "0 var(--pad-h)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <Logo variant="full" size={28} />
        </Link>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  color: active ? "#10b981" : "rgba(244,245,248,0.72)",
                  textDecoration: active ? "underline" : "none",
                  textUnderlineOffset: "4px",
                  transition: "color 180ms",
                }}
                onMouseEnter={(e) =>
                  !active && ((e.currentTarget as HTMLAnchorElement).style.color = "#f4f5f8")
                }
                onMouseLeave={(e) =>
                  !active && ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(244,245,248,0.72)")
                }
              >
                {l.label}
              </Link>
            );
          })}

          <Link
            href="/get-started"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 16px",
              borderRadius: "var(--radius-btn)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.01em",
              background: "#10b981",
              color: "#0a0a0a",
              textDecoration: "none",
              transition: "opacity 180ms",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.82")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-mob"
          style={{ display: "none", background: "none", border: "none", color: "#f4f5f8", cursor: "pointer", padding: 8 }}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(15,23,42,0.99)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "20px var(--pad-h) 28px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            backdropFilter: "blur(20px)",
          }}
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: pathname === "/" ? "#10b981" : "rgba(244,245,248,0.72)",
              textDecoration: "none",
              padding: "10px 0",
            }}
          >
            Home
          </Link>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: pathname === l.href ? "#10b981" : "rgba(244,245,248,0.72)",
                textDecoration: "none",
                padding: "10px 0",
              }}
            >
              {l.label}
            </Link>
          ))}
          <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "12px 0" }} />
          <Link
            href="/get-started"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              textAlign: "center",
              padding: "12px 20px",
              borderRadius: "var(--radius-btn)",
              background: "#10b981",
              color: "#0a0a0a",
              fontWeight: 700,
              fontSize: 13,
              textDecoration: "none",
              marginTop: 4,
            }}
          >
            Get Started
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mob { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
