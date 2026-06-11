export const TRUST_METRICS = [
  { value: "Proprietary", label: "Studio & Pulse Architecture" },
  { value: "100%", label: "Student-Owned IP" },
  { value: "Real-Time", label: "Fluency Telemetry via Pulse" },
  { value: "Tamper-Proof", label: "Verified Employability Badges" },
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
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Developer environment with code on screen",
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
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students in a university learning environment",
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
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students collaborating in a campus workshop environment",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Analytics dashboard showing data visualisation",
  },
] as const;

export const PRICING_TIERS = [
  {
    name: "AI Readiness & Ecosystem Audit",
    price: "$3,500",
    suffix: "fixed fee",
    duration: "10 Business Days",
    model: "Discovery Sprint",
    description: "A comprehensive data silo review, curriculum gap analysis, and custom architectural integration blueprint for Sophrosyne Studio. Audit fee is fully credited toward your Platform Launch if you proceed within 90 days.",
    features: [
      "Full data architecture and LMS integration audit",
      "Curriculum gap analysis across all departments",
      "Custom Sophrosyne Studio integration blueprint",
      "AI opportunity matrix with prioritised savings roadmap",
      "Executive briefing and board-ready findings deck",
    ],
    highlighted: false,
    badge: null,
    grantEligible: true,
    perStudentNote: "~$0.30–$1.40 per enrolled student",
  },
  {
    name: "Foundry & Platform Launch",
    price: "$42,000",
    suffix: "one-time",
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
    perStudentNote: "~$14/student one-time at 3,000 enrollment",
  },
  {
    name: "Institutional Scale Retainer & Platform License",
    price: "$12,500",
    suffix: "/month",
    duration: "Ongoing OpEx",
    model: "Software License + Strategy",
    description: "One predictable monthly investment that consolidates platform licensing, curriculum updates, AI fluency tracking, and consortium compute — replacing the fragmented vendor stack most universities currently run.",
    features: [
      "Replaces LMS analytics add-ons, standalone AI tools, and separate training subscriptions",
      "Continuous curriculum updates and new level releases",
      "AI Fluency Index Dashboard — live student progression data",
      "Full Intercollegiate AI Exchange Network membership",
      "Pooled GPU compute credits across the consortium",
      "Dedicated strategic account team and quarterly reviews",
    ],
    highlighted: false,
    badge: "Most Popular for Year 2+",
    grantEligible: false,
    perStudentNote: "~$30/student/yr at 5,000 enrollment",
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
    bio: "15 years driving AI curriculum strategy at leading research universities. Architect of the AI Fluency Matrix. Former Director of Institutional Research and the primary voice on the national consortium governance board.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Leila Nazari",
    title: "Consortium Ecosystem Lead",
    bio: "Builds and manages the Intercollegiate AI Exchange Network. Former Deputy Provost specialising in inter-institutional partnerships. Oversees all Foundry launches and ensures platform adoption across each new partner campus.",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
] as const;

export type SolutionDetail = {
  slug: string;
  heroDescription: string;
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
        body: "A STEM-focused college used the Foundry to formalize its industry partnership programme. Employers now recruit directly from Foundry Demo Days rather than traditional career fairs.",
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
