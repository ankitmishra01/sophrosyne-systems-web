import { Landmark } from "lucide-react";
import { GRANT_SOURCES } from "@/lib/data";

export default function GrantFunding() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#F4F0E6",
        borderTop: "1px solid rgba(27,42,33,0.07)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <div style={{ maxWidth: 640, marginBottom: 44 }}>
          <p
            style={{
              fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif",
              letterSpacing: "0.16em", textTransform: "uppercase", color: "#B5862E", margin: "0 0 14px",
            }}
          >
            How Institutions Fund This
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21", margin: "0 0 14px", letterSpacing: "-0.012em",
            }}
          >
            Most of this is grant-fundable —{" "}
            <em style={{ fontStyle: "italic", color: "#1E4D38" }}>and we write the language.</em>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.68, color: "#4A584E", margin: 0 }}>
            A financially-stressed institution rarely pays for transformation out
            of operating funds — it funds it through grants. We provide
            ready-to-submit narrative language mapped to the programs your grants
            office already pursues.
          </p>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}
          className="grant-grid"
        >
          {GRANT_SOURCES.map((g) => (
            <div
              key={g.name}
              style={{
                display: "flex", gap: 16, alignItems: "flex-start",
                background: "#FFFFFF", border: "1px solid rgba(27,42,33,0.10)",
                borderRadius: "var(--radius-card)", padding: "22px 24px", boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                style={{
                  flexShrink: 0, width: 40, height: 40, borderRadius: "var(--radius-card)",
                  background: "rgba(30,77,56,0.07)", border: "1px solid rgba(30,77,56,0.16)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <Landmark size={18} color="#1E4D38" strokeWidth={1.8} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: 16, fontWeight: 500, fontFamily: "var(--font-newsreader), serif",
                    color: "#1B2A21", margin: "0 0 6px", letterSpacing: "-0.01em",
                  }}
                >
                  {g.name}
                </h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "#4A584E", margin: 0 }}>{g.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 13, color: "#6E7B71", margin: "28px 0 0", fontStyle: "italic", fontFamily: "var(--font-newsreader), serif" }}>
          Grant eligibility varies by institution type and cycle. We help you map the right program — not legal or financial advice.
        </p>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .grant-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
