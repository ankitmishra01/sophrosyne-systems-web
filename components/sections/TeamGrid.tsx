"use client";

import { motion } from "framer-motion";
import { TEAM_MEMBERS } from "@/lib/data";
import Card from "@/components/ui/Card";

export default function TeamGrid() {
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
          style={{ marginBottom: 56 }}
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
            The Team
          </p>
          <h2
            style={{
              fontSize: "clamp(26px, 3.8vw, 48px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21",
              margin: "0 0 16px",
              letterSpacing: "-0.012em",
              maxWidth: 680,
            }}
          >
            Higher-ed leaders, researchers, and operators.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#4A584E",
              maxWidth: 540,
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            A team that spans university leadership, AI and security research,
            venture, and analytics — the disciplines a real campus transformation
            actually requires.
          </p>
        </motion.div>

        {/* Team cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
          className="team-grid"
        >
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.65,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Card hoverable style={{ padding: "28px 24px", height: "100%" }}>
                {/* Avatar */}
                <div
                  role="img"
                  aria-label={member.name}
                  style={{
                    width: 84,
                    height: 84,
                    borderRadius: "50%",
                    border: "2px solid rgba(30,77,56,0.22)",
                    marginBottom: 18,
                    flexShrink: 0,
                    backgroundColor: "#1E4D38",
                    backgroundImage: `url(${member.photo})`,
                    backgroundSize: member.imgSize,
                    backgroundPosition: member.imgPos,
                    backgroundRepeat: "no-repeat",
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
                  }}
                >
                  {member.bio}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; max-width: 720px; margin: 0 auto; }
        }
        @media (max-width: 600px) {
          .team-grid { grid-template-columns: 1fr !important; max-width: 360px; }
        }
      `}</style>
    </section>
  );
}
