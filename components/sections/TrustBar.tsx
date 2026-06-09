import { TRUST_METRICS } from "@/lib/data";

export default function TrustBar() {
  return (
    <section
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(16,185,129,0.025)",
        padding: "0 var(--pad-h)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
        className="trust-grid"
      >
        {TRUST_METRICS.map((m, i) => (
          <div
            key={i}
            style={{
              padding: "28px 20px",
              textAlign: "center",
              borderRight:
                i < TRUST_METRICS.length - 1
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "none",
            }}
          >
            {/* Geist Mono for all metric values */}
            <p
              style={{
                fontSize: "clamp(15px, 2.2vw, 20px)",
                fontWeight: 700,
                color: i % 2 === 0 ? "#10b981" : "#6b8c6e",
                margin: "0 0 5px",
                letterSpacing: "-0.02em",
                fontFamily: "var(--font-geist-mono), monospace",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {m.value}
            </p>
            <p
              style={{
                fontSize: 11,
                color: "rgba(244,245,248,0.42)",
                margin: 0,
                fontWeight: 500,
                lineHeight: 1.4,
                letterSpacing: "0.01em",
              }}
            >
              {m.label}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .trust-grid > *:nth-child(2) { border-right: none !important; }
          .trust-grid > *:nth-child(1),
          .trust-grid > *:nth-child(2) {
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
        }
      `}</style>
    </section>
  );
}
