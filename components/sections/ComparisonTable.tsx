import { Check, X, Minus } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { COMPARISON_ROWS } from "@/lib/data";

type Tone = "good" | "bad" | "neutral";

const TONE: Record<Tone, { color: string; Icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }> }> = {
  good: { color: "#1E4D38", Icon: Check },
  bad: { color: "#B0726A", Icon: X },
  neutral: { color: "#8A968C", Icon: Minus },
};

function Cell({ v, tone, emphasis }: { v: string; tone: Tone; emphasis?: boolean }) {
  const t = TONE[tone];
  const Icon = t.Icon;
  return (
    <td style={{ padding: "16px 20px", textAlign: "center", background: emphasis ? "rgba(30,77,56,0.05)" : "transparent", borderLeft: emphasis ? "1px solid rgba(30,77,56,0.14)" : "none", borderRight: emphasis ? "1px solid rgba(30,77,56,0.14)" : "none" }}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 7, justifyContent: "center" }}>
        <Icon size={15} color={t.color} strokeWidth={2.4} />
        <span style={{ fontSize: 13.5, color: emphasis ? "#16241B" : "#4A584E", fontWeight: emphasis ? 600 : 400, fontFamily: "var(--font-libre-franklin), sans-serif" }}>{v}</span>
      </span>
    </td>
  );
}

export default function ComparisonTable() {
  return (
    <Section bg="sage">
      <SectionHeader
        eyebrow="How we compare"
        align="left"
        maxWidth={680}
        title="Where we fit —"
        accent="and why the alternatives leave a gap."
        lead="Enterprise consulting firms start at $500K. Research subscription firms start at $85K/year and leave you with reports, not results. Here is the honest trade-off."
      />
      <Reveal delay={100} style={{ marginTop: 40, overflowX: "auto", borderRadius: 18, border: "1px solid rgba(27,42,33,0.10)", boxShadow: "0 1px 2px rgba(27,42,33,0.04), 0 24px 48px -32px rgba(27,42,33,0.16)", background: "#FFFFFF" }}>
        <table style={{ width: "100%", minWidth: 720, borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ padding: "18px 20px", textAlign: "left", width: "26%" }} />
              <th style={{ padding: "16px 20px", textAlign: "center", background: "#1E4D38" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "#F1EEE2", letterSpacing: "-0.01em" }}>Sophrosyne</span>
              </th>
              <th style={{ padding: "16px 20px", textAlign: "center" }}>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A968C" }}>Enterprise Consulting</span>
              </th>
              <th style={{ padding: "16px 20px", textAlign: "center" }}>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A968C" }}>Research Subscription</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row) => (
              <tr key={row.dimension} className="comparison-row" style={{ borderTop: "1px solid rgba(27,42,33,0.08)" }}>
                <td style={{ padding: "16px 20px", fontSize: 14, fontWeight: 600, fontFamily: "var(--font-display)", color: "#16241B", letterSpacing: "-0.01em" }}>{row.dimension}</td>
                <Cell v={row.sophrosyne.v} tone={row.sophrosyne.tone as Tone} emphasis />
                <Cell v={row.mbb.v} tone={row.mbb.tone as Tone} />
                <Cell v={row.diy.v} tone={row.diy.tone as Tone} />
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
      <style>{`
        .comparison-row { transition: background 160ms ease; }
        .comparison-row:hover { background: rgba(30,77,56,0.03); }
      `}</style>
    </Section>
  );
}
