import { TRUST_METRICS } from "@/lib/data";

export default function TrustBar() {
  return (
    <section
      style={{
        borderTop: "1px solid rgba(248,250,252,0.06)",
        borderBottom: "1px solid rgba(248,250,252,0.06)",
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
                  ? "1px solid rgba(248,250,252,0.05)"
                  : "none",
            }}
          >
            <p
              style={{
                fontSize: "clamp(16px, 2.5vw, 22px)",
                fontWeight: 800,
                color: i % 2 === 0 ? "#10b981" : "#6b8c6e",
                margin: "0 0 5px",
                letterSpacing: "-0.03em",
              }}
            >
              {m.value}
            </p>
            <p
              style={{
                fontSize: 12,
                color: "rgba(248,250,252,0.45)",
                margin: 0,
                fontWeight: 500,
                lineHeight: 1.4,
              }}
            >
              {m.label}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .trust-grid > *:nth-child(2) { border-right: none !important; }
          .trust-grid > *:nth-child(1),
          .trust-grid > *:nth-child(2) {
            border-bottom: 1px solid rgba(248,250,252,0.05);
          }
        }
      `}</style>
    </section>
  );
}
