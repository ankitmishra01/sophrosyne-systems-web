import Link from "next/link";

const GOLD = "#C7A14A";
const INK = "#1B2A21";

// The One-Pager is the AI Fluency Standard brief, served at /aifluencystandard (a separate,
// login-gated project proxied on this domain). Embedded here so it lives inside the
// Knowledge Centre with the sidebar; "Open full page" jumps to the standalone view.
export default function OnePagerPage() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ flexShrink: 0, padding: "14px 24px", background: "#fff", borderBottom: "1px solid rgba(27,42,33,0.10)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: GOLD, margin: "0 0 2px" }}>One-Pager</p>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18, color: INK, margin: 0, lineHeight: 1 }}>The AI Fluency Standard</p>
        </div>
        <Link href="/portal" style={{ flexShrink: 0, fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "#1E4D38" }}>← Knowledge Centre</Link>
      </div>
      <iframe
        src="/aifluencystandard"
        title="The AI Fluency Standard"
        style={{ flex: 1, width: "100%", border: "none", display: "block" }}
      />
    </div>
  );
}
