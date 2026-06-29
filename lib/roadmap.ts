// Product roadmap for the AI Fluency Platform — authored PM content (illustrative figures, USD).
// Rendered as a static brief-style one-pager at /portal/roadmap. Edit freely.

export type Phase = "Demo" | "Pilot" | "Beta" | "Launch" | "Scale" | "North Star";

export const NORTH_STAR =
  "An AI-native fluency tracker that automatically assesses, coaches, and certifies every student's AI capability — A1 to C2 — and gives universities live, evidence-grade readiness data. The work faculty do by hand today, done by AI at scale, for students and universities alike.";

// Six market-stage steps from today's demo to the AI-native north star.
// `stage` = how that phase is funded (we're bootstrapped on consulting + grants, not VC rounds).
export const PHASES: { key: Phase; name: string; stage: string; timing: string; goal: string; exit: string; color: string }[] = [
  { key: "Demo", name: "Demo", stage: "Bootstrapped", timing: "Now",
    goal: "A working end-to-end demo of the full A1→C2 platform to show universities.",
    exit: "Live demo across student, faculty, admin & employer views.", color: "#3E8C61" },
  { key: "Pilot", name: "Pilot", stage: "Consulting-funded", timing: "0–6 mo",
    goal: "Onboard 2–3 universities and run live cohorts end to end.",
    exit: "2–3 paying pilots with real cohorts + retention data.", color: "#34805A" },
  { key: "Beta", name: "Beta", stage: "Consulting + grants", timing: "6–12 mo",
    goal: "Open early access and ship the first AI assessment with design partners.",
    exit: "AI artifact assessment in beta; faculty-confirmed scoring.", color: "#2C7350" },
  { key: "Launch", name: "Launch", stage: "Consulting + grants", timing: "12–18 mo",
    goal: "GA: AI assessment, feedback & scoring, with SSO, SOC 2 and LMS/SIS.",
    exit: "Generally available; 10–15 institutions live.", color: "#236444" },
  { key: "Scale", name: "Scale", stage: "Recurring revenue", timing: "18–24 mo",
    goal: "Grow institutions and deepen analytics across cohorts and departments.",
    exit: "25+ institutions; repeatable expansion motion.", color: "#1A5638" },
  { key: "North Star", name: "North Star", stage: "Self-funded", timing: "24 mo+",
    goal: "AI tutor, fully automated tracking, and auto accreditation evidence.",
    exit: "AI-native fluency tracker at scale for students & universities.", color: "#123D27" },
];

// How the build is funded — bootstrapped on consulting + non-dilutive grants (not a VC raise).
export const FUNDING_ROUNDS: { stage: string; amount: string; focus: string; timing: string }[] = [
  { stage: "Consulting", amount: "Audit-first", focus: "$45K audits → ~$77.5K engagements fund operations and recruit design partners", timing: "Now" },
  { stage: "Grants", amount: "Non-dilutive", focus: "Mitacs + IRAP + SR&ED fund the platform R&D (recover ~90% of R&D)", timing: "This year" },
  { stage: "Equity", amount: "Optional", focus: "Only to accelerate the platform, against a milestone — never to fund consulting", timing: "If / when" },
];

export const FUNDING_TOTAL = "Bootstrapped on consulting + grants; equity only against a platform milestone.";

// What's live today (the demo) — pilot-shippable, faculty-driven, demo-grade.
export const SHIPPABLE_NOW = [
  "Student / faculty / admin roles + the public employer view",
  "The full A1→C2 fluency pathway with target artifacts",
  "Portfolio submission and faculty review & scoring",
  "Shareable, verifiable credentials",
  "Admin metrics + accreditation reporting (HLC / SACSCOC / MSCHE)",
  "Public employer talent directory",
];
