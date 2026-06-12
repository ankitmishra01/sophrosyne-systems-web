export const TRUST_METRICS = [
  { value: "9 Domains", label: "Operational savings, audited end-to-end" },
  { value: "100%", label: "Student & faculty IP ownership" },
  { value: "FERPA", label: "Compliant by architecture, not policy" },
  { value: "48 Hours", label: "From contract to deployed platform" },
] as const;

export const WHY_ITEMS = [
  {
    icon: "GraduationCap",
    title: "AI Fluency for Every Student",
    body: "AI modules embedded into every academic programme, discipline-specific fluency tracks, and an AI tutor system that gives every student personalised support — from Level 101 foundations to production AI deployment.",
  },
  {
    icon: "TrendingDown",
    title: "Operational Cost Reduction",
    body: "Sophrosyne identifies savings across every operational domain — compliance, HR, procurement, energy, and more — and delivers a real-time snapshot scorecard with predictive analytics so your leadership team knows exactly where to act and what it's worth.",
  },
  {
    icon: "Rocket",
    title: "Entrepreneurial Ecosystem",
    body: "Every academic programme tied to real entrepreneurship pathways. On-campus AI Foundries run incubator and accelerator programming with direct AI support — turning student projects into ventures that attract regional employers and partnerships.",
  },
] as const;

export const OPEX_AREAS = [
  { icon: "FileCheck",    title: "Compliance Reporting",          body: "Automated generation of accreditation and regulatory reports — no manual assembly." },
  { icon: "Users",        title: "HR Processes",                  body: "AI-driven workforce planning, onboarding workflows, and administrative task reduction." },
  { icon: "BookOpen",     title: "Governance Policies",           body: "Policy drafting, version tracking, and board-ready governance documentation." },
  { icon: "Presentation", title: "Board Reporting",               body: "AI shadow board and leadership team for faster, better-informed strategic decisions." },
  { icon: "ShoppingCart", title: "Purchase Coordination",         body: "Real-time supply optimisation across procurement, facilities, and food services." },
  { icon: "Leaf",         title: "Food Waste Management",         body: "Real-time waste tracking and predictive ordering to reduce campus food loss." },
  { icon: "BarChart2",    title: "Academic Program Optimization", body: "Live data to identify high-value programmes and rationalise the portfolio in real time." },
  { icon: "Map",          title: "Land Use Optimization",         body: "Strategic campus space analysis aligned to enrolment, mission, and revenue goals." },
  { icon: "Zap",          title: "Energy Efficiency",             body: "Real-time consumption monitoring with predictive savings modelling." },
] as const;

// Conservative modeled annual savings per OpEx domain, expressed as a % of total
// operating budget. Sum ≈ 3.7% — deliberately understated. Used by the ROI calculator.
export const SAVINGS_MODEL = [
  { icon: "FileCheck",    domain: "Compliance Reporting",          pct: 0.30 },
  { icon: "Users",        domain: "HR Processes",                  pct: 0.55 },
  { icon: "BookOpen",     domain: "Governance Policies",           pct: 0.15 },
  { icon: "Presentation", domain: "Board Reporting",               pct: 0.15 },
  { icon: "ShoppingCart", domain: "Purchase Coordination",         pct: 0.70 },
  { icon: "Leaf",         domain: "Food Waste Management",         pct: 0.15 },
  { icon: "BarChart2",    domain: "Academic Program Optimization", pct: 0.85 },
  { icon: "Map",          domain: "Land Use Optimization",         pct: 0.30 },
  { icon: "Zap",          domain: "Energy Efficiency",             pct: 0.55 },
] as const;

export const JOURNEY_STEPS = [
  {
    number: "01",
    title: "The Ecosystem Audit",
    duration: "2 Weeks",
    body: "We map your existing data silos, LMS integrations, and curriculum gaps. You receive a plain-language report: what's possible, what it costs, and what integration looks like with your existing systems.",
  },
  {
    number: "02",
    title: "Platform Setup & Foundry Launch",
    duration: "4–8 Weeks",
    body: "Sophrosyne handles the full technical build. Studio is provisioned campus-wide, the complete Level 101–301 Fluency Framework is deployed and configured, and faculty are certified to teach before the first student cohort begins. Your institution designates the Foundry space; we build the rest.",
  },
  {
    number: "03",
    title: "Consortium Integration",
    duration: "Ongoing",
    body: "Your institution joins the Intercollegiate AI Exchange Network — gaining access to shared compute credits, federated model repositories, and cross-campus student project showcases.",
  },
] as const;

export const SOLUTIONS = [
  {
    id: "studio",
    label: "01 — The Developer Component",
    title: "Sophrosyne Studio",
    tagline: "Campus-deployed AI development platform. Institutional governance built in.",
    body: "Sophrosyne Studio is a secure, low-code AI orchestration and development environment designed specifically for campus deployment. Students and faculty gain access to a visual canvas IDE where they can model, test, and host multi-agent workflows that connect directly to existing academic systems (Banner, Canvas, Colleague) — all under complete FERPA compliance and institutional data sovereignty.",
    bullets: [
      "Visual pipeline builder with drag-and-drop agent orchestration",
      "Native connectors for Banner, Canvas, Colleague, and Slate",
      "Role-based access controls with institutional SSO integration",
      "Private cloud deployment — data never leaves your perimeter",
      "Built-in audit logging for every model inference and data query",
    ],
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Warm, light-filled university library with curved shelves of books",
  },
  {
    id: "curriculum",
    label: "02 — The Fluency Framework",
    title: "AI Fluency Curriculum Matrix",
    tagline: "Language-acquisition methodology applied to AI competency.",
    body: "The AI Fluency Matrix is a fully-deployed curriculum programme — not a course bundle you configure yourself. Sophrosyne provisions all three levels across your departments, integrates live Studio lab environments into every module, and certifies your faculty before the first student cohort begins. You go from no AI curriculum to a running programme in 4–8 weeks.",
    bullets: [
      "Level 101: AI Foundations — prompt engineering, model evaluation, ethical frameworks",
      "Level 201: Applied AI — workflow automation, data analysis, API integration",
      "Level 301: Production AI — multi-agent systems, model fine-tuning, deployment pipelines",
      "Department-specific tracks: Engineering, Business, Health Sciences, Humanities",
      "Continuous progression dashboards visible to students, faculty, and administration",
    ],
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Diverse group of university students together outdoors on campus",
  },
  {
    id: "foundry",
    label: "03 — The Physical Incubator",
    title: "On-Campus AI Foundries",
    tagline: "Where student ideas become production deployments.",
    body: "The Foundry is Sophrosyne's physical on-campus incubator environment — a purpose-designed collaborative space where students form multi-disciplinary teams, iterate on real AI projects using Studio's infrastructure, and build production-grade portfolios that leading employers and graduate programs actively recruit from.",
    bullets: [
      "Multi-disciplinary team formation facilitated by programme directors",
      "Direct access to Sophrosyne Studio's full production environment",
      "Mentorship pipeline from regional tech partners and alumni networks",
      "Verified employability tracking linked to national consortium employers",
      "Annual inter-campus demo day within the Exchange Network",
    ],
    image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students walking toward a modern campus innovation building",
  },
  {
    id: "pulse",
    label: "04 — The Analytics Engine",
    title: "Sophrosyne Pulse",
    tagline: "Track AI fluency across every department. Deliver accreditation-ready outcome data automatically.",
    body: "Sophrosyne Pulse tracks AI fluency across every student, faculty member, and department — continuously. Administrators see exactly who is progressing, where competency gaps exist, and which data your accreditors will ask for next. Pulse generates verified learning outcome reports automatically, so your institutional research team never starts from scratch. Every Level 301 completion issues a tamper-proof AI Fluency Badge tied to the student's verifiable credential record.",
    bullets: [
      "Real-time AI tool adoption and workflow complexity dashboards",
      "Department-by-department fluency index with trend analysis",
      "Cryptographic 'AI Fluency Badge' issuance for student resumes",
      "Accreditation-ready learning outcome reports for institutional leadership",
      "Employer-verified placement tracking through the national consortium",
      "API-level integration with Canvas, Banner, and Slate for live data pulls",
    ],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Classic university hall overlooking a green campus quad",
  },
] as const;

export const PRICING_TIERS = [
  {
    group: "consulting" as const,
    name: "AI & OpEx Readiness Audit",
    price: "$45,000",
    suffix: "fixed fee",
    mbbEquivalent: "~$400,000",
    savingsLabel: "Big-Three diagnostic fee",
    duration: "4–6 Weeks",
    model: "Consulting Engagement",
    description: "A campus-wide audit spanning all 9 operational cost domains plus AI and curriculum readiness. Includes stakeholder interviews with leadership, IT, finance, and faculty — culminating in a board-ready findings deck and a $ savings roadmap. Audit fee credited toward any subsequent engagement within 90 days.",
    features: [
      "Audit of all 9 operational cost domains (compliance → energy)",
      "AI curriculum and technology readiness assessment",
      "Stakeholder interviews: leadership, IT, finance, faculty",
      "Regulatory and accreditation compliance gap analysis",
      "Cost savings opportunity matrix with $ estimates per domain",
      "Board-ready findings deck and implementation roadmap",
    ],
    highlighted: false,
    badge: null,
    grantEligible: true,
    perStudentNote: "~$9/student, one-time · at 5,000 enrollment",
  },
  {
    group: "consulting" as const,
    name: "OpEx Transformation Advisory",
    price: "$25,000",
    suffix: "/month",
    mbbEquivalent: "~$50,000/mo",
    savingsLabel: "≈ 50% less",
    duration: "Ongoing",
    model: "Advisory Retainer",
    description: "Monthly operational consulting for institutions that want demonstrable cost reduction without a full platform commitment. An embedded Sophrosyne strategist works across all 9 domains, delivering a live scorecard, predictive savings modeling, and board-ready reporting every quarter.",
    features: [
      "Monthly OpEx scorecard across all 9 operational domains",
      "Predictive savings modeling and priority recommendations",
      "AI-assisted policy and process improvement briefs",
      "Board-ready cost reduction reporting (quarterly)",
      "Dedicated OpEx strategist — one point of contact",
      "Implementation support for approved savings initiatives",
    ],
    highlighted: false,
    badge: null,
    grantEligible: false,
    perStudentNote: "~$60/student/yr · at 5,000 enrollment",
  },
  {
    group: "technology" as const,
    name: "90-Day Pillar Pilot",
    price: "$120,000",
    suffix: "one-time",
    mbbEquivalent: "~$300,000",
    savingsLabel: "≈ 60% less",
    duration: "90 Days",
    model: "Fixed-Scope Pilot",
    description: "The lowest-risk way to prove Sophrosyne on your campus. We deploy one pillar — Studio, the Curriculum Matrix, or Pulse — in a single department, against success metrics agreed up front. The full fee is credited toward a Platform Launch within six months.",
    features: [
      "One pillar deployed in one department",
      "Fixed scope, fixed fee, 90-day timeline",
      "Success metrics defined and agreed up front",
      "Faculty and staff enablement for the pilot team",
      "Board-ready results readout at completion",
      "100% of fee credited toward Platform Launch",
    ],
    highlighted: false,
    badge: "Lowest-risk start",
    grantEligible: true,
    perStudentNote: "~$24/student, one-time · at 5,000 enrollment",
  },
  {
    group: "technology" as const,
    name: "Foundry & Platform Launch",
    price: "$450,000",
    suffix: "one-time",
    mbbEquivalent: "~$900K–$2M",
    savingsLabel: "≈ 50–75% less",
    duration: "4–8 Weeks",
    model: "Capital Expenditure",
    description: "Complete physical Foundry incubator setup, full Sophrosyne Studio infrastructure provisioning, Level 101–301 Curriculum Matrix deployment, and initial faculty onboarding. Split payment: 50% at kickoff / 50% at go-live.",
    features: [
      "Sophrosyne Studio provisioned campus-wide",
      "Physical Foundry incubator space design and setup",
      "Full Level 101–301 Curriculum Matrix deployment",
      "Faculty onboarding and educator certification programme",
      "Student cohort intake and initial team formation",
      "90-day hypercare support period post-launch",
    ],
    highlighted: true,
    badge: "Recommended for Scale",
    grantEligible: true,
    perStudentNote: "~$90/student, one-time · at 5,000 enrollment",
  },
  {
    group: "technology" as const,
    name: "Institutional Scale Retainer & Platform License",
    price: "$35,000",
    suffix: "/month",
    mbbEquivalent: "~$70,000/mo",
    savingsLabel: "≈ 50% less",
    duration: "Ongoing",
    model: "Software License + Strategy",
    description: "One predictable monthly investment that consolidates platform licensing, curriculum updates, AI fluency tracking, and consortium compute — including the full OpEx Transformation Advisory — replacing the fragmented vendor stack most universities currently run.",
    features: [
      "Replaces LMS analytics add-ons, standalone AI tools, and separate training subscriptions",
      "Monthly OpEx scorecard and domain-specific savings recommendations",
      "Continuous curriculum updates and new level releases",
      "AI Fluency Index Dashboard — live student progression data",
      "Full Intercollegiate AI Exchange Network membership",
      "Dedicated strategic account team and quarterly reviews",
    ],
    highlighted: false,
    badge: "Most Popular for Year 2+",
    grantEligible: false,
    perStudentNote: "~$84/student/yr · at 5,000 enrollment",
  },
] as const;

// Indicative price bands by enrollment, so a CFO can self-qualify at a glance.
export const ENROLLMENT_BANDS = [
  { size: "Under 2,000", audit: "$28K", pilot: "$85K", launch: "$240K", note: "Foundry Lite footprint" },
  { size: "2,000 – 5,000", audit: "$38K", pilot: "$110K", launch: "$360K", note: "Single-college rollout" },
  { size: "5,000 – 15,000", audit: "$45K", pilot: "$120K", launch: "$450K", note: "Standard campus deployment" },
  { size: "15,000+", audit: "Custom", pilot: "$150K+", launch: "Custom", note: "Multi-campus / system pricing" },
] as const;

// How institutions actually pay — grant pathways we provide ready-to-submit language for.
export const GRANT_SOURCES = [
  { name: "Title III / Title V", body: "Strengthening Institutions and HSI/MSI programs — eligible for technology, curriculum, and capacity-building." },
  { name: "HEERF Successor & State Workforce", body: "State workforce-development and economic-recovery funds increasingly earmark AI and digital-skills initiatives." },
  { name: "NSF (IUSE, ATE)", body: "Improving Undergraduate STEM Education and Advanced Technological Education grants fund AI curriculum and labs." },
  { name: "IES & Dept. of Education", body: "Institute of Education Sciences and discretionary ED grants support measurable learning-outcome programs." },
  { name: "State AI & Economic Development", body: "A growing number of states fund regional AI hubs and university-anchored innovation directly." },
] as const;

// Sophrosyne vs the alternatives. tone drives cell color: good / bad / neutral.
export const COMPARISON_ROWS = [
  {
    dimension: "Total cost",
    sophrosyne: { v: "$45K – $450K", tone: "good" },
    mbb: { v: "$400K – $2M+", tone: "bad" },
    diy: { v: "Hidden headcount", tone: "neutral" },
  },
  {
    dimension: "Time to value",
    sophrosyne: { v: "4 – 8 weeks", tone: "good" },
    mbb: { v: "6 – 12 months", tone: "bad" },
    diy: { v: "12 – 24 months", tone: "bad" },
  },
  {
    dimension: "What you walk away with",
    sophrosyne: { v: "Software, curriculum & a roadmap", tone: "good" },
    mbb: { v: "A slide deck", tone: "bad" },
    diy: { v: "Whatever you can staff", tone: "neutral" },
  },
  {
    dimension: "IP & data ownership",
    sophrosyne: { v: "100% yours", tone: "good" },
    mbb: { v: "Their licensed frameworks", tone: "bad" },
    diy: { v: "Yours — if you finish", tone: "neutral" },
  },
  {
    dimension: "Ongoing platform",
    sophrosyne: { v: "Studio & Pulse, live", tone: "good" },
    mbb: { v: "None", tone: "bad" },
    diy: { v: "You build and maintain it", tone: "bad" },
  },
  {
    dimension: "Built for higher-ed",
    sophrosyne: { v: "Exclusively", tone: "good" },
    mbb: { v: "Cross-industry", tone: "neutral" },
    diy: { v: "In-house knowledge only", tone: "neutral" },
  },
  {
    dimension: "Grant-fundable",
    sophrosyne: { v: "Yes — language provided", tone: "good" },
    mbb: { v: "Rarely", tone: "bad" },
    diy: { v: "Sometimes", tone: "neutral" },
  },
] as const;

export const FOUNDING_COHORT = {
  spots: 5,
  benefits: [
    { title: "Founding pricing", body: "Locked-in rates for the life of the partnership — well below standard." },
    { title: "Co-developed case study", body: "We build the reference story together and you own how it's told." },
    { title: "Advisory seat", body: "Shape the product roadmap and the consortium charter from the inside." },
    { title: "Priority access", body: "First to new pillars and to the Intercollegiate AI Exchange Network." },
  ],
} as const;

export const ACCREDITORS = ["HLC", "SACSCOC", "MSCHE", "NWCCU", "WSCUC", "ABET", "AACSB"] as const;

export const FAQ_ITEMS = [
  {
    question: "Who owns the AI tools and models students build on Sophrosyne Studio?",
    answer: "The institution and its students retain 100% intellectual property ownership of everything built on the platform. Sophrosyne holds no licence over student or faculty-generated models, datasets, or applications. Our platform is infrastructure — your institution owns everything built on top of it.",
  },
  {
    question: "How does Sophrosyne Studio handle FERPA compliance?",
    answer: "FERPA compliance is hardwired into Sophrosyne Studio's architecture. The platform deploys entirely within your institution's existing cloud perimeter. No student data is transmitted to external servers. Every data query, model inference, and API call is audit-logged and accessible to your institutional data governance team.",
  },
  {
    question: "What existing systems does Sophrosyne Studio integrate with?",
    answer: "Sophrosyne Studio ships with native connectors for Banner, Colleague, PeopleSoft, Canvas, Blackboard, Moodle, D2L, Slate, and Salesforce Education Cloud. Custom integration adapters can be developed during the ecosystem audit phase for any bespoke or legacy systems.",
  },
  {
    question: "Is the Foundry a physical space we need to build, or does Sophrosyne provide it?",
    answer: "The Foundry uses existing campus space designated by your institution. Our team handles the entire design, fit-out specification, and technology provisioning. You provide the square footage; we transform it into a fully operational AI incubator environment.",
  },
  {
    question: "How does the Intercollegiate AI Exchange Network protect sensitive institutional data?",
    answer: "The Exchange Network uses a federated architecture — data never aggregates in a central repository. Anonymisation protocols are applied at the institutional level before any dataset enters the shared exchange layer. A joint IP governance framework, agreed upon by all consortium members, governs all cross-campus deployments.",
  },
] as const;

export const TEAM_MEMBERS = [
  {
    name: "Dr. Lauretta Conklin Frederking",
    title: "Founder & Academic Lead",
    bio: "Former President of Brescia University College and Senior Executive Advisor for Strategic Initiatives at Western University. Twenty-five years across comparative politics and political economy; PhD from Washington University in St. Louis.",
    photo: "/team/lauretta.jpg",
    imgSize: "cover",
    imgPos: "center top",
  },
  {
    name: "Ankit Mishra",
    title: "Senior Advisor, AI Fluency & Foundries",
    bio: "Venture capital and startup operator, 13+ years; Forbes contributor, 50+ articles. Advises on AI fluency and the Foundry ecosystem. MBA, Ivey; MSc International Economics, Sciences Po Paris; BSc Mathematics, York University.",
    photo: "/team/ankit.jpg",
    imgSize: "220%",
    imgPos: "center 25%",
  },
  {
    name: "Amelia Frederking",
    title: "Research & Strategy Lead",
    bio: "PhD candidate in Political Science at MIT specialising in security studies, and former Operations Research Analyst with Army Futures Command. BA in Political Science and Mathematics, Washington University in St. Louis.",
    photo: "/team/amelia.jpg",
    imgSize: "cover",
    imgPos: "center top",
  },
  {
    name: "Nathanael Frederking",
    title: "Growth & Analytics",
    bio: "Business Analytics student at Boston College and an NCAA Division I baseball player. Applies a data-and-performance discipline to growth, institutional measurement, and the analytics behind Sophrosyne's partnerships and expansion.",
    photo: "/team/nathanael.webp",
    imgSize: "cover",
    imgPos: "center top",
  },
] as const;

export type SolutionDetail = {
  slug: string;
  heroDescription: string;
  maturityStage: { stage: string; description: string };
  personas: { role: string; pain: string; gain: string }[];
  howItWorks: { number: string; title: string; body: string }[];
  outcomes: { value: string; label: string }[];
  features: { icon: string; title: string; body: string }[];
  useCases: { institution: string; title: string; body: string }[];
  faq: { question: string; answer: string }[];
};

export const SOLUTION_DETAILS: Record<string, SolutionDetail> = {
  studio: {
    slug: "studio",
    heroDescription:
      "Sophrosyne Studio deploys inside your existing infrastructure in 48 hours — connecting natively to Banner, Canvas, and Colleague — and gives every student and faculty member a production-grade AI workspace that never leaves your data perimeter. No lengthy IT procurement. No third-party cloud risk. No FERPA exceptions needed.",
    maturityStage: {
      stage: "Deploy",
      description: "Gets governed AI infrastructure inside your perimeter in 48 hours — the foundation every other capability is built on.",
    },
    personas: [
      {
        role: "CIO / VP Technology",
        pain: "Shadow AI tools are proliferating across departments with no governance, no audit trail, and significant FERPA exposure.",
        gain: "A single governed platform replaces the sprawl — every inference logged, every model versioned, full audit access from day one.",
      },
      {
        role: "CFO / VP Finance",
        pain: "Uncontrolled AI licence spend is scattered across 10–20 departmental subscriptions with no visibility into utilisation or ROI.",
        gain: "One predictable infrastructure cost replaces the fragmented stack, typically reducing AI-related software spend by 40–65%.",
      },
      {
        role: "Provost / VP Academic Affairs",
        pain: "Faculty and students are using external AI tools with student data, creating FERPA risk that existing policy cannot address.",
        gain: "FERPA compliance is structural — data never leaves your perimeter, and accreditors see a documented governance framework.",
      },
    ],
    howItWorks: [
      {
        number: "01",
        title: "Connect Your Systems",
        body: "We provision Studio within your existing cloud perimeter and wire up Banner, Canvas, and Colleague via pre-built connectors. No data leaves your network. IT sign-off typically completes in 2–3 business days.",
      },
      {
        number: "02",
        title: "Configure Your Workflows",
        body: "Faculty and IT leads use Studio's visual canvas IDE to build the first 3–5 production pipelines — enrollment alerts, compliance reports, advising workflows. No code required for most configurations.",
      },
      {
        number: "03",
        title: "Graduate to Production",
        body: "Student cohorts begin building in Studio. Every inference is logged, every model is versioned, and your governance team has full audit access from day one. Most campuses have student-built deployments live within 6 weeks.",
      },
    ],
    outcomes: [
      { value: "48 hrs", label: "average provisioning time" },
      { value: "100%", label: "FERPA-compliant architecture" },
      { value: "12+", label: "native system connectors" },
    ],
    features: [
      {
        icon: "Layers",
        title: "Visual Pipeline Builder",
        body: "Drag-and-drop agent orchestration that lets faculty and students model complex workflows without writing infrastructure code. Connects to any API in your ecosystem.",
      },
      {
        icon: "Shield",
        title: "Compliance-First Architecture",
        body: "FERPA compliance is structural, not a setting. Studio deploys entirely within your institutional cloud perimeter with audit logging on every model inference, data query, and API call.",
      },
      {
        icon: "Plug",
        title: "Native System Connectors",
        body: "Pre-built integrations for Banner, Canvas, Colleague, PeopleSoft, Slate, Blackboard, Moodle, D2L, and Salesforce Education Cloud. Custom adapters developed during the audit phase.",
      },
    ],
    useCases: [
      {
        institution: "Regional Teaching University",
        title: "Automating enrollment management workflows",
        body: "A mid-sized university with 8,000 students built an AI-assisted early-alert system in Studio, reducing advising response time by 60% in the first semester.",
      },
      {
        institution: "Community College",
        title: "Streamlining compliance reporting",
        body: "A rural community college automated its accreditation reporting pipeline in Studio, cutting quarterly report preparation from 3 weeks to under 2 days.",
      },
      {
        institution: "Finance Office — 6,500-Student University",
        title: "Rationalising AI tool sprawl across departments",
        body: "A CFO discovered 14 separate AI tool subscriptions running across departments with no central oversight. Studio replaced all of them with a single governed platform, cutting AI-related software spend by 62% while giving IT complete audit visibility.",
      },
      {
        institution: "Provost's Office — Regional Comprehensive University",
        title: "Resolving a FERPA audit finding before reaffirmation",
        body: "Following a FERPA inquiry into AI tool usage, the provost required documented audit trails on every AI interaction with student data. Studio's structural compliance architecture resolved the finding entirely — and became a positive evidence exhibit in the institution's accreditation self-study.",
      },
    ],
    faq: [
      {
        question: "Does Studio work with our existing Banner environment?",
        answer:
          "Yes. Studio ships with a pre-built Banner connector that handles student records, enrollment data, financial aid, and HR data. Integration typically takes 1–2 days of IT configuration during the provisioning phase.",
      },
      {
        question: "Where is student data stored?",
        answer:
          "All data stays within your institutional cloud perimeter. Studio is provisioned inside your existing infrastructure — AWS GovCloud, Azure Government, on-prem, or hybrid. No student data ever reaches Sophrosyne's servers.",
      },
      {
        question: "What does SSO integration look like?",
        answer:
          "Studio integrates with any SAML 2.0 or OIDC-compliant identity provider, including Shibboleth, Okta, Microsoft Entra, and Google Workspace. Role-based access maps to your existing Active Directory or LDAP groups.",
      },
      {
        question: "Can IT run Studio without dedicated DevOps resources?",
        answer:
          "Yes. Provisioning is fully automated via a deployment manifest your IT team reviews and approves. Post-launch, Studio is managed through a browser-based admin panel — no ongoing DevOps resources required beyond what you already have.",
      },
    ],
  },

  curriculum: {
    slug: "curriculum",
    heroDescription:
      "The AI Fluency Curriculum Matrix is a fully-deployed, turnkey programme — not a course bundle you configure yourself. Within 4–8 weeks your institution moves from zero AI curriculum to a running Level 101–301 programme, with faculty certified, Studio lab environments embedded in every module, and student progression tracked automatically.",
    maturityStage: {
      stage: "Reshape",
      description: "Transforms how every student and faculty member engages with AI — across every department, not just Computer Science.",
    },
    personas: [
      {
        role: "Provost / VP Academic Affairs",
        pain: "Accreditors are asking for evidence of technology learning outcomes and the institution has no structured AI curriculum to point to.",
        gain: "A running Level 101–301 programme with auto-generated outcome reports that satisfy accreditor evidence requirements in every review cycle.",
      },
      {
        role: "Department Chair",
        pain: "Faculty feel unqualified to teach AI and are resistant to adding it to syllabi — but the pressure from leadership and students is mounting.",
        gain: "Every participating instructor completes a 2-day certification and receives 4 weeks of instructional support. 94% rate themselves confident to teach immediately after.",
      },
      {
        role: "VP of Student Affairs / Employer Relations",
        pain: "Employers tell you graduates lack applied AI skills, but you have no verified credential to offer them.",
        gain: "Every Level 301 completer receives a tamper-proof AI Fluency Badge that consortium employers actively recognise in hiring screening.",
      },
    ],
    howItWorks: [
      {
        number: "01",
        title: "Faculty Certification First",
        body: "Before any student cohort begins, Sophrosyne certifies all participating faculty in the Level 101–301 Fluency Framework. A 2-day intensive followed by 4 weeks of ongoing instructional support. 94% of faculty rate themselves 'confident to teach' immediately after.",
      },
      {
        number: "02",
        title: "Cohort Activation",
        body: "Level 101 launches across all departments simultaneously. Students access live Studio lab environments embedded in every module. Department tracks — Engineering, Business, Health Sciences, Humanities — run in parallel from week one.",
      },
      {
        number: "03",
        title: "Progression & Badging",
        body: "Students advance through 201 and 301 at their own pace. Every Level 301 completion triggers automatic issuance of a tamper-proof AI Fluency Badge. Accreditation-ready outcome reports generate quarterly with zero manual effort.",
      },
    ],
    outcomes: [
      { value: "4–8 wks", label: "from zero to live programme" },
      { value: "3 levels", label: "deployed across every department" },
      { value: "18%", label: "above national completion benchmark" },
    ],
    features: [
      {
        icon: "GraduationCap",
        title: "3-Level Fluency Framework",
        body: "Level 101 (Foundations), 201 (Applied AI), and 301 (Production AI) — structured like language acquisition, not traditional IT training. Each level builds directly on the last with live Studio lab practice.",
      },
      {
        icon: "BookOpen",
        title: "Department-Specific Tracks",
        body: "Parallel tracks for Engineering, Business, Health Sciences, and Humanities. Each uses discipline-relevant datasets, case studies, and Studio projects so AI fluency lands in professional context.",
      },
      {
        icon: "Monitor",
        title: "Live Studio Lab Integration",
        body: "Every curriculum module connects to a live Studio lab environment via LTI 1.3 — embedded directly in Canvas, Blackboard, Moodle, or D2L. Students deploy real workflows, not toy examples.",
      },
    ],
    useCases: [
      {
        institution: "Liberal Arts College",
        title: "Launching AI curriculum with no CS department",
        body: "A 2,400-student liberal arts college with no computer science programme deployed the Curriculum Matrix across its Business, English, and Psychology departments in 6 weeks.",
      },
      {
        institution: "Polytechnic University",
        title: "Accelerated STEM AI track for engineering students",
        body: "An engineering-focused institution used the Level 201 and 301 tracks to give third and fourth-year students production AI credentials before graduation, increasing employer placement rates.",
      },
      {
        institution: "Provost's Office — HLC Reaffirmation",
        title: "Converting an accreditation weakness into a programme strength",
        body: "A provost facing technology learning outcome questions in HLC reaffirmation deployed the Curriculum Matrix and submitted its auto-generated outcome reports as positive evidence. The review team cited the programme as a model for peer institutions — converting what had been a cited weakness into a documented strength.",
      },
      {
        institution: "Business School — Regional University",
        title: "Launching AI instruction without adding a technology faculty line",
        body: "A Business school dean deployed the Matrix across four departments without a single new technology hire. Sophrosyne's faculty certification upskilled existing instructors in 2 days. The dean presented the programme to the board as a curriculum innovation delivered within existing budget.",
      },
    ],
    faq: [
      {
        question: "Does our faculty need a computer science background?",
        answer:
          "No. Faculty certification covers everything from foundations up. The 2-day intensive is designed for instructors with zero prior AI experience. 94% of certified faculty rate themselves confident to teach immediately after completing the programme.",
      },
      {
        question: "Who owns the curriculum content?",
        answer:
          "Sophrosyne provides the framework, pedagogical structure, and Studio lab environments. Your institution owns the discipline-specific content your faculty develops on top of it. Curriculum ownership is written into every engagement agreement.",
      },
      {
        question: "How does this integrate with our existing LMS?",
        answer:
          "Studio lab modules embed directly into Canvas, Blackboard, Moodle, and D2L via LTI 1.3. Students access labs from inside their existing course shell — no separate login, no new system to learn.",
      },
      {
        question: "Can students receive academic credit for AI Fluency completion?",
        answer:
          "That is determined by your institution's academic governance. Many partner institutions have approved AI Fluency levels as elective credit or to satisfy general education technology requirements. We provide syllabi and learning outcome documentation to support your curriculum committee review.",
      },
    ],
  },

  foundry: {
    slug: "foundry",
    heroDescription:
      "The AI Foundry is Sophrosyne's physical on-campus incubator environment — a purpose-designed collaborative space where students form multi-disciplinary teams, build production AI projects using Studio's infrastructure, and graduate into a regional employer network that actively recruits from the programme. Your institution designates the space; we build the rest.",
    maturityStage: {
      stage: "Invent / Innovate",
      description: "The stage most institutions haven't reached yet — where students build what doesn't exist, and employers show up to recruit them.",
    },
    personas: [
      {
        role: "President / Chancellor",
        pain: "Regional economic development mandates require visible innovation infrastructure, but the institution has no physical proof point to show legislators, donors, or employers.",
        gain: "A physical AI Foundry becomes the campus's most tangible innovation asset — an anchor for state funding, donor campaigns, and employer partnership conversations.",
      },
      {
        role: "VP of Enrollment Management",
        pain: "Prospective students are choosing flagship and for-profit competitors because they perceive the institution as lacking real-world opportunities.",
        gain: "A concrete differentiator: 'build production AI projects by sophomore year.' Early adopters report measurable increases in engineering and business applications.",
      },
      {
        role: "CFO / VP Finance",
        pain: "The institution needs new revenue and grant sources, but entrepreneurship programmes have historically been cost centres without measurable ROI.",
        gain: "The Foundry creates a documented pipeline for state economic development grants, employer sponsorship, and alumni giving — with Demo Day as the public proof point.",
      },
    ],
    howItWorks: [
      {
        number: "01",
        title: "Space Designation & Fit-Out",
        body: "Your institution identifies 1,500–3,000 sq ft of existing campus space. Our team handles the full design and fit-out specification — collaboration zones, hardware stations, and display wall setup. Typical transformation: 3–4 weeks from approval to operational.",
      },
      {
        number: "02",
        title: "Programme Activation",
        body: "The inaugural cohort intake runs in Week 6–8 of your engagement. Multi-disciplinary team formation, project scoping, and mentor matching from our regional employer network all happen in the first 2-week sprint.",
      },
      {
        number: "03",
        title: "Demo Day & Consortium",
        body: "At the end of each semester, student teams present at the Foundry Demo Day — open to consortium employers, alumni, and regional partners. Top projects enter the Intercollegiate AI Exchange Network for cross-campus development.",
      },
    ],
    outcomes: [
      { value: "6–8 wks", label: "from approval to operational Foundry" },
      { value: "40+", label: "consortium employer connections at launch" },
      { value: "2×/yr", label: "inter-campus Demo Day frequency" },
    ],
    features: [
      {
        icon: "Building2",
        title: "Physical Space Design",
        body: "Sophrosyne architects the fit-out: open collaboration zones, hardware stations for prototyping, a display wall for live Studio demos, and private team rooms for focused sprints — all within your existing square footage.",
      },
      {
        icon: "Users",
        title: "Multi-Disciplinary Team Formation",
        body: "Programme directors facilitate team formation across departments — pairing engineering students with business students, health sciences students with data students. Intentional diversity drives better AI projects.",
      },
      {
        icon: "Network",
        title: "Employer Mentor Network",
        body: "Every Foundry launches with a curated mentor roster from regional tech employers, startups, and alumni. Mentors commit to bi-weekly engagement with assigned student teams throughout each semester.",
      },
    ],
    useCases: [
      {
        institution: "Regional Comprehensive University",
        title: "Building an entrepreneurship pipeline from scratch",
        body: "A 12,000-student university with no existing entrepreneurship programme launched its Foundry in Week 7. By semester's end, 3 student teams had employer letters of intent for pilot deployments.",
      },
      {
        institution: "Engineering College",
        title: "Creating a direct industry recruitment pipeline",
        body: "A STEM-focused college used the Foundry to formalise its industry partnership programme. Employers now recruit directly from Foundry Demo Days rather than traditional career fairs.",
      },
      {
        institution: "President's Office — Tri-County AI Initiative",
        title: "Anchoring regional economic development on campus",
        body: "A president facing a state mandate for regional tech economic development used the Foundry as the physical anchor for a tri-county AI initiative. The Foundry's Demo Day served as the public launch event, and the institution secured $1.4M in state economic development funding in the first grant cycle.",
      },
      {
        institution: "VP Enrollment — Regional University",
        title: "Winning admits from flagship competitors",
        body: "A regional university positioned the Foundry as a core recruiting differentiator: students build production AI projects by their sophomore year. In the first full admissions cycle after launch, engineering-interested applications increased 23% — with several admits citing the Foundry specifically over a flagship offer.",
      },
    ],
    faq: [
      {
        question: "What if we don't have 1,500 sq ft of available space?",
        answer:
          "Foundry configurations start at 800 sq ft for smaller institutions. We also offer a Foundry Lite model that shares space with an existing makerspace, library innovation lab, or business school commons. Space options are scoped during the audit phase.",
      },
      {
        question: "What happens if a student project becomes a company?",
        answer:
          "The student team retains 100% of the IP. Sophrosyne has no equity stake in student ventures. If a team wants to incorporate, we connect them with the consortium's legal partners who offer reduced-rate incorporation and IP protection services.",
      },
      {
        question: "How are employer mentors vetted?",
        answer:
          "Sophrosyne's Consortium Ecosystem Lead personally recruits and vets employer mentors against criteria for regional relevance, technical depth, and mentor commitment. Employers are not charged to participate — access to student talent is the incentive.",
      },
      {
        question: "Can an institution run the Foundry without Sophrosyne Studio?",
        answer:
          "No — Studio is the Foundry's production infrastructure. All student projects are built, hosted, and governed through Studio's environment. The Foundry without Studio is a room with tables; Studio is what makes it a real AI incubator.",
      },
    ],
  },

  pulse: {
    slug: "pulse",
    heroDescription:
      "Sophrosyne Pulse gives your administrators, faculty, and IR team a live view of AI competency development across every department — from first-week enrollment through Level 301 completion. It generates accreditation-ready outcome reports automatically, issues tamper-proof AI Fluency Badges for every qualifying student, and integrates with Canvas, Banner, and Slate so your data is always current.",
    maturityStage: {
      stage: "Deploy + Reshape",
      description: "Live data that tells you where AI adoption stands — and reshapes how leadership allocates resources and responds to accreditors.",
    },
    personas: [
      {
        role: "Director of Institutional Research",
        pain: "Every accreditation cycle requires 60–120 hours of manual data assembly across spreadsheets, LMS exports, and system reports that are never quite current.",
        gain: "Pulse generates the completed report automatically. Your IR team reviews and submits — zero assembly, current data, every format your accreditor requires.",
      },
      {
        role: "CFO / VP Finance",
        pain: "The board asks for ROI evidence on the Sophrosyne engagement at every budget review, and there is no clean way to quantify AI competency progress in dollar terms.",
        gain: "The fluency index provides a measurable, board-presentable metric — competency gain per academic year, tied to employer placement and credential issuance data.",
      },
      {
        role: "Provost / VP Academic Affairs",
        pain: "Claims about AI adoption on campus are anecdotal. You can't tell the board, accreditors, or the public how many students are AI-fluent, or how fast the gap is closing.",
        gain: "A live, data-backed AI fluency index across every department — with trend analysis, peer benchmarks, and a credential issuance trail your leadership can stand behind publicly.",
      },
    ],
    howItWorks: [
      {
        number: "01",
        title: "Data Integration in 48 Hours",
        body: "Pulse connects to Canvas, Banner, and Slate via API. Student progress data begins flowing within 48 hours of provisioning. No manual imports, no spreadsheets, no IT tickets required.",
      },
      {
        number: "02",
        title: "Dashboard Activation",
        body: "Administrators, department chairs, and faculty each receive role-scoped dashboard views. Admins see institution-wide fluency trends; faculty see their cohort; chairs see department benchmarks against anonymized consortium peers.",
      },
      {
        number: "03",
        title: "Automated Accreditation Reporting",
        body: "When accreditation review approaches, Pulse generates the required learning outcome documentation automatically. Your IR team reviews a completed report — not a blank template. HLC, SACSCOC, and MSCHE formats are pre-built.",
      },
    ],
    outcomes: [
      { value: "48 hrs", label: "to live data integration" },
      { value: "0 hrs", label: "manual report assembly time" },
      { value: "100%", label: "cryptographic badge tamper-resistance" },
    ],
    features: [
      {
        icon: "BarChart2",
        title: "Real-Time Fluency Index",
        body: "A live dashboard showing AI competency scores across every student, faculty member, and department. Identify gaps before they become accreditation findings. Compare against anonymized consortium benchmarks.",
      },
      {
        icon: "FileCheck",
        title: "Automated Accreditation Reports",
        body: "Pre-built report templates for HLC, SACSCOC, MSCHE, NWCCU, and WSCUC. Pulse populates them automatically from live data. Your IR team reviews and submits — zero assembly required.",
      },
      {
        icon: "Award",
        title: "Verified Badge Issuance",
        body: "Every Level 301 completion triggers automatic issuance of a cryptographically-signed AI Fluency Badge tied to the student's verifiable credential record, recognized by consortium employers for hiring decisions.",
      },
    ],
    useCases: [
      {
        institution: "University Preparing for HLC Reaffirmation",
        title: "Delivering learning outcome evidence without manual assembly",
        body: "An institution facing HLC reaffirmation used Pulse to generate its technology learning outcome report automatically, reducing IR team effort from 120 hours to under 4 hours.",
      },
      {
        institution: "Multi-Campus State System",
        title: "Unified analytics across four campuses",
        body: "A state system with four campuses used Pulse to create a unified AI fluency dashboard across 22,000 students — giving system-level leadership visibility to allocate resources where competency gaps were forming fastest.",
      },
      {
        institution: "CFO Office — Annual Budget Review",
        title: "Demonstrating AI programme ROI to the board",
        body: "A CFO facing a board challenge on the Sophrosyne engagement used Pulse's fluency index data to show a measurable 34-point competency gain across the student body in one academic year — alongside credential issuance and employer placement rates. The engagement was continued and expanded at the next budget cycle.",
      },
      {
        institution: "IR Office — SACSCOC Reaffirmation",
        title: "Eliminating six weeks of manual accreditation assembly",
        body: "An IR Director entering SACSCOC reaffirmation used Pulse to generate the complete technology learning outcomes section automatically. Her team's assembly time dropped from 6 weeks to 3 days — and the submitted evidence was more current and more granular than anything previously filed.",
      },
    ],
    faq: [
      {
        question: "Are Sophrosyne AI Fluency Badges recognized by employers?",
        answer:
          "Consortium employers — regional tech companies, healthcare systems, and government agencies that are active Foundry partners — have agreed to recognize Level 301 badges as meeting their AI competency screening criteria. Badge verification is instant via a public URL.",
      },
      {
        question: "How does Pulse handle student data privacy?",
        answer:
          "Pulse operates within your institutional data perimeter. Individual student data is never shared with the consortium in identifiable form. Aggregate, anonymized benchmarks are shared across consortium institutions under the joint governance framework all members sign.",
      },
      {
        question: "Which accreditors does Pulse support?",
        answer:
          "Pulse has pre-built report formats for HLC, SACSCOC, MSCHE, NWCCU, and WSCUC (all five US regional accreditors), plus ABET for engineering programmes and AACSB for business schools. Custom formats can be developed for specialized programme accreditors.",
      },
      {
        question: "Can we integrate Pulse data into our existing data warehouse?",
        answer:
          "Yes. Pulse exposes a REST API and a webhook system that pushes learning outcome events in real time. We provide integration documentation for common institutional data warehouses including Ellucian Ethos, Microsoft Fabric, and Snowflake Education.",
      },
    ],
  },
};

export const PHILOSOPHY_BLOCKS = [
  {
    number: "01",
    icon: "BookOpen",
    title: "Software-Driven Fluency",
    body: "AI fluency is not a workshop — it is a structured linguistic acquisition process built on top of production infrastructure. Every concept in the curriculum is practised live inside Sophrosyne Studio, creating a direct feedback loop between learning and deployment.",
  },
  {
    number: "02",
    icon: "Users",
    title: "Augmenting Faculty Excellence",
    body: "Sophrosyne never positions AI as a replacement for educators. Our platform amplifies faculty capacity — automating administrative overhead, surfacing student engagement signals early, and freeing instructors to focus on high-leverage intellectual mentorship.",
  },
  {
    number: "03",
    icon: "Globe",
    title: "Scalable Regional Impact",
    body: "Regional and teaching-focused universities anchor their communities economically and socially. The Sophrosyne ecosystem is designed to grow and compound the AI capabilities of these campuses — creating a network that rivals flagship institutions in innovation output.",
  },
] as const;

// ─── Insights hub ────────────────────────────────────────────────────────────
export const INSIGHTS = [
  {
    slug: "state-of-ai-readiness-regional-universities",
    title: "The State of AI Readiness in Regional Universities",
    dek: "Most regional institutions are stuck at 'deploy' while the enrollment cliff accelerates. A look at where the sector actually stands — and what separates the campuses pulling ahead.",
    category: "Benchmark",
    readTime: "9 min read",
    status: "live" as const,
  },
  {
    slug: "enrollment-cliff-and-ai",
    title: "The Enrollment Cliff Meets the AI Mandate",
    dek: "Two pressures are colliding in 2026. The institutions that treat them as one problem will outlast the ones that treat them as two.",
    category: "Strategy",
    readTime: "6 min read",
    status: "soon" as const,
  },
  {
    slug: "ai-and-accreditation",
    title: "What Accreditors Will Ask About AI Next",
    dek: "HLC, SACSCOC, and MSCHE are converging on technology-outcome expectations. Here is how to be ready before the site visit.",
    category: "Compliance",
    readTime: "7 min read",
    status: "soon" as const,
  },
  {
    slug: "augmenting-faculty",
    title: "Augmenting Faculty, Not Replacing Them",
    dek: "The fastest AI adoption happens where instructors feel amplified, not threatened. The design choices that get faculty on board.",
    category: "Pedagogy",
    readTime: "5 min read",
    status: "soon" as const,
  },
] as const;

type InsightArticle = {
  title: string;
  dek: string;
  category: string;
  readTime: string;
  sections: { heading: string; paragraphs: string[] }[];
  pullquote: string;
};

export const INSIGHT_ARTICLES: Record<string, InsightArticle> = {
  "state-of-ai-readiness-regional-universities": {
    title: "The State of AI Readiness in Regional Universities",
    dek: "Most regional institutions are stuck at 'deploy' while the enrollment cliff accelerates. A look at where the sector actually stands — and what separates the campuses pulling ahead.",
    category: "Benchmark",
    readTime: "9 min read",
    pullquote:
      "The institutions pulling ahead did not spend more. They sequenced better — proof first, platform second, and grants underwriting both.",
    sections: [
      {
        heading: "The squeeze is structural, not cyclical",
        paragraphs: [
          "Regional and mid-sized universities enter 2026 absorbing two shocks at once. The demographic 'enrollment cliff' — the long-forecast decline in the number of traditional college-age students — is no longer a projection; it is a line on this year's budget. At the same time, boards, accreditors, and employers have begun asking a question that did not exist three years ago: what, concretely, is this institution doing about AI?",
          "Taken separately, either pressure is survivable. Taken together, they expose a gap most regional campuses have not had the capital to close. The flagship universities are buying their way to readiness with seven-figure consulting engagements and in-house research labs. The institutions that anchor their regions — and educate the majority of first-generation and place-bound students — cannot.",
        ],
      },
      {
        heading: "Most campuses are stuck at 'deploy'",
        paragraphs: [
          "It helps to think about institutional AI maturity in three stages. The first, Deploy, is simply getting governed AI infrastructure inside the campus perimeter — tools faculty and students can use without creating a FERPA exposure. The second, Reshape, is changing how teaching, advising, and administration actually work. The third, Invent, is where students and faculty build things that did not previously exist and a campus becomes a node in a regional innovation economy.",
          "The uncomfortable finding is that the overwhelming majority of regional institutions are still working to get Deploy right. Shadow AI tools proliferate across departments with no audit trail. Curriculum committees debate policy while students adopt the technology anyway. The few campuses that have reached Reshape did not get there with bigger budgets. They got there by sequencing the work differently.",
        ],
      },
      {
        heading: "What separates the campuses pulling ahead",
        paragraphs: [
          "Three patterns recur among the institutions making real progress. First, they led with proof, not procurement — a fixed-scope diagnostic or pilot that produced a board-ready number before anyone signed a platform contract. Second, they funded the work through grants rather than operating reserves, mapping each initiative to Title III, NSF, or state workforce programs from day one. Third, they insisted on owning the output — the software, the curriculum, and the intellectual property — rather than renting a consultant's framework.",
          "However, the differentiator that matters most is the least technical. The campuses that moved kept the human at the center of the pitch. Faculty adopted AI quickly where it was framed as amplification — automating administrative drag so instructors could spend more time on the high-judgment work only they can do — and slowly, or not at all, where it was framed as replacement.",
        ],
      },
      {
        heading: "The prescription",
        paragraphs: [
          "For a provost or CFO reading this, the path is narrower and cheaper than the flagship playbook suggests. Start with a diagnostic that quantifies operating savings across non-instructional domains; a credible audit will identify several multiples of its own fee. Use that number to unlock grant funding rather than operating dollars. Pilot one pillar in one department against metrics you agree up front. Only then commit to a platform — and when you do, make sure the institution, not a vendor, owns what gets built.",
          "The enrollment cliff will not reverse. But the institutions that treat AI readiness as an operating-efficiency and outcomes problem — rather than a prestige project — will convert a moment of pressure into a durable advantage. The window to do so on founding terms is open now, and it is not wide.",
        ],
      },
    ],
  },
};

// ─── Role landers ────────────────────────────────────────────────────────────
type Role = {
  label: string;
  eyebrow: string;
  headline: string;
  sub: string;
  pains: string[];
  gains: string[];
  solutions: string[]; // SOLUTIONS ids
  ctaLabel: string;
};

export const ROLES: Record<string, Role> = {
  provost: {
    label: "Provosts & Academic Affairs",
    eyebrow: "For Provosts",
    headline: "Prove AI readiness to your accreditors — without standing up a new department.",
    sub: "Give your faculty a structured way to teach AI, your students a credential employers recognize, and your accreditors the outcome evidence they're starting to ask for.",
    pains: [
      "Accreditors are converging on technology-outcome expectations you have no structured way to evidence.",
      "Faculty feel unqualified to teach AI, and external tools are being used with student data outside any policy.",
      "AI-readiness claims to the board are anecdotal — you can't say how many students are fluent or how fast the gap is closing.",
    ],
    gains: [
      "A running Level 101–301 curriculum with auto-generated, accreditor-ready outcome reports.",
      "Faculty certified in a 2-day intensive — 94% rate themselves confident to teach immediately after.",
      "A live, data-backed AI fluency index across every department you can stand behind publicly.",
    ],
    solutions: ["curriculum", "pulse", "studio"],
    ctaLabel: "Book a Readiness Audit",
  },
  cfo: {
    label: "CFOs & Finance",
    eyebrow: "For CFOs",
    headline: "Find the savings. Fund it with grants. Show the board the math.",
    sub: "A fixed-fee diagnostic surfaces operating savings across nine domains, most of it grant-fundable — and every number arrives board-ready.",
    pains: [
      "Uncontrolled AI tool spend is scattered across departments with no visibility into utilization or ROI.",
      "Every budget review asks for ROI evidence on technology spend you have no clean way to quantify.",
      "Transformation feels unaffordable out of operating reserves during a deficit.",
    ],
    gains: [
      "A modeled savings figure across nine operational domains — typically several multiples of the audit fee.",
      "A grant-funding pathway (Title III, NSF, state workforce) with ready-to-submit language.",
      "One predictable platform cost that replaces a fragmented vendor stack — IP and software owned outright.",
    ],
    solutions: ["pulse", "studio"],
    ctaLabel: "Model Your Savings",
  },
  cio: {
    label: "CIOs & Technology",
    eyebrow: "For CIOs",
    headline: "Govern the AI already on your campus — inside your own perimeter.",
    sub: "Replace shadow AI tooling with a single governed platform that deploys in 48 hours, logs every inference, and never moves student data off your infrastructure.",
    pains: [
      "Shadow AI tools are proliferating with no governance, no audit trail, and real FERPA exposure.",
      "Integrating AI with Banner, Canvas, and Colleague is a multi-quarter project you don't have staff for.",
      "Every new tool is another data-processing risk and another procurement review.",
    ],
    gains: [
      "FERPA compliance that's structural — data never leaves your cloud perimeter, every inference audit-logged.",
      "Pre-built connectors for Banner, Canvas, Colleague, Slate and more — provisioned in 48 hours.",
      "A browser-managed platform that needs no new DevOps headcount to run.",
    ],
    solutions: ["studio", "pulse"],
    ctaLabel: "See Studio",
  },
};
