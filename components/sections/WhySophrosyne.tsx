import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { WHY_ITEMS } from "@/lib/data";

const PILLARS = [
  { numeral: "I", tag: "Operational Efficiency", href: "/solutions/opex" },
  { numeral: "II", tag: "AI Fluency Programme", href: "/solutions/curriculum" },
  { numeral: "III", tag: "AI Foundry", href: "/solutions/foundry" },
];

export default function WhySophrosyne() {
  return (
    <Section bg="sage">
      <SectionHeader
        eyebrow="The Sophrosyne Model"
        title="Three pillars."
        accent="One complete campus transformation."
        lead="Three pillars delivered by expert teams, not handed off as a self-serve toolkit. Each pillar works independently and builds on the others. Pillar I identifies the savings that fund Pillars II and III. The result: AI-fluent graduates, a leaner operation, and an innovation culture delivered within one academic year. The institution keeps 100% of all IP."
      />

      <div className="pillars-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 56 }}>
        {PILLARS.map((p, i) => (
          <Reveal key={p.tag} delay={i * 90}>
            <Link
              href={p.href}
              className="pillar-card"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                background: "#FFFFFF",
                border: "1px solid rgba(27,42,33,0.10)",
                borderRadius: 18,
                padding: "32px 30px",
                boxShadow: "0 1px 2px rgba(27,42,33,0.04), 0 24px 48px -32px rgba(27,42,33,0.16)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "#C7A14A", lineHeight: 1 }}>
                  {p.numeral}
                </span>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B5862E" }}>
                  {p.tag}
                </span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "#16241B", letterSpacing: "-0.02em", margin: "0 0 12px" }}>
                {WHY_ITEMS[i].title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.68, color: "#4A584E", margin: "0 0 22px", flex: 1 }}>{WHY_ITEMS[i].body}</p>
              <span className="pillar-link" style={{ marginTop: "auto", fontSize: 13, fontWeight: 600, color: "#1E4D38" }}>
                Explore Pillar {p.numeral} →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} style={{ textAlign: "center", marginTop: 44 }}>
        <Button variant="primary" size="lg" href="/solutions">
          Explore all three solutions →
        </Button>
      </Reveal>

      <style>{`
        .pillar-card { transition: transform 200ms var(--ease), box-shadow 200ms var(--ease); }
        .pillar-card:hover { transform: translateY(-3px); box-shadow: 0 1px 2px rgba(27,42,33,0.06), 0 32px 60px -30px rgba(27,42,33,0.24); }
        .pillar-card:hover .pillar-link { opacity: 0.75; }
        @media (max-width: 860px) { .pillars-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </Section>
  );
}
