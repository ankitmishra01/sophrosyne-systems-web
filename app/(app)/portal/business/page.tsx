import Link from "next/link";
import { STATE, VERDICT, GAPS, FOCUS, REVENUE_NOW, TRADEMARK, CATALYSTS, RAISE_TRIGGER, NEXT_STEPS } from "@/lib/business";

const GOLD = "#C7A14A";
const INK = "#1B2A21";
const BODY = "#4A584E";

export default function BusinessPage() {
  return (
    <div className="rmp-wrap" style={{ background: "#E5E0D0", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "100%", maxWidth: 860, marginBottom: 14 }}>
        <Link href="/portal" style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "#1E4D38" }}>← Knowledge Centre</Link>
      </div>
      <div style={{ position: "relative", width: "100%", maxWidth: 860, background: "#FBF9F2", boxShadow: "0 8px 40px rgba(27,42,33,0.16)", overflow: "hidden" }}>

        {/* Header band */}
        <header className="rmp-header" style={{ position: "relative", zIndex: 1, background: "#1C2119", backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.014) 0px, rgba(255,255,255,0.014) 1px, transparent 1px, transparent 16px)" }}>
          <div className="rmp-headrow" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <Spark size={20} gold />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(210,228,218,0.70)" }}>Sophrosyne Systems</span>
            </div>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 11.5, color: "rgba(225,238,228,0.72)", margin: 0, letterSpacing: "0.04em" }}>Internal · v1.0</p>
            <div className="rmp-headspacer" />
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD, margin: "0 0 6px" }}>Internal · Strategy</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontStyle: "italic", fontSize: 38, lineHeight: 1.04, letterSpacing: "-0.018em", color: "#F1EEE2", margin: 0 }}>Business Operations</h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.5, color: "#9FBFAD", margin: "10px auto 0", maxWidth: 500 }}>
              An honest read of where we are — the gaps, and the plan to close them.
            </p>
          </div>
        </header>

        {/* Body */}
        <div className="rmp-body" style={{ position: "relative", zIndex: 1 }}>

          {/* The honest read */}
          <SectionBar label="The honest read" />
          <div style={{ background: "#173A2A", borderRadius: 12, padding: "20px 24px", margin: "0 0 14px", position: "relative", overflow: "hidden" }}>
            <div aria-hidden style={{ position: "absolute", top: -50, right: -40, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(199,161,74,0.12) 0%, transparent 70%)" }} />
            <p style={{ position: "relative", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18, lineHeight: 1.5, color: "#EAF0EA", margin: 0 }}>{VERDICT}</p>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: BODY, lineHeight: 1.6, margin: "0 0 26px" }}>{STATE}</p>

          {/* The gaps */}
          <SectionBar label="The gaps" />
          <div className="rm-now-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 26 }}>
            {GAPS.map((g) => (
              <div key={g.n} style={{ background: "#fff", border: "1px solid rgba(27,42,33,0.12)", borderLeft: "3px solid #8A4B43", borderRadius: "0 12px 12px 0", padding: "14px 16px", boxShadow: "0 1px 3px rgba(27,42,33,0.05)" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: INK, margin: "0 0 5px" }}>
                  <span style={{ color: "#8A4B43" }}>{g.n}.</span> {g.title}
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: BODY, lineHeight: 1.5, margin: 0 }}>{g.why}</p>
              </div>
            ))}
          </div>

          {/* Consulting, product, or both? */}
          <SectionBar label="Consulting, product, or both?" />
          <div style={{ background: "#173A2A", borderRadius: 12, padding: "18px 22px", margin: "0 0 12px" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 17, lineHeight: 1.5, color: "#EAF0EA", margin: 0 }}>{FOCUS.verdict}</p>
          </div>
          <ul style={{ margin: "0 0 26px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
            {FOCUS.how.map((h) => (
              <li key={h} style={{ display: "flex", gap: 9, fontFamily: "var(--font-sans)", fontSize: 13, color: BODY, lineHeight: 1.5 }}>
                <span style={{ color: "#1E4D38", flexShrink: 0, fontWeight: 700 }}>→</span> {h}
              </li>
            ))}
          </ul>

          {/* Get revenue now */}
          <SectionBar label="Get revenue now" />
          <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 26 }}>
            {REVENUE_NOW.map((r, i) => (
              <div key={r} style={{ display: "flex", gap: 11, background: "#fff", border: "1px solid rgba(27,42,33,0.12)", borderLeft: "3px solid #3E8C61", borderRadius: "0 10px 10px 0", padding: "12px 15px", boxShadow: "0 1px 3px rgba(27,42,33,0.05)" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 16, color: "#3E8C61", flexShrink: 0 }}>{i + 1}</span>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: BODY, lineHeight: 1.5, margin: 0 }}>{r}</p>
              </div>
            ))}
          </div>

          {/* Non-dilutive funding (grants) — now its own one-pager */}
          <Link href="/portal/grants" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, background: "#173A2A", borderRadius: 12, padding: "18px 22px", marginBottom: 26 }}>
              <div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: GOLD, margin: "0 0 4px" }}>Reference</p>
                <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 17, color: "#EAF0EA", margin: 0 }}>Non-dilutive funding — grants</p>
              </div>
              <span style={{ flexShrink: 0, fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: GOLD }}>Open →</span>
            </div>
          </Link>

          {/* Trademark the Standard */}
          <SectionBar label="Trademark the Standard?" />
          <div style={{ background: "#fff", border: "1px solid rgba(27,42,33,0.12)", borderTop: "3px solid #C7A14A", borderRadius: 12, padding: "16px 18px", marginBottom: 26, boxShadow: "0 1px 3px rgba(27,42,33,0.05)" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, fontWeight: 600, color: INK, lineHeight: 1.55, margin: "0 0 12px" }}>{TRADEMARK.recommendation}</p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
              {TRADEMARK.points.map((p) => (
                <li key={p} style={{ display: "flex", gap: 9, fontFamily: "var(--font-sans)", fontSize: 12.5, color: BODY, lineHeight: 1.5 }}>
                  <span style={{ color: "#B5862E", flexShrink: 0, fontWeight: 700 }}>·</span> {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Capital & catalysts */}
          <SectionBar label="Capital & catalysts" />
          <div className="rm-now-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
            {CATALYSTS.map((c) => (
              <div key={c.name} style={{ background: "#fff", border: "1px solid rgba(27,42,33,0.12)", borderRadius: 12, padding: "16px 18px", boxShadow: "0 1px 3px rgba(27,42,33,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 17, color: INK }}>{c.name}</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: "#1E4D38", background: "rgba(30,77,56,0.10)", borderRadius: 6, padding: "3px 8px", whiteSpace: "nowrap" }}>{c.verdict}</span>
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: BODY, lineHeight: 1.5, margin: 0 }}>{c.detail}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: INK, lineHeight: 1.55, margin: "0 0 26px" }}><span style={{ fontWeight: 700 }}>Raise trigger · </span>{RAISE_TRIGGER}</p>

          {/* Prioritized next steps */}
          <SectionBar label="Prioritized next steps" />
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {NEXT_STEPS.map((s) => (
              <div key={s.n} style={{ display: "flex", gap: 13, background: "#fff", border: "1px solid rgba(27,42,33,0.12)", borderRadius: 12, padding: "13px 16px", boxShadow: "0 1px 3px rgba(27,42,33,0.05)" }}>
                <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: "50%", background: "#1E4D38", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 700 }}>{s.n}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10 }}>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: INK, margin: 0 }}>{s.title}</p>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 700, color: GOLD, whiteSpace: "nowrap" }}>{s.when}</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: BODY, lineHeight: 1.5, margin: "3px 0 0" }}>{s.how}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 12, marginTop: 28 }}>
            <span aria-hidden />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
              <Spark size={14} />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "#2E4038", margin: 0, whiteSpace: "nowrap" }}>&copy; 2026 Sophrosyne Systems · Confidential</p>
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
