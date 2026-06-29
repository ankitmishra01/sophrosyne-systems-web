"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight, X } from "lucide-react";
import type { InstitutionEntry, Region } from "@/lib/data";

function SmallLogo({ domain, name }: { domain: string; name: string }) {
  const [src, setSrc] = useState(`https://logo.clearbit.com/${domain}?size=128`);
  const [stage, setStage] = useState(0);
  const letter = name[0]?.toUpperCase() ?? "U";
  if (stage >= 2 || !domain) {
    return (
      <div style={{ width: 26, height: 26, borderRadius: 5, background: "rgba(30,77,56,0.10)", border: "1px solid rgba(30,77,56,0.16)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
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
      style={{ width: 26, height: 26, objectFit: "contain", borderRadius: 5, border: "1px solid rgba(27,42,33,0.10)", background: "#fff", padding: 2, flexShrink: 0 }}
    />
  );
}

const LAST_UPDATED = "Q2 2026";

const STAGE_META: Record<number, { label: string; bg: string; color: string; border: string }> = {
  1: { label: "Explore",   bg: "rgba(74,88,78,0.10)",    color: "#4A584E", border: "rgba(74,88,78,0.22)" },
  2: { label: "Deploy",    bg: "rgba(176,114,106,0.10)", color: "#B0726A", border: "rgba(176,114,106,0.22)" },
  3: { label: "Automate",  bg: "rgba(181,134,46,0.12)",  color: "#B5862E", border: "rgba(181,134,46,0.28)" },
  4: { label: "Integrate", bg: "rgba(30,77,56,0.10)",    color: "#1E4D38", border: "rgba(30,77,56,0.28)" },
  5: { label: "Reshape",   bg: "#1E4D38",                color: "#F4F0E6", border: "#1E4D38" },
};

const TYPES = ["R1 Research", "R2 Research", "Liberal Arts", "Regional", "Community College"] as const;
const ENROLLMENTS = ["<5k", "5k–15k", "15k–30k", "30k+"] as const;
const REGIONS: Region[] = ["Northeast", "Southeast", "Midwest", "Southwest", "West"];

function StageBadge({ stage }: { stage: number }) {
  const m = STAGE_META[stage];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        fontSize: 11,
        fontWeight: 600,
        fontFamily: "var(--font-libre-franklin), sans-serif",
        letterSpacing: "0.06em",
        background: m.bg,
        color: m.color,
        border: `1px solid ${m.border}`,
        borderRadius: 4,
        padding: "3px 8px",
        whiteSpace: "nowrap",
      }}
    >
      {stage} · {m.label}
    </span>
  );
}

const FINANCIAL_GRADE_META: Record<string, { bg: string; color: string; border: string }> = {
  "A+": { bg: "#1E4D38", color: "#F4F0E6", border: "#1E4D38" },
  "A":  { bg: "rgba(30,77,56,0.12)", color: "#1E4D38", border: "rgba(30,77,56,0.30)" },
  "A-": { bg: "rgba(30,77,56,0.10)", color: "#1E4D38", border: "rgba(30,77,56,0.24)" },
  "B+": { bg: "rgba(181,134,46,0.14)", color: "#926C1A", border: "rgba(181,134,46,0.32)" },
  "B":  { bg: "rgba(181,134,46,0.10)", color: "#926C1A", border: "rgba(181,134,46,0.24)" },
  "B-": { bg: "rgba(181,134,46,0.08)", color: "#926C1A", border: "rgba(181,134,46,0.20)" },
  "C+": { bg: "rgba(74,88,78,0.10)", color: "#4A584E", border: "rgba(74,88,78,0.22)" },
  "C":  { bg: "rgba(74,88,78,0.08)", color: "#4A584E", border: "rgba(74,88,78,0.18)" },
  "C-": { bg: "rgba(74,88,78,0.06)", color: "#4A584E", border: "rgba(74,88,78,0.14)" },
  "D":  { bg: "rgba(176,114,106,0.10)", color: "#B0726A", border: "rgba(176,114,106,0.22)" },
  "F":  { bg: "rgba(176,114,106,0.14)", color: "#B0726A", border: "rgba(176,114,106,0.28)" },
};

function FinancialGradeBadge({ grade }: { grade: string }) {
  const fg = FINANCIAL_GRADE_META[grade] ?? FINANCIAL_GRADE_META["C"];
  const label = grade === "A-" ? "A−" : grade === "B-" ? "B−" : grade === "C-" ? "C−" : grade;
  return (
    <span style={{ fontSize: 12, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", padding: "3px 8px", borderRadius: 4, background: fg.bg, color: fg.color, border: `1px solid ${fg.border}`, whiteSpace: "nowrap" }}>
      {label}
    </span>
  );
}

function BoolIndicator({ value }: { value: boolean }) {
  return (
    <span
      style={{
        fontSize: 13,
        fontWeight: 500,
        color: value ? "#1E4D38" : "#8A968C",
      }}
    >
      {value ? "✓" : "—"}
    </span>
  );
}

function MobileCard({ inst }: { inst: InstitutionEntry }) {
  const m = STAGE_META[inst.maturityStage];
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(27,42,33,0.10)",
        borderRadius: "var(--radius-card)",
        padding: "18px 20px",
        boxShadow: "0 1px 2px rgba(27,42,33,0.05)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
        <p
          style={{
            fontSize: 15,
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: "#1B2A21",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {inst.name}
        </p>
        <StageBadge stage={inst.maturityStage} />
      </div>
      <p
        style={{
          fontSize: 12,
          color: "#8A968C",
          margin: "0 0 10px",
          fontFamily: "var(--font-libre-franklin), sans-serif",
        }}
      >
        {inst.type} · {inst.state}, {inst.country} · {inst.enrollment} students
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            fontFamily: "var(--font-libre-franklin), sans-serif",
            color: inst.aiPolicyPublished ? "#1E4D38" : "#8A968C",
            background: inst.aiPolicyPublished ? "rgba(30,77,56,0.08)" : "rgba(138,150,140,0.10)",
            border: `1px solid ${inst.aiPolicyPublished ? "rgba(30,77,56,0.20)" : "rgba(138,150,140,0.20)"}`,
            borderRadius: 4,
            padding: "2px 7px",
          }}
        >
          {inst.aiPolicyPublished ? "✓ Policy" : "No policy"}
        </span>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            fontFamily: "var(--font-libre-franklin), sans-serif",
            color: inst.aiCurriculumInitiative ? "#1E4D38" : "#8A968C",
            background: inst.aiCurriculumInitiative ? "rgba(30,77,56,0.08)" : "rgba(138,150,140,0.10)",
            border: `1px solid ${inst.aiCurriculumInitiative ? "rgba(30,77,56,0.20)" : "rgba(138,150,140,0.20)"}`,
            borderRadius: 4,
            padding: "2px 7px",
          }}
        >
          {inst.aiCurriculumInitiative ? "✓ Curriculum" : "No curriculum"}
        </span>
      </div>
    </div>
  );
}

const selectStyle: React.CSSProperties = {
  fontSize: 13,
  fontFamily: "var(--font-libre-franklin), sans-serif",
  color: "#1B2A21",
  background: "#F9F7F2",
  border: "1px solid rgba(27,42,33,0.14)",
  borderRadius: 8,
  padding: "9px 12px",
  appearance: "none",
  cursor: "pointer",
  outline: "none",
  flex: "1 1 140px",
  minWidth: 120,
};

export default function AIReadinessIndex({ institutions }: { institutions: InstitutionEntry[] }) {
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState<Region | "all">("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [enrollmentFilter, setEnrollmentFilter] = useState("all");
  const [stageFilter, setStageFilter] = useState<number | "all">("all");

  const activeFilterCount = [regionFilter !== "all", typeFilter !== "all", enrollmentFilter !== "all", stageFilter !== "all", search !== ""].filter(Boolean).length;

  const filtered = useMemo(
    () =>
      institutions.filter((inst) => {
        const matchSearch =
          !search ||
          inst.name.toLowerCase().includes(search.toLowerCase()) ||
          inst.state.toLowerCase().includes(search.toLowerCase());
        const matchRegion = regionFilter === "all" || inst.region === regionFilter;
        const matchType = typeFilter === "all" || inst.type === typeFilter;
        const matchEnrollment = enrollmentFilter === "all" || inst.enrollment === enrollmentFilter;
        const matchStage = stageFilter === "all" || inst.maturityStage === stageFilter;
        return matchSearch && matchRegion && matchType && matchEnrollment && matchStage;
      }),
    [search, regionFilter, typeFilter, enrollmentFilter, stageFilter]
  );

  function clearFilters() {
    setSearch("");
    setRegionFilter("all");
    setTypeFilter("all");
    setEnrollmentFilter("all");
    setStageFilter("all");
  }

  const thStyle: React.CSSProperties = {
    fontSize: 10,
    fontWeight: 700,
    fontFamily: "var(--font-libre-franklin), sans-serif",
    letterSpacing: "0.10em",
    textTransform: "uppercase",
    color: "#8A968C",
    padding: "10px 16px",
    textAlign: "left",
    borderBottom: "1px solid rgba(27,42,33,0.10)",
    whiteSpace: "nowrap",
    background: "#FAFAF8",
  };

  const tdStyle: React.CSSProperties = {
    fontSize: 13,
    color: "#1B2A21",
    padding: "14px 16px",
    borderBottom: "1px solid rgba(27,42,33,0.06)",
    verticalAlign: "middle",
  };

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
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                fontFamily: "var(--font-libre-franklin), sans-serif",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#B5862E",
                margin: 0,
              }}
            >
              Free Tool
            </p>
            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                fontFamily: "var(--font-libre-franklin), sans-serif",
                background: "rgba(30,77,56,0.10)",
                color: "#1E4D38",
                border: "1px solid rgba(30,77,56,0.22)",
                borderRadius: 4,
                padding: "2px 7px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              No login required
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 3.8vw, 52px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21",
              margin: "0 0 16px",
              letterSpacing: "-0.015em",
              lineHeight: 1.08,
              maxWidth: 700,
            }}
          >
            US AI Readiness Index
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "#4A584E",
              maxWidth: 560,
              margin: "0 0 20px",
            }}
          >
            Where do the top 100 U.S. universities actually stand on AI implementation? Track the 5-stage journey from Explore to Reshape. Free, no account needed.
          </p>
          <p
            style={{
              fontSize: 13,
              color: "#8A968C",
              margin: 0,
              fontFamily: "var(--font-libre-franklin), sans-serif",
            }}
          >
            {institutions.length} institutions tracked · Updated {LAST_UPDATED} ·{" "}
            <Link
              href="/insights"
              style={{ color: "#1E4D38", textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              Back to Insights
            </Link>
          </p>
        </div>
      </section>

      {/* Main content */}
      <section
        style={{
          padding: "var(--section-py) var(--pad-h)",
          background: "#F4F0E6",
          minHeight: "60vh",
        }}
      >
        <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>

          {/* Filter bar */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(27,42,33,0.10)",
              borderRadius: "var(--radius-card)",
              padding: "20px 24px",
              boxShadow: "var(--shadow-card)",
              marginBottom: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                alignItems: "center",
              }}
              className="filter-row"
            >
              {/* Search */}
              <div style={{ position: "relative", flex: "2 1 200px", minWidth: 160 }}>
                <Search
                  size={15}
                  color="#8A968C"
                  style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
                />
                <input
                  type="text"
                  placeholder="Search institution or state…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    width: "100%",
                    fontSize: 13,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    color: "#1B2A21",
                    background: "#F9F7F2",
                    border: "1px solid rgba(27,42,33,0.14)",
                    borderRadius: 8,
                    padding: "9px 12px 9px 34px",
                    outline: "none",
                  }}
                />
              </div>

              {/* Region */}
              <div style={{ position: "relative", flex: "1 1 140px" }}>
                <select
                  value={regionFilter}
                  onChange={(e) => setRegionFilter(e.target.value as Region | "all")}
                  style={selectStyle}
                >
                  <option value="all">All Regions</option>
                  {REGIONS.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
                <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", fontSize: 10, color: "#8A968C" }}>▼</span>
              </div>

              {/* Type */}
              <div style={{ position: "relative", flex: "1 1 140px" }}>
                <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} style={selectStyle}>
                  <option value="all">All Types</option>
                  {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", fontSize: 10, color: "#8A968C" }}>▼</span>
              </div>

              {/* Enrollment */}
              <div style={{ position: "relative", flex: "1 1 130px" }}>
                <select value={enrollmentFilter} onChange={(e) => setEnrollmentFilter(e.target.value)} style={selectStyle}>
                  <option value="all">All Sizes</option>
                  {ENROLLMENTS.map((e) => <option key={e} value={e}>{e} students</option>)}
                </select>
                <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", fontSize: 10, color: "#8A968C" }}>▼</span>
              </div>

              {/* Stage */}
              <div style={{ position: "relative", flex: "1 1 160px" }}>
                <select
                  value={stageFilter === "all" ? "all" : String(stageFilter)}
                  onChange={(e) => setStageFilter(e.target.value === "all" ? "all" : Number(e.target.value))}
                  style={selectStyle}
                >
                  <option value="all">All Stages</option>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <option key={s} value={s}>{s} · {STAGE_META[s].label}</option>
                  ))}
                </select>
                <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", fontSize: 10, color: "#8A968C" }}>▼</span>
              </div>

              {/* Clear badge */}
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    fontSize: 12,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    color: "#B5862E",
                    background: "rgba(181,134,46,0.10)",
                    border: "1px solid rgba(181,134,46,0.28)",
                    borderRadius: 6,
                    padding: "8px 12px",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  <X size={12} strokeWidth={2.5} />
                  Clear ({activeFilterCount})
                </button>
              )}
            </div>
          </div>

          {/* Results meta row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 16,
            }}
          >
            <p
              style={{
                fontSize: 13,
                color: "#8A968C",
                margin: 0,
                fontFamily: "var(--font-libre-franklin), sans-serif",
              }}
            >
              {filtered.length === institutions.length
                ? `${institutions.length} institutions`
                : `${filtered.length} of ${institutions.length} institutions`}
            </p>
            <Link
              href="/get-started?source=readiness-index"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "var(--font-libre-franklin), sans-serif",
                color: "#1E4D38",
                border: "1px solid rgba(30,77,56,0.28)",
                borderRadius: "var(--radius-btn)",
                padding: "7px 14px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              className="suggest-link"
            >
              Want a deep dive? Contact us →
            </Link>
          </div>

          {/* Desktop table */}
          {filtered.length > 0 ? (
            <>
              <div
                className="ari-table-wrap"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(27,42,33,0.10)",
                  borderRadius: "var(--radius-card)",
                  boxShadow: "var(--shadow-card)",
                  overflow: "hidden",
                  marginBottom: 16,
                }}
              >
                <table
                  className="ari-table"
                  style={{ width: "100%", borderCollapse: "collapse" }}
                >
                  <thead>
                    <tr>
                      <th style={{ ...thStyle, width: "30%" }}>Institution</th>
                      <th style={thStyle}>Type</th>
                      <th style={thStyle}>Enrollment</th>
                      <th style={{ ...thStyle, width: 52 }}>State</th>
                      <th style={thStyle}>Maturity Stage</th>
                      <th style={{ ...thStyle, textAlign: "center" }}>Policy</th>
                      <th style={{ ...thStyle, textAlign: "center" }}>Curriculum</th>
                      <th style={{ ...thStyle, textAlign: "center" }}>Financial Health</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((inst) => (
                      <tr key={inst.name} className="ari-row" style={{ cursor: "pointer" }} onClick={() => window.location.href = `/insights/ai-readiness-index/${inst.slug}`}>
                        <td style={{ ...tdStyle, fontWeight: 500, fontFamily: "var(--font-newsreader), serif", fontSize: 14 }}>
                          <Link href={`/insights/ai-readiness-index/${inst.slug}`} style={{ color: "#1B2A21", textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }} className="inst-name-link">
                            <SmallLogo domain={inst.officialDomain} name={inst.name} />
                            {inst.name}
                          </Link>
                        </td>
                        <td style={{ ...tdStyle, color: "#4A584E" }}>{inst.type}</td>
                        <td style={{ ...tdStyle, color: "#4A584E" }}>{inst.enrollment}</td>
                        <td style={{ ...tdStyle, color: "#4A584E", fontFamily: "var(--font-libre-franklin), sans-serif" }}>{inst.state}</td>
                        <td style={tdStyle}><StageBadge stage={inst.maturityStage} /></td>
                        <td style={{ ...tdStyle, textAlign: "center" }}><BoolIndicator value={inst.aiPolicyPublished} /></td>
                        <td style={{ ...tdStyle, textAlign: "center" }}><BoolIndicator value={inst.aiCurriculumInitiative} /></td>
                        <td style={{ ...tdStyle, textAlign: "center" }}><FinancialGradeBadge grade={inst.financialGrade} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile card stack */}
              <div className="ari-cards" style={{ display: "none", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                {filtered.map((inst) => (
                  <Link key={inst.name} href={`/insights/ai-readiness-index/${inst.slug}`} style={{ textDecoration: "none" }}>
                    <MobileCard inst={inst} />
                  </Link>
                ))}
              </div>
            </>
          ) : (
            /* Empty state */
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(27,42,33,0.10)",
                borderRadius: "var(--radius-card)",
                padding: "56px 32px",
                textAlign: "center",
                boxShadow: "var(--shadow-card)",
                marginBottom: 16,
              }}
            >
              <p style={{ fontSize: 16, fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: "#1B2A21", margin: "0 0 8px" }}>
                No institutions match your filters.
              </p>
              <p style={{ fontSize: 13, color: "#8A968C", margin: "0 0 20px" }}>
                Try broadening your search or clearing filters.
              </p>
              <button
                onClick={clearFilters}
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  color: "#1E4D38",
                  background: "transparent",
                  border: "1px solid rgba(30,77,56,0.28)",
                  borderRadius: "var(--radius-btn)",
                  padding: "9px 18px",
                  cursor: "pointer",
                }}
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Methodology + legal footnote */}
          <p
            style={{
              fontSize: 11,
              color: "#8A968C",
              fontFamily: "var(--font-libre-franklin), sans-serif",
              margin: "0 0 8px",
              lineHeight: 1.6,
            }}
          >
            Maturity assessments based on publicly available signals: institutional websites, press releases, job postings, and accreditor filings. Updated quarterly.{" "}
            <a
              href="mailto:lauretta@sophrosynesystems.org?subject=AI+Readiness+Index+—+Correction+Request"
              style={{ color: "#1E4D38", textDecoration: "underline", textUnderlineOffset: 2 }}
            >
              Request a correction →
            </a>
          </p>
          <p style={{ fontSize: 11, color: "#B0BAB3", fontFamily: "var(--font-libre-franklin), sans-serif", margin: "0 0 48px", lineHeight: 1.6 }}>
            All institutional logos are the property of their respective institutions and are used here solely for identification purposes under nominative fair use.
          </p>

          {/* Methodology note */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(27,42,33,0.10)",
              borderRadius: "var(--radius-card)",
              padding: "20px 28px",
              boxShadow: "var(--shadow-card)",
              marginBottom: 16,
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div style={{ flex: "1 1 300px" }}>
              <p style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A968C", margin: "0 0 8px" }}>
                Scoring Rubric
              </p>
              <p style={{ fontSize: 12.5, color: "#4A584E", margin: 0, lineHeight: 1.6 }}>
                Same 6-dimension rubric as the Canadian Universities AI Readiness Index. Each dimension scored 0–20. Composite score = sum of all 6 dimensions ÷ 120 × 100.
              </p>
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", flexShrink: 0 }}>
              {["Research Output", "AI Policy & Ethics", "Curriculum Integration", "Industry Partnerships", "Infrastructure & Compute", "Financial Capacity"].map((d) => (
                <span key={d} style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", color: "#1E4D38", background: "rgba(30,77,56,0.07)", border: "1px solid rgba(30,77,56,0.18)", borderRadius: 4, padding: "3px 8px", whiteSpace: "nowrap" }}>
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Stage legend */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(27,42,33,0.10)",
              borderRadius: "var(--radius-card)",
              padding: "24px 28px",
              boxShadow: "var(--shadow-card)",
              marginBottom: 48,
            }}
          >
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                fontFamily: "var(--font-libre-franklin), sans-serif",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#8A968C",
                margin: "0 0 16px",
              }}
            >
              Stage Definitions
            </p>
            <div
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              {[
                { stage: 1, desc: "Policy discussions, isolated workshops, vendor evaluations" },
                { stage: 2, desc: "Active rollout in ≥1 dept; published policy or LMS integration" },
                { stage: 3, desc: "AI in admin workflows across multiple departments; published policy" },
                { stage: 4, desc: "Cross-system integration; AI embedded in curriculum and hiring" },
                { stage: 5, desc: "AI credentials in graduation requirements; innovation infrastructure" },
              ].map(({ stage, desc }) => (
                <div key={stage} style={{ flex: "1 1 180px", minWidth: 160 }}>
                  <div style={{ marginBottom: 6 }}><StageBadge stage={stage} /></div>
                  <p style={{ fontSize: 12, color: "#4A584E", margin: 0, lineHeight: 1.5 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div
            style={{
              position: "relative",
              background: "#FFFFFF",
              border: "1px solid rgba(27,42,33,0.10)",
              borderRadius: "var(--radius-card)",
              padding: "36px 36px 36px 48px",
              boxShadow: "var(--shadow-card)",
              overflow: "hidden",
            }}
          >
            {/* Pine left accent bar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                width: 4,
                background: "#1E4D38",
                borderRadius: "var(--radius-card) 0 0 var(--radius-card)",
              }}
            />
            <div
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}
              className="cta-inner"
            >
              <div style={{ flex: "1 1 300px" }}>
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#B5862E",
                    margin: "0 0 10px",
                  }}
                >
                  Free Assessment
                </p>
                <h2
                  style={{
                    fontSize: "clamp(18px, 2vw, 24px)",
                    fontWeight: 500,
                    fontFamily: "var(--font-newsreader), serif",
                    color: "#1B2A21",
                    margin: "0 0 10px",
                    letterSpacing: "-0.012em",
                    lineHeight: 1.2,
                  }}
                >
                  Get your institution&apos;s full readiness assessment.
                </h2>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "#4A584E", margin: 0 }}>
                  Our 2-week diagnostic tells you exactly where you stand, and what it costs to move one stage forward.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
                <Link
                  href="/get-started?source=readiness-index"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    color: "#F1EEE2",
                    background: "#1E4D38",
                    borderRadius: "var(--radius-btn)",
                    padding: "11px 20px",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                  className="cta-primary-btn"
                >
                  Book the diagnostic
                  <ArrowRight size={14} strokeWidth={2.2} />
                </Link>
                <a
                  href="/readiness-index-methodology.pdf"
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    color: "#4A584E",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                  className="cta-ghost-link"
                >
                  Download methodology →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .ari-row:hover td { background: rgba(30,77,56,0.04); }
        .inst-name-link:hover { color: #1E4D38 !important; text-decoration: underline !important; text-underline-offset: 3px; }
        .suggest-link:hover { text-decoration: underline; }
        .cta-primary-btn:hover { background: #173A2A !important; }
        .cta-ghost-link:hover { color: #1E4D38 !important; }
        @media (max-width: 720px) {
          .ari-table-wrap { display: none !important; }
          .ari-cards { display: flex !important; }
        }
        @media (max-width: 580px) {
          .filter-row { flex-direction: column; }
          .filter-row > * { flex: 1 1 100% !important; width: 100%; }
          .cta-inner { flex-direction: column; }
        }
      `}</style>
    </>
  );
}
