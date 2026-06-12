"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SOLUTIONS } from "@/lib/data";

export default function SolutionCards() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#ECF1EC",
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
                      border: "1px solid rgba(27,42,33,0.10)",
                      boxShadow: "var(--shadow-card-lg)",
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
                          "linear-gradient(90deg, transparent, rgba(30,77,56,0.45) 50%, transparent)",
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
                        filter: "saturate(0.96) brightness(0.95) sepia(0.08)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(27,42,33,0.30) 0%, transparent 45%)",
                        pointerEvents: "none",
                        zIndex: 1,
                      }}
                    />
                    {/* Solution label badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        background: "rgba(33,39,31,0.85)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(199,161,74,0.30)",
                        borderRadius: 8,
                        padding: "6px 12px",
                        zIndex: 3,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 500,
                          fontStyle: "italic",
                          fontFamily: "var(--font-newsreader), serif",
                          color: "#C7A14A",
                          letterSpacing: "0.04em",
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
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#B5862E",
                      margin: "0 0 14px",
                    }}
                  >
                    {sol.label}
                  </p>
                  <h2
                    style={{
                      fontSize: "clamp(26px, 3.2vw, 40px)",
                      fontWeight: 500,
                      fontFamily: "var(--font-newsreader), serif",
                      color: "#1B2A21",
                      margin: "0 0 10px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {sol.title}
                  </h2>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 400,
                      fontStyle: "italic",
                      fontFamily: "var(--font-newsreader), serif",
                      color: "#5A6B60",
                      margin: "0 0 20px",
                    }}
                  >
                    {sol.tagline}
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.72,
                      color: "#4A584E",
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
                          color: "#4A584E",
                          lineHeight: 1.55,
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          color="#1E4D38"
                          strokeWidth={2}
                          style={{ flexShrink: 0, marginTop: 1 }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/solutions/${sol.id}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      marginTop: 24,
                      fontSize: 13,
                      fontWeight: 600,
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                      color: "#1E4D38",
                      textDecoration: "none",
                      letterSpacing: "0.02em",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.72")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                  >
                    Learn more →
                  </Link>
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
