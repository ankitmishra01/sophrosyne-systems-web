import Link from "next/link";

const GOLD = "#C7A14A";
const INK = "#1B2A21";

const SECTIONS = [
  {
    href: "/portal/one-pager",
    eyebrow: "Standard",
    title: "One-Pager",
    body: "The AI Fluency Standard — our A1–C2 capability framework brief. The shared document we use when working with experts.",
    color: "#2C7350",
  },
  {
    href: "/portal/roadmap",
    eyebrow: "Tracking",
    title: "Product Roadmap",
    body: "Where the platform is today, the six-step path to the north star, and how the build is funded — bootstrapped on consulting + grants.",
    color: "#236444",
  },
  {
    href: "/portal/business",
    eyebrow: "Strategy",
    title: "Business Operations",
    body: "An honest read of the business — the gaps, the Now/Next/Later fix roadmap, and the two decisions to make.",
    color: "#1A5638",
  },
  {
    href: "/portal/curriculum",
    eyebrow: "Programme",
    title: "Curriculum",
    body: "The full A1→C2 AI-fluency curriculum — six levels, six classes each, every level earned with a real build. Track your own progress.",
    color: "#123D27",
  },
];

export default function PortalHome() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: "52px 40px 72px" }}>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: GOLD, margin: "0 0 10px" }}>Knowledge Centre</p>
      <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 500, fontSize: 42, lineHeight: 1.06, color: INK, margin: "0 0 12px" }}>
        Everything we use to work with experts
      </h1>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "#4A584E", lineHeight: 1.6, margin: "0 0 40px", maxWidth: 620 }}>
        The internal home for our AI Fluency work — the product one-pager, a live roadmap of what
        we&apos;re building, and the full curriculum. Pick a section to get started.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 18 }}>
        {SECTIONS.map((s) => (
          <Link key={s.href} href={s.href} style={{ textDecoration: "none" }}>
            <div style={{ background: "#fff", border: "1px solid rgba(27,42,33,0.10)", borderTop: `3px solid ${s.color}`, borderRadius: 14, padding: "22px 22px 24px", boxShadow: "var(--shadow-card)", height: "100%" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: s.color, margin: "0 0 8px" }}>{s.eyebrow}</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 500, fontSize: 23, color: INK, margin: "0 0 10px" }}>{s.title}</h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, color: "#4A584E", lineHeight: 1.55, margin: "0 0 16px" }}>{s.body}</p>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: s.color }}>Open →</span>
            </div>
          </Link>
        ))}
      </div>

      {/* live platform callout */}
      <div style={{ marginTop: 36, background: "#173A2A", borderRadius: 14, padding: "24px 26px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
        <div>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 19, color: "#F1EEE2", margin: "0 0 4px" }}>The live platform</p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, color: "rgba(159,191,173,0.85)", margin: 0 }}>See the product itself — sign in at platform.sophrosynesystems.org.</p>
        </div>
        <a href="https://platform.sophrosynesystems.org/login" target="_blank" rel="noopener noreferrer"
          style={{ flexShrink: 0, background: GOLD, color: "#1B2A21", fontFamily: "var(--font-sans)", fontSize: 13.5, fontWeight: 700, padding: "11px 20px", borderRadius: 8 }}>
          Open the platform ↗
        </a>
      </div>
    </div>
  );
}
