import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { INSIGHT_ARTICLES } from "@/lib/data";
import CallToAction from "@/components/sections/CallToAction";

export function generateStaticParams() {
  return Object.keys(INSIGHT_ARTICLES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = INSIGHT_ARTICLES[slug];
  if (!a) return {};
  return { title: `${a.title} — Sophrosyne Systems`, description: a.dek };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = INSIGHT_ARTICLES[slug];
  if (!a) notFound();

  return (
    <>
      <article
        style={{
          padding: "140px var(--pad-h) 0",
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, #ECF1EC 0%, #F4F0E6 55%)",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Link
            href="/insights"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6E7B71",
              textDecoration: "none", fontFamily: "var(--font-libre-franklin), sans-serif", marginBottom: 28,
            }}
          >
            <ArrowLeft size={14} strokeWidth={2.2} /> All insights
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <span
              style={{
                fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif",
                letterSpacing: "0.1em", textTransform: "uppercase", color: "#B5862E",
                background: "rgba(199,161,74,0.12)", border: "1px solid rgba(181,134,46,0.28)",
                borderRadius: 4, padding: "3px 9px",
              }}
            >
              {a.category}
            </span>
            <span style={{ fontSize: 12, color: "#6E7B71" }}>{a.readTime}</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(30px, 4.6vw, 56px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21", margin: "0 0 20px", letterSpacing: "-0.015em", lineHeight: 1.08,
            }}
          >
            {a.title}
          </h1>
          <p
            style={{
              fontSize: 19, lineHeight: 1.6, color: "#4A584E", margin: "0 0 12px",
              fontFamily: "var(--font-newsreader), serif", fontStyle: "italic",
            }}
          >
            {a.dek}
          </p>
        </div>
      </article>

      <div style={{ background: "#F4F0E6", padding: "48px var(--pad-h) var(--section-py)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {a.sections.map((s, i) => (
            <section key={i} style={{ marginBottom: 36 }}>
              <h2
                style={{
                  fontSize: "clamp(20px, 2.6vw, 28px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif",
                  color: "#1B2A21", margin: "0 0 16px", letterSpacing: "-0.012em",
                }}
              >
                {s.heading}
              </h2>
              {s.paragraphs.map((p, j) => (
                <p key={j} style={{ fontSize: 16.5, lineHeight: 1.78, color: "#33403A", margin: "0 0 18px" }}>
                  {p}
                </p>
              ))}

              {/* Pull-quote after the second section */}
              {i === 1 && (
                <blockquote
                  style={{
                    margin: "36px 0", padding: "4px 0 4px 24px", borderLeft: "3px solid #C7A14A",
                    fontSize: "clamp(20px, 2.6vw, 26px)", lineHeight: 1.5, fontStyle: "italic",
                    fontFamily: "var(--font-newsreader), serif", color: "#1E4D38",
                  }}
                >
                  {a.pullquote}
                </blockquote>
              )}
            </section>
          ))}
        </div>
      </div>

      <CallToAction />
    </>
  );
}
