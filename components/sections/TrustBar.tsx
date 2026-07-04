import { TRUST_METRICS } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function TrustBar() {
  return (
    <section style={{ background: "#1E4D38", padding: "0 var(--pad-h)" }}>
      <div
        className="trust-grid"
        style={{ maxWidth: "var(--max-w)", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
      >
        {TRUST_METRICS.map((m, i) => (
          <Reveal
            key={i}
            delay={i * 70}
            style={{
              padding: "48px 24px",
              textAlign: "center",
              borderRight: i < TRUST_METRICS.length - 1 ? "1px solid rgba(201,217,206,0.15)" : "none",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.25rem, 3.6vw, 3.4rem)",
                fontWeight: 600,
                color: "#F1EEE2",
                margin: "0 0 10px",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              {m.value}
            </p>
            <p
              style={{
                fontSize: 14,
                color: "#C9D9CE",
                margin: 0,
                fontWeight: 500,
                fontFamily: "var(--font-libre-franklin), sans-serif",
                lineHeight: 1.5,
              }}
            >
              {m.label}
            </p>
          </Reveal>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .trust-grid > *:nth-child(2) { border-right: none !important; }
          .trust-grid > *:nth-child(1),
          .trust-grid > *:nth-child(2) { border-bottom: 1px solid rgba(201,217,206,0.15); }
        }
      `}</style>
    </section>
  );
}
