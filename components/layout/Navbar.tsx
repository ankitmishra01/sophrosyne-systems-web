"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        display: "flex",
        justifyContent: "center",
        padding: "18px var(--pad-h)",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          pointerEvents: "auto",
          width: "100%",
          maxWidth: 1080,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          height: 60,
          padding: "0 12px 0 22px",
          borderRadius: 999,
          background: "rgba(248,245,238,0.82)",
          backdropFilter: "blur(16px) saturate(160%)",
          WebkitBackdropFilter: "blur(16px) saturate(160%)",
          border: "1px solid rgba(27,42,33,0.08)",
          boxShadow: scrolled
            ? "0 1px 2px rgba(27,42,33,0.06), 0 20px 44px -20px rgba(27,42,33,0.28)"
            : "0 1px 2px rgba(27,42,33,0.04), 0 10px 30px -18px rgba(27,42,33,0.18)",
          transition: "box-shadow 300ms var(--ease)",
        }}
      >
        <Link href="/" style={{ display: "flex", flexShrink: 0 }} aria-label="Sophrosyne Systems home">
          <Logo variant="full" size={28} />
        </Link>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link"
                style={{
                  fontSize: 14.5,
                  fontWeight: 500,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  color: active ? "#1E4D38" : "#3C4A40",
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <a
            href="https://platform.sophrosynesystems.org/login"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            style={{
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "var(--font-libre-franklin), sans-serif",
              color: "#3C4A40",
              padding: "0 6px",
            }}
          >
            Platform login →
          </a>
          <Button variant="gold" size="sm" href="/get-started">
            Talk to Us
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-mob"
          style={{ display: "none", background: "none", border: "none", color: "#1B2A21", cursor: "pointer", padding: 8 }}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div
          style={{
            pointerEvents: "auto",
            position: "absolute",
            top: 84,
            left: "var(--pad-h)",
            right: "var(--pad-h)",
            background: "rgba(248,245,238,0.98)",
            border: "1px solid rgba(27,42,33,0.10)",
            borderRadius: 20,
            padding: "16px 20px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backdropFilter: "blur(16px)",
            boxShadow: "0 30px 60px -24px rgba(27,42,33,0.35)",
          }}
        >
          <Link href="/" onClick={() => setOpen(false)} style={{ fontSize: 16, fontWeight: 500, color: "#3C4A40", padding: "11px 0" }}>
            Home
          </Link>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: 16, fontWeight: 500, color: pathname === l.href ? "#1E4D38" : "#3C4A40", padding: "11px 0" }}
            >
              {l.label}
            </Link>
          ))}
          <div className="hairline" style={{ margin: "12px 0" }} />
          <a
            href="https://platform.sophrosynesystems.org/login"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 15, fontWeight: 500, color: "#3C4A40", padding: "11px 0" }}
          >
            Platform login →
          </a>
          <Button variant="gold" size="md" href="/get-started" style={{ marginTop: 10, display: "flex" }}>
            Talk to Us
          </Button>
        </div>
      )}

      <style>{`
        .nav-link { transition: color 180ms var(--ease); }
        .nav-link:hover { color: #1E4D38 !important; }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mob { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
