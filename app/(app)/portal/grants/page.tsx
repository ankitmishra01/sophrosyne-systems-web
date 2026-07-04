import Link from "next/link";
import { GRANTS, GRANTS_NOTE, GRANTS_INTRO, TRACK_TOTALS, UPSIDE_NOT_COUNTED, type Grant } from "@/lib/grants";

const GOLD = "#C7A14A";
const INK = "#1B2A21";
const BODY = "#4A584E";

export default function GrantsPage() {
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
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD, margin: "0 0 6px" }}>Reference</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontStyle: "italic", fontSize: 38, lineHeight: 1.04, letterSpacing: "-0.018em", color: "#F1EEE2", margin: 0 }}>Non-Dilutive Funding</h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.5, color: "#9FBFAD", margin: "10px auto 0", maxWidth: 520 }}>{GRANTS_INTRO}</p>
          </div>
        </header>

        {/* Body */}
        <div className="rmp-body" style={{ position: "relative", zIndex: 1 }}>

          {/* How much we can raise */}
          <div className="rm-now-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 28 }}>
            <RaiseStat label="Product Dev · 3-yr" value={TRACK_TOTALS.product.total} sub={`${TRACK_TOTALS.product.y1} · ${TRACK_TOTALS.product.y2} · ${TRACK_TOTALS.product.y3}`} color="#2C7350" />
            <RaiseStat label="AI Fluency Standard · 3-yr" value={TRACK_TOTALS.standard.total} sub={`${TRACK_TOTALS.standard.y1} · ${TRACK_TOTALS.standard.y2} · ${TRACK_TOTALS.standard.y3}`} color="#1E4D38" />
            <RaiseStat label="Combined · 3-yr" value={TRACK_TOTALS.combined.total} sub={`${TRACK_TOTALS.combined.y1} · ${TRACK_TOTALS.combined.y2} · ${TRACK_TOTALS.combined.y3}`} color={GOLD} />
          </div>

          <GrantGroup label="Product dev — Platform / AI Fluency Tracker" grants={GRANTS.filter((g) => g.category === "product")} note={GRANTS_NOTE.product} subtotal={TRACK_TOTALS.product} />
          <GrantGroup label="AI Fluency Standard — curriculum & credential" grants={GRANTS.filter((g) => g.category === "standard")} note={GRANTS_NOTE.standard} subtotal={TRACK_TOTALS.standard} />

          {/* Upside not counted */}
          <section style={{ marginBottom: 4 }}>
            <SectionBar label="Upside not counted above" />
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
              {UPSIDE_NOT_COUNTED.map((u) => (
                <li key={u} style={{ display: "flex", gap: 9, fontFamily: "var(--font-sans)", fontSize: 12.5, color: BODY, lineHeight: 1.5 }}>
                  <span style={{ color: "#8A968C", flexShrink: 0, fontWeight: 700 }}>·</span> {u}
                </li>
              ))}
            </ul>
          </section>

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

type TrackTotal = { y1: string; y2: string; y3: string; total: string };

function GrantGroup({ label, grants, note, subtotal }: { label: string; grants: Grant[]; note: string; subtotal: TrackTotal }) {
  return (
    <section style={{ marginBottom: 30 }}>
      <SectionBar label={label} />
      <div style={{ marginBottom: 12, border: "1px solid rgba(27,42,33,0.12)", borderRadius: 10, boxShadow: "0 1px 3px rgba(27,42,33,0.05)", overflow: "hidden" }}>
        <table style={{ width: "100%", tableLayout: "fixed", borderCollapse: "collapse", background: "#fff" }}>
          <colgroup>
            <col style={{ width: "20%" }} />
            <col style={{ width: "32%" }} />
            <col style={{ width: "32%" }} />
            <col style={{ width: "16%" }} />
          </colgroup>
          <thead>
            <tr style={{ background: "#1E4D38" }}>
              <th style={thStyle}>Program</th>
              <th style={thStyle}>What it funds</th>
              <th style={thStyle}>Why it fits</th>
              <th style={thStyle}>Est. raise</th>
            </tr>
          </thead>
          <tbody>
            {grants.map((g, i) => (
              <tr key={g.name} style={{ background: i % 2 === 1 ? "rgba(44,115,80,0.045)" : "transparent" }}>
                <td style={{ ...tdStyle, fontWeight: 700, color: INK }}>{g.name}</td>
                <td style={{ ...tdStyle, color: BODY }}>{g.what}</td>
                <td style={{ ...tdStyle, color: "#2C7350" }}>{g.fit}</td>
                <td style={{ ...tdStyle, color: g.raise.startsWith("Not") ? "#8A968C" : INK, fontWeight: g.raise.startsWith("Not") ? 400 : 600, fontStyle: g.raise.startsWith("Not") ? "italic" : "normal" }}>{g.raise}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr style={{ borderTop: "2px solid rgba(27,42,33,0.14)", background: "rgba(199,161,74,0.10)" }}>
              <td style={{ ...tdStyle, fontWeight: 700, color: INK }} colSpan={3}>3-yr subtotal</td>
              <td style={{ ...tdStyle, fontWeight: 700, color: INK }}>{subtotal.total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, fontStyle: "italic", color: "#6B7A6F", lineHeight: 1.5, margin: 0, background: "rgba(199,161,74,0.08)", border: "1px solid rgba(199,161,74,0.24)", borderRadius: 8, padding: "10px 13px" }}>{note}</p>
    </section>
  );
}

function RaiseStat({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div style={{ background: "#fff", border: "1px solid rgba(27,42,33,0.12)", borderTop: `3px solid ${color}`, borderRadius: 12, padding: "14px 16px", textAlign: "center", boxShadow: "0 1px 3px rgba(27,42,33,0.05)" }}>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A968C", margin: "0 0 6px" }}>{label}</p>
      <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 26, color, margin: "0 0 4px" }}>{value}</p>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, color: "#8A968C", margin: 0 }}>{sub}</p>
    </div>
  );
}

const thStyle: React.CSSProperties = {
  textAlign: "left", padding: "9px 10px", fontFamily: "var(--font-sans)", fontSize: 9.5,
  fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#F4F1E6",
  borderBottom: "2px solid rgba(199,161,74,0.5)", overflowWrap: "break-word",
};
const tdStyle: React.CSSProperties = {
  textAlign: "left", padding: "10px 10px", fontFamily: "var(--font-sans)", fontSize: 11.5,
  lineHeight: 1.45, verticalAlign: "top", borderBottom: "1px solid rgba(27,42,33,0.08)",
  overflowWrap: "break-word",
};

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
