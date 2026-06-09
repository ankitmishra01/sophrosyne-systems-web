"use client";

import Link from "next/link";

const NAV_LINKS = [
  { label: "Home",      href: "/"          },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing",   href: "/pricing"   },
  { label: "About",     href: "/about"     },
];

export default function Footer() {
  return (
    <footer
      style={{
        /* Vercel spec border-top */
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "#0a0a0a",
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
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 14 }}>
              <span
                translate="no"
                style={{ fontSize: 15, fontWeight: 700, color: "#f4f5f8", letterSpacing: "-0.04em" }}
              >
                Sophrosyne{" "}
                <span style={{ color: "#10b981", fontWeight: 400 }}>Systems</span>
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.65,
                color: "rgba(244,245,248,0.4)",
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
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(244,245,248,0.28)",
                margin: "0 0 16px",
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
                    color: "rgba(244,245,248,0.48)",
                    textDecoration: "none",
                    transition: "color 180ms",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#f4f5f8")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(244,245,248,0.48)")
                  }
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
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(244,245,248,0.28)",
                margin: "0 0 16px",
              }}
            >
              Contact
            </p>
            <a
              href="mailto:hello@sophrosynesystems.com"
              style={{
                fontSize: 13,
                color: "rgba(244,245,248,0.48)",
                textDecoration: "none",
                transition: "color 180ms",
                display: "block",
                marginBottom: 8,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#10b981")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(244,245,248,0.48)")
              }
            >
              hello@sophrosynesystems.com
            </a>
            <p style={{ fontSize: 12, color: "rgba(244,245,248,0.28)", margin: 0 }}>
              Western Accelerator Partner
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 11, color: "rgba(244,245,248,0.22)", margin: 0 }}>
            © 2026{" "}
            <span translate="no">Sophrosyne Systems Inc.</span> All rights reserved.
          </p>
          <p style={{ fontSize: 11, color: "rgba(244,245,248,0.18)", margin: 0 }}>
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
