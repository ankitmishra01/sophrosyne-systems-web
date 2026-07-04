import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const TYPES = [
  {
    label: "Research & Advisory Firms",
    signal: "Reports, not results.",
    body: "Subscription-based firms charge $85K–$150K per year for access to benchmarking data and analyst reports. They tell you what the market looks like. They don't change anything inside your institution.",
    verdict: "Data without execution",
  },
  {
    label: "Enterprise Consulting Groups",
    signal: "Transformation, but not for you.",
    body: "Large management consultancies serve the top 100 research universities at $500K–$3M minimums, 12–24 month timelines, and staffing models built around junior analysts. For most institutions, they simply don't engage.",
    verdict: "Out of reach for most",
  },
  {
    label: "Sophrosyne",
    signal: "Implementation at boutique speed.",
    body: "Senior experts embedded inside your institution. Audit in 4 to 6 weeks. Pilot in 90 days. Fixed fees at every stage, starting at $45K, with all IP transferring to your institution on delivery.",
    verdict: "Built for this",
    highlight: true,
  },
];

export default function MarketContextSection() {
  return (
    <Section bg="parchment" style={{ borderTop: "1px solid rgba(27,42,33,0.06)" }}>
      <SectionHeader
        eyebrow="The Market"
        title="Three types of firm."
        accent="One decision."
        lead="When a university shortlists consultants for an AI transformation, they typically encounter the same market. Understanding where you are on that map changes the conversation."
        align="left"
        maxWidth={620}
      />

      <div className="market-context-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 56, alignItems: "stretch" }}>
        {TYPES.map((type, i) => {
          const dark = Boolean(type.highlight);
          return (
            <Reveal key={type.label} delay={i * 90}>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  background: dark ? "#1E4D38" : "#FFFFFF",
                  border: dark ? "1px solid rgba(199,161,74,0.24)" : "1px solid rgba(27,42,33,0.10)",
                  borderRadius: 18,
                  padding: "30px 28px",
                  boxShadow: dark
                    ? "0 1px 2px rgba(27,42,33,0.06), 0 24px 48px -28px rgba(30,77,56,0.5)"
                    : "0 1px 2px rgba(27,42,33,0.04), 0 24px 48px -32px rgba(27,42,33,0.16)",
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.13em", textTransform: "uppercase", color: dark ? "#E9C77B" : "#B5862E" }}>
                  {type.label}
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 600, color: dark ? "#F1EEE2" : "#16241B", letterSpacing: "-0.02em", lineHeight: 1.2, margin: 0 }}>
                  {type.signal}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: dark ? "var(--color-on-dark-mid)" : "#4A584E", margin: 0, flex: 1 }}>
                  {type.body}
                </p>
                <div style={{ marginTop: 8, paddingTop: 16, borderTop: `1px solid ${dark ? "rgba(255,255,255,0.12)" : "rgba(27,42,33,0.10)"}` }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 600, letterSpacing: "0.03em", color: dark ? "#E9C77B" : "#4A584E" }}>
                    <span aria-hidden style={{ width: 6, height: 6, borderRadius: "50%", background: dark ? "#C7A14A" : "#8A968C", flexShrink: 0 }} />
                    {type.verdict}
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .market-context-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </Section>
  );
}
