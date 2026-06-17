import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { ROLES, SOLUTIONS } from "@/lib/data";
import Button from "@/components/ui/Button";
import CallToAction from "@/components/sections/CallToAction";

const CTA_HREF: Record<string, string> = {
  provost: "/get-started",
  cfo: "/pricing#roi",
  cio: "/solutions/curriculum",
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
      {/* ── Hero — two-column with photo ── */}
      <section
        style={{
          padding: "120px var(--pad-h) 72px",
          background:
            "radial-gradient(ellipse 90% 70% at 75% 20%, #ECF1EC 0%, #F4F0E6 65%)",
          borderBottom: "1px solid rgba(27,42,33,0.08)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "var(--max-w)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: 64,
            alignItems: "center",
          }}
          className="role-hero-grid"
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
              {r.eyebrow}
            </p>
            <h1
              style={{
                fontSize: "clamp(26px, 3.2vw, 48px)",
                fontWeight: 500,
                fontFamily: "var(--font-newsreader), serif",
                color: "#1B2A21",
                margin: "0 0 22px",
                letterSpacing: "-0.015em",
                lineHeight: 1.08,
                maxWidth: 680,
              }}
            >
              {r.headline}
            </h1>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.72,
                color: "#4A584E",
                maxWidth: 560,
                margin: "0 0 36px",
              }}
            >
              {r.sub}
            </p>
            <Button variant="primary" size="lg" href={CTA_HREF[role] ?? "/get-started"}>
              {r.ctaLabel} →
            </Button>
          </div>

          {/* Right — hero image */}
          <div
            style={{
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(27,42,33,0.16), 0 4px 16px rgba(27,42,33,0.08)",
              border: "1px solid rgba(27,42,33,0.10)",
              aspectRatio: "4 / 3",
            }}
            className="role-hero-img"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={r.heroImage}
              alt={r.label}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            {/* Subtle green overlay tint */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(30,77,56,0.08) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Stats strip — dark ── */}
      <section style={{ background: "#21271F", padding: "48px var(--pad-h)" }}>
        <div
          style={{
            maxWidth: "var(--max-w)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
          }}
          className="role-stats-grid"
        >
          {r.stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "0 40px",
                borderLeft: i > 0 ? "1px solid rgba(241,238,226,0.10)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <p
                style={{
                  fontSize: "clamp(24px, 2.8vw, 38px)",
                  fontWeight: 500,
                  fontFamily: "var(--font-newsreader), serif",
                  color: "#C7A14A",
                  margin: 0,
                  letterSpacing: "-0.015em",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: "rgba(241,238,226,0.65)",
                  margin: 0,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  maxWidth: 240,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pressure context ── */}
      <section
        style={{
          padding: "64px var(--pad-h)",
          background: "#F4F0E6",
          borderBottom: "1px solid rgba(27,42,33,0.07)",
        }}
      >
        <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
          <blockquote
            style={{
              margin: 0,
              padding: "0 0 0 28px",
              borderLeft: "3px solid #C7A14A",
              maxWidth: 780,
            }}
          >
            <p
              style={{
                fontSize: "clamp(17px, 1.8vw, 21px)",
                lineHeight: 1.72,
                fontFamily: "var(--font-newsreader), serif",
                fontStyle: "italic",
                color: "#1B2A21",
                margin: 0,
              }}
            >
              {r.pressureContext}
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── Pains vs Gains ── */}
      <section style={{ padding: "var(--section-py) var(--pad-h)", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}
            className="role-pg-grid"
          >
            {/* Pains */}
            <div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#4A584E",
                  margin: "0 0 18px",
                }}
              >
                The reality today
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {r.pains.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#F9F7F2",
                      border: "1px solid rgba(27,42,33,0.10)",
                      borderRadius: "var(--radius-card)",
                      padding: "20px 22px",
                      boxShadow: "var(--shadow-card)",
                      fontSize: 14.5,
                      lineHeight: 1.65,
                      color: "#4A584E",
                      fontStyle: "italic",
                      fontFamily: "var(--font-newsreader), serif",
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
                  fontSize: 11,
                  fontWeight: 600,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#1E4D38",
                  margin: "0 0 18px",
                }}
              >
                With Sophrosyne
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {r.gains.map((g, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                      background: "rgba(30,77,56,0.05)",
                      border: "1px solid rgba(30,77,56,0.16)",
                      borderRadius: "var(--radius-card)",
                      padding: "20px 22px",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: "#1E4D38",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 1,
                      }}
                    >
                      <Check size={14} color="#F1EEE2" strokeWidth={2.6} />
                    </div>
                    <span style={{ fontSize: 14.5, lineHeight: 1.65, color: "#1B2A21" }}>
                      {g}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pathway ── */}
      <section
        style={{
          padding: "var(--section-py) var(--pad-h)",
          background: "#ECF1EC",
          borderTop: "1px solid rgba(27,42,33,0.07)",
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
              margin: "0 0 12px",
            }}
          >
            The Engagement
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 2.6vw, 34px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21",
              margin: "0 0 48px",
              letterSpacing: "-0.012em",
            }}
          >
            How it works for {r.label.split(" &")[0].toLowerCase()}s.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
              position: "relative",
            }}
            className="role-pathway-grid"
          >
            {/* Connector line */}
            <div
              style={{
                position: "absolute",
                top: 22,
                left: "calc(12.5% + 4px)",
                right: "calc(12.5% + 4px)",
                height: 1,
                background:
                  "linear-gradient(90deg, rgba(30,77,56,0.25) 0%, rgba(199,161,74,0.40) 50%, rgba(30,77,56,0.25) 100%)",
                pointerEvents: "none",
              }}
              className="role-pathway-connector"
            />
            {r.pathway.map((step, i) => (
              <div key={i} style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    border: "1.5px solid rgba(27,42,33,0.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "var(--font-newsreader), serif",
                      color: "#1E4D38",
                    }}
                  >
                    {step.step}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    fontFamily: "var(--font-newsreader), serif",
                    color: "#1B2A21",
                    margin: "0 0 8px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.68,
                    color: "#4A584E",
                    margin: 0,
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .role-pathway-grid { grid-template-columns: 1fr 1fr !important; }
            .role-pathway-connector { display: none; }
          }
          @media (max-width: 480px) {
            .role-pathway-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── Relevant solutions ── */}
      <section
        style={{
          padding: "var(--section-py) var(--pad-h)",
          background: "#F4F0E6",
          borderTop: "1px solid rgba(27,42,33,0.07)",
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
              margin: "0 0 12px",
            }}
          >
            Where to Start
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 36px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21",
              margin: "0 0 32px",
              letterSpacing: "-0.012em",
            }}
          >
            The programs built for your priorities.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${Math.min(solutions.length, 3)}, 1fr)`,
              gap: 20,
            }}
            className="role-sol-grid"
          >
            {solutions.map((sol) => (
              <Link
                key={sol.id}
                href={`/solutions/${sol.id}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  background: "#FFFFFF",
                  border: "1px solid rgba(27,42,33,0.10)",
                  borderRadius: "var(--radius-card)",
                  padding: "28px 26px",
                  boxShadow: "var(--shadow-card)",
                  transition: "border-color 180ms, box-shadow 180ms",
                }}
                className="role-sol-card"
              >
                <p
                  style={{
                    fontSize: 12,
                    fontStyle: "italic",
                    fontFamily: "var(--font-newsreader), serif",
                    color: "#B5862E",
                    margin: "0 0 10px",
                  }}
                >
                  {sol.label}
                </p>
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
                  {sol.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "#4A584E",
                    margin: "0 0 20px",
                    flex: 1,
                  }}
                >
                  {sol.tagline}
                </p>
                <span
                  style={{
                    marginTop: "auto",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    color: "#1E4D38",
                  }}
                >
                  Learn more <ArrowRight size={14} strokeWidth={2.2} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />

      <style>{`
        @media (max-width: 960px) {
          .role-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .role-hero-img { display: none; }
        }
        @media (max-width: 820px) {
          .role-pg-grid { grid-template-columns: 1fr !important; }
          .role-sol-grid { grid-template-columns: 1fr !important; }
          .role-stats-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .role-stats-grid > div { border-left: none !important; padding: 0 !important; border-top: 1px solid rgba(241,238,226,0.10); padding-top: 28px !important; }
          .role-stats-grid > div:first-child { border-top: none; padding-top: 0 !important; }
        }
        .role-sol-card:hover {
          border-color: rgba(30,77,56,0.24) !important;
          box-shadow: var(--shadow-card-lg) !important;
        }
      `}</style>
    </>
  );
}
