import { JOURNEY_STEPS } from "@/lib/data";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function JourneyTimeline() {
  return (
    <Section bg="parchment">
      <SectionHeader eyebrow="How we engage" title="From audit to consortium, in" accent="three phases." />

      <div className="journey-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 56 }}>
        {JOURNEY_STEPS.map((step, i) => (
          <Reveal key={i} delay={i * 100}>
            <div
              style={{
                height: "100%",
                background: "#FFFFFF",
                border: "1px solid rgba(27,42,33,0.10)",
                borderRadius: 18,
                padding: "32px 30px",
                boxShadow: "0 1px 2px rgba(27,42,33,0.04), 0 24px 48px -32px rgba(27,42,33,0.14)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#C7A14A", fontVariantNumeric: "tabular-nums" }}>
                  {step.number}
                </span>
                <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A584E", background: "rgba(30,77,56,0.06)", border: "1px solid rgba(30,77,56,0.12)", borderRadius: 999, padding: "4px 11px" }}>
                  {step.duration}
                </span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "#16241B", letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 14px" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "#4A584E", margin: 0 }}>{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} style={{ textAlign: "center", marginTop: 44 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.14)", borderRadius: 999, padding: "11px 22px", fontSize: 13.5, color: "#16241B" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1E4D38" }} />
          The audit is the only commitment. Everything after is opt-in.
        </span>
      </Reveal>

      <style>{`@media (max-width: 768px) { .journey-grid { grid-template-columns: 1fr !important; } }`}</style>
    </Section>
  );
}
