"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Users,
  Award,
  BarChart3,
  BookOpen,
  ChevronUp,
  Activity,
  Zap,
} from "lucide-react";

// ─── Static data ────────────────────────────────────────────────────────────

const DEPARTMENTS = [
  { name: "Computer Science & Engineering", score: 87, students: 342, delta: "+6.2%", colour: "#1E4D38" },
  { name: "Business & Economics",           score: 74, students: 891, delta: "+9.1%", colour: "#2E6B50" },
  { name: "Natural Sciences",               score: 71, students: 234, delta: "+4.9%", colour: "#3A7A5C" },
  { name: "Social Sciences",                score: 68, students: 412, delta: "+7.8%", colour: "#C7A14A" },
  { name: "Health Sciences",                score: 61, students: 527, delta: "+14.3%", colour: "#B5862E" },
  { name: "Humanities & Arts",              score: 52, students: 298, delta: "+11.5%", colour: "#6E7B71" },
] as const;

const LEVELS = [
  {
    code: "101",
    title: "AI Foundations",
    desc: "Prompt engineering, model evaluation, ethical frameworks",
    enrolled: 1842,
    completed: 1654,
  },
  {
    code: "201",
    title: "Applied AI",
    desc: "Workflow automation, data analysis, API integration",
    enrolled: 1204,
    completed: 987,
  },
  {
    code: "301",
    title: "Production AI",
    desc: "Multi-agent systems, model fine-tuning, deployment pipelines",
    enrolled: 612,
    completed: 389,
  },
] as const;

// Monthly fluency index — 12 months
const TREND_POINTS = [38, 44, 49, 54, 58, 62, 65, 68, 71, 74, 77, 81];

const TABS = [
  { id: "overview",    label: "Overview",    Icon: BarChart3  },
  { id: "departments", label: "Departments", Icon: Users      },
  { id: "progression", label: "Progression", Icon: BookOpen   },
] as const;

type TabId = (typeof TABS)[number]["id"];

// ─── Sparkline ────────────────────────────────────────────────────────────────

function Sparkline({ data, width = 280, height = 64 }: { data: number[]; width?: number; height?: number }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const pad = 4;

  const pts = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (width - pad * 2);
    const y = pad + (1 - (v - min) / (max - min)) * (height - pad * 2);
    return [x, y] as [number, number];
  });

  const linePath = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
  const areaPath = `${linePath} L ${pts[pts.length - 1][0]} ${height} L ${pts[0][0]} ${height} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", height, display: "block", overflow: "visible" }}>
      <defs>
        <linearGradient id="sparkg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#10b981" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0"    />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#sparkg)" />
      <path d={linePath} fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Last-point dot */}
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r={3.5} fill="#10b981" />
    </svg>
  );
}

// ─── Animated bar ─────────────────────────────────────────────────────────────

function Bar({ pct, colour, delay = 0 }: { pct: number; colour: string; delay?: number }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(pct), 120 + delay);
    return () => clearTimeout(t);
  }, [pct, delay]);

  return (
    <div style={{ height: 5, background: "rgba(255,255,255,0.06)", borderRadius: 99, overflow: "hidden" }}>
      <div
        style={{
          height: "100%",
          width: `${width}%`,
          background: colour,
          borderRadius: 99,
          transition: "width 900ms cubic-bezier(0.22,1,0.36,1)",
          boxShadow: `0 0 8px ${colour}55`,
        }}
      />
    </div>
  );
}

// ─── Score badge ──────────────────────────────────────────────────────────────

function ScoreBadge({ score }: { score: number }) {
  const colour = score >= 80 ? "#10b981" : score >= 65 ? "#34d399" : "#6b8c6e";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 22,
        borderRadius: "var(--radius-sm)",
        fontSize: 11,
        fontWeight: 700,
        color: colour,
        background: `${colour}14`,
        border: `1px solid ${colour}30`,
        flexShrink: 0,
        fontFamily: "var(--font-geist-mono), monospace",
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {score}
    </span>
  );
}

// ─── Overview tab ─────────────────────────────────────────────────────────────

function OverviewTab() {
  const metrics = [
    { Icon: Activity,   label: "Fluency Index",         value: "81 / 100",  sub: "+8.4 pts this semester",  colour: "#10b981" },
    { Icon: Users,      label: "Active Learners",        value: "2,704",     sub: "across all departments",  colour: "#6ee7b7" },
    { Icon: Award,      label: "Level 301 Completions",  value: "389",       sub: "+47 this month",          colour: "#34d399" },
    { Icon: Zap,        label: "Employer Placements",    value: "127",       sub: "verified via consortium",  colour: "#4ade80" },
  ];

  return (
    <div style={{ padding: "24px 0 4px" }}>
      {/* KPI row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 28 }} className="kpi-row-4">
        {metrics.map(({ Icon, label, value, sub, colour }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "var(--radius-card)",
              padding: "14px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
              <Icon size={13} color={colour} strokeWidth={2} />
              <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(244,245,248,0.35)" }}>
                {label}
              </span>
            </div>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#f4f5f8", margin: "0 0 3px", letterSpacing: "-0.04em", fontFamily: "var(--font-geist-mono), monospace", fontVariantNumeric: "tabular-nums" }}>{value}</p>
            <p style={{ fontSize: 11, color: colour, margin: 0, fontWeight: 500 }}>{sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Trend chart */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "var(--radius-card)",
          padding: "18px 20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(248,250,252,0.45)", margin: "0 0 2px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              AI Fluency Index — 12-Month Trend
            </p>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#10b981", margin: 0, letterSpacing: "-0.04em", fontFamily: "var(--font-geist-mono), monospace", fontVariantNumeric: "tabular-nums" }}>
              81{" "}
              <span style={{ fontSize: 12, fontWeight: 400, color: "rgba(244,245,248,0.35)", fontFamily: "var(--font-geist-sans), sans-serif" }}>/ 100</span>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "var(--radius-sm)", padding: "4px 10px" }}>
            <ChevronUp size={12} color="#10b981" strokeWidth={2.5} />
            <span style={{ fontSize: 11, fontWeight: 700, color: "#10b981", fontFamily: "var(--font-geist-mono), monospace", fontVariantNumeric: "tabular-nums" }}>+43 pts YoY</span>
          </div>
        </div>
        <Sparkline data={TREND_POINTS} height={64} />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
          {["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
            <span key={m} style={{ fontSize: 9, color: "rgba(244,245,248,0.25)", letterSpacing: "0.04em", fontFamily: "var(--font-geist-mono), monospace" }}>{m}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ─── Departments tab ──────────────────────────────────────────────────────────

function DepartmentsTab() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div style={{ padding: "24px 0 4px", display: "flex", flexDirection: "column", gap: 8 }}>
      {DEPARTMENTS.map((dept, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.42, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            background: hovered === i ? "rgba(16,185,129,0.04)" : "rgba(255,255,255,0.02)",
            border: "1px solid",
            borderColor: hovered === i ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.08)",
            borderRadius: "var(--radius-card)",
            padding: "14px 16px",
            transition: "all 180ms",
            cursor: "default",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 9 }}>
            <ScoreBadge score={dept.score} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#f8fafc", margin: 0, letterSpacing: "-0.01em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {dept.name}
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
              <span style={{ fontSize: 11, color: dept.colour, fontWeight: 600 }}>{dept.delta}</span>
              <span style={{ fontSize: 11, color: "rgba(248,250,252,0.35)" }}>{dept.students.toLocaleString()} students</span>
            </div>
          </div>
          <Bar pct={dept.score} colour={dept.colour} delay={i * 60} />
        </motion.div>
      ))}
    </div>
  );
}

// ─── Progression tab ──────────────────────────────────────────────────────────

function ProgressionTab() {
  return (
    <div style={{ padding: "24px 0 4px" }}>
      {/* Funnel */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {LEVELS.map((level, i) => {
          const rate = ((level.completed / level.enrolled) * 100).toFixed(1);
          const funnelWidth = 100 - i * 14;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "var(--radius-card)",
                  padding: "20px 20px 18px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Funnel width indicator */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: `${funnelWidth}%`,
                    background: "rgba(16,185,129,0.04)",
                    borderRight: "1px solid rgba(16,185,129,0.1)",
                    transition: "width 800ms cubic-bezier(0.22,1,0.36,1)",
                  }}
                />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 14 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <span
                          style={{
                            fontSize: 10,
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                            background: "rgba(16,185,129,0.12)",
                            border: "1px solid rgba(16,185,129,0.25)",
                            color: "#10b981",
                            padding: "2px 8px",
                            borderRadius: "var(--radius-sm)",
                            textTransform: "uppercase",
                            fontFamily: "var(--font-geist-mono), monospace",
                            fontVariantNumeric: "tabular-nums",
                          }}
                        >
                          Level {level.code}
                        </span>
                      </div>
                      <h4 style={{ fontSize: 15, fontWeight: 700, color: "#f8fafc", margin: "0 0 3px", letterSpacing: "-0.015em" }}>
                        {level.title}
                      </h4>
                      <p style={{ fontSize: 12, color: "rgba(248,250,252,0.4)", margin: 0 }}>{level.desc}</p>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <p style={{ fontSize: 20, fontWeight: 700, color: "#10b981", margin: "0 0 1px", letterSpacing: "-0.04em", fontFamily: "var(--font-geist-mono), monospace", fontVariantNumeric: "tabular-nums" }}>
                        {parseFloat(rate).toFixed(0)}%
                      </p>
                      <p style={{ fontSize: 10, color: "rgba(248,250,252,0.3)", margin: 0, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        completion
                      </p>
                    </div>
                  </div>

                  {/* Enrolment vs completion bar */}
                  <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ height: 6, background: "rgba(248,250,252,0.06)", borderRadius: 99, overflow: "hidden" }}>
                        <Bar pct={parseFloat(rate)} colour="#10b981" delay={i * 100} />
                      </div>
                    </div>
                    <span style={{ fontSize: 11, color: "rgba(244,245,248,0.35)", whiteSpace: "nowrap", flexShrink: 0, fontFamily: "var(--font-geist-mono), monospace", fontVariantNumeric: "tabular-nums" }}>
                      {level.completed.toLocaleString()} / {level.enrolled.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Arrow connector */}
              {i < LEVELS.length - 1 && (
                <div style={{ display: "flex", justifyContent: "center", padding: "4px 0" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2v10M4 9l4 4 4-4" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Cohort summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{
          marginTop: 20,
          padding: "16px 20px",
          background: "rgba(16,185,129,0.04)",
          border: "1px solid rgba(16,185,129,0.15)",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <TrendingUp size={16} color="#10b981" strokeWidth={2} style={{ flexShrink: 0 }} />
        <p style={{ fontSize: 13, color: "rgba(248,250,252,0.65)", margin: 0, lineHeight: 1.5 }}>
          <span style={{ color: "#f8fafc", fontWeight: 600 }}>63.5%</span> of Level 201 completions advance to Level 301 within one semester —{" "}
          <span style={{ color: "#10b981", fontWeight: 600 }}>18% above the national benchmark</span> for AI curriculum progression rates.
        </p>
      </motion.div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function FluencyTracker() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [mounted, setMounted] = useState(false);
  const prevTab = useRef<TabId>("overview");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTab = (id: TabId) => {
    prevTab.current = activeTab;
    setActiveTab(id);
  };

  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#ECF1EC",
        borderTop: "1px solid rgba(27,42,33,0.07)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
            <p style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.16em", textTransform: "uppercase", color: "#B5862E", margin: 0 }}>
              Sophrosyne AI Fluency Index
            </p>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                background: "rgba(30,77,56,0.07)",
                border: "1px solid rgba(30,77,56,0.18)",
                borderRadius: 20,
                padding: "3px 10px",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1E4D38", display: "inline-block" }} />
              <span style={{ fontSize: 10, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", color: "#1E4D38", letterSpacing: "0.06em", textTransform: "uppercase" }}>Live Dashboard</span>
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(26px, 3.8vw, 48px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: "#1B2A21", margin: "0 0 14px", letterSpacing: "-0.012em", maxWidth: 680 }}>
            Track AI fluency across every department — in real time.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "#4A584E", maxWidth: 560, margin: 0 }}>
            The Sophrosyne AI Fluency Index Dashboard gives administrators,
            faculty, and department leads a live view of how AI competency
            is developing across every department — from first-week enrolment
            to Level 301 completion. See who is progressing, where gaps are
            forming, and what your accreditation report will look like next
            quarter. No manual data collection required.
          </p>
        </motion.div>

        {/* Dashboard shell */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(27,42,33,0.12)",
            boxShadow: "var(--shadow-card-lg)",
          }}
        >
          {/* Chrome bar */}
          <div
            style={{
              background: "#111318",
              padding: "12px 16px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, border: "1px solid rgba(0,0,0,0.2)" }} />
              ))}
            </div>
            <div
              style={{
                flex: 1,
                background: "rgba(248,250,252,0.04)",
                border: "1px solid rgba(248,250,252,0.06)",
                borderRadius: 6,
                padding: "4px 12px",
                display: "flex",
                alignItems: "center",
                gap: 7,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", flexShrink: 0 }} />
              <span style={{ fontSize: 11, color: "rgba(244,245,248,0.35)", fontFamily: "var(--font-geist-mono), monospace" }}>
                index.sophrosynesystems.com/fluency
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", animation: "pulse 2s infinite", display: "inline-block" }} />
              <span style={{ fontSize: 10, fontWeight: 600, color: "rgba(248,250,252,0.38)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Live
              </span>
            </div>
          </div>

          {/* Dashboard body */}
          <div style={{ background: "#0d1117", display: "grid", gridTemplateColumns: "220px 1fr" }} className="dash-layout">
            {/* Left sidebar */}
            <div style={{ borderRight: "1px solid rgba(255,255,255,0.06)", padding: "20px 0", background: "#222326" }}>
              <div style={{ padding: "0 16px 14px" }}>
                <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(248,250,252,0.25)", margin: 0 }}>
                  Analytics
                </p>
              </div>

              {TABS.map(({ id, label, Icon }) => {
                const active = activeTab === id;
                return (
                  <button
                    key={id}
                    onClick={() => handleTab(id)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 9,
                      padding: "10px 16px",
                      background: active ? "rgba(16,185,129,0.08)" : "transparent",
                      borderLeft: `2px solid ${active ? "#10b981" : "transparent"}`,
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 180ms",
                    }}
                  >
                    <Icon size={14} color={active ? "#10b981" : "rgba(248,250,252,0.3)"} strokeWidth={active ? 2 : 1.6} />
                    <span style={{ fontSize: 13, fontWeight: active ? 600 : 400, color: active ? "rgba(248,250,252,0.88)" : "rgba(248,250,252,0.38)", transition: "color 180ms" }}>
                      {label}
                    </span>
                  </button>
                );
              })}

              <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "16px 0" }} />
              <div style={{ padding: "0 16px" }}>
                <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(248,250,252,0.25)", margin: "0 0 10px" }}>
                  Institution
                </p>
                {["Western University", "Cohort 2025–26", "6 Departments"].map((s) => (
                  <p key={s} style={{ fontSize: 12, color: "rgba(248,250,252,0.32)", margin: "0 0 5px", lineHeight: 1.5 }}>{s}</p>
                ))}
              </div>

              <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "16px 0" }} />
              <div style={{ padding: "0 16px" }}>
                <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(248,250,252,0.25)", margin: "0 0 10px" }}>
                  Data Integrations
                </p>
                {[
                  { label: "Canvas LMS",   status: "connected" },
                  { label: "Banner SIS",   status: "connected" },
                  { label: "Slate CRM",    status: "syncing"   },
                ].map(({ label, status }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 7 }}>
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: status === "connected" ? "#10b981" : "#febc2e",
                        flexShrink: 0,
                        animation: status === "syncing" ? "pulse 1.5s infinite" : "none",
                      }}
                    />
                    <span style={{ fontSize: 11, color: "rgba(248,250,252,0.35)" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main content area */}
            <div style={{ padding: "0 24px 24px", minHeight: 480, overflowY: "auto", maxHeight: 560 }}>
              {/* Tab bar */}
              <div
                style={{
                  display: "flex",
                  gap: 2,
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(248,250,252,0.05)",
                  marginBottom: 4,
                  position: "sticky",
                  top: 0,
                  background: "#0a1020",
                  zIndex: 10,
                }}
              >
                {TABS.map(({ id, label, Icon }) => {
                  const active = activeTab === id;
                  return (
                    <button
                      key={id}
                      onClick={() => handleTab(id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "6px 12px",
                        borderRadius: 7,
                        border: "none",
                        cursor: "pointer",
                        background: active ? "rgba(16,185,129,0.1)" : "transparent",
                        color: active ? "#10b981" : "rgba(248,250,252,0.4)",
                        fontSize: 12,
                        fontWeight: active ? 600 : 400,
                        fontFamily: "inherit",
                        transition: "all 180ms",
                      }}
                    >
                      <Icon size={12} strokeWidth={active ? 2 : 1.6} />
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* Tab content */}
              {mounted && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                  >
                    {activeTab === "overview"    && <OverviewTab />}
                    {activeTab === "departments" && <DepartmentsTab />}
                    {activeTab === "progression" && <ProgressionTab />}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textAlign: "center", marginTop: 40 }}
        >
          <p style={{ fontSize: 14, color: "#5A6B60", margin: "0 0 16px" }}>
            Your institution's Fluency Index Dashboard is provisioned as part of the{" "}
            <span style={{ color: "#1B2A21", fontWeight: 600 }}>Foundry & Platform Launch</span> engagement.
          </p>
          <a
            href="/pricing"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "11px 22px",
              borderRadius: "var(--radius-btn)",
              background: "#1E4D38",
              color: "#F4F0E6",
              fontSize: 13,
              fontWeight: 700,
              fontFamily: "var(--font-libre-franklin), sans-serif",
              textDecoration: "none",
              transition: "opacity 200ms",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.82")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >
            <BarChart3 size={15} strokeWidth={2} />
            Request a Live Demo
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .dash-layout { grid-template-columns: 1fr !important; }
          .dash-layout > *:first-child { display: none; }
          .kpi-row-4 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>
    </section>
  );
}
