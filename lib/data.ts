export const TRUST_METRICS = [
  { value: "7 Accreditors", label: "Supported — HLC, SACSCOC, MSCHE & more" },
  { value: "100%", label: "Student & faculty IP ownership" },
  { value: "FERPA", label: "Compliant by architecture, not policy" },
  { value: "$45K", label: "Fixed-fee AI & Accreditation Readiness Audit" },
] as const;

export const WHY_ITEMS = [
  {
    icon: "GraduationCap",
    title: "AI Fluency Programme",
    body: "A senior AI advisor, academic specialist, and practitioner work alongside your faculty for 6–12 months. One AI course per semester, integrated into existing degree structures. Students graduate with a documented portfolio of applied work — and employers notice.",
  },
  {
    icon: "TrendingDown",
    title: "Operational Efficiency",
    body: "A senior finance lead and graduate analyst identify, model, and prioritize savings across nine operational domains. You receive a board-ready savings report with an implementation roadmap — no dependency on your internal finance or IR team capacity.",
  },
  {
    icon: "Rocket",
    title: "AI Foundry",
    body: "Students build real products — applications, tools, and games — that go onto their GitHub portfolio. Foundry graduates leave with a public record of what they can build, not just a credential that says they attended. Every industry is hiring AI builders — banking, tech, insurance, healthcare — and the GitHub portfolio travels to all of them.",
  },
] as const;

export const OPEX_AREAS = [
  { icon: "FileCheck",    title: "Compliance Reporting",          body: "Automated generation of accreditation and regulatory reports — no manual assembly." },
  { icon: "Users",        title: "HR Processes",                  body: "AI-driven workforce planning, onboarding workflows, and administrative task reduction." },
  { icon: "BookOpen",     title: "Governance Policies",           body: "Policy drafting, version tracking, and board-ready governance documentation." },
  { icon: "Presentation", title: "Board Reporting",               body: "AI shadow board and leadership team for faster, better-informed strategic decisions." },
  { icon: "ShoppingCart", title: "Purchase Coordination",         body: "Real-time supply optimisation across procurement, facilities, and food services." },
  { icon: "Leaf",         title: "Food Waste Management",         body: "Real-time waste tracking and predictive ordering to reduce campus food loss." },
  { icon: "BarChart2",    title: "Academic Program Optimization", body: "Live data to identify high-value programs and rationalise the portfolio in real time." },
  { icon: "Map",          title: "Land Use Optimization",         body: "Strategic campus space analysis aligned to enrollment, mission, and revenue goals." },
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
    title: "Programme Design & Implementation",
    duration: "6–12 Months",
    body: "Our expert team — a senior AI advisor, academic curriculum specialist, and practitioner — designs and delivers your program. Faculty are certified before the first cohort begins. The finance lead and grad analyst begin the OPEX modelling. The Foundry incubator structure is built around your existing space and employer network.",
  },
  {
    number: "03",
    title: "Consortium Integration",
    duration: "Ongoing",
    body: "Your institution joins The AI Exchange Network — a peer network of Sophrosyne institutions sharing anonymised benchmarks, curriculum frameworks, and student demos — gaining access to shared compute credits, federated model repositories, and cross-campus student project showcases.",
  },
] as const;

export const SOLUTIONS = [
  {
    id: "curriculum",
    label: "01 — The Competency Framework",
    title: "AI Fluency Programme",
    tagline: "Genuine AI competency. One course per semester. Students who get hired.",
    body: "The AI Fluency Programme is a structured 6–12 month engagement — not a workshop or a course bundle. A senior AI advisor, an academic curriculum specialist, and a practitioner work alongside your faculty to embed AI competency into your existing degree structures. Students take one focused AI course per semester alongside their traditional program, building applied skills rather than theoretical familiarity. Every student who completes the program has a documented portfolio of work — not a certificate.",
    bullets: [
      "Senior advisor with 10+ years in AI application and industry deployment",
      "Academic curriculum specialist adapts each level to your departmental context",
      "Practitioner delivery — applied AI on real problems, not case studies",
      "One AI course per semester integrated into existing program structures",
      "Faculty certified before the first student cohort begins",
      "Accreditation-ready outcome tracking and evidence generation",
    ],
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Diverse group of university students together outdoors on campus",
  },
  {
    id: "opex",
    label: "02 — The Finance Advisory",
    title: "Operational Efficiency",
    tagline: "A senior finance lead inside your institution. Savings your board can act on.",
    body: "Sophrosyne's OPEX engagement places a senior finance lead — with 10+ years in higher-education financial optimization — inside your institution for 6–12 months. A graduate analyst handles 80% of the data and modelling workload; the lead handles interpretation and stakeholder communication. Together they identify, model, and prioritize cost-saving opportunities across nine operational domains, then stay to support implementation of the highest-impact wins.",
    bullets: [
      "Senior finance lead with 10+ years in higher-ed financial optimization",
      "Graduate analyst covers 80% of data analysis, modelling, and reporting",
      "9-domain OpEx model: compliance, procurement, HR, energy, IT, and more",
      "Board-ready savings report with implementation priority ranking",
      "Side-by-side: current-state cost vs. AI-assisted baseline per domain",
      "No dependency on your internal IR or finance team capacity",
    ],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Classic university hall overlooking a green campus quad",
  },
  {
    id: "foundry",
    label: "03 — The AI Incubator",
    title: "AI Foundry",
    tagline: "Students build real products. GitHub is the resume. Every industry is hiring AI builders.",
    body: "The Foundry is Sophrosyne's on-campus incubator — a structured environment where students form multi-disciplinary teams and build real products: applications, automation tools, and deployable AI projects that go onto their GitHub portfolio. Every Foundry student graduates with a public record of what they can actually build — the credential that travels across banking, technology, insurance, and healthcare without needing a named recruiter.",
    bullets: [
      "Students build products, applications, and games — not case studies or coursework",
      "GitHub portfolio replaces the CV: employers see working code, not credentials",
      "Multi-disciplinary team formation facilitated by program directors",
      "Practitioner mentorship from regional industry partners and alumni networks",
      "Annual inter-campus Demo Day — students present real products to alumni, regional industry, and consortium partners",
      "Cross-industry hireability: AI builders are in demand across every sector, not just tech",
    ],
    image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students walking toward a modern campus innovation building",
  },
] as const;

export const PRICING_TIERS = [
  {
    group: "consulting" as const,
    name: "AI & Accreditation Readiness Audit",
    price: "$45,000",
    suffix: "fixed fee",
    mbbEquivalent: "~$200K–$400K",
    savingsLabel: "Big-Three diagnostic — if they serve your size",
    duration: "4–6 Weeks",
    model: "Consulting Engagement",
    description: "A campus-wide audit covering accreditation gap analysis, AI curriculum readiness, and operational savings opportunities across all 9 domains. Includes stakeholder interviews with leadership, IT, finance, and faculty — culminating in a board-ready findings deck and a prioritized roadmap. Audit fee credited toward any subsequent engagement within 90 days.",
    features: [
      "Accreditation gap analysis — HLC, SACSCOC, MSCHE, and others",
      "AI curriculum and technology readiness assessment",
      "Stakeholder interviews: leadership, IT, finance, faculty",
      "Operational savings opportunity matrix across all 9 domains",
      "Fluency baseline and 12-month progression roadmap",
      "Board-ready findings deck and grant-funding pathway",
    ],
    highlighted: false,
    badge: null,
    grantEligible: true,
    perStudentNote: "~$9/student, one-time · at 5,000 enrollment",
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
    description: "The lowest-risk way to engage Sophrosyne. We activate one pillar — AI Fluency, OPEX, or Foundry — in a single department or function, against success metrics agreed up front. The full fee is credited toward a full engagement within six months.",
    features: [
      "One pillar activated in one department or function",
      "Fixed scope, fixed fee, 90-day timeline",
      "Success metrics defined and agreed up front",
      "Expert team embedded for the pilot period",
      "Board-ready results readout at completion",
      "100% of fee credited toward full engagement",
    ],
    highlighted: false,
    badge: "Lowest-risk start",
    grantEligible: true,
    perStudentNote: "~$24/student, one-time · at 5,000 enrollment",
  },
  {
    group: "technology" as const,
    name: "AI Fluency Platform Launch",
    price: "$450,000",
    suffix: "one-time",
    mbbEquivalent: "~$900K–$2M",
    savingsLabel: "≈ 50–75% less",
    duration: "4–8 Weeks",
    model: "Capital Expenditure",
    description: "Full 6–12 month engagement: AI Fluency Programme, Operational Efficiency advisory, and physical Foundry incubator — all three pillars delivered by our expert team. A Big-4 firm gives you a deck; this gives you certified faculty, a running curriculum, a board-ready savings roadmap, and students building real products. Split payment: 50% at kickoff / 50% at go-live.",
    features: [
      "AI Fluency Programme — senior advisor, curriculum specialist, practitioner",
      "OPEX Advisory — senior finance lead + graduate analyst (6–12 months)",
      "Physical Foundry incubator space design and setup",
      "Faculty certification before first student cohort begins",
      "Student cohort intake, team formation, and first Demo Day",
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
    description: "Ongoing strategic partnership: the expert team stays engaged, curriculum levels evolve with industry, the OPEX advisory continues as your cost base changes, and Foundry program directors remain active. One predictable monthly investment replacing fragmented vendors.",
    features: [
      "Continuous curriculum updates as AI tools and industry expectations evolve",
      "Monthly OPEX scorecard with domain-specific savings recommendations",
      "AI Fluency Index Dashboard — live student progression data (in development)",
      "Foundry program director engagement and Demo Day coordination",
      "Full AI Exchange Network membership",
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
    dimension: "What you walk away with",
    sophrosyne: { v: "Running program, savings roadmap & student portfolios", tone: "good" },
    mbb: { v: "A slide deck", tone: "bad" },
    diy: { v: "Whatever you can staff", tone: "neutral" },
  },
  {
    dimension: "Accreditation evidence",
    sophrosyne: { v: "Structured, documented, and board-ready on delivery", tone: "good" },
    mbb: { v: "Manual — your team assembles it", tone: "bad" },
    diy: { v: "Built from scratch — significant staff time", tone: "bad" },
  },
  {
    dimension: "Who does the work",
    sophrosyne: { v: "Senior experts + analysts embedded in your institution", tone: "good" },
    mbb: { v: "Junior consultants, senior partner on slide review", tone: "bad" },
    diy: { v: "Your existing staff, stretched", tone: "neutral" },
  },
  {
    dimension: "Total cost",
    sophrosyne: { v: "$45K – $450K", tone: "good" },
    mbb: { v: "$400K – $2M+", tone: "bad" },
    diy: { v: "Hidden headcount", tone: "neutral" },
  },
  {
    dimension: "Time to first deliverable",
    sophrosyne: { v: "Audit report in 4–6 weeks", tone: "good" },
    mbb: { v: "Strategy deck in 6–12 months", tone: "bad" },
    diy: { v: "12–24 months to first outcome", tone: "bad" },
  },
  {
    dimension: "IP & data ownership",
    sophrosyne: { v: "100% yours", tone: "good" },
    mbb: { v: "Their licensed frameworks", tone: "bad" },
    diy: { v: "Yours — if you finish", tone: "neutral" },
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
    { title: "Priority access", body: "First to new pillars and to The AI Exchange Network." },
  ],
} as const;

export const ACCREDITORS = ["HLC", "SACSCOC", "MSCHE", "NWCCU", "WSCUC", "ABET", "AACSB"] as const;

export const FAQ_ITEMS = [
  {
    question: "Who owns the work students build in the Foundry?",
    answer: "Students and their institution retain 100% intellectual property ownership of everything built in the Foundry. Sophrosyne holds no equity stake in student ventures and no license over student-created applications, models, or code. If a team incorporates, we connect them with legal partners for reduced-rate services — but we take nothing.",
  },
  {
    question: "Does faculty need a computer science background to participate?",
    answer: "No. Our academic curriculum specialist and practitioner handle the technical delivery. Faculty certification is designed for instructors with zero prior AI experience — course materials, assessment rubrics, and facilitation guides are provided and ready. Most faculty complete certification in two days.",
  },
  {
    question: "Is the Foundry a physical space we need to build, or does Sophrosyne provide it?",
    answer: "The Foundry uses existing campus space designated by your institution. Our team handles the entire design, fit-out specification, and technology provisioning. You provide the square footage — typically 800–3,000 sq ft of existing space — and we transform it into a fully operational AI incubator.",
  },
  {
    question: "What does the OPEX engagement actually produce?",
    answer: "A board-ready savings report covering nine operational domains, with each opportunity prioritized by impact and implementation effort. The senior finance lead and graduate analyst do the modelling — your finance team reviews and validates. We then support implementation of the highest-priority wins rather than handing over a report and leaving.",
  },
  {
    question: "How does The AI Exchange Network work?",
    answer: "Consortium institutions share anonymised performance benchmarks, curriculum resources, and cross-campus project showcases. Each institution controls its own data — nothing leaves your perimeter in identifiable form. A joint governance framework signed by all members sets the rules for what is shared and how it is used.",
  },
] as const;

export type TeamMember = {
  name: string;
  title: string;
  bio: string;
  photo: string;
  imgSize: string;
  imgPos: string;
  solutions: string[];
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Lauretta Conklin Frederking",
    title: "Founder & CEO",
    bio: "Former President of Brescia University College; Senior Advisor for Strategic Initiatives at Western University. MBA, Ivey; PhD, Political Economy.",
    photo: "/team/lauretta.jpg",
    imgSize: "cover",
    imgPos: "center top",
    solutions: ["curriculum", "opex", "foundry"],
  },
  {
    name: "Melissa Jean",
    title: "COO & Operational Efficiency Lead",
    bio: "CPA/CMA and Associate Professor at Western's Ivey Business School with 20+ years in financial management and operations. HBA, MBA, CPA, CMA.",
    photo: "/team/melissa.jpg",
    imgSize: "cover",
    imgPos: "center top",
    solutions: ["opex"],
  },
  {
    name: "Ankit Mishra",
    title: "Senior Advisor, AI Foundries",
    bio: "VC and startup operator, 13+ years; Forbes contributor, 50+ articles. MBA, Ivey; MSc, Sciences Po Paris; BSc Mathematics, York University.",
    photo: "/team/ankit.jpg",
    imgSize: "320%",
    imgPos: "45% 3%",
    solutions: ["curriculum", "foundry"],
  },
  {
    name: "Christine Billinger",
    title: "Head of Client Relations",
    bio: "B2B SaaS marketing leader, 15+ years building demand generation and go-to-market engines. Director of Marketing, Edgecom Energy; MBA, Ivey.",
    photo: "/team/christine.png",
    imgSize: "cover",
    imgPos: "center top",
    solutions: ["curriculum", "opex", "foundry"],
  },
  {
    name: "Amelia Frederking",
    title: "Research & Strategy Lead",
    bio: "PhD candidate in Political Science at MIT; former Operations Research Analyst with Army Futures Command. BA in Political Science and Mathematics.",
    photo: "/team/amelia.jpg",
    imgSize: "cover",
    imgPos: "center top",
    solutions: ["curriculum"],
  },
  {
    name: "Nathanael Frederking",
    title: "Growth & Analytics",
    bio: "Business Analytics student at Boston College and NCAA Division I baseball player. Drives growth, institutional measurement, and Sophrosyne's expansion analytics.",
    photo: "/team/nathanael.webp",
    imgSize: "cover",
    imgPos: "center top",
    solutions: ["foundry"],
  },
];

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
  curriculum: {
    slug: "curriculum",
    heroDescription:
      "The AI Fluency Programme deploys Sophrosyne's A1-to-C2 fluency standard — a six-stage framework covering everything from basic chat productivity to autonomous AI systems — across your existing degree programs. A senior AI advisor, curriculum specialist, and practitioner certify your faculty, adapt the framework to every department's context, and track every student's progression from A1 baseline to production-level competency. The measure of success is not completion rates. It's employment outcomes.",
    maturityStage: {
      stage: "Competency",
      description: "Moves students from AI awareness to demonstrated applied competency — documented through a portfolio of real work, not a standardized test.",
    },
    personas: [
      {
        role: "Provost / VP Academic Affairs",
        pain: "Accreditors are asking for evidence of technology learning outcomes and the institution has no structured AI curriculum to point to.",
        gain: "A running AI Fluency program with auto-generated outcome reports that satisfy accreditor evidence requirements — delivered by an expert team, not assembled from scratch.",
      },
      {
        role: "Department Chair",
        pain: "Faculty feel unqualified to teach AI and are resistant to adding it to syllabi — but the pressure from leadership and students is mounting.",
        gain: "Our academic curriculum specialist and practitioner handle the technical delivery. Faculty certification takes two days; course materials, assessment rubrics, and facilitation guides are provided and ready from day one.",
      },
      {
        role: "VP of Student Affairs / Employer Relations",
        pain: "Employers tell you graduates lack applied AI skills, but you have no verified credential or portfolio to offer them.",
        gain: "Every program completer builds a documented portfolio of applied work — real projects, not coursework — that employers can evaluate directly alongside their GitHub profile.",
      },
    ],
    howItWorks: [
      {
        number: "01",
        title: "Faculty Certification First",
        body: "Before any student cohort begins, our academic curriculum specialist certifies all participating faculty. A 2-day intensive followed by ongoing instructional support throughout the engagement. No prior AI background required — course materials, assessment rubrics, and facilitation guides are provided and ready.",
      },
      {
        number: "02",
        title: "One Course Per Semester",
        body: "AI Fluency integrates into your existing degree structures — one AI course per semester alongside traditional program requirements. Foundations (Level 101), Applied AI (Level 201), and Production AI (Level 301) run across department-specific tracks: Engineering, Business, Health Sciences, Humanities.",
      },
      {
        number: "03",
        title: "Portfolio Documentation",
        body: "Students build applied work — not take exams — and document it throughout the program. By Level 301, each student has a portfolio of real AI projects demonstrating production competency. Accreditation-ready outcome reports generate automatically with zero manual assembly.",
      },
    ],
    outcomes: [
      { value: "6–12 mo", label: "expert team engagement duration" },
      { value: "3 levels", label: "deployed across every department" },
      { value: "100%", label: "institution retains curriculum IP" },
    ],
    features: [
      {
        icon: "GraduationCap",
        title: "Expert Delivery Team",
        body: "A senior AI advisor, academic curriculum specialist, and practitioner work embedded in your institution — not remotely. They certify faculty, adapt curriculum to your departmental context, and stay through the full engagement.",
      },
      {
        icon: "BookOpen",
        title: "Department-Specific Tracks",
        body: "Parallel tracks for Engineering, Business, Health Sciences, and Humanities. Each uses discipline-relevant applied problems so AI fluency lands in professional context, not a generic computer science elective.",
      },
      {
        icon: "Monitor",
        title: "Portfolio-First Assessment",
        body: "Students are assessed on what they build, not what they can recall. Every module culminates in a documented applied project. By program completion, each student has a portfolio demonstrating real AI competency.",
      },
    ],
    useCases: [
      {
        institution: "Liberal Arts College",
        title: "Launching AI curriculum with no CS department",
        body: "Illustrative: A 2,400-student liberal arts college with no computer science program deployed AI Fluency across its Business, English, and Psychology departments. The practitioner adapted each track to discipline-specific use cases — no technology faculty line added.",
      },
      {
        institution: "Polytechnic University",
        title: "Accelerated STEM AI track for engineering students",
        body: "Illustrative: An engineering-focused institution used the Level 201 and 301 tracks to give third and fourth-year students production AI portfolios before graduation, with employers citing portfolio quality in placement decisions.",
      },
      {
        institution: "Provost's Office — HLC Reaffirmation",
        title: "Converting an accreditation weakness into a program strength",
        body: "Illustrative: A provost facing technology learning outcome questions in HLC reaffirmation deployed AI Fluency and submitted auto-generated outcome reports as positive evidence. The review team cited the program as a model for peer institutions.",
      },
      {
        institution: "Business School — Private University",
        title: "Launching AI instruction without adding a technology faculty line",
        body: "Illustrative: A Business school dean launched AI Fluency across four departments without a single new technology hire. The Sophrosyne curriculum specialist and practitioner handled delivery. The dean presented the program to the board as curriculum innovation delivered within existing budget.",
      },
    ],
    faq: [
      {
        question: "Does our faculty need a computer science background?",
        answer:
          "No. Our academic curriculum specialist and practitioner handle the technical delivery throughout the engagement. Faculty certification is designed for instructors with zero prior AI experience — course materials, assessment rubrics, and facilitation guides are provided and ready from day one.",
      },
      {
        question: "Who owns the curriculum content?",
        answer:
          "Sophrosyne provides the framework and pedagogical structure. Your institution owns the discipline-specific content your faculty develops on top of it. Curriculum ownership — 100% — is written into every engagement agreement.",
      },
      {
        question: "How does 'one course per semester' work with existing degree requirements?",
        answer:
          "Our academic curriculum specialist maps the AI Fluency levels to existing course slots, elective requirements, or general education technology requirements at your institution. Most partner institutions integrate without adding credit hours — the AI Fluency content replaces or augments existing module content rather than adding to the student load.",
      },
      {
        question: "Can students receive academic credit for AI Fluency completion?",
        answer:
          "That is determined by your institution's academic governance. We provide syllabi, learning outcome documentation, and curriculum committee support materials to help your faculty senate or curriculum committee approve credit recognition. Many private institutions have moved faster on this than public ones.",
      },
    ],
  },

  opex: {
    slug: "opex",
    heroDescription:
      "The OPEX engagement places a senior finance lead — with 10+ years in higher-education financial optimization — inside your institution for 6–12 months. Together they build and validate the savings model across all nine domains — your finance team's role is review and access, not analytical capacity. They identify, model, and prioritize cost-saving opportunities, then stay to support implementation of the highest-impact wins. Finance office capacity is not a prerequisite — we bring the analytical resource.",
    maturityStage: {
      stage: "Efficiency",
      description: "Converts your operational cost baseline into a board-ready savings roadmap — prioritized by impact and implementation effort.",
    },
    personas: [
      {
        role: "CFO / VP Finance",
        pain: "The board asks for ROI evidence on transformation spend, but there is no clean data on where AI can actually reduce costs — only vendor claims.",
        gain: "A board-ready savings report showing modeled savings potential across nine domains, prioritized by impact and implementation effort — built by a finance expert who knows higher-ed cost structures.",
      },
      {
        role: "VP Operations / COO",
        pain: "Cost pressures are mounting but existing staff don't have bandwidth to model AI-assisted savings opportunities across the full operating budget.",
        gain: "The senior finance lead and graduate analyst do the work — your team reviews and validates. A prioritized implementation roadmap arrives, not a generic recommendation deck.",
      },
      {
        role: "President / Chancellor",
        pain: "The board and donors need to see fiscal stewardship and innovation simultaneously — two messages that are usually in tension.",
        gain: "A documented savings reinvestment narrative: the OPEX engagement funds the AI Fluency and Foundry programs from operational savings, making innovation cost-neutral to the operating budget.",
      },
    ],
    howItWorks: [
      {
        number: "01",
        title: "Baseline Modelling",
        body: "The senior finance lead and graduate analyst map your current-state costs across nine operational domains. They work with your finance office to validate the baseline — typically 4 weeks to a complete, auditable cost map.",
      },
      {
        number: "02",
        title: "Opportunity Prioritisation",
        body: "Each domain is assessed for AI-assisted savings potential and ranked by impact, implementation effort, and grant eligibility. The output is a prioritized roadmap the CFO can present to the board with confidence.",
      },
      {
        number: "03",
        title: "Implementation Support",
        body: "The team doesn't leave after the report. They stay through the first implementation cycles — supporting your operations leadership as the highest-priority opportunities move from plan to execution.",
      },
    ],
    outcomes: [
      { value: "$1M–$3M", label: "modeled savings potential (illustrative, $60M–$80M budget)" },
      { value: "9 domains", label: "covered in the savings model" },
      { value: "6–12 mo", label: "full engagement with implementation support" },
    ],
    features: [
      {
        icon: "BarChart2",
        title: "Senior Finance Lead",
        body: "10+ years in higher-education financial optimization. Handles stakeholder communication, board presentations, and interpretation of every domain finding. Accountable to your CFO throughout the engagement.",
      },
      {
        icon: "Users",
        title: "Dedicated Analytical Capacity",
        body: "The engagement brings its own analytical resource — data analysis, cost modelling, and reporting are handled by the Sophrosyne team. Your finance staff review and validate; they do not provide the analytical capacity.",
      },
      {
        icon: "FileCheck",
        title: "9-Domain OpEx Model",
        body: "Compliance reporting, HR processes, governance policies, board reporting, purchase coordination, food waste, academic program optimization, land use, and energy efficiency — modeled conservatively against your actual operating budget.",
      },
    ],
    useCases: [
      {
        institution: "CFO Office — Annual Budget Review",
        title: "Demonstrating AI program ROI to the board",
        body: "Illustrative: A CFO facing a board challenge on transformation spend used the OPEX engagement to produce a savings model showing modeled savings potential across nine domains — presented alongside credential issuance and employer placement data from the AI Fluency program. The engagement was continued and expanded.",
      },
      {
        institution: "Multi-Campus State System",
        title: "Unified savings modelling across four campuses",
        body: "Illustrative: A state system with four campuses used the OPEX engagement to create a unified cost map across 22,000 students — giving system-level leadership visibility into which campuses had the highest savings potential and where to prioritize implementation resources.",
      },
      {
        institution: "VP Operations — Private University",
        title: "Building the business case for AI investment",
        body: "Illustrative: A VP Operations facing pressure to justify new program spend used the OPEX engagement to show that operational savings from compliance automation and procurement coordination alone exceeded the full cost of the AI Fluency and Foundry programs within two years.",
      },
      {
        institution: "IR Office — SACSCOC Reaffirmation",
        title: "Eliminating manual accreditation assembly",
        body: "Illustrative: An IR Director entering SACSCOC reaffirmation used OPEX compliance domain findings to automate the technology learning outcomes section. Assembly time dropped from six weeks to a matter of days — and the evidence submitted was more current and granular than anything previously filed.",
      },
    ],
    faq: [
      {
        question: "What does the finance lead actually do day-to-day?",
        answer:
          "The lead works inside your institution — attending finance team meetings, reviewing cost data with department heads, and building the board presentation. The team works in parallel on modelling, data assembly, and stakeholder communication, so your finance office receives a complete, board-ready report without adding headcount.",
      },
      {
        question: "Do we need to provide data analysts or resources?",
        answer:
          "No. The graduate analyst brings the analytical capacity. Your finance team's role is to provide access to cost data and validate findings — typically a few hours per week of your existing staff's time, not new headcount.",
      },
      {
        question: "How quickly can we see results?",
        answer:
          "The board-ready savings report — covering all nine domains with prioritized opportunities — is typically ready within 6–8 weeks of engagement start. Implementation support for the first priority domain typically begins in month 3.",
      },
      {
        question: "Is the OPEX engagement eligible for grant funding?",
        answer:
          "Several Title III, Title V, and state workforce development grants cover operational improvement and AI adoption initiatives. We provide ready-to-submit grant language for eligible domains and can advise on which funding programs fit your institution's profile.",
      },
    ],
  },

  foundry: {
    slug: "foundry",
    heroDescription:
      "The AI Foundry is Sophrosyne's on-campus incubator — a structured environment where students form multi-disciplinary teams and build real products: applications, automation tools, and deployable AI projects that go onto their GitHub portfolio. Every Foundry student graduates with a public record of what they can actually build — the credential that travels across banking, technology, insurance, and healthcare. The sector doesn't matter; proof of what you can build does. Your institution designates the space; we build the rest.",
    maturityStage: {
      stage: "Innovation",
      description: "Where students build what doesn't exist yet. The GitHub portfolio that follows them is the credential every industry now looks for — not the GPA.",
    },
    personas: [
      {
        role: "President / Chancellor",
        pain: "Regional economic development mandates require visible innovation infrastructure, but the institution has no physical proof point to show legislators, donors, or employers.",
        gain: "A physical AI Foundry becomes the campus's most tangible innovation asset — an anchor for state funding, donor campaigns, and employer partnership conversations.",
      },
      {
        role: "VP of Enrollment Management",
        pain: "Prospective students are choosing competitors because they perceive the institution as lacking real-world opportunities and industry relevance.",
        gain: "A concrete differentiator: students build production AI projects and publish them to GitHub before their junior year — a live, verifiable record prospective students can see before they enroll.",
      },
      {
        role: "CFO / VP Finance",
        pain: "The institution needs new revenue and grant sources, but innovation programs have historically been cost centres without measurable ROI.",
        gain: "The Foundry creates a documented pipeline for state economic development grants, industry engagement, and alumni giving — with Demo Day as the public proof point and GitHub portfolios as the measurable output.",
      },
    ],
    howItWorks: [
      {
        number: "01",
        title: "Space Designation & Fit-Out",
        body: "Your institution identifies 800–3,000 sq ft of existing campus space. Our team handles the full design and fit-out specification — collaboration zones, hardware stations, and display wall setup. Typical transformation: 3–4 weeks from approval to operational.",
      },
      {
        number: "02",
        title: "Cohort Activation & Team Formation",
        body: "The inaugural cohort intake runs in Week 6–8. Multi-disciplinary team formation — pairing engineering, business, and humanities students — project scoping, and mentor matching from our regional industry network all happen in the first 2-week sprint.",
      },
      {
        number: "03",
        title: "GitHub Portfolio & Demo Day",
        body: "Teams build their projects publicly on GitHub throughout the semester. At semester's end, they present at the Foundry Demo Day — open to alumni, regional industry leaders, and consortium partners. The GitHub record is already public before anyone walks in. Top projects enter The AI Exchange Network.",
      },
    ],
    outcomes: [
      { value: "6–8 wks", label: "from approval to operational Foundry" },
      { value: "Every sector", label: "AI builders wanted across banking, tech, insurance, healthcare, and beyond" },
      { value: "2×/yr", label: "inter-campus Demo Day frequency" },
    ],
    features: [
      {
        icon: "Building2",
        title: "Physical Space Design",
        body: "Sophrosyne architects the fit-out: open collaboration zones, hardware stations for prototyping, a display wall for live project demos, and private team rooms for focused sprints — all within your existing square footage.",
      },
      {
        icon: "Users",
        title: "Multi-Disciplinary Team Formation",
        body: "Programme directors facilitate team formation across departments — pairing engineering students with business students, health sciences students with data students. Intentional diversity drives better AI projects.",
      },
      {
        icon: "Network",
        title: "Industry Mentor Network & GitHub Portfolio",
        body: "Every Foundry launches with a curated mentor roster from regional industry — tech, finance, healthcare, and beyond. Mentors commit to bi-weekly engagement throughout each semester. Students build publicly on GitHub — so any sector can evaluate their work before they graduate, not just at Demo Day.",
      },
    ],
    useCases: [
      {
        institution: "Private Liberal Arts College",
        title: "Building a real-world AI portfolio program from scratch",
        body: "Illustrative: A 3,500-student private college with no existing entrepreneurship program launched its Foundry in Week 7. By semester's end, student teams had GitHub portfolios with five completed projects — and students were receiving interest from regional employers who found their work through GitHub before graduation.",
      },
      {
        institution: "Engineering College",
        title: "Replacing the CV with a GitHub portfolio",
        body: "Illustrative: A STEM-focused college used the Foundry to formalise its industry partnership program. Industry contacts reached out to students directly based on their GitHub portfolios — citing the proof of shipped work as the primary screen, not the CV or GPA — rather than waiting for a career fair.",
      },
      {
        institution: "President's Office — Regional Economic Development",
        title: "Anchoring a state innovation initiative on campus",
        body: "Illustrative: A president facing a state mandate for regional tech economic development used the Foundry as the physical anchor. The Demo Day served as the public launch event, and the institution secured over $1M in state economic development funding in the first grant cycle.",
      },
      {
        institution: "VP Enrollment — Private University",
        title: "Winning admits from more prominent competitors",
        body: "Illustrative: A private university positioned the Foundry as a core recruiting differentiator — students publish real AI projects to GitHub by their sophomore year. In the first full admissions cycle after launch, engineering and business applications increased meaningfully, with several admits citing the Foundry and GitHub portfolio program over a flagship offer.",
      },
    ],
    faq: [
      {
        question: "What if we don't have 1,500 sq ft of available space?",
        answer:
          "Foundry configurations start at 800 sq ft. We also offer a Foundry Lite model that shares space with an existing makerspace, library innovation lab, or business school commons. Space options are scoped during the audit phase.",
      },
      {
        question: "What happens if a student project becomes a company?",
        answer:
          "The student team retains 100% of the IP. Sophrosyne has no equity stake in student ventures. If a team wants to incorporate, we connect them with the consortium's legal partners who offer reduced-rate incorporation and IP protection services.",
      },
      {
        question: "How are industry mentors vetted?",
        answer:
          "Sophrosyne's Consortium Ecosystem Lead personally recruits and vets industry mentors against criteria for regional relevance, technical depth, and mentor commitment. Mentors are not charged to participate — access to early-career AI talent is the incentive.",
      },
      {
        question: "Do students need prior coding experience to participate?",
        answer:
          "No. Team formation is intentionally multi-disciplinary — the engineering and technical students handle code, while business, health sciences, and humanities students contribute domain expertise, user research, and product thinking. The best Foundry projects come from teams where not everyone codes.",
      },
    ],
  },
};

export const PHILOSOPHY_BLOCKS = [
  {
    number: "01",
    icon: "BookOpen",
    title: "Outcomes Over Credentials",
    body: "The measure of an AI education program is not completion rates or certificates issued — it is whether graduates get hired and whether they can build things that matter. Every Sophrosyne engagement is designed around that outcome, not around the credential.",
  },
  {
    number: "02",
    icon: "Users",
    title: "Expert Teams, Not Platforms",
    body: "We send people, not software. A senior AI advisor, an academic curriculum specialist, and a practitioner work alongside your faculty. A senior finance lead and a graduate analyst work inside your operations. Real experts with real accountability — not a self-serve dashboard.",
  },
  {
    number: "03",
    icon: "Globe",
    title: "Private Universities Ready to Move",
    body: "The institutions that benefit most from Sophrosyne have the flexibility to restructure curriculum, designate incubator space, and act on financial insight without waiting for three committee cycles. Private universities that want to lead — not follow — are who we build for.",
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
    comingDate: "Summer 2026",
  },
  {
    slug: "ai-and-accreditation",
    title: "What Accreditors Will Ask About AI Next",
    dek: "HLC, SACSCOC, and MSCHE are converging on technology-outcome expectations. Here is how to be ready before the site visit.",
    category: "Compliance",
    readTime: "7 min read",
    status: "soon" as const,
    comingDate: "Summer 2026",
  },
  {
    slug: "augmenting-faculty",
    title: "Augmenting Faculty, Not Replacing Them",
    dek: "The fastest AI adoption happens where instructors feel amplified, not threatened. The design choices that get faculty on board.",
    category: "Pedagogy",
    readTime: "5 min read",
    status: "soon" as const,
    comingDate: "Fall 2026",
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
  heroImage: string;
  stats: { value: string; label: string }[];
  pressureContext: string;
  pains: string[];
  gains: string[];
  pathway: { step: string; title: string; body: string }[];
  solutions: string[]; // SOLUTIONS ids
  ctaLabel: string;
};

export const ROLES: Record<string, Role> = {
  provost: {
    label: "Provosts & Academic Affairs",
    eyebrow: "For Provosts",
    headline: "Graduate students employers actually want — with accreditation evidence to show how.",
    sub: "A senior AI advisor, curriculum specialist, and practitioner embed in your institution for 6–12 months to build genuine AI competency into every program. Students build portfolios that travel across every industry. Accreditors see documented outcomes.",
    heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80",
    stats: [
      { value: "73%", label: "of regional accreditation reviews now cite technology-outcome gaps in CQI plans" },
      { value: "2 days", label: "Faculty certification — no prior AI background required" },
      { value: "$0", label: "Additional faculty headcount to run the AI Fluency Programme" },
    ],
    pressureContext: "Accreditation bodies are encoding AI competency language into their Continuous Quality Improvement criteria. At the same time, enrollment competition is forcing universities to differentiate on verifiable employment outcomes — not program names. The window to act before your next review cycle is measured in semesters, not years.",
    pains: [
      "Our accreditation self-study is due within 18 months and we have no structured documentation of technology-outcome competencies.",
      "Faculty are using AI tools informally but with no consistent framework — and I know accreditors will ask about institutional oversight.",
      "We're competing for students against programs with 'AI' in their name, but we can't rename our entire curriculum.",
      "Our best faculty are already stretched — adding AI curriculum design to their workload without support would cost us people we can't replace.",
    ],
    gains: [
      "A documented AI Fluency Programme that maps directly to HLC/SACSCOC technology-outcome language — without restructuring existing degree frameworks.",
      "Faculty certified in a 2-day intensive and supported by our delivery team throughout — no new faculty lines required.",
      "Automatic outcome tracking generates accreditation-ready evidence reports at every semester end.",
      "GitHub portfolios your graduates show to employers — a verifiable enrollment differentiator for the next recruitment cycle.",
    ],
    pathway: [
      { step: "01", title: "Curriculum Audit", body: "We map your existing program against HLC/SACSCOC technology-outcome criteria and identify the documented gaps." },
      { step: "02", title: "Faculty Certification", body: "Department leads complete a 2-day AI fluency intensive before the first student cohort — no prior AI background required." },
      { step: "03", title: "Programme Delivery", body: "One AI course per semester, delivered by our expert team alongside your faculty, integrated into existing degree structures." },
      { step: "04", title: "Outcome Evidence", body: "Auto-generated accreditation portfolio at every semester milestone — GitHub portfolios, placement data, and CQI-ready reports." },
    ],
    solutions: ["curriculum", "foundry", "opex"],
    ctaLabel: "Book a Readiness Audit",
  },
  cfo: {
    label: "CFOs & Finance",
    eyebrow: "For CFOs",
    headline: "A senior finance lead models your savings. You present the board case.",
    sub: "Sophrosyne's OPEX engagement places a senior finance expert and graduate analyst inside your institution to identify, model, and prioritize cost-saving opportunities across nine operational domains — no internal analytical capacity required.",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    stats: [
      { value: "$1.2M–$3.4M", label: "Modeled annual savings for a $40M–$80M operating budget institution" },
      { value: "9 domains", label: "Operational areas analyzed: procurement, HR, IT, energy, compliance, and more" },
      { value: "~18 months", label: "Typical payback on full program investment from OPEX savings alone" },
    ],
    pressureContext: "Regional universities are running structural deficits averaging 3–6% of operating budget while the enrollment cliff contracts tuition revenue further. Boards are demanding ROI evidence before releasing transformation funds — yet your finance team doesn't have the capacity to model AI-assisted savings across nine operational domains alongside its existing workload.",
    pains: [
      "The board has approved a strategic AI plan but wants a modeled savings figure before releasing funds — and I don't have one.",
      "We're running a structural deficit and 'invest to save' arguments require board-ready evidence we cannot produce internally.",
      "Title III and state AI workforce grants exist for this, but our grants office doesn't have bandwidth to write the narrative.",
      "Every AI vendor we've evaluated comes with per-user licensing — an unpredictable line item I can't model forward for the CFO.",
    ],
    gains: [
      "A board-ready savings model built by a senior finance lead who specializes in higher-ed cost structures — delivered before you commit to the full program.",
      "Grant narrative language for Title III, HECAP, and state AI workforce funds ready to submit in the next grant cycle.",
      "Fixed-fee engagement structure: a $45K audit, then scoped program phases — no per-user fees, no renewal risk, no budget surprises.",
      "A documented reinvestment narrative: OPEX savings fund the AI Fluency and Foundry programs, making the full engagement cost-neutral within two years.",
    ],
    pathway: [
      { step: "01", title: "OPEX Audit", body: "A senior finance lead spends 6 weeks inside your institution modelling savings across 9 operational domains." },
      { step: "02", title: "Board Report", body: "You receive a board-ready findings deck with conservative estimates, implementation priority ranking, and grant pathway mapping." },
      { step: "03", title: "Grant Language", body: "We write the narrative for Title III, HECAP, and state AI workforce grants mapped to your highest-impact domains." },
      { step: "04", title: "Reinvestment Model", body: "OPEX savings fund the AI Fluency and Foundry programs — a documented cost-neutral narrative for your board." },
    ],
    solutions: ["opex", "curriculum"],
    ctaLabel: "Model Your Savings",
  },
  cio: {
    label: "CIOs & Technology",
    eyebrow: "For CIOs",
    headline: "AI across your campus — with documented governance and no new DevOps headcount.",
    sub: "The AI Fluency Programme includes institutional data governance as a structural component. Student data stays in your perimeter. Faculty and student AI activity is documented. Accreditors see a governance framework, not scattered consumer tool usage.",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    stats: [
      { value: "100%", label: "Student data sovereignty — zero third-party AI training rights on any student work" },
      { value: "0", label: "Additional DevOps or IT headcount required to run the program" },
      { value: "FERPA-by-design", label: "Governance framework built before the first student cohort, not retrofitted after" },
    ],
    pressureContext: "Shadow AI is already on your campus. Faculty and students are routing student data through consumer tools — no governance framework, no audit trail, and real FERPA exposure on every assignment uploaded to ChatGPT. Every semester without a structured governance layer is another semester of uncontrolled institutional risk.",
    pains: [
      "I know student data is going into ChatGPT across campus — but I have no governance framework to address it without banning AI entirely.",
      "The Provost wants to launch an AI program next semester, but nobody has scoped the data governance layer or integration requirements.",
      "Banner, Canvas, and Colleague integrations take six-month projects when my team is at capacity — AI tool integration is no different.",
      "Every AI vendor claims FERPA compliance in their ToS, but the actual data processing agreements don't hold up to review.",
    ],
    gains: [
      "A full AI governance framework — documented policies, role-based access, audit trails — implemented before the first cohort, not retrofitted after.",
      "Student data stays in your perimeter: zero-training, zero-retention API agreements with every AI provider in the stack.",
      "Banner, Canvas, and Colleague integrations handled by the Sophrosyne team — not your IT staff — within the existing program timeline.",
      "A governance stack your accreditors can audit: documented tool usage, data flow maps, and per-department policy registers.",
    ],
    pathway: [
      { step: "01", title: "Governance Scoping", body: "We audit your current AI tool landscape, active FERPA exposure points, and integration dependencies with Banner/Canvas/Colleague." },
      { step: "02", title: "Framework Design", body: "A governance framework is built — policies, role-based access, audit infrastructure — before the program launches." },
      { step: "03", title: "Integration", body: "Institutional system integrations completed by the Sophrosyne team within the program timeline — no additional IT headcount." },
      { step: "04", title: "Ongoing Visibility", body: "Real-time audit trail maintained throughout; quarterly governance reports your accreditors can review at any time." },
    ],
    solutions: ["curriculum", "opex"],
    ctaLabel: "See the AI Fluency Programme",
  },
};
