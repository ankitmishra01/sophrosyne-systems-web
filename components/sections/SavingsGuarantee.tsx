import { ShieldCheck } from "lucide-react";

export default function SavingsGuarantee() {
  return (
    <section style={{ padding: "64px var(--pad-h)", background: "#F4F0E6", borderTop: "1px solid rgba(27,42,33,0.07)" }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <div
          style={{
            background: "#1E4D38",
            borderRadius: "var(--radius-card)",
            padding: "40px 44px",
            boxShadow: "var(--shadow-pine)",
            display: "flex",
            alignItems: "center",
            gap: 28,
            position: "relative",
            overflow: "hidden",
          }}
          className="guarantee-card"
        >
          <div
            style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse 60% 90% at 95% 50%, rgba(199,161,74,0.14) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              flexShrink: 0, width: 64, height: 64, borderRadius: "50%",
              background: "rgba(199,161,74,0.14)", border: "1px solid rgba(199,161,74,0.32)",
              display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1,
            }}
            className="guarantee-icon"
          >
            <ShieldCheck size={28} color="#C7A14A" strokeWidth={1.8} />
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <p
              style={{
                fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif",
                letterSpacing: "0.16em", textTransform: "uppercase", color: "#C7A14A", margin: "0 0 10px",
              }}
            >
              The Savings Guarantee
            </p>
            <h2
              style={{
                fontSize: "clamp(20px, 2.6vw, 30px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif",
                color: "#F1EEE2", margin: "0 0 8px", letterSpacing: "-0.012em", lineHeight: 1.25,
              }}
            >
              We identify at least 3× the audit fee in savings —{" "}
              <em style={{ fontStyle: "italic", color: "#E9C77B" }}>or the audit is on us.</em>
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: "#9FBFAD", margin: 0, maxWidth: 620 }}>
              If our AI &amp; OpEx Readiness Audit doesn&apos;t surface a credible
              roadmap to at least three times its fee in annual operating savings,
              we refund it in full. The risk is ours, not your board&apos;s.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .guarantee-card { flex-direction: column; align-items: flex-start !important; gap: 18px !important; padding: 32px 28px !important; }
        }
      `}</style>
    </section>
  );
}
