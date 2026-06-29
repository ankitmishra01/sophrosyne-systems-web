import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { levelByCode } from "@/lib/curriculum";

const GOLD = "#C7A14A";
const INK = "#1B2A21";
const BODY = "#4A584E";

export default async function LevelPage({ params }: { params: Promise<{ level: string }> }) {
  const { level: levelParam } = await params;
  const level = levelByCode(levelParam);
  if (!level) notFound();

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  let done = new Set<number>();
  const { data, error } = await supabase
    .from("class_progress")
    .select("class_n")
    .eq("user_id", user.id).eq("level", level.code);
  if (!error && data) done = new Set(data.map((r) => r.class_n));
  const base = `/portal/curriculum/${level.code.toLowerCase()}`;

  return (
    <div className="rmp-wrap" style={{ background: "#E5E0D0", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "100%", maxWidth: 860, marginBottom: 14 }}>
        <Link href="/portal/curriculum" style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "#1E4D38" }}>← All levels</Link>
      </div>

      <div style={{ position: "relative", width: "100%", maxWidth: 860, background: "#FBF9F2", boxShadow: "0 8px 40px rgba(27,42,33,0.16)", overflow: "hidden" }}>

        {/* Header band */}
        <header className="rmp-header" style={{ position: "relative", zIndex: 1, background: "#1C2119", backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.014) 0px, rgba(255,255,255,0.014) 1px, transparent 1px, transparent 16px)" }}>
          <div className="rmp-headrow" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <Spark size={20} gold />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(210,228,218,0.70)" }}>Sophrosyne Systems</span>
            </div>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 11.5, color: "rgba(225,238,228,0.72)", margin: 0, letterSpacing: "0.04em" }}>Curriculum</p>
            <div className="rmp-headspacer" />
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD, margin: "0 0 6px" }}>{level.code} · {level.band} · {level.hours}h</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontStyle: "italic", fontSize: 38, lineHeight: 1.04, letterSpacing: "-0.018em", color: "#F1EEE2", margin: 0 }}>{level.name}</h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.5, color: "#9FBFAD", margin: "10px auto 0", maxWidth: 500 }}>{level.focus}</p>
          </div>
        </header>

        {/* Body — class index */}
        <div className="rmp-body" style={{ position: "relative", zIndex: 1 }}>
          <SectionBar label={`The six classes · ${done.size}/${level.classes.length} done`} />

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {level.classes.map((k) => {
              const isDone = done.has(k.n);
              return (
                <Link key={k.n} href={`${base}/${k.n}`} style={{ textDecoration: "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, background: "#fff", border: `1px solid ${isDone ? level.border : "rgba(27,42,33,0.12)"}`, borderRadius: 12, padding: "14px 16px", boxShadow: "0 1px 3px rgba(27,42,33,0.05)" }}>
                    <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12.5, fontWeight: 700, fontFamily: "var(--font-sans)", background: isDone ? level.color : level.tint, color: isDone ? "#fff" : level.color, border: `1px solid ${level.border}` }}>
                      {isDone ? "✓" : k.n}
                    </span>
                    <span style={{ flex: 1, minWidth: 0 }}>
                      <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, color: INK }}>{k.title}</span>
                      <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 13, color: BODY, marginTop: 2 }}>{k.canDo}</span>
                      <span style={{ display: "inline-block", marginTop: 7, fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 600, color: level.color, background: level.tint, border: `1px solid ${level.border}`, borderRadius: 6, padding: "2px 8px" }}>{k.framework}</span>
                    </span>
                    <span aria-hidden style={{ flexShrink: 0, color: "#8A968C", fontSize: 16 }}>→</span>
                  </div>
                </Link>
              );
            })}
          </div>

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
    <div style={{ background: "#1E4D38", borderRadius: 8, padding: "9px 18px", margin: "0 0 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
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
