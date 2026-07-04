// Non-dilutive funding — two separate tracks, kept visually grouped, not interleaved:
// "product" funds the Sophrosyne Platform / AI Fluency Tracker engineering; "standard" funds
// the AI Fluency Standard's curriculum/credential methodology (needs a university co-applicant).
// Verified against program sites 2026-06-30 — re-check deadlines before relying on them.
//
// "raise" = Sophrosyne-realistic addressable estimate (not the program's statutory maximum —
// e.g. SR&ED's $6M/yr CCPC cap assumes far more R&D spend than this stage supports). Timing
// follows the lead times in lib/finance.ts NEXT_STEPS (IRAP contact Sep 2026 → first payment
// ~Q1 2027; SSHRC PEG filed for the Sep 15, 2026 deadline → decision/funds land in Y2; SR&ED
// is claimed the tax year after the eligible spend, so Y2 platform-dev salary shows up as a Y3
// refund). These feed the Base-case "Grants" rows in lib/finance.ts and plan/financial-model.md.

export type Grant = {
  name: string;
  what: string;
  fit: string;
  raise: string;
  category: "product" | "standard";
};

export const GRANTS: Grant[] = [
  // Product dev — Sophrosyne Platform / AI Fluency Tracker
  { category: "product", name: "SR&ED tax credit", what: "Refundable R&D tax credit; CCPC limit now $6M/yr (up to ~$2.1M cash back at that spend level).", fit: "Claim annually regardless of other programs — covers Tracker engineering, stacks with IRAP.", raise: "$42K (Y3)" },
  { category: "product", name: "NRC IRAP — AI Assist", what: "80% of eligible salaries + 50% subcontractor, capped at 75% total; $75K–$200K typical first award (up to $500K).", fit: "Funds Platform/Tracker R&D once a project is scoped — call 1-877-994-4727 for an Industrial Technology Advisor.", raise: "$150K (Y2+Y3)" },
  { category: "product", name: "Mitacs — backend engineer unit", what: "$15K/unit stipend (4–6mo): $7.5K Sophrosyne cash + $7.5K Mitacs match, funds flow through the university.", fit: "One of the two units filed together (see the curriculum unit below) — backend engineer building the Tracker.", raise: "$7.5K/yr from Y1" },
  { category: "product", name: "OCI — Collaborate 2 Commercialize", what: "$20K–$300K vouchers for academia-industry commercialization R&D (formerly VIP).", fit: "Requires 5+ FTE in Ontario — confirm current headcount before applying.", raise: "Not booked (needs 5+ FTE)" },
  { category: "product", name: "FedDev Ontario — Scale-Up & Productivity", what: "Up to $10M, 0%-interest repayable (not a grant).", fit: "Better fit post-revenue — repayable structure changes the EBITDA math vs. true grants.", raise: "Not counted (loan, not a grant)" },
  { category: "product", name: "IES SBIR (US Dept. of Education)", what: "Phase I $250K/9mo, Phase II $1M/2yr; built for EdTech companies shipping & evaluating AI learning products.", fit: "Needs a US-majority-owned entity first — ties directly to the open Canada–US structure decision.", raise: "Not booked (needs US entity)" },
  // AI Fluency Standard — curriculum, credential methodology, academic validation
  { category: "standard", name: "SSHRC Partnership Engage Grant", what: "$10K–$50K over 1 year; quarterly deadlines (next Sept 15, 2026).", fit: "Needs a university researcher as lead applicant (e.g. Kyle MacDonald/Ivey) — funds independent validation of the Standard's methodology, not software.", raise: "$50K (Y2+Y3)" },
  { category: "standard", name: "Mitacs — curriculum developer unit", what: "$15K/unit stipend (4–6mo): $7.5K Sophrosyne cash + $7.5K Mitacs match, funds flow through the university.", fit: "The companion unit to the backend-engineer one above — builds and validates curriculum & assessment rubrics.", raise: "$7.5K/yr from Y1" },
  // eCampusOntario Research & Innovation / Micro-credentials Challenge Fund: checked
  // 2026-06-30 — both funding pages list only 2016–2023 programs, all completed/historical.
  // No live call. Removed rather than listed as "unconfirmed."
];

export const GRANTS_NOTE = {
  product:
    "Sequencing: file the Mitacs backend-engineer unit now (Y1), then IRAP once contact is made (Sep 2026 target). SR&ED claimed annually regardless of stage. Prerequisite: confirm Canadian CCPC incorporation; IES SBIR additionally needs the Canada–US entity.",
  standard:
    "Sequencing: file the Mitacs curriculum-developer unit alongside the backend unit (Y1). SSHRC PEG needs a university co-applicant lined up now for the Sept 15 deadline.",
};

export const GRANTS_INTRO =
  "Two separate tracks, not one pool. Product Dev funds the Platform/Tracker engineering. AI Fluency Standard funds independent academic validation of the curriculum itself and needs a university co-applicant.";

// Sophrosyne-realistic addressable total, by track and year — see the "raise" note above for
// how each figure is derived. These are the numbers that feed lib/finance.ts (Base case) and
// plan/financial-model.md — not the sum of program statutory maximums.
export const TRACK_TOTALS = {
  product: { y1: "$7.5K", y2: "$82.5K", y3: "$124.5K", total: "$214.5K" },
  standard: { y1: "$7.5K", y2: "$32.5K", y3: "$32.5K", total: "$72.5K" },
  combined: { y1: "$15K", y2: "$115K", y3: "$157K", total: "$287K" },
};

export const UPSIDE_NOT_COUNTED: string[] = [
  "OCI — Collaborate 2 Commercialize: up to $300K, conditional on 5+ Ontario FTE.",
  "IES SBIR: up to $1.25M, gated on standing up the Canada–US entity.",
  "FedDev Ontario BSP: up to $10M — repayable financing, tracked separately from non-dilutive funding.",
];
