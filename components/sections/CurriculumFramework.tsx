"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type LevelKey = "basic" | "independent" | "proficient";

const LEVELS: {
  key: LevelKey;
  band: string;
  label: string;
  badgeColor: string;
  badgeBg: string;
  badgeBorder: string;
  stages: {
    code: string;
    name: string;
    focus: string;
    body: string;
    tools: string[];
    artifact: string;
  }[];
}[] = [
  {
    key: "basic",
    band: "A1–A2",
    label: "Basic User",
    badgeColor: "#1E4D38",
    badgeBg: "rgba(30,77,56,0.10)",
    badgeBorder: "rgba(30,77,56,0.22)",
    stages: [
      {
        code: "A1",
        name: "Breakthrough: Chat Interface Basics",
        focus: "Personal Productivity & Contextual Knowledge",
        body: "Using AI chat tools for one-off academic tasks: drafting, brainstorming, quick research, content generation. Students build fluency with the interfaces they will use throughout their careers.",
        tools: ["Claude", "ChatGPT", "Moda", "Shortcut AI"],
        artifact: "Department Q&A assistant: a chatbot trained on course data and syllabi that answers student and advisor queries from uploaded materials.",
      },
      {
        code: "A2",
        name: "Waystage: Knowledge Hubs",
        focus: "Proprietary Context & High-Output Research",
        body: "Building Claude Projects loaded with research papers, institution data, and departmental context to produce proprietary, high-context outputs unavailable from generic search.",
        tools: ["Claude Projects", "Custom GPTs"],
        artifact: "Automated research digest: a Claude Project loaded with journal archives that returns cited, scoped answers on demand for any faculty query.",
      },
    ],
  },
  {
    key: "independent",
    band: "B1–B2",
    label: "Independent User",
    badgeColor: "#B5862E",
    badgeBg: "rgba(181,134,46,0.10)",
    badgeBorder: "rgba(181,134,46,0.22)",
    stages: [
      {
        code: "B1",
        name: "Threshold: The Bridge",
        focus: "Systems Thinking & Automated Workflows",
        body: "Using Gumloop or Zapier to move data across platforms via APIs. Students connect tools to create reliable automated workflows that replace hours of manual process and document them for others to reuse.",
        tools: ["Gumloop", "Zapier", "n8n"],
        artifact: "Student feedback router: survey responses auto-triaged by topic and severity, then forwarded to the correct academic advisor with a summary.",
      },
      {
        code: "B2",
        name: "Vantage: The Internal Builder",
        focus: "Internal Data Products & Scripted Tooling",
        body: "Using Cursor and Claude Code to write scripts that sync institutional spreadsheets into Supabase or BigQuery for live dashboards. Students ship tooling that lives in the department's stack after the course ends.",
        tools: ["Cursor", "Claude Code", "Supabase", "BigQuery"],
        artifact: "Department copilot: a retrieval-grounded assistant for academic advising with traceable answers and human escalation routing.",
      },
    ],
  },
  {
    key: "proficient",
    band: "C1–C2",
    label: "Proficient User",
    badgeColor: "#4A584E",
    badgeBg: "rgba(74,88,78,0.08)",
    badgeBorder: "rgba(74,88,78,0.20)",
    stages: [
      {
        code: "C1",
        name: "Advanced: AI-Native Features",
        focus: "Product Integration & Observability",
        body: "Shipping AI-powered features as real student projects. Managing the unit economics: token costs, latency, reliability at scale. The same skills employers hire for from day one.",
        tools: ["Helicone", "Evals", "Token economics"],
        artifact: "Campus services scheduler: AI-powered booking with LLM routing, latency tracking, fallback handling, and a live cost dashboard.",
      },
      {
        code: "C2",
        name: "Mastery: Autonomous Systems",
        focus: "Multi-Agent Systems & Human Oversight",
        body: "Deploying multi-agent systems that autonomously plan and execute complex workflows, with human-in-the-loop controls, kill switches, and observability infrastructure built in.",
        tools: ["LangGraph", "CrewAI", "Kill switches"],
        artifact: "Autonomous research pipeline: multi-agent system that monitors preprint servers, clusters findings, and routes digests with human review gates.",
      },
    ],
  },
];

export default function CurriculumFramework() {
  const [level, setLevel] = useState<LevelKey>("basic");
  const active = LEVELS.find((l) => l.key === level)!;

  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#ECF1EC",
        borderTop: "1px solid rgba(27,42,33,0.06)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Header */}
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
          The AI Fluency Standard
        </p>
        <h2
          style={{
            fontSize: "clamp(22px, 2.8vw, 38px)",
            fontWeight: 500,
            fontFamily: "var(--font-display)",
            color: "#1B2A21",
            margin: "0 0 14px",
            letterSpacing: "-0.012em",
          }}
        >
          Three levels. Six stages.{" "}
          <em style={{ fontStyle: "italic", color: "#1E4D38" }}>One journey.</em>
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.68,
            color: "#4A584E",
            margin: "0 0 40px",
            maxWidth: 640,
          }}
        >
          A shared map for AI inside every graduating class. The Fluency Standard names the levels so faculty know what good looks like, students know what to learn next, and employers can evaluate portfolios against verified benchmarks.
        </p>

        {/* Level tabs */}
        <div
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 32,
            flexWrap: "wrap",
          }}
        >
          {LEVELS.map((l) => {
            const isActive = level === l.key;
            return (
              <button
                key={l.key}
                onClick={() => setLevel(l.key)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  borderRadius: "var(--radius-btn)",
                  border: isActive
                    ? "1px solid rgba(30,77,56,0.20)"
                    : "1px solid rgba(27,42,33,0.12)",
                  background: isActive ? "#1E4D38" : "#FFFFFF",
                  color: isActive ? "#F4F0E6" : "#4A584E",
                  cursor: "pointer",
                  transition: "all 180ms ease",
                  boxShadow: isActive ? "0 2px 8px rgba(30,77,56,0.18)" : "var(--shadow-card)",
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    letterSpacing: "0.06em",
                    color: isActive ? "#9FBFAD" : "#B5862E",
                    fontStyle: "italic",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {l.band}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    letterSpacing: "0.02em",
                  }}
                >
                  {l.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Animated stage cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={level}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
              }}
              className="framework-cards"
            >
              {active.stages.map((stage) => (
                <div
                  key={stage.code}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(27,42,33,0.10)",
                    borderRadius: "var(--radius-card)",
                    padding: "28px 26px",
                    boxShadow: "var(--shadow-card)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Stage badge */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      background: active.badgeBg,
                      border: `1px solid ${active.badgeBorder}`,
                      borderRadius: 4,
                      padding: "3px 10px",
                      marginBottom: 16,
                      alignSelf: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        fontFamily: "var(--font-libre-franklin), sans-serif",
                        color: active.badgeColor,
                        letterSpacing: "0.08em",
                      }}
                    >
                      {stage.code}
                    </span>
                  </div>

                  {/* Stage name */}
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                      fontFamily: "var(--font-display)",
                      color: "#1B2A21",
                      margin: "0 0 6px",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                    }}
                  >
                    {stage.name}
                  </h3>

                  {/* Focus label */}
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                      letterSpacing: "0.10em",
                      textTransform: "uppercase",
                      color: "#4A584E",
                      margin: "0 0 14px",
                    }}
                  >
                    {stage.focus}
                  </p>

                  {/* Body */}
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.68,
                      color: "#4A584E",
                      margin: "0 0 20px",
                      flex: 1,
                    }}
                  >
                    {stage.body}
                  </p>

                  {/* Tools */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: 18,
                    }}
                  >
                    {stage.tools.map((tool) => (
                      <span
                        key={tool}
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          fontFamily: "var(--font-libre-franklin), sans-serif",
                          color: "#1E4D38",
                          background: "rgba(30,77,56,0.07)",
                          border: "1px solid rgba(30,77,56,0.14)",
                          borderRadius: 4,
                          padding: "3px 8px",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Artifact */}
                  <div
                    style={{
                      borderTop: "1px solid rgba(27,42,33,0.08)",
                      paddingTop: 16,
                    }}
                  >
                    <p
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        fontFamily: "var(--font-libre-franklin), sans-serif",
                        letterSpacing: "0.10em",
                        textTransform: "uppercase",
                        color: "#B5862E",
                        margin: "0 0 6px",
                      }}
                    >
                      Portfolio Artifact
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        fontStyle: "italic",
                        fontFamily: "var(--font-display)",
                        color: "#5A6B60",
                        margin: 0,
                        lineHeight: 1.55,
                      }}
                    >
                      {stage.artifact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Standard footnote */}
        <p
          style={{
            fontSize: 12,
            color: "#4A584E",
            margin: "24px 0 0",
            fontFamily: "var(--font-libre-franklin), sans-serif",
            fontStyle: "italic",
          }}
        >
          The Sophrosyne Fluency Standard is modeled on the CEFR language framework. Six progressive stages, each assessed by portfolio evidence rather than standardized test.
        </p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .framework-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
