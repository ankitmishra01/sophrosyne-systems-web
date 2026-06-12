"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";

const NAV_LINKS = [
  { label: "Home",        href: "/"            },
  { label: "Solutions",   href: "/solutions"   },
  { label: "Pricing",     href: "/pricing"     },
  { label: "ROI Calculator", href: "/roi"      },
  { label: "Outcomes",    href: "/outcomes"    },
  { label: "Insights",    href: "/insights"    },
  { label: "About",       href: "/about"       },
  { label: "Get Started", href: "/get-started" },
];

const ROLE_LINKS = [
  { label: "For Provosts", href: "/for/provost" },
  { label: "For CFOs",     href: "/for/cfo"     },
  { label: "For CIOs",     href: "/for/cio"     },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(27,42,33,0.14)",
        background: "#21271F",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          padding: "56px var(--pad-h) 36px",
        }}
      >
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <Logo variant="full" size={26} reversed />
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.65,
                color: "#9FBFAD",
                maxWidth: 260,
                margin: 0,
              }}
            >
              Treat AI like a language. Built for campus infrastructure.
              Helping regional universities produce AI-fluent graduates
              and build programs that last.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(201,217,206,0.45)",
                margin: "0 0 16px",
                fontFamily: "var(--font-libre-franklin), sans-serif",
              }}
            >
              Navigation
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: 13,
                    color: "#9FBFAD",
                    textDecoration: "none",
                    transition: "color 180ms",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#C9D9CE")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#9FBFAD")
                  }
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* By Role */}
          <div>
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(201,217,206,0.45)",
                margin: "0 0 16px",
                fontFamily: "var(--font-libre-franklin), sans-serif",
              }}
            >
              By Role
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {ROLE_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ fontSize: 13, color: "#9FBFAD", textDecoration: "none", transition: "color 180ms" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C9D9CE")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#9FBFAD")}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(201,217,206,0.45)",
                margin: "0 0 16px",
                fontFamily: "var(--font-libre-franklin), sans-serif",
              }}
            >
              Contact
            </p>
            <a
              href="mailto:hello@sophrosynesystems.com"
              style={{
                fontSize: 13,
                color: "#9FBFAD",
                textDecoration: "none",
                transition: "color 180ms",
                display: "block",
                marginBottom: 8,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#C7A14A")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#9FBFAD")
              }
            >
              hello@sophrosynesystems.com
            </a>
            <p style={{ fontSize: 12, color: "rgba(201,217,206,0.45)", margin: 0 }}>
              Western Accelerator Partner
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(201,217,206,0.12)",
            paddingTop: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 11, color: "rgba(201,217,206,0.35)", margin: 0 }}>
            © 2026{" "}
            <span translate="no">Sophrosyne Systems Inc.</span> All rights reserved.
          </p>
          <p style={{ fontSize: 11, color: "rgba(201,217,206,0.30)", margin: 0 }}>
            FERPA Compliant · Student IP Protected · Data Sovereign
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
