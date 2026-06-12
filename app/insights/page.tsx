import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INSIGHTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insights — Sophrosyne Systems",
  description:
    "Analysis on AI readiness, the enrollment cliff, accreditation, and faculty adoption — for leaders of regional and mid-sized universities.",
};

function InsightsHero() {
  return (
    <section
      style={{
        padding: "140px var(--pad-h) 56px",
        background:
          "radial-gradient(ellipse 80% 60% at 20% 35%, #ECF1EC 0%, #F4F0E6 60%)",
        borderBottom: "1px solid rgba(27,42,33,0.08)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif",
            letterSpacing: "0.18em", textTransform: "uppercase", color: "#B5862E", margin: "0 0 18px",
          }}
        >
          Insights
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 62px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif",
            color: "#1B2A21", margin: "0 0 20px", letterSpacing: "-0.015em", maxWidth: 740, lineHeight: 1.07,
          }}
        >
          Analysis for the institutions doing the hard part of higher ed.
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.72, color: "#4A584E", maxWidth: 560, margin: 0 }}>
          Data-anchored perspective on AI readiness, the enrollment cliff,
          accreditation, and faculty adoption — written for provosts, CFOs, and
          presidents of regional universities.
        </p>
      </div>
    </section>
  );
}

export default function InsightsPage() {
  return (
    <>
      <InsightsHero />
      <section style={{ padding: "var(--section-py) var(--pad-h)", background: "#F4F0E6" }}>
        <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}
            className="insights-grid"
          >
            {INSIGHTS.map((a) => {
              const live = a.status === "live";
              const inner = (
                <div
                  style={{
                    height: "100%",
                    background: "#FFFFFF",
                    border: "1px solid rgba(27,42,33,0.10)",
                    borderRadius: "var(--radius-card)",
                    padding: "30px 30px 26px",
                    boxShadow: "var(--shadow-card)",
                    opacity: live ? 1 : 0.72,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <span
                      style={{
                        fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif",
                        letterSpacing: "0.1em", textTransform: "uppercase", color: "#B5862E",
                        background: "rgba(199,161,74,0.12)", border: "1px solid rgba(181,134,46,0.28)",
                        borderRadius: 4, padding: "3px 9px",
                      }}
                    >
                      {a.category}
                    </span>
                    <span style={{ fontSize: 12, color: "#8A968C" }}>{a.readTime}</span>
                    {!live && (
                      <span style={{ fontSize: 11, fontStyle: "italic", color: "#8A968C", marginLeft: "auto", fontFamily: "var(--font-newsreader), serif" }}>
                        Coming soon
                      </span>
                    )}
                  </div>
                  <h2
                    style={{
                      fontSize: 22, fontWeight: 500, fontFamily: "var(--font-newsreader), serif",
                      color: "#1B2A21", margin: "0 0 12px", letterSpacing: "-0.012em", lineHeight: 1.2,
                    }}
                  >
                    {a.title}
                  </h2>
                  <p style={{ fontSize: 14.5, lineHeight: 1.66, color: "#4A584E", margin: "0 0 20px" }}>
                    {a.dek}
                  </p>
                  {live && (
                    <span
                      style={{
                        marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 6,
                        fontSize: 13, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif",
                        color: "#1E4D38", letterSpacing: "0.02em",
                      }}
                    >
                      Read the analysis
                      <ArrowRight size={14} strokeWidth={2.2} />
                    </span>
                  )}
                </div>
              );

              return live ? (
                <Link key={a.slug} href={`/insights/${a.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  {inner}
                </Link>
              ) : (
                <div key={a.slug}>{inner}</div>
              );
            })}
          </div>
        </div>

        <style>{`
          @media (max-width: 760px) {
            .insights-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
