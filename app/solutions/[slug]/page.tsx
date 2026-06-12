import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SOLUTIONS, SOLUTION_DETAILS, type SolutionDetail } from "@/lib/data";
import Card from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";

// Lucide icons loaded dynamically by name
import {
  Layers, Shield, Plug, GraduationCap, BookOpen, Monitor,
  Building2, Users, Network, BarChart2, FileCheck, Award,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  Layers, Shield, Plug, GraduationCap, BookOpen, Monitor,
  Building2, Users, Network, BarChart2, FileCheck, Award,
};

export async function generateStaticParams() {
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
      <SlugHero sol={sol} detail={detail} />
      <HowItWorks detail={detail} />
      <PersonaStrip detail={detail} />
      <OutcomesStrip detail={detail} />
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
            "repeating-linear-gradient(135deg, rgba(30,77,56,0.025) 0px, rgba(30,77,56,0.025) 1px, transparent 1px, transparent 12px)",
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
              fontSize: "clamp(32px, 4.5vw, 60px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
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
              fontFamily: "var(--font-newsreader), serif",
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
              — {detail.maturityStage.description}
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
              Get Started
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
                color: "#8A968C",
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
                filter: "brightness(0.88) saturate(0.8)",
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

/* ─── How It Works ───────────────────────────────────────────────────────── */
function HowItWorks({ detail }: { detail: SolutionDetail }) {
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
          How It Works
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 44px)",
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: "#1B2A21",
            margin: "0 0 56px",
            letterSpacing: "-0.012em",
          }}
        >
          Three steps to live.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            position: "relative",
          }}
          className="hiw-grid"
        >
          {/* Connector line */}
          <div
            style={{
              position: "absolute",
              top: 22,
              left: "calc(16.5% + 4px)",
              right: "calc(16.5% + 4px)",
              height: 1,
              background:
                "linear-gradient(90deg, rgba(30,77,56,0.28) 0%, rgba(199,161,74,0.35) 50%, rgba(30,77,56,0.28) 100%)",
              pointerEvents: "none",
            }}
            className="hiw-connector"
          />
          {detail.howItWorks.map((step, i) => (
            <div key={i}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#FFFFFF",
                  border: "1.5px solid rgba(30,77,56,0.28)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  position: "relative",
                  zIndex: 1,
                  boxShadow: "0 1px 4px rgba(27,42,33,0.08)",
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    fontFamily: "var(--font-newsreader), serif",
                    color: "#1E4D38",
                  }}
                >
                  {step.number}
                </span>
              </div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  fontFamily: "var(--font-newsreader), serif",
                  color: "#1B2A21",
                  margin: "0 0 10px",
                  letterSpacing: "-0.01em",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
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
        @media (max-width: 768px) {
          .hiw-grid { grid-template-columns: 1fr !important; }
          .hiw-connector { display: none; }
        }
      `}</style>
    </section>
  );
}

/* ─── Persona Strip ──────────────────────────────────────────────────────── */
function PersonaStrip({ detail }: { detail: SolutionDetail }) {
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
          Who This Is For
        </p>
        <h2
          style={{
            fontSize: "clamp(22px, 3vw, 36px)",
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: "#1B2A21",
            margin: "0 0 40px",
            letterSpacing: "-0.012em",
          }}
        >
          Identify your situation.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="persona-grid"
        >
          {detail.personas.map((p, i) => (
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
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#B5862E",
                  margin: "0 0 10px",
                }}
              >
                {p.role}
              </p>
              <div
                style={{
                  marginBottom: 16,
                  paddingBottom: 16,
                  borderBottom: "1px solid rgba(27,42,33,0.07)",
                }}
              >
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#8A968C",
                    margin: "0 0 6px",
                  }}
                >
                  The pain
                </p>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.65,
                    color: "#4A584E",
                    margin: 0,
                    fontStyle: "italic",
                    fontFamily: "var(--font-newsreader), serif",
                  }}
                >
                  &ldquo;{p.pain}&rdquo;
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#1E4D38",
                    margin: "0 0 6px",
                  }}
                >
                  What you gain
                </p>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.65,
                    color: "#1B2A21",
                    margin: 0,
                  }}
                >
                  {p.gain}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .persona-grid { grid-template-columns: 1fr !important; }
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
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 500,
                fontFamily: "var(--font-newsreader), serif",
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
            fontSize: "clamp(24px, 3.5vw, 44px)",
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
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
                    fontFamily: "var(--font-newsreader), serif",
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
            fontSize: "clamp(24px, 3.5vw, 44px)",
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: "#1B2A21",
            margin: "0 0 48px",
            letterSpacing: "-0.012em",
          }}
        >
          Built for institutions like yours.
        </h2>
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
                  fontFamily: "var(--font-newsreader), serif",
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
            fontSize: "clamp(24px, 3.5vw, 40px)",
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
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
            fontFamily: "var(--font-newsreader), serif",
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
            Get Started
          </Button>
          <Button variant="secondary" size="lg" href="mailto:hello@sophrosynesystems.com">
            Talk to a Strategist
          </Button>
        </div>
      </div>
    </section>
  );
}
