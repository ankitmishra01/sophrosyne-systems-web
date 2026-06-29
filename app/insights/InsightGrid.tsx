"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Article = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  readTime: string;
};

export default function InsightGrid({ articles }: { articles: Article[] }) {
  const [selected, setSelected] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];
  const filtered = selected === "All" ? articles : articles.filter((a) => a.category === selected);

  return (
    <section style={{ padding: "var(--section-py) var(--pad-h)", background: "#F4F0E6" }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>

        {/* Category filter pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
          {categories.map((cat) => {
            const active = cat === selected;
            return (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  letterSpacing: "0.04em",
                  padding: "6px 16px",
                  borderRadius: 20,
                  border: `1px solid ${active ? "#1E4D38" : "rgba(30,77,56,0.28)"}`,
                  background: active ? "#1E4D38" : "transparent",
                  color: active ? "#F4F0E6" : "#1E4D38",
                  cursor: "pointer",
                  transition: "background 160ms, color 160ms, border-color 160ms",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Article grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}
          className="insights-grid"
        >
          {filtered.map((a) => (
            <Link
              key={a.slug}
              href={`/insights/${a.slug}`}
              style={{ textDecoration: "none", display: "block" }}
              className="insight-card-link"
            >
              <div
                className="insight-card"
                style={{
                  height: "100%",
                  background: "#FFFFFF",
                  border: "1px solid rgba(27,42,33,0.10)",
                  borderRadius: "var(--radius-card)",
                  padding: "30px 30px 26px",
                  boxShadow: "var(--shadow-card)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 200ms, box-shadow 200ms",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#B5862E",
                      background: "rgba(199,161,74,0.12)",
                      border: "1px solid rgba(181,134,46,0.28)",
                      borderRadius: 4,
                      padding: "3px 9px",
                    }}
                  >
                    {a.category}
                  </span>
                  <span style={{ fontSize: 12, color: "#4A584E" }}>{a.readTime}</span>
                </div>
                <h2
                  style={{
                    fontSize: 22,
                    fontWeight: 500,
                    fontFamily: "var(--font-newsreader), serif",
                    color: "#1B2A21",
                    margin: "0 0 12px",
                    letterSpacing: "-0.012em",
                    lineHeight: 1.2,
                  }}
                >
                  {a.title}
                </h2>
                <p style={{ fontSize: 14.5, lineHeight: 1.66, color: "#4A584E", margin: "0 0 20px" }}>
                  {a.dek}
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
                    letterSpacing: "0.02em",
                  }}
                >
                  Read the analysis
                  <ArrowRight size={14} strokeWidth={2.2} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Upcoming signal */}
        <div
          style={{
            marginTop: 40,
            padding: "24px 28px",
            background: "#FFFFFF",
            border: "1px solid rgba(27,42,33,0.10)",
            borderRadius: "var(--radius-card)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#1B2A21", margin: "0 0 4px", fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "-0.01em" }}>
              In the pipeline
            </p>
            <p style={{ fontSize: 13, color: "#4A584E", margin: 0 }}>
              AI accreditation standards and faculty adoption curves. Get notified when they publish.
            </p>
          </div>
          <a
            href="mailto:lauretta@sophrosynesystems.org?subject=Sophrosyne Insights — notify me"
            className="insight-notify-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 600,
              color: "#1E4D38",
              fontFamily: "var(--font-libre-franklin), sans-serif",
              textDecoration: "none",
              whiteSpace: "nowrap",
              border: "1px solid rgba(30,77,56,0.22)",
              borderRadius: "var(--radius-btn)",
              padding: "9px 16px",
              transition: "background 180ms",
            }}
          >
            Notify me
            <ArrowRight size={13} strokeWidth={2.2} />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .insights-grid { grid-template-columns: 1fr !important; }
        }
        .insight-card-link:hover .insight-card {
          border-color: rgba(30,77,56,0.24);
          box-shadow: var(--shadow-card-lg);
        }
        .insight-notify-btn:hover {
          background: rgba(30,77,56,0.05);
        }
      `}</style>
    </section>
  );
}
