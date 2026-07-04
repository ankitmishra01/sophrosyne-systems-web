import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import Section from "@/components/ui/Section";
import DisplayHeading from "@/components/ui/DisplayHeading";
import Reveal from "@/components/ui/Reveal";
import { SOLUTIONS } from "@/lib/data";

export default function SolutionCards() {
  return (
    <Section bg="sage">
      <div style={{ display: "flex", flexDirection: "column", gap: 88 }}>
        {SOLUTIONS.map((sol, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <Reveal key={sol.id}>
              <div className={`solution-row ${imageLeft ? "image-left" : "image-right"}`} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
                {/* Image */}
                <div style={{ order: imageLeft ? 0 : 1 }} className="sol-img">
                  <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(27,42,33,0.10)", boxShadow: "0 1px 2px rgba(27,42,33,0.06), 0 40px 80px -32px rgba(27,42,33,0.28)" }}>
                    <Image src={sol.image} alt={sol.imageAlt} width={1200} height={800} style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover", display: "block" }} />
                    <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(20,31,23,0.86)", backdropFilter: "blur(10px)", borderRadius: 999, padding: "6px 14px" }}>
                      <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#C7A14A" }}>{sol.label}</span>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div style={{ order: imageLeft ? 1 : 0 }} className="sol-text">
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#B5862E", display: "block", marginBottom: 14 }}>{sol.label}</span>
                  <DisplayHeading as="h2" size="h2">{sol.title}</DisplayHeading>
                  <p style={{ fontSize: "1.05rem", fontWeight: 500, color: "#1E4D38", margin: "12px 0 16px", fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>{sol.tagline}</p>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A584E", margin: "0 0 24px" }}>{sol.body}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                    {sol.bullets.map((bullet, bi) => (
                      <li key={bi} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#4A584E", lineHeight: 1.55 }}>
                        <Check size={16} color="#1E4D38" strokeWidth={2.4} style={{ flexShrink: 0, marginTop: 2 }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/solutions/${sol.id}`} className="sol-link" style={{ display: "inline-block", marginTop: 26, fontSize: 14, fontWeight: 600, color: "#1E4D38" }}>
                    Learn more →
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
      <style>{`
        .sol-link { transition: opacity 160ms var(--ease); }
        .sol-link:hover { opacity: 0.72; }
        @media (max-width: 900px) {
          .solution-row { grid-template-columns: 1fr !important; gap: 36px !important; }
          .sol-img, .sol-text { order: unset !important; }
        }
      `}</style>
    </Section>
  );
}
