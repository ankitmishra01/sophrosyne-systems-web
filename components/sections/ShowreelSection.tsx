"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, Shield, BarChart2, Network } from "lucide-react";

const FEATURE_HIGHLIGHTS = [
  { icon: LayoutGrid, title: "Student-Level Tracking", body: "Progression from baseline to portfolio-ready, visible by cohort and department" },
  { icon: Shield, title: "FERPA-Compliant by Design", body: "Data never leaves your institution's infrastructure perimeter" },
  { icon: BarChart2, title: "Accreditor-Ready Reports", body: "Live dashboards and auto-exported evidence for HLC, SACSCOC, and NECHE" },
  { icon: Network, title: "GitHub Portfolio Integration", body: "Real commit history and deployed projects linked to each student's record" },
];

// ─── Interactive views ───────────────────────────────────────────────────────

type ViewId = "canvas" | "agents" | "connectors" | "deploy" | "audit";

const NAV: { id: ViewId; label: string; icon: string }[] = [
  { id: "canvas", label: "Fluency Index", icon: "⬡" },
  { id: "agents", label: "Programme Agents", icon: "⊞" },
  { id: "connectors", label: "Data Connectors", icon: "⌗" },
  { id: "deploy", label: "Data Pipeline", icon: "⬆" },
  { id: "audit", label: "Audit Log", icon: "☰" },
];

const AGENTS = [
  { name: "AI Fluency Assessor", desc: "Measures student competency progression by level and department", status: "Live" },
  { name: "Faculty Certification Tracker", desc: "Monitors faculty readiness and certification status", status: "Live" },
  { name: "Portfolio Builder", desc: "Tracks GitHub portfolio completions per student cohort", status: "Live" },
  { name: "Outcome Reporter", desc: "Auto-assembles employment outcome evidence for accreditors", status: "Live" },
  { name: "OPEX Savings Modeler", desc: "Models cost savings across 9 operational domains in real time", status: "Beta" },
  { name: "Demo Day Coordinator", desc: "Manages Foundry project submissions and employer recruitment pipeline", status: "Beta" },
];

const CONNECTORS = [
  { name: "Canvas LMS", detail: "Courses · grades · activity", status: "Connected" },
  { name: "Banner SIS", detail: "Records · enrollment · financial aid", status: "Connected" },
  { name: "Colleague ERP", detail: "Finance · HR · procurement", status: "Connected" },
  { name: "Slate CRM", detail: "Admissions · recruiting", status: "Syncing" },
];

const DEPLOY_STAGES = [
  { env: "Data Sync", status: "Passed", meta: "Canvas · Banner · GitHub · 0 errors" },
  { env: "Index Update", status: "Live", meta: "v4.2.1 · 284 students indexed" },
  { env: "Reporting", status: "Live", meta: "HLC-ready · last export 6m ago" },
];

const AUDIT_ROWS = [
  { time: "14:32", user: "system", action: "AI Fluency Index updated — Cohort A: 62 students at Level 201" },
  { time: "14:18", user: "r.sharma", action: "Exported HLC outcome evidence · 3 programs (FERPA-scoped)" },
  { time: "13:55", user: "system", action: "GitHub portfolio sync complete — 47 new commits logged" },
  { time: "13:40", user: "l.nazari", action: "Faculty certification updated — 8 instructors at L3 status" },
  { time: "13:02", user: "system", action: "Nightly accreditation evidence export → compliance vault" },
];

const panelLabelStyle: React.CSSProperties = {
  fontSize: 9,
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "rgba(248,250,252,0.62)",
  margin: "0 0 16px",
};

function StatusChip({ status }: { status: string }) {
  const warm = status === "Syncing" || status === "Beta";
  const color = warm ? "#C7A14A" : "#9FBFAD";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: warm ? "#C7A14A" : "#9FBFAD",
        fontFamily: "var(--font-libre-franklin), sans-serif",
        flexShrink: 0,
      }}
    >
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: color, flexShrink: 0 }} />
      {status}
    </span>
  );
}

function ViewPanel({ view }: { view: ViewId }) {
  if (view === "canvas") {
    return (
      <div style={{ position: "relative", overflow: "hidden", minHeight: 480 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 480 }}
        >
          <source
            src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054f4d8237c30eabf31945f896400ec&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(10,15,26,0.55) 0%, rgba(10,15,26,0.2) 50%, rgba(10,15,26,0.45) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>
    );
  }

  if (view === "agents") {
    return (
      <div style={{ padding: "26px 28px", minHeight: 480 }}>
        <p style={panelLabelStyle}>Programme Agents · 6 active</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }} className="studio-cards">
          {AGENTS.map((a) => (
            <div
              key={a.name}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 10,
                padding: "16px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(248,250,252,0.88)", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                  {a.name}
                </span>
                <StatusChip status={a.status} />
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.55, color: "rgba(248,250,252,0.68)", margin: 0 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (view === "connectors") {
    return (
      <div style={{ padding: "26px 28px", minHeight: 480 }}>
        <p style={panelLabelStyle}>Data Connectors · institutional perimeter</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {CONNECTORS.map((c) => (
            <div
              key={c.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 10,
                padding: "16px 18px",
              }}
            >
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(248,250,252,0.88)", margin: "0 0 3px", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                  {c.name}
                </p>
                <p style={{ fontSize: 12, color: "rgba(248,250,252,0.68)", margin: 0 }}>{c.detail}</p>
              </div>
              <StatusChip status={c.status} />
            </div>
          ))}
        </div>
        <p style={{ fontSize: 11, color: "rgba(248,250,252,0.62)", margin: "18px 0 0", display: "flex", alignItems: "center", gap: 7 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#9FBFAD" }} />
          All connectors operate inside your cloud perimeter — no data leaves the institution.
        </p>
      </div>
    );
  }

  if (view === "deploy") {
    return (
      <div style={{ padding: "26px 28px", minHeight: 480 }}>
        <p style={panelLabelStyle}>Data Pipeline · fluency-index</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
          {DEPLOY_STAGES.map((d) => (
            <div
              key={d.env}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 10,
                padding: "16px 18px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 13, color: "#9FBFAD" }}>✓</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(248,250,252,0.88)", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                  {d.env}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 11, color: "rgba(248,250,252,0.68)", fontFamily: "monospace" }}>{d.meta}</span>
                <StatusChip status={d.status} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 11, color: "rgba(248,250,252,0.68)", letterSpacing: "0.04em", textTransform: "uppercase" }}>Rollout</span>
          <span style={{ fontSize: 11, color: "#9FBFAD", fontWeight: 600 }}>100%</span>
        </div>
        <div style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,0.07)", overflow: "hidden" }}>
          <div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, #1E4D38, #9FBFAD)", borderRadius: 3 }} />
        </div>
      </div>
    );
  }

  // audit
  return (
    <div style={{ padding: "26px 28px", minHeight: 480 }}>
      <p style={panelLabelStyle}>Audit Log · every action recorded</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {AUDIT_ROWS.map((r, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 14,
              padding: "14px 0",
              borderBottom: i < AUDIT_ROWS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}
          >
            <span style={{ fontSize: 11, color: "rgba(248,250,252,0.65)", fontFamily: "monospace", flexShrink: 0, marginTop: 1 }}>{r.time}</span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#C7A14A",
                fontFamily: "monospace",
                flexShrink: 0,
                marginTop: 1,
                minWidth: 64,
              }}
            >
              {r.user}
            </span>
            <span style={{ fontSize: 12.5, color: "rgba(248,250,252,0.62)", lineHeight: 1.5 }}>{r.action}</span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 11, color: "rgba(248,250,252,0.62)", margin: "18px 0 0", display: "flex", alignItems: "center", gap: 7 }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C7A14A" }} />
        Immutable log — exportable for FERPA, HLC, and SACSCOC review.
      </p>
    </div>
  );
}

const featureContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const featureItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function ShowreelSection() {
  const [view, setView] = useState<ViewId>("agents");

  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#21271F",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              fontFamily: "var(--font-libre-franklin), sans-serif",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#B5862E",
              margin: "0 0 12px",
            }}
          >
            AI Fluency Tracker · In Development
          </p>
          <h2
            style={{
              fontSize: "clamp(26px, 3.2vw, 44px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#F1EEE2",
              letterSpacing: "-0.012em",
              margin: 0,
            }}
          >
            Real-time visibility into your institution&apos;s AI competency
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "rgba(241,238,226,0.78)",
              margin: "14px auto 0",
              maxWidth: 520,
            }}
          >
            The AI Fluency Tracker gives faculty, administration, and accreditors
            a live view of student progression — from baseline to portfolio-ready.
            Available to Founding Cohort institutions.{" "}
            <span style={{ color: "#B5862E", fontWeight: 600 }}>
              Currently in development.
            </span>
          </p>
        </motion.div>

        {/* Browser mockup — interactive product UI (stays dark) */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(27,42,33,0.12)",
            boxShadow: "var(--shadow-card-lg)",
          }}
        >
          {/* Window chrome */}
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
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57", border: "1px solid rgba(0,0,0,0.2)" }} />
              <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e", border: "1px solid rgba(0,0,0,0.2)" }} />
              <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840", border: "1px solid rgba(0,0,0,0.2)" }} />
            </div>

            <div
              style={{
                flex: 1,
                background: "rgba(248,250,252,0.04)",
                border: "1px solid rgba(248,250,252,0.07)",
                borderRadius: 6,
                padding: "5px 12px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#C7A14A", flexShrink: 0 }} />
              <span style={{ fontSize: 11, color: "rgba(244,245,248,0.68)", fontFamily: "monospace" }}>
                tracker.sophrosynesystems.com · Secure
              </span>
            </div>

            <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(248,250,252,0.68)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Sophrosyne Tracker
            </span>
          </div>

          {/* Mobile tab row (sidebar is hidden ≤700px) */}
          <div className="studio-mobile-tabs" style={{ display: "none" }}>
            {NAV.map((item) => {
              const active = view === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setView(item.id)}
                  style={{
                    flexShrink: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "10px 14px",
                    background: active ? "rgba(199,161,74,0.12)" : "transparent",
                    border: "none",
                    borderBottom: active ? "2px solid #C7A14A" : "2px solid transparent",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ fontSize: 12, color: active ? "#C7A14A" : "rgba(248,250,252,0.68)" }}>{item.icon}</span>
                  <span style={{ fontSize: 12, fontWeight: active ? 600 : 400, color: active ? "rgba(248,250,252,0.88)" : "rgba(248,250,252,0.72)" }}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sidebar + main panel */}
          <div
            style={{
              background: "#0d1117",
              display: "grid",
              gridTemplateColumns: "200px 1fr",
              minHeight: 480,
            }}
            className="studio-layout"
          >
            {/* Left sidebar */}
            <div className="studio-sidebar" style={{ borderRight: "1px solid rgba(255,255,255,0.06)", padding: "16px 0", background: "#222326" }}>
              <div style={{ padding: "0 14px 12px" }}>
                <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(248,250,252,0.55)", margin: 0 }}>
                  Workspace
                </p>
              </div>
              {NAV.map((item) => {
                const active = view === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setView(item.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "9px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      background: active ? "rgba(199,161,74,0.10)" : "transparent",
                      borderLeft: active ? "2px solid #C7A14A" : "2px solid transparent",
                      borderTop: "none",
                      borderRight: "none",
                      borderBottom: "none",
                      cursor: "pointer",
                      transition: "background 160ms",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      if (!active) e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <span style={{ fontSize: 12, color: active ? "#C7A14A" : "rgba(248,250,252,0.55)" }}>{item.icon}</span>
                    <span style={{ fontSize: 12, color: active ? "rgba(248,250,252,0.85)" : "rgba(248,250,252,0.62)", fontWeight: active ? 600 : 400 }}>
                      {item.label}
                    </span>
                  </button>
                );
              })}

              <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "16px 0" }} />
              <div style={{ padding: "0 14px" }}>
                <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(248,250,252,0.55)", margin: "0 0 8px" }}>
                  Integrations
                </p>
                {["Canvas LMS", "Banner SIS", "Slate CRM"].map((s) => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 0" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#9FBFAD", flexShrink: 0 }} />
                    <span style={{ fontSize: 11, color: "rgba(248,250,252,0.62)" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main panel — swaps with the active view */}
            <div style={{ position: "relative", overflow: "hidden" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={view}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ViewPanel view={view} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Feature-highlight strip */}
        <motion.div
          variants={featureContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            marginTop: 24,
            border: "1px solid rgba(241,238,226,0.12)",
            borderRadius: "var(--radius-card)",
            overflow: "hidden",
            background: "#FFFFFF",
            boxShadow: "var(--shadow-card)",
          }}
          className="feature-strip"
        >
          {FEATURE_HIGHLIGHTS.map((item, i) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={featureItem}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 26 }}
                style={{
                  padding: "20px 24px",
                  borderRight: i < FEATURE_HIGHLIGHTS.length - 1 ? "1px solid rgba(27,42,33,0.08)" : "none",
                }}
              >
                <div style={{ marginBottom: 10 }}>
                  <IconComp size={18} color="#1E4D38" strokeWidth={1.8} />
                </div>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#1B2A21", margin: "0 0 6px", letterSpacing: "-0.01em" }}>
                  {item.title}
                </p>
                <p style={{ fontSize: 12, lineHeight: 1.55, color: "#5A6B60", margin: 0 }}>
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .studio-layout { grid-template-columns: 1fr !important; }
          .studio-sidebar { display: none !important; }
          .studio-mobile-tabs {
            display: flex !important;
            overflow-x: auto;
            background: #1a1c20;
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
          .studio-cards { grid-template-columns: 1fr !important; }
          .feature-strip { grid-template-columns: repeat(2, 1fr) !important; }
          .feature-strip > *:nth-child(odd) { border-right: 1px solid rgba(27,42,33,0.08) !important; }
          .feature-strip > *:nth-child(1),
          .feature-strip > *:nth-child(2) { border-bottom: 1px solid rgba(27,42,33,0.08) !important; }

        }
      `}</style>
    </section>
  );
}
