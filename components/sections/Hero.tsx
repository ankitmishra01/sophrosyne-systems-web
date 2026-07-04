import Link from "next/link";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import BrowserFrame from "@/components/ui/BrowserFrame";
import FluencyDashboard from "@/components/mockups/FluencyDashboard";

const ROLE_PILLS = [
  { label: "For Provosts", href: "/for/provost" },
  { label: "For CFOs", href: "/for/cfo" },
  { label: "For CIOs", href: "/for/cio" },
  { label: "AI Fluency Standard™", href: "/solutions/curriculum" },
];

export default function Hero() {
  return (
    <section
      style={{
        padding: "180px var(--pad-h) 88px",
        background: "radial-gradient(120% 80% at 50% -10%, #ECF1EC 0%, #F4F0E6 60%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#B5862E",
              fontFamily: "var(--font-libre-franklin), sans-serif",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#B5862E" }} />
            AI infrastructure for universities
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--fs-hero)",
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: "-0.035em",
              color: "#16241B",
              margin: "22px auto 0",
              maxWidth: 900,
              textWrap: "balance",
            }}
          >
            The graduates <span style={{ color: "#1E4D38" }}>employers actually want.</span>
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
              lineHeight: 1.6,
              color: "#4A584E",
              margin: "26px auto 0",
              maxWidth: 620,
            }}
          >
            Expert teams embedded inside your institution, not a platform. Students build verifiable AI portfolios,
            administration uncovers real savings, and your campus becomes worth choosing.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 34 }}>
            <Button variant="primary" size="lg" href="/get-started">
              Book an Audit
            </Button>
            <Button variant="secondary" size="lg" href="/solutions">
              Explore our solutions →
            </Button>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <p style={{ fontSize: 13, color: "#8A968C", margin: "22px 0 0", letterSpacing: "0.01em" }}>
            47 students enrolled · 7 accreditors supported · 100% student IP ownership
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginTop: 22 }}>
            {ROLE_PILLS.map((p) => (
              <Link key={p.href} href={p.href} className="hero-pill">
                {p.label} <span style={{ fontSize: 10 }}>→</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Product mockup below the fold */}
      <Reveal delay={200} style={{ maxWidth: 1000, margin: "64px auto 0" }}>
        <BrowserFrame url="platform.sophrosynesystems.org">
          <FluencyDashboard />
        </BrowserFrame>
        <p style={{ textAlign: "center", fontSize: 12, color: "#8A968C", margin: "16px 0 0" }}>
          The AI Fluency Tracker — a sample institution view. Every level is measured from student work, not self-reported.
        </p>
      </Reveal>

      <style>{`
        .hero-pill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 15px; font-size: 12px; font-weight: 600;
          font-family: var(--font-libre-franklin), sans-serif; letter-spacing: 0.01em;
          color: #1E4D38; background: rgba(255,255,255,0.7);
          border: 1px solid rgba(30,77,56,0.22); border-radius: 999px;
          transition: background 180ms var(--ease), border-color 180ms var(--ease);
        }
        .hero-pill:hover { background: #FFFFFF; border-color: rgba(30,77,56,0.4); }
      `}</style>
    </section>
  );
}
