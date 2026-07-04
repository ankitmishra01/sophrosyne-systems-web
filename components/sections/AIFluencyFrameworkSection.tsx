import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureList from "@/components/ui/FeatureList";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const CARDS = [
  {
    title: "What it is",
    body: "A structured competency model mapping AI skills across knowledge domains: from prompt engineering and data literacy to AI governance and applied tool use. Designed for universities: preserves academic integrity while building real-world capability.",
  },
  {
    title: "How it's delivered",
    body: "Subscription service. A senior AI advisor and curriculum specialist embed in your institution for the first academic year. Faculty are certified before the first student cohort begins. Modules integrate into existing degree structures, no new courses required.",
  },
  {
    title: "What it produces",
    body: "Every student graduates with a documented, verified AI competency portfolio tracked on the Sophrosyne Platform. Skills are portable across industries. Evidence is formatted for accreditors. Employers know exactly what your graduates can do.",
  },
];

export default function AIFluencyFrameworkSection() {
  return (
    <Section bg="pine">
      <SectionHeader
        eyebrow="Proprietary IP · AI Fluency Standard™"
        align="left"
        dark
        maxWidth={720}
        title="The AI Fluency Standard™ —"
        accent="the only structured AI curriculum built exclusively for universities."
        lead="No competitor has an equivalent. The Standard ships as a subscription, integrates into existing programmes, and produces accreditor-ready evidence on day one of each cohort."
      />

      <Reveal delay={120} style={{ marginTop: 48 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 44 }} className="framework-grid">
          {CARDS.map((c, i) => (
            <FeatureList key={c.title} dark start={i + 1} items={[c]} />
          ))}
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div
          className="framework-cta"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            borderTop: "1px solid rgba(199,161,74,0.18)",
            paddingTop: 30,
            marginTop: 44,
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(201,217,206,0.85)", margin: 0, maxWidth: 540 }}>
            The Standard extends to the AI Foundry, where students apply fluency to build real products, validated by
            industry mentors.
          </p>
          <Button variant="gold" size="md" href="/solutions/curriculum">
            Explore the Standard →
          </Button>
        </div>
      </Reveal>

      <style>{`
        @media (max-width: 860px) { .framework-grid { grid-template-columns: 1fr !important; gap: 8px !important; } }
        @media (min-width: 861px) and (max-width: 1100px) { .framework-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </Section>
  );
}
