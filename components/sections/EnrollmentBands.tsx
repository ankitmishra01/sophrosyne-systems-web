"use client";

import { motion } from "framer-motion";
import { ENROLLMENT_BANDS } from "@/lib/data";

const COLS = [
  "Enrollment",
  "Readiness Audit",
  "90-Day Pilot",
  "Platform Launch",
  "",
] as const;

export default function EnrollmentBands() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#ECF1EC",
        borderTop: "1px solid rgba(27,42,33,0.07)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              fontFamily: "var(--font-libre-franklin), sans-serif",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#B5862E",
              margin: "0 0 14px",
            }}
          >
            Pricing by Enrollment
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 42px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21",
              margin: "0 0 12px",
              letterSpacing: "-0.012em",
            }}
          >
            Find your institution&apos;s band.
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              color: "#5A6B60",
              maxWidth: 560,
              margin: "0 0 40px",
            }}
          >
            Indicative ranges so you can self-qualify before a single call.
            Final scope is set during the audit; multi-campus systems are priced
            together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          style={{
            overflowX: "auto",
            borderRadius: "var(--radius-card)",
            border: "1px solid rgba(27,42,33,0.10)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <table
            style={{
              width: "100%",
              minWidth: 640,
              borderCollapse: "collapse",
              background: "#FFFFFF",
            }}
          >
            <thead>
              <tr style={{ background: "#1E4D38" }}>
                {COLS.map((c, i) => (
                  <th
                    key={i}
                    style={{
                      textAlign: i === 0 ? "left" : "center",
                      padding: "14px 20px",
                      fontSize: 10,
                      fontWeight: 600,
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#C9D9CE",
                    }}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ENROLLMENT_BANDS.map((b, i) => (
                <tr
                  key={b.size}
                  style={{
                    borderTop: i === 0 ? "none" : "1px solid rgba(27,42,33,0.08)",
                  }}
                  className="band-row"
                >
                  <td
                    style={{
                      padding: "16px 20px",
                      fontSize: 14,
                      fontWeight: 500,
                      fontFamily: "var(--font-newsreader), serif",
                      color: "#1B2A21",
                    }}
                  >
                    {b.size}
                  </td>
                  {[b.audit, b.pilot, b.launch].map((v, j) => (
                    <td
                      key={j}
                      style={{
                        padding: "16px 20px",
                        textAlign: "center",
                        fontSize: 15,
                        fontWeight: 500,
                        fontFamily: "var(--font-newsreader), serif",
                        color: "#1E4D38",
                      }}
                    >
                      {v}
                    </td>
                  ))}
                  <td
                    style={{
                      padding: "16px 20px",
                      textAlign: "center",
                      fontSize: 12,
                      fontStyle: "italic",
                      color: "#4A584E",
                      fontFamily: "var(--font-newsreader), serif",
                    }}
                  >
                    {b.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>

      <style>{`
        .band-row { transition: background 160ms ease; }
        .band-row:hover { background: rgba(30,77,56,0.03) !important; }
      `}</style>
    </section>
  );
}
