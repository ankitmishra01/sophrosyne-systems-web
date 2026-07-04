"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight, X } from "lucide-react";
import type { CanadianUniversityEntry, Province, Trajectory, UniversityType } from "@/lib/data";

function SmallLogo({ domain, name }: { domain: string; name: string }) {
  const [src, setSrc] = useState(`https://logo.clearbit.com/${domain}?size=128`);
  const [stage, setStage] = useState(0);
  const letter = name[0]?.toUpperCase() ?? "U";
  if (stage >= 2 || !domain) {
    return (
      <div style={{ width: 26, height: 26, borderRadius: 5, background: "rgba(30,77,56,0.10)", border: "1px solid rgba(30,77,56,0.16)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginRight: 10 }}>
        <span style={{ color: "#1E4D38", fontSize: 11, fontWeight: 700 }}>{letter}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt=""
      width={26}
      height={26}
      loading="lazy"
      onError={() => {
        if (stage === 0) { setSrc(`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=128`); setStage(1); }
        else { setStage(2); }
      }}
      style={{ width: 26, height: 26, objectFit: "contain", borderRadius: 5, border: "1px solid rgba(27,42,33,0.10)", background: "#fff", padding: 2, flexShrink: 0, marginRight: 10 }}
    />
  );
}

const PROVINCES: { code: Province; label: string }[] = [
  { code: "AB", label: "Alberta" },
  { code: "BC", label: "British Columbia" },
  { code: "MB", label: "Manitoba" },
  { code: "NB", label: "New Brunswick" },
  { code: "NL", label: "Newfoundland" },
  { code: "NS", label: "Nova Scotia" },
  { code: "ON", label: "Ontario" },
  { code: "PE", label: "PEI" },
  { code: "QC", label: "Quebec" },
  { code: "SK", label: "Saskatchewan" },
];

const TYPES: UniversityType[] = ["U15 Research", "Research-Intensive", "Comprehensive", "Liberal Arts", "Polytechnic", "College"];
const TRAJECTORIES: Trajectory[] = ["Rising", "Steady", "Early Stage"];

const STAGE_META: Record<number, { label: string; bg: string; color: string; border: string; description: string; next: string }> = {
  1: { label: "Explore",   bg: "rgba(74,88,78,0.10)",    color: "#4A584E", border: "rgba(74,88,78,0.22)",    description: "AI awareness is nascent. No formal policy or structured curriculum in place.", next: "Publish an institutional AI use policy and launch one faculty-facing workshop series." },
  2: { label: "Deploy",    bg: "rgba(176,114,106,0.10)", color: "#B0726A", border: "rgba(176,114,106,0.22)", description: "Initial tools deployed and basic policy documented. Adoption remains siloed.", next: "Expand curriculum integration beyond pilot units and formalise an AI governance committee." },
  3: { label: "Automate",  bg: "rgba(181,134,46,0.12)",  color: "#B5862E", border: "rgba(181,134,46,0.28)",  description: "AI embedded in workflows across multiple units. Governance structures active.", next: "Connect AI initiatives to research commercialisation and publish transparent impact metrics." },
  4: { label: "Integrate", bg: "rgba(30,77,56,0.10)",    color: "#1E4D38", border: "rgba(30,77,56,0.28)",    description: "AI woven across teaching, research, and operations. Industry linkages established.", next: "Pursue national centre designation and align AI strategy with accreditation standards." },
  5: { label: "Reshape",   bg: "#1E4D38",                color: "#F4F0E6", border: "#1E4D38",                description: "AI is core to the institutional mission. Setting national standards for the sector.", next: "Export frameworks to peer institutions and lead sector-wide AI governance coalitions." },
};

const TRAJECTORY_STYLE: Record<Trajectory, { bg: string; color: string }> = {
  "Rising":      { bg: "rgba(30,77,56,0.12)",  color: "#1E4D38" },
  "Steady":      { bg: "rgba(181,134,46,0.14)", color: "#926C1A" },
  "Early Stage": { bg: "rgba(74,88,78,0.12)",   color: "#4A584E" },
};

function getStage(u: CanadianUniversityEntry): number {
  return u.score >= 80 ? 5 : u.score >= 60 ? 4 : u.score >= 40 ? 3 : u.score >= 20 ? 2 : 1;
}

function StageBadge({ stage }: { stage: number }) {
  const m = STAGE_META[stage];
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 4,
        fontSize: 11, fontWeight: 600,
        fontFamily: "var(--font-libre-franklin), sans-serif",
        letterSpacing: "0.06em",
        background: m.bg, color: m.color, border: `1px solid ${m.border}`,
        borderRadius: 4, padding: "3px 8px", whiteSpace: "nowrap",
      }}
    >
      {stage} · {m.label}
    </span>
  );
}

function TrajectoryBadge({ trajectory }: { trajectory: Trajectory }) {
  const s = TRAJECTORY_STYLE[trajectory];
  return (
    <span
      style={{
        fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif",
        padding: "3px 8px", borderRadius: 4,
        background: s.bg, color: s.color,
        whiteSpace: "nowrap",
      }}
    >
      {trajectory}
    </span>
  );
}

function DimDots({ d }: { d: CanadianUniversityEntry["dimensions"] }) {
  const dims = [
    { v: d.research, label: "Research" },
    { v: d.policy, label: "Policy" },
    { v: d.curriculum, label: "Curriculum" },
    { v: d.partnerships, label: "Partnerships" },
    { v: d.infrastructure, label: "Infrastructure" },
  ];
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
      {dims.map(({ v, label }) => (
        <div
          key={label}
          title={`${label}: ${v}/20`}
          style={{
            width: 10, height: 10, borderRadius: 2, flexShrink: 0,
            background: v >= 14 ? "#1E4D38" : v >= 8 ? "#B5862E" : "#D6DED9",
          }}
        />
      ))}
    </div>
  );
}

function MobileCard({ u }: { u: CanadianUniversityEntry }) {
  return (
    <Link href={`/insights/canadian-universities/${u.slug}`} style={{ textDecoration: "none", display: "block" }} className="mobile-card-link">
      <div
        className="mobile-card"
        style={{
          background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)",
          borderRadius: "var(--radius-card)", padding: "18px 20px",
          transition: "border-color 180ms, box-shadow 180ms",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
          <StageBadge stage={getStage(u)} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontSize: 14, fontWeight: 500, color: "#1B2A21", margin: "0 0 3px",
                fontFamily: "var(--font-display)", lineHeight: 1.2,
              }}
            >
              {u.name}
            </p>
            <p style={{ fontSize: 12, color: "#4A584E", margin: 0 }}>
              {u.province} · {u.type}
            </p>
          </div>
          <TrajectoryBadge trajectory={u.trajectory} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}>
          <DimDots d={u.dimensions} />
          <p style={{ fontSize: 11, color: "#9FBFAD", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif" }}>
            Research · Policy · Curriculum · Partnerships · Infra
          </p>
        </div>
      </div>
    </Link>
  );
}

const selectStyle: React.CSSProperties = {
  width: "100%", height: 40, padding: "0 28px 0 12px",
  border: "1px solid rgba(27,42,33,0.18)", borderRadius: 8,
  background: "#FFFFFF", fontSize: 13.5,
  color: "#1B2A21", appearance: "none", cursor: "pointer",
  fontFamily: "var(--font-libre-franklin), sans-serif",
};

export default function CanadianIndex({ universities }: { universities: CanadianUniversityEntry[] }) {
  const [search, setSearch] = useState("");
  const [provinceFilter, setProvinceFilter] = useState<Province | "all">("all");
  const [typeFilter, setTypeFilter] = useState<UniversityType | "all">("all");
  const [trajectoryFilter, setTrajectoryFilter] = useState<Trajectory | "all">("all");
  const [stageFilter, setStageFilter] = useState<number | "all">("all");

  const activeFilterCount = [
    provinceFilter !== "all",
    typeFilter !== "all",
    trajectoryFilter !== "all",
    stageFilter !== "all",
    search !== "",
  ].filter(Boolean).length;

  function clearFilters() {
    setSearch("");
    setProvinceFilter("all");
    setTypeFilter("all");
    setTrajectoryFilter("all");
    setStageFilter("all");
  }

  const filtered = useMemo(
    () =>
      universities.filter((u) => {
        const matchSearch =
          search === "" ||
          u.name.toLowerCase().includes(search.toLowerCase()) ||
          u.shortName.toLowerCase().includes(search.toLowerCase()) ||
          u.province.toLowerCase().includes(search.toLowerCase());
        const matchProvince = provinceFilter === "all" || u.province === provinceFilter;
        const matchType = typeFilter === "all" || u.type === typeFilter;
        const matchTraj = trajectoryFilter === "all" || u.trajectory === trajectoryFilter;
        const matchStage = stageFilter === "all" || getStage(u) === stageFilter;
        return matchSearch && matchProvince && matchType && matchTraj && matchStage;
      }).sort((a, b) => (getStage(b) - getStage(a)) || (b.score - a.score)),
    [search, provinceFilter, typeFilter, trajectoryFilter, stageFilter]
  );

  const stage45Count = universities.filter((u) => getStage(u) >= 4).length;
  const earlyStageCount = universities.filter((u) => getStage(u) <= 2).length;

  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "140px var(--pad-h) 56px",
          background: "radial-gradient(ellipse 80% 60% at 20% 35%, #ECF1EC 0%, #F4F0E6 60%)",
          borderBottom: "1px solid rgba(27,42,33,0.08)",
        }}
      >
        <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif",
              letterSpacing: "0.18em", textTransform: "uppercase", color: "#B5862E", margin: "0 0 18px",
            }}
          >
            Sophrosyne Portal · Canada
          </p>
          <h1
            style={{
              fontSize: "clamp(28px, 3.8vw, 52px)", fontWeight: 500,
              fontFamily: "var(--font-display)",
              color: "#1B2A21", margin: "0 0 18px",
              letterSpacing: "-0.016em", lineHeight: 1.1, maxWidth: 700,
            }}
          >
            Canadian Universities AI Readiness Index
          </h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.72, color: "#4A584E", maxWidth: 560, margin: "0 0 32px" }}>
            Every Canadian degree-granting university scored across five AI readiness dimensions: research output, policy, curriculum, partnerships, and infrastructure — plus a separate financial health grade. Click any institution to view its full profile. Free, no login required. Updated Q2&nbsp;2026.
          </p>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {[
              { n: `${universities.length}`, label: "universities tracked" },
              { n: `${stage45Count}`, label: "at Stage 4–5" },
              { n: `${earlyStageCount}`, label: "at Stage 1–2" },
              { n: "5", label: "dimensions per university" },
            ].map(({ n, label }) => (
              <div key={label}>
                <p style={{ fontSize: "clamp(22px, 2.2vw, 30px)", fontWeight: 500, fontFamily: "var(--font-display)", color: "#1E4D38", margin: "0 0 2px", lineHeight: 1 }}>{n}</p>
                <p style={{ fontSize: 12, fontFamily: "var(--font-libre-franklin), sans-serif", color: "#4A584E", margin: 0 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <div style={{ background: "#FFFFFF", borderBottom: "1px solid rgba(27,42,33,0.10)", padding: "16px var(--pad-h)" }}>
        <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            {/* Search */}
            <div style={{ position: "relative", flex: "2 1 200px" }}>
              <Search size={14} style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "#8A968C", pointerEvents: "none" }} />
              <input
                type="text" placeholder="Search universities…" value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%", height: 40, padding: "0 12px 0 34px",
                  border: "1px solid rgba(27,42,33,0.18)", borderRadius: 8,
                  background: "#FFFFFF", fontSize: 13.5, color: "#1B2A21",
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Province */}
            <div style={{ position: "relative", flex: "1 1 150px" }}>
              <select value={provinceFilter} onChange={(e) => setProvinceFilter(e.target.value as Province | "all")} style={selectStyle}>
                <option value="all">All Provinces</option>
                {PROVINCES.map((p) => <option key={p.code} value={p.code}>{p.label}</option>)}
              </select>
              <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", fontSize: 10, color: "#8A968C" }}>▼</span>
            </div>

            {/* Type */}
            <div style={{ position: "relative", flex: "1 1 160px" }}>
              <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value as UniversityType | "all")} style={selectStyle}>
                <option value="all">All Types</option>
                {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", fontSize: 10, color: "#8A968C" }}>▼</span>
            </div>

            {/* Trajectory */}
            <div style={{ position: "relative", flex: "1 1 140px" }}>
              <select value={trajectoryFilter} onChange={(e) => setTrajectoryFilter(e.target.value as Trajectory | "all")} style={selectStyle}>
                <option value="all">All Trajectories</option>
                {TRAJECTORIES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", fontSize: 10, color: "#8A968C" }}>▼</span>
            </div>

            {/* Stage */}
            <div style={{ position: "relative", flex: "1 1 130px" }}>
              <select value={stageFilter} onChange={(e) => setStageFilter(e.target.value === "all" ? "all" : Number(e.target.value))} style={selectStyle}>
                <option value="all">All Stages</option>
                {([1, 2, 3, 4, 5] as const).map((s) => <option key={s} value={s}>{s} · {STAGE_META[s].label}</option>)}
              </select>
              <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", fontSize: 10, color: "#8A968C" }}>▼</span>
            </div>

            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  height: 40, padding: "0 14px",
                  border: "1px solid rgba(181,134,46,0.38)", borderRadius: 8,
                  background: "rgba(199,161,74,0.08)", color: "#926C1A",
                  fontSize: 13, fontWeight: 600, cursor: "pointer",
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  whiteSpace: "nowrap",
                }}
              >
                <X size={12} strokeWidth={2.5} /> Clear ({activeFilterCount})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <section style={{ padding: "24px var(--pad-h) var(--section-py)", background: "#F4F0E6" }}>
        <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
          {/* Meta row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 10 }}>
            <p style={{ fontSize: 13, color: "#4A584E", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif" }}>
              Showing <strong>{filtered.length}</strong> of {universities.length} universities · sorted by maturity stage
            </p>
            <Link
              href="/get-started?source=canadian-index"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600,
                fontFamily: "var(--font-libre-franklin), sans-serif",
                color: "#FFFFFF", background: "#1E4D38",
                borderRadius: "var(--radius-btn)", padding: "8px 16px",
                textDecoration: "none", whiteSpace: "nowrap",
              }}
            >
              Want a deep dive? Contact us <ArrowRight size={12} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Desktop table */}
          <div className="desktop-table" style={{ background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)", borderRadius: "var(--radius-card)", overflow: "hidden", overflowX: "auto", boxShadow: "var(--shadow-card)" }}>
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 90px 150px 70px 110px 76px 80px", columnGap: 12, padding: "12px 20px", background: "#F9F7F2", borderBottom: "1px solid rgba(27,42,33,0.08)", minWidth: 720 }}>
              {["University", "Stage", "Type", "Province", "Trajectory", "$$", "Dimensions"].map((h) => (
                <p key={h} style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A584E", margin: 0, whiteSpace: "nowrap", overflow: "hidden" }}>
                  {h === "$$" ? "Financial" : h === "Dimensions" ? "Dims" : h}
                </p>
              ))}
            </div>
            {/* Rows */}
            {filtered.length === 0 ? (
              <div style={{ padding: "40px 20px", textAlign: "center", color: "#4A584E", fontSize: 14 }}>
                No universities match your filters.
              </div>
            ) : (
              filtered.map((u, i) => {
                const fg = { "A+": { bg: "#1E4D38", color: "#F4F0E6", border: "#1E4D38" }, "A": { bg: "rgba(30,77,56,0.12)", color: "#1E4D38", border: "rgba(30,77,56,0.30)" }, "A-": { bg: "rgba(30,77,56,0.10)", color: "#1E4D38", border: "rgba(30,77,56,0.24)" }, "B+": { bg: "rgba(181,134,46,0.14)", color: "#926C1A", border: "rgba(181,134,46,0.32)" }, "B": { bg: "rgba(181,134,46,0.10)", color: "#926C1A", border: "rgba(181,134,46,0.24)" }, "B-": { bg: "rgba(181,134,46,0.08)", color: "#926C1A", border: "rgba(181,134,46,0.20)" }, "C+": { bg: "rgba(74,88,78,0.10)", color: "#4A584E", border: "rgba(74,88,78,0.22)" }, "C": { bg: "rgba(74,88,78,0.08)", color: "#4A584E", border: "rgba(74,88,78,0.18)" }, "C-": { bg: "rgba(74,88,78,0.06)", color: "#4A584E", border: "rgba(74,88,78,0.14)" }, "D": { bg: "rgba(176,114,106,0.10)", color: "#B0726A", border: "rgba(176,114,106,0.22)" }, "F": { bg: "rgba(176,114,106,0.14)", color: "#B0726A", border: "rgba(176,114,106,0.28)" } }[u.financialGrade] ?? { bg: "rgba(74,88,78,0.08)", color: "#4A584E", border: "rgba(74,88,78,0.18)" };
                const fgLabel = u.financialGrade === "A-" ? "A−" : u.financialGrade === "B-" ? "B−" : u.financialGrade === "C-" ? "C−" : u.financialGrade;
                return (
                  <Link
                    key={u.slug}
                    href={`/insights/canadian-universities/${u.slug}`}
                    style={{ textDecoration: "none", display: "grid", gridTemplateColumns: "1fr 90px 150px 70px 110px 76px 80px", columnGap: 12, padding: "14px 20px", borderBottom: i < filtered.length - 1 ? "1px solid rgba(27,42,33,0.06)" : "none", alignItems: "center", transition: "background 150ms", minWidth: 720 }}
                    className="table-row"
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <SmallLogo domain={u.officialDomain} name={u.name} />
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 500, color: "#1B2A21", margin: "0 0 1px", fontFamily: "var(--font-display)", lineHeight: 1.2 }}>{u.name}</p>
                        <p style={{ fontSize: 11.5, color: "#4A584E", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                          {u.enrollment} enrolment · est. {u.founded}
                        </p>
                      </div>
                    </div>
                    <StageBadge stage={getStage(u)} />
                    <p style={{ fontSize: 12.5, color: "#1B2A21", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif" }}>{u.type}</p>
                    <p style={{ fontSize: 13, color: "#1B2A21", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif", fontWeight: 500 }}>{u.province}</p>
                    <TrajectoryBadge trajectory={u.trajectory} />
                    <span style={{ fontSize: 12, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", padding: "3px 7px", borderRadius: 4, background: fg.bg, color: fg.color, border: `1px solid ${fg.border}`, whiteSpace: "nowrap", display: "inline-block" }}>{fgLabel}</span>
                    <DimDots d={u.dimensions} />
                  </Link>
                );
              })
            )}
          </div>

          {/* Mobile cards */}
          <div className="mobile-cards" style={{ display: "none", flexDirection: "column", gap: 10 }}>
            {filtered.length === 0 ? (
              <p style={{ textAlign: "center", color: "#4A584E", fontSize: 14, padding: "32px 0" }}>No universities match your filters.</p>
            ) : (
              filtered.map((u) => <MobileCard key={u.slug} u={u} />)
            )}
          </div>

          {/* Legend */}
          <div style={{ marginTop: 32, padding: "20px 24px", background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)", borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)" }}>
            <p style={{ fontSize: 11, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4A584E", margin: "0 0 14px" }}>
              Dimension key
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 32px" }}>
              {[
                { abbr: "R", label: "Research Output", desc: "AI labs, faculty, publications, patents (0–20)" },
                { abbr: "P", label: "AI Policy & Ethics", desc: "Published AI policies, ethics frameworks (0–20)" },
                { abbr: "C", label: "Curriculum Integration", desc: "AI degree programs, integrated courses (0–20)" },
                { abbr: "Pa", label: "Industry Partnerships", desc: "Industry/gov AI partnerships, NSERC grants (0–20)" },
                { abbr: "I", label: "Infrastructure & Compute", desc: "HPC access, cloud partnerships, compute labs (0–20)" },
              ].map(({ abbr, label, desc }) => (
                <div key={abbr} style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#1E4D38", fontFamily: "var(--font-libre-franklin), sans-serif", minWidth: 20 }}>{abbr}</span>
                  <span style={{ fontSize: 12, color: "#1B2A21", fontWeight: 600 }}>{label}</span>
                  <span style={{ fontSize: 12, color: "#4A584E" }}>— {desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stage Definitions */}
          <div style={{ marginTop: 24, padding: "20px 24px", background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)", borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)" }}>
            <p style={{ fontSize: 11, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4A584E", margin: "0 0 16px" }}>
              Stage Definitions
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {([1, 2, 3, 4, 5] as const).map((s) => {
                const m = STAGE_META[s];
                return (
                  <div key={s} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.06em", background: m.bg, color: m.color, border: `1px solid ${m.border}`, borderRadius: 4, padding: "3px 8px", whiteSpace: "nowrap", flexShrink: 0 }}>
                      {s} · {m.label}
                    </span>
                    <p style={{ fontSize: 13, lineHeight: 1.55, color: "#4A584E", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                      {m.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer CTA */}
          <div style={{ marginTop: 32, padding: "32px 36px", background: "#1E4D38", borderRadius: "var(--radius-card)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <div>
              <p style={{ fontSize: 18, fontWeight: 500, fontFamily: "var(--font-display)", color: "#F1EEE2", margin: "0 0 6px", lineHeight: 1.2 }}>
                See where your institution lands on the maturity scale.
              </p>
              <p style={{ fontSize: 13.5, color: "rgba(201,217,206,0.82)", margin: 0 }}>
                Book the diagnostic. We embed on-site for 6–12 months and report to your board.
              </p>
            </div>
            <Link
              href="/get-started?source=canadian-index"
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                fontSize: 13, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif",
                background: "#F1EEE2", color: "#1E4D38",
                borderRadius: "var(--radius-btn)", padding: "11px 22px",
                textDecoration: "none", whiteSpace: "nowrap",
              }}
            >
              Book the diagnostic <ArrowRight size={13} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Methodology */}
          <p style={{ marginTop: 20, fontSize: 11, color: "#6B7F72", lineHeight: 1.6, fontFamily: "var(--font-libre-franklin), sans-serif" }}>
            Five AI readiness dimensions, each scored 0–20 (max composite 100): Research Output, AI Policy &amp; Ethics, Curriculum Integration, Industry Partnerships, Infrastructure &amp; Compute. Financial health shown separately as a letter grade (CAUBO FIUC 2023/24, Statistics Canada, HESA research). Scores derived from publicly available signals: institutional websites, NSERC data, AI lab pages, job postings, and published strategy documents.{" "}
            Spot an error?{" "}
            <a href="mailto:lauretta@sophrosynesystems.org?subject=Canadian Index — correction request" style={{ color: "#1E4D38", textDecoration: "underline", textUnderlineOffset: 2 }}>
              Submit a correction →
            </a>
          </p>
          <p style={{ marginTop: 6, fontSize: 11, color: "#8A968C", lineHeight: 1.6, fontFamily: "var(--font-libre-franklin), sans-serif" }}>
            All institutional logos are the property of their respective institutions and are used solely for identification purposes under nominative fair use.
          </p>
        </div>

        <style>{`
          .desktop-table { display: block; }
          .mobile-cards  { display: none !important; }
          @media (max-width: 760px) {
            .desktop-table { display: none !important; }
            .mobile-cards  { display: flex !important; }
          }
          .table-row:hover { background: rgba(27,42,33,0.03); }
          .mobile-card-link:hover .mobile-card {
            border-color: rgba(30,77,56,0.24);
            box-shadow: var(--shadow-card-lg);
          }
        `}</style>
      </section>
    </>
  );
}
