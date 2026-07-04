import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import DisplayHeading from "@/components/ui/DisplayHeading";
import Button from "@/components/ui/Button";
import BrowserFrame from "@/components/ui/BrowserFrame";

const DELIVERABLES = [
  "Line-item savings model across 9 operational domains",
  "Accreditation risk assessment, AI-specific gaps identified",
  "Board-ready executive deck + CFO summary",
  "Faculty & staff AI readiness baseline",
  "Full implementation roadmap with pillar recommendations",
  "Grant language for Title III, HECAP, and state AI funds",
];

const TRUST_PILLS = [
  "100% IP transfer to your institution",
  "Fixed scope · Fixed fee",
  "No software mandated",
  "Expert team, not a platform",
];

export default function PricingHeroSection() {
  return (
    <section
      style={{
        padding: "160px var(--pad-h) 96px",
        background: "radial-gradient(120% 80% at 15% 0%, #ECF1EC 0%, #F4F0E6 60%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="pricing-hero-grid"
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "center",
        }}
      >
        {/* Left — copy */}
        <div>
          <Reveal>
            <Eyebrow>How We Work With You</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <DisplayHeading
              as="h1"
              size="display"
              accent="One conversation to start."
              style={{ margin: "20px 0 0" }}
            >
              Fixed-fee consulting.
            </DisplayHeading>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.65, color: "#4A584E", maxWidth: 480, margin: "24px 0 0" }}>
              Every engagement is scoped to your institution: audit, pilot, or full program deployment.
              Transparent scope, fixed fees, and all IP transfers to you on delivery.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "32px 0 0" }}>
              {TRUST_PILLS.map((p) => (
                <span
                  key={p}
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    color: "#1E4D38",
                    background: "#FFFFFF",
                    border: "1px solid rgba(30,77,56,0.16)",
                    borderRadius: 999,
                    padding: "6px 14px",
                    letterSpacing: "0.01em",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 36 }}>
              <Button variant="primary" size="lg" href="/get-started">Book an Audit</Button>
              <Button variant="secondary" size="lg" href="#roi">Estimate your ROI →</Button>
            </div>
          </Reveal>
        </div>

        {/* Right — audit deliverables, in a clean browser frame */}
        <Reveal delay={160}>
          <BrowserFrame title="AI & Accreditation Readiness Audit" padded>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, flexWrap: "wrap", paddingBottom: 20, borderBottom: "1px solid rgba(27,42,33,0.10)" }}>
              <div>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#B5862E" }}>
                  Starting Point
                </span>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 600, color: "#16241B", letterSpacing: "-0.015em", marginTop: 6 }}>
                  AI &amp; Accreditation Readiness Audit
                </div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 600, color: "#1E4D38", letterSpacing: "-0.03em", lineHeight: 1 }}>$45K</div>
                <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#8A968C", marginTop: 5 }}>Fixed fee · 4–6 wks</div>
              </div>
            </div>

            <div style={{ paddingTop: 20 }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A968C" }}>
                What You Receive
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
                {DELIVERABLES.map((d) => (
                  <div key={d} style={{ display: "flex", alignItems: "flex-start", gap: 11 }}>
                    <span aria-hidden style={{ width: 6, height: 6, borderRadius: "50%", background: "#1E4D38", flexShrink: 0, marginTop: 7 }} />
                    <span style={{ fontSize: 14, color: "#4A584E", lineHeight: 1.55 }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <p style={{ fontSize: 13, lineHeight: 1.6, color: "#5A6B60", margin: "22px 0 0", paddingTop: 18, borderTop: "1px solid rgba(27,42,33,0.10)" }}>
              The same analysis a Big-Three firm would charge $200K to $400K to produce, if they engage institutions your size.
            </p>
          </BrowserFrame>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
