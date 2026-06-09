"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SOLUTIONS } from "@/lib/data";

export default function SolutionCards() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#0f172a",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 80,
        }}
      >
        {SOLUTIONS.map((sol, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 64,
                  alignItems: "center",
                }}
                className={`solution-row ${imageLeft ? "image-left" : "image-right"}`}
              >
                {/* Image */}
                <div style={{ order: imageLeft ? 0 : 1 }} className="sol-img">
                  <div
                    style={{
                      borderRadius: 14,
                      overflow: "hidden",
                      border: "1px solid rgba(248,250,252,0.07)",
                      boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background:
                          "linear-gradient(90deg, transparent, rgba(16,185,129,0.5) 50%, transparent)",
                        zIndex: 2,
                      }}
                    />
                    <Image
                      src={sol.image}
                      alt={sol.imageAlt}
                      width={1200}
                      height={800}
                      style={{
                        width: "100%",
                        height: "auto",
                        aspectRatio: "4/3",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    {/* Solution number badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        background: "rgba(10,15,26,0.88)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(16,185,129,0.25)",
                        borderRadius: 8,
                        padding: "6px 12px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          color: "#10b981",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        {sol.label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div style={{ order: imageLeft ? 1 : 0 }} className="sol-text">
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#10b981",
                      margin: "0 0 14px",
                    }}
                  >
                    {sol.label}
                  </p>
                  <h2
                    style={{
                      fontSize: "clamp(26px, 3.2vw, 40px)",
                      fontWeight: 700,
                      color: "#f8fafc",
                      margin: "0 0 10px",
                      letterSpacing: "-0.025em",
                    }}
                  >
                    {sol.title}
                  </h2>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: "rgba(248,250,252,0.55)",
                      margin: "0 0 20px",
                      fontStyle: "italic",
                    }}
                  >
                    {sol.tagline}
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.72,
                      color: "rgba(248,250,252,0.58)",
                      margin: "0 0 28px",
                    }}
                  >
                    {sol.body}
                  </p>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {sol.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          fontSize: 13,
                          color: "rgba(248,250,252,0.65)",
                          lineHeight: 1.55,
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          color="#10b981"
                          strokeWidth={2}
                          style={{ flexShrink: 0, marginTop: 1 }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .solution-row {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .sol-img, .sol-text { order: unset !important; }
        }
      `}</style>
    </section>
  );
}
