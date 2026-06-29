"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import type { InstitutionEntry } from "@/lib/data";
import { UNIVERSITY_ANALYSES } from "@/lib/analyses";

function InstitutionLogo({ domain, name, size = 44 }: { domain: string; name: string; size?: number }) {
  const [src, setSrc] = useState(`https://logo.clearbit.com/${domain}?size=400`);
  const [stage, setStage] = useState(0); // 0=clearbit, 1=google favicon, 2=fallback
  const letter = name[0]?.toUpperCase() ?? "U";
  if (stage >= 2 || !domain) {
    return (
      <div style={{ width: size, height: size, borderRadius: size / 5, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <span style={{ color: "#F4F0E6", fontSize: size * 0.44, fontWeight: 700, fontFamily: "var(--font-newsreader), serif" }}>{letter}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={`${name} logo`}
      width={size}
      height={size}
      loading="lazy"
      onError={() => {
        if (stage === 0) {
          setSrc(`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=256`);
          setStage(1);
        } else {
          setStage(2);
        }
      }}
      style={{ width: size, height: size, objectFit: "contain", borderRadius: size / 5, background: "rgba(255,255,255,0.08)", padding: 4 }}
    />
  );
}

const FINANCIAL_GRADE_META: Record<string, { bg: string; color: string; border: string; label: string }> = {
  "A+": { bg: "#1E4D38", color: "#F4F0E6", border: "#1E4D38", label: "A+" },
  "A":  { bg: "rgba(30,77,56,0.12)", color: "#1E4D38", border: "rgba(30,77,56,0.30)", label: "A" },
  "A-": { bg: "rgba(30,77,56,0.10)", color: "#1E4D38", border: "rgba(30,77,56,0.24)", label: "A−" },
  "B+": { bg: "rgba(181,134,46,0.14)", color: "#926C1A", border: "rgba(181,134,46,0.32)", label: "B+" },
  "B":  { bg: "rgba(181,134,46,0.10)", color: "#926C1A", border: "rgba(181,134,46,0.24)", label: "B" },
  "B-": { bg: "rgba(181,134,46,0.08)", color: "#926C1A", border: "rgba(181,134,46,0.20)", label: "B−" },
  "C+": { bg: "rgba(74,88,78,0.10)", color: "#4A584E", border: "rgba(74,88,78,0.22)", label: "C+" },
  "C":  { bg: "rgba(74,88,78,0.08)", color: "#4A584E", border: "rgba(74,88,78,0.18)", label: "C" },
  "C-": { bg: "rgba(74,88,78,0.06)", color: "#4A584E", border: "rgba(74,88,78,0.14)", label: "C−" },
  "D":  { bg: "rgba(176,114,106,0.10)", color: "#B0726A", border: "rgba(176,114,106,0.22)", label: "D" },
  "F":  { bg: "rgba(176,114,106,0.14)", color: "#B0726A", border: "rgba(176,114,106,0.28)", label: "F" },
};

function financialGradeStrength(grade: string): string {
  if (grade === "A+" || grade === "A" || grade === "A-") return "Strong: substantial endowment and revenue diversification support sustained AI investment.";
  if (grade === "B+" || grade === "B" || grade === "B-") return "Moderate: adequate reserves for planned AI programs; limited capacity for accelerated expansion.";
  if (grade === "C+" || grade === "C" || grade === "C-") return "Constrained: high tuition dependency or modest endowment limits discretionary AI spending.";
  return "Stressed: documented financial pressures may restrict new AI program investment.";
}

const STAGE_META: Record<number, { label: string; bg: string; color: string; border: string; description: string; next: string }> = {
  1: { label: "Explore",   bg: "rgba(74,88,78,0.10)",    color: "#4A584E", border: "rgba(74,88,78,0.22)",    description: "AI awareness is nascent. No formal policy or structured curriculum in place.", next: "Publish an institutional AI use policy and launch one faculty-facing workshop series." },
  2: { label: "Deploy",    bg: "rgba(176,114,106,0.10)", color: "#B0726A", border: "rgba(176,114,106,0.22)", description: "Initial tools deployed and basic policy documented. Adoption remains siloed.", next: "Expand curriculum integration beyond pilot units and formalise an AI governance committee." },
  3: { label: "Automate",  bg: "rgba(181,134,46,0.12)",  color: "#B5862E", border: "rgba(181,134,46,0.28)",  description: "AI embedded in workflows across multiple units. Governance structures active.", next: "Connect AI initiatives to research commercialisation and publish transparent impact metrics." },
  4: { label: "Integrate", bg: "rgba(30,77,56,0.10)",    color: "#1E4D38", border: "rgba(30,77,56,0.28)",    description: "AI woven across teaching, research, and operations. Industry linkages established.", next: "Pursue national centre designation and align AI strategy with accreditation standards." },
  5: { label: "Reshape",   bg: "#1E4D38",                color: "#F4F0E6", border: "#1E4D38",                description: "AI is core to the institutional mission. Setting national standards for the sector.", next: "Export frameworks to peer institutions and lead sector-wide AI governance coalitions." },
};

function PeerCard({ u }: { u: InstitutionEntry }) {
  const m = STAGE_META[u.maturityStage];
  return (
    <Link href={`/insights/ai-readiness-index/${u.slug}`} style={{ textDecoration: "none" }} className="peer-card-link">
      <div
        className="peer-card"
        style={{
          padding: "16px 18px", background: "#FFFFFF",
          border: "1px solid rgba(27,42,33,0.10)", borderRadius: 10,
          transition: "border-color 180ms, box-shadow 180ms",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
          <p style={{ fontSize: 13.5, fontWeight: 500, color: "#1B2A21", margin: 0, fontFamily: "var(--font-newsreader), serif", lineHeight: 1.2 }}>
            {u.name}
          </p>
          <span style={{ fontSize: 11, fontWeight: 700, color: m.color, fontFamily: "var(--font-libre-franklin), sans-serif", flexShrink: 0, padding: "2px 7px", borderRadius: 4, background: m.bg, border: `1px solid ${m.border}` }}>
            Stage {u.maturityStage}
          </span>
        </div>
        <p style={{ fontSize: 11, color: "#4A584E", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif" }}>
          {u.state} · {u.type}
        </p>
      </div>
    </Link>
  );
}

interface Props {
  university: InstitutionEntry;
  peers: InstitutionEntry[];
  rank: number;
  total: number;
}

export default function USUniversityProfile({ university: u, peers, rank, total }: Props) {
  const m = STAGE_META[u.maturityStage];
  const analysis = UNIVERSITY_ANALYSES[u.slug] ?? null;

  const stageMap: Record<number, [number, number, number]> = { 5: [18, 16, 18], 4: [16, 14, 16], 3: [12, 12, 12], 2: [8, 8, 8], 1: [4, 4, 4] };
  const [researchPts, partnerPts, infraPts] = stageMap[u.maturityStage] ?? [8, 8, 8];
  const policyPts = u.aiPolicyPublished ? 16 : 8;
  const curriculumPts = u.aiCurriculumInitiative ? 14 : 8;
  const financialPts: Record<string, number> = { "A+": 20, "A": 18, "A-": 16, "B+": 14, "B": 12, "B-": 10, "C+": 8, "C": 6, "C-": 4, "D": 2, "F": 0 };
  const capPts = financialPts[u.financialGrade] ?? 6;
  const compositeScore = Math.round((researchPts + policyPts + curriculumPts + partnerPts + infraPts + capPts) / 120 * 100);

  const signals: string[] = [];
  if (u.aiPolicyPublished) signals.push("Institutional AI use policy published");
  if (u.aiCurriculumInitiative) signals.push("Active AI curriculum integration initiative");
  if (!u.aiPolicyPublished) signals.push("No formal AI policy publicly documented as of " + u.lastUpdated);
  if (!u.aiCurriculumInitiative) signals.push("AI curriculum integration not yet formally launched");

  return (
    <>
      {/* Header strip */}
      <section style={{ padding: "120px var(--pad-h) 40px", background: "#1B2A21" }}>
        <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
          <Link
            href="/insights/ai-readiness-index"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12,
              color: "rgba(201,217,206,0.72)", textDecoration: "none", marginBottom: 24,
              fontFamily: "var(--font-libre-franklin), sans-serif", transition: "color 150ms",
            }}
            className="back-link"
          >
            <ArrowLeft size={13} strokeWidth={2.2} /> All U.S. Universities
          </Link>

          <div style={{ display: "flex", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
                <InstitutionLogo domain={u.officialDomain} name={u.name} size={52} />
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", padding: "3px 9px", borderRadius: 4, background: "rgba(255,255,255,0.12)", color: "#C9D9CE" }}>
                  {u.state}
                </span>
                <span style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", padding: "3px 9px", borderRadius: 4, background: "rgba(255,255,255,0.12)", color: "#C9D9CE" }}>
                  {u.type}
                </span>
                <span style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", padding: "3px 9px", borderRadius: 4, background: m.bg, color: m.color, border: `1px solid ${m.border}` }}>
                  Stage {u.maturityStage} · {m.label}
                </span>
                </div>
              </div>
              <h1 style={{ fontSize: "clamp(24px, 3.2vw, 44px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: "#F1EEE2", margin: "0 0 10px", letterSpacing: "-0.016em", lineHeight: 1.1 }}>
                {u.name}
              </h1>
              <p style={{ fontSize: 14, color: "rgba(201,217,206,0.78)", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                {u.region} · {u.enrollment} enrollment · Updated {u.lastUpdated}
              </p>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 12, padding: "20px 28px", textAlign: "center", flexShrink: 0,
              }}
            >
              <p style={{ fontSize: 10, fontFamily: "var(--font-libre-franklin), sans-serif", color: "rgba(201,217,206,0.55)", margin: "0 0 2px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Stage
              </p>
              <p style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: "#F1EEE2", margin: "0 0 2px", lineHeight: 1 }}>
                {u.maturityStage}
              </p>
              <p style={{ fontSize: 13, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", color: "rgba(201,217,206,0.85)", margin: "0 0 8px" }}>
                {m.label}
              </p>
              <p style={{ fontSize: 11, fontFamily: "var(--font-libre-franklin), sans-serif", color: "rgba(201,217,206,0.55)", margin: "0 0 4px" }}>
                Score {compositeScore} / 100
              </p>
              <p style={{ fontSize: 12, color: "rgba(201,217,206,0.60)", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                Ranked #{rank} of {total}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: "48px var(--pad-h) var(--section-py)", background: "#F4F0E6" }}>
        <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 340px", gap: 40, alignItems: "start" }} className="profile-grid">

          {/* Left column */}
          <div>
            {/* Institution Overview */}
            {(() => {
              const firstPara = analysis ? analysis.split("\n\n")[0] ?? "" : "";
              const bioText = firstPara.length > 260 ? firstPara.slice(0, 257) + "…" : firstPara;
              const websiteUrl = `https://www.${u.officialDomain}`;
              const featuredInitiative = u.aiPolicyPublished
                ? "Institutional AI use policy published and publicly accessible"
                : u.aiCurriculumInitiative
                ? "Active AI curriculum integration initiative underway"
                : null;
              return (
                <div style={{ background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)", borderRadius: "var(--radius-card)", padding: "28px 32px", boxShadow: "var(--shadow-card)", marginBottom: 24 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A584E", margin: "0 0 16px" }}>
                    Institution Overview
                  </p>

                  {bioText && (
                    <>
                      <p style={{ fontSize: 14, lineHeight: 1.75, color: "#1B2A21", margin: "0 0 6px" }}>{bioText}</p>
                      <a href="#analysis" style={{ fontSize: 12, color: "#1E4D38", textDecoration: "underline", textUnderlineOffset: 2, fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                        Read full analysis ↓
                      </a>
                    </>
                  )}

                  <div style={{ borderTop: "1px solid rgba(27,42,33,0.08)", margin: "18px 0" }} />

                  {/* Quick links */}
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <a
                      href={websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12.5, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", color: "#1E4D38", background: "rgba(30,77,56,0.06)", border: "1px solid rgba(30,77,56,0.22)", borderRadius: 6, padding: "7px 13px", textDecoration: "none", whiteSpace: "nowrap" }}
                    >
                      <span style={{ fontSize: 13 }}>🌐</span> {u.officialDomain} ↗
                    </a>
                    {u.aiPolicyUrl && (
                      <a
                        href={u.aiPolicyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12.5, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", color: "#926C1A", background: "rgba(181,134,46,0.07)", border: "1px solid rgba(181,134,46,0.28)", borderRadius: 6, padding: "7px 13px", textDecoration: "none", whiteSpace: "nowrap" }}
                      >
                        <span style={{ fontSize: 13 }}>📄</span> AI Policy ↗
                      </a>
                    )}
                  </div>

                  {featuredInitiative && (
                    <>
                      <div style={{ borderTop: "1px solid rgba(27,42,33,0.08)", margin: "18px 0" }} />
                      <p style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A584E", margin: "0 0 12px" }}>
                        Featured Initiative
                      </p>
                      <div style={{ borderLeft: "3px solid #C7A14A", paddingLeft: 14 }}>
                        <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "#1B2A21", margin: 0, fontStyle: "italic" }}>
                          &ldquo;{featuredInitiative}&rdquo;
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })()}

            {/* Analysis */}
            {analysis && (
              <div id="analysis" style={{ background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)", borderRadius: "var(--radius-card)", padding: "28px 32px", boxShadow: "var(--shadow-card)", marginBottom: 24 }}>
                <p style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A584E", margin: "0 0 20px" }}>
                  AI Readiness Analysis
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {analysis.split("\n\n").filter(Boolean).map((para, i) => (
                    <p key={i} style={{ fontSize: 15, lineHeight: 1.75, color: "#1B2A21", margin: 0 }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Financial Health */}
            {(() => {
              const fg = FINANCIAL_GRADE_META[u.financialGrade] ?? FINANCIAL_GRADE_META["C"];
              const gradeScore = { "A+": 100, "A": 90, "A-": 80, "B+": 70, "B": 60, "B-": 50, "C+": 40, "C": 30, "C-": 20, "D": 10, "F": 0 }[u.financialGrade] ?? 30;
              return (
                <div style={{ background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)", borderRadius: "var(--radius-card)", padding: "28px 32px", boxShadow: "var(--shadow-card)", marginBottom: 24 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A584E", margin: "0 0 18px" }}>
                    Financial Health
                  </p>

                  {/* Grade + bar */}
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                    <div style={{ background: fg.bg, border: `1px solid ${fg.border}`, borderRadius: 8, padding: "10px 18px", flexShrink: 0, textAlign: "center", minWidth: 56 }}>
                      <p style={{ fontSize: 26, fontWeight: 700, fontFamily: "var(--font-newsreader), serif", color: fg.color, margin: 0, lineHeight: 1 }}>{fg.label}</p>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 13.5, fontWeight: 600, color: "#1B2A21", margin: "0 0 6px", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                        {financialGradeStrength(u.financialGrade).split(': ')[0]}
                      </p>
                      <div style={{ height: 6, background: "rgba(27,42,33,0.08)", borderRadius: 3, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${gradeScore}%`, background: fg.color === "#F4F0E6" ? "#1E4D38" : fg.color, borderRadius: 3, transition: "width 600ms ease" }} />
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "#4A584E", margin: "0 0 14px" }}>
                    {financialGradeStrength(u.financialGrade).split(': ')[1] ?? financialGradeStrength(u.financialGrade)}
                  </p>

                  {/* Score contribution */}
                  <div style={{ background: "rgba(27,42,33,0.04)", borderRadius: 6, padding: "10px 14px", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#1E4D38", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                      Contributes {capPts} / 20 pts
                    </span>
                    <span style={{ fontSize: 11, color: "#4A584E", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                      to the AI Readiness composite score (6th dimension, scaled to 100)
                    </span>
                  </div>

                  {/* Why it matters */}
                  <div style={{ borderTop: "1px solid rgba(27,42,33,0.08)", paddingTop: 14, marginBottom: 14 }}>
                    <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "#4A584E", margin: 0 }}>
                      <strong style={{ color: "#1B2A21" }}>Why this matters for AI readiness:</strong> Financial health is a direct multiplier on AI program longevity. Institutions with A-range grades have 4 to 8 times more discretionary runway than C-range peers. That is the difference between a multi-year AI roadmap and a single pilot.
                    </p>
                  </div>

                  {/* Sources */}
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <a href="https://www.nacubo.org/Research/2025/NACUBO-Commonfund-Study-of-Endowments" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: "#1E4D38", textDecoration: "underline", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                      NACUBO-Commonfund Study of Endowments 2025 ↗
                    </a>
                    <a href="https://www.forbes.com/lists/college-financial-grades/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: "#1E4D38", textDecoration: "underline", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                      Forbes College Financial Grades ↗
                    </a>
                    <a href="https://nces.ed.gov/ipeds/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: "#1E4D38", textDecoration: "underline", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                      IPEDS Financial Data ↗
                    </a>
                  </div>
                </div>
              );
            })()}

            {/* Dimension Scores */}
            {(() => {
              const stageLabel = m.label;
              const usDims = [
                {
                  label: "Research Output", value: researchPts,
                  sourceUrl: `https://www.nsf.gov/awardsearch/simpleSearchResult?queryText=${encodeURIComponent(u.name)}`, sourceLabel: "NSF Search",
                  rationale: researchPts >= 18 ? `Stage ${u.maturityStage} (${stageLabel}): top-tier AI research output with major NSF and federal grant funding documented.` :
                             researchPts >= 14 ? `Stage ${u.maturityStage} (${stageLabel}): strong AI research activity with competitive federal grant funding.` :
                             researchPts >= 10 ? `Stage ${u.maturityStage} (${stageLabel}): moderate AI research presence; grants activity below top-quartile peers.` :
                             `Stage ${u.maturityStage} (${stageLabel}): limited formal AI research output in public federal grant databases at assessment date.`,
                },
                {
                  label: "AI Policy & Ethics", value: policyPts,
                  sourceUrl: u.aiPolicyUrl ?? `https://www.${u.officialDomain}`, sourceLabel: u.aiPolicyUrl ? "AI Policy" : "Institution",
                  rationale: u.aiPolicyPublished ? "Institutional AI use policy publicly documented and accessible to students and faculty." : "No formal institutional AI use policy publicly documented as of assessment date.",
                },
                {
                  label: "Curriculum Integration", value: curriculumPts,
                  sourceUrl: `https://www.${u.officialDomain}`, sourceLabel: "Institution",
                  rationale: u.aiCurriculumInitiative ? "Active AI curriculum integration initiative. AI embedded across degree programs or via dedicated AI courses." : "No formal AI curriculum integration initiative publicly documented at assessment date.",
                },
                {
                  label: "Industry Partnerships", value: partnerPts,
                  sourceUrl: `https://www.nsf.gov/awardsearch/simpleSearchResult?queryText=${encodeURIComponent(u.name)}+industry+partnership`, sourceLabel: "NSF Search",
                  rationale: partnerPts >= 16 ? `Stage ${u.maturityStage} (${stageLabel}): established industry and government AI partnerships with documented co-funding or research agreements.` :
                             partnerPts >= 12 ? `Stage ${u.maturityStage} (${stageLabel}): some external AI partnerships in place; scope more limited than top-tier peers.` :
                             `Stage ${u.maturityStage} (${stageLabel}): limited formal AI-specific industry or government partnership publicly documented.`,
                },
                {
                  label: "Infrastructure & Compute", value: infraPts,
                  sourceUrl: "https://access-ci.org/", sourceLabel: "ACCESS",
                  rationale: infraPts >= 16 ? `Stage ${u.maturityStage} (${stageLabel}): dedicated HPC allocation and on-campus AI compute infrastructure confirmed.` :
                             infraPts >= 12 ? `Stage ${u.maturityStage} (${stageLabel}): ACCESS/NSF compute access and AI lab infrastructure in use.` :
                             `Stage ${u.maturityStage} (${stageLabel}): shared compute resources available; no dedicated on-campus AI hardware cluster identified.`,
                },
              ];
              return (
                <div style={{ background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)", borderRadius: "var(--radius-card)", padding: "28px 32px", boxShadow: "var(--shadow-card)", marginBottom: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 22 }}>
                    <p style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A584E", margin: 0 }}>
                      Dimension Scores
                    </p>
                    <p style={{ fontSize: 10, color: "#9FBFAD", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                      6 dimensions · Stage {u.maturityStage} model
                    </p>
                  </div>
                  {usDims.map((d) => (
                    <div key={d.label} style={{ marginBottom: 16 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "#1B2A21", fontFamily: "var(--font-libre-franklin), sans-serif" }}>{d.label}</span>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ fontSize: 13, color: "#4A584E", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                            {d.value} <span style={{ color: "#9FBFAD", fontSize: 11 }}>/ 20</span>
                          </span>
                          <a href={d.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", color: "#1E4D38", background: "rgba(30,77,56,0.06)", border: "1px solid rgba(30,77,56,0.18)", borderRadius: 4, padding: "2px 6px", textDecoration: "none", whiteSpace: "nowrap" }}>
                            {d.sourceLabel} ↗
                          </a>
                        </div>
                      </div>
                      <div style={{ height: 8, background: "rgba(27,42,33,0.08)", borderRadius: 4, overflow: "hidden", marginBottom: d.rationale ? 5 : 0 }}>
                        <div style={{ height: "100%", width: `${(d.value / 20) * 100}%`, background: d.value >= 14 ? "#1E4D38" : d.value >= 8 ? "#B5862E" : "#9FBFAD", borderRadius: 4, transition: "width 600ms cubic-bezier(0.4,0,0.2,1)" }} />
                      </div>
                      {d.rationale && (
                        <p style={{ fontSize: 11.5, lineHeight: 1.55, color: "#6B7F72", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif", fontStyle: "italic" }}>
                          {d.rationale}
                        </p>
                      )}
                    </div>
                  ))}
                  {/* Financial Capacity — 6th dimension */}
                  <div style={{ paddingTop: 14, borderTop: "1px dashed rgba(27,42,33,0.10)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: "#1B2A21", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                        Financial Capacity <span style={{ fontSize: 10, fontWeight: 500, color: "#9FBFAD" }}>— Forbes / NACUBO</span>
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: 13, color: "#4A584E", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                          {capPts} <span style={{ color: "#9FBFAD", fontSize: 11 }}>/ 20</span>
                        </span>
                        <a href="https://www.forbes.com/lists/college-financial-grades/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", color: "#1E4D38", background: "rgba(30,77,56,0.06)", border: "1px solid rgba(30,77,56,0.18)", borderRadius: 4, padding: "2px 6px", textDecoration: "none", whiteSpace: "nowrap" }}>
                          Forbes ↗
                        </a>
                      </div>
                    </div>
                    <div style={{ height: 8, background: "rgba(27,42,33,0.08)", borderRadius: 4, overflow: "hidden", marginBottom: 5 }}>
                      <div style={{ height: "100%", width: `${(capPts / 20) * 100}%`, background: capPts >= 14 ? "#1E4D38" : capPts >= 8 ? "#B5862E" : "#9FBFAD", borderRadius: 4, transition: "width 600ms cubic-bezier(0.4,0,0.2,1)" }} />
                    </div>
                    <p style={{ fontSize: 11.5, lineHeight: 1.55, color: "#6B7F72", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif", fontStyle: "italic" }}>
                      {capPts >= 18 ? "A+ / A range: substantial endowment and operating surplus. Full discretionary capacity for multi-year AI roadmap execution." :
                       capPts >= 14 ? "B range: adequate reserves for planned AI programs; limited capacity for rapid unbudgeted expansion." :
                       capPts >= 8  ? "C range: high tuition dependency or modest endowment. Discretionary AI spending materially constrained." :
                       "D / F range: documented financial pressures restrict new unbudgeted AI program investment."}
                    </p>
                  </div>
                  <p style={{ fontSize: 11, color: "#9FBFAD", margin: "14px 0 0", fontFamily: "var(--font-libre-franklin), sans-serif", lineHeight: 1.55 }}>
                    Research, partnership, and infrastructure scores estimated from institutional maturity stage (1–5). Policy and financial scores from verified public sources.
                  </p>
                </div>
              );
            })()}

            {/* Stage context */}
            <div style={{ background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)", borderRadius: "var(--radius-card)", padding: "28px 32px", boxShadow: "var(--shadow-card)", marginBottom: 24 }}>
              <p style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A584E", margin: "0 0 18px" }}>
                Stage {u.maturityStage} · {m.label}
              </p>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "#1B2A21", margin: "0 0 20px" }}>
                {m.description}
              </p>
              <div style={{ borderTop: "1px solid rgba(27,42,33,0.08)", paddingTop: 18 }}>
                <p style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A584E", margin: "0 0 10px" }}>
                  To reach Stage {Math.min(u.maturityStage + 1, 5)}
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "#4A584E", margin: 0 }}>
                  {m.next}
                </p>
              </div>
            </div>

            {/* Public signals */}
            <div style={{ background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)", borderRadius: "var(--radius-card)", padding: "28px 32px", boxShadow: "var(--shadow-card)" }}>
              <p style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A584E", margin: "0 0 18px" }}>
                Public Signals Assessed
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {signals.map((signal, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1E4D38", flexShrink: 0, marginTop: 6 }} />
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: "#1B2A21", margin: 0 }}>{signal}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column */}
          <div>
            {peers.length > 0 && (
              <div style={{ background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)", borderRadius: "var(--radius-card)", padding: "24px 24px", boxShadow: "var(--shadow-card)", marginBottom: 20 }}>
                <p style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A584E", margin: "0 0 14px" }}>
                  Peer Institutions
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {peers.map((p) => <PeerCard key={p.slug} u={p} />)}
                </div>
              </div>
            )}

            <div style={{ background: "#1E4D38", borderRadius: "var(--radius-card)", padding: "24px 24px" }}>
              <p style={{ fontSize: 16, fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: "#F1EEE2", margin: "0 0 8px", lineHeight: 1.2 }}>
                Get your institution&apos;s full assessment.
              </p>
              <p style={{ fontSize: 13, color: "rgba(201,217,206,0.82)", margin: "0 0 18px", lineHeight: 1.6 }}>
                We embed on-site for 6–12 months, deliver a full AI readiness report to your board, and credit the audit fee toward implementation.
              </p>
              <Link
                href={`/get-started?source=us-index&institution=${u.slug}`}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 13, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif",
                  background: "#F1EEE2", color: "#1E4D38",
                  borderRadius: "var(--radius-btn)", padding: "10px 18px",
                  textDecoration: "none", whiteSpace: "nowrap",
                }}
              >
                Book the diagnostic <ArrowRight size={13} strokeWidth={2.5} />
              </Link>
            </div>

            <p style={{ marginTop: 16, fontSize: 12, color: "#9FBFAD", lineHeight: 1.6 }}>
              Profile incorrect?{" "}
              <a href={`mailto:lauretta@sophrosynesystems.org?subject=Profile correction: ${u.name}`} style={{ color: "#9FBFAD", textDecoration: "underline" }}>
                Submit a correction
              </a>
              . Data current as of {u.lastUpdated}.
            </p>
          </div>
        </div>

        <style>{`
          @media (max-width: 820px) {
            .profile-grid { grid-template-columns: 1fr !important; }
          }
          .back-link:hover { color: rgba(201,217,206,1) !important; }
          .peer-card-link:hover .peer-card {
            border-color: rgba(30,77,56,0.24);
            box-shadow: var(--shadow-card-lg);
          }
        `}</style>
      </section>
    </>
  );
}
