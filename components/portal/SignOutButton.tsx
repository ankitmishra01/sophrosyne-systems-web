"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignOutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const signOut = async () => {
    setLoading(true);
    await createClient().auth.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <button
      onClick={signOut}
      disabled={loading}
      style={{
        background: "transparent",
        border: "1px solid rgba(27,42,33,0.18)",
        borderRadius: 7,
        padding: "7px 14px",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 600,
        color: "#1B2A21",
        cursor: loading ? "default" : "pointer",
        transition: "background 160ms",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(27,42,33,0.05)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
    >
      {loading ? "Signing out…" : "Sign out"}
    </button>
  );
}
