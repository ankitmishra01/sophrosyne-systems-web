import type { Metadata } from "next";
import { Info } from "lucide-react";
import { SOLUTIONS, SOLUTION_DETAILS } from "@/lib/data";
import AccreditorStrip from "@/components/sections/AccreditorStrip";

export const metadata: Metadata = {
  title: "Outcomes — Sophrosyne Systems",
  description:
    "Illustrative outcomes across the Sophrosyne platform — modeled scenarios for regional and mid-sized universities, by product.",
};

function OutcomesHero() {
  return (
    <section
      style={{
        padding: "140px var(--pad-h) 48px",
        background:
          "radial-gradient(ellipse 80% 60% at 75% 30%, #ECF1EC 0%, #F4F0E6 60%)",
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
          Outcomes
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 62px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif",
            color: "#1B2A21", margin: "0 0 20px", letterSpacing: "-0.015em", maxWidth: 760, lineHeight: 1.07,
          }}
        >
          What transformation looks like, by the people who feel it.
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.72, color: "#4A584E", maxWidth: 580, margin: "0 0 28px" }}>
          Outcomes mapped to the roles that own them — CFOs, provosts, IR
          directors, presidents — across all four pillars of the platform.
        </p>

        {/* Honesty banner */}
        <div
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "rgba(199,161,74,0.10)", border: "1px solid rgba(181,134,46,0.28)",
            borderRadius: "var(--radius-card)", padding: "12px 16px", maxWidth: 640,
          }}
        >
          <Info size={16} color="#B5862E" strokeWidth={2} style={{ flexShrink: 0 }} />
          <span style={{ fontSize: 13, color: "#5A6B60", lineHeight: 1.5 }}>
            These are <strong style={{ color: "#1B2A21" }}>illustrative models</strong>, not
            named clients — published while we build verified results with our Founding Cohort.
          </span>
        </div>
      </div>
    </section>
  );
}

export default function OutcomesPage() {
  return (
    <>
      <OutcomesHero />

      {SOLUTIONS.map((sol, idx) => {
        const detail = SOLUTION_DETAILS[sol.id];
        if (!detail) return null;
        const bg = idx % 2 === 0 ? "#F4F0E6" : "#ECF1EC";
        return (
          <section
            key={sol.id}
            style={{
              padding: "var(--section-py) var(--pad-h)",
              background: bg,
              borderTop: "1px solid rgba(27,42,33,0.07)",
            }}
          >
            <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
              <p
                style={{
                  fontSize: 12, fontStyle: "italic", fontFamily: "var(--font-newsreader), serif",
                  color: "#B5862E", margin: "0 0 8px",
                }}
              >
                {sol.label}
              </p>
              <h2
                style={{
                  fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif",
                  color: "#1B2A21", margin: "0 0 32px", letterSpacing: "-0.012em",
                }}
              >
                {sol.title}
              </h2>

              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
                className="outcomes-grid"
              >
                {detail.useCases.map((uc, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)",
                      borderRadius: "var(--radius-card)", padding: "26px 26px", boxShadow: "var(--shadow-card)",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex", alignItems: "center", background: "rgba(30,77,56,0.07)",
                        border: "1px solid rgba(30,77,56,0.16)", borderRadius: 20, padding: "3px 12px", marginBottom: 14,
                      }}
                    >
                      <span style={{ fontSize: 10, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", color: "#1E4D38", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        {uc.institution}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontSize: 17, fontWeight: 500, fontFamily: "var(--font-newsreader), serif",
                        color: "#1B2A21", margin: "0 0 10px", letterSpacing: "-0.01em", lineHeight: 1.3,
                      }}
                    >
                      {uc.title}
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: 1.66, color: "#4A584E", margin: 0 }}>{uc.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <style>{`
              @media (max-width: 760px) {
                .outcomes-grid { grid-template-columns: 1fr !important; }
              }
            `}</style>
          </section>
        );
      })}

      <AccreditorStrip background="#21271F" reversed />
    </>
  );
}
