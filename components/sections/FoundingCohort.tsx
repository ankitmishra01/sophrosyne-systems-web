"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { FOUNDING_COHORT } from "@/lib/data";

export default function FoundingCohort() {
  return (
    <section
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      className="cohort-split"
    >
      {/* LEFT — deep ink */}
      <div
        style={{
          background: "#1B2A21",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: "100%",
            maxWidth: 560,
            padding: "88px 56px 88px max(40px, var(--pad-h))",
          }}
        >
          {/* Badge */}
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 10,
                background: "rgba(199,161,74,0.14)",
                border: "1px solid rgba(199,161,74,0.32)",
                borderRadius: 20,
                padding: "5px 14px",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#C7A14A",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#C7A14A",
                }}
              >
                3 of 5 spots remaining
              </span>
            </div>

            {/* Spots progress bar */}
            <div
              style={{
                width: 180,
                height: 3,
                borderRadius: 99,
                background: "rgba(199,161,74,0.18)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "40%",
                  height: "100%",
                  background: "#C7A14A",
                  borderRadius: 99,
                }}
              />
            </div>
            <p
              style={{
                fontSize: 10,
                color: "rgba(199,161,74,0.72)",
                fontFamily: "var(--font-libre-franklin), sans-serif",
                margin: "5px 0 0",
                letterSpacing: "0.04em",
              }}
            >
              2 of 5 founding institutions confirmed
            </p>
          </div>

          <h2
            style={{
              fontSize: "clamp(26px, 3.2vw, 44px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#F1EEE2",
              margin: "0 0 20px",
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
            }}
          >
            Five institutions that will shape what higher education looks like in the age of AI.
          </h2>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: "rgba(241,238,226,0.72)",
              margin: "0 0 36px",
            }}
          >
            We are building Sophrosyne with our first five institutions, not for them. Pricing locked. Charter institutions shape the roadmap — and arrive at their board table with a self-funded transformation plan.
          </p>

          <motion.div
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ display: "inline-block" }}
          >
            <Link
              href="/get-started"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#F4F0E6",
                color: "#1E4D38",
                fontFamily: "var(--font-libre-franklin), sans-serif",
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: "0.02em",
                padding: "14px 28px",
                borderRadius: "var(--radius-btn)",
                textDecoration: "none",
              }}
            >
              Apply to the cohort
              <ArrowRight size={15} strokeWidth={2.2} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* RIGHT — warm parchment */}
      <div
        style={{
          background: "#F4F0E6",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 560,
            padding: "88px max(40px, var(--pad-h)) 88px 56px",
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              fontFamily: "var(--font-libre-franklin), sans-serif",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#B5862E",
              margin: "0 0 28px",
            }}
          >
            What founding partners get
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {FOUNDING_COHORT.benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "#1E4D38",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 2,
                  }}
                >
                  <Check size={14} color="#F4F0E6" strokeWidth={2.6} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                      color: "#1B2A21",
                      margin: "0 0 4px",
                    }}
                  >
                    {b.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.65,
                      color: "#4A584E",
                      margin: 0,
                    }}
                  >
                    {b.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .cohort-split {
            grid-template-columns: 1fr !important;
          }
          .cohort-split > div > div {
            padding-left: max(40px, var(--pad-h)) !important;
            padding-right: max(40px, var(--pad-h)) !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
