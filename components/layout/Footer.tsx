"use client";

import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(248,250,252,0.06)",
        background: "#0a0f1a",
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
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#f8fafc",
                  letterSpacing: "-0.03em",
                }}
              >
                Sophrosyne
              </span>
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  color: "#10b981",
                  letterSpacing: "-0.03em",
                }}
              >
                {" "}Systems
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.65,
                color: "rgba(248,250,252,0.45)",
                maxWidth: 260,
                margin: 0,
              }}
            >
              Treat AI like a language. Build with enterprise infrastructure.
              Empowering Tier 2 and Tier 3 universities to become scalable
              engines of AI innovation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(248,250,252,0.35)",
                marginBottom: 16,
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
                    fontSize: 14,
                    color: "rgba(248,250,252,0.55)",
                    textDecoration: "none",
                    transition: "color 200ms",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "#f8fafc")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(248,250,252,0.55)")
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
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(248,250,252,0.35)",
                margin: "0 0 16px",
              }}
            >
              Contact
            </p>
            <a
              href="mailto:hello@sophrosynesystems.com"
              style={{
                fontSize: 14,
                color: "rgba(248,250,252,0.55)",
                textDecoration: "none",
                transition: "color 200ms",
                display: "block",
                marginBottom: 8,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#10b981")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(248,250,252,0.55)")
              }
            >
              hello@sophrosynesystems.com
            </a>
            <p
              style={{
                fontSize: 13,
                color: "rgba(248,250,252,0.35)",
                margin: 0,
              }}
            >
              Western Accelerator Partner
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(248,250,252,0.06)",
            paddingTop: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            style={{
              fontSize: 12,
              color: "rgba(248,250,252,0.28)",
              margin: 0,
            }}
          >
            © 2026 Sophrosyne Systems Inc. All rights reserved.
          </p>
          <p
            style={{
              fontSize: 12,
              color: "rgba(248,250,252,0.22)",
              margin: 0,
            }}
          >
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
