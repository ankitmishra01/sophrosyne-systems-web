"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const PINE = "#1E4D38";
const GOLD = "#C7A14A";
const PARCH = "#F4F0E6";
const INK = "#1B2A21";

const PATHWAY = [
  { code: "A1", name: "Breakthrough" },
  { code: "A2", name: "Waystage" },
  { code: "B1", name: "Threshold" },
  { code: "B2", name: "Vantage" },
  { code: "C1", name: "Advanced" },
  { code: "C2", name: "Mastery" },
];

function SparkMark({ size = 34, stroke = GOLD }: { size?: number; stroke?: string }) {
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
      <circle cx="24" cy="26" r="3" fill={stroke} />
    </svg>
  );
}

function GoogleGlyph() {
  return (
    <svg width={16} height={16} viewBox="0 0 48 48" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8a12 12 0 1 1 0-24c3.1 0 5.9 1.2 8 3.1l5.7-5.7A20 20 0 1 0 24 44c11 0 20-8 20-20 0-1.3-.1-2.5-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8A12 12 0 0 1 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7A20 20 0 0 0 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A12 12 0 0 1 12.7 28l-6.5 5A20 20 0 0 0 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C39.7 36 44 30.6 44 24c0-1.3-.1-2.5-.4-3.5z" />
    </svg>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<null | "google">(null);
  const [error, setError] = useState<string | null>(null);
  const [sentEmail, setSentEmail] = useState(false);
  const [denied, setDenied] = useState(false);

  // Show the "not authorised" notice when middleware bounced a signed-in,
  // non-allowlisted account here (?denied=1). Read after mount to avoid hydration mismatch.
  useEffect(() => {
    setDenied(new URLSearchParams(window.location.search).get("denied") === "1");
  }, []);

  const switchAccount = async () => {
    await supabase.auth.signOut();
    setDenied(false);
    router.refresh();
  };

  // Where to land after auth — honours ?next= (e.g. /aifluencystandard), defaults to /portal.
  const getNext = () => {
    if (typeof window === "undefined") return "/portal";
    const n = new URLSearchParams(window.location.search).get("next");
    return n && /^\/[^/]/.test(n) ? n : "/portal";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const next = getNext();

    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError("Invalid email or password.");
        setLoading(false);
        return;
      }
      router.push(next);
      router.refresh();
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}` },
      });
      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
      setSentEmail(true);
      setLoading(false);
    }
  };

  const handleOAuth = async (provider: "google") => {
    setOauthLoading(provider);
    setError(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(getNext())}`,
        scopes: "email profile",
      },
    });
    if (error) {
      setError("Google sign-in isn't available yet. Use your email and password below.");
      setOauthLoading(null);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 13px",
    border: "1px solid rgba(27,42,33,0.16)",
    borderRadius: 8,
    fontSize: 14,
    fontFamily: "var(--font-sans)",
    color: INK,
    background: "#fff",
    outline: "none",
    transition: "border-color 180ms, box-shadow 180ms",
  };

  return (
    <div className="login-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", minHeight: "100vh" }}>
      {/* ── Left: pine brand panel ── */}
      <div style={{ background: PINE, padding: "52px 56px", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(241,238,226,0.03) 0px, rgba(241,238,226,0.03) 1px, transparent 1px, transparent 16px)", pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", top: -60, right: -60, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(199,161,74,0.10) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 10, marginBottom: 48 }}>
          <SparkMark size={30} />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(210,228,218,0.72)" }}>
            Sophrosyne Systems
          </span>
        </div>

        <div style={{ position: "relative", zIndex: 1, marginBottom: 34 }}>
          <h1 style={{ fontSize: "clamp(30px, 3.2vw, 44px)", fontWeight: 500, fontFamily: "var(--font-serif)", fontStyle: "italic", margin: "0 0 14px", letterSpacing: "-0.022em", lineHeight: 1.08, color: PARCH }}>
            Knowledge Centre
          </h1>
          <div style={{ width: 48, height: 2, background: GOLD, borderRadius: 99, marginBottom: 14, opacity: 0.85 }} />
          <p style={{ fontSize: 14, fontFamily: "var(--font-sans)", color: "rgba(159,191,173,0.78)", margin: 0, lineHeight: 1.6, maxWidth: 340 }}>
            Institutional AI literacy — credentialled, portable, and built to last.
          </p>
        </div>

        {/* Epigraph */}
        <div style={{ position: "relative", zIndex: 1, borderLeft: `2px solid rgba(199,161,74,0.35)`, paddingLeft: 20, marginTop: 8 }}>
          <p style={{ fontSize: 15.5, fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, color: "rgba(244,240,230,0.72)", margin: "0 0 12px", lineHeight: 1.55, letterSpacing: "-0.01em" }}>
            &ldquo;The measure of fluency is not what you can do with AI — but what you can think with it.&rdquo;
          </p>
          <span style={{ fontSize: 10, fontWeight: 600, fontFamily: "var(--font-sans)", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(199,161,74,0.55)" }}>
            Sophrosyne Systems
          </span>
        </div>

        <p style={{ position: "relative", zIndex: 1, fontSize: 11, fontFamily: "var(--font-sans)", color: "rgba(159,191,173,0.40)", lineHeight: 1.6, marginTop: "auto" }}>
          Confidential · authorised access only.
        </p>
      </div>

      {/* ── Right: form ── */}
      <div style={{ padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center", background: PARCH }}>
        <div style={{ maxWidth: 400, width: "100%", margin: "0 auto" }}>
          {/* Mobile-only brand (left panel hidden < 760px) */}
          <div className="login-mobile-brand" style={{ display: "none", alignItems: "center", gap: 9, marginBottom: 28 }}>
            <SparkMark size={26} stroke={PINE} />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: PINE }}>
              Sophrosyne Systems
            </span>
          </div>

          {denied && (
            <div style={{ background: "rgba(176,114,106,0.08)", border: "1px solid rgba(176,114,106,0.25)", borderRadius: 10, padding: "14px 16px", marginBottom: 22 }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, fontWeight: 600, color: "#8A4B43", margin: "0 0 4px" }}>This account isn&apos;t authorised</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "#6E5550", lineHeight: 1.5, margin: "0 0 10px" }}>
                The Knowledge Centre is limited to approved accounts. Sign in with an authorised email, or contact Sophrosyne for access.
              </p>
              <button onClick={switchAccount} style={{ background: "none", border: "none", color: "#1E4D38", fontWeight: 600, fontFamily: "var(--font-sans)", fontSize: 13, cursor: "pointer", padding: 0 }}>
                Sign out &amp; use another account →
              </button>
            </div>
          )}

          {sentEmail ? (
            <div style={{ textAlign: "center", padding: "12px 0" }}>
              <div style={{ display: "inline-flex", marginBottom: 16 }}><SparkMark size={36} stroke={PINE} /></div>
              <h2 style={{ fontSize: 26, fontWeight: 500, fontFamily: "var(--font-serif)", color: INK, margin: "0 0 8px" }}>Check your email</h2>
              <p style={{ fontSize: 14, color: "#4A584E", fontFamily: "var(--font-sans)", lineHeight: 1.6, margin: "0 0 20px" }}>
                We sent a confirmation link to <strong style={{ color: INK }}>{email}</strong>. Click it to activate your account, then sign in.
              </p>
              <button onClick={() => { setSentEmail(false); setMode("signin"); }} style={{ background: "none", border: "none", color: PINE, fontWeight: 600, fontFamily: "var(--font-sans)", fontSize: 14, cursor: "pointer" }}>
                ← Back to sign in
              </button>
            </div>
          ) : (
            <>
              <h2 style={{ fontSize: 32, fontWeight: 500, fontFamily: "var(--font-serif)", color: INK, margin: "0 0 6px", letterSpacing: "-0.02em" }}>
                {mode === "signin" ? "Welcome back" : "Create your account"}
              </h2>
              <p style={{ fontSize: 14, color: "rgba(27,42,33,0.58)", fontFamily: "var(--font-sans)", margin: "0 0 26px" }}>
                {mode === "signin" ? "Access your Knowledge Centre." : "Start your A1 → C2 fluency pathway."}
              </p>

              {/* Social sign-in */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <button onClick={() => handleOAuth("google")} disabled={!!oauthLoading} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "11px 16px", background: "#fff", border: "1px solid rgba(27,42,33,0.18)", borderRadius: 8, fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: INK, cursor: oauthLoading ? "default" : "pointer", transition: "background 180ms" }}
                  onMouseEnter={(e) => { if (!oauthLoading) e.currentTarget.style.background = "#F4F1EA"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; }}>
                  <GoogleGlyph />
                  {oauthLoading === "google" ? "Redirecting…" : "Continue with Google"}
                </button>
              </div>

              {/* divider */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0" }}>
                <span style={{ flex: 1, height: 1, background: "rgba(27,42,33,0.12)" }} />
                <span style={{ fontSize: 11, fontFamily: "var(--font-sans)", color: "#8A968C", textTransform: "uppercase", letterSpacing: "0.08em" }}>or</span>
                <span style={{ flex: 1, height: 1, background: "rgba(27,42,33,0.12)" }} />
              </div>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, fontFamily: "var(--font-sans)", color: INK, marginBottom: 6 }}>Email</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = PINE; e.target.style.boxShadow = "0 0 0 3px rgba(199,161,74,0.18)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(27,42,33,0.16)"; e.target.style.boxShadow = "none"; }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, fontFamily: "var(--font-sans)", color: INK, marginBottom: 6 }}>Password</label>
                  <input type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = PINE; e.target.style.boxShadow = "0 0 0 3px rgba(199,161,74,0.18)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(27,42,33,0.16)"; e.target.style.boxShadow = "none"; }} />
                </div>

                {error && (
                  <p style={{ fontSize: 13, color: "#B0726A", fontFamily: "var(--font-sans)", background: "rgba(176,114,106,0.08)", border: "1px solid rgba(176,114,106,0.20)", borderRadius: 7, padding: "9px 12px", margin: 0 }}>
                    {error}
                  </p>
                )}

                <button type="submit" disabled={loading} style={{ width: "100%", padding: "13px 22px", background: PINE, color: PARCH, border: "none", borderRadius: 8, fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14.5, letterSpacing: "0.02em", cursor: loading ? "default" : "pointer", opacity: loading ? 0.7 : 1, transition: "opacity 180ms", marginTop: 4 }}>
                  {loading ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
                </button>
              </form>

              <p style={{ fontSize: 13, color: "#8A968C", fontFamily: "var(--font-sans)", marginTop: 20, textAlign: "center" }}>
                {mode === "signin" ? "New here? " : "Already have an account? "}
                <button onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setError(null); }} style={{ background: "none", border: "none", color: PINE, fontWeight: 600, fontFamily: "var(--font-sans)", fontSize: 13, cursor: "pointer", padding: 0 }}>
                  {mode === "signin" ? "Create an account" : "Sign in"}
                </button>
              </p>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 760px) {
          .login-grid { grid-template-columns: 1fr !important; }
          .login-grid > div:first-child { display: none !important; }
          .login-mobile-brand { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
