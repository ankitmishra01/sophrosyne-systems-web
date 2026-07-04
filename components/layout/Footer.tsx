import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Book an Audit", href: "/get-started" },
];

const ROLE_LINKS = [
  { label: "For Provosts", href: "/for/provost" },
  { label: "For CFOs", href: "/for/cfo" },
  { label: "For CIOs", href: "/for/cio" },
];

const TOOL_LINKS = [
  { label: "US AI Readiness Index", href: "/insights/ai-readiness-index" },
  { label: "Canadian Universities Index", href: "/insights/canadian-universities" },
];

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p
        style={{
          fontSize: 10.5,
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "rgba(241,238,226,0.5)",
          margin: "0 0 18px",
          fontFamily: "var(--font-libre-franklin), sans-serif",
        }}
      >
        {title}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#141F17", color: "#F1EEE2" }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "88px var(--pad-h) 40px" }}>
        {/* Statement + CTA band */}
        <div
          className="foot-top"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 40,
            paddingBottom: 56,
            borderBottom: "1px solid rgba(201,217,206,0.14)",
            marginBottom: 56,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              color: "#F1EEE2",
              margin: 0,
              maxWidth: 620,
            }}
          >
            A measured path through <span style={{ color: "#C7A14A" }}>the AI transition.</span>
          </h2>
          <Button variant="gold" size="lg" href="/get-started" style={{ flexShrink: 0 }}>
            Book an Audit →
          </Button>
        </div>

        {/* Link columns */}
        <div
          className="footer-grid"
          style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1.2fr", gap: 40, marginBottom: 56 }}
        >
          <div>
            <Logo variant="full" size={28} reversed />
            <p style={{ fontSize: 13, lineHeight: 1.65, color: "#9FBFAD", maxWidth: 270, margin: "18px 0 0" }}>
              AI fluency, accreditation readiness, and enrollment differentiation for regional universities. Built on
              software, not slide decks.
            </p>
          </div>

          <Col title="Navigation">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="foot-link">
                {l.label}
              </Link>
            ))}
          </Col>

          <Col title="By Role">
            {ROLE_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="foot-link">
                {l.label}
              </Link>
            ))}
          </Col>

          <Col title="Tools">
            {TOOL_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="foot-link">
                {l.label}
              </Link>
            ))}
          </Col>

          <Col title="Contact">
            <a href="mailto:lauretta@sophrosynesystems.org" className="foot-link foot-link-gold">
              lauretta@sophrosynesystems.org
            </a>
            <span style={{ fontSize: 13, color: "rgba(241,238,226,0.5)" }}>Western Accelerator Partner</span>
          </Col>
        </div>

        <div
          style={{
            paddingTop: 28,
            borderTop: "1px solid rgba(201,217,206,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 11.5, color: "rgba(241,238,226,0.46)", margin: 0 }}>
            © 2026 <span translate="no">Sophrosyne Systems Inc.</span> All rights reserved.
          </p>
          <p style={{ fontSize: 11.5, color: "rgba(241,238,226,0.4)", margin: 0 }}>
            FERPA Compliant · Student IP Protected · Data Sovereign
          </p>
        </div>
      </div>

      <style>{`
        .foot-link {
          font-size: 13.5px; color: #9FBFAD; text-decoration: none;
          font-family: var(--font-libre-franklin), sans-serif;
          transition: color 180ms var(--ease);
        }
        .foot-link:hover { color: #E7EFE8; }
        .foot-link-gold:hover { color: #C7A14A; }
        @media (max-width: 860px) {
          .foot-top { flex-direction: column; align-items: flex-start; gap: 28px; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
