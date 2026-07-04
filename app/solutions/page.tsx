import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, TrendingDown, Shield } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Eyebrow from "@/components/ui/Eyebrow";
import DisplayHeading from "@/components/ui/DisplayHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import SolutionCards from "@/components/sections/SolutionCards";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Solutions — Sophrosyne Systems",
  description:
    "Three pillars: AI Fluency Programme, Operational Efficiency advisory, and AI Foundry, delivered by expert teams to private universities ready to move.",
};

const CARD_STYLE = {
  background: "#FFFFFF",
  border: "1px solid rgba(27,42,33,0.10)",
  borderRadius: 18,
  boxShadow: "0 1px 2px rgba(27,42,33,0.04), 0 24px 48px -32px rgba(27,42,33,0.16)",
} as const;

const HERO_PILLARS = [
  { number: "01", name: "Operational Efficiency", tagline: "Savings that fund the work", href: "/solutions/opex" },
  { number: "02", name: "AI Fluency Programme", tagline: "Students who graduate job-ready", href: "/solutions/curriculum" },
  { number: "03", name: "AI Foundry", tagline: "Students who build, not just learn", href: "/solutions/foundry" },
];

function SolutionsHero() {
  return (
    <Section
      bg="parchment"
      style={{ padding: "clamp(120px, 15vw, 156px) var(--pad-h) var(--section-py)" }}
    >
      <div
        className="solutions-hero-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
      >
        {/* Left — text */}
        <div>
          <Eyebrow>Three Pillars of Transformation</Eyebrow>
          <DisplayHeading as="h1" size="hero" accent="One complete campus transformation." style={{ margin: "20px 0 0" }}>
            Three pillars.
          </DisplayHeading>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#4A584E", maxWidth: 520, margin: "22px 0 0" }}>
            Sophrosyne is a three-part consulting programme for universities ready to move. Each part is delivered by an
            expert team, not handed off as a software tool. Each part stands alone and builds on the others: AI skills
            that make graduates employable, savings that fund the work, and a campus that students choose.
          </p>
        </div>

        {/* Right — programme overview card */}
        <Reveal delay={120}>
          <div style={{ ...CARD_STYLE, overflow: "hidden" }}>
            <div style={{ padding: "18px 24px", borderBottom: "1px solid rgba(27,42,33,0.08)" }}>
              <Eyebrow>Programme Overview</Eyebrow>
            </div>
            {HERO_PILLARS.map((pillar, i) => (
              <Link key={pillar.number} href={pillar.href} className="pillar-row" style={{ display: "block", textDecoration: "none" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "20px 24px",
                    borderBottom: i < HERO_PILLARS.length - 1 ? "1px solid rgba(27,42,33,0.07)" : "none",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#C7A14A", lineHeight: 1, fontVariantNumeric: "tabular-nums", flexShrink: 0 }}>
                    {pillar.number}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 600, color: "#16241B", letterSpacing: "-0.01em" }}>
                      {pillar.name}
                    </div>
                    <div style={{ fontSize: 13.5, color: "#5A6B60", marginTop: 3 }}>{pillar.tagline}</div>
                  </div>
                  <span className="pillar-row-arrow" style={{ fontSize: 15, color: "#1E4D38" }}>→</span>
                </div>
              </Link>
            ))}
            <div style={{ padding: "16px 24px", background: "#F4F0E6", borderTop: "1px solid rgba(27,42,33,0.07)" }}>
              <p style={{ fontSize: 13, color: "#5A6B60", margin: 0 }}>
                Each pillar stands alone. All three compound together.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .pillar-row { transition: background 180ms var(--ease); }
        .pillar-row:hover { background: rgba(30,77,56,0.03); }
        .pillar-row:hover .pillar-row-arrow { transform: translateX(3px); }
        .pillar-row-arrow { display: inline-block; transition: transform 180ms var(--ease); }
        @media (max-width: 900px) { .solutions-hero-grid { grid-template-columns: 1fr !important; gap: 44px !important; } }
      `}</style>
    </Section>
  );
}

function PhilosophyStrip() {
  return (
    <Section bg="ink" size={860}>
      <Reveal>
        <Eyebrow dark>Founding Philosophy</Eyebrow>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(22px, 2.6vw, 30px)",
            fontWeight: 600,
            color: "#F1EEE2",
            lineHeight: 1.35,
            letterSpacing: "-0.02em",
            margin: "24px 0 0",
            textWrap: "balance",
          }}
        >
          Sophrosyne is a Greek word for balance. We believe technology should{" "}
          <span style={{ color: "#C7A14A" }}>sharpen the human mind, not replace it.</span> Our programmes are built
          around that idea: give people the skills to use AI well, and step back.
        </p>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-on-dark-mid)", margin: "22px 0 0", maxWidth: 640 }}>
          We do not ask institutions to avoid AI or to hand decisions over to it. We help them find the right balance:
          use it where it helps, and stay in control.
        </p>
      </Reveal>
    </Section>
  );
}

const MATURITY_STAGES = [
  {
    stage: "Efficiency",
    number: "01",
    description:
      "Identify and implement savings across nine operational domains. A senior finance lead and graduate analyst model the opportunity, build the board case, and support implementation. Pillar I funds Pillars II and III.",
    solutions: ["Operational Efficiency"],
    status: "Funds the other two pillars",
  },
  {
    stage: "Competency",
    number: "02",
    description:
      "Move students from AI awareness to real competency. One AI course per semester, delivered by a senior advisor and practitioner, embedded in your existing degree structures.",
    solutions: ["AI Fluency Programme"],
    status: "The foundation. Most institutions haven't started.",
  },
  {
    stage: "Innovation",
    number: "03",
    description:
      "Students build real products and publish them to GitHub. Every sector is hiring AI builders, and a public portfolio proves capability across all of them. Your campus becomes a place where the best applicants want to be.",
    solutions: ["AI Foundry"],
    status: "Where the leaders are heading",
  },
];

function MaturityFramework() {
  return (
    <Section bg="sage">
      <SectionHeader
        eyebrow="AI Integration Maturity"
        align="left"
        title="Most institutions are stuck at Deploy."
        accent="The leaders are already Reshaping."
        lead="The Sophrosyne programme moves your institution along this arc. At the pace that works for your budget, your governance, and your people."
      />

      <div className="maturity-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 56 }}>
        {MATURITY_STAGES.map((s, i) => (
          <Reveal key={s.stage} delay={i * 90}>
            <div style={{ ...CARD_STYLE, height: "100%", display: "flex", flexDirection: "column", padding: "30px 28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "#C7A14A", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
                  {s.number}
                </span>
                <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5A6B60", background: "rgba(27,42,33,0.05)", padding: "4px 9px", borderRadius: 999 }}>
                  {s.status}
                </span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "#16241B", letterSpacing: "-0.02em", margin: "0 0 12px" }}>
                {s.stage}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.68, color: "#4A584E", margin: "0 0 20px", flex: 1 }}>{s.description}</p>
              <div style={{ borderTop: "1px solid rgba(27,42,33,0.08)", paddingTop: 16 }}>
                <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B5862E", marginBottom: 8 }}>Solutions</div>
                {s.solutions.map((sol) => (
                  <div key={sol} style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "#1E4D38", letterSpacing: "-0.01em" }}>{sol}</div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <style>{`@media (max-width: 768px) { .maturity-grid { grid-template-columns: 1fr !important; } }`}</style>
    </Section>
  );
}

const PERSONAS = [
  {
    role: "Vice-Chancellor / Provost",
    href: "/for/provost",
    Icon: GraduationCap,
    heading: "Graduate outcomes that open doors, not just credentials that check boxes.",
    body: "Your institution's reputation is built on what students do after they leave. Sophrosyne gives them verifiable AI skills and a GitHub portfolio to prove it, before they graduate.",
    wins: [
      "AI Fluency portfolios every industry can read: banking, tech, insurance, healthcare",
      "Demo Day showcases what your students built, open to alumni and regional industry",
      "Programme embedded in your existing degree structure, no new courses required",
    ],
  },
  {
    role: "Chief Financial Officer",
    href: "/for/cfo",
    Icon: TrendingDown,
    heading: "The savings model is built before you commit a budget line.",
    body: "Our Operational Efficiency advisory identifies savings across nine domains and builds the board case first. The program typically funds itself within the engagement year.",
    wins: [
      "No upfront commitment. Opportunity modeled before you decide.",
      "Board-ready financial case and implementation roadmap included",
      "Engagements typically identify $200K–$400K in operational savings",
    ],
  },
  {
    role: "Chief Information Officer",
    href: "/for/cio",
    Icon: Shield,
    heading: "Canvas. Banner. Slate. One week to integrate. No lock-in.",
    body: "We handle the integration scoping, FERPA exposure mapping, and data governance layer. Not your IT team. Your existing stack stays. No new software vendor to manage.",
    wins: [
      "Canvas, Banner, and Slate integration scoped and executed by our team, not added to your IT backlog",
      "FERPA exposure documented before any AI tool touches student or faculty data",
      "All data stays in your own systems. Nothing trains on your records",
    ],
  },
];

function WhoItsFor() {
  return (
    <Section bg="parchment">
      <SectionHeader
        eyebrow="Built For"
        align="left"
        title="Provosts, CFOs, and CIOs each get"
        accent="a measurable outcome in one engagement."
        lead="Three people typically make this decision: the academic leader, the finance lead, and the technology head. Here is what each one gets."
      />

      <div className="persona-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 52 }}>
        {PERSONAS.map((p, i) => (
          <Reveal key={p.role} delay={i * 90}>
            <Link href={p.href} className="persona-card" style={{ ...CARD_STYLE, display: "flex", flexDirection: "column", textDecoration: "none", height: "100%", padding: "30px 28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
                <span style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(30,77,56,0.08)", border: "1px solid rgba(30,77,56,0.16)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <p.Icon size={19} color="#1E4D38" strokeWidth={1.7} />
                </span>
                <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5A6B60" }}>{p.role}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 600, color: "#16241B", letterSpacing: "-0.02em", lineHeight: 1.25, margin: "0 0 12px" }}>
                {p.heading}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.68, color: "#4A584E", margin: "0 0 22px" }}>{p.body}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
                {p.wins.map((w) => (
                  <li key={w} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "#4A584E", lineHeight: 1.55 }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#C7A14A", flexShrink: 0, marginTop: 7 }} />
                    {w}
                  </li>
                ))}
              </ul>
              <span className="persona-link" style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid rgba(27,42,33,0.08)", fontSize: 13, fontWeight: 600, color: "#1E4D38" }}>
                How Sophrosyne helps you →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} style={{ marginTop: 28 }}>
        <div style={{ ...CARD_STYLE, display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap", padding: "24px 28px" }}>
          <span style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(30,77,56,0.08)", border: "1px solid rgba(30,77,56,0.16)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Shield size={16} color="#1E4D38" strokeWidth={1.8} />
          </span>
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#4A584E", margin: 0, flex: 1, minWidth: 280 }}>
            No multi-year contracts. No platform lock-in. All data stays in your own systems.{" "}
            <strong style={{ color: "#16241B", fontWeight: 600 }}>
              After the two-week audit you leave with the full board report. The audit is the only commitment. Everything after is your choice.
            </strong>
          </p>
        </div>
      </Reveal>

      <style>{`
        .persona-card { transition: transform 200ms var(--ease), box-shadow 200ms var(--ease); }
        .persona-card:hover { transform: translateY(-3px); box-shadow: 0 1px 2px rgba(27,42,33,0.06), 0 32px 60px -30px rgba(27,42,33,0.24); }
        .persona-card:hover .persona-link { opacity: 0.75; }
        @media (max-width: 900px) { .persona-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </Section>
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
