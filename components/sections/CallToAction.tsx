"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section
      style={{
        padding: "clamp(72px, 10vw, 116px) var(--pad-h)",
        background: "#1E4D38",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle diagonal-hatch texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(241,238,226,0.035) 0px, rgba(241,238,226,0.035) 1px, transparent 1px, transparent 16px)",
          pointerEvents: "none",
        }}
      />
      {/* Warm radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 80% at 50% 0%, rgba(199,161,74,0.14) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            fontFamily: "var(--font-libre-franklin), sans-serif",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#C7A14A",
            margin: "0 0 20px",
          }}
        >
          Begin the Conversation
        </p>
        <h2
          style={{
            fontSize: "clamp(30px, 4.4vw, 52px)",
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: "#F1EEE2",
            margin: "0 0 20px",
            letterSpacing: "-0.015em",
            lineHeight: 1.08,
          }}
        >
          See what your campus could save —{" "}
          <em style={{ fontStyle: "italic", color: "#E9C77B" }}>
            and build.
          </em>
        </h2>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.7,
            color: "#C9D9CE",
            margin: "0 auto 36px",
            maxWidth: 560,
          }}
        >
          Every engagement begins with a fixed-fee AI &amp; OpEx Readiness Audit.
          You walk away with a board-ready findings deck and a dollar-figure
          savings roadmap — credited in full toward any platform engagement
          within 90 days.
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
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
              transition: "transform 150ms, box-shadow 200ms",
              boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.24)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.18)";
            }}
          >
            Book an Audit
            <ArrowRight size={15} strokeWidth={2.2} />
          </Link>
          <Link
            href="/pricing"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              color: "#F1EEE2",
              fontFamily: "var(--font-libre-franklin), sans-serif",
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: "0.02em",
              padding: "14px 28px",
              borderRadius: "var(--radius-btn)",
              border: "1px solid rgba(241,238,226,0.30)",
              textDecoration: "none",
              transition: "background 200ms, border-color 200ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(241,238,226,0.08)";
              e.currentTarget.style.borderColor = "rgba(241,238,226,0.50)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(241,238,226,0.30)";
            }}
          >
            View Pricing
          </Link>
        </div>

        <p
          style={{
            marginTop: 24,
            fontSize: 12,
            color: "#9FBFAD",
            letterSpacing: "0.02em",
            fontFamily: "var(--font-libre-franklin), sans-serif",
          }}
        >
          No obligation · Grant language available · Response within one business
          day
        </p>
      </motion.div>
    </section>
  );
}
