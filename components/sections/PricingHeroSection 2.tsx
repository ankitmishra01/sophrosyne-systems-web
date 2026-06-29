"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

const DELIVERABLES = [
  "Line-item savings model across 9 operational domains",
  "Accreditation risk assessment — AI-specific gaps identified",
  "Board-ready executive deck + CFO summary",
  "Faculty & staff AI readiness baseline",
  "Full implementation roadmap with pillar recommendations",
  "Grant language for Title III, HECAP, and state AI funds",
];

const TRUST_PILLS = [
  "100% IP transfer to your institution",
  "Fixed scope · Fixed fee",
  "No software mandated",
  "Expert team — not a platform",
];

export default function PricingHeroSection() {
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section
      style={{
        padding: "140px var(--pad-h) 88px",
        background: "radial-gradient(ellipse 90% 70% at 10% 40%, #ECF1EC 0%, #F4F0E6 58%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle hatch */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(30,77,56,0.025) 0px, rgba(30,77,56,0.025) 1px, transparent 1px, transparent 18px)", pointerEvents: "none" }} />

      <div
        style={{ maxWidth: "var(--max-w)", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center", position: "relative", zIndex: 1 }}
        className="pricing-hero-grid"
      >
        {/* Left */}
        <div>
          <p
            style={{
              fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif",
              letterSpacing: "0.18em", textTransform: "uppercase", color: "#B5862E", margin: "0 0 18px",
              opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(12px)",
              transition: "opacity 0.6s 0.05s cubic-bezier(0.22,1,0.36,1), transform 0.6s 0.05s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            How We Work With You
          </p>
          <h1
            style={{
              fontSize: "clamp(26px, 3.2vw, 46px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21", margin: "0 0 22px", letterSpacing: "-0.015em", lineHeight: 1.08,
              opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(20px)",
              transition: "opacity 0.7s 0.12s cubic-bezier(0.22,1,0.36,1), transform 0.7s 0.12s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            Fixed-fee consulting.{" "}
            <em style={{ fontStyle: "italic", color: "#1E4D38" }}>
              One conversation to start.
            </em>
          </h1>
          <p
            style={{
              fontSize: 16, lineHeight: 1.72, color: "#4A584E", maxWidth: 460, margin: "0 0 32px",
              opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(16px)",
              transition: "opacity 0.7s 0.2s cubic-bezier(0.22,1,0.36,1), transform 0.7s 0.2s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            Every engagement is scoped to your institution — audit, pilot, or full program deployment. Transparent scope, fixed fees, and all IP transfers to you on delivery.
          </p>

          {/* Trust pills */}
          <div
            style={{
              display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36,
              opacity: ready ? 1 : 0, transition: "opacity 0.7s 0.28s",
            }}
          >
            {TRUST_PILLS.map((p) => (
              <span
                key={p}
                style={{
                  fontSize: 11, fontWeight: 500, fontFamily: "var(--font-libre-franklin), sans-serif",
                  color: "#1E4D38", background: "rgba(30,77,56,0.07)", border: "1px solid rgba(30,77,56,0.16)",
                  borderRadius: 20, padding: "5px 12px", letterSpacing: "0.02em",
                }}
              >
                {p}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", opacity: ready ? 1 : 0, transition: "opacity 0.7s 0.35s" }}>
            <Button variant="primary" size="lg" href="/get-started">Book an Audit</Button>
            <Button variant="secondary" size="lg" href="#roi">Estimate your ROI →</Button>
          </div>
        </div>

        {/* Right — Audit deliverables card */}
        <div style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateX(20px)", transition: "opacity 0.8s 0.2s cubic-bezier(0.22,1,0.36,1), transform 0.8s 0.2s cubic-bezier(0.22,1,0.36,1)" }}>
          <div
            style={{
              background: "#141F17", border: "1px solid rgba(199,161,74,0.20)",
              borderRadius: 16, overflow: "hidden",
              boxShadow: "0 24px 64px rgba(27,42,33,0.22)",
            }}
          >
            {/* Card header */}
            <div style={{ padding: "18px 24px", background: "#0d1510", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <p style={{ fontSize: 9, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(199,161,74,0.70)", margin: "0 0 5px" }}>
                  Starting Point
                </p>
                <p style={{ fontSize: 15, fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: "#F1EEE2", margin: 0, letterSpacing: "-0.01em" }}>
                  AI & Accreditation Readiness Audit
                </p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 16 }}>
                <p style={{ fontSize: 18, fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: "#C7A14A", margin: "0 0 2px", letterSpacing: "-0.01em" }}>$45K</p>
                <p style={{ fontSize: 9, color: "rgba(241,238,226,0.68)", fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.06em", textTransform: "uppercase", margin: 0 }}>Fixed fee · 4–6 wks</p>
              </div>
            </div>

            {/* Deliverables */}
            <div style={{ padding: "20px 24px" }}>
              <p style={{ fontSize: 9, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(159,191,173,0.85)", margin: "0 0 14px" }}>
                What You Receive
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {DELIVERABLES.map((d, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckCircle2 size={13} color="#9FBFAD" strokeWidth={2} style={{ flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontSize: 12.5, color: "rgba(241,238,226,0.72)", fontFamily: "var(--font-libre-franklin), sans-serif", lineHeight: 1.5 }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer comparison note */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "14px 24px", background: "rgba(199,161,74,0.04)" }}>
              <p style={{ fontSize: 11.5, fontStyle: "italic", fontFamily: "var(--font-newsreader), serif", color: "rgba(199,161,74,0.75)", margin: 0, lineHeight: 1.6 }}>
                "The same analysis a Big-Three firm would charge $200K–$400K to produce — if they engage institutions your size."
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
