"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { SOLUTIONS } from "@/lib/data";
import Button from "@/components/ui/Button";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#F9F7F2",
  border: "1px solid rgba(27,42,33,0.14)",
  borderRadius: "var(--radius-card)",
  padding: "12px 14px",
  fontSize: 14,
  color: "#1B2A21",
  outline: "none",
  fontFamily: "var(--font-libre-franklin), sans-serif",
  boxSizing: "border-box" as const,
  transition: "border-color 180ms",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 600,
  fontFamily: "var(--font-libre-franklin), sans-serif",
  color: "#5A6B60",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  marginBottom: 8,
};

export default function ContactSection() {
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get("product") ?? "";
  const [selectedProduct, setSelectedProduct] = useState(initialProduct);

  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#F4F0E6",
        borderTop: "1px solid rgba(27,42,33,0.07)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 64,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — product selector */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                fontFamily: "var(--font-libre-franklin), sans-serif",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#B5862E",
                margin: "0 0 14px",
              }}
            >
              Select a Product
            </p>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 500,
                fontFamily: "var(--font-newsreader), serif",
                color: "#1B2A21",
                margin: "0 0 8px",
                letterSpacing: "-0.01em",
              }}
            >
              What are you interested in?
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#5A6B60",
                margin: "0 0 28px",
                lineHeight: 1.6,
              }}
            >
              Select one or leave blank — we'll cover everything on the
              discovery call.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {SOLUTIONS.map((sol) => {
                const active = selectedProduct === sol.id;
                return (
                  <button
                    key={sol.id}
                    type="button"
                    onClick={() =>
                      setSelectedProduct(active ? "" : sol.id)
                    }
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      padding: "16px 18px",
                      borderRadius: "var(--radius-card)",
                      background: active ? "rgba(30,77,56,0.06)" : "#FFFFFF",
                      border: `1px solid ${
                        active
                          ? "rgba(30,77,56,0.28)"
                          : "rgba(27,42,33,0.10)"
                      }`,
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 180ms, border-color 180ms",
                      width: "100%",
                      boxShadow: "var(--shadow-card)",
                    }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        border: `1.5px solid ${
                          active ? "#1E4D38" : "rgba(27,42,33,0.22)"
                        }`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                        transition: "border-color 180ms",
                      }}
                    >
                      {active && (
                        <div
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            background: "#1E4D38",
                          }}
                        />
                      )}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: 9,
                          fontWeight: 600,
                          fontFamily: "var(--font-libre-franklin), sans-serif",
                          color: "#B5862E",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          margin: "0 0 3px",
                        }}
                      >
                        {sol.label}
                      </p>
                      <p
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          fontFamily: "var(--font-newsreader), serif",
                          color: "#1B2A21",
                          margin: "0 0 4px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {sol.title}
                      </p>
                      <p
                        style={{
                          fontSize: 12,
                          color: "#5A6B60",
                          margin: 0,
                          lineHeight: 1.5,
                        }}
                      >
                        {sol.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Trust bullets */}
            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "No-obligation discovery call",
                "Respond within one business day",
                "Grant language available on request",
              ].map((t, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    color: "#5A6B60",
                  }}
                >
                  <CheckCircle2 size={14} color="#1E4D38" strokeWidth={2} />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(27,42,33,0.10)",
                borderRadius: 12,
                padding: "36px 32px",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                  fontFamily: "var(--font-newsreader), serif",
                  color: "#1B2A21",
                  margin: "0 0 6px",
                  letterSpacing: "-0.01em",
                }}
              >
                Send us a message
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "#8A968C",
                  margin: "0 0 28px",
                }}
              >
                Takes 2 minutes. We&apos;ll reach out the next business day.
              </p>

              <form
                action="mailto:hello@sophrosynesystems.com"
                method="post"
                encType="text/plain"
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <input
                  type="hidden"
                  name="product"
                  value={selectedProduct}
                />

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-half">
                  <div>
                    <label style={labelStyle} htmlFor="institution">
                      Institution Name
                    </label>
                    <input
                      id="institution"
                      name="institution"
                      type="text"
                      required
                      placeholder="State University of…"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(30,77,56,0.45)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(27,42,33,0.14)")
                      }
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="enrollment">
                      Enrollment
                    </label>
                    <select
                      id="enrollment"
                      name="enrollment"
                      required
                      style={{
                        ...inputStyle,
                        cursor: "pointer",
                        appearance: "none" as const,
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(30,77,56,0.45)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(27,42,33,0.14)")
                      }
                    >
                      <option value="">Select size</option>
                      <option value="under-1000">Under 1,000 students</option>
                      <option value="1000-5000">1,000 – 5,000 students</option>
                      <option value="5000-15000">5,000 – 15,000 students</option>
                      <option value="15000-plus">15,000+ students</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-half">
                  <div>
                    <label style={labelStyle} htmlFor="role">
                      Your Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      style={{
                        ...inputStyle,
                        cursor: "pointer",
                        appearance: "none" as const,
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(30,77,56,0.45)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(27,42,33,0.14)")
                      }
                    >
                      <option value="">Select role</option>
                      <option value="president-provost">President / Provost</option>
                      <option value="vp-academic">VP Academic Affairs</option>
                      <option value="cio">CIO / VP Technology</option>
                      <option value="cfo">CFO / VP Finance</option>
                      <option value="dean">Dean / Department Chair</option>
                      <option value="faculty">Faculty</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="challenge">
                      Primary Challenge
                    </label>
                    <select
                      id="challenge"
                      name="challenge"
                      style={{
                        ...inputStyle,
                        cursor: "pointer",
                        appearance: "none" as const,
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(30,77,56,0.45)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(27,42,33,0.14)")
                      }
                    >
                      <option value="">Select challenge</option>
                      <option value="enrollment-decline">Enrollment Decline</option>
                      <option value="budget-deficit">Budget Deficit</option>
                      <option value="accreditation">Accreditation Pressure</option>
                      <option value="curriculum">Curriculum Modernization</option>
                      <option value="multiple">Multiple of the above</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle} htmlFor="email">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@university.edu"
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "rgba(30,77,56,0.45)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "rgba(27,42,33,0.14)")
                    }
                  />
                </div>

                <div>
                  <label style={labelStyle} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us a bit about your situation — what's driving this, what timeline you're working with, or any specific questions…"
                    style={{
                      ...inputStyle,
                      resize: "vertical" as const,
                      minHeight: 100,
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "rgba(30,77,56,0.45)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "rgba(27,42,33,0.14)")
                    }
                  />
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  style={{ width: "100%", justifyContent: "center" } as React.CSSProperties}
                >
                  Send Request →
                </Button>

                <p
                  style={{
                    fontSize: 11,
                    color: "#8A968C",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  Your information is never sold or shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 600px) {
          .form-half { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
