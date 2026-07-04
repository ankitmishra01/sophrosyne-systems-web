import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const AUDIENCES = [
  {
    role: "For Provosts",
    href: "/for/provost",
    metric: "6–12 mo",
    metricLabel: "embedded on-site",
    headline: "Faculty own everything. Sophrosyne never appears on a transcript.",
    body: "Our specialist works alongside your faculty for 6 to 12 months. Faculty own everything: the syllabi, the assessments, and every student credential. IP stays with your institution, in writing. We train faculty to lead the curriculum themselves. We step back after that.",
    link: "See how the programme works →",
  },
  {
    role: "For CFOs",
    href: "/for/cfo",
    metric: "$45K",
    metricLabel: "audit, credited in full",
    headline: "The audit pays for itself. Before the board votes.",
    body: "We identify savings across nine areas of your operations in two weeks. Those savings fund the full AI programme within 12 months. You have the business case before the board votes. The $45K audit fee applies in full to any engagement you choose.",
    link: "See the savings model →",
  },
  {
    role: "For CIOs",
    href: "/for/cio",
    metric: "1 week",
    metricLabel: "to integrate",
    headline: "Canvas. Banner. Slate. One week to integrate. No lock-in.",
    body: "No multi-year contracts. No platform lock-in. All data stays in your own systems. After the two-week audit you leave with the full board report. The audit is the only commitment. Everything after is your choice.",
    link: "See the integration architecture →",
  },
];

export default function BenefitsSection() {
  return (
    <Section bg="parchment">
      <SectionHeader
        eyebrow="Who benefits"
        title="Provosts, CFOs, and CIOs each get a"
        accent="measurable outcome in one engagement."
        size="h2"
        maxWidth={860}
      />

      <div className="benefits-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 56, alignItems: "stretch" }}>
        {AUDIENCES.map((a, i) => (
          <Reveal key={a.role} delay={i * 90}>
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                background: "#FFFFFF",
                border: "1px solid rgba(27,42,33,0.10)",
                borderRadius: 18,
                padding: "30px 28px 26px",
                boxShadow: "0 1px 2px rgba(27,42,33,0.04), 0 24px 48px -32px rgba(27,42,33,0.16)",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 20 }}>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#B5862E" }}>
                  {a.role}
                </span>
                <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "#8A968C", textAlign: "right" }}>
                  {a.metricLabel}
                </span>
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.6rem", fontWeight: 600, color: "#1E4D38", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 18 }}>
                {a.metric}
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 600, color: "#16241B", letterSpacing: "-0.015em", lineHeight: 1.25, margin: "0 0 12px" }}>
                {a.headline}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#4A584E", margin: "0 0 22px", flex: 1 }}>{a.body}</p>
              <Link href={a.href} className="card-link" style={{ marginTop: "auto", fontSize: 13, fontWeight: 600, color: "#1E4D38" }}>
                {a.link}
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      <style>{`
        .card-link { transition: opacity 160ms var(--ease); }
        .card-link:hover { opacity: 0.7; }
        @media (max-width: 860px) { .benefits-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </Section>
  );
}
