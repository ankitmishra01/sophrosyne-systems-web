import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import { ROLES, SOLUTIONS } from "@/lib/data";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import CallToAction from "@/components/sections/CallToAction";

const CTA_HREF: Record<string, string> = {
  provost: "/get-started",
  cfo: "/pricing#roi",
  cio: "/solutions/curriculum",
};

export function generateStaticParams() {
  return Object.keys(ROLES).map((role) => ({ role }));
}

export async function generateMetadata({ params }: { params: Promise<{ role: string }> }): Promise<Metadata> {
  const { role } = await params;
  const r = ROLES[role];
  if (!r) return {};
  return { title: `${r.label} — Sophrosyne Systems`, description: r.sub };
}

export default async function RolePage({ params }: { params: Promise<{ role: string }> }) {
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
          padding: "180px var(--pad-h) 80px",
          background: "radial-gradient(110% 80% at 78% 0%, #ECF1EC 0%, #F4F0E6 62%)",
          borderBottom: "1px solid rgba(27,42,33,0.08)",
        }}
      >
        <div className="role-hero-grid" style={{ maxWidth: "var(--max-w)", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 420px", gap: 64, alignItems: "center" }}>
          <Reveal>
            <Eyebrow>{r.eyebrow}</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-display)", fontWeight: 600, color: "#16241B", margin: "18px 0 22px", letterSpacing: "-0.03em", lineHeight: 1.03, maxWidth: 680 }}>
              {r.headline}
            </h1>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.65, color: "#4A584E", maxWidth: 560, margin: "0 0 34px" }}>{r.sub}</p>
            <Button variant="primary" size="lg" href={CTA_HREF[role] ?? "/get-started"}>
              {r.ctaLabel} →
            </Button>
          </Reveal>
          <Reveal delay={120} className="role-hero-img" style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 32px 80px -32px rgba(27,42,33,0.3)", border: "1px solid rgba(27,42,33,0.10)", aspectRatio: "4 / 3" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={r.heroImage} alt={r.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ background: "#141F17", padding: "56px var(--pad-h)" }}>
        <div className="role-stats-grid" style={{ maxWidth: "var(--max-w)", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {r.stats.map((stat, i) => (
            <div key={i} style={{ padding: "0 40px", borderLeft: i > 0 ? "1px solid rgba(241,238,226,0.12)" : "none", display: "flex", flexDirection: "column", gap: 10 }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 2.8vw, 2.8rem)", fontWeight: 600, color: "#C7A14A", margin: 0, letterSpacing: "-0.03em", lineHeight: 1 }}>
                {stat.value}
              </p>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "rgba(241,238,226,0.7)", margin: 0, maxWidth: 240 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pressure context */}
      <Section bg="parchment" py={72}>
        <Reveal>
          <blockquote style={{ margin: 0, padding: "0 0 0 28px", borderLeft: "3px solid #C7A14A", maxWidth: 820 }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.35rem, 2vw, 1.9rem)", lineHeight: 1.35, fontWeight: 500, color: "#16241B", margin: 0, letterSpacing: "-0.02em" }}>
              {r.pressureContext}
            </p>
          </blockquote>
        </Reveal>
      </Section>

      {/* Pains vs Gains */}
      <Section bg="transparent" style={{ background: "#FFFFFF" }}>
        <div className="role-pg-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          <Reveal>
            <div style={{ marginBottom: 18 }}><Eyebrow>The reality today</Eyebrow></div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {r.pains.map((p, i) => (
                <div key={i} style={{ background: "#F9F7F2", border: "1px solid rgba(27,42,33,0.10)", borderRadius: 14, padding: "20px 22px", fontSize: 15, lineHeight: 1.6, color: "#4A584E" }}>
                  &ldquo;{p}&rdquo;
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ marginBottom: 18, color: "#1E4D38" }}>
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1E4D38" }}>With Sophrosyne</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {r.gains.map((g, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "rgba(30,77,56,0.05)", border: "1px solid rgba(30,77,56,0.16)", borderRadius: 14, padding: "20px 22px" }}>
                  <div style={{ flexShrink: 0, width: 26, height: 26, borderRadius: "50%", background: "#1E4D38", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
                    <Check size={14} color="#F1EEE2" strokeWidth={2.6} />
                  </div>
                  <span style={{ fontSize: 15, lineHeight: 1.6, color: "#16241B" }}>{g}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Pathway */}
      <Section bg="sage">
        <SectionHeader eyebrow="The engagement" align="left" title="How it works for" accent={`${r.label.split(" &")[0].toLowerCase()}.`} size="h2" />
        <div className="role-pathway-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 48, position: "relative" }}>
          {r.pathway.map((step, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#C7A14A", marginBottom: 14 }}>{step.step}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "#16241B", margin: "0 0 8px", letterSpacing: "-0.015em" }}>{step.title}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "#4A584E", margin: 0 }}>{step.body}</p>
            </Reveal>
          ))}
        </div>
        <style>{`
          @media (max-width: 900px) { .role-pathway-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 480px) { .role-pathway-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </Section>

      {/* Relevant solutions */}
      <Section bg="parchment">
        <SectionHeader eyebrow="Where to start" align="left" title="The programs built for" accent="your priorities." size="h2" />
        <div className="role-sol-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(solutions.length, 3)}, 1fr)`, gap: 20, marginTop: 40 }}>
          {solutions.map((sol, i) => (
            <Reveal key={sol.id} delay={i * 80}>
              <Link href={`/solutions/${sol.id}`} className="role-sol-card" style={{ display: "flex", flexDirection: "column", height: "100%", textDecoration: "none", background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)", borderRadius: 18, padding: "28px 26px", boxShadow: "0 1px 2px rgba(27,42,33,0.04), 0 24px 48px -32px rgba(27,42,33,0.16)", transition: "transform 200ms var(--ease), box-shadow 200ms var(--ease)" }}>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B5862E", marginBottom: 10 }}>{sol.label}</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 600, color: "#16241B", margin: "0 0 10px", letterSpacing: "-0.02em" }}>{sol.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4A584E", margin: "0 0 20px", flex: 1 }}>{sol.tagline}</p>
                <span style={{ marginTop: "auto", fontSize: 13, fontWeight: 600, color: "#1E4D38" }}>Learn more →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CallToAction />

      <style>{`
        @media (max-width: 960px) { .role-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; } .role-hero-img { display: none; } }
        @media (max-width: 820px) {
          .role-pg-grid { grid-template-columns: 1fr !important; }
          .role-sol-grid { grid-template-columns: 1fr !important; }
          .role-stats-grid { grid-template-columns: 1fr !important; }
          .role-stats-grid > div { border-left: none !important; padding: 0 !important; border-top: 1px solid rgba(241,238,226,0.12); padding-top: 24px !important; }
          .role-stats-grid > div:first-child { border-top: none; padding-top: 0 !important; }
        }
        .role-sol-card:hover { transform: translateY(-3px); box-shadow: 0 1px 2px rgba(27,42,33,0.06), 0 32px 60px -30px rgba(27,42,33,0.24) !important; }
      `}</style>
    </>
  );
}
