import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { ROLES, SOLUTIONS } from "@/lib/data";
import Button from "@/components/ui/Button";
import CallToAction from "@/components/sections/CallToAction";

const CTA_HREF: Record<string, string> = {
  provost: "/get-started",
  cfo: "/roi",
  cio: "/solutions/studio",
};

export function generateStaticParams() {
  return Object.keys(ROLES).map((role) => ({ role }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ role: string }>;
}): Promise<Metadata> {
  const { role } = await params;
  const r = ROLES[role];
  if (!r) return {};
  return { title: `${r.label} — Sophrosyne Systems`, description: r.sub };
}

export default async function RolePage({
  params,
}: {
  params: Promise<{ role: string }>;
}) {
  const { role } = await params;
  const r = ROLES[role];
  if (!r) notFound();

  const solutions = r.solutions
    .map((id) => SOLUTIONS.find((s) => s.id === id))
    .filter((s): s is (typeof SOLUTIONS)[number] => Boolean(s));

  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "140px var(--pad-h) 64px",
          background:
            "radial-gradient(ellipse 80% 60% at 80% 25%, #ECF1EC 0%, #F4F0E6 60%)",
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
            {r.eyebrow}
          </p>
          <h1
            style={{
              fontSize: "clamp(30px, 4.6vw, 58px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21", margin: "0 0 20px", letterSpacing: "-0.015em", maxWidth: 800, lineHeight: 1.08,
            }}
          >
            {r.headline}
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.72, color: "#4A584E", maxWidth: 600, margin: "0 0 32px" }}>
            {r.sub}
          </p>
          <Button variant="primary" size="lg" href={CTA_HREF[role] ?? "/get-started"}>
            {r.ctaLabel} →
          </Button>
        </div>
      </section>

      {/* Pains vs gains */}
      <section style={{ padding: "var(--section-py) var(--pad-h)", background: "#F4F0E6" }}>
        <div
          style={{ maxWidth: "var(--max-w)", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          className="role-grid"
        >
          {/* Pains */}
          <div>
            <p
              style={{
                fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif",
                letterSpacing: "0.14em", textTransform: "uppercase", color: "#6E7B71", margin: "0 0 18px",
              }}
            >
              The reality today
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {r.pains.map((p, i) => (
                <div
                  key={i}
                  style={{
                    background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)", borderRadius: "var(--radius-card)",
                    padding: "20px 22px", boxShadow: "var(--shadow-card)", fontSize: 14.5, lineHeight: 1.6, color: "#4A584E",
                    fontStyle: "italic", fontFamily: "var(--font-newsreader), serif",
                  }}
                >
                  &ldquo;{p}&rdquo;
                </div>
              ))}
            </div>
          </div>

          {/* Gains */}
          <div>
            <p
              style={{
                fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif",
                letterSpacing: "0.14em", textTransform: "uppercase", color: "#1E4D38", margin: "0 0 18px",
              }}
            >
              With Sophrosyne
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {r.gains.map((g, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex", gap: 13, alignItems: "flex-start",
                    background: "rgba(30,77,56,0.05)", border: "1px solid rgba(30,77,56,0.16)",
                    borderRadius: "var(--radius-card)", padding: "20px 22px",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0, width: 26, height: 26, borderRadius: "50%", background: "#1E4D38",
                      display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1,
                    }}
                  >
                    <Check size={14} color="#F1EEE2" strokeWidth={2.6} />
                  </div>
                  <span style={{ fontSize: 14.5, lineHeight: 1.6, color: "#1B2A21" }}>{g}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Relevant solutions */}
      <section style={{ padding: "var(--section-py) var(--pad-h)", background: "#ECF1EC", borderTop: "1px solid rgba(27,42,33,0.07)" }}>
        <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21", margin: "0 0 32px", letterSpacing: "-0.012em",
            }}
          >
            Where to start.
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(solutions.length, 3)}, 1fr)`, gap: 20 }}
            className="role-sol-grid"
          >
            {solutions.map((sol) => (
              <Link
                key={sol.id}
                href={`/solutions/${sol.id}`}
                style={{
                  display: "flex", flexDirection: "column", textDecoration: "none",
                  background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)", borderRadius: "var(--radius-card)",
                  padding: "26px 26px", boxShadow: "var(--shadow-card)",
                }}
              >
                <p style={{ fontSize: 12, fontStyle: "italic", fontFamily: "var(--font-newsreader), serif", color: "#B5862E", margin: "0 0 10px" }}>
                  {sol.label}
                </p>
                <h3 style={{ fontSize: 20, fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: "#1B2A21", margin: "0 0 10px", letterSpacing: "-0.01em" }}>
                  {sol.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4A584E", margin: "0 0 18px" }}>{sol.tagline}</p>
                <span style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", color: "#1E4D38" }}>
                  Learn more <ArrowRight size={14} strokeWidth={2.2} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />

      <style>{`
        @media (max-width: 820px) {
          .role-grid { grid-template-columns: 1fr !important; }
          .role-sol-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
