"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ClassComplete({
  levelCode,
  classN,
  userId,
  color,
  initialDone,
}: {
  levelCode: string;
  classN: number;
  userId: string;
  color: string;
  initialDone: boolean;
}) {
  const supabase = createClient();
  const [done, setDone] = useState(initialDone);
  const [busy, setBusy] = useState(false);
  const [warn, setWarn] = useState<string | null>(null);

  const toggle = async () => {
    setBusy(true);
    setWarn(null);
    const next = !done;
    setDone(next); // optimistic

    const { error } = next
      ? await supabase.from("class_progress").upsert(
          { user_id: userId, level: levelCode, class_n: classN },
          { onConflict: "user_id,level,class_n" }
        )
      : await supabase.from("class_progress").delete().match({ user_id: userId, level: levelCode, class_n: classN });

    if (error) {
      setDone(!next); // revert
      setWarn("Couldn't save progress — the class_progress table may not be set up.");
    }
    setBusy(false);
  };

  return (
    <div>
      <button
        onClick={toggle}
        disabled={busy}
        style={{
          padding: "11px 22px", borderRadius: 9,
          fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600,
          cursor: busy ? "default" : "pointer",
          border: done ? "1px solid rgba(27,42,33,0.18)" : "none",
          background: done ? "transparent" : color,
          color: done ? "#4A584E" : "#fff",
          opacity: busy ? 0.6 : 1, transition: "opacity 160ms",
        }}
      >
        {busy ? "Saving…" : done ? "✓ Completed — undo" : "Mark complete"}
      </button>
      {warn && <p style={{ marginTop: 8, fontFamily: "var(--font-sans)", fontSize: 12.5, color: "#B0726A", margin: "8px 0 0" }}>{warn}</p>}
    </div>
  );
}
