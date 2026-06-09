export const TRUST_METRICS = [
  { value: "Proprietary", label: "Studio & Pulse Architecture" },
  { value: "100%", label: "Student-Owned IP" },
  { value: "Real-Time", label: "Fluency Telemetry via Pulse" },
  { value: "Cryptographic", label: "Verified Employability Badges" },
] as const;

export const WHY_ITEMS = [
  {
    icon: "GraduationCap",
    title: "AI as a Core Language",
    body: "A structured fluency acquisition model — Levels 101 through 301 — embeds AI literacy across every department. We track progression with measurable competency metrics, not completion certificates.",
  },
  {
    icon: "Code2",
    title: "Sophrosyne Studio & Pulse",
    body: "Studio gives students a FERPA-compliant developer environment with a visual canvas IDE and multi-agent orchestration. Pulse gives administrators real-time fluency telemetry, department-level dashboards, and cryptographic badge issuance — both running on the same institutional infrastructure.",
  },
  {
    icon: "Network",
    title: "Consortium Resource Pooling",
    body: "Shared GPU compute, cross-campus model deployment, and a federated dataset exchange across all partner institutions. The network grows stronger with every new campus — more compute, more models, more cross-campus student collaboration.",
  },
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
    title: "Studio Provisioning & Foundry Launch",
    duration: "4–8 Weeks",
    body: "Sophrosyne Studio is provisioned campus-wide. The Foundry incubator space is established and the Level 101 Curriculum Matrix goes live. Faculty onboarding begins in week two.",
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
    tagline: "Enterprise-grade AI infrastructure with academic governance.",
    body: "Sophrosyne Studio is a secure, low-code AI orchestration and development environment designed specifically for campus deployment. Students and faculty gain access to a visual canvas IDE where they can model, test, and host multi-agent workflows that connect directly to existing academic systems (Banner, Canvas, Colleague) — all under complete FERPA compliance and institutional data sovereignty.",
    bullets: [
      "Visual pipeline builder with drag-and-drop agent orchestration",
      "Native connectors for Banner, Canvas, Colleague, and Slate",
      "Role-based access controls with institutional SSO integration",
      "Private cloud deployment — data never leaves your perimeter",
      "Built-in audit logging for every model inference and data query",
    ],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Technical AI workspace showing development environment",
  },
  {
    id: "curriculum",
    label: "02 — The Fluency Framework",
    title: "AI Fluency Curriculum Matrix",
    tagline: "Language-acquisition methodology applied to AI competency.",
    body: "Modelled after modern language-acquisition research, the AI Fluency Matrix delivers a structured progression pathway across every department — from foundational prompt literacy to production-level model deployment. All three levels are powered by live Sophrosyne Studio lab environments, ensuring every concept is applied, not just lectured.",
    bullets: [
      "Level 101: AI Foundations — prompt engineering, model evaluation, ethical frameworks",
      "Level 201: Applied AI — workflow automation, data analysis, API integration",
      "Level 301: Production AI — multi-agent systems, model fine-tuning, deployment pipelines",
      "Department-specific tracks: Engineering, Business, Health Sciences, Humanities",
      "Continuous progression dashboards visible to students, faculty, and administration",
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students collaborating in a modern learning environment",
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
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students and developers collaborating and coding in a foundry setting",
  },
  {
    id: "pulse",
    label: "04 — The Analytics Engine",
    title: "Sophrosyne Pulse",
    tagline: "Real-time fluency telemetry and verified credential issuance.",
    body: "Sophrosyne Pulse is the analytics backbone of the ecosystem. It tracks real-time AI tool adoption, workflow complexity scores, and curriculum progression across every department — giving university leadership verified learning outcome data for accreditation reports, employer partnerships, and board presentations. Every Level 301 completion generates a tamper-proof AI Fluency Badge tied to the student's verifiable credential record.",
    bullets: [
      "Real-time AI tool adoption and workflow complexity dashboards",
      "Department-by-department fluency index with trend analysis",
      "Cryptographic 'AI Fluency Badge' issuance for student resumes",
      "Accreditation-ready learning outcome reports for institutional leadership",
      "Employer-verified placement tracking through the national consortium",
      "API-level integration with Canvas, Banner, and Slate for live data pulls",
    ],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Technical AI analytics workspace showing Sophrosyne Pulse dashboard",
  },
] as const;

export const PRICING_TIERS = [
  {
    name: "AI Readiness & Ecosystem Audit",
    price: "$5,000",
    suffix: "fixed fee",
    duration: "2 Weeks",
    model: "Discovery Sprint",
    description: "A comprehensive data silo review, curriculum gap analysis, and custom architectural integration blueprint for Sophrosyne Studio. The foundation before any build begins.",
    features: [
      "Full data architecture and LMS integration audit",
      "Curriculum gap analysis across all departments",
      "Custom Sophrosyne Studio integration blueprint",
      "AI opportunity matrix with prioritised roadmap",
      "Executive briefing and board-ready findings deck",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Foundry & Platform Launch",
    price: "$50,000",
    suffix: "one-time CapEx",
    duration: "4–8 Weeks",
    model: "Capital Expenditure",
    description: "Complete physical Foundry incubator setup, full Sophrosyne Studio infrastructure provisioning, Level 101–301 Curriculum Matrix deployment, and initial faculty onboarding.",
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
  },
  {
    name: "Institutional Scale Retainer & Platform License",
    price: "$15,000",
    suffix: "/month",
    duration: "Ongoing OpEx",
    model: "Software License + Strategy",
    description: "Continuous campus-wide Sophrosyne Studio license, curriculum updates, AI Fluency Index Dashboard hosting, and full compute resource pooling within the Intercollegiate Exchange Network.",
    features: [
      "Ongoing Sophrosyne Studio platform license",
      "Continuous curriculum updates and new level releases",
      "AI Fluency Index Dashboard — live student progression data",
      "Full Intercollegiate AI Exchange Network membership",
      "Pooled GPU compute credits across the consortium",
      "Dedicated strategic account team and quarterly reviews",
    ],
    highlighted: false,
    badge: null,
  },
] as const;

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
    name: "Dr. Amara Osei-Bonsu",
    title: "Principal Software Architect",
    bio: "Former Principal ML Engineer at a major research university. Designed FERPA-compliant data pipeline architecture for 50,000+ student record systems. Leads all Sophrosyne Studio infrastructure development.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Marcus Thorn",
    title: "Director of Academic Transformation",
    bio: "15 years driving AI curriculum strategy at Tier 1 institutions. Architect of the AI Fluency Matrix. Former Director of Institutional Research and the primary voice on the national consortium governance board.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Leila Nazari",
    title: "Consortium Ecosystem Lead",
    bio: "Builds and manages the Intercollegiate AI Exchange Network. Former Deputy Provost specialising in inter-institutional partnerships. Oversees all Foundry launches and ensures platform adoption across each new partner campus.",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
] as const;

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
