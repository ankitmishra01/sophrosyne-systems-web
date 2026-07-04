import Link from "next/link";
import { SCENARIOS, ASSUMPTIONS, COST_STRUCTURE, MILESTONES, NEXT_STEPS } from "@/lib/finance";

const GOLD = "#C7A14A";
const INK  = "#1B2A21";
const BODY = "#4A584E";

export default function FinancePage() {
  return (
    <div className="rmp-wrap" style={{ background: "#E5E0D0", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "100%", maxWidth: 860, marginBottom: 14 }}>
        <Link href="/portal" style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "#1E4D38" }}>← Knowledge Centre</Link>
      </div>
      <div style={{ position: "relative", width: "100%", maxWidth: 860, background: "#FBF9F2", boxShadow: "0 8px 40px rgba(27,42,33,0.16)", overflow: "hidden" }}>

        {/* Header */}
        <header className="rmp-header" style={{ position: "relative", zIndex: 1, background: "#1C2119", backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.014) 0px, rgba(255,255,255,0.014) 1px, transparent 1px, transparent 16px)" }}>
          <div className="rmp-headrow" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <Spark size={20} gold />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(210,228,218,0.70)" }}>Sophrosyne Systems</span>
            </div>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 11.5, color: "rgba(225,238,228,0.72)", margin: 0, letterSpacing: "0.04em" }}>Internal · Finance</p>
            <div className="rmp-headspacer" />
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD, margin: "0 0 6px" }}>Internal · Confidential</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontStyle: "italic", fontSize: 38, lineHeight: 1.04, letterSpacing: "-0.018em", color: "#F1EEE2", margin: 0 }}>Financial Scenarios</h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.5, color: "#9FBFAD", margin: "10px auto 0", maxWidth: 500 }}>
              Bear, base, and bull — revenue outcomes, cost structure, and what to do next.
            </p>
          </div>
        </header>

        {/* Body */}
        <div className="rmp-body" style={{ position: "relative", zIndex: 1 }}>

          {/* Scenario overview */}
          <SectionBar label="Scenario overview" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 26 }}>
            {SCENARIOS.map((s) => (
              <div key={s.name} style={{ background: "#fff", border: `1px solid ${s.border}`, borderTop: `3px solid ${s.color}`, borderRadius: 12, padding: "16px 16px 18px", boxShadow: "0 1px 3px rgba(27,42,33,0.06)" }}>
                {/* Scenario name + tag */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 20, color: s.color }}>{s.name}</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 9.5, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: s.color, background: s.tint, border: `1px solid ${s.border}`, borderRadius: 6, padding: "2px 7px", whiteSpace: "nowrap" }}>{s.tag}</span>
                </div>

                {/* Revenue table */}
                <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 12 }}>
                  <thead>
                    <tr>
                      {["Stream","Y1","Y2","Y3"].map((h) => (
                        <th key={h} style={{ fontFamily: "var(--font-sans)", fontSize: 9.5, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#8A968C", textAlign: h === "Stream" ? "left" : "right", paddingBottom: 6, borderBottom: "1px solid rgba(27,42,33,0.10)" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.streams.map((row) => (
                      <tr key={row.label}>
                        <td style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: BODY, paddingTop: 5, paddingRight: 4 }}>{row.label}</td>
                        {[row.y1, row.y2, row.y3].map((v, i) => (
                          <td key={i} style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: v === "—" ? "#C0C8C2" : INK, textAlign: "right", paddingTop: 5 }}>{v}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr style={{ borderTop: "1.5px solid rgba(27,42,33,0.14)" }}>
                      <td style={{ fontFamily: "var(--font-sans)", fontSize: 11.5, fontWeight: 700, color: INK, paddingTop: 7 }}>Total Rev</td>
                      {[s.years.y1.value, s.years.y2.value, s.years.y3.value].map((v, i) => (
                        <td key={i} style={{ fontFamily: "var(--font-sans)", fontSize: 11.5, fontWeight: 700, color: s.color, textAlign: "right", paddingTop: 7 }}>{v}</td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, color: BODY, paddingTop: 3 }}>EBITDA</td>
                      {[s.years.y1, s.years.y2, s.years.y3].map((y, i) => (
                        <td key={i} style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, color: y.ebitda.startsWith("−") ? "#8A4B43" : "#2C7350", textAlign: "right", paddingTop: 3 }}>
                          {y.ebitda}{y.margin !== "—" ? ` (${y.margin})` : ""}
                        </td>
                      ))}
                    </tr>
                  </tfoot>
                </table>

                {/* Headline + lever */}
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 11.5, color: BODY, lineHeight: 1.5, margin: "0 0 10px" }}>{s.headline}</p>
                <div style={{ background: s.tint, border: `1px solid ${s.border}`, borderRadius: 6, padding: "7px 10px" }}>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 600, color: s.color, margin: 0, lineHeight: 1.4 }}>
                    <span style={{ opacity: 0.7 }}>Key lever · </span>{s.lever}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Key assumptions */}
          <SectionBar label="What drives each outcome — key assumptions" />
          <div style={{ background: "#fff", border: "1px solid rgba(27,42,33,0.12)", borderRadius: 12, overflow: "hidden", marginBottom: 26, boxShadow: "0 1px 3px rgba(27,42,33,0.05)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#F4F1E6" }}>
                  <th style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6A7A6E", textAlign: "left", padding: "10px 16px" }}>Lever</th>
                  {[
                    { label: "Bear", color: "#8A4B43" },
                    { label: "Base", color: "#1E4D38" },
                    { label: "Bull", color: "#C7A14A" },
                  ].map((col) => (
                    <th key={col.label} style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: col.color, textAlign: "center", padding: "10px 12px", width: 110 }}>{col.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ASSUMPTIONS.map((a, i) => (
                  <tr key={a.lever} style={{ background: i % 2 === 0 ? "#fff" : "#F9F7F2", borderTop: "1px solid rgba(27,42,33,0.07)" }}>
                    <td style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: INK, padding: "10px 16px", fontWeight: 500 }}>{a.lever}</td>
                    <td style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: "#8A4B43", textAlign: "center", padding: "10px 12px" }}>{a.bear}</td>
                    <td style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: "#1E4D38", textAlign: "center", padding: "10px 12px", fontWeight: 600 }}>{a.base}</td>
                    <td style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: "#9B7A1A", textAlign: "center", padding: "10px 12px" }}>{a.bull}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cost structure */}
          <SectionBar label="Cost structure (base case)" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
            {/* COGS */}
            <div style={{ background: "#fff", border: "1px solid rgba(27,42,33,0.12)", borderTop: "3px solid #5A9478", borderRadius: 12, padding: "16px 18px", boxShadow: "0 1px 3px rgba(27,42,33,0.05)" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: "#5A9478", margin: "0 0 12px" }}>Cost of Revenue (COGS)</p>
              {COST_STRUCTURE.cogs.map((row) => (
                <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8, marginBottom: 7 }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: BODY, lineHeight: 1.3 }}>{row.label}</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 11.5, color: INK, whiteSpace: "nowrap" }}>
                    <span style={{ color: "#8A968C", marginRight: 6 }}>{row.y2}</span>{row.y3}
                  </span>
                </div>
              ))}
              <div style={{ borderTop: "1.5px solid rgba(27,42,33,0.10)", marginTop: 10, paddingTop: 8, display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 700, color: INK }}>Total COGS</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: BODY }}>
                  <span style={{ color: "#8A968C", marginRight: 6 }}>{COST_STRUCTURE.totals.cogs.y2}</span>{COST_STRUCTURE.totals.cogs.y3}
                </span>
              </div>
              <div style={{ borderTop: "1px solid rgba(27,42,33,0.08)", marginTop: 7, paddingTop: 7, display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: BODY }}>Gross margin</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "#2C7350", fontWeight: 600 }}>
                  {COST_STRUCTURE.totals.gross_margin.y2} / {COST_STRUCTURE.totals.gross_margin.y3}
                </span>
              </div>
            </div>

            {/* OpEx */}
            <div style={{ background: "#fff", border: "1px solid rgba(27,42,33,0.12)", borderTop: "3px solid #3D6E8A", borderRadius: 12, padding: "16px 18px", boxShadow: "0 1px 3px rgba(27,42,33,0.05)" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: "#3D6E8A", margin: "0 0 12px" }}>Operating Expenses</p>
              {COST_STRUCTURE.opex.map((row) => (
                <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8, marginBottom: 7 }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: BODY, lineHeight: 1.3 }}>{row.label}</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 11.5, color: INK, whiteSpace: "nowrap" }}>
                    <span style={{ color: "#8A968C", marginRight: 6 }}>{row.y2}</span>{row.y3}
                  </span>
                </div>
              ))}
              <div style={{ borderTop: "1.5px solid rgba(27,42,33,0.10)", marginTop: 10, paddingTop: 8, display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 700, color: INK }}>EBITDA</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "#2C7350", fontWeight: 600 }}>
                  {COST_STRUCTURE.totals.ebitda.y2}
                </span>
              </div>
              <div style={{ borderTop: "1px solid rgba(27,42,33,0.08)", marginTop: 7, paddingTop: 7, display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: BODY }}>Y3 EBITDA</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "#2C7350", fontWeight: 600 }}>
                  {COST_STRUCTURE.totals.ebitda.y3}
                </span>
              </div>
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "#6A7A6E", lineHeight: 1.5, margin: "0 0 26px" }}>
            Y2 = left figure · Y3 = right figure. All figures CAD. Taxes (26.5%) apply to Y3 positive EBITDA only.
          </p>

          {/* Path to profitability */}
          <SectionBar label="Path to profitability" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 14 }}>
            {MILESTONES.map((m) => (
              <div key={m.label} style={{ background: "#fff", border: "1px solid rgba(27,42,33,0.12)", borderTop: `3px solid ${m.color}`, borderRadius: 12, padding: "16px 18px", boxShadow: "0 1px 3px rgba(27,42,33,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 700, color: m.color }}>{m.label}</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, color: m.color, background: `${m.color}18`, borderRadius: 5, padding: "2px 6px" }}>{m.when}</span>
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: BODY, lineHeight: 1.5, margin: 0 }}>{m.detail}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(199,161,74,0.08)", border: "1px solid rgba(199,161,74,0.28)", borderRadius: 8, padding: "12px 14px", marginBottom: 26 }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: INK, lineHeight: 1.55, margin: 0 }}>
              <span style={{ fontWeight: 700 }}>No external capital required. </span>
              Organic cash from Year 1 consulting funds Year 2 hires. Year 2 retainer revenue funds the Fluency Tracker build. Year 3 cash generation — CA$4.8M cumulative — funds international expansion. Equity is optional, not a necessity.
            </p>
          </div>

          {/* Advisory — next steps */}
          <SectionBar label="Advisory — next steps" />
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 26 }}>
            {NEXT_STEPS.map((step) => (
              <div key={step.n} style={{ background: "#fff", border: "1px solid rgba(27,42,33,0.12)", borderLeft: "3px solid #1E4D38", borderRadius: "0 12px 12px 0", padding: "14px 16px 14px 18px", boxShadow: "0 1px 3px rgba(27,42,33,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18, color: "#1E4D38", flexShrink: 0 }}>{step.n}</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: INK, flex: 1 }}>{step.title}</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 700, color: GOLD, background: "rgba(199,161,74,0.12)", border: "1px solid rgba(199,161,74,0.30)", borderRadius: 6, padding: "2px 8px", whiteSpace: "nowrap", flexShrink: 0 }}>{step.when}</span>
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: BODY, lineHeight: 1.5, margin: "0 0 6px" }}>
                  <span style={{ fontWeight: 600, color: INK }}>Why: </span>{step.why}
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: BODY, lineHeight: 1.5, margin: 0 }}>
                  <span style={{ fontWeight: 600, color: INK }}>How: </span>{step.how}
                </p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 12, marginTop: 8 }}>
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
