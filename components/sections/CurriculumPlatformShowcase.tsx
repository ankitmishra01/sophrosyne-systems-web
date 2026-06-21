"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, CheckCircle2, BookOpen, ClipboardCheck, LayoutDashboard, FileDown } from "lucide-react";

const PLATFORM_FEATURES = [
  {
    icon: BookOpen,
    title: "Student Portfolio",
    body: "Every AI artefact a student submits — timestamped, faculty-reviewed, and visible to employers by permission. The portfolio travels with them after graduation.",
  },
  {
    icon: ClipboardCheck,
    title: "Faculty Review",
    body: "Structured competency assessments tied to the CEFR rubric. Faculty mark once — the platform generates the accreditor evidence trail automatically.",
  },
  {
    icon: LayoutDashboard,
    title: "Cohort Dashboard",
    body: "Live view of every student's progression through Levels 101, 201, and 301. Department-level breakdowns. No manual data collection.",
  },
  {
    icon: FileDown,
    title: "Accreditor Export",
    body: "One-click export of cohort evidence for HLC, SACSCOC, and MSCHE audits. Board-ready PDF — built from live platform data, not spreadsheets.",
  },
];

const STUDENT_SUBMISSIONS = [
  { project: "Automated Research Digest", level: "A2", status: "Reviewed", score: "B1 Ready" },
  { project: "Student Feedback Router", level: "B1", status: "Pending", score: "—" },
  { project: "Department Copilot v1", level: "B2", status: "Reviewed", score: "B2 Pass" },
];

export default function CurriculumPlatformShowcase() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#0F1A14",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(159,191,173,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(159,191,173,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />
      {/* Gold glow top-right */}
      <div
        style={{
          position: "absolute",
          top: 0, right: 0,
          width: 600, height: 400,
          background: "radial-gradient(ellipse at top right, rgba(199,161,74,0.09) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          {/* Live badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(63,185,80,0.12)",
                border: "1px solid rgba(63,185,80,0.30)",
                borderRadius: 20,
                padding: "5px 14px",
              }}
            >
              <span
                style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "#3fb950",
                  boxShadow: "0 0 7px rgba(63,185,80,0.75)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 10, fontWeight: 700,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "#3fb950",
                }}
              >
                Working Demo · Live Now
              </span>
            </div>
            <a
              href="https://sophrosyne-platform.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                fontSize: 12,
                fontFamily: "var(--font-libre-franklin), sans-serif",
                color: "rgba(199,161,74,0.75)",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 180ms",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C7A14A")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(199,161,74,0.75)")}
            >
              sophrosyne-platform.vercel.app
              <ExternalLink size={11} strokeWidth={2} />
            </a>
          </div>

          <h2
            style={{
              fontSize: "clamp(24px, 3.2vw, 44px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#F1EEE2",
              margin: "0 0 16px",
              letterSpacing: "-0.015em",
              lineHeight: 1.08,
              maxWidth: 640,
            }}
          >
            The platform your students{" "}
            <em style={{ fontStyle: "italic", color: "#E9C77B" }}>log into on day one.</em>
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.72,
              color: "rgba(201,217,206,0.80)",
              margin: 0,
              maxWidth: 560,
            }}
          >
            Every stage of the AI Fluency Programme runs through the platform —
            student submissions, faculty reviews, cohort dashboards, and accreditor
            exports. It is already built. You can log in today.
          </p>
        </motion.div>

        {/* Main split: features left, mock right */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}
          className="platform-showcase-grid"
        >
          {/* Left — feature tiles */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {PLATFORM_FEATURES.map((f, i) => {
                const IconComp = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      display: "flex",
                      gap: 16,
                      alignItems: "flex-start",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(159,191,173,0.12)",
                      borderRadius: "var(--radius-card)",
                      padding: "20px 20px",
                      transition: "border-color 200ms",
                    }}
                  >
                    <div
                      style={{
                        width: 38, height: 38, borderRadius: 9, flexShrink: 0,
                        background: "rgba(159,191,173,0.10)",
                        border: "1px solid rgba(159,191,173,0.20)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        marginTop: 1,
                      }}
                    >
                      <IconComp size={17} color="#9FBFAD" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: 14, fontWeight: 600,
                          fontFamily: "var(--font-libre-franklin), sans-serif",
                          color: "#F1EEE2", margin: "0 0 6px",
                          letterSpacing: "-0.005em",
                        }}
                      >
                        {f.title}
                      </h3>
                      <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "rgba(201,217,206,0.70)", margin: 0 }}>
                        {f.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}
            >
              <a
                href="https://sophrosyne-platform.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#C7A14A",
                  color: "#0F1A14",
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: "0.02em",
                  padding: "13px 24px",
                  borderRadius: "var(--radius-btn)",
                  textDecoration: "none",
                  transition: "transform 150ms, box-shadow 200ms",
                  boxShadow: "0 6px 20px rgba(199,161,74,0.28)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 10px 28px rgba(199,161,74,0.38)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(199,161,74,0.28)";
                }}
              >
                Access the platform
                <ArrowRight size={13} strokeWidth={2.4} />
              </a>
              <a
                href="/get-started"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: "#9FBFAD",
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: "0.02em",
                  padding: "13px 24px",
                  borderRadius: "var(--radius-btn)",
                  textDecoration: "none",
                  border: "1px solid rgba(159,191,173,0.25)",
                  transition: "background 200ms, border-color 200ms",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(159,191,173,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(159,191,173,0.40)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(159,191,173,0.25)";
                }}
              >
                Request a walkthrough
              </a>
            </motion.div>
          </div>

          {/* Right — platform mockup */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                borderRadius: 14,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.5), 0 32px 72px rgba(0,0,0,0.50)",
              }}
            >
              {/* Browser chrome */}
              <div
                style={{
                  background: "#1c2128",
                  padding: "11px 16px",
                  display: "flex", alignItems: "center", gap: 12,
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div style={{ display: "flex", gap: 6 }}>
                  {(["#ff5f57", "#febc2e", "#28c840"] as const).map((c, i) => (
                    <div key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <div
                  style={{
                    flex: 1, background: "#0d1117", borderRadius: 6,
                    padding: "4px 12px", display: "flex", alignItems: "center", gap: 7,
                  }}
                >
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#3fb950", flexShrink: 0, boxShadow: "0 0 5px rgba(63,185,80,0.6)" }} />
                  <span style={{ fontSize: 11, color: "rgba(244,245,248,0.65)", fontFamily: "monospace" }}>
                    sophrosyne-platform.vercel.app/portfolio
                  </span>
                </div>
              </div>

              {/* App shell */}
              <div style={{ background: "#0d1117" }}>
                {/* App header */}
                <div
                  style={{
                    padding: "14px 20px",
                    background: "#161b22",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#e6edf3", margin: "0 0 2px", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                      Student Portfolio
                    </p>
                    <p style={{ fontSize: 11, color: "#8b949e", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                      Sample University · Cohort 2025–26
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex", alignItems: "center", gap: 6,
                      background: "rgba(63,185,80,0.10)",
                      border: "1px solid rgba(63,185,80,0.25)",
                      borderRadius: 6, padding: "4px 10px",
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3fb950", flexShrink: 0 }} />
                    <span style={{ fontSize: 10, fontWeight: 600, color: "#3fb950", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                      Accreditor View
                    </span>
                  </div>
                </div>

                {/* Student info row */}
                <div
                  style={{
                    padding: "16px 20px",
                    background: "rgba(30,77,56,0.06)",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    display: "flex", alignItems: "center", gap: 14,
                  }}
                >
                  <div
                    style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: "linear-gradient(135deg, #1E4D38, #2E6B50)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 14, fontWeight: 600, color: "#9FBFAD",
                      flexShrink: 0,
                    }}
                  >
                    S
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#e6edf3", margin: "0 0 2px", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                      Sample Student
                    </p>
                    <p style={{ fontSize: 11, color: "#8b949e", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                      Business & Economics · Year 2
                    </p>
                  </div>
                  <div
                    style={{
                      background: "rgba(199,161,74,0.12)",
                      border: "1px solid rgba(199,161,74,0.25)",
                      borderRadius: 6, padding: "4px 10px",
                    }}
                  >
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#C7A14A", fontFamily: "monospace" }}>
                      B1 · Threshold
                    </span>
                  </div>
                </div>

                {/* Submissions table */}
                <div style={{ padding: "4px 0" }}>
                  <div
                    style={{
                      padding: "8px 20px",
                      display: "grid", gridTemplateColumns: "1fr auto auto auto",
                      gap: 12, borderBottom: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    {["Project", "Level", "Status", "Result"].map((h) => (
                      <span key={h} style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(248,250,252,0.45)", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                        {h}
                      </span>
                    ))}
                  </div>

                  {STUDENT_SUBMISSIONS.map((row, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "12px 20px",
                        display: "grid", gridTemplateColumns: "1fr auto auto auto",
                        gap: 12, alignItems: "center",
                        borderBottom: i < STUDENT_SUBMISSIONS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                        background: i === 0 ? "rgba(30,77,56,0.04)" : "transparent",
                      }}
                    >
                      <span style={{ fontSize: 12, color: "#e6edf3", fontFamily: "var(--font-libre-franklin), sans-serif", lineHeight: 1.3 }}>
                        {row.project}
                      </span>
                      <span style={{ fontSize: 11, color: "#8b949e", fontFamily: "monospace", textAlign: "center" }}>
                        {row.level}
                      </span>
                      <span
                        style={{
                          fontSize: 9, fontWeight: 700,
                          color: row.status === "Reviewed" ? "#9FBFAD" : "#febc2e",
                          background: row.status === "Reviewed" ? "rgba(159,191,173,0.10)" : "rgba(254,188,46,0.10)",
                          border: `1px solid ${row.status === "Reviewed" ? "rgba(159,191,173,0.22)" : "rgba(254,188,46,0.22)"}`,
                          borderRadius: 4, padding: "3px 7px",
                          letterSpacing: "0.08em", textTransform: "uppercase",
                          fontFamily: "var(--font-libre-franklin), sans-serif",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.status}
                      </span>
                      <span style={{ fontSize: 11, color: row.score !== "—" ? "#9FBFAD" : "rgba(248,250,252,0.38)", fontFamily: "monospace", textAlign: "right" }}>
                        {row.score}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer strip */}
                <div
                  style={{
                    padding: "12px 20px",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    background: "#161b22",
                    display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap",
                  }}
                >
                  <CheckCircle2 size={12} color="#3fb950" strokeWidth={2.2} />
                  <span style={{ fontSize: 11, color: "rgba(248,250,252,0.65)", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                    2 of 3 artefacts verified · Accreditor export ready
                  </span>
                  <span
                    style={{
                      marginLeft: "auto", fontSize: 11, fontWeight: 600,
                      color: "#C7A14A", fontFamily: "var(--font-libre-franklin), sans-serif",
                      cursor: "pointer", display: "flex", alignItems: "center", gap: 4,
                    }}
                  >
                    Export PDF <FileDown size={11} strokeWidth={2} />
                  </span>
                </div>
              </div>
            </div>

            {/* Caption */}
            <p
              style={{
                marginTop: 14, fontSize: 12,
                color: "rgba(159,191,173,0.45)",
                fontFamily: "var(--font-libre-franklin), sans-serif",
                fontStyle: "italic", textAlign: "center",
              }}
            >
              Illustrative — platform is live at sophrosyne-platform.vercel.app
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .platform-showcase-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
