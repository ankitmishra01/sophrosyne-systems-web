export type ScenarioYear = { value: string; ebitda: string; margin: string };

export type Scenario = {
  name: string;
  tag: string;
  headline: string;
  lever: string;
  color: string;
  tint: string;
  border: string;
  years: { y1: ScenarioYear; y2: ScenarioYear; y3: ScenarioYear };
  streams: { label: string; y1: string; y2: string; y3: string }[];
};

export const SCENARIOS: Scenario[] = [
  {
    name: "Bear",
    tag: "Downside",
    headline:
      "Sales cycles stretch to 8–12 months. Only 2 audits close in Y1; conversion stays at 30%. Cash-flow positive in Y2 on consulting alone — no retainer windfall needed to survive.",
    lever: "Audit → engagement conversion falls to 30%",
    color: "#8A4B43",
    tint: "rgba(138,75,67,0.08)",
    border: "rgba(138,75,67,0.30)",
    years: {
      y1: { value: "$115K", ebitda: "−$25K", margin: "—" },
      y2: { value: "$1.2M", ebitda: "+$175K", margin: "14.6%" },
      y3: { value: "$2.9M", ebitda: "+$1.2M", margin: "41.4%" },
    },
    streams: [
      { label: "Ecosystem Audits", y1: "$90K", y2: "$360K", y3: "$540K" },
      { label: "Full Engagements", y1: "$65K", y2: "$260K", y3: "$585K" },
      { label: "AI Fluency Tracker", y1: "$25K", y2: "$125K", y3: "$250K" },
      { label: "Retainers", y1: "—", y2: "$420K", y3: "$1,365K" },
      { label: "Grants — Product Dev", y1: "—", y2: "$50K", y3: "$100K" },
      { label: "Grants — AI Fluency Standard", y1: "—", y2: "$25K", y3: "$50K" },
    ],
  },
  {
    name: "Base",
    tag: "Current model",
    headline:
      "Four audits in Y1; 50% convert to full engagements; 67% of Y3 engagements attach to a $35K/mo retainer. Self-funded throughout — Y3 cash generation funds international expansion without dilution.",
    lever: "Retainer attach rate holds at 67% post-engagement",
    color: "#1E4D38",
    tint: "rgba(30,77,56,0.08)",
    border: "rgba(30,77,56,0.30)",
    years: {
      y1: { value: "$400K", ebitda: "+$131K", margin: "32.8%" },
      y2: { value: "$2.185M", ebitda: "+$855K", margin: "39.1%" },
      y3: { value: "$7.072M", ebitda: "+$3.832M", margin: "54.2%" },
    },
    streams: [
      { label: "Ecosystem Audits", y1: "$180K", y2: "$360K", y3: "$540K" },
      { label: "Full Engagements", y1: "$155K", y2: "$620K", y3: "$1,305K" },
      { label: "AI Fluency Tracker", y1: "$50K", y2: "$250K", y3: "$625K" },
      { label: "Retainers", y1: "—", y2: "$840K", y3: "$4,445K" },
      { label: "Grants — Product Dev", y1: "$7.5K", y2: "$82.5K", y3: "$124.5K" },
      { label: "Grants — AI Fluency Standard", y1: "$7.5K", y2: "$32.5K", y3: "$32.5K" },
    ],
  },
  {
    name: "Bull",
    tag: "Upside",
    headline:
      "Six audits in Y1 at a 70% conversion rate; engagements average $90K; 80% of clients retain. Y3 retainer pool reaches $6.7M+ — Sophrosyne's unit economics start to look like enterprise SaaS.",
    lever: "Conversion 70% + $90K avg + 80% retainer attach",
    color: "#C7A14A",
    tint: "rgba(199,161,74,0.08)",
    border: "rgba(199,161,74,0.35)",
    years: {
      y1: { value: "$615K", ebitda: "+$195K", margin: "31.7%" },
      y2: { value: "$3.2M", ebitda: "+$1.35M", margin: "42.2%" },
      y3: { value: "$9.5M", ebitda: "+$5.4M", margin: "56.8%" },
    },
    streams: [
      { label: "Ecosystem Audits", y1: "$270K", y2: "$360K", y3: "$540K" },
      { label: "Full Engagements", y1: "$270K", y2: "$840K", y3: "$1,620K" },
      { label: "AI Fluency Tracker", y1: "$75K", y2: "$250K", y3: "$625K" },
      { label: "Retainers", y1: "—", y2: "$1,680K", y3: "$6,720K" },
      { label: "Grants — Product Dev", y1: "—", y2: "$50K", y3: "$150K" },
      { label: "Grants — AI Fluency Standard", y1: "—", y2: "$25K", y3: "$80K" },
    ],
  },
];

export const ASSUMPTIONS = [
  { lever: "Audit → engagement conversion", bear: "30%", base: "50%", bull: "70%" },
  { lever: "Average engagement value", bear: "CA$65K", base: "CA$77.5K", bull: "CA$90K" },
  { lever: "Retainer attach rate", bear: "50%", base: "67%", bull: "80%" },
  { lever: "Retainer price / month", bear: "CA$35K", base: "CA$35K", bull: "CA$35K" },
  { lever: "Platform churn (annual)", bear: "10%", base: "0%", bull: "0%" },
  { lever: "Sales cycle length", bear: "8–12 mo", base: "4–6 mo", bull: "2–3 mo" },
  { lever: "Y1 audit volume", bear: "2", base: "4", bull: "6" },
];

export const COST_STRUCTURE = {
  cogs: [
    { label: "Engagement delivery", y2: "$124K", y3: "$261K" },
    { label: "Retainer delivery", y2: "$216K", y3: "$1,143K" },
    { label: "Platform hosting + support", y2: "$16K", y3: "$42K" },
    { label: "Processing & cancellation (5.9%)", y2: "$127K", y3: "$422K" },
  ],
  opex: [
    { label: "Payroll & founder draws", y2: "$545K", y3: "$848K" },
    { label: "Technology & platform tools", y2: "$15K", y3: "$23K" },
    { label: "Marketing & conferences", y2: "$30K", y3: "$50K" },
    { label: "Travel & business development", y2: "$45K", y3: "$70K" },
    { label: "Legal & accounting", y2: "$25K", y3: "$35K" },
    { label: "Admin & miscellaneous", y2: "$15K", y3: "$20K" },
  ],
  totals: {
    cogs: { y2: "$483K", y3: "$1,868K" },
    opex: { y2: "$675K", y3: "$1,046K" },
    gross_margin: { y2: "70.0%", y3: "69.0%" },
    ebitda: { y2: "+$855K (39.1%)", y3: "+$3.832M (54.2%)" },
  },
};

export const MILESTONES = [
  {
    label: "Y1 Profitable",
    when: "Aug 2026",
    detail: "First Ecosystem Audit delivered. EBITDA positive from month 2 — no runway burn.",
    color: "#2C7350",
  },
  {
    label: "Y2 Self-sustaining",
    when: "Jan 2027",
    detail: "Retainer revenue covers full team payroll. Consulting fees fund Fluency Tracker build.",
    color: "#1E4D38",
  },
  {
    label: "Y3 Scale",
    when: "Jan 2028",
    detail: "12 retainer clients. 72% revenue recurring. Cumulative cash of $4.8M — no equity required.",
    color: "#123D27",
  },
];

export type NextStep = { n: number; title: string; when: string; why: string; how: string };

export const NEXT_STEPS: NextStep[] = [
  {
    n: 1,
    title: "Close first two institutions",
    when: "By Sep 2026",
    why: "First signed audit letter unlocks Aug–Sep revenue and creates the reference case all future sales depend on.",
    how: "Lauretta prioritises two warm LOI contacts. Propose a fixed-fee Ecosystem Audit start date of Aug 11; include the 90-day credit toward engagement in the letter.",
  },
  {
    n: 2,
    title: "Lock founding cohort pricing",
    when: "By Oct 2026",
    why: "5 spots at below-standard rate creates urgency, anchors long-term relationships, and builds the reference network for Year 2 outreach.",
    how: "Draft a one-page founding partner offer (price, co-authorship of case study, advisory seat on roadmap, AI Exchange Network access). Send to top 8 prospects; close 5.",
  },
  {
    n: 3,
    title: "File Mitacs Accelerate",
    when: "By Aug 15, 2026",
    why: "Rolling program — no annual deadline, but Mitacs requires a minimum 8 weeks between submission and intern start date. Filing by Aug 15 targets an Oct 2026 start, directly backing the Pillar II curriculum build. Mitacs covers ~$7,500 of the $15K student stipend per 4-month unit; Sophrosyne co-invests $7,500 per unit.",
    how: "Identify an academic supervisor at Western or Waterloo whose research overlaps with AI curriculum or edtech. Both the company and the supervisor register through the Mitacs RAP portal (apply-accelerate.mitacs.ca). Apply for 2 units: one curriculum developer, one backend engineer. Budget $15K cash co-investment in total for 2 × 4-month units.",
  },
  {
    n: 4,
    title: "Contact NRC IRAP — engage ITA",
    when: "By Sep 2026",
    why: "NRC IRAP is rolling and relationship-driven — no fixed intake window — but NRC's fiscal year runs April → March and budgets are most available in Q1–Q2 (Apr–Sep). Contacting an ITA in Sep 2026 puts Sophrosyne in the queue before mid-year commitments accumulate. Typical first award for an early-stage company is CA$50K–$200K (covering 80% of eligible technical salaries); multi-year R&D projects can reach $500K, but that is not a first-award expectation.",
    how: "Call NRC IRAP at 1-877-994-4727 to be assigned a regional ITA. ITA assignment typically takes 1–2 weeks. Frame the Fluency Tracker as an R&D project with measurable technical risk (novel NLP assessment pipeline). The ITA co-develops the formal proposal; timeline from first contact to signed contribution agreement is 3–6 months, with first payment 4–6 months after initial contact.",
  },
  {
    n: 5,
    title: "Dual-entity legal structure",
    when: "By Dec 2026",
    why: "First US institution contract requires a US legal entity. Delaware LLC also unlocks US federal grant eligibility (NSF SBIR — next Phase I deadline Nov 4, 2026; Title III positioning for partner institutions) and simplifies future equity rounds if needed.",
    how: "Ontario corporation (already in progress). File Delaware LLC ($500, 1–2 weeks via Stripe Atlas or equivalent). Set up a US bank account and transfer a nominal amount to establish presence before first US contract is signed. Note: NSF SBIR Phase I requires a Project Pitch submission before a full proposal — pitch window opens each cycle, with the next full-proposal deadline Nov 4, 2026.",
  },
];
