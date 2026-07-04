"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import type { CanadianUniversityEntry, Trajectory } from "@/lib/data";
import { UNIVERSITY_ANALYSES } from "@/lib/analyses";

function InstitutionLogo({ domain, name, size = 52 }: { domain: string; name: string; size?: number }) {
  const [src, setSrc] = useState(`https://logo.clearbit.com/${domain}?size=400`);
  const [stage, setStage] = useState(0);
  const letter = name[0]?.toUpperCase() ?? "U";
  if (stage >= 2 || !domain) {
    return (
      <div style={{ width: size, height: size, borderRadius: size / 5, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <span style={{ color: "#F4F0E6", fontSize: size * 0.44, fontWeight: 700, fontFamily: "var(--font-display)" }}>{letter}</span>
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
        if (stage === 0) { setSrc(`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=256`); setStage(1); }
        else { setStage(2); }
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

const TRAJECTORY_STYLE: Record<Trajectory, { bg: string; color: string; border: string }> = {
  "Rising":      { bg: "rgba(30,77,56,0.10)",  color: "#1E4D38", border: "rgba(30,77,56,0.25)" },
  "Steady":      { bg: "rgba(181,134,46,0.12)", color: "#926C1A", border: "rgba(181,134,46,0.30)" },
  "Early Stage": { bg: "rgba(74,88,78,0.10)",   color: "#4A584E", border: "rgba(74,88,78,0.24)" },
};

function scoreColor(score: number): string {
  if (score >= 70) return "#1E4D38";
  if (score >= 50) return "#B5862E";
  if (score >= 30) return "#B0726A";
  return "#4A584E";
}

function dimFallback(dim: string, score: number): string {
  if (dim === "research") {
    if (score >= 18) return "Leading national AI research output. Major NSERC and CIFAR AI Chair funding documented.";
    if (score >= 14) return "Strong AI research activity with competitive grant funding and published output.";
    if (score >= 8)  return "Emerging AI research presence; some grant-funded projects in NSERC database.";
    return "Limited formal AI research output recorded in public grant databases at assessment date.";
  }
  if (dim === "policy") {
    if (score >= 18) return "Comprehensive institutional AI governance framework publicly documented and enforced.";
    if (score >= 14) return "Published AI use policy with ethics guidance for students and faculty.";
    if (score >= 8)  return "Partial policy documentation exists; guidance not yet fully formalised institution-wide.";
    return "No published AI policy found as of assessment date.";
  }
  if (dim === "curriculum") {
    if (score >= 18) return "Dedicated AI/ML degree programs at undergraduate and graduate level with strong enrolment.";
    if (score >= 14) return "AI integrated across multiple programs; dedicated AI courses in active course catalog.";
    if (score >= 8)  return "Some AI courses available; no standalone AI degree program yet offered.";
    return "Minimal AI curriculum integration detected in public course catalogs.";
  }
  if (dim === "partnerships") {
    if (score >= 18) return "Multiple active industry and government AI partnerships with publicly documented co-funding.";
    if (score >= 14) return "Established industry collaborations and active NSERC CRD or Alliance grants.";
    if (score >= 8)  return "Some external AI partnerships in place; scope limited at assessment date.";
    return "No formal AI-specific industry or government partnership publicly documented.";
  }
  if (dim === "infrastructure") {
    if (score >= 18) return "Dedicated HPC allocation and on-campus AI compute infrastructure confirmed.";
    if (score >= 14) return "Compute Canada / Alliance HPC access and on-site AI lab infrastructure in place.";
    if (score >= 8)  return "Shared compute resources available through Alliance; no dedicated AI hardware cluster.";
    return "Limited compute infrastructure identified specifically for AI workloads.";
  }
  return "";
}

function findSignal(signals: string[], keywords: string[]): string | null {
  const lk = keywords.map(k => k.toLowerCase());
  return signals.find(s => lk.some(k => s.toLowerCase().includes(k))) ?? null;
}

function DimBar({ label, value, max = 20, sourceUrl, sourceLabel, rationale }: { label: string; value: number; max?: number; sourceUrl?: string; sourceLabel?: string; rationale?: string }) {
  const pct = (value / max) * 100;
  const color = value >= 14 ? "#1E4D38" : value >= 8 ? "#B5862E" : "#9FBFAD";
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#1B2A21", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
          {label}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 13, color: "#4A584E", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
            {value} <span style={{ color: "#9FBFAD", fontSize: 11 }}>/ {max}</span>
          </span>
          {sourceUrl && sourceLabel && (
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", color: "#1E4D38", background: "rgba(30,77,56,0.06)", border: "1px solid rgba(30,77,56,0.18)", borderRadius: 4, padding: "2px 6px", textDecoration: "none", whiteSpace: "nowrap" }}>
              {sourceLabel} ↗
            </a>
          )}
        </div>
      </div>
      <div style={{ height: 8, background: "rgba(27,42,33,0.08)", borderRadius: 4, overflow: "hidden", marginBottom: rationale ? 5 : 0 }}>
        <div
          style={{
            height: "100%", width: `${pct}%`,
            background: color, borderRadius: 4,
            transition: "width 600ms cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      </div>
      {rationale && (
        <p style={{ fontSize: 11.5, lineHeight: 1.55, color: "#6B7F72", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif", fontStyle: "italic" }}>
          {rationale}
        </p>
      )}
    </div>
  );
}

function PeerCard({ u }: { u: CanadianUniversityEntry }) {
  const ts = TRAJECTORY_STYLE[u.trajectory];
  return (
    <Link href={`/insights/canadian-universities/${u.slug}`} style={{ textDecoration: "none" }} className="peer-card-link">
      <div
        className="peer-card"
        style={{
          padding: "16px 18px", background: "#FFFFFF",
          border: "1px solid rgba(27,42,33,0.10)", borderRadius: 10,
          transition: "border-color 180ms, box-shadow 180ms",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
          <p style={{ fontSize: 13.5, fontWeight: 500, color: "#1B2A21", margin: 0, fontFamily: "var(--font-display)", lineHeight: 1.2 }}>
            {u.shortName}
          </p>
          <span
            style={{
              fontSize: 15, fontWeight: 700, color: scoreColor(u.score),
              fontFamily: "var(--font-libre-franklin), sans-serif", flexShrink: 0,
            }}
          >
            {u.score}
          </span>
        </div>
        <p style={{ fontSize: 11, color: "#4A584E", margin: "0 0 8px", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
          {u.province} · {u.type}
        </p>
        <span
          style={{
            fontSize: 10, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif",
            padding: "2px 7px", borderRadius: 4,
            background: ts.bg, color: ts.color, border: `1px solid ${ts.border}`,
          }}
        >
          {u.trajectory}
        </span>
      </div>
    </Link>
  );
}

interface Props {
  university: CanadianUniversityEntry;
  peers: CanadianUniversityEntry[];
  rank: number;
  total: number;
}

export default function UniversityProfile({ university: u, peers, rank, total }: Props) {
  const ts = TRAJECTORY_STYLE[u.trajectory];
  const analysis = UNIVERSITY_ANALYSES[u.slug] ?? null;
  const maturityStage = u.score >= 80 ? 5 : u.score >= 60 ? 4 : u.score >= 40 ? 3 : u.score >= 20 ? 2 : 1;
  const m = STAGE_META[maturityStage];
  const dims = [
    {
      label: "Research Output", value: u.dimensions.research,
      sourceUrl: `https://www.nserc-crsng.gc.ca/ase-oro/Results-Resultats_eng.asp?type=1&institution=${encodeURIComponent(u.name)}`, sourceLabel: "NSERC Search",
      rationale: findSignal(u.keySignals, ["research", "lab", "publication", "chair", "cifar", "institute", "nserc"]) ?? dimFallback("research", u.dimensions.research),
    },
    {
      label: "AI Policy & Ethics", value: u.dimensions.policy,
      sourceUrl: u.aiPolicyUrl ?? `https://www.${u.officialDomain}`, sourceLabel: u.aiPolicyUrl ? "AI Policy" : "Institution",
      rationale: findSignal(u.keySignals, ["policy", "ethic", "governance", "framework", "guideline"]) ?? dimFallback("policy", u.dimensions.policy),
    },
    {
      label: "Curriculum Integration", value: u.dimensions.curriculum,
      sourceUrl: `https://www.${u.officialDomain}`, sourceLabel: "Institution",
      rationale: findSignal(u.keySignals, ["curriculum", "course", "degree", "program", "minor", "undergraduate", "graduate", "teaching"]) ?? dimFallback("curriculum", u.dimensions.curriculum),
    },
    {
      label: "Industry Partnerships", value: u.dimensions.partnerships,
      sourceUrl: `https://www.nserc-crsng.gc.ca/Professors-Professeurs/RPP-PP/ProfileSearch-RechercheProfile_eng.asp?institution=${encodeURIComponent(u.name)}`, sourceLabel: "NSERC RPP",
      rationale: findSignal(u.keySignals, ["partner", "industry", "company", "spinoff", "collaboration", "government", "alliance", "cifar"]) ?? dimFallback("partnerships", u.dimensions.partnerships),
    },
    {
      label: "Infrastructure & Compute", value: u.dimensions.infrastructure,
      sourceUrl: "https://alliancecan.ca/en/services/advanced-research-computing", sourceLabel: "Alliance ARC",
      rationale: findSignal(u.keySignals, ["infrastructure", "compute", "hpc", "gpu", "cloud", "hardware", "digital research"]) ?? dimFallback("infrastructure", u.dimensions.infrastructure),
    },
  ];

  return (
    <>
      {/* Header strip */}
      <section
        style={{
          padding: "120px var(--pad-h) 40px",
          background: "#1E4D38",
        }}
      >
        <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
          <Link
            href="/insights/canadian-universities"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12,
              color: "rgba(201,217,206,0.72)", textDecoration: "none", marginBottom: 24,
              fontFamily: "var(--font-libre-franklin), sans-serif",
              transition: "color 150ms",
            }}
            className="back-link"
          >
            <ArrowLeft size={13} strokeWidth={2.2} /> All Canadian Universities
          </Link>

          <div style={{ display: "flex", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
                <InstitutionLogo domain={u.officialDomain} name={u.name} size={52} />
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", padding: "3px 9px", borderRadius: 4, background: "rgba(255,255,255,0.12)", color: "#C9D9CE" }}>
                  {u.province}
                </span>
                <span style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", padding: "3px 9px", borderRadius: 4, background: "rgba(255,255,255,0.12)", color: "#C9D9CE" }}>
                  {u.type}
                </span>
                <span style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", padding: "3px 9px", borderRadius: 4, background: m.bg, color: m.color, border: `1px solid ${m.border}` }}>
                  Stage {maturityStage} · {m.label}
                </span>
                <span style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", padding: "3px 9px", borderRadius: 4, background: ts.bg, color: ts.color, border: `1px solid ${ts.border}` }}>
                  {u.trajectory}
                </span>
                </div>
              </div>
              <h1 style={{ fontSize: "clamp(24px, 3.2vw, 44px)", fontWeight: 500, fontFamily: "var(--font-display)", color: "#F1EEE2", margin: "0 0 10px", letterSpacing: "-0.016em", lineHeight: 1.1 }}>
                {u.name}
              </h1>
              <p style={{ fontSize: 14, color: "rgba(201,217,206,0.78)", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                Est. {u.founded} · {u.enrollment} enrolment · Updated {u.lastUpdated}
              </p>
            </div>

            {/* Stage block */}
            <div
              style={{
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 12, padding: "20px 28px", textAlign: "center", flexShrink: 0,
              }}
            >
              <p style={{ fontSize: 10, fontFamily: "var(--font-libre-franklin), sans-serif", color: "rgba(201,217,206,0.55)", margin: "0 0 2px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Stage
              </p>
              <p style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 500, fontFamily: "var(--font-display)", color: "#F1EEE2", margin: "0 0 2px", lineHeight: 1 }}>
                {maturityStage}
              </p>
              <p style={{ fontSize: 13, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", color: "rgba(201,217,206,0.85)", margin: "0 0 8px" }}>
                {m.label}
              </p>
              <p style={{ fontSize: 11, fontFamily: "var(--font-libre-franklin), sans-serif", color: "rgba(201,217,206,0.55)", margin: "0 0 4px" }}>
                Score {u.score} / 100
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

          {/* Left: overview + analysis + dimension bars + signals */}
          <div>
            {/* Institution Overview */}
            {(() => {
              const firstPara = analysis ? analysis.split("\n\n")[0] ?? "" : "";
              const bioText = firstPara.length > 260 ? firstPara.slice(0, 257) + "…" : firstPara;
              const websiteUrl = `https://www.${u.officialDomain}`;
              const featuredInitiative = u.keySignals[0] ?? null;
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
              const capacityPts = { "A+": 20, "A": 18, "A-": 16, "B+": 14, "B": 12, "B-": 10, "C+": 8, "C": 6, "C-": 4, "D": 2, "F": 0 }[u.financialGrade] ?? 6;
              return (
                <div style={{ background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)", borderRadius: "var(--radius-card)", padding: "28px 32px", boxShadow: "var(--shadow-card)", marginBottom: 24 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A584E", margin: "0 0 18px" }}>
                    Financial Health
                  </p>

                  {/* Grade + bar */}
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                    <div style={{ background: fg.bg, border: `1px solid ${fg.border}`, borderRadius: 8, padding: "10px 18px", flexShrink: 0, textAlign: "center", minWidth: 56 }}>
                      <p style={{ fontSize: 26, fontWeight: 700, fontFamily: "var(--font-display)", color: fg.color, margin: 0, lineHeight: 1 }}>{fg.label}</p>
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
                      Contributes {capacityPts} / 20 pts
                    </span>
                    <span style={{ fontSize: 11, color: "#4A584E", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                      shown for context — financial health not included in the 5-dimension composite score
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
                    <a href="https://www.caubo.ca/knowledge-centre/analytics-and-reports/fiuc-reports/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: "#1E4D38", textDecoration: "underline", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                      CAUBO FIUC 2023/24 ↗
                    </a>
                    <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710002601" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: "#1E4D38", textDecoration: "underline", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                      Statistics Canada University Revenue Data ↗
                    </a>
                    <a href="https://higheredstrategy.com/post-covid-university-surpluses-deficits/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: "#1E4D38", textDecoration: "underline", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                      HESA Surplus/Deficit Research ↗
                    </a>
                  </div>
                </div>
              );
            })()}

            <div style={{ background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)", borderRadius: "var(--radius-card)", padding: "28px 32px", boxShadow: "var(--shadow-card)", marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 22 }}>
                <p style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A584E", margin: 0 }}>
                  Dimension Scores
                </p>
                <p style={{ fontSize: 10, color: "#9FBFAD", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                  5 scored dimensions · max 100 pts
                </p>
              </div>
              {dims.map((d) => <DimBar key={d.label} label={d.label} value={d.value} sourceUrl={d.sourceUrl} sourceLabel={d.sourceLabel} rationale={d.rationale} />)}
              {/* Financial Capacity — 6th dimension factored into composite score */}
              {(() => {
                const capacityPts = { "A+": 20, "A": 18, "A-": 16, "B+": 14, "B": 12, "B-": 10, "C+": 8, "C": 6, "C-": 4, "D": 2, "F": 0 }[u.financialGrade] ?? 6;
                return (
                  <div style={{ marginBottom: 0, paddingTop: 14, borderTop: "1px dashed rgba(27,42,33,0.10)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: "#1B2A21", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                        Financial Capacity <span style={{ fontSize: 10, fontWeight: 500, color: "#9FBFAD" }}>— CAUBO FIUC / HESA</span>
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: 13, color: "#4A584E", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                          {capacityPts} <span style={{ color: "#9FBFAD", fontSize: 11 }}>/ 20</span>
                        </span>
                        <a href="https://www.caubo.ca/knowledge-centre/analytics-and-reports/fiuc-reports/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", color: "#1E4D38", background: "rgba(30,77,56,0.06)", border: "1px solid rgba(30,77,56,0.18)", borderRadius: 4, padding: "2px 6px", textDecoration: "none", whiteSpace: "nowrap" }}>
                          CAUBO ↗
                        </a>
                      </div>
                    </div>
                    <div style={{ height: 8, background: "rgba(27,42,33,0.08)", borderRadius: 4, overflow: "hidden", marginBottom: 5 }}>
                      <div style={{ height: "100%", width: `${(capacityPts / 20) * 100}%`, background: capacityPts >= 14 ? "#1E4D38" : capacityPts >= 8 ? "#B5862E" : "#9FBFAD", borderRadius: 4, transition: "width 600ms cubic-bezier(0.4,0,0.2,1)" }} />
                    </div>
                    <p style={{ fontSize: 11.5, lineHeight: 1.55, color: "#6B7F72", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif", fontStyle: "italic" }}>
                      {capacityPts >= 18 ? "A+ / A range: substantial endowment and multi-year operating surplus. Full discretionary capacity for AI roadmap execution." :
                       capacityPts >= 14 ? "B range: adequate reserves for planned AI programs; limited capacity for accelerated unbudgeted expansion." :
                       capacityPts >= 8  ? "C range: high tuition dependency or modest endowment constrains discretionary AI spending materially." :
                       "D / F range: documented financial pressures. New unbudgeted AI program investment is significantly constrained."}
                    </p>
                  </div>
                );
              })()}
            </div>

            {/* Stage Context */}
            <div style={{ background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)", borderRadius: "var(--radius-card)", padding: "28px 32px", boxShadow: "var(--shadow-card)", marginBottom: 24 }}>
              <p style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A584E", margin: "0 0 18px" }}>
                Stage {maturityStage} · {m.label}
              </p>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "#1B2A21", margin: "0 0 20px" }}>
                {m.description}
              </p>
              <div style={{ borderTop: "1px solid rgba(27,42,33,0.08)", paddingTop: 18 }}>
                <p style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A584E", margin: "0 0 10px" }}>
                  {maturityStage < 5 ? `To reach Stage ${maturityStage + 1}` : "Sustaining Stage 5"}
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "#4A584E", margin: 0 }}>
                  {m.next}
                </p>
              </div>
            </div>

            <div style={{ background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)", borderRadius: "var(--radius-card)", padding: "28px 32px", boxShadow: "var(--shadow-card)" }}>
              <p style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A584E", margin: "0 0 18px" }}>
                What Earned This Score
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {u.keySignals.map((signal, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1E4D38", flexShrink: 0, marginTop: 6 }} />
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: "#1B2A21", margin: 0 }}>{signal}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: peers + CTA */}
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
              <p style={{ fontSize: 16, fontWeight: 500, fontFamily: "var(--font-display)", color: "#F1EEE2", margin: "0 0 8px", lineHeight: 1.2 }}>
                Get your institution&apos;s full assessment.
              </p>
              <p style={{ fontSize: 13, color: "rgba(201,217,206,0.82)", margin: "0 0 18px", lineHeight: 1.6 }}>
                We embed on-site for 6–12 months, deliver a full AI readiness report to your board, and credit the audit fee toward implementation.
              </p>
              <Link
                href={`/get-started?source=canadian-index&institution=${u.slug}`}
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
              Score incorrect?{" "}
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
