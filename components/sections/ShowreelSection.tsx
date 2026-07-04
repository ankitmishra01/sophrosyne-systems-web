import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureList from "@/components/ui/FeatureList";
import Reveal from "@/components/ui/Reveal";
import BrowserFrame from "@/components/ui/BrowserFrame";

const FEATURES = [
  { title: "Student-Level Tracking", body: "Progression from baseline to portfolio-ready, visible by cohort and department." },
  { title: "FERPA-Compliant by Design", body: "Data never leaves your institution's infrastructure perimeter." },
  { title: "Accreditor-Ready Reports", body: "Live dashboards and auto-exported evidence for HLC, SACSCOC, and NECHE." },
  { title: "GitHub Portfolio Integration", body: "Real commit history and deployed projects linked to each student's record." },
];

const AGENTS = [
  { name: "AI Fluency Assessor", desc: "Measures competency progression by level and department", status: "Live" },
  { name: "Faculty Certification Tracker", desc: "Monitors faculty readiness and certification status", status: "Live" },
  { name: "Portfolio Builder", desc: "Tracks GitHub portfolio completions per cohort", status: "Live" },
  { name: "Outcome Reporter", desc: "Auto-assembles employment outcome evidence for accreditors", status: "Live" },
  { name: "OPEX Savings Modeler", desc: "Models cost savings across 9 operational domains", status: "Beta" },
  { name: "Demo Day Coordinator", desc: "Manages Foundry submissions and employer pipeline", status: "Beta" },
];

function AgentsPanel() {
  return (
    <div style={{ background: "#111318", padding: "18px 18px 20px", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C7A14A", marginBottom: 14 }}>
        Programme Agents
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {AGENTS.map((a) => (
          <div key={a.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "12px 14px" }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#F1EEE2" }}>{a.name}</div>
              <div style={{ fontSize: 11.5, color: "rgba(201,217,206,0.6)", marginTop: 2 }}>{a.desc}</div>
            </div>
            <span
              style={{
                flexShrink: 0,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: a.status === "Live" ? "#7FCB98" : "#E9C77B",
                background: a.status === "Live" ? "rgba(127,203,152,0.12)" : "rgba(233,199,123,0.12)",
                border: `1px solid ${a.status === "Live" ? "rgba(127,203,152,0.3)" : "rgba(233,199,123,0.3)"}`,
                borderRadius: 999,
                padding: "3px 10px",
              }}
            >
              {a.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ShowreelSection() {
  return (
    <Section bg="parchment">
      <div className="showreel-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 64, alignItems: "center" }}>
        <div>
          <SectionHeader
            eyebrow="AI Fluency Tracker"
            align="left"
            title="Real-time visibility into your"
            accent="institution's AI competency."
            size="display"
          />
          <div style={{ marginTop: 28 }}>
            <FeatureList items={FEATURES} />
          </div>
        </div>
        <Reveal delay={120}>
          <BrowserFrame url="platform.sophrosynesystems.org/agents" dark>
            <AgentsPanel />
          </BrowserFrame>
        </Reveal>
      </div>
      <style>{`@media (max-width: 900px) { .showreel-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </Section>
  );
}
