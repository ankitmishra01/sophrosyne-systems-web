import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { levelByCode } from "@/lib/curriculum";
import ClassComplete from "@/components/portal/ClassComplete";

const GOLD = "#C7A14A";
const INK = "#1B2A21";
const BODY = "#4A584E";

export default async function ClassPage({ params }: { params: Promise<{ level: string; n: string }> }) {
  const { level: levelParam, n: nParam } = await params;
  const level = levelByCode(levelParam);
  const n = Number(nParam);
  if (!level || !Number.isInteger(n) || n < 1 || n > level.classes.length) notFound();
  const k = level.classes[n - 1];
  const base = `/portal/curriculum/${level.code.toLowerCase()}`;

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  let done = false;
  const { data, error } = await supabase
    .from("class_progress")
    .select("class_n")
    .eq("user_id", user.id).eq("level", level.code).eq("class_n", n);
  if (!error && data) done = data.length > 0;

  const prev = n > 1 ? level.classes[n - 2] : null;
  const next = n < level.classes.length ? level.classes[n] : null;

  return (
    <div className="rmp-wrap" style={{ background: "#E5E0D0", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "100%", maxWidth: 820, marginBottom: 14 }}>
        <Link href={base} style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "#1E4D38" }}>← Back to {level.code} · {level.name}</Link>
      </div>

      <div style={{ position: "relative", width: "100%", maxWidth: 820, background: "#FBF9F2", boxShadow: "0 8px 40px rgba(27,42,33,0.16)", overflow: "hidden" }}>

        {/* Header band */}
        <header className="rmp-header" style={{ position: "relative", zIndex: 1, background: "#1C2119", backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.014) 0px, rgba(255,255,255,0.014) 1px, transparent 1px, transparent 16px)" }}>
          <div className="rmp-headrow" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <Spark size={20} gold />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(210,228,218,0.70)" }}>Sophrosyne Systems</span>
            </div>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 11.5, color: "rgba(225,238,228,0.72)", margin: 0, letterSpacing: "0.04em" }}>{level.name}</p>
            <div className="rmp-headspacer" />
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD, margin: "0 0 6px" }}>{level.code} · Class {n} of {level.classes.length}</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontStyle: "italic", fontSize: 34, lineHeight: 1.08, letterSpacing: "-0.018em", color: "#F1EEE2", margin: 0 }}>{k.title}</h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.5, color: "#9FBFAD", margin: "10px auto 0", maxWidth: 520 }}>{k.canDo}</p>
          </div>
        </header>

        {/* Body */}
        <div className="rmp-body" style={{ position: "relative", zIndex: 1 }}>
          <SectionBar label="The framework" />
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, background: level.tint, border: `1px solid ${level.border}`, borderRadius: 9, padding: "8px 14px", marginBottom: 18 }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: level.color }}>Method</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 600, color: INK }}>{k.framework}</span>
          </div>

          <Field label="Outcomes">
            <ul style={{ margin: "5px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
              {k.outcomes.map((o) => (
                <li key={o} style={{ display: "flex", gap: 9, fontFamily: "var(--font-sans)", fontSize: 14, color: "#2E4038", lineHeight: 1.5 }}>
                  <span style={{ color: level.color, flexShrink: 0, fontWeight: 700 }}>→</span> {o}
                </li>
              ))}
            </ul>
          </Field>

          <Field label="Key concepts">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6 }}>
              {k.topics.map((t) => (
                <span key={t} style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: level.color, background: level.tint, border: `1px solid ${level.border}`, borderRadius: 999, padding: "4px 11px" }}>{t}</span>
              ))}
            </div>
          </Field>

          <SectionBar label="Hands-on" />
          <Field label="In class"><p style={fieldText}>{k.activity}</p></Field>
          <Field label="You'll deliver"><p style={fieldText}>{k.deliverable}</p></Field>
          <Field label="Tools">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6 }}>
              {k.tools.map((t) => (
                <span key={t} style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: BODY, background: "#ECF1EC", borderRadius: 6, padding: "4px 10px" }}>{t}</span>
              ))}
            </div>
          </Field>

          {/* Mark complete */}
          <div style={{ marginTop: 24 }}>
            <ClassComplete levelCode={level.code} classN={n} userId={user.id} color={level.color} initialDone={done} />
          </div>

          {/* Prev / next */}
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginTop: 28, paddingTop: 18, borderTop: "1px solid rgba(27,42,33,0.10)" }}>
            {prev
              ? <Link href={`${base}/${n - 1}`} style={navStyle}>← {prev.title}</Link>
              : <span />}
            {next
              ? <Link href={`${base}/${n + 1}`} style={{ ...navStyle, textAlign: "right" }}>{next.title} →</Link>
              : <Link href={base} style={{ ...navStyle, textAlign: "right" }}>All classes →</Link>}
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

const fieldText: React.CSSProperties = { fontFamily: "var(--font-sans)", fontSize: 14, color: "#2E4038", lineHeight: 1.55, margin: "4px 0 0" };
const navStyle: React.CSSProperties = { flex: 1, fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "#1E4D38", maxWidth: "48%" };

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A968C" }}>{label}</span>
      {children}
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
