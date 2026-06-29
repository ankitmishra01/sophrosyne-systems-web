// Business Operations — a candid internal strategy memo (editable).
// Grounded in the Western Accelerator pitch deck (June 2026): a 6-founder team led by
// Dr. Lauretta Frederking (former university president); a three-pillar model — Operational
// Efficiency (the audit that self-funds the rest), AI Fluency Programme, and the AI Foundry —
// sold AUDIT-FIRST ($45K audit → ~$77.5K avg engagement), with the AI Fluency Tracker as the
// recurring platform ($25K ARR). Month 5 of 12 to a Jan-2027 launch. Bootstrapped, $0 raised;
// the Western ask is mentorship + network, NOT capital. Beachhead: Ontario → Great Lakes → US NE.

export const STATE =
  "Three-pillar model — Operational Efficiency (the audit that self-funds the rest), AI Fluency, and the AI Foundry — sold audit-first ($45K → ~$77.5K engagements), with the AI Fluency Tracker as the recurring platform. Six founders led by Dr. Lauretta Frederking (former university president). roughly halfway to a Jan-2027 launch; bootstrapped, $0 external capital; Western ask = mentorship, not money.";

export const VERDICT =
  "This is a sharper plan than most pre-launch ventures: an audit-first GTM that self-funds the rollout, a genuine insider channel, and an honest risk slide. The deck already answers the obvious objections. The remaining risk is execution — key-person concentration, whether high-touch consulting scales, and whether the Tracker earns the recurring revenue the Year-3 model depends on.";

export type Gap = { n: number; title: string; why: string };

export const GAPS: Gap[] = [
  { n: 1, title: "Key-person concentration", why: "Lauretta's relationships are the moat and the bottleneck — “she opens every door.” The company runs on her calendar until the Senior #2 hire (Year 2). De-risk that earlier, not later." },
  { n: 2, title: "Consulting doesn't scale like software", why: "Pillars I–III are senior-labour-heavy (a finance lead per audit, a specialist per faculty cohort). 35 institutions by Y3 implies many senior delivery hires; margin and quality control are the real constraint." },
  { n: 3, title: "Recurring revenue is the leap of faith", why: "The Year-3 model flips to ~69% recurring (Tracker $25K ARR + $30K/mo retainers), but the platform is still in development and retention is unproven. If the Tracker isn't sticky, the compounding story doesn't hold." },
  { n: 4, title: "Audit conversion is assumed, not proven", why: "The whole model hinges on ~50% audit→engagement conversion — but no audit has been sold yet (Month 5). This is the single number to validate first." },
  { n: 5, title: "No signed revenue yet", why: "“5 LOIs” and cohort conversations are pipeline, not contracts. One paid $45K audit before launch de-risks everything that follows." },
  { n: 6, title: "The Tracker must beat the faculty bottleneck", why: "For the platform to scale and retain, assessment can't stay fully faculty-reviewed — most faculty aren't AI-fluent enough. AI-assisted grading (faculty-confirmed) is the platform's moat and its scale unlock." },
  { n: 7, title: "Dual-country + accreditor validation", why: "Canada–US legal structure (flagged in the deck) and getting a real accreditor (HLC/SACSCOC/NECHE) to bless the auto-reports are slow, open items that gate US expansion." },
];

// ── Consulting, product, or both? ──
export const FOCUS = {
  verdict:
    "Both — but sequenced ~70/30 services→product, not split 50/50. Consulting is the cash engine, the trust-builder, the distribution, and the source of proprietary data; the product (Tracker + AI assessment) is the only part that scales and compounds.",
  how: [
    "Each audit/engagement funds the company AND recruits a founding-cohort design partner for the Tracker.",
    "Build the Tracker lean — only with paying design partners, never speculative product spend.",
    "Make AI-assisted assessment the product wedge: it's what lets the platform scale past faculty review and justifies recurring revenue.",
    "Flip the mix toward product only once retention is proven — don't force the Year-3 69%-recurring before the data earns it.",
  ],
};

// ── Get revenue now ──
export const REVENUE_NOW: string[] = [
  "Sell the $45K Ecosystem Audit now — it's scoped and priced; don't wait for the Jan-2027 launch. It's your fastest dollar.",
  "Work Lauretta's 3 warmest provost relationships and close 1 paid audit this quarter — the credited fee removes their risk.",
  "Offer a cheaper fixed-scope entry (a 1-day AI-fluency faculty workshop or mini-diagnostic) for institutions not ready for the full audit — a smaller yes that ladders up.",
  "Pre-sell the Tracker as a paid pilot to one founding-cohort institution (even discounted) — the first recurring dollar and an early retention signal.",
];

// ── Trademark the Standard ──
export const TRADEMARK = {
  recommendation:
    "Yes — but trademark the right thing. Register the distinctive brand (Sophrosyne wordmark + logo, and “Sophrosyne Fluency Standard” as a composite) — not the bare “AI Fluency Standard,” which is descriptive and hard to register. Treat it as cheap defence + credibility, not a moat. The moat is adoption.",
  points: [
    "“AI Fluency Standard” alone is descriptive → CIPO will likely object; it needs acquired distinctiveness.",
    "“Sophrosyne” + the logo are distinctive and registrable — file CIPO (Canada) now, USPTO when US-bound.",
    "Your curriculum, rubric and reports are already protected by copyright automatically.",
    "Budget ~CA$0.5K CIPO fees + ~$1–2.5K agent; ~12–18 months to register. Do it; don't over-invest.",
  ],
};

// ── Non-dilutive funding (grants) ──
export type Grant = { name: string; what: string; fit: string };
export const GRANTS: Grant[] = [
  { name: "Mitacs Accelerate", what: "~$15K per 4-month grad-student intern (you match ~half).", fit: "Ideal — academic founders + university partners; build the Tracker / AI-assessment with interns." },
  { name: "NRC IRAP", what: "Up to 80% of internal technical labour, ≤ $500K / 24 mo.", fit: "Funds the platform R&D; fast once an ITA is assigned." },
  { name: "SR&ED", what: "Refundable R&D tax credits (enhanced CCPC limit now $6M → up to ~$2.1M/yr).", fit: "The AI-assessment engine qualifies; stack on top of IRAP/Mitacs." },
  { name: "FedDev Ontario — RAII", what: "~$60M southern-Ontario AI productization & commercialization.", fit: "Regional fit for the platform's go-to-market." },
  { name: "OCI vouchers / Market Readiness", what: "Ontario provincial co-investment & vouchers.", fit: "Smaller top-ups; pairs with the federal programs." },
];
export const GRANTS_NOTE =
  "Stack IRAP + Mitacs + SR&ED to recover ~90% of R&D and fund the platform with no equity. Prerequisite: incorporate as a Canadian CCPC (this also settles the Canada–US legal-structure question). Most programs accept pre-revenue applicants.";

// ── Capital & catalysts ──
export type Catalyst = { name: string; verdict: string; detail: string };
export const CATALYSTS: Catalyst[] = [
  { name: "CDL Toronto", verdict: "Apply", detail: "No equity, no fee — pure mentors + investor credibility. Pitch the scalable Tracker / AI-assessment core (CDL wants massively-scalable tech), not the consulting. Deadline ~Jul 24; runs Oct–Jun. Compatible with bootstrapping." },
  { name: "Western Angels Demo Day", verdict: "Apply — in-kind first", detail: "Western-alumni-eligible. Lead with an in-kind ask (provost intros, B2B demand-gen) until you have revenue — a paid audit first makes you credible. Asks $100K–$5M or in-kind; ~June cohorts." },
];
export const RAISE_TRIGGER =
  "Default: bootstrap on consulting + grants. Raise equity only to accelerate the platform, and only once you have (a) 2–3 paid audits/engagements and (b) an early Tracker-retention signal. Raise against a milestone — never to fund consulting.";

// ── Prioritized next steps ──
export type Step = { n: number; title: string; how: string; when: string };
export const NEXT_STEPS: Step[] = [
  { n: 1, title: "Close one paid $45K audit", how: "Lauretta's 3 warmest provosts; credited-fee offer. Proof beats LOIs and validates conversion.", when: "This quarter" },
  { n: 2, title: "Incorporate (Canadian CCPC) + line up grants", how: "Unlocks IRAP/SR&ED; get an IRAP ITA, file a Mitacs intern to build the Tracker, plan the SR&ED claim.", when: "This quarter" },
  { n: 3, title: "Apply to CDL Toronto", how: "Lead with the scalable platform (Tracker + AI assessment); reuse the deck.", when: "By ~Jul 24" },
  { n: 4, title: "Western cohort + Western Angels (in-kind)", how: "Ask for B2B demand-gen, Canada–US legal structure, provost intros.", when: "Now–summer" },
  { n: 5, title: "File the trademark", how: "Sophrosyne wordmark + logo via a CIPO agent (~$2–3K all-in).", when: "30–60 days" },
  { n: 6, title: "Ship the Tracker MVP + AI assessment", how: "Lean, with a paying design partner and a Mitacs intern; instrument retention.", when: "By Jan-2027 launch" },
  { n: 7, title: "De-risk the founder", how: "Productise the 9-domain audit and plan the Senior #2 delivery hire.", when: "Before scaling past ~3 institutions" },
];
