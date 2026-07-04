import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { PHILOSOPHY_BLOCKS } from "@/lib/data";

export default function PhilosophyBlocks() {
  return (
    <Section bg="ink">
      <SectionHeader
        eyebrow="Our philosophy"
        dark
        title="Three principles that shape"
        accent="every engagement."
        size="h2"
      />
      <div className="philosophy-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 52 }}>
        {PHILOSOPHY_BLOCKS.map((block, i) => (
          <Reveal key={i} delay={i * 90}>
            <div style={{ height: "100%", padding: "34px 28px", background: "rgba(241,238,226,0.04)", border: "1px solid rgba(201,217,206,0.12)", borderRadius: 16 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 700, color: "#C7A14A", lineHeight: 1, display: "block", marginBottom: 22 }}>
                {block.number}
              </span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 600, color: "#F1EEE2", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
                {block.title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "#9FBFAD", margin: 0 }}>{block.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <style>{`
        @media (max-width: 900px) { .philosophy-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 600px) and (max-width: 900px) { .philosophy-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </Section>
  );
}
