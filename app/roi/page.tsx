import type { Metadata } from "next";
import RoiCalculator from "@/components/sections/RoiCalculator";

export const metadata: Metadata = {
  title: "ROI Calculator — Sophrosyne Systems",
  description:
    "Model the operating-cost savings AI could unlock across your campus — across nine operational domains, with per-student economics and audit payback.",
};

function RoiHero() {
  return (
    <section
      style={{
        padding: "140px var(--pad-h) 56px",
        background:
          "radial-gradient(ellipse 80% 60% at 80% 30%, #ECF1EC 0%, #F4F0E6 60%)",
        borderBottom: "1px solid rgba(27,42,33,0.08)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            fontFamily: "var(--font-libre-franklin), sans-serif",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#B5862E",
            margin: "0 0 18px",
          }}
        >
          ROI Calculator
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: "#1B2A21",
            margin: "0 0 20px",
            letterSpacing: "-0.015em",
            maxWidth: 760,
            lineHeight: 1.06,
          }}
        >
          See what AI could save your campus —{" "}
          <em style={{ fontStyle: "italic", color: "#1E4D38" }}>
            before you spend a dollar.
          </em>
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.72,
            color: "#4A584E",
            maxWidth: 580,
            margin: 0,
          }}
        >
          Move the two sliders to your institution&apos;s size and budget. We
          model conservative operating savings across all nine domains a
          Sophrosyne audit examines — the same analysis a Big-Three firm would
          charge ~$400,000 to produce.
        </p>
      </div>
    </section>
  );
}

export default function RoiPage() {
  return (
    <>
      <RoiHero />
      <RoiCalculator />
    </>
  );
}
