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
          "radial-gradient(ellipse 65% 55% at 75% 30%, rgba(16,185,129,0.07) 0%, transparent 65%) #0f172a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(248,250,252,0.016) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,0.016) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
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
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#10b981",
              margin: "0 0 18px",
            }}
          >
            {sol.label}
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 4.5vw, 60px)",
              fontWeight: 700,
              color: "#f8fafc",
              margin: "0 0 14px",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
            }}
          >
            {sol.title}
          </h1>
          <p
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: "rgba(248,250,252,0.5)",
              margin: "0 0 20px",
              fontStyle: "italic",
            }}
          >
            {sol.tagline}
          </p>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.72,
              color: "rgba(248,250,252,0.62)",
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
                color: "rgba(248,250,252,0.38)",
                textDecoration: "none",
                letterSpacing: "0.02em",
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
              border: "1px solid rgba(248,250,252,0.07)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
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
                  "linear-gradient(90deg, transparent, rgba(16,185,129,0.5) 50%, transparent)",
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
                filter: "brightness(0.75) saturate(0.68)",
              }}
              priority
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(10,15,26,0.5) 0%, transparent 50%)",
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
        background: "#0a0f1a",
        borderTop: "1px solid rgba(248,250,252,0.04)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#10b981",
            margin: "0 0 14px",
          }}
        >
          How It Works
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 44px)",
            fontWeight: 700,
            color: "#f8fafc",
            margin: "0 0 56px",
            letterSpacing: "-0.025em",
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
                "linear-gradient(90deg, rgba(16,185,129,0.3) 0%, rgba(16,185,129,0.1) 50%, rgba(16,185,129,0.3) 100%)",
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
                  background: "rgba(16,185,129,0.1)",
                  border: "1.5px solid rgba(16,185,129,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#10b981",
                    fontFamily: "var(--font-geist-mono), monospace",
                  }}
                >
                  {step.number}
                </span>
              </div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#f8fafc",
                  margin: "0 0 10px",
                  letterSpacing: "-0.015em",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "rgba(248,250,252,0.55)",
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

/* ─── Outcomes Strip ─────────────────────────────────────────────────────── */
function OutcomesStrip({ detail }: { detail: SolutionDetail }) {
  return (
    <section
      style={{
        padding: "48px var(--pad-h)",
        background: "#0f172a",
        borderTop: "1px solid rgba(248,250,252,0.04)",
        borderBottom: "1px solid rgba(248,250,252,0.04)",
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
              background: "rgba(16,185,129,0.05)",
              border: "1px solid rgba(16,185,129,0.15)",
              borderRadius: "var(--radius-card)",
              padding: "28px 24px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 700,
                color: "#10b981",
                margin: "0 0 6px",
                letterSpacing: "-0.04em",
                fontFamily: "var(--font-geist-mono), monospace",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {o.value}
            </p>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "rgba(248,250,252,0.45)",
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
        background: "#0a0f1a",
        borderTop: "1px solid rgba(248,250,252,0.04)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#10b981",
            margin: "0 0 14px",
          }}
        >
          What's Included
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 44px)",
            fontWeight: 700,
            color: "#f8fafc",
            margin: "0 0 48px",
            letterSpacing: "-0.025em",
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
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    <IconComp size={18} color="#10b981" strokeWidth={1.8} />
                  </div>
                )}
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#f8fafc",
                    margin: "0 0 10px",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {feat.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.68,
                    color: "rgba(248,250,252,0.55)",
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
        background: "#0f172a",
        borderTop: "1px solid rgba(248,250,252,0.04)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#10b981",
            margin: "0 0 14px",
          }}
        >
          Who Uses This
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 44px)",
            fontWeight: 700,
            color: "#f8fafc",
            margin: "0 0 48px",
            letterSpacing: "-0.025em",
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
                  background: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.18)",
                  borderRadius: 20,
                  padding: "3px 12px",
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#10b981",
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
                  fontWeight: 700,
                  color: "#f8fafc",
                  margin: "0 0 12px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.3,
                }}
              >
                {uc.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.68,
                  color: "rgba(248,250,252,0.55)",
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
        background: "#0a0f1a",
        borderTop: "1px solid rgba(248,250,252,0.04)",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#10b981",
            margin: "0 0 14px",
          }}
        >
          Common Questions
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 40px)",
            fontWeight: 700,
            color: "#f8fafc",
            margin: "0 0 40px",
            letterSpacing: "-0.025em",
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
          "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(16,185,129,0.07) 0%, transparent 70%) #0f172a",
        borderTop: "1px solid rgba(16,185,129,0.12)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(26px, 4vw, 48px)",
            fontWeight: 700,
            color: "#f8fafc",
            margin: "0 0 16px",
            letterSpacing: "-0.03em",
          }}
        >
          Ready to deploy{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #10b981 0%, #6ee7b7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {sol.title}
          </span>
          ?
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.68,
            color: "rgba(248,250,252,0.55)",
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
