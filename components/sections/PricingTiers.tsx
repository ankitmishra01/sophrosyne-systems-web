"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const CONSULTING_DETAILS = [
  "AI & Accreditation Readiness Audit, $45K fixed fee",
  "Pillar pilots with fixed scope and full IP transfer",
  "Full program and Foundry deployment",
  "Retainer advisory and ongoing strategic support",
];

const CARD: React.CSSProperties = {
  background: "#FFFFFF",
  border: "1px solid rgba(27,42,33,0.10)",
  borderRadius: 12,
  padding: "48px 44px",
  display: "flex",
  flexDirection: "column",
  maxWidth: 600,
  width: "100%",
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 10,
        fontWeight: 600,
        fontFamily: "var(--font-libre-franklin), sans-serif",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#B5862E",
        margin: "0 0 12px",
      }}
    >
      {children}
    </p>
  );
}

function TrackName({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontSize: 26,
        fontWeight: 500,
        fontFamily: "var(--font-newsreader), serif",
        color: "#1B2A21",
        margin: "0 0 16px",
        letterSpacing: "-0.01em",
        lineHeight: 1.2,
      }}
    >
      {children}
    </h3>
  );
}

function Description({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 15,
        lineHeight: 1.72,
        color: "#4A584E",
        margin: "0 0 24px",
      }}
    >
      {children}
    </p>
  );
}

function AnchorBlock({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(27,42,33,0.10)",
        borderBottom: "1px solid rgba(27,42,33,0.10)",
        margin: "0 0 24px",
        padding: "4px 0",
      }}
    >
      {children}
    </div>
  );
}

function DetailList({ items }: { items: string[] }) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: "0 0 32px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        flex: 1,
      }}
    >
      {items.map((item) => (
        <li
          key={item}
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 10,
            fontSize: 14,
            color: "#4A584E",
            fontFamily: "var(--font-libre-franklin), sans-serif",
          }}
        >
          <span
            style={{
              color: "#B5862E",
              fontWeight: 600,
              flexShrink: 0,
              lineHeight: 1.5,
            }}
          >
            —
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PricingTiers() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#F4F0E6",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Top rule */}
        <div style={{ borderTop: "1px solid rgba(27,42,33,0.10)" }} />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "48px 0",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex" }}
          >
            <div style={CARD}>
              <Eyebrow>Consulting Engagement</Eyebrow>
              <TrackName>Fixed-Fee Engagements</TrackName>
              <Description>
                Every engagement is scoped to your institution&apos;s specific context: audit, pilot, or full program build. You keep 100% of the IP.
              </Description>

              <AnchorBlock>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.68,
                    color: "#4A584E",
                    fontStyle: "italic",
                    fontFamily: "var(--font-newsreader), serif",
                    margin: "11px 0",
                  }}
                >
                  Starts at a $45,000 fixed-fee AI &amp; Accreditation Readiness Audit. The same analysis a Big-Three firm would charge $200K to $400K to produce, if they engage institutions your size.
                </p>
              </AnchorBlock>

              <DetailList items={CONSULTING_DETAILS} />

              <Button variant="primary" size="lg" href="/get-started"
                style={{ width: "100%", justifyContent: "center" }}>
                Book an Audit
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom rule */}
        <div style={{ borderTop: "1px solid rgba(27,42,33,0.10)" }} />

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: 13,
            color: "#4A584E",
            margin: "32px 0 0",
            fontFamily: "var(--font-libre-franklin), sans-serif",
          }}
        >
          All engagements include full IP transfer to your institution. Title III,
          HECAP, and state AI-fund grant language available on request.
        </motion.p>
      </div>
    </section>
  );
}
