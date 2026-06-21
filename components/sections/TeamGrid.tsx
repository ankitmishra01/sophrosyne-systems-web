"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TEAM_MEMBERS, TeamMember } from "@/lib/data";
import Card from "@/components/ui/Card";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "curriculum", label: "AI Fluency" },
  { id: "opex", label: "Operational Efficiency" },
  { id: "foundry", label: "AI Foundry" },
];

function MemberCard({ member, index, gridColumn }: { member: TeamMember; index: number; gridColumn?: string }) {
  return (
    <motion.div
      layout
      key={member.name}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      style={{ gridColumn, minHeight: 270 }}
    >
      <Card
        hoverable
        style={{
          padding: "28px 24px",
          height: "100%",
          minHeight: 270,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          role="img"
          aria-label={member.name}
          style={{
            width: 84,
            height: 84,
            borderRadius: "50%",
            border: "2px solid #1E4D38",
            flexShrink: 0,
            backgroundColor: "#1E4D38",
            backgroundImage: `url(${member.photo})`,
            backgroundSize: member.imgSize,
            backgroundPosition: member.imgPos,
            backgroundRepeat: "no-repeat",
            marginBottom: 18,
          }}
        />
        <h3
          style={{
            fontSize: 17,
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: "#1B2A21",
            margin: "0 0 4px",
            letterSpacing: "-0.01em",
            textAlign: "center",
          }}
        >
          {member.name}
        </h3>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            fontFamily: "var(--font-libre-franklin), sans-serif",
            color: "#B5862E",
            margin: "0 0 16px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          {member.title}
        </p>
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.7,
            color: "#5A6B60",
            margin: 0,
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          {member.bio}
        </p>
      </Card>
    </motion.div>
  );
}

export default function TeamGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.solutions.includes(activeFilter));

  const isAllView = activeFilter === "all";

  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#F4F0E6",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 40, textAlign: "center" }}
        >
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              fontFamily: "var(--font-libre-franklin), sans-serif",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#B5862E",
              margin: "0 0 14px",
            }}
          >
            The Team
          </p>
          <h2
            style={{
              fontSize: "clamp(26px, 3.2vw, 44px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21",
              margin: "0 0 16px",
              letterSpacing: "-0.012em",
              maxWidth: 680,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Higher-ed leaders, researchers, and operators.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#4A584E",
              maxWidth: 540,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            A team that spans university leadership, higher-ed finance, AI
            advisory and venture, and research — the disciplines a real campus
            transformation actually requires.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40, justifyContent: "center" }}>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 100,
                fontSize: 12,
                fontWeight: 600,
                fontFamily: "var(--font-libre-franklin), sans-serif",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
                border: activeFilter === f.id
                  ? "1.5px solid #1E4D38"
                  : "1.5px solid rgba(27,42,33,0.18)",
                background: activeFilter === f.id ? "#1E4D38" : "transparent",
                color: activeFilter === f.id ? "#FFFFFF" : "#4A584E",
                transition: "all 180ms ease",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          {isAllView ? (
            <motion.div
              key="all-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                display: "grid",
                gridTemplateColumns:
                  TEAM_MEMBERS.length <= 2
                    ? "repeat(2, 1fr)"
                    : TEAM_MEMBERS.length === 3
                    ? "repeat(3, 1fr)"
                    : "repeat(6, 1fr)",
                gap: 24,
                maxWidth: TEAM_MEMBERS.length <= 2 ? 720 : "100%",
                margin: "0 auto",
              }}
              className="team-unified-grid"
            >
              {TEAM_MEMBERS.map((member, i) => (
                <MemberCard
                  key={member.name}
                  member={member}
                  index={i}
                  gridColumn={TEAM_MEMBERS.length >= 4 ? "span 2" : undefined}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                display: "grid",
                gridTemplateColumns:
                  filtered.length === 1
                    ? "minmax(0, 340px)"
                    : filtered.length === 2
                    ? "repeat(2, 1fr)"
                    : "repeat(3, 1fr)",
                gap: 24,
                maxWidth: filtered.length <= 2 ? 720 : "100%",
                margin: "0 auto",
              }}
              className="team-filtered-grid"
            >
              {filtered.map((member, i) => (
                <MemberCard key={member.name} member={member} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .team-unified-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .team-unified-grid > * {
            grid-column: span 1 !important;
          }
          .team-filtered-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            max-width: 100% !important;
          }
        }
        @media (max-width: 600px) {
          .team-unified-grid {
            grid-template-columns: 1fr !important;
          }
          .team-unified-grid > * {
            grid-column: span 1 !important;
          }
          .team-filtered-grid {
            grid-template-columns: 1fr !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
