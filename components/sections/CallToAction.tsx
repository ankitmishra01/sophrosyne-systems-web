import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import DisplayHeading from "@/components/ui/DisplayHeading";

export default function CallToAction() {
  return (
    <section style={{ background: "#1E4D38", padding: "clamp(80px, 10vw, 128px) var(--pad-h)" }}>
      <Reveal style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Eyebrow dark>Phase 01 · 2 Weeks · $45K</Eyebrow>
        </div>
        <DisplayHeading
          as="h2"
          size="display"
          dark
          accent="self-funded transformation plan."
          style={{ margin: "22px 0 0" }}
        >
          Arrive at your board table with a
        </DisplayHeading>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#C9D9CE", margin: "24px auto 0", maxWidth: 580 }}>
          The Ecosystem Audit maps your data silos, LMS integrations, and curriculum gaps. You walk away with a
          plain-language board report and a dollar savings roadmap. The $45K fee is credited in full toward any
          subsequent engagement within 90 days.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 36 }}>
          <Button variant="gold" size="lg" href="/get-started">
            Book an Audit →
          </Button>
          <Button variant="on-dark" size="lg" href="/pricing">
            View pricing
          </Button>
        </div>
        <p style={{ marginTop: 24, fontSize: 12.5, color: "#9FBFAD", letterSpacing: "0.01em" }}>
          The audit is the only commitment · Everything after is opt-in · Response within one business day
        </p>
      </Reveal>
    </section>
  );
}
