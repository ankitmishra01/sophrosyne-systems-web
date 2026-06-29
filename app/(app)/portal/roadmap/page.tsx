import { NORTH_STAR, PHASES, FUNDING_ROUNDS, FUNDING_TOTAL, SHIPPABLE_NOW } from "@/lib/roadmap";

// Product Roadmap rendered as a one-pager document in the exact style of the AI Fluency
// Standard brief: parchment sheet on a muted screen, dark textured header band, gold spark,
// "Confidential" watermark + corner badge, gold-ruled section headers, brief footer.
// Static document — access is gated by the portal layout + middleware.

const GOLD = "#C7A14A";
const INK = "#1B2A21";
const BODY = "#4A584E";

export default function RoadmapPage() {
  return (
    <div className="rmp-wrap" style={{ background: "#E5E0D0", minHeight: "100vh", display: "flex", justifyContent: "center" }}>
      <div style={{ position: "relative", width: "100%", maxWidth: 860, background: "#FBF9F2", boxShadow: "0 8px 40px rgba(27,42,33,0.16)", overflow: "hidden" }}>

        {/* Watermark */}
        <div aria-hidden style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", zIndex: 0 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 120, letterSpacing: "0.10em", color: "rgba(30,77,56,0.04)", transform: "rotate(-32deg)", whiteSpace: "nowrap", textTransform: "uppercase" }}>Confidential</span>
        </div>

        {/* Corner badge */}
        <div style={{ position: "absolute", top: 16, right: 18, zIndex: 10, display: "flex", alignItems: "center", gap: 5, border: "1px solid rgba(199,161,74,0.40)", borderRadius: 5, padding: "3px 10px", background: "rgba(28,33,25,0.85)" }}>
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: GOLD, flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: GOLD }}>Confidential</span>
        </div>

        {/* ── Header band ── */}
        <header className="rmp-header" style={{ position: "relative", zIndex: 1, background: "#1C2119", backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.014) 0px, rgba(255,255,255,0.014) 1px, transparent 1px, transparent 16px)" }}>
          <div className="rmp-headrow" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <Spark size={20} gold />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(210,228,218,0.70)" }}>Sophrosyne Systems</span>
            </div>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 11.5, color: "rgba(225,238,228,0.72)", margin: 0, letterSpacing: "0.04em" }}>One-Pager &middot; v1.0</p>
            <div className="rmp-headspacer" />
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD, margin: "0 0 6px" }}>Product One-Pager</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontStyle: "italic", fontSize: 38, lineHeight: 1.04, letterSpacing: "-0.018em", color: "#F1EEE2", margin: 0 }}>Product Roadmap</h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.5, color: "#9FBFAD", margin: "10px auto 0", maxWidth: 480 }}>
              From today&apos;s working demo to an AI-native fluency tracker — the path, the milestones, and what it takes to get there.
            </p>
          </div>
        </header>

        {/* ── Body ── */}
        <div className="rmp-body" style={{ position: "relative", zIndex: 1 }}>

          {/* North Star */}
          <SectionBar label="North Star" />
          <div style={{ background: "#173A2A", borderRadius: 12, padding: "20px 24px", margin: "0 0 26px", position: "relative", overflow: "hidden" }}>
            <div aria-hidden style={{ position: "absolute", top: -50, right: -40, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(199,161,74,0.12) 0%, transparent 70%)" }} />
            <p style={{ position: "relative", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18, lineHeight: 1.5, color: "#EAF0EA", margin: 0 }}>{NORTH_STAR}</p>
          </div>

          {/* Where we are now */}
          <SectionBar label="Where we are now" />
          <div className="rm-now-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 14, marginBottom: 26 }}>
            <div style={{ background: "#fff", border: "1px solid rgba(27,42,33,0.12)", borderTop: "3px solid #1E4D38", borderRadius: 12, padding: "16px 18px", boxShadow: "0 1px 3px rgba(27,42,33,0.05)" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1E4D38", margin: "0 0 11px" }}>Shippable now — the demo</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                {SHIPPABLE_NOW.map((s) => (
                  <li key={s} style={{ display: "flex", gap: 9, fontFamily: "var(--font-sans)", fontSize: 13, color: BODY, lineHeight: 1.45 }}>
                    <span style={{ color: "#1E4D38", flexShrink: 0, fontWeight: 700 }}>✓</span> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "rgba(199,161,74,0.08)", border: "1px solid rgba(199,161,74,0.30)", borderRadius: 12, padding: "16px 18px" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#B5862E", margin: "0 0 9px" }}>The honest gap</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: BODY, lineHeight: 1.6, margin: 0 }}>
                It&apos;s <strong style={{ color: INK }}>faculty-driven and demo-grade</strong>: assessment, feedback and scoring are manual, and it isn&apos;t yet hardened (SSO, SOC 2, SIS/LMS) for production. The north star is to let <strong style={{ color: INK }}>AI do the assessment and coaching</strong> — that&apos;s the build ahead.
              </p>
            </div>
          </div>

          {/* The path — 6 market-stage steps */}
          <SectionBar label="The path" />
          <div className="rmp-path" style={{ marginBottom: 26 }}>
            {PHASES.map((p, i) => (
              <div key={p.key} style={{ background: "#fff", border: "1px solid rgba(27,42,33,0.12)", borderTop: `3px solid ${p.color}`, borderRadius: 12, padding: "14px 15px", boxShadow: "0 1px 3px rgba(27,42,33,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 20, height: 20, borderRadius: 999, background: p.color, color: "#fff", fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 700 }}>{i + 1}</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 17, color: INK, margin: 0 }}>{p.name}</p>
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: p.color, margin: "0 0 8px" }}>{p.stage} · {p.timing}</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: BODY, lineHeight: 1.5, margin: 0 }}>{p.goal}</p>
              </div>
            ))}
          </div>

          {/* How we fund it — bootstrapped on consulting + grants */}
          <SectionBar label="How we fund it" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 12 }}>
            {FUNDING_ROUNDS.map((r, i) => (
              <div key={r.stage} style={{ background: "#fff", border: "1px solid rgba(27,42,33,0.12)", borderTop: "3px solid #1E4D38", borderRadius: 12, padding: "16px 18px", boxShadow: "0 1px 3px rgba(27,42,33,0.05)" }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8, marginBottom: 6 }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A6B60" }}>{i + 1} · {r.stage}</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, color: "#8A968C", whiteSpace: "nowrap" }}>{r.timing}</span>
                </div>
                <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 19, fontWeight: 500, color: "#1E4D38", margin: "0 0 7px", lineHeight: 1.1 }}>{r.amount}</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: BODY, lineHeight: 1.5, margin: 0 }}>{r.focus}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: INK, margin: "12px 2px 0" }}>
            <strong>{FUNDING_TOTAL}</strong>
          </p>

          {/* Footer */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 12, marginTop: 28 }}>
            <span aria-hidden />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
              <Spark size={14} />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "#2E4038", margin: 0, whiteSpace: "nowrap" }}>&copy; 2026 Sophrosyne Systems</p>
            </div>
            <span aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionBar({ label }: { label: string }) {
  return (
    <div style={{ background: "#1E4D38", borderRadius: 8, padding: "9px 18px", margin: "0 0 14px", display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
      <span aria-hidden style={{ height: 1, width: 26, flexShrink: 0, background: "linear-gradient(to right, transparent, rgba(199,161,74,0.9))" }} />
      <span style={{ fontFamily: "var(--font-sans)", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F4F1E6" }}>{label}</span>
      <span aria-hidden style={{ height: 1, width: 26, flexShrink: 0, background: "linear-gradient(to left, transparent, rgba(199,161,74,0.9))" }} />
    </div>
  );
}

function Spark({ size = 20, gold = false }: { size?: number; gold?: boolean }) {
  const stroke = gold ? GOLD : "#1E4D38";
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <g stroke={stroke} strokeWidth={2.4} strokeLinecap="round">
        <line x1="24" y1="45" x2="24" y2="26" />
        <line x1="24" y1="26" x2="9.3" y2="17.5" />
        <line x1="24" y1="26" x2="15.5" y2="11.3" />
        <line x1="24" y1="26" x2="24" y2="9" />
        <line x1="24" y1="26" x2="32.5" y2="11.3" />
        <line x1="24" y1="26" x2="38.7" y2="17.5" />
      </g>
      <circle cx="24" cy="26" r="3" fill={GOLD} />
    </svg>
  );
}
