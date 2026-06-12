import { TRUST_METRICS } from "@/lib/data";

export default function TrustBar() {
  return (
    <section
      style={{
        borderTop: "1px solid rgba(27,42,33,0.12)",
        borderBottom: "1px solid rgba(27,42,33,0.12)",
        background: "#1E4D38",
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
                  ? "1px solid rgba(201,217,206,0.15)"
                  : "none",
            }}
          >
            <p
              style={{
                fontSize: "clamp(15px, 2.2vw, 20px)",
                fontWeight: 500,
                fontFamily: "var(--font-newsreader), serif",
                color: "#F1EEE2",
                margin: "0 0 5px",
                letterSpacing: "-0.01em",
              }}
            >
              {m.value}
            </p>
            <p
              style={{
                fontSize: 11,
                color: "#9FBFAD",
                margin: 0,
                fontWeight: 500,
                fontStyle: "italic",
                fontFamily: "var(--font-newsreader), serif",
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
            border-bottom: 1px solid rgba(201,217,206,0.15);
          }
        }
      `}</style>
    </section>
  );
}
