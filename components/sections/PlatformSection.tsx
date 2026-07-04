import { BookOpen, CheckSquare, LayoutDashboard, Lock } from "lucide-react";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import DisplayHeading from "@/components/ui/DisplayHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const FEATURES = [
  { icon: BookOpen, title: "Student Portfolio Tracker", body: "Every student's AI work is verified, timestamped, and portfolio-ready. Employers see the evidence; students own every artefact, contractually." },
  { icon: CheckSquare, title: "Faculty Review Workflow", body: "Faculty submit structured competency assessments. Accreditors get the evidence trail they need, without extra work from your IR team." },
  { icon: LayoutDashboard, title: "Admin Dashboard", body: "Cohort progress at a glance. Enrollment, completion rates, and accreditation readiness in one view. No spreadsheets. Updated in real time." },
  { icon: Lock, title: "FERPA-Native Architecture", body: "All data stays inside your institutional perimeter. Canvas, Banner, and Slate integrations included. No vendor lock-in. No multi-year data agreement." },
];

export default function PlatformSection() {
  return (
    <Section bg="pine-black">
      <div className="platform-header" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "flex-end" }}>
        <Reveal>
          <Eyebrow dark>Sophrosyne Platform</Eyebrow>
          <DisplayHeading as="h2" size="display" dark accent="Every outcome. In real time." style={{ margin: "18px 0 16px" }}>
            Track every student.
          </DisplayHeading>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(201,217,206,0.82)", margin: 0, maxWidth: 560 }}>
            The platform connects faculty reviews, student portfolios, and admin dashboards in one place. Built for
            FERPA compliance from day one, and already live for founding institutions.
          </p>
        </Reveal>
        <Reveal delay={120} className="platform-cta-col" style={{ flexShrink: 0 }}>
          <Button variant="gold" size="md" href="https://platform.sophrosynesystems.org/login" target="_blank">
            Log in to the platform ↗
          </Button>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="platform-features" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 52 }}>
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(199,161,74,0.16)",
                  borderRadius: 16,
                  padding: "26px 22px",
                }}
              >
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(199,161,74,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <Icon size={18} color="#C7A14A" strokeWidth={1.8} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.02rem", fontWeight: 600, color: "#F1EEE2", margin: "0 0 10px", letterSpacing: "-0.01em", lineHeight: 1.25 }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "rgba(201,217,206,0.72)", margin: 0 }}>{f.body}</p>
              </div>
            );
          })}
        </div>
      </Reveal>

      <style>{`
        @media (max-width: 900px) {
          .platform-features { grid-template-columns: repeat(2, 1fr) !important; }
          .platform-header { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) { .platform-features { grid-template-columns: 1fr !important; } }
      `}</style>
    </Section>
  );
}
