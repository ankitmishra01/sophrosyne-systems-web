import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { CURRICULUM, TOTAL_CLASSES } from "@/lib/curriculum";

const GOLD = "#C7A14A";
const INK = "#1B2A21";
const BODY = "#4A584E";

const BANDS = ["Basic User", "Independent User", "Proficient User"] as const;

export default async function CurriculumPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  let rows: { level: string; class_n: number }[] = [];
  const { data, error } = await supabase.from("class_progress").select("level, class_n").eq("user_id", user.id);
  if (!error && data) rows = data;

  const countByLevel = (code: string) => rows.filter((r) => r.level === code).length;
  const totalDone = rows.length;
  const currentIdx = CURRICULUM.findIndex((l) => countByLevel(l.code) < l.classes.length);
  const pct = Math.round((totalDone / TOTAL_CLASSES) * 100);

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
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 11.5, color: "rgba(225,238,228,0.72)", margin: 0, letterSpacing: "0.04em" }}>{totalDone} / {TOTAL_CLASSES} classes</p>
            <div className="rmp-headspacer" />
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD, margin: "0 0 6px" }}>Programme</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontStyle: "italic", fontSize: 38, lineHeight: 1.04, letterSpacing: "-0.018em", color: "#F1EEE2", margin: 0 }}>AI Fluency Curriculum</h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.5, color: "#9FBFAD", margin: "10px auto 0", maxWidth: 480 }}>
              Six levels, six classes each — every level earned by shipping a real build, A1 to C2.
            </p>
          </div>
        </header>

        {/* Body */}
        <div className="rmp-body" style={{ position: "relative", zIndex: 1 }}>
          {/* overall progress */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28, maxWidth: 560 }}>
            <div style={{ flex: 1, height: 8, background: "rgba(27,42,33,0.10)", borderRadius: 999, overflow: "hidden" }}>
              <div style={{ width: `${pct}%`, height: "100%", background: "#1E4D38", borderRadius: 999 }} />
            </div>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 600, color: INK, whiteSpace: "nowrap" }}>{pct}% complete</span>
          </div>

          {BANDS.map((band) => {
            const levels = CURRICULUM.filter((l) => l.band === band);
            return (
              <section key={band} style={{ marginBottom: 22 }}>
                <SectionBar label={band} />
                <div className="cur-levels" style={{ marginBottom: 24 }}>
                  {levels.map((l) => {
                    const c = countByLevel(l.code);
                    const complete = c >= l.classes.length;
                    const isCurrent = CURRICULUM.indexOf(l) === currentIdx;
                    return (
                      <Link key={l.code} href={`/portal/curriculum/${l.code.toLowerCase()}`} style={{ textDecoration: "none" }}>
                        <div style={{ background: "#fff", border: `1px solid ${isCurrent ? l.border : "rgba(27,42,33,0.12)"}`, borderTop: `3px solid ${l.color}`, borderRadius: 12, padding: "16px 18px", boxShadow: "0 1px 3px rgba(27,42,33,0.05)", height: "100%" }}>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 11 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 10, background: l.color, color: "#fff", fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 16 }}>{l.code}</span>
                              <div>
                                <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18, color: INK, margin: 0, lineHeight: 1.1 }}>{l.name}</p>
                                <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "#8A968C", margin: "2px 0 0" }}>{l.band} · {l.hours}h · 6 classes</p>
                              </div>
                            </div>
                            {complete
                              ? <span style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 700, color: l.color, background: l.tint, border: `1px solid ${l.border}`, borderRadius: 999, padding: "3px 9px" }}>✓ Done</span>
                              : isCurrent
                                ? <span style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 700, color: GOLD, background: "rgba(199,161,74,0.12)", border: "1px solid rgba(199,161,74,0.30)", borderRadius: 999, padding: "3px 9px" }}>In progress</span>
                                : null}
                          </div>
                          <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: BODY, lineHeight: 1.5, margin: "0 0 14px" }}>{l.focus}</p>
                          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div style={{ flex: 1, height: 6, background: "rgba(27,42,33,0.08)", borderRadius: 999, overflow: "hidden" }}>
                              <div style={{ width: `${(c / l.classes.length) * 100}%`, height: "100%", background: l.color, borderRadius: 999 }} />
                            </div>
                            <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "#8A968C", whiteSpace: "nowrap" }}>{c}/{l.classes.length}</span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}

          {/* Footer */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 12, marginTop: 8 }}>
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
