"use client";

import { motion } from "framer-motion";

const KPI_TILES = [
  { label: "Active Students", value: "2,847", delta: "+12% this semester" },
  { label: "Pipelines Deployed", value: "341", delta: "+28 this week" },
  { label: "Compute Credits Used", value: "94.2k", delta: "Consortium pool" },
];

export default function ShowreelSection() {
  return (
    <section
      style={{
        padding: "0 var(--pad-h) var(--section-py)",
        background: "#0f172a",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#10b981",
              margin: "0 0 12px",
            }}
          >
            Sophrosyne Studio · Platform Preview
          </p>
          <h2
            style={{
              fontSize: "clamp(26px, 3.5vw, 44px)",
              fontWeight: 700,
              color: "#f8fafc",
              letterSpacing: "-0.025em",
              margin: 0,
            }}
          >
            The institutional developer environment
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "rgba(248,250,252,0.5)",
              margin: "14px auto 0",
              maxWidth: 520,
            }}
          >
            A secure, low-code AI orchestration platform built for campus
            infrastructure — with full FERPA compliance and data sovereignty.
          </p>
        </motion.div>

        {/* Browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(248,250,252,0.09)",
            boxShadow:
              "0 0 0 1px rgba(16,185,129,0.06), 0 40px 100px rgba(0,0,0,0.6), 0 0 80px rgba(16,185,129,0.04)",
          }}
        >
          {/* Window chrome */}
          <div
            style={{
              background: "#161e2e",
              padding: "12px 16px",
              borderBottom: "1px solid rgba(248,250,252,0.06)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            {/* Mac-style traffic lights */}
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <div
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  background: "#ff5f57",
                  border: "1px solid rgba(0,0,0,0.2)",
                }}
              />
              <div
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  background: "#febc2e",
                  border: "1px solid rgba(0,0,0,0.2)",
                }}
              />
              <div
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  background: "#28c840",
                  border: "1px solid rgba(0,0,0,0.2)",
                }}
              />
            </div>

            {/* Address bar */}
            <div
              style={{
                flex: 1,
                background: "rgba(248,250,252,0.04)",
                border: "1px solid rgba(248,250,252,0.07)",
                borderRadius: 6,
                padding: "5px 12px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#10b981",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  color: "rgba(248,250,252,0.4)",
                  fontFamily: "monospace",
                }}
              >
                studio.sophrosynesystems.com · Secure
              </span>
            </div>

            {/* Right-side window title */}
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "rgba(248,250,252,0.4)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Sophrosyne Studio
            </span>
          </div>

          {/* Studio UI sidebar + main canvas */}
          <div
            style={{
              background: "#0d1421",
              display: "grid",
              gridTemplateColumns: "200px 1fr",
              minHeight: 480,
            }}
            className="studio-layout"
          >
            {/* Left sidebar */}
            <div
              style={{
                borderRight: "1px solid rgba(248,250,252,0.05)",
                padding: "16px 0",
                background: "#0a1020",
              }}
            >
              <div style={{ padding: "0 14px 12px" }}>
                <p
                  style={{
                    fontSize: 9,
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(248,250,252,0.28)",
                    margin: 0,
                  }}
                >
                  Workspace
                </p>
              </div>
              {[
                { label: "Pipeline Canvas", active: true, icon: "⬡" },
                { label: "Agent Library", active: false, icon: "⊞" },
                { label: "Data Connectors", active: false, icon: "⌗" },
                { label: "Deployment", active: false, icon: "⬆" },
                { label: "Audit Log", active: false, icon: "☰" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "9px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: item.active
                      ? "rgba(16,185,129,0.08)"
                      : "transparent",
                    borderLeft: item.active
                      ? "2px solid #10b981"
                      : "2px solid transparent",
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      color: item.active
                        ? "#10b981"
                        : "rgba(248,250,252,0.28)",
                    }}
                  >
                    {item.icon}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      color: item.active
                        ? "rgba(248,250,252,0.85)"
                        : "rgba(248,250,252,0.38)",
                      fontWeight: item.active ? 600 : 400,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}

              <div
                style={{
                  height: 1,
                  background: "rgba(248,250,252,0.05)",
                  margin: "16px 0",
                }}
              />
              <div style={{ padding: "0 14px" }}>
                <p
                  style={{
                    fontSize: 9,
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(248,250,252,0.28)",
                    margin: "0 0 8px",
                  }}
                >
                  Integrations
                </p>
                {["Canvas LMS", "Banner SIS", "Slate CRM"].map((s) => (
                  <div
                    key={s}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 0",
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#10b981",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 11,
                        color: "rgba(248,250,252,0.38)",
                      }}
                    >
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main canvas area + video */}
            <div style={{ position: "relative", overflow: "hidden" }}>
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  minHeight: 480,
                }}
              >
                <source
                  src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054f4d8237c30eabf31945f896400ec&profile_id=165&oauth2_token_id=57447761"
                  type="video/mp4"
                />
              </video>

              {/* Video overlay gradient to blend with UI */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(10,15,26,0.55) 0%, rgba(10,15,26,0.2) 50%, rgba(10,15,26,0.45) 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Floating KPI overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  right: 20,
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                }}
                className="kpi-row"
              >
                {KPI_TILES.map((tile) => (
                  <div
                    key={tile.label}
                    style={{
                      background: "rgba(10,15,26,0.88)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(248,250,252,0.08)",
                      borderRadius: 10,
                      padding: "10px 14px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 9,
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(248,250,252,0.38)",
                        margin: "0 0 3px",
                      }}
                    >
                      {tile.label}
                    </p>
                    <p
                      style={{
                        fontSize: 18,
                        fontWeight: 800,
                        color: "#f8fafc",
                        margin: "0 0 2px",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {tile.value}
                    </p>
                    <p
                      style={{
                        fontSize: 10,
                        color: "#10b981",
                        margin: 0,
                        fontWeight: 500,
                      }}
                    >
                      {tile.delta}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .studio-layout { grid-template-columns: 1fr !important; }
          .studio-layout > *:first-child { display: none; }
          .kpi-row { display: none !important; }
        }
      `}</style>
    </section>
  );
}
