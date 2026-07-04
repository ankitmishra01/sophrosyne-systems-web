import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SOLUTIONS, SOLUTION_DETAILS, type SolutionDetail } from "@/lib/data";
import Card from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import CurriculumFramework from "@/components/sections/CurriculumFramework";
import CurriculumPlatformShowcase from "@/components/sections/CurriculumPlatformShowcase";
import OpExSection from "@/components/sections/OpExSection";
import FluencyTracker from "@/components/sections/FluencyTracker";

// Lucide icons loaded dynamically by name
import {
  Layers, Shield, Plug, GraduationCap, BookOpen, Monitor,
  Building2, Users, Network, BarChart2, FileCheck, Award,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  Layers, Shield, Plug, GraduationCap, BookOpen, Monitor,
  Building2, Users, Network, BarChart2, FileCheck, Award,
};

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sol = SOLUTIONS.find((s) => s.id === slug);
  if (!sol) return {};
  return {
    title: `${sol.title} — Sophrosyne Systems`,
    description: sol.tagline,
  };
}

export default async function SolutionSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sol = SOLUTIONS.find((s) => s.id === slug);
  const detail = SOLUTION_DETAILS[slug];
  if (!sol || !detail) notFound();

  return (
    <>
      {slug === "foundry" ? (
        <FoundryHero sol={sol} detail={detail} />
      ) : (
        <SlugHero sol={sol} detail={detail} />
      )}
      <HowItWorks detail={detail} />
      {slug === "curriculum" && <CurriculumFramework />}
      {slug === "curriculum" && <CurriculumPlatformShowcase />}
      {slug === "curriculum" && <FluencyTracker />}
      <PersonaStrip detail={detail} />
      <OutcomesStrip detail={detail} />
      {slug === "opex" && <OpExSection />}
      {slug === "foundry" && <FoundryDemoDay />}
      <FeatureDetail detail={detail} />
      <UseCases detail={detail} />
      <ProductFaq detail={detail} />
      <ProductCTA sol={sol} />
    </>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────────────── */
function SlugHero({
  sol,
  detail,
}: {
  sol: (typeof SOLUTIONS)[number];
  detail: SolutionDetail;
}) {
  return (
    <section
      style={{
        padding: "140px var(--pad-h) 80px",
        background:
          "radial-gradient(ellipse 65% 55% at 75% 30%, #ECF1EC 0%, #F4F0E6 60%)",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(27,42,33,0.08)",
      }}
    >
      {/* Diagonal hatch texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "none",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="slug-hero-grid"
      >
        {/* Left */}
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
            {sol.label}
          </p>
          <h1
            style={{
              fontSize: "clamp(24px, 3.2vw, 46px)",
              fontWeight: 500,
              fontFamily: "var(--font-display)",
              color: "#1B2A21",
              margin: "0 0 14px",
              lineHeight: 1.06,
              letterSpacing: "-0.015em",
            }}
          >
            {sol.title}
          </h1>
          <p
            style={{
              fontSize: 16,
              fontWeight: 500,
              fontFamily: "var(--font-display)",
              color: "#4A584E",
              margin: "0 0 16px",
              fontStyle: "italic",
            }}
          >
            {sol.tagline}
          </p>

          {/* Maturity badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(30,77,56,0.07)",
              border: "1px solid rgba(30,77,56,0.18)",
              borderRadius: 6,
              padding: "6px 12px",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#1E4D38",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                fontFamily: "var(--font-libre-franklin), sans-serif",
                color: "#1E4D38",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {detail.maturityStage.stage}
            </span>
            <span
              style={{
                fontSize: 12,
                color: "#5A6B60",
                fontFamily: "var(--font-libre-franklin), sans-serif",
              }}
            >
              {detail.maturityStage.description}
            </span>
          </div>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.72,
              color: "#5A6B60",
              margin: "0 0 36px",
              maxWidth: 500,
            }}
          >
            {detail.heroDescription}
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" href={`/get-started?product=${sol.id}`}>
              Book an Audit
            </Button>
            <Button variant="secondary" size="lg" href="/pricing">
              See Pricing
            </Button>
          </div>
          <div style={{ marginTop: 28 }}>
            <Link
              href="/solutions"
              style={{
                fontSize: 13,
                color: "#4A584E",
                textDecoration: "none",
                letterSpacing: "0.02em",
                fontFamily: "var(--font-libre-franklin), sans-serif",
              }}
            >
              ← All Solutions
            </Link>
          </div>
        </div>

        {/* Right — image card */}
        <div>
          <div
            style={{
              borderRadius: 14,
              overflow: "hidden",
              border: "1px solid rgba(27,42,33,0.12)",
              boxShadow: "0 2px 4px rgba(27,42,33,0.06), 0 32px 72px rgba(27,42,33,0.14)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background:
                  "linear-gradient(90deg, transparent, rgba(30,77,56,0.4) 50%, transparent)",
                zIndex: 2,
              }}
            />
            <Image
              src={sol.image}
              alt={sol.imageAlt}
              width={1200}
              height={800}
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "4/3",
                objectFit: "cover",
                display: "block",
                filter: "saturate(0.96) brightness(0.95) sepia(0.08)",
              }}
              priority
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(27,42,33,0.18) 0%, transparent 50%)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .slug-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── Foundry Hero (dark variant) ───────────────────────────────────────── */
function FoundryHero({
  sol,
  detail,
}: {
  sol: (typeof SOLUTIONS)[number];
  detail: SolutionDetail;
}) {
  const commits = [
    { msg: "feat: add streaming output for LLM responses", time: "2h ago", active: true },
    { msg: "fix: async race condition in model router", time: "1d ago", active: true },
    { msg: "refactor: abstract provider interface layer", time: "3d ago", active: true },
    { msg: "docs: update README with deployment guide", time: "4d ago", active: false },
  ];

  return (
    <section
      style={{
        padding: "140px var(--pad-h) 80px",
        background: "linear-gradient(140deg, #0d1a12 0%, #182d22 45%, #21271F 100%)",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(0,0,0,0.5)",
      }}
    >
      {/* diagonal hatch */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: "none",
          pointerEvents: "none",
        }}
      />
      {/* gold radial glow top-right */}
      <div
        style={{
          position: "absolute", top: 0, right: 0,
          width: 560, height: 480,
          background: "none",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: "var(--max-w)", margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 72, alignItems: "center",
          position: "relative", zIndex: 1,
        }}
        className="slug-hero-grid"
      >
        {/* Left */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.18em", textTransform: "uppercase", color: "#C7A14A", margin: "0 0 18px" }}>
            {sol.label}
          </p>
          <h1 style={{ fontSize: "clamp(24px, 3.2vw, 46px)", fontWeight: 500, fontFamily: "var(--font-display)", color: "#F4F0E6", margin: "0 0 14px", lineHeight: 1.06, letterSpacing: "-0.015em" }}>
            {sol.title}
          </h1>
          <p style={{ fontSize: 16, fontWeight: 500, fontFamily: "var(--font-display)", color: "#9FBFAD", margin: "0 0 16px", fontStyle: "italic" }}>
            {sol.tagline}
          </p>

          {/* Maturity badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(199,161,74,0.10)", border: "1px solid rgba(199,161,74,0.24)", borderRadius: 6, padding: "6px 12px", marginBottom: 20 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C7A14A", flexShrink: 0 }} />
            <span style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", color: "#C7A14A", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {detail.maturityStage.stage}
            </span>
            <span style={{ fontSize: 12, color: "#9FBFAD", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
              Where students build what doesn&apos;t exist yet
            </span>
          </div>

          <p style={{ fontSize: 16, lineHeight: 1.72, color: "rgba(159,191,173,0.85)", margin: "0 0 36px", maxWidth: 500 }}>
            {detail.heroDescription}
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" href={`/get-started?product=${sol.id}`}>
              Book an Audit
            </Button>
            <Button variant="ghost" size="lg" href="/pricing" style={{ color: "#9FBFAD", borderColor: "rgba(159,191,173,0.28)" }}>
              See Pricing
            </Button>
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/solutions" style={{ fontSize: 13, color: "rgba(159,191,173,0.5)", textDecoration: "none", letterSpacing: "0.02em", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
              ← All Solutions
            </Link>
          </div>
        </div>

        {/* Right — GitHub portfolio mock */}
        <div>
          <div
            style={{
              borderRadius: 14, overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 4px 8px rgba(0,0,0,0.5), 0 32px 72px rgba(0,0,0,0.55)",
            }}
          >
            {/* macOS chrome */}
            <div style={{ background: "#1c2128", padding: "11px 16px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ display: "flex", gap: 6 }}>
                {(["#ff5f57", "#febc2e", "#28c840"] as const).map((c, i) => (
                  <div key={i} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
                ))}
              </div>
              <div style={{ flex: 1, background: "#0d1117", borderRadius: 6, padding: "4px 12px", fontSize: 12, color: "#6e7681", fontFamily: "monospace", letterSpacing: "0.01em" }}>
                github.com / foundry-ai-cohort-2026
              </div>
            </div>

            {/* Repo header */}
            <div style={{ background: "#0d1117", padding: "20px 22px 16px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <div>
                  <p style={{ fontSize: 12, color: "#58a6ff", margin: "0 0 3px", fontFamily: "monospace" }}>
                    foundry-ai-cohort-2026 /
                  </p>
                  <p style={{ fontSize: 16, fontWeight: 600, color: "#e6edf3", margin: "0 0 5px", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                    schedulebot-ai
                  </p>
                  <p style={{ fontSize: 12, color: "#8b949e", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                    AI-powered scheduling for campus health services
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 6, padding: "5px 12px", fontSize: 12, color: "#e6edf3", fontFamily: "var(--font-libre-franklin), sans-serif", flexShrink: 0 }}>
                  ★ 47
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, fontSize: 11, color: "#6e7681", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                <span>4 contributors</span>
                <span>·</span>
                <span>24 commits</span>
                <span>·</span>
                <span>MIT License</span>
              </div>
            </div>

            {/* Branch bar */}
            <div style={{ background: "#161b22", padding: "8px 22px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 11, color: "#8b949e", fontFamily: "var(--font-libre-franklin), sans-serif" }}>Branch:</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#e6edf3", fontFamily: "monospace", background: "rgba(255,255,255,0.06)", padding: "2px 8px", borderRadius: 4 }}>main</span>
              <span style={{ fontSize: 11, color: "#6e7681", fontFamily: "var(--font-libre-franklin), sans-serif", marginLeft: "auto" }}>2 open PRs</span>
            </div>

            {/* Commit list */}
            <div style={{ background: "#0d1117" }}>
              {commits.map((commit, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "10px 22px",
                    borderBottom: i < commits.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: commit.active ? "#3fb950" : "#484f58", flexShrink: 0 }} />
                  <p style={{ flex: 1, fontSize: 12, color: commit.active ? "#e6edf3" : "#8b949e", margin: 0, fontFamily: "monospace", lineHeight: 1.4 }}>
                    {commit.msg}
                  </p>
                  <span style={{ fontSize: 11, color: "#6e7681", fontFamily: "var(--font-libre-franklin), sans-serif", flexShrink: 0 }}>
                    {commit.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Demo Day live strip */}
            <div style={{ background: "linear-gradient(90deg, rgba(30,77,56,0.55), rgba(30,77,56,0.30))", borderTop: "1px solid rgba(159,191,173,0.18)", padding: "13px 22px", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#9FBFAD", boxShadow: "0 0 8px rgba(159,191,173,0.7)", flexShrink: 0 }} />
              <span style={{ fontSize: 12, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", color: "#9FBFAD", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Demo Day, Sept 2026
              </span>
              <span style={{ marginLeft: "auto", fontSize: 11, color: "rgba(159,191,173,0.6)", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                28 employers registered
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .slug-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── Foundry Demo Day Section ───────────────────────────────────────────── */
function FoundryDemoDay() {
  const employers = [
    {
      company: "Meridian Tech",
      role: "Junior ML Engineer",
      note: "Sourced directly from Demo Day GitHub portfolio",
      status: "Offer Extended",
      statusColor: "#C7A14A",
      statusBg: "rgba(199,161,74,0.12)",
      statusBorder: "rgba(199,161,74,0.25)",
    },
    {
      company: "Cascade Health AI",
      role: "Product Analyst, AI Systems",
      note: "First contact through inter-campus Demo Day presentation",
      status: "Interviewing",
      statusColor: "#9FBFAD",
      statusBg: "rgba(159,191,173,0.10)",
      statusBorder: "rgba(159,191,173,0.22)",
    },
    {
      company: "Northgate Analytics",
      role: "Data Engineer (New Grad)",
      note: "Discovered via GitHub repo star before Demo Day",
      status: "Offer Accepted",
      statusColor: "#3fb950",
      statusBg: "rgba(63,185,80,0.10)",
      statusBorder: "rgba(63,185,80,0.22)",
    },
  ];

  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#21271F",
        borderTop: "1px solid rgba(0,0,0,0.3)",
        borderBottom: "1px solid rgba(0,0,0,0.3)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}
          className="demoday-grid"
        >
          {/* Left */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C7A14A", margin: "0 0 16px", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
              The Recruitment Event
            </p>
            <h2 style={{ fontSize: "clamp(22px, 2.8vw, 40px)", fontWeight: 500, fontFamily: "var(--font-display)", color: "#F4F0E6", margin: "0 0 20px", letterSpacing: "-0.015em", lineHeight: 1.08 }}>
              Employers don&apos;t wait{" "}
              <em style={{ fontStyle: "italic", color: "#9FBFAD" }}>for graduation.</em>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.72, color: "rgba(159,191,173,0.80)", margin: "0 0 40px" }}>
              Every Foundry semester ends with a public Demo Day, open to consortium employers, alumni, and regional partners. Employers review GitHub portfolios before they walk in the room. The best projects enter The AI Exchange Network. Traditional CVs don&apos;t survive the comparison.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { n: "40+", l: "employer connections at program launch" },
                { n: "2×/yr", l: "inter-campus Demo Days per academic year" },
                { n: "100%", l: "IP retained by the student team" },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 18, paddingBottom: 20, borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                  <span style={{ fontSize: 28, fontWeight: 500, fontFamily: "var(--font-display)", color: "#C7A14A", letterSpacing: "-0.02em", flexShrink: 0, lineHeight: 1 }}>
                    {s.n}
                  </span>
                  <span style={{ fontSize: 13, color: "rgba(159,191,173,0.70)", fontFamily: "var(--font-libre-franklin), sans-serif", lineHeight: 1.4 }}>
                    {s.l}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: employer pipeline cards */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(159,191,173,0.50)", margin: "0 0 20px", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
              Illustrative: Foundry employer pipeline
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {employers.map((card, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 10, padding: "18px 20px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 600, color: "#e6edf3", margin: "0 0 3px", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                        {card.company}
                      </p>
                      <p style={{ fontSize: 12, color: "#9FBFAD", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                        {card.role}
                      </p>
                    </div>
                    <span style={{
                      fontSize: 9, fontWeight: 600,
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                      color: card.statusColor, background: card.statusBg,
                      border: `1px solid ${card.statusBorder}`,
                      borderRadius: 4, padding: "3px 8px",
                      letterSpacing: "0.07em", textTransform: "uppercase",
                      flexShrink: 0,
                    }}>
                      {card.status}
                    </span>
                  </div>
                  <p style={{ fontSize: 11, color: "rgba(139,148,158,0.80)", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif", fontStyle: "italic" }}>
                    {card.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .demoday-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── How It Works ───────────────────────────────────────────────────────── */
function HowItWorks({ detail }: { detail: SolutionDetail }) {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#1E4D38",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Texture */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "none", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "none", pointerEvents: "none" }} />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.18em", textTransform: "uppercase", color: "#C7A14A", margin: "0 0 16px" }}>
            How It Works
          </p>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 42px)", fontWeight: 500, fontFamily: "var(--font-display)", color: "#F1EEE2", margin: 0, letterSpacing: "-0.015em", lineHeight: 1.1 }}>
            Three steps to live.
          </h2>
        </div>

        {/* Step cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="hiw-grid">
          {detail.howItWorks.map((step, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${i === 2 ? "rgba(199,161,74,0.30)" : "rgba(199,161,74,0.12)"}`,
                borderTop: `3px solid ${i === 2 ? "#C7A14A" : "rgba(159,191,173,0.30)"}`,
                borderRadius: "var(--radius-card)",
                padding: "36px 28px 32px",
                overflow: "hidden",
              }}
            >
              {/* Watermark number */}
              <div aria-hidden style={{ position: "absolute", bottom: -20, right: 12, fontSize: 130, fontWeight: 500, fontFamily: "var(--font-display)", color: "#F1EEE2", opacity: 0, lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.04em" }}>
                {step.number}
              </div>

              {/* Step badge */}
              <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(199,161,74,0.16)", border: "1px solid rgba(199,161,74,0.28)", borderRadius: 20, padding: "4px 12px", fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", color: "#E9C77B", marginBottom: 20 }}>
                Step {step.number}
              </span>

              <h3 style={{ fontSize: "clamp(17px, 1.7vw, 21px)", fontWeight: 500, fontFamily: "var(--font-display)", color: "#F1EEE2", margin: "0 0 14px", letterSpacing: "-0.012em", lineHeight: 1.2, position: "relative", zIndex: 1 }}>
                {step.title}
              </h3>

              <p style={{ fontSize: 14, lineHeight: 1.74, color: "rgba(201,217,206,0.82)", margin: 0, position: "relative", zIndex: 1 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p style={{ textAlign: "center", marginTop: 36, fontSize: 13, fontFamily: "var(--font-display)", fontStyle: "italic", color: "rgba(199,161,74,0.60)", letterSpacing: "0.01em" }}>
          Typical time from kickoff to first live cohort: 6–8 weeks.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hiw-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── Persona Strip ──────────────────────────────────────────────────────── */
function PersonaStrip({ detail }: { detail: SolutionDetail }) {
  const accentColors = ["#C7A14A", "#2E7D52", "#4A7C9E"];
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#F4F0E6",
        borderTop: "1px solid rgba(27,42,33,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle texture */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "none", pointerEvents: "none" }} />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.18em", textTransform: "uppercase", color: "#B5862E", margin: "0 0 14px" }}>
              Who This Is For
            </p>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 500, fontFamily: "var(--font-display)", color: "#1B2A21", margin: 0, letterSpacing: "-0.015em", lineHeight: 1.1 }}>
              Identify your situation.
            </h2>
          </div>
          <p style={{ fontSize: 13, color: "#4A584E", maxWidth: 280, lineHeight: 1.6, fontFamily: "var(--font-libre-franklin), sans-serif", margin: 0, textAlign: "right" }} className="persona-subtitle">
            Every solution is built around the people who sign off, and the people who push for change.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="persona-grid">
          {detail.personas.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(27,42,33,0.09)",
                borderTop: `3px solid ${accentColors[i % accentColors.length]}`,
                borderRadius: "var(--radius-card)",
                padding: "32px 26px 28px",
                boxShadow: "0 2px 12px rgba(27,42,33,0.05), 0 1px 3px rgba(27,42,33,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              {/* Role badge */}
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 20 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: accentColors[i % accentColors.length], flexShrink: 0 }} />
                <span style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A584E" }}>
                  {p.role}
                </span>
              </span>

              {/* Pain block */}
              <div style={{ borderLeft: `3px solid rgba(180,90,60,0.22)`, paddingLeft: 14, marginBottom: 22 }}>
                <p style={{ fontSize: 10, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9B5A3D", margin: "0 0 8px" }}>
                  The challenge
                </p>
                <p style={{ fontSize: "clamp(13px, 1.3vw, 15px)", lineHeight: 1.65, color: "#3D4F45", margin: 0, fontStyle: "italic", fontFamily: "var(--font-display)" }}>
                  &ldquo;{p.pain}&rdquo;
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "rgba(27,42,33,0.07)", marginBottom: 22 }} />

              {/* Gain block */}
              <div style={{ borderLeft: `3px solid rgba(30,77,56,0.28)`, paddingLeft: 14, flex: 1 }}>
                <p style={{ fontSize: 10, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "#1E4D38", margin: "0 0 8px" }}>
                  What changes
                </p>
                <p style={{ fontSize: "clamp(13px, 1.3vw, 14px)", lineHeight: 1.7, color: "#1B2A21", margin: 0 }}>
                  {p.gain}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .persona-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
          .persona-subtitle { text-align: left !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── Outcomes Strip ─────────────────────────────────────────────────────── */
function OutcomesStrip({ detail }: { detail: SolutionDetail }) {
  return (
    <section
      style={{
        padding: "48px var(--pad-h)",
        background: "#1E4D38",
        borderTop: "1px solid rgba(27,42,33,0.08)",
        borderBottom: "1px solid rgba(27,42,33,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}
        className="outcomes-grid"
      >
        {detail.outcomes.map((o, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "var(--radius-card)",
              padding: "28px 24px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "clamp(22px, 2.6vw, 36px)",
                fontWeight: 500,
                fontFamily: "var(--font-display)",
                color: "#C7A14A",
                margin: "0 0 6px",
                letterSpacing: "-0.04em",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {o.value}
            </p>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                fontFamily: "var(--font-libre-franklin), sans-serif",
                color: "#9FBFAD",
                margin: 0,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {o.label}
            </p>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .outcomes-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── Feature Detail ─────────────────────────────────────────────────────── */
function FeatureDetail({ detail }: { detail: SolutionDetail }) {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#F4F0E6",
        borderTop: "1px solid rgba(27,42,33,0.06)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            fontFamily: "var(--font-libre-franklin), sans-serif",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#B5862E",
            margin: "0 0 14px",
          }}
        >
          What&apos;s Included
        </p>
        <h2
          style={{
            fontSize: "clamp(22px, 2.6vw, 36px)",
            fontWeight: 500,
            fontFamily: "var(--font-display)",
            color: "#1B2A21",
            margin: "0 0 48px",
            letterSpacing: "-0.012em",
          }}
        >
          Core capabilities.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="feature-grid"
        >
          {detail.features.map((feat, i) => {
            const IconComp = ICON_MAP[feat.icon];
            return (
              <Card key={i} hoverable style={{ padding: "28px 24px" }}>
                {IconComp && (
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "var(--radius-card)",
                      background: "rgba(30,77,56,0.08)",
                      border: "1px solid rgba(30,77,56,0.16)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    <IconComp size={18} color="#1E4D38" strokeWidth={1.8} />
                  </div>
                )}
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    fontFamily: "var(--font-display)",
                    color: "#1B2A21",
                    margin: "0 0 10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {feat.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.68,
                    color: "#4A584E",
                    margin: 0,
                  }}
                >
                  {feat.body}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .feature-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── Use Cases ──────────────────────────────────────────────────────────── */
function UseCases({ detail }: { detail: SolutionDetail }) {
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
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#B5862E",
            margin: "0 0 14px",
          }}
        >
          Who Uses This
        </p>
        <h2
          style={{
            fontSize: "clamp(22px, 2.6vw, 36px)",
            fontWeight: 500,
            fontFamily: "var(--font-display)",
            color: "#1B2A21",
            margin: "0 0 12px",
            letterSpacing: "-0.012em",
          }}
        >
          Built for institutions like yours.
        </h2>
        <p
          style={{
            fontSize: 13,
            fontStyle: "italic",
            fontFamily: "var(--font-display)",
            color: "#4A584E",
            margin: "0 0 40px",
          }}
        >
          Illustrative scenarios based on expected engagement outcomes.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
          }}
          className="usecase-grid"
        >
          {detail.useCases.map((uc, i) => (
            <Card key={i} hoverable style={{ padding: "32px 28px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "rgba(30,77,56,0.07)",
                  border: "1px solid rgba(30,77,56,0.16)",
                  borderRadius: 20,
                  padding: "3px 12px",
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    color: "#1E4D38",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {uc.institution}
                </span>
              </div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 500,
                  fontFamily: "var(--font-display)",
                  color: "#1B2A21",
                  margin: "0 0 12px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}
              >
                {uc.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.68,
                  color: "#4A584E",
                  margin: 0,
                }}
              >
                {uc.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .usecase-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── Product FAQ ────────────────────────────────────────────────────────── */
function ProductFaq({ detail }: { detail: SolutionDetail }) {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#F4F0E6",
        borderTop: "1px solid rgba(27,42,33,0.06)",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            fontFamily: "var(--font-libre-franklin), sans-serif",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#B5862E",
            margin: "0 0 14px",
          }}
        >
          Common Questions
        </p>
        <h2
          style={{
            fontSize: "clamp(22px, 2.6vw, 36px)",
            fontWeight: 500,
            fontFamily: "var(--font-display)",
            color: "#1B2A21",
            margin: "0 0 40px",
            letterSpacing: "-0.012em",
          }}
        >
          Frequently asked questions.
        </h2>
        <Accordion items={detail.faq} />
      </div>
    </section>
  );
}

/* ─── Bottom CTA ─────────────────────────────────────────────────────────── */
function ProductCTA({ sol }: { sol: (typeof SOLUTIONS)[number] }) {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background:
          "radial-gradient(ellipse 60% 80% at 50% 50%, #ECF1EC 0%, #F4F0E6 70%)",
        borderTop: "1px solid rgba(27,42,33,0.08)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(26px, 4vw, 48px)",
            fontWeight: 500,
            fontFamily: "var(--font-display)",
            color: "#1B2A21",
            margin: "0 0 16px",
            letterSpacing: "-0.015em",
          }}
        >
          Ready to deploy{" "}
          <em style={{ color: "#1E4D38", fontStyle: "italic" }}>
            {sol.title}
          </em>
          ?
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.68,
            color: "#4A584E",
            margin: "0 0 36px",
          }}
        >
          Every engagement begins with a no-obligation 30-minute discovery call.
          We respond within one business day.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="primary" size="lg" href={`/get-started?product=${sol.id}`}>
            Book an Audit
          </Button>
          <Button variant="secondary" size="lg" href="/pricing">
            View Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
