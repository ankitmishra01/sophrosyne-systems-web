import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { INSIGHT_ARTICLES } from "@/lib/data";
import { getUSUniversities } from "@/lib/db";
import { renderText } from "@/lib/renderText";
import CallToAction from "@/components/sections/CallToAction";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "The State of AI Readiness in Regional Universities — Sophrosyne Systems",
  description: "Only 8 of 100 tracked U.S. universities have reached full AI integration. The rest are caught between a published policy and a working programme — and the gap is widening.",
};

const PINE = "#1E4D38";
const GOLD = "#C7A14A";
const MUTED = "#9FBFAD";
const INK = "#1B2A21";
const BODY = "#33403A";

function ChartBlock({ label, children, attribution }: { label: string; children: React.ReactNode; attribution: string }) {
  return (
    <div style={{ margin: "40px 0", background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)", borderRadius: 10, padding: "28px 32px", boxShadow: "0 1px 4px rgba(27,42,33,0.06)" }}>
      <p style={{ fontSize: 11, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A584E", margin: "0 0 18px" }}>
        {label}
      </p>
      {children}
      <p style={{ fontSize: 11, color: MUTED, fontFamily: "var(--font-libre-franklin), sans-serif", margin: "16px 0 0", borderTop: "1px solid rgba(27,42,33,0.08)", paddingTop: 12 }}>
        {attribution}
      </p>
    </div>
  );
}

function HBar({ label, count, max, color, sublabel }: { label: string; count: number; max: number; color: string; sublabel?: string }) {
  const pct = Math.round((count / max) * 100);
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: INK, fontFamily: "var(--font-libre-franklin), sans-serif" }}>{label}</span>
        <span style={{ fontSize: 13, color: "#4A584E", fontFamily: "var(--font-libre-franklin), sans-serif" }}>{count} institutions</span>
      </div>
      <div style={{ height: 28, background: "rgba(27,42,33,0.06)", borderRadius: 4, overflow: "hidden", position: "relative" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: color, borderRadius: 4, display: "flex", alignItems: "center", paddingLeft: 10 }}>
          {pct >= 20 && <span style={{ fontSize: 12, fontWeight: 700, color: "#FFFFFF", fontFamily: "var(--font-libre-franklin), sans-serif" }}>{pct}%</span>}
        </div>
        {pct < 20 && <span style={{ position: "absolute", left: `calc(${pct}% + 8px)`, top: "50%", transform: "translateY(-50%)", fontSize: 12, fontWeight: 700, color: "#4A584E", fontFamily: "var(--font-libre-franklin), sans-serif" }}>{pct}%</span>}
      </div>
      {sublabel && <p style={{ fontSize: 11.5, color: "#6B7F72", fontFamily: "var(--font-libre-franklin), sans-serif", margin: "4px 0 0", fontStyle: "italic" }}>{sublabel}</p>}
    </div>
  );
}

function PctBar({ label: stageLabel, pct, color }: { label: string; pct: number; color: string }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 5 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: INK, fontFamily: "var(--font-libre-franklin), sans-serif" }}>{stageLabel}</span>
        <span style={{ fontSize: 13, fontWeight: 700, color, fontFamily: "var(--font-libre-franklin), sans-serif" }}>{pct}%</span>
      </div>
      <div style={{ height: 12, background: "rgba(27,42,33,0.06)", borderRadius: 6, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: color, borderRadius: 6, transition: "width 600ms" }} />
      </div>
    </div>
  );
}

export default async function StateOfAIReadinessPage() {
  const institutions = await getUSUniversities();
  const a = INSIGHT_ARTICLES["state-of-ai-readiness-regional-universities"];

  // Compute chart data live from index
  const total = institutions.length;
  const stageData = ([5, 4, 3, 2] as const).map((s) => ({
    stage: s,
    count: institutions.filter((u) => u.maturityStage === s).length,
  }));
  const currByStage = ([5, 4, 3, 2] as const).map((s) => {
    const atStage = institutions.filter((u) => u.maturityStage === s);
    const withCurr = atStage.filter((u) => u.aiCurriculumInitiative).length;
    return { stage: s, pct: Math.round((withCurr / atStage.length) * 100) };
  });
  const aRange = institutions.filter((u) => ["A+", "A", "A-"].includes(u.financialGrade)).length;
  const bRange = institutions.filter((u) => ["B+", "B", "B-"].includes(u.financialGrade)).length;
  const cRange = institutions.filter((u) => ["C+", "C", "C-", "D", "F"].includes(u.financialGrade)).length;
  const maxBar = Math.max(aRange, bRange, cRange, stageData[0]?.count ?? 1);

  const stageLabels: Record<number, string> = { 5: "Stage 5: Reshape", 4: "Stage 4: Integrate", 3: "Stage 3: Automate", 2: "Stage 2: Deploy" };
  const stageColors: Record<number, string> = { 5: PINE, 4: "#2A6B4F", 3: GOLD, 2: MUTED };
  const stageExamples: Record<number, string> = {
    5: "MIT, Stanford, CMU, Georgia Tech",
    4: "Cornell, Harvard, Michigan, Duke",
    3: "Northeastern, Georgetown, UC Davis",
    2: "Case Western, Fordham, Syracuse",
  };
  const currColors = (pct: number) => pct >= 80 ? PINE : pct >= 50 ? GOLD : MUTED;

  const sections = a.sections;

  return (
    <>
      <article style={{ padding: "140px var(--pad-h) 0", background: "radial-gradient(ellipse 70% 40% at 50% 0%, #ECF1EC 0%, #F4F0E6 55%)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Link href="/insights" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "#4A584E", textDecoration: "none", fontFamily: "var(--font-libre-franklin), sans-serif", marginBottom: 28 }}>
            <ArrowLeft size={14} strokeWidth={2.2} /> All insights
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <span style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "#B5862E", background: "rgba(199,161,74,0.12)", border: "1px solid rgba(181,134,46,0.28)", borderRadius: 4, padding: "3px 9px" }}>
              {a.category}
            </span>
            <span style={{ fontSize: 12, color: "#4A584E" }}>{a.readTime}</span>
          </div>
          <h1 style={{ fontSize: "clamp(24px, 3.2vw, 46px)", fontWeight: 500, fontFamily: "var(--font-display)", color: INK, margin: "0 0 20px", letterSpacing: "-0.015em", lineHeight: 1.1 }}>
            {a.title}
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: "#4A584E", margin: "0 0 12px", fontFamily: "var(--font-display)", fontStyle: "italic" }}>
            {a.dek}
          </p>
          {a.heroImage && (
            <div style={{ margin: "32px 0 0", borderRadius: 10, overflow: "hidden", aspectRatio: "16/7" }}>
              <img
                src={a.heroImage.src}
                alt={a.heroImage.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          )}
        </div>
      </article>

      <div style={{ background: "#F4F0E6", padding: "48px var(--pad-h) var(--section-py)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>

          {/* Section 1 */}
          <section style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: "clamp(20px, 2.6vw, 28px)", fontWeight: 500, fontFamily: "var(--font-display)", color: INK, margin: "0 0 16px", letterSpacing: "-0.012em" }}>
              {sections[0].heading}
            </h2>
            {sections[0].paragraphs.map((p, j) => (
              <p key={j} style={{ fontSize: 16.5, lineHeight: 1.78, color: BODY, margin: "0 0 18px" }}>{renderText(p)}</p>
            ))}
          </section>

          {/* Chart 1: Stage Distribution */}
          <ChartBlock
            label="Chart 1: U.S. Universities by AI Maturity Stage"
            attribution={`Source: Sophrosyne AI Readiness Index, Q2 2026. N=${total} institutions.`}
          >
            <p style={{ fontSize: 13, color: "#4A584E", fontFamily: "var(--font-libre-franklin), sans-serif", margin: "0 0 20px", fontStyle: "italic" }}>
              92% have not reached full AI integration across research, curriculum, and operations
            </p>
            {stageData.map(({ stage, count }) => (
              <HBar
                key={stage}
                label={stageLabels[stage]}
                count={count}
                max={total}
                color={stageColors[stage]}
                sublabel={stageExamples[stage]}
              />
            ))}
            <div style={{ display: "flex", gap: 20, marginTop: 16, flexWrap: "wrap" }}>
              {stageData.map(({ stage, count }) => (
                <div key={stage} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 2, background: stageColors[stage], flexShrink: 0 }} />
                  <span style={{ fontSize: 11, color: "#4A584E", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                    Stage {stage}: {count} ({Math.round((count / total) * 100)}%)
                  </span>
                </div>
              ))}
            </div>
          </ChartBlock>

          {/* Section 2 */}
          <section style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: "clamp(20px, 2.6vw, 28px)", fontWeight: 500, fontFamily: "var(--font-display)", color: INK, margin: "0 0 16px", letterSpacing: "-0.012em" }}>
              {sections[1].heading}
            </h2>
            {sections[1].paragraphs.map((p, j) => (
              <p key={j} style={{ fontSize: 16.5, lineHeight: 1.78, color: BODY, margin: "0 0 18px" }}>{renderText(p)}</p>
            ))}
          </section>

          {/* Pullquote after section 2 */}
          <blockquote style={{ margin: "36px 0", padding: "4px 0 4px 24px", borderLeft: `3px solid ${GOLD}`, fontSize: "clamp(20px, 2.6vw, 26px)", lineHeight: 1.5, fontStyle: "italic", fontFamily: "var(--font-display)", color: PINE }}>
            {a.pullquote}
          </blockquote>

          {/* Chart 2: Curriculum by Stage */}
          <ChartBlock
            label="Chart 2: Curriculum Initiative Adoption by Maturity Stage"
            attribution="Source: Sophrosyne AI Readiness Index, Q2 2026. Curriculum initiative = formal institutional AI curriculum programme publicly documented."
          >
            <p style={{ fontSize: 13, color: "#4A584E", fontFamily: "var(--font-libre-franklin), sans-serif", margin: "0 0 20px", fontStyle: "italic" }}>
              100% adoption at Stage 4–5; only 30% at Stage 2. The widest single-dimension gap in the index.
            </p>
            {currByStage.map(({ stage, pct }) => (
              <PctBar
                key={stage}
                label={stageLabels[stage]}
                pct={pct}
                color={currColors(pct)}
              />
            ))}
          </ChartBlock>

          {/* Section 3 */}
          <section style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: "clamp(20px, 2.6vw, 28px)", fontWeight: 500, fontFamily: "var(--font-display)", color: INK, margin: "0 0 16px", letterSpacing: "-0.012em" }}>
              {sections[2].heading}
            </h2>
            {sections[2].paragraphs.map((p, j) => (
              <p key={j} style={{ fontSize: 16.5, lineHeight: 1.78, color: BODY, margin: "0 0 18px" }}>{renderText(p)}</p>
            ))}
          </section>

          {/* Chart 3: Financial Grade Distribution */}
          <ChartBlock
            label="Chart 3: Financial Grade Profile of Tracked Institutions"
            attribution="Source: Forbes College Financial Grades Methodology; NACUBO 2024 Endowment Study. A-range = A+/A/A−; B-range = B+/B/B−; C-range or below = C+ and below."
          >
            <p style={{ fontSize: 13, color: "#4A584E", fontFamily: "var(--font-libre-franklin), sans-serif", margin: "0 0 20px", fontStyle: "italic" }}>
              Only {Math.round((aRange / total) * 100)}% carry A-range grades. These are the institutions with sufficient discretionary capital for multi-year AI programme investment without grant co-funding.
            </p>
            <HBar label="A-range (A+, A, A−)" count={aRange} max={total} color={PINE} sublabel="Substantial endowment; consistent operating surplus; multi-year AI investment feasible from reserves" />
            <HBar label="B-range (B+, B, B−)" count={bRange} max={total} color={GOLD} sublabel="Moderate reserves; AI investment feasible with phased approach and external co-funding" />
            <HBar label="C-range or below" count={cRange} max={total} color={MUTED} sublabel="Tuition-dependent; discretionary AI spending materially constrained without grant underwriting" />
          </ChartBlock>

          {/* Section 4 */}
          <section style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: "clamp(20px, 2.6vw, 28px)", fontWeight: 500, fontFamily: "var(--font-display)", color: INK, margin: "0 0 16px", letterSpacing: "-0.012em" }}>
              {sections[3].heading}
            </h2>
            {sections[3].paragraphs.map((p, j) => (
              <p key={j} style={{ fontSize: 16.5, lineHeight: 1.78, color: BODY, margin: "0 0 18px" }}>{renderText(p)}</p>
            ))}
          </section>

        </div>
      </div>

      <CallToAction />
    </>
  );
}
