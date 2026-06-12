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
    return () => { clearTimeout(t); cancelAnimationFrame(rafId); };
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px var(--pad-h) 80px",
        background:
          "radial-gradient(ellipse 120% 90% at 85% 0%, #ECF1EC 0%, #F4F0E6 55%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle diagonal-hatch texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(30,77,56,0.03) 0px, rgba(30,77,56,0.03) 1px, transparent 1px, transparent 16px)",
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
              fontFamily: "var(--font-libre-franklin), sans-serif",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#B5862E",
              marginBottom: 20,
              opacity: ready ? 1 : 0,
              transition: "opacity 0.7s 0.05s",
            }}
          >
            For Small &amp; Mid-Sized Universities
          </p>

          <h1
            style={{
              fontSize: "clamp(38px, 5.2vw, 68px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21",
              margin: "0 0 24px",
              lineHeight: 1.06,
              letterSpacing: "-0.015em",
              opacity: ready ? 1 : 0,
              transform: ready ? "none" : "translateY(24px)",
              transition:
                "opacity 0.75s 0.1s cubic-bezier(0.22,1,0.36,1), transform 0.75s 0.1s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            Reduce Costs. Build Fluency.{" "}
            <em style={{ fontStyle: "italic", color: "#1E4D38" }}>
              Transform Your University for the AI Era.
            </em>
          </h1>

          <p
            style={{
              fontSize: 17,
              lineHeight: 1.72,
              color: "#4A584E",
              margin: "0 0 36px",
              maxWidth: 480,
              opacity: ready ? 1 : 0,
              transform: ready ? "none" : "translateY(20px)",
              transition:
                "opacity 0.75s 0.2s cubic-bezier(0.22,1,0.36,1), transform 0.75s 0.2s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            Sophrosyne Systems helps small and mid-sized universities cut
            operating costs, make every graduate genuinely AI-fluent, and build
            an entrepreneurial ecosystem for the AI era — with human judgment,
            not just technology, at the centre.
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
            <Button variant="primary" size="lg" href="/get-started">
              Book an Audit
            </Button>
            <Button variant="secondary" size="lg" href="/solutions">
              Explore Our Solutions
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
            {["Human-Centered Design", "100% Student IP", "Reduces Operating Costs", "FERPA Compliant"].map(
              (label, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#5A6B60",
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
                      background: "#1E4D38",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  {label}
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
              border: "1px solid rgba(27,42,33,0.10)",
              boxShadow: "var(--shadow-card-lg)",
            }}
          >
            {/* Pine top accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background:
                  "linear-gradient(90deg, transparent, rgba(30,77,56,0.55) 40%, rgba(199,161,74,0.65) 60%, transparent)",
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
                filter: "saturate(0.96) brightness(0.95) sepia(0.08)",
              }}
              priority
            />
            {/* Overlay badge */}
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                background: "rgba(33,39,31,0.88)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(201,217,206,0.15)",
                borderRadius: 10,
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#C7A14A",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  color: "#F1EEE2",
                  letterSpacing: "0.04em",
                }}
              >
                Sophrosyne Studio · Ready
              </span>
            </div>
          </div>

          {/* Decorative scorecard chip */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              marginTop: -32,
              marginRight: 28,
              marginLeft: "auto",
              width: "fit-content",
              background: "#FFFFFF",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(27,42,33,0.10)",
              borderRadius: "var(--radius-card)",
              padding: "14px 18px",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                fontFamily: "var(--font-libre-franklin), sans-serif",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "#B5862E",
                margin: "0 0 4px",
              }}
            >
              OpEx Savings Identified
            </p>
            <p
              style={{
                fontSize: 22,
                fontWeight: 500,
                fontFamily: "var(--font-newsreader), serif",
                color: "#1B2A21",
                margin: "0 0 8px",
                letterSpacing: "-0.015em",
              }}
            >
              $1.2M{" "}
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 400,
                  color: "#8A968C",
                  letterSpacing: 0,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                }}
              >
                first year
              </span>
            </p>
            <div
              style={{
                height: 4,
                borderRadius: 2,
                background: "#ECF1EC",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "72%",
                  height: "100%",
                  background: "#1E4D38",
                  borderRadius: 2,
                }}
              />
            </div>
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
      `}</style>
    </section>
  );
}
