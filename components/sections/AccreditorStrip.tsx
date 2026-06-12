import { ACCREDITORS } from "@/lib/data";

export default function AccreditorStrip({
  background = "#F4F0E6",
  reversed = false,
}: {
  background?: string;
  reversed?: boolean;
}) {
  const labelColor = reversed ? "#9FBFAD" : "#6E7B71";
  const markColor = reversed ? "#C9D9CE" : "#415146";
  const borderTop = reversed ? "1px solid rgba(241,238,226,0.08)" : "1px solid rgba(27,42,33,0.07)";

  return (
    <section style={{ padding: "44px var(--pad-h)", background, borderTop }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif",
            letterSpacing: "0.16em", textTransform: "uppercase", color: labelColor, margin: "0 0 20px",
          }}
        >
          Built to align with the standards your accreditors already use
        </p>
        <div
          style={{
            display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center",
            gap: "20px 36px",
          }}
        >
          {ACCREDITORS.map((a) => (
            <span
              key={a}
              style={{
                fontSize: 18,
                fontWeight: 500,
                fontFamily: "var(--font-newsreader), serif",
                color: markColor,
                letterSpacing: "0.02em",
              }}
            >
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
