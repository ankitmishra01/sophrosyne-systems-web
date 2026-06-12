"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileCheck, Users, BookOpen, Presentation, ShoppingCart,
  Leaf, BarChart2, Map, Zap, ArrowRight,
} from "lucide-react";
import { SAVINGS_MODEL } from "@/lib/data";

const ICONS: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  FileCheck, Users, BookOpen, Presentation, ShoppingCart, Leaf, BarChart2, Map, Zap,
};

const AUDIT_FEE = 45000;

const fmtUSD = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

const fmtCompact = (n: number) => {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return fmtUSD(n);
};

export default function RoiCalculator() {
  const [enrollment, setEnrollment] = useState(5000);
  const [budget, setBudget] = useState(60_000_000);

  const totalPct = SAVINGS_MODEL.reduce((s, d) => s + d.pct, 0) / 100; // ≈ 0.037
  const annual = budget * totalPct;
  const low = annual * 0.75;
  const high = annual * 1.25;
  const perStudent = annual / enrollment;
  const paybackWeeks = annual > 0 ? AUDIT_FEE / (annual / 52) : 0;
  const paybackWeeksRounded = Math.round(paybackWeeks);
  const paybackLabel = paybackWeeks < 1 ? "Under 1 week" : `~${paybackWeeksRounded} ${paybackWeeksRounded === 1 ? "week" : "weeks"}`;
  const maxPct = Math.max(...SAVINGS_MODEL.map((d) => d.pct));

  const mailto = () => {
    const subject = encodeURIComponent("Sophrosyne ROI analysis for our institution");
    const body = encodeURIComponent(
      `Here is the modeled operating-savings analysis I ran:\n\n` +
      `Enrollment: ${enrollment.toLocaleString()} students\n` +
      `Annual operating budget: ${fmtUSD(budget)}\n\n` +
      `Modeled annual savings: ${fmtUSD(low)} – ${fmtUSD(high)} (midpoint ${fmtUSD(annual)})\n` +
      `Per student / year: ${fmtUSD(perStudent)}\n` +
      `Audit fee: ${fmtUSD(AUDIT_FEE)} · Payback: ${paybackLabel}\n\n` +
      `I'd like to book an AI & OpEx Readiness Audit to validate these numbers.`
    );
    return `mailto:hello@sophrosynesystems.com?subject=${subject}&body=${body}`;
  };

  const sliderLabel: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 600,
    fontFamily: "var(--font-libre-franklin), sans-serif",
    color: "#5A6B60",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  };
  const sliderValue: React.CSSProperties = {
    fontSize: 24,
    fontWeight: 500,
    fontFamily: "var(--font-newsreader), serif",
    color: "#1B2A21",
    letterSpacing: "-0.012em",
  };

  return (
    <section style={{ padding: "0 var(--pad-h) var(--section-py)", background: "#F4F0E6" }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Inputs + headline results */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "stretch" }}
          className="roi-top"
        >
          {/* Inputs card */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(27,42,33,0.10)",
              borderRadius: "var(--radius-card)",
              padding: "32px 30px",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <p
              style={{
                fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif",
                letterSpacing: "0.16em", textTransform: "uppercase", color: "#B5862E", margin: "0 0 24px",
              }}
            >
              Your Institution
            </p>

            {/* Enrollment */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
                <span style={sliderLabel}>Enrollment</span>
                <span style={sliderValue}>{enrollment.toLocaleString()}</span>
              </div>
              <input
                type="range" min={500} max={40000} step={500}
                value={enrollment}
                onChange={(e) => setEnrollment(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#1E4D38", cursor: "pointer" }}
                aria-label="Enrollment"
              />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                <span style={{ fontSize: 10, color: "#7E8A80" }}>500</span>
                <span style={{ fontSize: 10, color: "#7E8A80" }}>40,000</span>
              </div>
            </div>

            {/* Budget */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
                <span style={sliderLabel}>Annual Operating Budget</span>
                <span style={sliderValue}>{fmtCompact(budget)}</span>
              </div>
              <input
                type="range" min={5_000_000} max={500_000_000} step={5_000_000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#1E4D38", cursor: "pointer" }}
                aria-label="Annual operating budget"
              />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                <span style={{ fontSize: 10, color: "#7E8A80" }}>$5M</span>
                <span style={{ fontSize: 10, color: "#7E8A80" }}>$500M</span>
              </div>
            </div>

            <p style={{ fontSize: 12, lineHeight: 1.6, color: "#6E7B71", margin: "26px 0 0" }}>
              Modeled on a conservative {(totalPct * 100).toFixed(1)}% of operating budget across nine
              operational domains. Illustrative — your audit produces the validated, line-item figure.
            </p>
          </div>

          {/* Results panel (pine) */}
          <div
            style={{
              background: "#1E4D38",
              borderRadius: "var(--radius-card)",
              padding: "32px 30px",
              boxShadow: "var(--shadow-pine)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(ellipse 70% 80% at 90% 0%, rgba(199,161,74,0.16) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif",
                  letterSpacing: "0.16em", textTransform: "uppercase", color: "#C7A14A", margin: "0 0 14px",
                }}
              >
                Modeled Annual Savings
              </p>
              <p
                style={{
                  fontSize: "clamp(34px, 5vw, 52px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif",
                  color: "#F1EEE2", margin: "0 0 4px", letterSpacing: "-0.02em", lineHeight: 1,
                }}
              >
                {fmtCompact(low)} – {fmtCompact(high)}
              </p>
              <p style={{ fontSize: 13, color: "#9FBFAD", margin: "0 0 28px" }}>
                midpoint {fmtUSD(annual)} / year
              </p>

              <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
                {[
                  { v: fmtUSD(perStudent), l: "per student / year" },
                  { v: paybackLabel, l: "audit payback" },
                ].map((s, i) => (
                  <div key={i}>
                    <p
                      style={{
                        fontSize: 22, fontWeight: 500, fontFamily: "var(--font-newsreader), serif",
                        color: "#F1EEE2", margin: "0 0 3px", letterSpacing: "-0.01em",
                      }}
                    >
                      {s.v}
                    </p>
                    <p
                      style={{
                        fontSize: 11, color: "#9FBFAD", margin: 0, fontWeight: 500,
                        fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.04em",
                      }}
                    >
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MBB framing strip */}
        <div
          style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1,
            background: "rgba(27,42,33,0.10)", borderRadius: "var(--radius-card)", overflow: "hidden",
            border: "1px solid rgba(27,42,33,0.10)", margin: "20px 0 0",
          }}
          className="roi-mbb"
        >
          {[
            { v: "~$400K", l: "Big-Three diagnostic to find these savings" },
            { v: fmtUSD(AUDIT_FEE), l: "Sophrosyne AI & OpEx Readiness Audit" },
            { v: paybackLabel, l: "Until the audit pays for itself" },
          ].map((s, i) => (
            <div key={i} style={{ background: "#FFFFFF", padding: "22px 24px", textAlign: "center" }}>
              <p
                style={{
                  fontSize: 26, fontWeight: 500, fontFamily: "var(--font-newsreader), serif",
                  color: i === 0 ? "#6E7B71" : "#1E4D38", margin: "0 0 5px", letterSpacing: "-0.015em",
                  textDecoration: i === 0 ? "line-through" : "none",
                  textDecorationColor: "rgba(181,134,46,0.6)",
                }}
              >
                {s.v}
              </p>
              <p style={{ fontSize: 12, color: "#5A6B60", margin: 0, lineHeight: 1.5 }}>{s.l}</p>
            </div>
          ))}
        </div>

        {/* Per-domain breakdown */}
        <div
          style={{
            background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)", borderRadius: "var(--radius-card)",
            padding: "32px 30px", boxShadow: "var(--shadow-card)", marginTop: 20,
          }}
        >
          <p
            style={{
              fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif",
              letterSpacing: "0.16em", textTransform: "uppercase", color: "#B5862E", margin: "0 0 22px",
            }}
          >
            Where the savings come from
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {SAVINGS_MODEL.map((d) => {
              const IconComp = ICONS[d.icon];
              const dollars = budget * (d.pct / 100);
              return (
                <div key={d.domain} style={{ display: "flex", alignItems: "center", gap: 16 }} className="roi-row">
                  <div style={{ display: "flex", alignItems: "center", gap: 10, width: 230, flexShrink: 0 }} className="roi-row-label">
                    {IconComp && <IconComp size={16} color="#1E4D38" strokeWidth={1.8} />}
                    <span style={{ fontSize: 13, color: "#1B2A21", fontWeight: 500 }}>{d.domain}</span>
                  </div>
                  <div style={{ flex: 1, height: 8, background: "#ECF1EC", borderRadius: 4, overflow: "hidden" }}>
                    <div
                      style={{
                        width: `${(d.pct / maxPct) * 100}%`, height: "100%",
                        background: "linear-gradient(90deg, #1E4D38, #2E6B50)", borderRadius: 4,
                      }}
                    />
                  </div>
                  <span
                    style={{
                      width: 84, textAlign: "right", flexShrink: 0, fontSize: 13, fontWeight: 500,
                      fontFamily: "var(--font-newsreader), serif", color: "#1E4D38",
                    }}
                  >
                    {fmtCompact(dollars)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 36 }}>
          <a
            href={mailto()}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8, background: "#1E4D38", color: "#F4F0E6",
              fontFamily: "var(--font-libre-franklin), sans-serif", fontWeight: 600, fontSize: 14,
              letterSpacing: "0.02em", padding: "14px 28px", borderRadius: "var(--radius-btn)", textDecoration: "none",
            }}
          >
            Email me this analysis
            <ArrowRight size={15} strokeWidth={2.2} />
          </a>
          <Link
            href="/get-started"
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF",
              color: "#1B2A21", fontFamily: "var(--font-libre-franklin), sans-serif", fontWeight: 600, fontSize: 14,
              letterSpacing: "0.02em", padding: "14px 28px", borderRadius: "var(--radius-btn)",
              border: "1px solid rgba(27,42,33,0.16)", textDecoration: "none",
            }}
          >
            Book an Audit
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .roi-top { grid-template-columns: 1fr !important; }
          .roi-mbb { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .roi-row-label { width: 150px !important; }
        }
      `}</style>
    </section>
  );
}
