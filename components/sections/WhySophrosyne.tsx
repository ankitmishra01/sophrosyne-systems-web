"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, TrendingDown, Rocket, ArrowRight } from "lucide-react";
import { WHY_ITEMS } from "@/lib/data";

const ICONS = { GraduationCap, TrendingDown, Rocket } as const;

// Pillar order + per-pillar links (maps onto WHY_ITEMS by index)
const PILLARS = [
  { idx: 0, numeral: "I", tag: "Operational Efficiency", href: "/solutions/opex" },
  { idx: 1, numeral: "II", tag: "AI Fluency Programme", href: "/solutions/curriculum" },
  { idx: 2, numeral: "III", tag: "AI Foundry", href: "/solutions/foundry" },
] as const;

const BENEFIT_LINES: Record<number, string> = {
  0: "The dollars that fund Pillars II and III — self-funding, on paper, before the board votes",
  1: "Students graduate with a documented portfolio employers can verify — not a certificate",
  2: "Incubators get builders, not pitch decks — real products deployed to public GitHub",
};

const LEVEL_COLORS: Record<string, { fg: string; bg: string; border: string }> = {
  A1: { fg: "rgba(159,191,173,0.50)", bg: "rgba(159,191,173,0.06)", border: "rgba(159,191,173,0.14)" },
  A2: { fg: "#9FBFAD",               bg: "rgba(159,191,173,0.10)", border: "rgba(159,191,173,0.22)" },
  B1: { fg: "#C7A14A",               bg: "rgba(199,161,74,0.10)",  border: "rgba(199,161,74,0.22)"  },
  B2: { fg: "#7FBF9A",               bg: "rgba(127,191,154,0.10)", border: "rgba(127,191,154,0.24)" },
};

const STUDENTS = [
  { initials: "SM", name: "S. Mensah",  level: "B2", pct: 88, status: "Portfolio submitted" },
  { initials: "AK", name: "A. Kim",     level: "B1", pct: 65, status: "Module 4 in progress" },
  { initials: "PL", name: "P. Luca",    level: "A2", pct: 42, status: "Assessment due" },
  { initials: "TN", name: "T. Nwosu",   level: "B2", pct: 91, status: "Certified ✓" },
  { initials: "RO", name: "R. Osei",    level: "A1", pct: 22, status: "Module 2 started" },
];

const MODULES = [
  { name: "Foundations of AI",    completion: 94, enrolled: 47 },
  { name: "Prompt Engineering",   completion: 78, enrolled: 44 },
  { name: "AI in Research",       completion: 61, enrolled: 38 },
  { name: "Ethics & Governance",  completion: 45, enrolled: 29 },
];

const OUTCOMES = [
  { label: "Students at B1+",    value: "74%", delta: "+18% vs intake" },
  { label: "GitHub portfolios",  value: "31",  delta: "of 47 active" },
  { label: "Employer interviews",value: "12",  delta: "this semester" },
];

type DashTab = "cohort" | "modules" | "outcomes";

function CohortDashboard() {
  const [tab, setTab] = useState<DashTab>("cohort");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const TAB_LABELS: Record<DashTab, string> = { cohort: "Cohort", modules: "Modules", outcomes: "Outcomes" };

  return (
    <div
      ref={ref}
      style={{
        background: "#141F17",
        border: "1px solid rgba(199,161,74,0.18)",
        borderRadius: 16,
        overflow: "hidden",
        fontFamily: "var(--font-libre-franklin), sans-serif",
      }}
    >
      {/* Title bar */}
      <div style={{ padding: "13px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#0d1510", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(241,238,226,0.72)" }}>
          Cohort Dashboard · Fall 2026
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, fontWeight: 600, color: "#9FBFAD", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#9FBFAD", boxShadow: "0 0 6px rgba(159,191,173,0.55)" }} />
          Live
        </span>
      </div>

      {/* Stat pills */}
      <div style={{ display: "flex", gap: 6, padding: "12px 20px 10px" }}>
        {[
          { label: "Students", value: "47" },
          { label: "Avg Level", value: "B1+" },
          { label: "Progress", value: "+12% ↑" },
        ].map((s) => (
          <div key={s.label} style={{ flex: 1, background: "rgba(255,255,255,0.04)", borderRadius: 7, padding: "7px 8px", textAlign: "center" }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#F1EEE2", fontFamily: "var(--font-newsreader), serif", letterSpacing: "-0.01em" }}>{s.value}</div>
            <div style={{ fontSize: 8, color: "rgba(241,238,226,0.62)", letterSpacing: "0.07em", textTransform: "uppercase", marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tab bar */}
      <div style={{ display: "flex", gap: 4, padding: "2px 20px 10px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        {(["cohort", "modules", "outcomes"] as DashTab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              background: tab === t ? "rgba(30,77,56,0.35)" : "transparent",
              border: tab === t ? "1px solid rgba(30,77,56,0.55)" : "1px solid transparent",
              borderRadius: 6,
              padding: "4px 10px",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.05em",
              color: tab === t ? "#9FBFAD" : "rgba(241,238,226,0.62)",
              cursor: "pointer",
              transition: "all 180ms",
            }}
          >
            {TAB_LABELS[t]}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        {tab === "cohort" && (
          <motion.div
            key="cohort"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.16 }}
            style={{ padding: "8px 20px 16px" }}
          >
            {STUDENTS.map((s, i) => {
              const lc = LEVEL_COLORS[s.level];
              return (
                <div
                  key={s.initials}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 0",
                    borderBottom: i < STUDENTS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  }}
                >
                  {/* Avatar */}
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(30,77,56,0.35)", border: "1px solid rgba(30,77,56,0.55)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 700, color: "#9FBFAD", flexShrink: 0 }}>
                    {s.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                      <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(241,238,226,0.80)" }}>{s.name}</span>
                      <span style={{ fontSize: 9, fontWeight: 700, color: lc.fg, background: lc.bg, border: `1px solid ${lc.border}`, borderRadius: 3, padding: "1px 5px", letterSpacing: "0.04em" }}>{s.level}</span>
                    </div>
                    <div style={{ height: 3, borderRadius: 2, background: "rgba(255,255,255,0.06)", overflow: "hidden", marginBottom: 3 }}>
                      <div style={{ height: "100%", width: inView ? `${s.pct}%` : "0%", background: lc.fg, borderRadius: 2, transition: `width 1.0s ${i * 0.1}s cubic-bezier(0.34,1.56,0.64,1)` }} />
                    </div>
                    <div style={{ fontSize: 9, color: "rgba(159,191,173,0.75)" }}>{s.status}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {tab === "modules" && (
          <motion.div
            key="modules"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.16 }}
            style={{ padding: "14px 20px 18px", display: "flex", flexDirection: "column", gap: 14 }}
          >
            {MODULES.map((m, i) => (
              <div key={m.name}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <span style={{ fontSize: 11, color: "rgba(241,238,226,0.75)" }}>{m.name}</span>
                  <span style={{ fontSize: 11, color: "#9FBFAD", fontWeight: 600 }}>{inView ? m.completion : 0}%</span>
                </div>
                <div style={{ height: 4, borderRadius: 2, background: "rgba(255,255,255,0.06)", overflow: "hidden", marginBottom: 4 }}>
                  <div style={{ height: "100%", width: inView ? `${m.completion}%` : "0%", background: "linear-gradient(90deg, #1E4D38, #9FBFAD)", borderRadius: 2, transition: `width 1.0s ${i * 0.12}s cubic-bezier(0.34,1.56,0.64,1)` }} />
                </div>
                <div style={{ fontSize: 9, color: "rgba(159,191,173,0.75)" }}>{m.enrolled} students enrolled</div>
              </div>
            ))}
          </motion.div>
        )}

        {tab === "outcomes" && (
          <motion.div
            key="outcomes"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.16 }}
            style={{ padding: "12px 20px 18px", display: "flex", flexDirection: "column", gap: 8 }}
          >
            {OUTCOMES.map((o) => (
              <div key={o.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 9, padding: "11px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 9, color: "rgba(241,238,226,0.65)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>{o.label}</div>
                  <div style={{ fontSize: 20, fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: "#F1EEE2", letterSpacing: "-0.01em" }}>{o.value}</div>
                </div>
                <div style={{ fontSize: 9, color: "#9FBFAD", background: "rgba(30,77,56,0.25)", border: "1px solid rgba(30,77,56,0.40)", borderRadius: 4, padding: "3px 8px", letterSpacing: "0.04em" }}>{o.delta}</div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function WhySophrosyne() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#F4F0E6",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Header — two column */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 64 }}
          className="why-header-grid"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                fontFamily: "var(--font-libre-franklin), sans-serif",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#B5862E",
                margin: "0 0 14px",
              }}
            >
              The Sophrosyne Model
            </p>
            <h2
              style={{
                fontSize: "clamp(26px, 3.2vw, 44px)",
                fontWeight: 500,
                fontFamily: "var(--font-newsreader), serif",
                color: "#1B2A21",
                margin: "0 0 16px",
                letterSpacing: "-0.012em",
                lineHeight: 1.1,
              }}
            >
              Three pillars. One complete campus transformation.
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.72,
                color: "#4A584E",
                margin: 0,
              }}
            >
              Three pillars delivered by expert teams — not handed off as a self-serve toolkit. Each pillar works independently and compounds together. Pillar I identifies the savings that fund Pillars II and III. The result: AI-fluent graduates, a leaner operation, and an innovation culture — delivered within one academic year. Expert teams, not platforms. The institution keeps 100% of all IP.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <CohortDashboard />
          </motion.div>
        </div>

        {/* Pillar cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="pillar-grid"
        >
          {PILLARS.map((p, pos) => {
            const item = WHY_ITEMS[p.idx];
            const IconComp = ICONS[item.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={p.tag}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: pos * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={p.href}
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    textDecoration: "none",
                    background: "#FFFFFF",
                    border: "1px solid rgba(27,42,33,0.10)",
                    borderRadius: "var(--radius-card)",
                    padding: "32px 28px 26px",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-card)",
                    transition:
                      "transform 220ms cubic-bezier(0.22,1,0.36,1), box-shadow 220ms, border-color 220ms",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "var(--shadow-card-lg)";
                    el.style.borderColor = "rgba(30,77,56,0.28)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "none";
                    el.style.boxShadow = "var(--shadow-card)";
                    el.style.borderColor = "rgba(27,42,33,0.10)";
                  }}
                >
                  {/* Top accent rule */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background:
                        "linear-gradient(90deg, #1E4D38 0%, #C7A14A 100%)",
                    }}
                  />

                  {/* Faint serif numeral */}
                  <span
                    style={{
                      position: "absolute",
                      top: 8,
                      right: 18,
                      fontSize: 140,
                      lineHeight: 1,
                      fontFamily: "var(--font-newsreader), serif",
                      fontStyle: "italic",
                      color: "rgba(199,161,74,0.10)",
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  >
                    {p.numeral}
                  </span>

                  {/* Icon chip */}
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: "var(--radius-card)",
                      background: "rgba(30,77,56,0.07)",
                      border: "1px solid rgba(30,77,56,0.16)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 22,
                    }}
                  >
                    {IconComp && (
                      <IconComp size={22} color="#1E4D38" strokeWidth={1.7} />
                    )}
                  </div>

                  {/* Pillar tag */}
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#B5862E",
                      margin: "0 0 8px",
                    }}
                  >
                    Pillar {p.numeral} · {p.tag}
                  </p>

                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                      fontFamily: "var(--font-newsreader), serif",
                      color: "#1B2A21",
                      margin: "0 0 8px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 13.5,
                      fontWeight: 600,
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                      color: "#1E4D38",
                      margin: "0 0 14px",
                      lineHeight: 1.45,
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {BENEFIT_LINES[p.idx]}
                  </p>

                  <p
                    style={{
                      fontSize: 14.5,
                      lineHeight: 1.68,
                      color: "#4A584E",
                      margin: "0 0 24px",
                    }}
                  >
                    {item.body}
                  </p>

                  {/* Explore link */}
                  <span
                    style={{
                      marginTop: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 600,
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                      color: "#1E4D38",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Explore
                    <ArrowRight size={14} strokeWidth={2.2} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-header-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .pillar-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
