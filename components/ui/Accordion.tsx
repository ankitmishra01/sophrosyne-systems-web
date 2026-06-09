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
                ? "rgba(16,185,129,0.3)"
                : "rgba(248,250,252,0.07)",
              borderRadius: "var(--radius-card)",
              background: isOpen
                ? "rgba(16,185,129,0.03)"
                : "rgba(248,250,252,0.02)",
              transition: "border-color 200ms, background 200ms",
              overflow: "hidden",
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
                  fontWeight: 600,
                  color: isOpen ? "#f8fafc" : "rgba(248,250,252,0.88)",
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
                    ? "rgba(16,185,129,0.5)"
                    : "rgba(248,250,252,0.14)",
                  color: isOpen ? "#10b981" : "rgba(248,250,252,0.55)",
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
                      color: "rgba(248,250,252,0.65)",
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
