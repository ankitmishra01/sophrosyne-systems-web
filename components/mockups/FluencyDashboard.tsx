// Honest, presentational mockup of the AI Fluency Tracker — the portal screen
// deans/provosts see. No pulsing "Live" theatre; framed as a sample view.
// Colors use brand tokens. Rendered inside a BrowserFrame by the caller.

const DEPARTMENTS = [
  { name: "Business", band: "B1 · Threshold", pct: 72, delta: "+14" },
  { name: "Engineering", band: "B2 · Vantage", pct: 81, delta: "+9" },
  { name: "Health Sciences", band: "A2 · Waystage", pct: 54, delta: "+21" },
  { name: "Arts & Humanities", band: "A2 · Waystage", pct: 48, delta: "+18" },
  { name: "Education", band: "B1 · Threshold", pct: 66, delta: "+12" },
];

const DIST = [
  { level: "A1", n: 6 },
  { level: "A2", n: 13 },
  { level: "B1", n: 15 },
  { level: "B2", n: 9 },
  { level: "C1", n: 3 },
  { level: "C2", n: 1 },
];

export default function FluencyDashboard() {
  const maxN = Math.max(...DIST.map((d) => d.n));
  return (
    <div style={{ display: "grid", gridTemplateColumns: "150px 1fr", minHeight: 380, fontFamily: "var(--font-libre-franklin), sans-serif" }}>
      {/* Sidebar */}
      <div style={{ borderRight: "1px solid rgba(27,42,33,0.08)", padding: "18px 14px", background: "#FAF8F2" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#B5862E", marginBottom: 16 }}>
          Fluency Tracker
        </div>
        {["Overview", "Departments", "Students", "Evidence", "Accreditor export"].map((t, i) => (
          <div
            key={t}
            style={{
              fontSize: 12.5,
              fontWeight: i === 0 ? 600 : 500,
              color: i === 0 ? "#1E4D38" : "#4A584E",
              background: i === 0 ? "rgba(30,77,56,0.08)" : "transparent",
              borderRadius: 6,
              padding: "8px 10px",
              marginBottom: 3,
            }}
          >
            {t}
          </div>
        ))}
      </div>

      {/* Main */}
      <div style={{ padding: "20px 22px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 4 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#16241B", fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
            Institution AI Fluency
          </div>
          <div style={{ fontSize: 11.5, color: "#8A968C" }}>47 students · measured, not self-reported</div>
        </div>
        <div style={{ fontSize: 12.5, color: "#4A584E", marginBottom: 18 }}>
          Currently trending <b style={{ color: "#1E4D38" }}>B1 · Threshold</b> — target <b style={{ color: "#B5862E" }}>B2 · Vantage</b> by year end.
        </div>

        {/* Distribution bars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10, alignItems: "end", height: 84, marginBottom: 22, paddingBottom: 8, borderBottom: "1px solid rgba(27,42,33,0.07)" }}>
          {DIST.map((d) => (
            <div key={d.level} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#4A584E", fontVariantNumeric: "tabular-nums" }}>{d.n}</span>
              <div
                style={{
                  width: "100%",
                  height: `${8 + (d.n / maxN) * 52}px`,
                  background: d.n > 0 ? "#1E4D38" : "rgba(27,42,33,0.08)",
                  borderRadius: "4px 4px 0 0",
                }}
              />
              <span style={{ fontSize: 10.5, fontWeight: 600, color: "#8A968C" }}>{d.level}</span>
            </div>
          ))}
        </div>

        {/* Department rows */}
        <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8A968C", marginBottom: 10 }}>
          By department
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          {DEPARTMENTS.map((d) => (
            <div key={d.name} style={{ display: "grid", gridTemplateColumns: "128px 1fr 92px 40px", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 12.5, fontWeight: 500, color: "#16241B" }}>{d.name}</span>
              <div style={{ height: 6, background: "rgba(27,42,33,0.07)", borderRadius: 999, overflow: "hidden" }}>
                <div style={{ width: `${d.pct}%`, height: "100%", background: "linear-gradient(90deg,#1E4D38,#3E7A5C)", borderRadius: 999 }} />
              </div>
              <span style={{ fontSize: 11.5, color: "#4A584E" }}>{d.band}</span>
              <span style={{ fontSize: 11.5, fontWeight: 600, color: "#2E7D46", textAlign: "right" }}>{d.delta}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
