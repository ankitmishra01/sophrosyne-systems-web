export const TRUST_METRICS = [
  { value: "77%", label: "Of employers now require AI fluency at hire" },
  { value: "58%", label: "Say universities aren't delivering it" },
  { value: "3×", label: "AI-fluency job requirements tripled in one year — NACE 2025" },
  { value: "$45K", label: "Fixed-fee Ecosystem Audit — credited in full if you proceed" },
] as const;

export const WHY_ITEMS = [
  {
    icon: "TrendingDown",
    title: "Operational Efficiency",
    body: "A senior finance lead and graduate analyst identify, model, and prioritize savings across nine operational domains. You receive a board-ready savings report — the dollars that fund Pillars II and III.",
  },
  {
    icon: "GraduationCap",
    title: "AI Fluency Programme",
    body: "A senior AI advisor and academic specialist work alongside your faculty for 6–12 months. Students graduate with a documented portfolio employers can verify. CEFR-modeled — auditable by the same accreditors who already trust the framework.",
  },
  {
    icon: "Rocket",
    title: "AI Foundry",
    body: "Students build real AI products — deployed to GitHub — that feed directly into entrepreneurship incubators. Incubators get builders, not pitch decks. Every graduate leaves with a public record of what they can actually build.",
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
    id: "opex",
    label: "01 — The Finance Advisory",
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
    id: "curriculum",
    label: "02 — The Competency Framework",
    title: "AI Fluency Programme",
    tagline: "Genuine AI competency. One course per semester. Students who get hired.",
    body: "The AI Fluency Programme is a structured 6–12 month engagement — not a workshop or a course bundle. A senior AI advisor, an academic curriculum specialist, and a practitioner work alongside your faculty to embed AI competency into your existing degree structures. Students take one focused AI course per semester alongside their traditional program, building applied skills rather than theoretical familiarity. Every student who completes the program has a documented portfolio of work — not a certificate.",
    bullets: [
      "Senior advisor with 10+ years in AI application and industry deployment",
      "Academic curriculum specialist adapts each level to your departmental context",
      "Practitioner delivery — applied AI on real problems, not case studies",
      "One AI course per semester integrated into existing program structures",
      "Faculty certified before the first student cohort begins",
      "Student progress tracked live on the Sophrosyne Platform — portfolios, faculty reviews, and accreditor evidence in one place",
    ],
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Diverse group of university students together outdoors on campus",
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
    mbb: { v: "A strategy deck", tone: "bad" },
    diy: { v: "Reports and benchmarks — no execution", tone: "neutral" },
  },
  {
    dimension: "Accreditation evidence",
    sophrosyne: { v: "Structured, documented, and board-ready on delivery", tone: "good" },
    mbb: { v: "Your team assembles it post-engagement", tone: "bad" },
    diy: { v: "Not typically provided", tone: "bad" },
  },
  {
    dimension: "Who does the work",
    sophrosyne: { v: "Senior experts + analysts embedded in your institution", tone: "good" },
    mbb: { v: "Junior consultants; senior partner on slide review", tone: "bad" },
    diy: { v: "Remote analysts on a shared queue", tone: "neutral" },
  },
  {
    dimension: "Total cost",
    sophrosyne: { v: "$45K – $450K fixed fee", tone: "good" },
    mbb: { v: "$500K – $3M+ minimum", tone: "bad" },
    diy: { v: "$85K – $150K/year subscription", tone: "neutral" },
  },
  {
    dimension: "Time to first deliverable",
    sophrosyne: { v: "Audit report in 4–6 weeks", tone: "good" },
    mbb: { v: "Strategy deck in 6–12 months", tone: "bad" },
    diy: { v: "Reports within weeks — no implementation", tone: "neutral" },
  },
  {
    dimension: "IP & data ownership",
    sophrosyne: { v: "100% yours on delivery", tone: "good" },
    mbb: { v: "Their licensed frameworks", tone: "bad" },
    diy: { v: "Subscription-gated access", tone: "bad" },
  },
  {
    dimension: "Built for higher-ed",
    sophrosyne: { v: "Exclusively", tone: "good" },
    mbb: { v: "Cross-industry practice", tone: "neutral" },
    diy: { v: "Higher-ed focused — advisory only", tone: "neutral" },
  },
  {
    dimension: "Grant-fundable",
    sophrosyne: { v: "Yes — language provided", tone: "good" },
    mbb: { v: "Rarely", tone: "bad" },
    diy: { v: "No", tone: "bad" },
  },
] as const;

export const FOUNDING_COHORT = {
  spots: 5,
  benefits: [
    { title: "Pricing locked below standard", body: "Founding rates locked in for the life of the partnership — well below what full engagements will cost at scale." },
    { title: "Co-author the reference case study", body: "We build the reference story together. You own how it's told — what is published, and when." },
    { title: "Advisory seat on the roadmap", body: "Shape the product roadmap and the consortium charter from the inside. Your institution's problems become the product's priorities." },
    { title: "First access to The AI Exchange Network", body: "Anonymized benchmarks, shared curriculum frameworks, cross-campus recruiting, and shared compute credits — founding institutions set the rules." },
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
  linkedin?: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Lauretta Conklin Frederking",
    title: "Founder & CEO · Pillar Lead",
    bio: "Former University President with experience in numerous leadership roles in the Office of the Provost across small, medium and large universities in Canada and the United States — knows the higher education landscape and the positive impact of transformational leadership. MBA, Ivey · PhD, Political Economy.",
    photo: "/team/lauretta.jpg",
    imgSize: "cover",
    imgPos: "center top",
    solutions: ["curriculum", "opex", "foundry"],
    linkedin: "https://www.linkedin.com/in/dr-lauretta-frederking-aa173426a/",
  },
  {
    name: "Melissa Jean",
    title: "COO & Operational Efficiency Lead",
    bio: "CPA/CMA and Associate Professor at Western's DAN Management with 20+ years in financial management and operations. Former Executive Director of Finance, Operations and Strategy, Brescia University College. HBA, MBA, CPA, CMA.",
    photo: "/team/melissa.jpg",
    imgSize: "cover",
    imgPos: "center top",
    solutions: ["opex"],
    linkedin: "https://www.linkedin.com/in/melissajeanmbacpa/",
  },
  {
    name: "Ankit Mishra",
    title: "Senior Advisor, AI Foundries",
    bio: "VC and startup operator, 13+ years; Forbes contributor, 50+ articles. MBA, Ivey; MSc, Sciences Po Paris; BSc Mathematics, York University.",
    photo: "/team/ankit.jpg",
    imgSize: "320%",
    imgPos: "45% 3%",
    solutions: ["curriculum", "foundry"],
    linkedin: "https://www.linkedin.com/in/ankitmishra3/",
  },
  {
    name: "Christine Billinger",
    title: "Head of Marketing",
    bio: "B2B SaaS marketing leader, 15+ years in demand generation and go-to-market strategy. Director of Marketing, Edgecom Energy; EIR, Morrissette Institute for Entrepreneurship. Executive MBA, Ivey; BA Hons., University of Victoria.",
    photo: "/team/christine.png",
    imgSize: "cover",
    imgPos: "center top",
    solutions: ["curriculum", "opex", "foundry"],
    linkedin: "https://www.linkedin.com/in/christine-billinger/",
  },
  // {
  //   name: "Amelia Frederking",
  //   title: "Research & Strategy Lead",
  //   bio: "PhD candidate in Political Science at MIT; former Operations Research Analyst with Army Futures Command. BA in Political Science and Mathematics.",
  //   photo: "/team/amelia.jpg",
  //   imgSize: "cover",
  //   imgPos: "center top",
  //   solutions: ["curriculum"],
  // },
  {
    name: "Nathanael Frederking",
    title: "Growth & Analytics",
    bio: "Institutional measurement, financial modelling, and Sophrosyne's expansion analytics.",
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
    dek: "Only 8 of 100 tracked U.S. universities have reached full AI integration. The rest are caught between a published policy and a working programme, and the gap is widening.",
    category: "Benchmark",
    readTime: "11 min read",
    status: "live" as const,
  },
  {
    slug: "enrollment-cliff-and-ai",
    title: "The Enrollment Cliff Meets the AI Mandate",
    dek: "WICHE projects a 13% decline in U.S. college-age students by 2037. The institutions using AI to compress per-student cost and differentiate on outcomes are the ones building a viable path through it.",
    category: "Strategy",
    readTime: "8 min read",
    status: "live" as const,
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
  heroImage?: { src: string; alt: string };
  sections: { heading: string; paragraphs: string[] }[];
  pullquote: string;
};

export const INSIGHT_ARTICLES: Record<string, InsightArticle> = {
  "state-of-ai-readiness-regional-universities": {
    title: "The State of AI Readiness in Regional Universities",
    dek: "Only 8 of 100 tracked U.S. universities have reached full AI integration. The rest are caught between a published policy and a working programme, and the gap is widening.",
    category: "Benchmark",
    readTime: "11 min read",
    heroImage: {
      src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&auto=format&fit=crop&q=80",
      alt: "Students researching in a university library",
    },
    pullquote:
      "Only 8% of tracked U.S. universities have reached full AI integration. The rest are caught between a published policy and a working programme, and the OECD data suggest the gap between those two positions is not closing on its own.",
    sections: [
      {
        heading: "The 8% problem",
        paragraphs: [
          "Only 8 of 100 tracked U.S. universities (8%) have reached Stage 5 AI maturity, the level at which artificial intelligence is embedded across research output, curriculum, operations, and institutional strategy simultaneously. The remaining 92% are distributed across three earlier stages (Chart 1), a pattern that mirrors the technology adoption gaps the [OECD documented in its 2023 Education at a Glance report](https://www.oecd-ilibrary.org/education/education-at-a-glance-2023_e13bef63-en), which documented persistent gaps in what it terms 'systematic digital integration' across higher education institutions in member countries.",
          "However, the aggregate figure obscures a structural bifurcation that is more consequential than the headline suggests. Stage 4 and 5 institutions (the 27 universities that have moved beyond policy into active integration) share three characteristics absent from the Stage 2 cohort: 100% curriculum initiative adoption, federal AI research funding documented in [NSF award databases](https://www.nsf.gov/awardsearch/simpleSearchResult?queryText=artificial+intelligence&ActiveAwards=true), and A-range financial grades in 25 of 27 cases. The Stage 2 cohort, by contrast, has 30% curriculum adoption and no institutions carrying A-range grades, a profile that [NACUBO's endowment research](https://www.nacubo.org/Research/2025/NACUBO-Commonfund-Study-of-Endowments) consistently associates with high tuition dependency and constrained discretionary capital relative to A-grade peers.",
        ],
      },
      {
        heading: "What the curriculum data reveal",
        paragraphs: [
          "The sharpest predictor of AI maturity in the Sophrosyne index is not financial grade or institutional type. It is curriculum integration. Among Stage 3 institutions, 79% have launched a formal AI curriculum initiative (Chart 2); among Stage 2 institutions, that figure falls to 30%. The gap is not explained by size or selectivity: Portland State University (Stage 3, enrollment 30,000+, financial grade C+) and George Washington University (Stage 3, B+) both have active curriculum initiatives, while several comparably resourced B-grade institutions at Stage 2 do not.",
          "However, curriculum initiative alone does not explain trajectory. Among Stage 3 institutions with active curriculum programmes, fewer than a third have co-located compute infrastructure (the shared HPC or cloud allocation that makes AI coursework at scale viable). The [OECD's 2024 Education Policy Outlook](https://www.oecd-ilibrary.org/education/education-policy-outlook-2024_dd5140e4-en) identifies this infrastructure gap as the primary bottleneck separating institutions that announce AI programmes from those that sustain them beyond the first budget cycle.",
        ],
      },
      {
        heading: "The financial constraint hiding in plain sight",
        paragraphs: [
          "The index reveals a second structural constraint that policy discussions routinely understate: financial grade. Of the 8 Stage 5 institutions, 7 carry A-range grades. Of the 35 Stage 2 institutions, none carry A-range grades and 28 carry B- or below, a cohort that [NACUBO's endowment research](https://www.nacubo.org/Research/2025/NACUBO-Commonfund-Study-of-Endowments) consistently characterises as tuition-dependent with materially constrained discretionary capital. The [EDUCAUSE 2024 Horizon Report](https://library.educause.edu/resources/2024/5/2024-educause-horizon-report-teaching-and-learning-edition) identifies financial capacity as one of the primary drivers of the gap between institutions that sustain AI programmes beyond the pilot phase and those that stall (Chart 3).",
          "However, financial grade is not destiny. Arizona State University (Stage 5, financial grade B) demonstrates that sequencing discipline and federal grant leverage can partially substitute for endowment depth. ASU's AI Institute, which achieved Stage 5 designation, was financed primarily through a $20 million [NSF AI Institute grant](https://www.nsf.gov/awardsearch/simpleSearchResult?queryText=artificial+intelligence&ActiveAwards=true) and corporate co-investment, not operating surplus. The lesson is not that financial health is irrelevant, but that its constraining effect is contingent on how institutions sequence their external funding strategy.",
        ],
      },
      {
        heading: "The prescription",
        paragraphs: [
          "The [OECD's 2023 Digital Education Outlook](https://www.oecd-ilibrary.org/education/oecd-digital-education-outlook-2023_c74f03de-en) identifies three conditions necessary for sustainable AI programme development in higher education: a governance framework (policy), an infrastructure baseline (compute access), and an outcome measurement system (curriculum data tied to labour market placement). The institutions in the Sophrosyne index that reached Stage 4 or 5 met all three before scaling; those stalled at Stage 2 typically have the first but not the second or third.",
          "Unless regional institutions address the infrastructure and measurement deficits (not merely the policy gap), the bifurcation visible in Chart 1 will deepen through 2028. The NSF's Convergence Accelerator programme and the Department of Education's Title III fund both provide grant mechanisms specifically designed to close the infrastructure bottleneck at institutions without A-grade endowments. Based on current application timelines and Congressional appropriations schedules, the window to access both before competitive pressure intensifies is approximately 18 months.",
        ],
      },
    ],
  },
  "enrollment-cliff-and-ai": {
    title: "The Enrollment Cliff Meets the AI Mandate",
    dek: "WICHE projects a 13% decline in U.S. college-age students by 2037. The institutions using AI to compress per-student cost and differentiate on outcomes are the ones building a viable path through it.",
    category: "Strategy",
    readTime: "8 min read",
    heroImage: {
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&auto=format&fit=crop&q=80",
      alt: "University campus building, enrollment trends and the demographic cliff",
    },
    pullquote:
      "WICHE projects a 13% decline in U.S. high school graduates by 2041, a demographic contraction with no precedent in the post-war era. The institutions using AI to compress per-student cost and differentiate on outcomes are the ones with a viable path through it, but the grant window that makes the investment financeable is shorter than most planning cycles assume.",
    sections: [
      {
        heading: "Two clocks, one institution",
        paragraphs: [
          "The U.S. 18-year-old population will decline by approximately 13% between 2025 and 2041, according to [WICHE's 2024 'Knocking at the College Door' 11th edition](https://www.wiche.edu/resources/knocking-at-the-college-door-11th-edition/), the most widely cited demographic forecast in U.S. higher education planning. WICHE projects the number of high school graduates declining from approximately 3.9 million at the 2025 peak to roughly 3.4 million by 2041, a contraction concentrated in the Northeast and Midwest where population decline is already underway. The [NCES 2024 Condition of Education report](https://nces.ed.gov/use-work/resource-library/report/compendium/condition-education-2024) documents enrolment trends and institutional financial profiles across institution type and size.",
          "However, the enrollment cliff is colliding with a concurrent labour market signal that reshapes the strategic calculus. [Lightcast's 2024 'Beyond The Buzz' analysis](https://lightcast.io/resources/research/beyond-the-buzz-developing-the-ai-skills-employers-actually-need) documents U.S. job postings for generative AI roles growing from approximately 16,000 in 2023 to 66,000 in 2024 (a near four-fold increase in a single year), with AI competency appearing in a rapidly expanding share of entry-level white-collar postings. Institutions that can translate this labour market signal into a verified curriculum narrative have a differentiable enrollment answer that institutions without one cannot offer.",
        ],
      },
      {
        heading: "Why treating them as separate problems is a mistake",
        paragraphs: [
          "Separating a retention and recruitment task force from a faculty AI committee fragments the resources available to address what is structurally a single problem. The [EDUCAUSE 2024 Horizon Report](https://library.educause.edu/resources/2024/5/2024-educause-horizon-report-teaching-and-learning-edition) identifies AI governance coordination (specifically the challenge of aligning AI infrastructure investment with academic programme priorities) as one of the defining pressures on higher education technology leadership. The [OECD's 2024 Education Policy Outlook](https://www.oecd-ilibrary.org/education/education-policy-outlook-2024_dd5140e4-en) identifies the same pattern across member countries: technology initiatives not integrated into the institutional value proposition within 24 months of launch rarely survive the next budget cycle.",
          "However, the integrated approach generates compounding returns that the siloed model cannot. Among the 27 Stage 4 and Stage 5 institutions in the Sophrosyne index, all have formal AI curriculum initiatives running alongside documented operational efficiency programmes, and 25 of 27 carry A-range financial grades. The [NACUBO Commonfund Study of Endowments](https://www.nacubo.org/Research/2025/NACUBO-Commonfund-Study-of-Endowments) provides the benchmark for what those financial grades reflect: endowment depth and operating surplus margins that make multi-year programme commitments viable without tuition increases. The [NCES 2024 Condition of Education report](https://nces.ed.gov/use-work/resource-library/report/compendium/condition-education-2024) documents the tuition sensitivity that makes that operating flexibility competitively decisive.",
        ],
      },
      {
        heading: "The sequencing that works",
        paragraphs: [
          "The Sophrosyne US AI Readiness Index reveals the institutional pattern that correlates with successful integration. Among the 27 universities at Stage 4 or 5 maturity (those that have moved beyond policy into active deployment), 100% have formal AI curriculum initiatives and 25 of 27 carry A-range financial grades. The sequence they followed, based on publicly documented programme rollouts at institutions including Arizona State University, Johns Hopkins, and UC Berkeley, begins not with procurement but with a cross-functional diagnostic: a structured assessment that quantifies operating savings before committing budget, providing the board with a financial case before the governance committee finalises programme scope.",
          "However, integration is not the same as simultaneous deployment. The Stage 4 and 5 institutions in the Sophrosyne index that most clearly compressed their time to measurable outcomes share a documented pattern: they ran curriculum design, infrastructure procurement, and external grant applications on overlapping timelines rather than sequentially. The practical effect is a materially shorter runway to the kind of student outcomes data that differentiates an institution to prospective students, a gap that is decisive in an enrollment market where applicants are making commitments on two-year horizons.",
        ],
      },
      {
        heading: "What the window looks like",
        paragraphs: [
          "The 2025–2027 window carries an unusually favourable policy environment for institutions prepared to move. The NSF's Convergence Accelerator, the Department of Education's Title III Strengthening Institutions programme, and a growing number of state-level workforce AI funds are all capitalised and actively seeking institutional partners, particularly those outside the R1 research tier that have historically been under-represented in federal AI investment. Institutions that have competed successfully for these funds share a common characteristic: they entered the application process with a cross-functional diagnostic document connecting AI investment to operating savings, accreditation outcomes, and labour market placement data simultaneously.",
          "Unless regional institutions build that integrated case before the 2027 grant cycle closes, they will compete for the next round (if one is appropriated) from a position of demonstrated under-preparedness. The [WICHE](https://www.wiche.edu/resources/knocking-at-the-college-door-11th-edition/) demographic curve does not pause for committee deliberation. The institutions treating AI readiness and enrollment strategy as one problem, not two, are building the operating flexibility and curriculum differentiation that will determine which campuses are still enrolling students when the demographic trough reaches its floor around 2031.",
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

// ─── AI Readiness Index ───────────────────────────────────────────────────────

export type Region = "Northeast" | "Southeast" | "Midwest" | "Southwest" | "West" | "Canada";

export type FinancialGrade = "A+" | "A" | "A-" | "B+" | "B" | "B-" | "C+" | "C" | "C-" | "D" | "F";

export type InstitutionEntry = {
  slug: string;
  name: string;
  type: "R1 Research" | "R2 Research" | "Liberal Arts" | "Regional" | "Community College";
  region: Region;
  state: string;
  country: "US" | "CA";
  enrollment: "<5k" | "5k–15k" | "15k–30k" | "30k+";
  maturityStage: 1 | 2 | 3 | 4 | 5;
  aiPolicyPublished: boolean;
  aiCurriculumInitiative: boolean;
  financialGrade: FinancialGrade; // NACUBO endowment data 2025 + Forbes College Financial Grades methodology
  officialDomain: string;
  aiPolicyUrl?: string;
  lastUpdated: string;
};

// Data current as of Q2 2026. Maturity assessed from publicly available signals:
// institutional websites, press releases, job postings, and accreditor filings.
export const INSTITUTION_INDEX: InstitutionEntry[] = [

  // ── Stage 5 · Reshape ─────────────────────────────────────────────────────
  { slug: "mit",              name: "Massachusetts Institute of Technology",    region: "Northeast", type: "R1 Research",  state: "MA", country: "US", enrollment: "5k–15k",  maturityStage: 5, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A", officialDomain: "mit.edu", aiPolicyUrl: "https://mit-genai.pubpub.org/", lastUpdated: "Q2 2026" },
  { slug: "stanford",         name: "Stanford University",                      region: "West",      type: "R1 Research",  state: "CA", country: "US", enrollment: "5k–15k",  maturityStage: 5, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A+", officialDomain: "stanford.edu", aiPolicyUrl: "https://aiguide.stanford.edu/", lastUpdated: "Q2 2026" },
  { slug: "carnegie-mellon",  name: "Carnegie Mellon University",               region: "Northeast", type: "R1 Research",  state: "PA", country: "US", enrollment: "5k–15k",  maturityStage: 5, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A-", officialDomain: "cmu.edu", aiPolicyUrl: "https://www.cmu.edu/provost/responsible-use-ai.html", lastUpdated: "Q2 2026" },
  { slug: "georgia-tech",     name: "Georgia Institute of Technology",          region: "Southeast", type: "R1 Research",  state: "GA", country: "US", enrollment: "30k+",    maturityStage: 5, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A-", officialDomain: "gatech.edu", aiPolicyUrl: "https://ai.gatech.edu/", lastUpdated: "Q2 2026" },
  { slug: "uc-berkeley",      name: "University of California, Berkeley",       region: "West",      type: "R1 Research",  state: "CA", country: "US", enrollment: "30k+",    maturityStage: 5, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A-", officialDomain: "berkeley.edu", aiPolicyUrl: "https://teaching.berkeley.edu/resources/ai", lastUpdated: "Q2 2026" },
  { slug: "u-washington",     name: "University of Washington",                 region: "West",      type: "R1 Research",  state: "WA", country: "US", enrollment: "30k+",    maturityStage: 5, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A-", officialDomain: "uw.edu", aiPolicyUrl: "https://www.washington.edu/teaching/topics/ai/", lastUpdated: "Q2 2026" },
  { slug: "uiuc",             name: "University of Illinois Urbana-Champaign",  region: "Midwest",   type: "R1 Research",  state: "IL", country: "US", enrollment: "30k+",    maturityStage: 5, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A-", officialDomain: "illinois.edu", aiPolicyUrl: "https://ai.illinois.edu/", lastUpdated: "Q2 2026" },
  { slug: "arizona-state",    name: "Arizona State University",                 region: "Southwest", type: "R1 Research",  state: "AZ", country: "US", enrollment: "30k+",    maturityStage: 5, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "B", officialDomain: "asu.edu", aiPolicyUrl: "https://ai.asu.edu/", lastUpdated: "Q2 2026" },

  // ── Stage 4 · Integrate ───────────────────────────────────────────────────
  { slug: "cornell",          name: "Cornell University",                       region: "Northeast", type: "R1 Research",  state: "NY", country: "US", enrollment: "15k–30k", maturityStage: 4, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A", officialDomain: "cornell.edu", aiPolicyUrl: "https://teaching.cornell.edu/generative-artificial-intelligence", lastUpdated: "Q2 2026" },
  { slug: "harvard",          name: "Harvard University",                       region: "Northeast", type: "R1 Research",  state: "MA", country: "US", enrollment: "15k–30k", maturityStage: 4, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A+", officialDomain: "harvard.edu", aiPolicyUrl: "https://provost.harvard.edu/guidelines-using-chatgpt-and-other-generative-ai-tools", lastUpdated: "Q2 2026" },
  { slug: "u-michigan",       name: "University of Michigan",                   region: "Midwest",   type: "R1 Research",  state: "MI", country: "US", enrollment: "30k+",    maturityStage: 4, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A+", officialDomain: "umich.edu", aiPolicyUrl: "https://ai.umich.edu/", lastUpdated: "Q2 2026" },
  { slug: "princeton",        name: "Princeton University",                     region: "Northeast", type: "R1 Research",  state: "NJ", country: "US", enrollment: "5k–15k",  maturityStage: 4, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A+", officialDomain: "princeton.edu", aiPolicyUrl: "https://ai.princeton.edu/", lastUpdated: "Q2 2026" },
  { slug: "yale",             name: "Yale University",                          region: "Northeast", type: "R1 Research",  state: "CT", country: "US", enrollment: "5k–15k",  maturityStage: 4, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A+", officialDomain: "yale.edu", aiPolicyUrl: "https://poorvucenter.yale.edu/ai", lastUpdated: "Q2 2026" },
  { slug: "columbia",         name: "Columbia University",                      region: "Northeast", type: "R1 Research",  state: "NY", country: "US", enrollment: "15k–30k", maturityStage: 4, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A", officialDomain: "columbia.edu", aiPolicyUrl: "https://provost.columbia.edu/content/guidelines-ai", lastUpdated: "Q2 2026" },
  { slug: "ucla",             name: "University of California, Los Angeles",    region: "West",      type: "R1 Research",  state: "CA", country: "US", enrollment: "30k+",    maturityStage: 4, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A-", officialDomain: "ucla.edu", lastUpdated: "Q2 2026" },
  { slug: "purdue",           name: "Purdue University",                        region: "Midwest",   type: "R1 Research",  state: "IN", country: "US", enrollment: "30k+",    maturityStage: 4, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A-", officialDomain: "purdue.edu", aiPolicyUrl: "https://www.purdue.edu/ai/", lastUpdated: "Q2 2026" },
  { slug: "ut-austin",        name: "University of Texas at Austin",            region: "Southwest", type: "R1 Research",  state: "TX", country: "US", enrollment: "30k+",    maturityStage: 4, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A", officialDomain: "utexas.edu", aiPolicyUrl: "https://ai.utexas.edu/", lastUpdated: "Q2 2026" },
  { slug: "johns-hopkins",    name: "Johns Hopkins University",                 region: "Northeast", type: "R1 Research",  state: "MD", country: "US", enrollment: "5k–15k",  maturityStage: 4, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A", officialDomain: "jhu.edu", aiPolicyUrl: "https://ai.jhu.edu/", lastUpdated: "Q2 2026" },
  { slug: "duke",             name: "Duke University",                          region: "Southeast", type: "R1 Research",  state: "NC", country: "US", enrollment: "5k–15k",  maturityStage: 4, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A", officialDomain: "duke.edu", aiPolicyUrl: "https://learninginnovation.duke.edu/ai-and-teaching-at-duke/", lastUpdated: "Q2 2026" },
  { slug: "northwestern",     name: "Northwestern University",                  region: "Midwest",   type: "R1 Research",  state: "IL", country: "US", enrollment: "5k–15k",  maturityStage: 4, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A", officialDomain: "northwestern.edu", aiPolicyUrl: "https://ai.northwestern.edu/", lastUpdated: "Q2 2026" },
  { slug: "nyu",              name: "New York University",                      region: "Northeast", type: "R1 Research",  state: "NY", country: "US", enrollment: "30k+",    maturityStage: 4, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A", officialDomain: "nyu.edu", aiPolicyUrl: "https://www.nyu.edu/faculty/teaching-and-learning-resources/artificial-intelligence-teaching.html", lastUpdated: "Q2 2026" },
  { slug: "ohio-state",       name: "Ohio State University",                    region: "Midwest",   type: "R1 Research",  state: "OH", country: "US", enrollment: "30k+",    maturityStage: 4, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A", officialDomain: "osu.edu", aiPolicyUrl: "https://ai.osu.edu/", lastUpdated: "Q2 2026" },
  { slug: "u-maryland",       name: "University of Maryland",                   region: "Northeast", type: "R1 Research",  state: "MD", country: "US", enrollment: "30k+",    maturityStage: 4, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "B+", officialDomain: "umd.edu", aiPolicyUrl: "https://ai.umd.edu/", lastUpdated: "Q2 2026" },
  { slug: "penn-state",       name: "Penn State University",                    region: "Northeast", type: "R1 Research",  state: "PA", country: "US", enrollment: "30k+",    maturityStage: 4, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A-", officialDomain: "psu.edu", aiPolicyUrl: "https://www.psu.edu/generative-ai/", lastUpdated: "Q2 2026" },
  { slug: "texas-am",         name: "Texas A&M University",                     region: "Southwest", type: "R1 Research",  state: "TX", country: "US", enrollment: "30k+",    maturityStage: 4, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A+", officialDomain: "tamu.edu", lastUpdated: "Q2 2026" },
  { slug: "u-wisconsin",      name: "University of Wisconsin-Madison",          region: "Midwest",   type: "R1 Research",  state: "WI", country: "US", enrollment: "30k+",    maturityStage: 4, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A-", officialDomain: "wisc.edu", aiPolicyUrl: "https://uwmadison.edu/generativeai", lastUpdated: "Q2 2026" },
  { slug: "upenn",            name: "University of Pennsylvania",               region: "Northeast", type: "R1 Research",  state: "PA", country: "US", enrollment: "15k–30k", maturityStage: 4, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A+", officialDomain: "upenn.edu", aiPolicyUrl: "https://ai.upenn.edu/", lastUpdated: "Q2 2026" },

  // ── Stage 3 · Automate ────────────────────────────────────────────────────
  { slug: "northeastern",     name: "Northeastern University",                  region: "Northeast", type: "R1 Research",  state: "MA", country: "US", enrollment: "15k–30k", maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "B", officialDomain: "northeastern.edu", aiPolicyUrl: "https://ai.northeastern.edu/", lastUpdated: "Q2 2026" },
  { slug: "boston-u",         name: "Boston University",                        region: "Northeast", type: "R1 Research",  state: "MA", country: "US", enrollment: "30k+",    maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A-", officialDomain: "bu.edu", aiPolicyUrl: "https://www.bu.edu/academic-affairs/ai/", lastUpdated: "Q2 2026" },
  { slug: "vanderbilt",       name: "Vanderbilt University",                    region: "Southeast", type: "R1 Research",  state: "TN", country: "US", enrollment: "5k–15k",  maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A", officialDomain: "vanderbilt.edu", aiPolicyUrl: "https://www.vanderbilt.edu/ai/", lastUpdated: "Q2 2026" },
  { slug: "uc-san-diego",     name: "University of California, San Diego",      region: "West",      type: "R1 Research",  state: "CA", country: "US", enrollment: "30k+",    maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A-", officialDomain: "ucsd.edu", lastUpdated: "Q2 2026" },
  { slug: "uc-davis",         name: "University of California, Davis",          region: "West",      type: "R1 Research",  state: "CA", country: "US", enrollment: "30k+",    maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A-", officialDomain: "ucdavis.edu", lastUpdated: "Q2 2026" },
  { slug: "usc",              name: "University of Southern California",        region: "West",      type: "R1 Research",  state: "CA", country: "US", enrollment: "30k+",    maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A", officialDomain: "usc.edu", lastUpdated: "Q2 2026" },
  { slug: "virginia-tech",    name: "Virginia Tech",                            region: "Southeast", type: "R1 Research",  state: "VA", country: "US", enrollment: "30k+",    maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "B", officialDomain: "vt.edu", lastUpdated: "Q2 2026" },
  { slug: "nc-state",         name: "North Carolina State University",          region: "Southeast", type: "R1 Research",  state: "NC", country: "US", enrollment: "30k+",    maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "B", officialDomain: "ncsu.edu", aiPolicyUrl: "https://teaching-and-learning.ncsu.edu/resources/ai/", lastUpdated: "Q2 2026" },
  { slug: "indiana-u",        name: "Indiana University Bloomington",           region: "Midwest",   type: "R1 Research",  state: "IN", country: "US", enrollment: "30k+",    maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A-", officialDomain: "indiana.edu", lastUpdated: "Q2 2026" },
  { slug: "rutgers",          name: "Rutgers University",                       region: "Northeast", type: "R1 Research",  state: "NJ", country: "US", enrollment: "30k+",    maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "B", officialDomain: "rutgers.edu", lastUpdated: "Q2 2026" },
  { slug: "u-florida",        name: "University of Florida",                    region: "Southeast", type: "R1 Research",  state: "FL", country: "US", enrollment: "30k+",    maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "B+", officialDomain: "ufl.edu", aiPolicyUrl: "https://faculty.ufl.edu/resource/ai-resources/", lastUpdated: "Q2 2026" },
  { slug: "drexel",           name: "Drexel University",                        region: "Northeast", type: "R2 Research",  state: "PA", country: "US", enrollment: "15k–30k", maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "B-", officialDomain: "drexel.edu", aiPolicyUrl: "https://drexel.edu/provost/teaching-and-learning/ai/", lastUpdated: "Q2 2026" },
  { slug: "wpi",              name: "Worcester Polytechnic Institute",          region: "Northeast", type: "R2 Research",  state: "MA", country: "US", enrollment: "5k–15k",  maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "B-", officialDomain: "wpi.edu", lastUpdated: "Q2 2026" },
  { slug: "georgetown",       name: "Georgetown University",                    region: "Northeast", type: "R2 Research",  state: "DC", country: "US", enrollment: "15k–30k", maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A-", officialDomain: "georgetown.edu", aiPolicyUrl: "https://cndls.georgetown.edu/ai/", lastUpdated: "Q2 2026" },
  { slug: "gwu",              name: "George Washington University",             region: "Northeast", type: "R2 Research",  state: "DC", country: "US", enrollment: "15k–30k", maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "B+", officialDomain: "gwu.edu", lastUpdated: "Q2 2026" },
  { slug: "cu-boulder",       name: "University of Colorado Boulder",           region: "Southwest", type: "R1 Research",  state: "CO", country: "US", enrollment: "30k+",    maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "B-", officialDomain: "colorado.edu", lastUpdated: "Q2 2026" },
  { slug: "u-minnesota",      name: "University of Minnesota",                  region: "Midwest",   type: "R1 Research",  state: "MN", country: "US", enrollment: "30k+",    maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A", officialDomain: "umn.edu", aiPolicyUrl: "https://ai.umn.edu/", lastUpdated: "Q2 2026" },
  { slug: "u-pittsburgh",     name: "University of Pittsburgh",                 region: "Northeast", type: "R1 Research",  state: "PA", country: "US", enrollment: "30k+",    maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A", officialDomain: "pitt.edu", aiPolicyUrl: "https://teaching.pitt.edu/ai/", lastUpdated: "Q2 2026" },
  { slug: "rit",              name: "Rochester Institute of Technology",        region: "Northeast", type: "R2 Research",  state: "NY", country: "US", enrollment: "15k–30k", maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "B-", officialDomain: "rit.edu", lastUpdated: "Q2 2026" },
  { slug: "portland-state",   name: "Portland State University",                region: "West",      type: "R2 Research",  state: "OR", country: "US", enrollment: "15k–30k", maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "C+", officialDomain: "pdx.edu", lastUpdated: "Q2 2026" },
  { slug: "u-virginia",       name: "University of Virginia",                   region: "Southeast", type: "R1 Research",  state: "VA", country: "US", enrollment: "15k–30k", maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A", officialDomain: "virginia.edu", aiPolicyUrl: "https://dsi.virginia.edu/", lastUpdated: "Q2 2026" },
  { slug: "wake-forest",      name: "Wake Forest University",                   region: "Southeast", type: "R2 Research",  state: "NC", country: "US", enrollment: "5k–15k",  maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "B+", officialDomain: "wfu.edu", lastUpdated: "Q2 2026" },
  { slug: "tulane",           name: "Tulane University",                        region: "Southeast", type: "R1 Research",  state: "LA", country: "US", enrollment: "5k–15k",  maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "B+", officialDomain: "tulane.edu", lastUpdated: "Q2 2026" },
  { slug: "american-u",       name: "American University",                      region: "Northeast", type: "R2 Research",  state: "DC", country: "US", enrollment: "5k–15k",  maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "B-", officialDomain: "american.edu", lastUpdated: "Q2 2026" },
  { slug: "u-arizona",        name: "University of Arizona",                    region: "Southwest", type: "R1 Research",  state: "AZ", country: "US", enrollment: "30k+",    maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "B-", officialDomain: "arizona.edu", aiPolicyUrl: "https://academicintegrity.arizona.edu/ai-academic-integrity", lastUpdated: "Q2 2026" },
  { slug: "colorado-state",   name: "Colorado State University",                region: "Southwest", type: "R1 Research",  state: "CO", country: "US", enrollment: "30k+",    maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "B-", officialDomain: "colostate.edu", lastUpdated: "Q2 2026" },
  { slug: "iowa-state",       name: "Iowa State University",                    region: "Midwest",   type: "R1 Research",  state: "IA", country: "US", enrollment: "30k+",    maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "B-", officialDomain: "iastate.edu", aiPolicyUrl: "https://www.provost.iastate.edu/faculty-success/teaching/generative-ai-resources/", lastUpdated: "Q2 2026" },
  { slug: "u-oregon",         name: "University of Oregon",                     region: "West",      type: "R1 Research",  state: "OR", country: "US", enrollment: "15k–30k", maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "B-", officialDomain: "uoregon.edu", lastUpdated: "Q2 2026" },
  { slug: "u-utah",           name: "University of Utah",                       region: "Southwest", type: "R1 Research",  state: "UT", country: "US", enrollment: "30k+",    maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "B-", officialDomain: "utah.edu", aiPolicyUrl: "https://teaching.utah.edu/resources/ai/", lastUpdated: "Q2 2026" },
  { slug: "florida-state",    name: "Florida State University",                 region: "Southeast", type: "R1 Research",  state: "FL", country: "US", enrollment: "30k+",    maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "B-", officialDomain: "fsu.edu", lastUpdated: "Q2 2026" },
  { slug: "auburn",           name: "Auburn University",                        region: "Southeast", type: "R1 Research",  state: "AL", country: "US", enrollment: "30k+",    maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "B-", officialDomain: "auburn.edu", lastUpdated: "Q2 2026" },
  { slug: "brown",            name: "Brown University",                         region: "Northeast", type: "R1 Research",  state: "RI", country: "US", enrollment: "5k–15k",  maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A", officialDomain: "brown.edu", aiPolicyUrl: "https://it.brown.edu/ai", lastUpdated: "Q2 2026" },
  { slug: "dartmouth",        name: "Dartmouth College",                        region: "Northeast", type: "R1 Research",  state: "NH", country: "US", enrollment: "<5k",     maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A", officialDomain: "dartmouth.edu", aiPolicyUrl: "https://ai.dartmouth.edu/", lastUpdated: "Q2 2026" },
  { slug: "tufts",            name: "Tufts University",                         region: "Northeast", type: "R1 Research",  state: "MA", country: "US", enrollment: "5k–15k",  maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "B+", officialDomain: "tufts.edu", lastUpdated: "Q2 2026" },
  { slug: "rice",             name: "Rice University",                          region: "Southwest", type: "R1 Research",  state: "TX", country: "US", enrollment: "<5k",     maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A", officialDomain: "rice.edu", aiPolicyUrl: "https://ai.rice.edu/", lastUpdated: "Q2 2026" },
  { slug: "notre-dame",       name: "University of Notre Dame",                 region: "Midwest",   type: "R1 Research",  state: "IN", country: "US", enrollment: "5k–15k",  maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A+", officialDomain: "nd.edu", aiPolicyUrl: "https://ai.nd.edu/", lastUpdated: "Q2 2026" },
  { slug: "washu",            name: "Washington University in St. Louis",       region: "Midwest",   type: "R1 Research",  state: "MO", country: "US", enrollment: "5k–15k",  maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A", officialDomain: "wustl.edu", aiPolicyUrl: "https://ctl.wustl.edu/ai/", lastUpdated: "Q2 2026" },
  { slug: "emory",            name: "Emory University",                         region: "Southeast", type: "R1 Research",  state: "GA", country: "US", enrollment: "5k–15k",  maturityStage: 3, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "A", officialDomain: "emory.edu", aiPolicyUrl: "https://ctl.emory.edu/resources/ai.html", lastUpdated: "Q2 2026" },

  // ── Stage 2 · Deploy ──────────────────────────────────────────────────────
  { slug: "elon",             name: "Elon University",                          region: "Southeast", type: "Liberal Arts", state: "NC", country: "US", enrollment: "5k–15k",  maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "C+", officialDomain: "elon.edu", lastUpdated: "Q2 2026" },
  { slug: "rollins",          name: "Rollins College",                          region: "Southeast", type: "Liberal Arts", state: "FL", country: "US", enrollment: "<5k",     maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "C+", officialDomain: "rollins.edu", lastUpdated: "Q2 2026" },
  { slug: "utsa",             name: "University of Texas at San Antonio",       region: "Southwest", type: "R2 Research",  state: "TX", country: "US", enrollment: "30k+",    maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "C+", officialDomain: "utsa.edu", lastUpdated: "Q2 2026" },
  { slug: "u-new-mexico",     name: "University of New Mexico",                 region: "Southwest", type: "R2 Research",  state: "NM", country: "US", enrollment: "15k–30k", maturityStage: 2, aiPolicyPublished: false, aiCurriculumInitiative: true,  financialGrade: "C+", officialDomain: "unm.edu", lastUpdated: "Q2 2026" },
  { slug: "u-denver",         name: "University of Denver",                     region: "Southwest", type: "R2 Research",  state: "CO", country: "US", enrollment: "5k–15k",  maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "B-", officialDomain: "du.edu", lastUpdated: "Q2 2026" },
  { slug: "baylor",           name: "Baylor University",                        region: "Southwest", type: "R2 Research",  state: "TX", country: "US", enrollment: "15k–30k", maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "B+", officialDomain: "baylor.edu", lastUpdated: "Q2 2026" },
  { slug: "u-nebraska",       name: "University of Nebraska-Lincoln",           region: "Midwest",   type: "R1 Research",  state: "NE", country: "US", enrollment: "15k–30k", maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "B+", officialDomain: "unl.edu", lastUpdated: "Q2 2026" },
  { slug: "lsu",              name: "Louisiana State University",               region: "Southeast", type: "R1 Research",  state: "LA", country: "US", enrollment: "30k+",    maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "B-", officialDomain: "lsu.edu", lastUpdated: "Q2 2026" },
  { slug: "u-tennessee",      name: "University of Tennessee",                  region: "Southeast", type: "R1 Research",  state: "TN", country: "US", enrollment: "30k+",    maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "B-", officialDomain: "utk.edu", aiPolicyUrl: "https://teaching.utk.edu/ai/", lastUpdated: "Q2 2026" },
  { slug: "u-south-carolina", name: "University of South Carolina",             region: "Southeast", type: "R1 Research",  state: "SC", country: "US", enrollment: "30k+",    maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "B-", officialDomain: "sc.edu", aiPolicyUrl: "https://www.sc.edu/about/offices_and_divisions/provost/faculty_resources/generative-ai.php", lastUpdated: "Q2 2026" },
  { slug: "clemson",          name: "Clemson University",                       region: "Southeast", type: "R1 Research",  state: "SC", country: "US", enrollment: "15k–30k", maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "B-", officialDomain: "clemson.edu", lastUpdated: "Q2 2026" },
  { slug: "vcu",              name: "Virginia Commonwealth University",         region: "Southeast", type: "R2 Research",  state: "VA", country: "US", enrollment: "30k+",    maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "B-", officialDomain: "vcu.edu", aiPolicyUrl: "https://teaching.vcu.edu/ai/", lastUpdated: "Q2 2026" },
  { slug: "wssu",             name: "Winston-Salem State University",           region: "Southeast", type: "R2 Research",  state: "NC", country: "US", enrollment: "5k–15k",  maturityStage: 2, aiPolicyPublished: false, aiCurriculumInitiative: true,  financialGrade: "C", officialDomain: "wssu.edu", lastUpdated: "Q2 2026" },
  { slug: "delaware-state",   name: "Delaware State University",                region: "Northeast", type: "R2 Research",  state: "DE", country: "US", enrollment: "5k–15k",  maturityStage: 2, aiPolicyPublished: false, aiCurriculumInitiative: true,  financialGrade: "C", officialDomain: "desu.edu", lastUpdated: "Q2 2026" },
  { slug: "howard",           name: "Howard University",                        region: "Northeast", type: "R2 Research",  state: "DC", country: "US", enrollment: "5k–15k",  maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "B-", officialDomain: "howard.edu", lastUpdated: "Q2 2026" },
  { slug: "spelman",          name: "Spelman College",                          region: "Southeast", type: "Liberal Arts", state: "GA", country: "US", enrollment: "<5k",     maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "C+", officialDomain: "spelman.edu", lastUpdated: "Q2 2026" },
  { slug: "kenyon",           name: "Kenyon College",                           region: "Midwest",   type: "Liberal Arts", state: "OH", country: "US", enrollment: "<5k",     maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "B", officialDomain: "kenyon.edu", lastUpdated: "Q2 2026" },
  { slug: "drake",            name: "Drake University",                         region: "Midwest",   type: "Regional",     state: "IA", country: "US", enrollment: "5k–15k",  maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "C+", officialDomain: "drake.edu", lastUpdated: "Q2 2026" },
  { slug: "gonzaga",          name: "Gonzaga University",                       region: "West",      type: "Regional",     state: "WA", country: "US", enrollment: "5k–15k",  maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "C+", officialDomain: "gonzaga.edu", lastUpdated: "Q2 2026" },
  { slug: "pacific-lutheran", name: "Pacific Lutheran University",              region: "West",      type: "Liberal Arts", state: "WA", country: "US", enrollment: "<5k",     maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "C", officialDomain: "plu.edu", lastUpdated: "Q2 2026" },
  { slug: "rider",            name: "Rider University",                         region: "Northeast", type: "Regional",     state: "NJ", country: "US", enrollment: "5k–15k",  maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "C", officialDomain: "rider.edu", lastUpdated: "Q2 2026" },
  { slug: "eastern-michigan", name: "Eastern Michigan University",              region: "Midwest",   type: "Regional",     state: "MI", country: "US", enrollment: "15k–30k", maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "C", officialDomain: "emich.edu", lastUpdated: "Q2 2026" },
  { slug: "calvin",           name: "Calvin University",                        region: "Midwest",   type: "Liberal Arts", state: "MI", country: "US", enrollment: "<5k",     maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "C", officialDomain: "calvin.edu", lastUpdated: "Q2 2026" },
  { slug: "hope",             name: "Hope College",                             region: "Midwest",   type: "Liberal Arts", state: "MI", country: "US", enrollment: "<5k",     maturityStage: 2, aiPolicyPublished: false, aiCurriculumInitiative: true,  financialGrade: "C", officialDomain: "hope.edu", lastUpdated: "Q2 2026" },
  { slug: "indiana-state",    name: "Indiana State University",                 region: "Midwest",   type: "Regional",     state: "IN", country: "US", enrollment: "5k–15k",  maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "C", officialDomain: "indstate.edu", lastUpdated: "Q2 2026" },
  { slug: "northern-michigan",name: "Northern Michigan University",             region: "Midwest",   type: "Regional",     state: "MI", country: "US", enrollment: "5k–15k",  maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "C", officialDomain: "nmu.edu", lastUpdated: "Q2 2026" },
  { slug: "linfield",         name: "Linfield University",                      region: "West",      type: "Liberal Arts", state: "OR", country: "US", enrollment: "<5k",     maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "C-", officialDomain: "linfield.edu", lastUpdated: "Q2 2026" },
  { slug: "appalachian-state",name: "Appalachian State University",             region: "Southeast", type: "Regional",     state: "NC", country: "US", enrollment: "15k–30k", maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "C+", officialDomain: "appstate.edu", lastUpdated: "Q2 2026" },
  { slug: "jmu",              name: "James Madison University",                 region: "Southeast", type: "Regional",     state: "VA", country: "US", enrollment: "15k–30k", maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "C+", officialDomain: "jmu.edu", lastUpdated: "Q2 2026" },
  { slug: "sjsu",             name: "San Jose State University",                region: "West",      type: "Regional",     state: "CA", country: "US", enrollment: "30k+",    maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: true,  financialGrade: "C+", officialDomain: "sjsu.edu", lastUpdated: "Q2 2026" },
  { slug: "case-western",     name: "Case Western Reserve University",          region: "Midwest",   type: "R2 Research",  state: "OH", country: "US", enrollment: "5k–15k",  maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "B+", officialDomain: "case.edu", lastUpdated: "Q2 2026" },
  { slug: "fordham",          name: "Fordham University",                       region: "Northeast", type: "R2 Research",  state: "NY", country: "US", enrollment: "15k–30k", maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "B-", officialDomain: "fordham.edu", lastUpdated: "Q2 2026" },
  { slug: "lehigh",           name: "Lehigh University",                        region: "Northeast", type: "R2 Research",  state: "PA", country: "US", enrollment: "5k–15k",  maturityStage: 2, aiPolicyPublished: false, aiCurriculumInitiative: true,  financialGrade: "B+", officialDomain: "lehigh.edu", lastUpdated: "Q2 2026" },
  { slug: "u-miami",          name: "University of Miami",                      region: "Southeast", type: "R1 Research",  state: "FL", country: "US", enrollment: "15k–30k", maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "B", officialDomain: "miami.edu", lastUpdated: "Q2 2026" },
  { slug: "syracuse",         name: "Syracuse University",                      region: "Northeast", type: "R2 Research",  state: "NY", country: "US", enrollment: "15k–30k", maturityStage: 2, aiPolicyPublished: true,  aiCurriculumInitiative: false, financialGrade: "B+", officialDomain: "syr.edu", lastUpdated: "Q2 2026" },
];

// ─── Canadian Universities AI Readiness Portal ────────────────────────────────

export type UniversityType = "U15 Research" | "Research-Intensive" | "Comprehensive" | "Liberal Arts" | "Polytechnic" | "College";
export type Trajectory = "Rising" | "Steady" | "Early Stage";
export type Province = "AB" | "BC" | "MB" | "NB" | "NL" | "NS" | "ON" | "PE" | "QC" | "SK";

export type UniversityDimensions = {
  research:       number; // 0–20: AI labs, faculty, publications, patents
  policy:         number; // 0–20: published AI policies, ethics frameworks
  curriculum:     number; // 0–20: AI degree programs, integrated courses
  partnerships:   number; // 0–20: industry/gov AI partnerships, NSERC grants
  infrastructure: number; // 0–20: HPC access, cloud partnerships, compute labs
};

export type CanadianUniversityEntry = {
  slug:           string;
  name:           string;
  shortName:      string;
  province:       Province;
  type:           UniversityType;
  enrollment:     "<5k" | "5k–15k" | "15k–30k" | "30k+";
  founded:        number;
  score:          number;  // sum of all dimensions (max 100)
  trajectory:     Trajectory;
  dimensions:     UniversityDimensions;
  keySignals:     string[];
  financialGrade:  FinancialGrade; // CAUBO FIUC 2023/24 + HESA surplus/deficit research
  officialDomain:  string;
  aiPolicyUrl?:    string;
  lastUpdated:     string;
};

// Score = research + policy + curriculum + partnerships + infrastructure (max 100).
// Each dimension is 0–20. Sources: institutional websites, NSERC data, AI lab pages,
// job postings, published strategy documents. Updated Q2 2026.
export const CANADIAN_UNIVERSITIES: CanadianUniversityEntry[] = [

  // ── Alberta (AB) ──────────────────────────────────────────────────────────
  {
    slug: "u-alberta", name: "University of Alberta", shortName: "U Alberta",
    province: "AB", type: "U15 Research", enrollment: "30k+", founded: 1908,
    score: 74, trajectory: "Rising",
    dimensions: { research: 16, policy: 14, curriculum: 14, partnerships: 14, infrastructure: 16 },
    keySignals: ["Founding member of Amii (Alberta Machine Intelligence Institute)", "AI courses integrated across multiple faculties", "NSERC AI compute cluster operational"],
    financialGrade: "A",
    officialDomain: "ualberta.ca",
    aiPolicyUrl: "https://www.ualberta.ca/en/information-services-and-technology/ai/index.html",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "u-calgary", name: "University of Calgary", shortName: "U Calgary",
    province: "AB", type: "U15 Research", enrollment: "30k+", founded: 1966,
    score: 62, trajectory: "Rising",
    dimensions: { research: 14, policy: 12, curriculum: 12, partnerships: 12, infrastructure: 12 },
    keySignals: ["AI research groups active in energy and climate sectors", "ML graduate program launched 2024", "Industry partnerships with Alberta energy tech companies"],
    financialGrade: "A",
    officialDomain: "ucalgary.ca",
    aiPolicyUrl: "https://www.ucalgary.ca/risk/generative-artificial-intelligence",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "u-lethbridge", name: "University of Lethbridge", shortName: "U Lethbridge",
    province: "AB", type: "Comprehensive", enrollment: "5k–15k", founded: 1967,
    score: 28, trajectory: "Steady",
    dimensions: { research: 6, policy: 4, curriculum: 8, partnerships: 4, infrastructure: 6 },
    keySignals: ["Data science minor introduced 2023", "Limited formal AI governance documentation publicly available"],
    financialGrade: "C",
    officialDomain: "uleth.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "mount-royal", name: "Mount Royal University", shortName: "Mount Royal",
    province: "AB", type: "Comprehensive", enrollment: "15k–30k", founded: 1910,
    score: 22, trajectory: "Early Stage",
    dimensions: { research: 4, policy: 4, curriculum: 6, partnerships: 4, infrastructure: 4 },
    keySignals: ["No published AI strategy as of Q2 2026", "AI literacy electives piloted in Business faculty"],
    financialGrade: "C+",
    officialDomain: "mtroyal.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "athabasca", name: "Athabasca University", shortName: "Athabasca",
    province: "AB", type: "Comprehensive", enrollment: "30k+", founded: 1970,
    score: 30, trajectory: "Steady",
    dimensions: { research: 4, policy: 6, curriculum: 8, partnerships: 6, infrastructure: 6 },
    keySignals: ["Distance-learning infrastructure positions it for AI-in-education experimentation", "Published guidelines on AI use in online assessments", "Centre for Distance Education exploring AI tutoring tools"],
    financialGrade: "C",
    officialDomain: "athabascau.ca",
    lastUpdated: "Q2 2026",
  },

  // ── British Columbia (BC) ─────────────────────────────────────────────────
  {
    slug: "ubc", name: "University of British Columbia", shortName: "UBC",
    province: "BC", type: "U15 Research", enrollment: "30k+", founded: 1908,
    score: 78, trajectory: "Rising",
    dimensions: { research: 18, policy: 16, curriculum: 16, partnerships: 16, infrastructure: 12 },
    keySignals: ["Published comprehensive AI strategy document 2024", "Multiple AI research labs including CAIDA and BETA lab", "AI governance initiatives co-funded by SSHRC and Mitacs"],
    financialGrade: "A+",
    officialDomain: "ubc.ca",
    aiPolicyUrl: "https://academicintegrity.ubc.ca/generative-ai/",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "sfu", name: "Simon Fraser University", shortName: "SFU",
    province: "BC", type: "Research-Intensive", enrollment: "30k+", founded: 1965,
    score: 54, trajectory: "Steady",
    dimensions: { research: 12, policy: 10, curriculum: 12, partnerships: 10, infrastructure: 10 },
    keySignals: ["Computational Intelligence Lab active in NLP and vision research", "AI ethics coursework embedded in CS and philosophy programs", "NSERC Discovery grants supporting 8 AI-adjacent faculty projects"],
    financialGrade: "A-",
    officialDomain: "sfu.ca",
    aiPolicyUrl: "https://www.sfu.ca/ai.html",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "u-victoria", name: "University of Victoria", shortName: "UVic",
    province: "BC", type: "Research-Intensive", enrollment: "15k–30k", founded: 1963,
    score: 42, trajectory: "Steady",
    dimensions: { research: 8, policy: 8, curriculum: 10, partnerships: 8, infrastructure: 8 },
    keySignals: ["AI and climate intersection research through PICS institute", "Data science graduate certificate launched", "No institution-wide AI policy published as of Q2 2026"],
    financialGrade: "A-",
    officialDomain: "uvic.ca",
    aiPolicyUrl: "https://www.uvic.ca/learningandteaching/ai/",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "unbc", name: "University of Northern BC", shortName: "UNBC",
    province: "BC", type: "Comprehensive", enrollment: "5k–15k", founded: 1990,
    score: 18, trajectory: "Early Stage",
    dimensions: { research: 4, policy: 2, curriculum: 4, partnerships: 2, infrastructure: 6 },
    keySignals: ["No AI strategy or dedicated AI research centre", "Regional geography limits industry partnership density"],
    financialGrade: "C",
    officialDomain: "unbc.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "kwantlen", name: "Kwantlen Polytechnic University", shortName: "KPU",
    province: "BC", type: "Polytechnic", enrollment: "15k–30k", founded: 1981,
    score: 20, trajectory: "Early Stage",
    dimensions: { research: 4, policy: 4, curriculum: 6, partnerships: 2, infrastructure: 4 },
    keySignals: ["AI literacy modules included in some technology programs", "No formal AI governance framework published"],
    financialGrade: "C",
    officialDomain: "kpu.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "thompson-rivers", name: "Thompson Rivers University", shortName: "TRU",
    province: "BC", type: "Comprehensive", enrollment: "15k–30k", founded: 1970,
    score: 22, trajectory: "Early Stage",
    dimensions: { research: 4, policy: 4, curriculum: 6, partnerships: 4, infrastructure: 4 },
    keySignals: ["Open Learning division exploring AI-enhanced delivery", "Limited AI research output visible publicly"],
    financialGrade: "C",
    officialDomain: "tru.ca",
    lastUpdated: "Q2 2026",
  },

  // ── Manitoba (MB) ─────────────────────────────────────────────────────────
  {
    slug: "u-manitoba", name: "University of Manitoba", shortName: "U Manitoba",
    province: "MB", type: "U15 Research", enrollment: "30k+", founded: 1877,
    score: 44, trajectory: "Steady",
    dimensions: { research: 8, policy: 8, curriculum: 10, partnerships: 10, infrastructure: 8 },
    keySignals: ["NSERC-funded AI projects in agriculture and health informatics", "Data science program established", "Applied AI research growing but no dedicated AI institute"],
    financialGrade: "A-",
    officialDomain: "umanitoba.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "brandon", name: "Brandon University", shortName: "Brandon",
    province: "MB", type: "Comprehensive", enrollment: "<5k", founded: 1899,
    score: 14, trajectory: "Early Stage",
    dimensions: { research: 4, policy: 2, curriculum: 2, partnerships: 4, infrastructure: 2 },
    keySignals: ["No AI research centre or published AI strategy", "Small institution size limits dedicated AI investment"],
    financialGrade: "C-",
    officialDomain: "brandonu.ca",
    lastUpdated: "Q2 2026",
  },

  // ── New Brunswick (NB) ────────────────────────────────────────────────────
  {
    slug: "unb", name: "University of New Brunswick", shortName: "UNB",
    province: "NB", type: "Research-Intensive", enrollment: "5k–15k", founded: 1785,
    score: 36, trajectory: "Steady",
    dimensions: { research: 8, policy: 6, curriculum: 8, partnerships: 6, infrastructure: 8 },
    keySignals: ["Cybersecurity and AI research groups active", "AI-adjacent courses in CS and engineering departments", "ACENET HPC consortium provides compute access"],
    financialGrade: "B+",
    officialDomain: "unb.ca",
    aiPolicyUrl: "https://www.unb.ca/research/ai/",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "mount-allison", name: "Mount Allison University", shortName: "Mount Allison",
    province: "NB", type: "Liberal Arts", enrollment: "<5k", founded: 1839,
    score: 18, trajectory: "Early Stage",
    dimensions: { research: 4, policy: 4, curriculum: 4, partnerships: 2, infrastructure: 4 },
    keySignals: ["Data science minor available", "No formal AI policy or dedicated AI lab"],
    financialGrade: "C+",
    officialDomain: "mta.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "st-thomas", name: "St. Thomas University", shortName: "St. Thomas",
    province: "NB", type: "Liberal Arts", enrollment: "<5k", founded: 1910,
    score: 12, trajectory: "Early Stage",
    dimensions: { research: 2, policy: 2, curriculum: 4, partnerships: 2, infrastructure: 2 },
    keySignals: ["Liberal arts mandate with limited technology infrastructure investment", "AI ethics discussed in philosophy curriculum"],
    financialGrade: "D",
    officialDomain: "stu.ca",
    lastUpdated: "Q2 2026",
  },

  // ── Newfoundland (NL) ─────────────────────────────────────────────────────
  {
    slug: "memorial", name: "Memorial University of Newfoundland", shortName: "Memorial",
    province: "NL", type: "Research-Intensive", enrollment: "15k–30k", founded: 1925,
    score: 34, trajectory: "Steady",
    dimensions: { research: 6, policy: 6, curriculum: 8, partnerships: 8, infrastructure: 6 },
    keySignals: ["Ocean and resource-sector AI applications through MEOPAR", "NSERC-supported data science research", "Computing infrastructure shared via ACENET regional consortium"],
    financialGrade: "B-",
    officialDomain: "mun.ca",
    lastUpdated: "Q2 2026",
  },

  // ── Nova Scotia (NS) ──────────────────────────────────────────────────────
  {
    slug: "dalhousie", name: "Dalhousie University", shortName: "Dalhousie",
    province: "NS", type: "U15 Research", enrollment: "15k–30k", founded: 1818,
    score: 48, trajectory: "Steady",
    dimensions: { research: 10, policy: 10, curriculum: 10, partnerships: 10, infrastructure: 8 },
    keySignals: ["Rowe School of Business integrating AI into MBA curriculum", "AI in law program with Schulich School of Law", "NSERC-funded health AI projects in partnership with Nova Scotia Health"],
    financialGrade: "A-",
    officialDomain: "dal.ca",
    aiPolicyUrl: "https://www.dal.ca/dept/university_secretariat/policies/academic/ai-tools-policy.html",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "saint-marys", name: "Saint Mary's University", shortName: "Saint Mary's",
    province: "NS", type: "Comprehensive", enrollment: "5k–15k", founded: 1802,
    score: 24, trajectory: "Early Stage",
    dimensions: { research: 4, policy: 4, curriculum: 8, partnerships: 4, infrastructure: 4 },
    keySignals: ["Analytics and data science courses in Commerce faculty", "No published AI strategy or dedicated AI research unit"],
    financialGrade: "C+",
    officialDomain: "smu.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "acadia", name: "Acadia University", shortName: "Acadia",
    province: "NS", type: "Liberal Arts", enrollment: "<5k", founded: 1838,
    score: 20, trajectory: "Early Stage",
    dimensions: { research: 4, policy: 4, curriculum: 6, partnerships: 2, infrastructure: 4 },
    keySignals: ["AI-related electives in Computer Science", "No formal AI policy document published as of Q2 2026"],
    financialGrade: "C+",
    officialDomain: "acadiau.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "cbu", name: "Cape Breton University", shortName: "CBU",
    province: "NS", type: "Comprehensive", enrollment: "<5k", founded: 1974,
    score: 14, trajectory: "Early Stage",
    dimensions: { research: 2, policy: 2, curriculum: 4, partnerships: 2, infrastructure: 4 },
    keySignals: ["Technology programs growing but no AI-specific strategy", "Shannon School of Business exploring analytics tools"],
    financialGrade: "C+",
    officialDomain: "cbu.ca",
    lastUpdated: "Q2 2026",
  },

  // ── Ontario (ON) ──────────────────────────────────────────────────────────
  {
    slug: "u-toronto", name: "University of Toronto", shortName: "U Toronto",
    province: "ON", type: "U15 Research", enrollment: "30k+", founded: 1827,
    score: 88, trajectory: "Rising",
    dimensions: { research: 20, policy: 16, curriculum: 18, partnerships: 18, infrastructure: 16 },
    keySignals: ["Co-founded Vector Institute for Artificial Intelligence — Canada's leading applied AI hub", "Published institutional AI strategy; piloting AI literacy requirements across faculties", "Active industry partnerships with Google, Nvidia, Microsoft, and RBC AI"],
    financialGrade: "A+",
    officialDomain: "utoronto.ca",
    aiPolicyUrl: "https://ai.utoronto.ca/",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "u-waterloo", name: "University of Waterloo", shortName: "U Waterloo",
    province: "ON", type: "Research-Intensive", enrollment: "30k+", founded: 1957,
    score: 82, trajectory: "Rising",
    dimensions: { research: 18, policy: 16, curriculum: 18, partnerships: 16, infrastructure: 14 },
    keySignals: ["Waterloo Artificial Intelligence Institute (Waterloo.AI) leads interdisciplinary research", "Co-op program places thousands of students at AI companies annually", "Published responsible AI framework; strong alignment with federal AI strategy"],
    financialGrade: "A-",
    officialDomain: "uwaterloo.ca",
    aiPolicyUrl: "https://uwaterloo.ca/ai/",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "mcmaster", name: "McMaster University", shortName: "McMaster",
    province: "ON", type: "U15 Research", enrollment: "30k+", founded: 1887,
    score: 58, trajectory: "Rising",
    dimensions: { research: 14, policy: 10, curriculum: 12, partnerships: 12, infrastructure: 10 },
    keySignals: ["Vector Institute affiliate with active health AI research clusters", "AI for Health research network co-funded by CIHR and NSERC", "Curriculum integration underway across Engineering and Health Sciences"],
    financialGrade: "A-",
    officialDomain: "mcmaster.ca",
    aiPolicyUrl: "https://provost.mcmaster.ca/office-of-the-provost-2/generative-artificial-intelligence/",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "queens", name: "Queen's University", shortName: "Queen's",
    province: "ON", type: "U15 Research", enrollment: "15k–30k", founded: 1841,
    score: 50, trajectory: "Steady",
    dimensions: { research: 10, policy: 10, curriculum: 12, partnerships: 10, infrastructure: 8 },
    keySignals: ["Published GenAI guidance for students and faculty 2024", "Smith School of Business AI analytics certificate program", "NSERC-supported AI research in mining and materials science"],
    financialGrade: "A",
    officialDomain: "queensu.ca",
    aiPolicyUrl: "https://www.queensu.ca/provost/ai",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "western", name: "Western University", shortName: "Western",
    province: "ON", type: "U15 Research", enrollment: "30k+", founded: 1878,
    score: 48, trajectory: "Steady",
    dimensions: { research: 10, policy: 8, curriculum: 10, partnerships: 10, infrastructure: 10 },
    keySignals: ["Vector Institute affiliate; Brain and Mind Institute AI research", "Ivey Business School and Schulich Medicine integrating AI ethics modules", "SHARCNET HPC access supports computational research"],
    financialGrade: "A",
    officialDomain: "uwo.ca",
    aiPolicyUrl: "https://uwo.ca/ai/",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "u-ottawa", name: "University of Ottawa", shortName: "U Ottawa",
    province: "ON", type: "U15 Research", enrollment: "30k+", founded: 1848,
    score: 50, trajectory: "Steady",
    dimensions: { research: 10, policy: 12, curriculum: 10, partnerships: 10, infrastructure: 8 },
    keySignals: ["AI & Society institute with bilingual French-English policy research", "Proximity to federal government supports policy AI partnerships", "Published AI ethics guidelines for research and instruction"],
    financialGrade: "B+",
    officialDomain: "uottawa.ca",
    aiPolicyUrl: "https://www.uottawa.ca/en/governance/policies-regulations/academic-integrity",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "york", name: "York University", shortName: "York",
    province: "ON", type: "Research-Intensive", enrollment: "30k+", founded: 1959,
    score: 42, trajectory: "Steady",
    dimensions: { research: 8, policy: 8, curriculum: 10, partnerships: 8, infrastructure: 8 },
    keySignals: ["AI in Society research cluster across law, education, and social science", "Lassonde School of Engineering expanding AI-integrated curriculum", "Limited formal AI strategy documentation published"],
    financialGrade: "A-",
    officialDomain: "yorku.ca",
    aiPolicyUrl: "https://ai.yorku.ca/",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "carleton", name: "Carleton University", shortName: "Carleton",
    province: "ON", type: "Research-Intensive", enrollment: "15k–30k", founded: 1942,
    score: 40, trajectory: "Steady",
    dimensions: { research: 8, policy: 8, curriculum: 10, partnerships: 8, infrastructure: 6 },
    keySignals: ["Cybersecurity and AI joint research programs with Communications Security Establishment", "AI ethics electives in Philosophy and Computer Science", "Data science graduate programs growing in enrolment"],
    financialGrade: "B",
    officialDomain: "carleton.ca",
    aiPolicyUrl: "https://carleton.ca/provost/ai/",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "toronto-metropolitan", name: "Toronto Metropolitan University", shortName: "TMU",
    province: "ON", type: "Research-Intensive", enrollment: "30k+", founded: 1948,
    score: 46, trajectory: "Rising",
    dimensions: { research: 10, policy: 8, curriculum: 12, partnerships: 8, infrastructure: 8 },
    keySignals: ["Repositioning under new name with explicit tech-forward mandate", "AI programs in media, design, and engineering accelerating", "Industry partnerships with Toronto tech sector growing"],
    financialGrade: "B",
    officialDomain: "torontomu.ca",
    aiPolicyUrl: "https://www.torontomu.ca/provost/ai/",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "u-guelph", name: "University of Guelph", shortName: "U Guelph",
    province: "ON", type: "Research-Intensive", enrollment: "15k–30k", founded: 1964,
    score: 36, trajectory: "Steady",
    dimensions: { research: 8, policy: 6, curriculum: 8, partnerships: 6, infrastructure: 8 },
    keySignals: ["AI in agriculture and food science research via Ontario Agri-Food Innovation Alliance", "NSERC grants supporting precision agriculture AI applications", "Data science coursework integrated in multiple degree programs"],
    financialGrade: "A-",
    officialDomain: "uoguelph.ca",
    aiPolicyUrl: "https://www.uoguelph.ca/cip/ai/",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "ontario-tech", name: "Ontario Tech University", shortName: "Ontario Tech",
    province: "ON", type: "Research-Intensive", enrollment: "5k–15k", founded: 2002,
    score: 40, trajectory: "Rising",
    dimensions: { research: 8, policy: 8, curriculum: 10, partnerships: 8, infrastructure: 6 },
    keySignals: ["Technology-forward institutional mandate embedded in charter", "AI and ML courses required across engineering programs", "Industry partnerships with automotive and defence sectors"],
    financialGrade: "B-",
    officialDomain: "ontariotechu.ca",
    aiPolicyUrl: "https://ontariotechu.ca/generative-ai",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "wilfrid-laurier", name: "Wilfrid Laurier University", shortName: "Laurier",
    province: "ON", type: "Comprehensive", enrollment: "15k–30k", founded: 1911,
    score: 30, trajectory: "Steady",
    dimensions: { research: 6, policy: 6, curriculum: 8, partnerships: 4, infrastructure: 6 },
    keySignals: ["Data analytics stream in Business Administration", "AI ethics discussed in Social Welfare and Philosophy courses", "No published AI readiness strategy as of Q2 2026"],
    financialGrade: "B-",
    officialDomain: "wlu.ca",
    aiPolicyUrl: "https://students.wlu.ca/academics/academic-integrity/ai-and-academic-integrity.html",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "ocad", name: "OCAD University", shortName: "OCAD U",
    province: "ON", type: "Comprehensive", enrollment: "<5k", founded: 1876,
    score: 30, trajectory: "Steady",
    dimensions: { research: 6, policy: 6, curriculum: 10, partnerships: 4, infrastructure: 4 },
    keySignals: ["Unique AI + design/art curriculum integration positioning", "Digital Futures program incorporates AI tools in creative practice", "AI ethics and responsible design embedded in graduate programs"],
    financialGrade: "C+",
    officialDomain: "ocadu.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "u-windsor", name: "University of Windsor", shortName: "U Windsor",
    province: "ON", type: "Comprehensive", enrollment: "15k–30k", founded: 1857,
    score: 28, trajectory: "Steady",
    dimensions: { research: 6, policy: 4, curriculum: 8, partnerships: 4, infrastructure: 6 },
    keySignals: ["Cross-border proximity to Detroit AI ecosystem creates partnership opportunities", "AI research in automotive engineering and cross-border logistics", "Limited formal AI governance documentation"],
    financialGrade: "B-",
    officialDomain: "uwindsor.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "brock", name: "Brock University", shortName: "Brock",
    province: "ON", type: "Comprehensive", enrollment: "15k–30k", founded: 1964,
    score: 26, trajectory: "Early Stage",
    dimensions: { research: 6, policy: 4, curriculum: 6, partnerships: 4, infrastructure: 6 },
    keySignals: ["Data science courses in Mathematics and Computer Science", "No dedicated AI research centre or published AI strategy"],
    financialGrade: "B-",
    officialDomain: "brocku.ca",
    aiPolicyUrl: "https://brocku.ca/learning-teaching/teaching-resources/ai-teaching/",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "trent", name: "Trent University", shortName: "Trent",
    province: "ON", type: "Comprehensive", enrollment: "5k–15k", founded: 1963,
    score: 20, trajectory: "Early Stage",
    dimensions: { research: 4, policy: 4, curriculum: 6, partnerships: 2, infrastructure: 4 },
    keySignals: ["Data science minor available in Computing and Information Systems", "No formal AI policy or dedicated AI infrastructure"],
    financialGrade: "C+",
    officialDomain: "trentu.ca",
    aiPolicyUrl: "https://www.trentu.ca/academicintegrity/ai-tools",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "lakehead", name: "Lakehead University", shortName: "Lakehead",
    province: "ON", type: "Comprehensive", enrollment: "5k–15k", founded: 1965,
    score: 18, trajectory: "Early Stage",
    dimensions: { research: 4, policy: 2, curriculum: 6, partnerships: 2, infrastructure: 4 },
    keySignals: ["Computer Science department offers AI electives", "Limited research infrastructure for AI-specific projects"],
    financialGrade: "C+",
    officialDomain: "lakeheadu.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "nipissing", name: "Nipissing University", shortName: "Nipissing",
    province: "ON", type: "Comprehensive", enrollment: "<5k", founded: 1992,
    score: 14, trajectory: "Early Stage",
    dimensions: { research: 2, policy: 2, curriculum: 4, partnerships: 2, infrastructure: 4 },
    keySignals: ["Teaching-focused mandate with limited research infrastructure", "No AI strategy or dedicated AI programs"],
    financialGrade: "C",
    officialDomain: "nipissingu.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "laurentian", name: "Laurentian University", shortName: "Laurentian",
    province: "ON", type: "Comprehensive", enrollment: "5k–15k", founded: 1960,
    score: 16, trajectory: "Early Stage",
    dimensions: { research: 2, policy: 2, curriculum: 4, partnerships: 4, infrastructure: 4 },
    keySignals: ["Recovery from CCAA restructuring limits new AI investment", "Mining sector partnerships offer some AI application context"],
    financialGrade: "D",
    officialDomain: "laurentian.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "algoma", name: "Algoma University", shortName: "Algoma",
    province: "ON", type: "Liberal Arts", enrollment: "<5k", founded: 1965,
    score: 12, trajectory: "Early Stage",
    dimensions: { research: 2, policy: 2, curriculum: 4, partnerships: 2, infrastructure: 2 },
    keySignals: ["Indigenous-focused liberal arts mandate with limited technology infrastructure", "No AI research or strategy documentation"],
    financialGrade: "C+",
    officialDomain: "algomau.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "redeemer", name: "Redeemer University", shortName: "Redeemer",
    province: "ON", type: "Liberal Arts", enrollment: "<5k", founded: 1982,
    score: 10, trajectory: "Early Stage",
    dimensions: { research: 2, policy: 2, curriculum: 2, partnerships: 2, infrastructure: 2 },
    keySignals: ["Small Christian liberal arts institution with minimal technology investment", "No AI policy or programs documented"],
    financialGrade: "C",
    officialDomain: "redeemer.ca",
    lastUpdated: "Q2 2026",
  },

  // ── PEI ───────────────────────────────────────────────────────────────────
  {
    slug: "upei", name: "University of Prince Edward Island", shortName: "UPEI",
    province: "PE", type: "Comprehensive", enrollment: "<5k", founded: 1969,
    score: 22, trajectory: "Early Stage",
    dimensions: { research: 4, policy: 4, curriculum: 6, partnerships: 4, infrastructure: 4 },
    keySignals: ["Data analytics coursework in Business and Computer Science", "Atlantic Canada's smallest province limits scale of AI investment"],
    financialGrade: "C+",
    officialDomain: "upei.ca",
    lastUpdated: "Q2 2026",
  },

  // ── Quebec (QC) ───────────────────────────────────────────────────────────
  {
    slug: "mcgill", name: "McGill University", shortName: "McGill",
    province: "QC", type: "U15 Research", enrollment: "30k+", founded: 1821,
    score: 84, trajectory: "Rising",
    dimensions: { research: 20, policy: 14, curriculum: 18, partnerships: 18, infrastructure: 14 },
    keySignals: ["Co-founding institution of Mila — Québec AI Institute with Yoshua Bengio", "Extensive AI and ML curriculum across faculties including Medicine and Law", "Deep industry partnerships with Google Brain, NVIDIA, Samsung AI, and Microsoft Research"],
    financialGrade: "A",
    officialDomain: "mcgill.ca",
    aiPolicyUrl: "https://www.mcgill.ca/ai/",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "u-montreal", name: "Université de Montréal", shortName: "U Montréal",
    province: "QC", type: "U15 Research", enrollment: "30k+", founded: 1878,
    score: 82, trajectory: "Rising",
    dimensions: { research: 20, policy: 14, curriculum: 18, partnerships: 16, infrastructure: 14 },
    keySignals: ["Lead institution of Mila — among the world's largest academic AI research clusters", "IVADO institute co-lead; over 500 researchers in AI and data science", "Deep learning integrated throughout graduate programs across disciplines"],
    financialGrade: "A-",
    officialDomain: "umontreal.ca",
    aiPolicyUrl: "https://www.umontreal.ca/en/artificial-intelligence/",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "polytechnique-montreal", name: "École Polytechnique de Montréal", shortName: "Polytechnique",
    province: "QC", type: "Polytechnic", enrollment: "5k–15k", founded: 1873,
    score: 62, trajectory: "Rising",
    dimensions: { research: 14, policy: 10, curriculum: 14, partnerships: 14, infrastructure: 10 },
    keySignals: ["Mila affiliate with deep engineering-AI integration across programs", "AI mandatory in multiple engineering streams", "Partnerships with industrial partners through Mitacs and InnovÉÉ"],
    financialGrade: "B+",
    officialDomain: "polymtl.ca",
    aiPolicyUrl: "https://www.polymtl.ca/pertinence/ia",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "laval", name: "Laval University", shortName: "Laval",
    province: "QC", type: "U15 Research", enrollment: "15k–30k", founded: 1852,
    score: 52, trajectory: "Steady",
    dimensions: { research: 10, policy: 8, curriculum: 10, partnerships: 12, infrastructure: 12 },
    keySignals: ["IVADO affiliate with active AI research in health, forestry, and agriculture", "CERVO Brain Research Centre incorporating ML in neuroscience", "Significant NSERC and FRQNT funding for AI-adjacent research"],
    financialGrade: "B+",
    officialDomain: "ulaval.ca",
    aiPolicyUrl: "https://www.ulaval.ca/ia",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "u-sherbrooke", name: "Université de Sherbrooke", shortName: "U Sherbrooke",
    province: "QC", type: "Research-Intensive", enrollment: "15k–30k", founded: 1954,
    score: 44, trajectory: "Rising",
    dimensions: { research: 10, policy: 8, curriculum: 10, partnerships: 8, infrastructure: 8 },
    keySignals: ["Named contributor to Québec AI strategy; IVADO affiliate", "AI research groups in health imaging and robotics", "Co-op engineering programs with strong industry AI placement"],
    financialGrade: "B+",
    officialDomain: "usherbrooke.ca",
    aiPolicyUrl: "https://www.usherbrooke.ca/etudiants/vie-universitaire/integrite-academique/ia",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "hec-montreal", name: "HEC Montréal", shortName: "HEC Montréal",
    province: "QC", type: "Comprehensive", enrollment: "15k–30k", founded: 1907,
    score: 42, trajectory: "Steady",
    dimensions: { research: 8, policy: 8, curriculum: 12, partnerships: 8, infrastructure: 6 },
    keySignals: ["IVADO affiliate with AI in business curriculum emphasis", "MBA program integrates AI strategy and data analytics as core modules", "Case-study partnerships with Québec AI companies"],
    financialGrade: "B",
    officialDomain: "hec.ca",
    aiPolicyUrl: "https://www.hec.ca/en/students/support-resources/ai/index.html",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "uqam", name: "Université du Québec à Montréal", shortName: "UQAM",
    province: "QC", type: "Research-Intensive", enrollment: "30k+", founded: 1969,
    score: 38, trajectory: "Steady",
    dimensions: { research: 8, policy: 6, curriculum: 10, partnerships: 6, infrastructure: 8 },
    keySignals: ["Social AI and ethics research distinguishing factor", "Informatics programs with growing AI elective offering", "IVADO community membership with limited lead research role"],
    financialGrade: "B",
    officialDomain: "uqam.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "concordia", name: "Concordia University", shortName: "Concordia",
    province: "QC", type: "Research-Intensive", enrollment: "30k+", founded: 1974,
    score: 44, trajectory: "Steady",
    dimensions: { research: 10, policy: 8, curriculum: 10, partnerships: 8, infrastructure: 8 },
    keySignals: ["IVADO community member with active AI research clusters", "Computation Arts and engineering programs integrating AI tools", "Centre for Interdisciplinary Studies in Society and Culture exploring AI ethics"],
    financialGrade: "B",
    officialDomain: "concordia.ca",
    aiPolicyUrl: "https://www.concordia.ca/students/academic-integrity/generative-ai.html",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "bishops", name: "Bishop's University", shortName: "Bishop's",
    province: "QC", type: "Liberal Arts", enrollment: "<5k", founded: 1845,
    score: 14, trajectory: "Early Stage",
    dimensions: { research: 2, policy: 2, curriculum: 4, partnerships: 2, infrastructure: 4 },
    keySignals: ["Small English-language liberal arts institution with limited technology investment", "No AI strategy or research documentation publicly available"],
    financialGrade: "C",
    officialDomain: "ubishops.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "uqo", name: "Université du Québec en Outaouais", shortName: "UQO",
    province: "QC", type: "Comprehensive", enrollment: "5k–15k", founded: 1981,
    score: 22, trajectory: "Early Stage",
    dimensions: { research: 4, policy: 4, curriculum: 6, partnerships: 4, infrastructure: 4 },
    keySignals: ["Proximity to Ottawa creates some federal AI partnership opportunities", "Limited AI research or published strategy documents"],
    financialGrade: "C",
    officialDomain: "uqo.ca",
    lastUpdated: "Q2 2026",
  },

  // ── Saskatchewan (SK) ─────────────────────────────────────────────────────
  {
    slug: "u-saskatchewan", name: "University of Saskatchewan", shortName: "U Saskatchewan",
    province: "SK", type: "U15 Research", enrollment: "15k–30k", founded: 1907,
    score: 38, trajectory: "Steady",
    dimensions: { research: 8, policy: 6, curriculum: 8, partnerships: 8, infrastructure: 8 },
    keySignals: ["AI in agriculture research via Borlaug Global Rust Reference Center and NSERC grants", "Data science graduate programs in Statistics and Computer Science", "PLATO HPC cluster supports computational AI research"],
    financialGrade: "A-",
    officialDomain: "usask.ca",
    aiPolicyUrl: "https://teaching.usask.ca/ai/",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "u-regina", name: "University of Regina", shortName: "U Regina",
    province: "SK", type: "Research-Intensive", enrollment: "5k–15k", founded: 1961,
    score: 26, trajectory: "Early Stage",
    dimensions: { research: 6, policy: 4, curriculum: 6, partnerships: 4, infrastructure: 6 },
    keySignals: ["Data Analytics certificate program in continuing education", "Energy sector AI research partnerships nascent", "No published institutional AI strategy"],
    financialGrade: "B-",
    officialDomain: "uregina.ca",
    lastUpdated: "Q2 2026",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // COLLEGES & INSTITUTES OF TECHNOLOGY
  // ══════════════════════════════════════════════════════════════════════════

  // ── Alberta ───────────────────────────────────────────────────────────────
  {
    slug: "sait", name: "Southern Alberta Institute of Technology", shortName: "SAIT",
    province: "AB", type: "Polytechnic", enrollment: "15k–30k", founded: 1916,
    score: 40, trajectory: "Steady",
    dimensions: { research: 6, policy: 6, curriculum: 10, partnerships: 10, infrastructure: 8 },
    keySignals: ["Applied AI and data analytics programs in School of Information and Communications Technologies", "Industry partnerships with Calgary's energy tech sector for applied AI projects", "MacPhail School of Energy exploring AI for industrial applications"],
    financialGrade: "B-",
    officialDomain: "sait.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "nait", name: "Northern Alberta Institute of Technology", shortName: "NAIT",
    province: "AB", type: "Polytechnic", enrollment: "15k–30k", founded: 1962,
    score: 36, trajectory: "Steady",
    dimensions: { research: 6, policy: 6, curriculum: 8, partnerships: 8, infrastructure: 8 },
    keySignals: ["Applied research partnerships with Alberta industry in automation and AI", "Computer Systems Technology diploma with AI/ML tracks", "JR Shaw School of Business integrating analytics coursework"],
    financialGrade: "B-",
    officialDomain: "nait.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "red-deer-poly", name: "Red Deer Polytechnic", shortName: "Red Deer Poly",
    province: "AB", type: "Polytechnic", enrollment: "5k–15k", founded: 1964,
    score: 22, trajectory: "Early Stage",
    dimensions: { research: 4, policy: 4, curriculum: 6, partnerships: 4, infrastructure: 4 },
    keySignals: ["Technology programs expanding but no formal AI strategy published", "Applied research activity limited relative to larger polytechnics"],
    financialGrade: "C+",
    officialDomain: "rdpolytech.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "lethbridge-college", name: "Lethbridge College", shortName: "Lethbridge College",
    province: "AB", type: "College", enrollment: "5k–15k", founded: 1957,
    score: 18, trajectory: "Early Stage",
    dimensions: { research: 2, policy: 4, curriculum: 4, partnerships: 4, infrastructure: 4 },
    keySignals: ["Agriculture-focused applied learning with limited AI integration to date", "No AI strategy or dedicated AI programs published"],
    financialGrade: "C",
    officialDomain: "lethbridgecollege.ca",
    lastUpdated: "Q2 2026",
  },

  // ── British Columbia ───────────────────────────────────────────────────────
  {
    slug: "bcit", name: "British Columbia Institute of Technology", shortName: "BCIT",
    province: "BC", type: "Polytechnic", enrollment: "30k+", founded: 1964,
    score: 44, trajectory: "Steady",
    dimensions: { research: 8, policy: 8, curriculum: 10, partnerships: 10, infrastructure: 8 },
    keySignals: ["Applied AI and machine learning programs in School of Computing and Academic Studies", "Industry-linked applied research in automation, health informatics, and smart systems", "Published responsible AI use guidelines for staff and students 2024"],
    financialGrade: "B-",
    officialDomain: "bcit.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "douglas-college", name: "Douglas College", shortName: "Douglas College",
    province: "BC", type: "College", enrollment: "15k–30k", founded: 1970,
    score: 20, trajectory: "Early Stage",
    dimensions: { research: 4, policy: 4, curriculum: 6, partnerships: 2, infrastructure: 4 },
    keySignals: ["Computing Science programs include some AI electives", "No dedicated AI strategy or applied research centre"],
    financialGrade: "C",
    officialDomain: "douglascollege.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "langara", name: "Langara College", shortName: "Langara",
    province: "BC", type: "College", enrollment: "15k–30k", founded: 1970,
    score: 20, trajectory: "Early Stage",
    dimensions: { research: 4, policy: 4, curriculum: 6, partnerships: 2, infrastructure: 4 },
    keySignals: ["Data analytics coursework available in Business and Computing", "Transfer-focused mandate limits deep applied research investment"],
    financialGrade: "C",
    officialDomain: "langara.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "camosun", name: "Camosun College", shortName: "Camosun",
    province: "BC", type: "College", enrollment: "5k–15k", founded: 1971,
    score: 18, trajectory: "Early Stage",
    dimensions: { research: 2, policy: 4, curriculum: 6, partnerships: 2, infrastructure: 4 },
    keySignals: ["Technology programs growing in Victoria region", "No published AI strategy or AI-specific programs"],
    financialGrade: "C",
    officialDomain: "camosun.ca",
    lastUpdated: "Q2 2026",
  },

  // ── Manitoba ──────────────────────────────────────────────────────────────
  {
    slug: "red-river", name: "Red River College Polytechnic", shortName: "RRC Polytech",
    province: "MB", type: "Polytechnic", enrollment: "15k–30k", founded: 1938,
    score: 30, trajectory: "Steady",
    dimensions: { research: 4, policy: 6, curriculum: 8, partnerships: 6, infrastructure: 6 },
    keySignals: ["Applied research in Smart Environments via the Applied Computer Education department", "Industry-connected programs in data analytics and automation", "Manitoba's largest polytechnic with growing technology enrolment"],
    financialGrade: "C+",
    officialDomain: "rrc.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "assiniboine", name: "Assiniboine Community College", shortName: "Assiniboine",
    province: "MB", type: "College", enrollment: "<5k", founded: 1961,
    score: 14, trajectory: "Early Stage",
    dimensions: { research: 2, policy: 2, curriculum: 4, partnerships: 2, infrastructure: 4 },
    keySignals: ["Agriculture and health programs with minimal AI integration", "No AI strategy or dedicated programs published"],
    financialGrade: "C-",
    officialDomain: "assiniboine.net",
    lastUpdated: "Q2 2026",
  },

  // ── New Brunswick ─────────────────────────────────────────────────────────
  {
    slug: "nbcc", name: "New Brunswick Community College", shortName: "NBCC",
    province: "NB", type: "College", enrollment: "5k–15k", founded: 1973,
    score: 20, trajectory: "Early Stage",
    dimensions: { research: 4, policy: 2, curriculum: 6, partnerships: 4, infrastructure: 4 },
    keySignals: ["Technology programs include IT and networking with some AI content", "No formal AI strategy or dedicated AI research activity"],
    financialGrade: "C",
    officialDomain: "nbcc.ca",
    lastUpdated: "Q2 2026",
  },

  // ── Newfoundland ──────────────────────────────────────────────────────────
  {
    slug: "college-north-atlantic", name: "College of the North Atlantic", shortName: "CNA",
    province: "NL", type: "College", enrollment: "5k–15k", founded: 1963,
    score: 14, trajectory: "Early Stage",
    dimensions: { research: 2, policy: 2, curriculum: 4, partnerships: 2, infrastructure: 4 },
    keySignals: ["Technology programs across 17 campuses in NL", "Ocean and resource sector proximity creates AI application potential not yet formalized"],
    financialGrade: "C",
    officialDomain: "cna.nl.ca",
    lastUpdated: "Q2 2026",
  },

  // ── Nova Scotia ───────────────────────────────────────────────────────────
  {
    slug: "nscc", name: "Nova Scotia Community College", shortName: "NSCC",
    province: "NS", type: "College", enrollment: "15k–30k", founded: 1988,
    score: 22, trajectory: "Steady",
    dimensions: { research: 4, policy: 4, curriculum: 6, partnerships: 4, infrastructure: 4 },
    keySignals: ["Applied research partnerships with Nova Scotia industries", "IT programs include data analytics and some AI content", "Growing collaboration with Dalhousie and SMU on applied projects"],
    financialGrade: "C+",
    officialDomain: "nscc.ca",
    lastUpdated: "Q2 2026",
  },

  // ── Ontario ───────────────────────────────────────────────────────────────
  {
    slug: "sheridan", name: "Sheridan College", shortName: "Sheridan",
    province: "ON", type: "College", enrollment: "30k+", founded: 1967,
    score: 34, trajectory: "Rising",
    dimensions: { research: 6, policy: 6, curriculum: 10, partnerships: 6, infrastructure: 6 },
    keySignals: ["Animation, design, and technology programs pioneering AI creative tools integration", "Centre for Applied AI in Design and Media active with industry partnerships", "AI ethics embedded in creative technology programs"],
    financialGrade: "C+",
    officialDomain: "sheridancollege.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "mohawk", name: "Mohawk College", shortName: "Mohawk",
    province: "ON", type: "College", enrollment: "30k+", founded: 1966,
    score: 32, trajectory: "Steady",
    dimensions: { research: 6, policy: 6, curriculum: 8, partnerships: 6, infrastructure: 6 },
    keySignals: ["IDEAWORKS applied research hub with AI automation projects", "Computer Systems Technician program with AI and IoT tracks", "McMaster-Mohawk partnership on applied engineering research"],
    financialGrade: "C+",
    officialDomain: "mohawkcollege.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "durham-college", name: "Durham College", shortName: "Durham College",
    province: "ON", type: "College", enrollment: "15k–30k", founded: 1967,
    score: 30, trajectory: "Rising",
    dimensions: { research: 6, policy: 6, curriculum: 8, partnerships: 6, infrastructure: 4 },
    keySignals: ["AI program launched as standalone diploma — one of first Canadian colleges to do so", "Centre for Collaborative Education and Research in Retail applying AI in applied projects", "Published AI use guidelines for students 2024"],
    financialGrade: "C",
    officialDomain: "durhamcollege.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "conestoga", name: "Conestoga College", shortName: "Conestoga",
    province: "ON", type: "College", enrollment: "30k+", founded: 1967,
    score: 36, trajectory: "Rising",
    dimensions: { research: 6, policy: 6, curriculum: 10, partnerships: 8, infrastructure: 6 },
    keySignals: ["Applied AI in manufacturing and automation via Conestoga Research & Innovation", "Data analytics and AI graduate certificates growing rapidly in enrolment", "Partnerships with Waterloo Region tech companies for applied AI projects"],
    financialGrade: "C+",
    officialDomain: "conestogac.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "humber", name: "Humber College", shortName: "Humber",
    province: "ON", type: "College", enrollment: "30k+", founded: 1967,
    score: 28, trajectory: "Steady",
    dimensions: { research: 4, policy: 6, curriculum: 8, partnerships: 6, infrastructure: 4 },
    keySignals: ["Applied research via ITAL (Institute of Technology, Arts & Labour)", "Data science and AI programs in Faculty of Technology", "No formal AI strategy document publicly available"],
    financialGrade: "C+",
    officialDomain: "humber.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "seneca", name: "Seneca Polytechnic", shortName: "Seneca",
    province: "ON", type: "College", enrollment: "30k+", founded: 1967,
    score: 28, trajectory: "Steady",
    dimensions: { research: 4, policy: 6, curriculum: 8, partnerships: 6, infrastructure: 4 },
    keySignals: ["AI, ML, and data analytics programs in Faculty of Applied Science and Engineering Technology", "Published GenAI use policy for students 2024", "Applied research partnerships with Toronto technology sector growing"],
    financialGrade: "C+",
    officialDomain: "senecapolytechnic.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "algonquin", name: "Algonquin College", shortName: "Algonquin",
    province: "ON", type: "College", enrollment: "30k+", founded: 1967,
    score: 26, trajectory: "Steady",
    dimensions: { research: 4, policy: 4, curriculum: 8, partnerships: 4, infrastructure: 6 },
    keySignals: ["AI and ML courses in School of Advanced Technology", "Ottawa region proximity creates some federal AI partnership opportunities", "College-wide generative AI guidance published 2024"],
    financialGrade: "C+",
    officialDomain: "algonquincollege.com",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "george-brown", name: "George Brown College", shortName: "George Brown",
    province: "ON", type: "College", enrollment: "30k+", founded: 1967,
    score: 24, trajectory: "Steady",
    dimensions: { research: 4, policy: 4, curriculum: 8, partnerships: 4, infrastructure: 4 },
    keySignals: ["Technology programs in School of Design and School of Computer Technology", "Toronto location enables industry connections", "No published AI strategy as of Q2 2026"],
    financialGrade: "C+",
    officialDomain: "georgebrown.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "centennial", name: "Centennial College", shortName: "Centennial",
    province: "ON", type: "College", enrollment: "30k+", founded: 1966,
    score: 22, trajectory: "Early Stage",
    dimensions: { research: 4, policy: 4, curriculum: 6, partnerships: 4, infrastructure: 4 },
    keySignals: ["Engineering Technology and Applied Science programs include data analytics content", "No dedicated AI program or strategy published"],
    financialGrade: "C",
    officialDomain: "centennialcollege.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "fanshawe", name: "Fanshawe College", shortName: "Fanshawe",
    province: "ON", type: "College", enrollment: "30k+", founded: 1967,
    score: 22, trajectory: "Early Stage",
    dimensions: { research: 4, policy: 4, curriculum: 6, partnerships: 4, infrastructure: 4 },
    keySignals: ["Information Technology programs include networking and some analytics", "London, ON market limits density of AI industry partnerships"],
    financialGrade: "C",
    officialDomain: "fanshawec.ca",
    lastUpdated: "Q2 2026",
  },

  // ── PEI ───────────────────────────────────────────────────────────────────
  {
    slug: "holland-college", name: "Holland College", shortName: "Holland College",
    province: "PE", type: "College", enrollment: "<5k", founded: 1969,
    score: 12, trajectory: "Early Stage",
    dimensions: { research: 2, policy: 2, curriculum: 4, partnerships: 2, infrastructure: 2 },
    keySignals: ["Small island college with technology programs in IT and networking", "No AI strategy or AI-specific programs documented"],
    financialGrade: "C-",
    officialDomain: "hollandcollege.com",
    lastUpdated: "Q2 2026",
  },

  // ── Quebec ────────────────────────────────────────────────────────────────
  {
    slug: "cegep-maisonneuve", name: "Cégep de Maisonneuve", shortName: "Cégep Maisonneuve",
    province: "QC", type: "College", enrollment: "5k–15k", founded: 1967,
    score: 20, trajectory: "Early Stage",
    dimensions: { research: 2, policy: 4, curriculum: 6, partnerships: 4, infrastructure: 4 },
    keySignals: ["Computer science DEC program includes AI and data science modules", "Proximity to Mila creates awareness but limited formal research collaboration"],
    financialGrade: "C",
    officialDomain: "cmaisonneuve.qc.ca",
    lastUpdated: "Q2 2026",
  },
  {
    slug: "cegep-andre-laurendeau", name: "Cégep André-Laurendeau", shortName: "Cégep A-L",
    province: "QC", type: "College", enrollment: "<5k", founded: 1969,
    score: 18, trajectory: "Early Stage",
    dimensions: { research: 2, policy: 4, curriculum: 6, partnerships: 2, infrastructure: 4 },
    keySignals: ["Computer science DEC with some AI elective content", "No formal AI strategy or dedicated AI programs"],
    financialGrade: "C-",
    officialDomain: "claurendeau.qc.ca",
    lastUpdated: "Q2 2026",
  },

  // ── Saskatchewan ──────────────────────────────────────────────────────────
  {
    slug: "sask-polytech", name: "Saskatchewan Polytechnic", shortName: "Sask Polytech",
    province: "SK", type: "Polytechnic", enrollment: "15k–30k", founded: 1988,
    score: 30, trajectory: "Steady",
    dimensions: { research: 6, policy: 4, curriculum: 8, partnerships: 6, infrastructure: 6 },
    keySignals: ["Applied research in agriculture AI through Saskatchewan agri-food partnerships", "Computer systems and IT programs include data analytics and automation content", "Saskatchewan's largest polytechnic with growing technology enrolment"],
    financialGrade: "C+",
    officialDomain: "saskpolytech.ca",
    lastUpdated: "Q2 2026",
  },
];
