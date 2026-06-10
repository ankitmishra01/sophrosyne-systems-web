"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  const [ready, setReady] = useState(false);
  const floatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);

    let startTime: number | null = null;
    let rafId = 0;

    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const elapsed = (ts - startTime) / 1000;
      if (floatRef.current) {
        const y = Math.sin(elapsed * 0.7) * 10;
        floatRef.current.style.transform = `translateY(${y}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px var(--pad-h) 80px",
        background:
          "radial-gradient(ellipse 65% 55% at 75% 30%, rgba(16,185,129,0.07) 0%, transparent 65%) #0f172a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(248,250,252,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,0.018) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-grid"
      >
        {/* Left column */}
        <div>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#10b981",
              marginBottom: 20,
              opacity: ready ? 1 : 0,
              transition: "opacity 0.7s 0.05s",
            }}
          >
            Sophrosyne Systems · Higher Education
          </p>

          <h1
            style={{
              fontSize: "clamp(38px, 5.2vw, 72px)",
              fontWeight: 700,
              color: "#f8fafc",
              margin: "0 0 24px",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              opacity: ready ? 1 : 0,
              transform: ready ? "none" : "translateY(24px)",
              transition:
                "opacity 0.75s 0.1s cubic-bezier(0.22,1,0.36,1), transform 0.75s 0.1s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            Treat AI Like a Language.{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #10b981 0%, #6ee7b7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Build with Enterprise Infrastructure.
            </span>
          </h1>

          <p
            style={{
              fontSize: 17,
              lineHeight: 1.68,
              color: "rgba(248,250,252,0.62)",
              margin: "0 0 36px",
              maxWidth: 480,
              opacity: ready ? 1 : 0,
              transform: ready ? "none" : "translateY(20px)",
              transition:
                "opacity 0.75s 0.2s cubic-bezier(0.22,1,0.36,1), transform 0.75s 0.2s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            Sophrosyne pairs{" "}
            <span style={{ color: "rgba(248,250,252,0.85)", fontWeight: 500 }}>
              Sophrosyne Studio
            </span>{" "}
            — our campus-deployed AI platform — with a structured Fluency
            Matrix and on-campus Foundry incubators. Together, they help
            regional universities produce AI-ready graduates, attract research
            partnerships, and build programs that compete on a national stage.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              opacity: ready ? 1 : 0,
              transform: ready ? "none" : "translateY(16px)",
              transition:
                "opacity 0.75s 0.32s cubic-bezier(0.22,1,0.36,1), transform 0.75s 0.32s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <Button variant="primary" size="lg" href="/pricing">
              Request a Platform Demo
            </Button>
            <Button variant="secondary" size="lg" href="/solutions">
              See All Four Products
            </Button>
          </div>

          {/* Trust strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginTop: 48,
              opacity: ready ? 1 : 0,
              transition: "opacity 0.8s 0.55s",
              flexWrap: "wrap",
            }}
          >
            {["FERPA Compliant", "100% Student IP", "Western Accelerator Partner"].map(
              (t, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: "rgba(248,250,252,0.38)",
                    letterSpacing: "0.04em",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "rgba(16,185,129,0.6)",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  {t}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right column — floating image card */}
        <div
          ref={floatRef}
          style={{
            opacity: ready ? 1 : 0,
            transition: "opacity 1s 0.35s",
            willChange: "transform",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "var(--radius-card)",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "var(--shadow-emerald)",
            }}
          >
            {/* Emerald top accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, rgba(16,185,129,0.65) 40%, rgba(16,185,129,0.65) 60%, transparent)",
                zIndex: 2,
              }}
            />
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
              alt="Students working together on campus"
              width={1200}
              height={800}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                aspectRatio: "3/2",
                objectFit: "cover",
                filter: "brightness(0.75) saturate(0.65)",
              }}
              priority
            />
            {/* Overlay badge */}
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                background: "rgba(10,15,26,0.88)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(248,250,252,0.1)",
                borderRadius: 10,
                padding: "10px 14px",
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
                  boxShadow: "0 0 8px #10b981",
                  flexShrink: 0,
                  animation: "pulse 2s infinite",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "rgba(248,250,252,0.85)",
                  letterSpacing: "0.04em",
                }}
              >
                Sophrosyne Studio · Live
              </span>
            </div>
          </div>

          {/* Decorative stat card */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              marginTop: -32,
              marginRight: 28,
              marginLeft: "auto",
              width: "fit-content",
              background: "#222326",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(16,185,129,0.2)",
              borderRadius: "var(--radius-card)",
              padding: "14px 18px",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#10b981",
                margin: "0 0 4px",
              }}
            >
              Consortium Growth
            </p>
            <p
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#f4f5f8",
                margin: 0,
                letterSpacing: "-0.04em",
                fontFamily: "var(--font-geist-mono), monospace",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              +340%{" "}
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 400,
                  color: "rgba(244,245,248,0.42)",
                  letterSpacing: 0,
                  fontFamily: "var(--font-geist-sans), sans-serif",
                }}
              >
                student deployment velocity
              </span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
