"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/lib/data";
import Card from "@/components/ui/Card";

export default function TeamGrid() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#0f172a",
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
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#10b981",
              margin: "0 0 14px",
            }}
          >
            The Team
          </p>
          <h2
            style={{
              fontSize: "clamp(26px, 3.8vw, 48px)",
              fontWeight: 700,
              color: "#f8fafc",
              margin: "0 0 16px",
              letterSpacing: "-0.025em",
              maxWidth: 640,
            }}
          >
            Practitioners, Engineers, and Higher-Ed Strategists.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(248,250,252,0.5)",
              maxWidth: 500,
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            We ship infrastructure, not slide decks. Every person on this team
            has delivered production systems inside academic institutions.
          </p>
        </motion.div>

        {/* Team cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
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
              <Card hoverable style={{ padding: "28px 24px" }}>
                {/* Avatar */}
                <div
                  style={{
                    width: 68,
                    height: 68,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid rgba(16,185,129,0.3)",
                    marginBottom: 18,
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={200}
                    height={200}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#f8fafc",
                    margin: "0 0 4px",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#10b981",
                    margin: "0 0 16px",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {member.title}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.7,
                    color: "rgba(248,250,252,0.52)",
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
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; max-width: unset; }
        }
      `}</style>
    </section>
  );
}
