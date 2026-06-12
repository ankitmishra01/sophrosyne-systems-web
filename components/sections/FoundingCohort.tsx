import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { FOUNDING_COHORT } from "@/lib/data";

export default function FoundingCohort() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#21271F",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(241,238,226,0.03) 0px, rgba(241,238,226,0.03) 1px, transparent 1px, transparent 16px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: "var(--max-w)", margin: "0 auto", position: "relative", zIndex: 1,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center",
        }}
        className="cohort-grid"
      >
        {/* Left — pitch */}
        <div>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20,
              background: "rgba(199,161,74,0.12)", border: "1px solid rgba(199,161,74,0.30)",
              borderRadius: 20, padding: "5px 14px",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#C7A14A" }} />
            <span style={{ fontSize: 11, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C7A14A" }}>
              Now accepting {FOUNDING_COHORT.spots} institutions
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif",
              color: "#F1EEE2", margin: "0 0 18px", letterSpacing: "-0.015em", lineHeight: 1.08,
            }}
          >
            Join the Founding Cohort.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.72, color: "#9FBFAD", margin: "0 0 28px", maxWidth: 460 }}>
            We are building Sophrosyne with our first five institutions, not
            for them. Founding partners lock in pricing below standard rates,
            co-author the reference case study, and hold an advisory seat on
            the product roadmap and consortium charter. Five spots.
          </p>
          <Link
            href="/get-started"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8, background: "#F4F0E6", color: "#1E4D38",
              fontFamily: "var(--font-libre-franklin), sans-serif", fontWeight: 600, fontSize: 14,
              letterSpacing: "0.02em", padding: "14px 28px", borderRadius: "var(--radius-btn)", textDecoration: "none",
            }}
          >
            Apply to the cohort
            <ArrowRight size={15} strokeWidth={2.2} />
          </Link>
        </div>

        {/* Right — benefits */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {FOUNDING_COHORT.benefits.map((b) => (
            <div
              key={b.title}
              style={{
                display: "flex", gap: 14, alignItems: "flex-start",
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(241,238,226,0.10)",
                borderRadius: "var(--radius-card)", padding: "18px 20px",
              }}
            >
              <div
                style={{
                  flexShrink: 0, width: 28, height: 28, borderRadius: "50%",
                  background: "rgba(199,161,74,0.14)", border: "1px solid rgba(199,161,74,0.32)",
                  display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1,
                }}
              >
                <Check size={14} color="#C7A14A" strokeWidth={2.6} />
              </div>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", color: "#F1EEE2", margin: "0 0 4px" }}>
                  {b.title}
                </h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "#9FBFAD", margin: 0 }}>{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .cohort-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
