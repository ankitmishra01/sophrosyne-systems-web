"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import { COMPARISON_ROWS } from "@/lib/data";

type Tone = "good" | "bad" | "neutral";

const TONE: Record<
  Tone,
  {
    color: string;
    Icon: React.ComponentType<{
      size?: number;
      color?: string;
      strokeWidth?: number;
    }>;
  }
> = {
  good: { color: "#1E4D38", Icon: Check },
  bad: { color: "#B0726A", Icon: X },
  neutral: { color: "#4A584E", Icon: Minus },
};

function Cell({
  v,
  tone,
  emphasis,
}: {
  v: string;
  tone: Tone;
  emphasis?: boolean;
}) {
  const t = TONE[tone];
  const Icon = t.Icon;
  return (
    <td
      style={{
        padding: "16px 20px",
        textAlign: "center",
        background: emphasis ? "rgba(30,77,56,0.05)" : "transparent",
        borderLeft: emphasis ? "1px solid rgba(30,77,56,0.14)" : "none",
        borderRight: emphasis ? "1px solid rgba(30,77,56,0.14)" : "none",
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          justifyContent: "center",
        }}
      >
        <Icon size={15} color={t.color} strokeWidth={2.4} />
        <span
          style={{
            fontSize: 13.5,
            color: emphasis ? "#1B2A21" : "#4A584E",
            fontWeight: emphasis ? 600 : 400,
            fontFamily: emphasis
              ? "var(--font-libre-franklin), sans-serif"
              : "inherit",
          }}
        >
          {v}
        </span>
      </span>
    </td>
  );
}

export default function ComparisonTable() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#ECF1EC",
        borderTop: "1px solid rgba(27,42,33,0.07)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: 640, marginBottom: 40 }}
        >
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
            How We Compare
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 42px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21",
              margin: "0 0 14px",
              letterSpacing: "-0.012em",
            }}
          >
            Where we fit —{" "}
            <em style={{ fontStyle: "italic", color: "#1E4D38" }}>
              and why the alternatives leave a gap.
            </em>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.68, color: "#4A584E", margin: 0 }}>
            Enterprise consulting firms start at $500K. Research subscription firms start at $85K/year and leave you with reports, not results. Here is the honest trade-off.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            overflowX: "auto",
            borderRadius: "var(--radius-card)",
            border: "1px solid rgba(27,42,33,0.10)",
            boxShadow: "var(--shadow-card)",
            background: "#FFFFFF",
          }}
        >
          <table
            style={{ width: "100%", minWidth: 720, borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    padding: "16px 20px",
                    textAlign: "left",
                    width: "26%",
                  }}
                />
                <th
                  style={{
                    padding: "16px 20px",
                    textAlign: "center",
                    background: "#1E4D38",
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      fontFamily: "var(--font-newsreader), serif",
                      color: "#F1EEE2",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Sophrosyne
                  </span>
                </th>
                <th style={{ padding: "16px 20px", textAlign: "center" }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#4A584E",
                    }}
                  >
                    Enterprise Consulting
                  </span>
                </th>
                <th style={{ padding: "16px 20px", textAlign: "center" }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#4A584E",
                    }}
                  >
                    Research Subscription
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.dimension}
                  style={{ borderTop: "1px solid rgba(27,42,33,0.08)" }}
                  className="comparison-row"
                >
                  <td
                    style={{
                      padding: "16px 20px",
                      fontSize: 13.5,
                      fontWeight: 500,
                      fontFamily: "var(--font-newsreader), serif",
                      color: "#1B2A21",
                    }}
                  >
                    {row.dimension}
                  </td>
                  <Cell
                    v={row.sophrosyne.v}
                    tone={row.sophrosyne.tone as Tone}
                    emphasis
                  />
                  <Cell v={row.mbb.v} tone={row.mbb.tone as Tone} />
                  <Cell v={row.diy.v} tone={row.diy.tone as Tone} />
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>

      <style>{`
        .comparison-row { transition: background 160ms ease; }
        .comparison-row:hover { background: rgba(30,77,56,0.03) !important; }
        .comparison-row:hover td[style*="rgba(30,77,56,0.05)"] { background: rgba(30,77,56,0.08) !important; }
      `}</style>
    </section>
  );
}
