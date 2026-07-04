import { ACCREDITORS } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function AccreditorStrip({
  background = "#F4F0E6",
  reversed = false,
}: {
  background?: string;
  reversed?: boolean;
}) {
  const labelColor = reversed ? "#9FBFAD" : "#8A968C";
  const markColor = reversed ? "#C9D9CE" : "#3C4A40";
  const borderTop = reversed ? "1px solid rgba(241,238,226,0.08)" : "1px solid rgba(27,42,33,0.07)";

  return (
    <section style={{ padding: "56px var(--pad-h)", background, borderTop }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <p
            style={{
              fontSize: 11.5,
              fontWeight: 600,
              fontFamily: "var(--font-libre-franklin), sans-serif",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: labelColor,
              margin: "0 0 24px",
            }}
          >
            Built to align with the standards your accreditors already use
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "18px 40px" }}>
            {ACCREDITORS.map((a) => (
              <span
                key={a}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 19,
                  fontWeight: 600,
                  color: markColor,
                  letterSpacing: "-0.01em",
                }}
              >
                {a}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
