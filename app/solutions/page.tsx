import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import SolutionCards from "@/components/sections/SolutionCards";

export const metadata: Metadata = {
  title: "Solutions — Sophrosyne Systems",
  description:
    "The three pillars of the Sophrosyne transformation system: operational cost reduction, AI fluency for every student, and an entrepreneurial ecosystem — built for small and mid-sized universities.",
};

function SolutionsHero() {
  return (
    <section
      style={{
        padding: "140px var(--pad-h) 72px",
        background:
          "radial-gradient(ellipse 80% 60% at 20% 40%, #ECF1EC 0%, #F4F0E6 60%)",
        borderBottom: "1px solid rgba(27,42,33,0.08)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            fontFamily: "var(--font-libre-franklin), sans-serif",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#B5862E",
            margin: "0 0 18px",
          }}
        >
          Three Pillars of Transformation
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 68px)",
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: "#1B2A21",
            margin: "0 0 20px",
            letterSpacing: "-0.015em",
            maxWidth: 760,
            lineHeight: 1.06,
          }}
        >
          Three pillars. One complete campus transformation.
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.72,
            color: "#4A584E",
            maxWidth: 580,
            margin: 0,
          }}
        >
          Sophrosyne is a three-pillar transformation system for small and
          mid-sized universities — built on production software, not consulting
          decks. Each pillar works independently and compounds together: reduced
          operating costs, AI-fluent graduates, and an entrepreneurial ecosystem
          that prepares students for the world they&apos;re actually entering.
        </p>
      </div>
    </section>
  );
}

function PhilosophyStrip() {
  return (
    <section
      style={{
        padding: "64px var(--pad-h)",
        background: "#21271F",
      }}
    >
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <div
          style={{
            width: 40,
            height: 2,
            background: "#C7A14A",
            marginBottom: 28,
          }}
        />
        <p
          style={{
            fontSize: "clamp(17px, 2.2vw, 22px)",
            fontFamily: "var(--font-newsreader), serif",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#F1EEE2",
            lineHeight: 1.72,
            margin: "0 0 20px",
            letterSpacing: "-0.008em",
          }}
        >
          &ldquo;Sophrosyne is a Greek word meaning temperance, moderation, and
          balance. At Sophrosyne Systems, we fervently commit to preserving the
          power and passion of the human mind — equipping you with the skills,
          systems, and knowledge to more effectively exercise your human
          intellect while thoughtfully harnessing the utility of unprecedented
          technological tools.&rdquo;
        </p>
        <p
          style={{
            fontSize: 15,
            fontFamily: "var(--font-newsreader), serif",
            fontStyle: "italic",
            color: "#9FBFAD",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          Instead of becoming beholden to technology or, at the other extreme,
          foregoing its benefits entirely, we advocate for an approach grounded
          in sophrosyne: prudently moderating and calibrating powerful technology
          to better serve the human being at the core of your institution.
        </p>
        <p
          style={{
            marginTop: 24,
            fontSize: 11,
            fontWeight: 600,
            fontFamily: "var(--font-libre-franklin), sans-serif",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#C7A14A",
          }}
        >
          — Founding Philosophy
        </p>
      </div>
    </section>
  );
}

const MATURITY_STAGES = [
  {
    stage: "Deploy",
    number: "01",
    description:
      "Get governed AI infrastructure inside your perimeter. Most institutions start here — and many are still working to get this right.",
    solutions: ["Sophrosyne Studio", "Sophrosyne Pulse"],
    status: "Where most institutions are now",
  },
  {
    stage: "Reshape",
    number: "02",
    description:
      "Transform how students learn, faculty teach, and administrators make decisions. AI becomes embedded in daily institutional life.",
    solutions: ["AI Fluency Curriculum Matrix", "Sophrosyne Pulse"],
    status: "The next 2–3 years",
  },
  {
    stage: "Invent / Innovate",
    number: "03",
    description:
      "Students and faculty build what doesn't exist yet. Your campus becomes a node in a regional innovation economy.",
    solutions: ["On-Campus AI Foundries"],
    status: "Where the leaders are heading",
  },
];

function MaturityFramework() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#ECF1EC",
        borderTop: "1px solid rgba(27,42,33,0.06)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            fontFamily: "var(--font-libre-franklin), sans-serif",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#B5862E",
            margin: "0 0 14px",
          }}
        >
          AI Integration Maturity
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 44px)",
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: "#1B2A21",
            margin: "0 0 12px",
            letterSpacing: "-0.012em",
            maxWidth: 680,
          }}
        >
          Most institutions are stuck at Deploy. The leaders are already
          Reshaping.
        </h2>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            color: "#5A6B60",
            margin: "0 0 56px",
            maxWidth: 580,
          }}
        >
          The Sophrosyne suite is designed to move your institution along this
          arc — at the pace that works for your budget, your governance, and
          your people.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            position: "relative",
          }}
          className="maturity-grid"
        >
          {/* Progression chevrons — sit in the gaps between cards, desktop only */}
          {[0, 1].map((g) => (
            <div
              key={g}
              aria-hidden
              className="maturity-arrow"
              style={{
                position: "absolute",
                top: 50,
                left:
                  g === 0
                    ? "calc((100% - 48px) / 3 + 12px)"
                    : "calc((100% - 48px) / 3 * 2 + 36px)",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
                width: 26,
                height: 26,
                borderRadius: "50%",
                background: "#FFFFFF",
                border: "1px solid rgba(30,77,56,0.18)",
                boxShadow: "0 1px 4px rgba(27,42,33,0.10)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <ChevronRight size={14} color="#B5862E" strokeWidth={2.4} />
            </div>
          ))}

          {MATURITY_STAGES.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(27,42,33,0.10)",
                borderRadius: "var(--radius-card)",
                padding: "28px 24px",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: i === 2 ? "#1E4D38" : "rgba(30,77,56,0.08)",
                    border: `1.5px solid ${i === 2 ? "transparent" : "rgba(30,77,56,0.22)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      fontFamily: "var(--font-newsreader), serif",
                      color: i === 2 ? "#F1EEE2" : "#1E4D38",
                    }}
                  >
                    {s.number}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#8A968C",
                    background: "rgba(27,42,33,0.05)",
                    padding: "3px 8px",
                    borderRadius: 4,
                  }}
                >
                  {s.status}
                </span>
              </div>

              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                  fontFamily: "var(--font-newsreader), serif",
                  color: "#1B2A21",
                  margin: "0 0 10px",
                  letterSpacing: "-0.01em",
                }}
              >
                {s.stage}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.68,
                  color: "#4A584E",
                  margin: "0 0 20px",
                }}
              >
                {s.description}
              </p>

              <div
                style={{
                  borderTop: "1px solid rgba(27,42,33,0.08)",
                  paddingTop: 16,
                }}
              >
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#B5862E",
                    margin: "0 0 8px",
                  }}
                >
                  Solutions
                </p>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}
                >
                  {s.solutions.map((sol, j) => (
                    <span
                      key={j}
                      style={{
                        fontSize: 13,
                        fontFamily: "var(--font-newsreader), serif",
                        color: "#1E4D38",
                        fontStyle: "italic",
                      }}
                    >
                      {sol}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .maturity-grid { grid-template-columns: 1fr !important; }
          .maturity-arrow { display: none !important; }
        }
      `}</style>
    </section>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <PhilosophyStrip />
      <MaturityFramework />
      <SolutionCards />
    </>
  );
}
