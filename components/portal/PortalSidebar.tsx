"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const GOLD = "#C7A14A";
const ON_DARK = "#9FBFAD";
const ON_BRIGHT = "#F1EEE2";

type NavItem = { label: string; href: string; icon: React.ReactNode };

const NAV: NavItem[] = [
  { label: "Home", href: "/portal", icon: <IconHome /> },
  { label: "One-Pager", href: "/portal/one-pager", icon: <IconDoc /> },
  { label: "Product Roadmap", href: "/portal/roadmap", icon: <IconMap /> },
  { label: "Business Ops", href: "/portal/business", icon: <IconChart /> },
  { label: "Curriculum", href: "/portal/curriculum", icon: <IconBook /> },
];

export default function PortalSidebar({ email }: { email: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  const isActive = (href: string) =>
    href === "/portal" ? pathname === "/portal" : pathname === href || pathname.startsWith(`${href}/`);

  const signOut = async () => {
    setSigningOut(true);
    await createClient().auth.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <aside className={`portal-sidebar${open ? "" : " is-closed"}`}>
      {/* Mobile bar */}
      <div className="portal-mobilebar" style={{ alignItems: "center", justifyContent: "space-between", padding: "14px 18px" }}>
        <Brand />
        <button onClick={() => setOpen((o) => !o)} aria-label="Toggle menu"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: 8, padding: "7px 10px", color: ON_BRIGHT, fontSize: 15, lineHeight: 1 }}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Desktop brand */}
      <div className="portal-brand-desktop" style={{ padding: "24px 22px 20px" }}>
        <Brand />
      </div>

      {/* Nav */}
      <nav className="portal-nav" style={{ padding: "6px 14px", gap: 3 }}>
        {NAV.map((item) => {
          const active = isActive(item.href);
          return (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
              style={{
                display: "flex", alignItems: "center", gap: 11, padding: "10px 12px", borderRadius: 9,
                fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: active ? 600 : 500,
                color: active ? ON_BRIGHT : ON_DARK,
                background: active ? "rgba(199,161,74,0.14)" : "transparent",
                boxShadow: active ? `inset 2px 0 0 ${GOLD}` : "none",
                transition: "background 150ms, color 150ms",
              }}>
              <span style={{ display: "inline-flex", width: 17, height: 17, color: active ? GOLD : "rgba(159,191,173,0.75)" }}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div style={{ flex: 1 }} />

      {/* Footer: external platform link + account */}
      <div className="portal-foot" style={{ padding: "14px 18px 20px", borderTop: "1px solid rgba(241,238,226,0.08)" }}>
        <a href="https://platform.sophrosynesystems.org/login" target="_blank" rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 600, color: ON_DARK, marginBottom: 14 }}>
          <span style={{ color: GOLD }}>↗</span> Open the live platform
        </a>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 11.5, color: "rgba(159,191,173,0.7)", margin: "0 0 8px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{email}</p>
        <button onClick={signOut} disabled={signingOut}
          style={{ width: "100%", background: "transparent", border: "1px solid rgba(241,238,226,0.18)", borderRadius: 8, padding: "8px 12px", fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 600, color: ON_BRIGHT, cursor: signingOut ? "default" : "pointer" }}>
          {signingOut ? "Signing out…" : "Sign out"}
        </button>
      </div>
    </aside>
  );
}

function Brand() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width={24} height={24} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <g stroke={GOLD} strokeWidth={2.4} strokeLinecap="round">
          <line x1="24" y1="45" x2="24" y2="26" />
          <line x1="24" y1="26" x2="9.3" y2="17.5" />
          <line x1="24" y1="26" x2="15.5" y2="11.3" />
          <line x1="24" y1="26" x2="24" y2="9" />
          <line x1="24" y1="26" x2="32.5" y2="11.3" />
          <line x1="24" y1="26" x2="38.7" y2="17.5" />
        </g>
        <circle cx="24" cy="26" r="3" fill={GOLD} />
      </svg>
      <div style={{ lineHeight: 1.15 }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 700, color: ON_BRIGHT, margin: 0 }}>AI Fluency</p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 9.5, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(159,191,173,0.65)", margin: 0 }}>Knowledge Centre</p>
      </div>
    </div>
  );
}

/* ── Icons (stroke = currentColor) ── */
function IconHome() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></svg>;
}
function IconDoc() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3h7l5 5v13H7z" /><path d="M14 3v5h5" /><path d="M10 13h6M10 17h6" /></svg>;
}
function IconMap() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="12" r="2" /><path d="M6 8v8M8 6h6a2 2 0 0 1 2 2v2M8 18h6a2 2 0 0 0 2-2v-2" /></svg>;
}
function IconBook() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5a2 2 0 0 1 2-2h7v16H6a2 2 0 0 0-2 2z" /><path d="M20 5a2 2 0 0 0-2-2h-5v16h5a2 2 0 0 1 2 2z" /></svg>;
}
function IconChart() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V4" /><path d="M4 20h16" /><rect x="8" y="11" width="3" height="6" /><rect x="14" y="7" width="3" height="10" /></svg>;
}
