"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: readonly AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              border: "1px solid",
              borderColor: isOpen
                ? "rgba(30,77,56,0.28)"
                : "rgba(27,42,33,0.10)",
              borderRadius: "var(--radius-card)",
              background: isOpen ? "rgba(30,77,56,0.04)" : "#FFFFFF",
              transition: "border-color 200ms, background 200ms",
              overflow: "hidden",
              boxShadow: isOpen ? "none" : "var(--shadow-card)",
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                padding: "20px 24px",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  fontFamily: "var(--font-newsreader), serif",
                  color: isOpen ? "#1B2A21" : "#1B2A21",
                  lineHeight: 1.45,
                  letterSpacing: "-0.01em",
                  transition: "color 200ms",
                }}
              >
                {item.question}
              </span>
              <span
                style={{
                  flexShrink: 0,
                  width: 28,
                  height: 28,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  border: "1px solid",
                  borderColor: isOpen
                    ? "rgba(30,77,56,0.40)"
                    : "rgba(27,42,33,0.16)",
                  color: isOpen ? "#1E4D38" : "#6E7B71",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 240ms cubic-bezier(0.22,1,0.36,1), color 200ms, border-color 200ms",
                }}
              >
                <Plus size={14} strokeWidth={2.5} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <p
                    style={{
                      padding: "0 24px 22px",
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "#4A584E",
                      margin: 0,
                    }}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
