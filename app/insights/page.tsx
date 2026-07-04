import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INSIGHTS } from "@/lib/data";
import { getUSUniversities, getCanadianUniversities } from "@/lib/db";
import SectionHeader from "@/components/ui/SectionHeader";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import InsightGrid from "./InsightGrid";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Insights — Sophrosyne Systems",
  description:
    "Analysis on AI readiness, the enrollment cliff, accreditation, and faculty adoption. For leaders of regional and mid-sized universities.",
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
        <SectionHeader
          align="left"
          size="hero"
          eyebrow="Insights"
          title="Analysis for the institutions"
          accent="doing the hard part of higher ed."
          lead="Data-anchored perspective on AI readiness, the enrollment cliff, accreditation, and faculty adoption. Written for provosts, CFOs, and presidents of regional universities."
          maxWidth={760}
        />
      </div>
    </section>
  );
}

export default async function InsightsPage() {
  const [usInstitutions, caUniversities] = await Promise.all([getUSUniversities(), getCanadianUniversities()]);
  return (
    <>
      <InsightsHero />

      {/* Free Tools — two cards side by side */}
      <div style={{ padding: "32px var(--pad-h) 0", background: "#F4F0E6" }}>
        <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
          <div style={{ marginBottom: 18 }}>
            <Eyebrow>Free tools</Eyebrow>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="tools-grid">

          {/* AI Readiness Index */}
          <Link href="/insights/ai-readiness-index" style={{ textDecoration: "none", display: "block" }} className="ari-feature-card-link">
            <div
              className="ari-feature-card"
              style={{
                background: "#1E4D38",
                borderRadius: "var(--radius-card)",
                padding: "32px 36px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 32,
                alignItems: "center",
                boxShadow: "var(--shadow-card-lg)",
                transition: "filter 200ms",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    background: "rgba(199,161,74,0.18)",
                    border: "1px solid rgba(199,161,74,0.38)",
                    color: "#C7A14A",
                    borderRadius: 4,
                    padding: "3px 9px",
                    display: "inline-block",
                    marginBottom: 14,
                  }}
                >
                  Free Tool
                </span>
                <h2
                  style={{
                    fontSize: "clamp(18px, 2.2vw, 28px)",
                    fontWeight: 500,
                    fontFamily: "var(--font-display)",
                    color: "#F1EEE2",
                    margin: "0 0 10px",
                    letterSpacing: "-0.012em",
                    lineHeight: 1.15,
                  }}
                >
                  US AI Readiness Index
                </h2>
                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.65,
                    color: "rgba(201,217,206,0.84)",
                    margin: "0 0 20px",
                    maxWidth: 480,
                  }}
                >
                  See where the top 100 U.S. universities stand on AI implementation. Searchable by region, type, and maturity stage. Free, no login required.
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    background: "#F1EEE2",
                    color: "#1E4D38",
                    borderRadius: "var(--radius-btn)",
                    padding: "9px 18px",
                  }}
                >
                  Explore the Index <ArrowRight size={13} strokeWidth={2.5} />
                </span>
              </div>
              <div style={{ display: "flex", gap: 32, flexShrink: 0 }} className="ari-stats">
                {([{ n: `${usInstitutions.length}+`, label: "institutions\ntracked" }, { n: "5", label: "maturity\nstages" }] as { n: string; label: string }[]).map(({ n, label }) => (
                  <div key={n} style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontSize: "clamp(28px, 2.8vw, 40px)",
                        fontWeight: 500,
                        fontFamily: "var(--font-display)",
                        color: "#F1EEE2",
                        margin: "0 0 4px",
                        lineHeight: 1,
                      }}
                    >
                      {n}
                    </p>
                    <p
                      style={{
                        fontSize: 11,
                        fontFamily: "var(--font-libre-franklin), sans-serif",
                        color: "rgba(201,217,206,0.72)",
                        margin: 0,
                        whiteSpace: "pre-line",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Link>

          {/* Canadian Universities AI Readiness Index */}
          <Link href="/insights/canadian-universities" style={{ textDecoration: "none", display: "block" }} className="ca-feature-card-link">
            <div
              className="ari-feature-card ca-feature-card"
              style={{
                background: "#1B2A21",
                borderRadius: "var(--radius-card)",
                padding: "32px 36px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 32,
                alignItems: "center",
                boxShadow: "var(--shadow-card-lg)",
                transition: "filter 200ms",
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <div>
                <span style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", background: "rgba(199,161,74,0.18)", border: "1px solid rgba(199,161,74,0.38)", color: "#C7A14A", borderRadius: 4, padding: "3px 9px", display: "inline-block", marginBottom: 14 }}>
                  Free Tool · Canada
                </span>
                <h2 style={{ fontSize: "clamp(16px, 1.8vw, 24px)", fontWeight: 500, fontFamily: "var(--font-display)", color: "#F1EEE2", margin: "0 0 10px", letterSpacing: "-0.012em", lineHeight: 1.2 }}>
                  Canadian Universities AI Readiness Index
                </h2>
                <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "rgba(201,217,206,0.84)", margin: "0 0 18px", maxWidth: 360 }}>
                  Every Canadian university scored across 6 dimensions and placed on a 5-stage maturity model. Click any institution for its full profile.
                </p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", background: "#F1EEE2", color: "#1B2A21", borderRadius: "var(--radius-btn)", padding: "9px 18px" }}>
                  Explore the Index <ArrowRight size={13} strokeWidth={2.5} />
                </span>
              </div>
              <div style={{ display: "flex", gap: 24, flexShrink: 0 }} className="ari-stats">
                {([{ n: `${caUniversities.length}`, label: "universities\ntracked" }, { n: "5", label: "maturity\nstages" }, { n: "6", label: "dimensions\nscored" }] as { n: string; label: string }[]).map(({ n, label }) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "clamp(24px, 2.4vw, 36px)", fontWeight: 500, fontFamily: "var(--font-display)", color: "#F1EEE2", margin: "0 0 4px", lineHeight: 1 }}>{n}</p>
                    <p style={{ fontSize: 11, fontFamily: "var(--font-libre-franklin), sans-serif", color: "rgba(201,217,206,0.72)", margin: 0, whiteSpace: "pre-line", letterSpacing: "0.02em" }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Link>

          </div>{/* end tools-grid */}
        </div>
      </div>

      <InsightGrid articles={INSIGHTS.filter((a) => a.status === "live") as { slug: string; title: string; dek: string; category: string; readTime: string }[]} />

      <style>{`
        .ari-feature-card-link:hover .ari-feature-card { filter: brightness(1.07); }
        @media (max-width: 640px) {
          .ari-feature-card { grid-template-columns: 1fr !important; }
          .ari-stats { display: none !important; }
        }
      `}</style>
    </>
  );
}
