import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { FOUNDING_COHORT } from "@/lib/data";

export default function FoundingCohort() {
  return (
    <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }} className="cohort-split">
      {/* LEFT — deep ink */}
      <div style={{ background: "#1B2A21", display: "flex", justifyContent: "flex-end" }}>
        <Reveal style={{ width: "100%", maxWidth: 560, padding: "104px 56px 104px max(40px, var(--pad-h))" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(199,161,74,0.14)",
              border: "1px solid rgba(199,161,74,0.32)",
              borderRadius: 999,
              padding: "6px 15px",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#C7A14A",
              marginBottom: 24,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#C7A14A" }} />
            3 of 5 spots remaining
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.6vw, 3.1rem)",
              fontWeight: 600,
              color: "#F1EEE2",
              margin: "0 0 20px",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Five institutions that will shape what higher education looks like in the age of AI.
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.72, color: "rgba(241,238,226,0.72)", margin: "0 0 36px" }}>
            We are building Sophrosyne with our first five institutions, not for them. Pricing locked. Charter
            institutions shape the roadmap and arrive at their board table with a self-funded transformation plan.
          </p>
          <Button variant="gold" size="lg" href="/get-started">
            Apply to the cohort →
          </Button>
        </Reveal>
      </div>

      {/* RIGHT — warm parchment */}
      <div style={{ background: "#F4F0E6", display: "flex", justifyContent: "flex-start" }}>
        <div style={{ width: "100%", maxWidth: 560, padding: "104px max(40px, var(--pad-h)) 104px 56px" }}>
          <div style={{ marginBottom: 28 }}>
            <Eyebrow>What founding partners get</Eyebrow>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {FOUNDING_COHORT.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", background: "#1E4D38", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                  <Check size={14} color="#F4F0E6" strokeWidth={2.6} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 600, color: "#16241B", margin: "0 0 4px", letterSpacing: "-0.01em" }}>
                    {b.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "#4A584E", margin: 0 }}>{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .cohort-split { grid-template-columns: 1fr !important; }
          .cohort-split > div > div,
          .cohort-split > div > .reveal {
            padding-left: max(40px, var(--pad-h)) !important;
            padding-right: max(40px, var(--pad-h)) !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
