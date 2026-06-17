import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, GraduationCap, TrendingDown, Shield } from "lucide-react";
import SolutionCards from "@/components/sections/SolutionCards";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Solutions — Sophrosyne Systems",
  description:
    "Three pillars: AI Fluency Programme, Operational Efficiency advisory, and AI Foundry — delivered by expert teams to private universities ready to move.",
};

const HERO_PILLARS = [
  {
    number: "01",
    name: "AI Fluency Programme",
    tagline: "Students who graduate job-ready",
    href: "/solutions/curriculum",
  },
  {
    number: "02",
    name: "Operational Efficiency",
    tagline: "Savings that fund the work",
    href: "/solutions/opex",
  },
  {
    number: "03",
    name: "AI Foundry",
    tagline: "Students who build, not just learn",
    href: "/solutions/foundry",
  },
];

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
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "center",
        }}
        className="solutions-hero-grid"
      >
        {/* Left — text */}
        <div>
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
              fontSize: "clamp(26px, 3.6vw, 50px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21",
              margin: "0 0 20px",
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
            }}
          >
            Three pillars. One complete campus transformation.
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.72,
              color: "#4A584E",
              maxWidth: 520,
              margin: 0,
            }}
          >
            Sophrosyne is a three-pillar consulting program for private
            universities ready to move — each pillar delivered by an expert team,
            not handed off as a self-serve toolkit. Each pillar works independently
            and compounds together: AI competency that makes graduates employable,
            operational savings that fund the work, and an innovation culture that
            makes your institution worth choosing.
          </p>
        </div>

        {/* Right — program overview card */}
        <div>
          <div
            style={{
              background: "#141F17",
              border: "1px solid rgba(199,161,74,0.20)",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 24px 64px rgba(27,42,33,0.22)",
            }}
          >
            {/* Card header */}
            <div
              style={{
                padding: "16px 24px",
                background: "#0d1510",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(199,161,74,0.70)",
                  margin: 0,
                }}
              >
                Programme Overview
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#9FBFAD",
                    boxShadow: "0 0 6px rgba(159,191,173,0.55)",
                  }}
                />
                <span
                  style={{
                    fontSize: 10,
                    color: "#9FBFAD",
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    letterSpacing: "0.06em",
                  }}
                >
                  Active
                </span>
              </div>
            </div>

            {/* Pillar rows */}
            {HERO_PILLARS.map((pillar, i) => (
              <Link
                key={pillar.number}
                href={pillar.href}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "18px 24px",
                    borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    transition: "background 180ms",
                  }}
                  className="pillar-row"
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "rgba(30,77,56,0.50)",
                      border: "1px solid rgba(159,191,173,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 400,
                        fontFamily: "var(--font-newsreader), serif",
                        color: "#9FBFAD",
                      }}
                    >
                      {pillar.number}
                    </span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        fontFamily: "var(--font-newsreader), serif",
                        color: "#F1EEE2",
                        margin: "0 0 3px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {pillar.name}
                    </p>
                    <p
                      style={{
                        fontSize: 12,
                        color: "rgba(241,238,226,0.80)",
                        margin: 0,
                        fontFamily: "var(--font-libre-franklin), sans-serif",
                      }}
                    >
                      {pillar.tagline}
                    </p>
                  </div>
                  <ChevronRight size={14} color="rgba(199,161,74,0.55)" strokeWidth={2} />
                </div>
              </Link>
            ))}

            {/* Footer note */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.05)",
                padding: "14px 24px",
                background: "rgba(199,161,74,0.04)",
              }}
            >
              <p
                style={{
                  fontSize: 11.5,
                  fontStyle: "italic",
                  fontFamily: "var(--font-newsreader), serif",
                  color: "rgba(199,161,74,0.75)",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Each pillar stands alone. All three compound together.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .solutions-hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        .pillar-row:hover { background: rgba(255,255,255,0.03); }
      `}</style>
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
    stage: "Competency",
    number: "01",
    description:
      "Move students from AI awareness to applied competency. One AI course per semester, delivered by a senior advisor, curriculum specialist, and practitioner — embedded in your existing degree structures.",
    solutions: ["AI Fluency Programme"],
    status: "The foundation — most institutions haven't started",
  },
  {
    stage: "Efficiency",
    number: "02",
    description:
      "Identify and implement savings across nine operational domains. A senior finance lead and graduate analyst model the opportunity, build the board case, and support implementation.",
    solutions: ["Operational Efficiency"],
    status: "Funds the other two pillars",
  },
  {
    stage: "Innovation",
    number: "03",
    description:
      "Students build real products and publish them to GitHub. Every sector is hiring AI builders — and a public portfolio proves capability across all of them. Your campus becomes a place where the best applicants want to be.",
    solutions: ["AI Foundry"],
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
            fontSize: "clamp(22px, 2.6vw, 36px)",
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
                    color: "#4A584E",
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

const PERSONAS = [
  {
    role: "Vice-Chancellor / Provost",
    href: "/for/provost",
    Icon: GraduationCap,
    heading: "Graduate outcomes that open doors — not just credentials that check boxes.",
    body: "Your institution's reputation is built on what students do after they leave. Sophrosyne gives them verifiable, employer-legible AI competency — and a GitHub portfolio to prove it — before they graduate.",
    wins: [
      "AI Fluency portfolios every industry can evaluate — banking, tech, insurance, healthcare",
      "Demo Day showcases what your students actually built — open to alumni and regional industry",
      "Programme embedded in your existing degree structure — no new courses required",
    ],
    accent: "#1E4D38",
  },
  {
    role: "Chief Financial Officer",
    href: "/for/cfo",
    Icon: TrendingDown,
    heading: "The savings model is built before you commit a budget line.",
    body: "Our Operational Efficiency advisory identifies savings across nine domains and builds the board case first. The program typically funds itself within the engagement year.",
    wins: [
      "No upfront commitment — opportunity modeled before you decide",
      "Board-ready financial case and implementation roadmap included",
      "Engagements typically identify $200K–$400K in operational savings",
    ],
    accent: "#C7A14A",
  },
  {
    role: "Chief Information Officer",
    href: "/for/cio",
    Icon: Shield,
    heading: "AI governance and integration — without the tool sprawl.",
    body: "We're not a software vendor. We build the frameworks, usage policies, and staff capability your institution needs to adopt AI responsibly and sustain it long after we leave.",
    wins: [
      "Governance and usage policy frameworks included as standard",
      "No new software mandated — designed to work with your existing stack",
      "Staff capability built in-house, not handed off to IT as a backlog",
    ],
    accent: "#6E9B85",
  },
];

function WhoItsFor() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#FFFFFF",
        borderTop: "1px solid rgba(27,42,33,0.07)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 52 }}>
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
            Built For
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 2.6vw, 36px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21",
              margin: "0 0 14px",
              letterSpacing: "-0.012em",
              lineHeight: 1.1,
              maxWidth: 560,
            }}
          >
            Different roles. One shared outcome.
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.72,
              color: "#5A6B60",
              maxWidth: 560,
              margin: 0,
            }}
          >
            The buying committee for a Sophrosyne engagement is typically three
            people: the academic leader, the financial decision-maker, and the
            technology steward. Here is what each one walks away with.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
          className="persona-grid"
        >
          {PERSONAS.map((p) => (
            <Link
              key={p.role}
              href={p.href}
              className="persona-card"
              style={{
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                background: "#FAFDF9",
                border: "1px solid rgba(27,42,33,0.10)",
                borderRadius: "var(--radius-card)",
                overflow: "hidden",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* Accent top bar */}
              <div
                className="persona-bar"
                style={{
                  height: 3,
                  background: `linear-gradient(90deg, ${p.accent} 0%, ${p.accent}55 100%)`,
                  width: "32%",
                  transition: "width 340ms cubic-bezier(0.22,1,0.36,1)",
                }}
              />

              <div style={{ padding: "28px 26px 26px", display: "flex", flexDirection: "column", flex: 1 }}>
                {/* Icon + role */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: `${p.accent}12`,
                      border: `1px solid ${p.accent}28`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <p.Icon size={19} color={p.accent} strokeWidth={1.7} />
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                      letterSpacing: "0.10em",
                      textTransform: "uppercase",
                      color: "#4A584E",
                    }}
                  >
                    {p.role}
                  </span>
                </div>

                {/* Heading */}
                <h3
                  style={{
                    fontSize: "clamp(17px, 1.6vw, 21px)",
                    fontWeight: 500,
                    fontFamily: "var(--font-newsreader), serif",
                    color: "#1B2A21",
                    margin: "0 0 12px",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.25,
                  }}
                >
                  {p.heading}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.68,
                    color: "#4A584E",
                    margin: "0 0 22px",
                  }}
                >
                  {p.body}
                </p>

                {/* Wins */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 9,
                  }}
                >
                  {p.wins.map((w, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 9,
                        fontSize: 13,
                        color: "#4A584E",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: p.accent,
                          flexShrink: 0,
                          marginTop: 6,
                        }}
                      />
                      {w}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <div
                  style={{
                    marginTop: 24,
                    paddingTop: 18,
                    borderTop: "1px solid rgba(27,42,33,0.07)",
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    fontSize: 12,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    color: p.accent,
                    letterSpacing: "0.03em",
                  }}
                >
                  How Sophrosyne helps you
                  <ChevronRight size={13} strokeWidth={2.4} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .persona-card {
          transition: transform 220ms cubic-bezier(0.22,1,0.36,1),
                      box-shadow 220ms,
                      border-color 220ms;
        }
        .persona-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(27,42,33,0.12);
          border-color: rgba(30,77,56,0.24);
        }
        .persona-card:hover .persona-bar {
          width: 100% !important;
        }
        @media (max-width: 900px) {
          .persona-grid { grid-template-columns: 1fr !important; }
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
      <WhoItsFor />
      <SolutionCards />
      <CallToAction />
    </>
  );
}
