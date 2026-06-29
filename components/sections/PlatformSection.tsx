"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckSquare, LayoutDashboard, Lock, ArrowRight, ExternalLink } from "lucide-react";

const FEATURES = [
  {
    icon: BookOpen,
    title: "Student Portfolio Tracker",
    body: "Every student's AI work is verified, timestamped, and portfolio-ready. Employers see the evidence; students own every artefact, contractually.",
  },
  {
    icon: CheckSquare,
    title: "Faculty Review Workflow",
    body: "Faculty submit structured competency assessments. Accreditors get the evidence trail they need, without extra work from your IR team.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    body: "Cohort progress at a glance. Enrollment, completion rates, and accreditation readiness in one view. No spreadsheets. Updated in real time.",
  },
  {
    icon: Lock,
    title: "FERPA-Native Architecture",
    body: "All data stays inside your institutional perimeter. Canvas, Banner, and Slate integrations included. No vendor lock-in. No multi-year data agreement.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function PlatformSection() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#141F17",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(159,191,173,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(159,191,173,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />
      {/* Gold glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(199,161,74,0.07) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 32,
            alignItems: "flex-end",
            marginBottom: 56,
          }}
          className="platform-header"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Live badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                marginBottom: 18,
                background: "rgba(159,191,173,0.10)",
                border: "1px solid rgba(159,191,173,0.22)",
                borderRadius: 20,
                padding: "4px 14px",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#9FBFAD",
                  boxShadow: "0 0 6px rgba(159,191,173,0.70)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#9FBFAD",
                }}
              >
                Sophrosyne Platform · Live
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(26px, 3.2vw, 46px)",
                fontWeight: 500,
                fontFamily: "var(--font-newsreader), serif",
                color: "#F1EEE2",
                margin: "0 0 16px",
                letterSpacing: "-0.015em",
                lineHeight: 1.1,
              }}
            >
              Track every student.{" "}
              <em style={{ fontStyle: "italic", color: "#E9C77B" }}>Every outcome.</em>{" "}
              In real time.
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.72,
                color: "rgba(201,217,206,0.80)",
                margin: 0,
                maxWidth: 560,
              }}
            >
              The platform connects faculty reviews, student portfolios, and admin dashboards in one place. Built for FERPA compliance from day one, and already live for founding institutions.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ flexShrink: 0 }}
            className="platform-cta-col"
          >
            <a
              href="https://platform.sophrosynesystems.org/login"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#C7A14A",
                color: "#141F17",
                fontFamily: "var(--font-libre-franklin), sans-serif",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.02em",
                padding: "13px 24px",
                borderRadius: "var(--radius-btn)",
                textDecoration: "none",
                transition: "transform 150ms, box-shadow 200ms",
                boxShadow: "0 6px 20px rgba(199,161,74,0.28)",
                whiteSpace: "nowrap",
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
              Log in to the platform
              <ExternalLink size={13} strokeWidth={2.2} />
            </a>
            <p
              style={{
                marginTop: 10,
                fontSize: 11,
                color: "rgba(199,161,74,0.55)",
                fontFamily: "var(--font-libre-franklin), sans-serif",
                letterSpacing: "0.01em",
                textAlign: "right",
              }}
            >
              Credentials emailed at onboarding
            </p>
          </motion.div>
        </div>

        {/* Feature cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
          className="platform-features"
        >
          {FEATURES.map((f) => {
            const IconComp = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={card}
                whileHover={{ y: -3 }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(199,161,74,0.14)",
                  borderRadius: "var(--radius-card)",
                  padding: "28px 24px",
                  transition: "border-color 200ms",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(199,161,74,0.10)",
                    border: "1px solid rgba(199,161,74,0.22)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <IconComp size={18} color="#C7A14A" strokeWidth={1.8} />
                </div>

                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    color: "#F1EEE2",
                    margin: "0 0 10px",
                    letterSpacing: "-0.005em",
                    lineHeight: 1.3,
                  }}
                >
                  {f.title}
                </h3>

                <p
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.7,
                    color: "rgba(201,217,206,0.72)",
                    margin: 0,
                  }}
                >
                  {f.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom link row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            marginTop: 40,
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://platform.sophrosynesystems.org/login"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "var(--font-libre-franklin), sans-serif",
              color: "#C7A14A",
              textDecoration: "none",
              borderBottom: "1px solid rgba(199,161,74,0.30)",
              paddingBottom: 1,
              transition: "border-color 180ms",
            }}
          >
            Open the platform
            <ArrowRight size={13} strokeWidth={2.2} />
          </a>
          <span style={{ color: "rgba(159,191,173,0.25)", fontSize: 13 }}>·</span>
          <span
            style={{
              fontSize: 12,
              color: "rgba(201,217,206,0.45)",
              fontFamily: "var(--font-libre-franklin), sans-serif",
            }}
          >
            Available to founding institutions
          </span>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .platform-features {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .platform-header {
            grid-template-columns: 1fr !important;
          }
          .platform-cta-col {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .platform-cta-col p {
            text-align: left !important;
          }
        }
        @media (max-width: 560px) {
          .platform-features {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
