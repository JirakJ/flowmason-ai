export type Service = {
  slug: string;
  name: string;
  price: string;
  duration: string;
  purpose: string;
  bestFor: string[];
  includes: string[];
  outputs: string[];
};

export const nameMeaning = {
  title: "FlowMason means a builder of working flows.",
  body: "A mason does not sell bricks. A mason shapes raw material into something that holds. FlowMason AI does the same with messy product ideas, team knowledge, AI tools, prompts, code, tests and documentation: it turns them into workflows people can actually operate.",
};

export const services: Service[] = [
  {
    slug: "ai-delivery-audit",
    name: "AI Delivery Audit",
    price: "3,000 EUR",
    duration: "5-7 business days",
    purpose:
      "A paid diagnostic engagement that turns vague AI ambition into a practical delivery map, with risks, decisions and first builds clearly prioritized.",
    bestFor: [
      "Companies curious about AI but unsure where to start",
      "Founders who need a clear implementation roadmap",
      "Teams that want a serious business case before investing",
    ],
    includes: [
      "Discovery questionnaire",
      "90-minute working session",
      "Current delivery process review",
      "Bottleneck and risk assessment",
      "Prioritized build roadmap",
      "Commercial impact estimate",
    ],
    outputs: [
      "AI Delivery Opportunity Report",
      "Workflow map",
      "Top 5 automation candidates",
      "Implementation proposal",
    ],
  },
  {
    slug: "ai-prototype-sprint",
    name: "AI Prototype Sprint",
    price: "12,000 EUR",
    duration: "2 weeks",
    purpose:
      "Turn a business idea into a usable prototype that is documented well enough for investors, internal buy-in or the next implementation phase.",
    bestFor: [
      "Startup MVPs",
      "Internal tools",
      "SaaS ideas",
      "Client portals and dashboards",
    ],
    includes: [
      "Idea intake",
      "Product brief",
      "User flows",
      "Technical architecture",
      "Clickable or functional prototype",
      "Testing checklist",
    ],
    outputs: [
      "Working prototype",
      "Product specification",
      "Technical specification",
      "Architecture overview",
      "Feature backlog",
    ],
  },
  {
    slug: "development-acceleration",
    name: "AI Development Acceleration Setup",
    price: "25,000 EUR",
    duration: "3-4 weeks",
    purpose:
      "Install a practical AI-assisted development workflow inside an existing team without turning delivery into prompt chaos.",
    bestFor: [
      "Software companies",
      "SaaS teams",
      "Digital agencies",
      "Internal engineering teams",
    ],
    includes: [
      "Repository and workflow review",
      "Prompt and context design",
      "Development rules",
      "Review workflow",
      "Documentation standards",
      "Testing and validation gates",
    ],
    outputs: [
      "AI development operating model",
      "Reusable prompt library",
      "Specification templates",
      "Testing workflow",
      "Team onboarding session",
    ],
  },
  {
    slug: "custom-ai-agent-build",
    name: "Custom AI Agent Build",
    price: "From 15,000 EUR",
    duration: "Scoped by workflow complexity",
    purpose:
      "Build custom agents around one valuable workflow, with clear inputs, outputs, guardrails, owner responsibilities and failure paths.",
    bestFor: [
      "Operations-heavy companies",
      "Teams with manual research or reporting workflows",
      "Businesses that need reliable internal AI agents",
    ],
    includes: [
      "Workflow analysis",
      "Agent specification",
      "Input/output design",
      "Prompt architecture",
      "Tool and API integration",
      "Testing, logging and documentation",
    ],
    outputs: [
      "Functional AI agent",
      "Agent documentation",
      "Operating manual",
      "Error handling rules",
      "Improvement backlog",
    ],
  },
  {
    slug: "full-delivery-stream",
    name: "Full AI Delivery Stream Implementation",
    price: "60,000-150,000 EUR",
    duration: "6-12 weeks",
    purpose:
      "Rebuild the path from idea to shipped software so AI supports the whole delivery system instead of living in disconnected chats.",
    bestFor: [
      "Companies transforming product delivery",
      "Teams that need repeatable AI-assisted execution",
      "Leadership groups investing in delivery infrastructure",
    ],
    includes: [
      "Delivery process mapping",
      "Product intake workflow",
      "Specification workflow",
      "Prototyping workflow",
      "Development and testing workflow",
      "Documentation workflow",
      "Governance and validation gates",
    ],
    outputs: [
      "Complete AI Delivery Stream",
      "Internal AI operating model",
      "Custom templates and agents",
      "Documentation system",
      "Measurement framework",
    ],
  },
  {
    slug: "monthly-partner-retainer",
    name: "Monthly AI Delivery Partner",
    price: "From 15,000 EUR/month",
    duration: "Monthly partnership",
    purpose:
      "Ongoing delivery support for companies that want a senior outside operator to keep prototypes, agents and documentation moving.",
    bestFor: [
      "Growing startups",
      "Software teams after implementation",
      "Companies that want an external AI delivery partner",
    ],
    includes: [
      "Active workflow improvements",
      "Strategy calls",
      "Agent improvements",
      "Documentation pipeline maintenance",
      "Integration support",
      "Monthly executive reporting",
    ],
    outputs: [
      "Improved delivery workflows",
      "New prototypes or agents",
      "Maintained documentation system",
      "Updated AI roadmap",
      "Executive progress reports",
    ],
  },
];

export const processSteps = [
  {
    title: "Find the expensive bottleneck",
    body: "We start with where delivery actually slows down: unclear specs, repeated manual work, missing tests, poor handoff or overloaded experts.",
  },
  {
    title: "Design the operating path",
    body: "Before building, we define who gives input, what AI can do, what it must not do, and how outputs will be checked.",
  },
  {
    title: "Build the first usable system",
    body: "The first version is small on purpose: enough to prove value, expose edge cases and give your team something tangible.",
  },
  {
    title: "Stress-test the weak spots",
    body: "We test edge cases, business rules, bad inputs and handoff paths before pretending the workflow is reliable.",
  },
  {
    title: "Document the work, not the fantasy",
    body: "The output includes operating notes, decision rules, examples and next improvements so the system survives after handoff.",
  },
  {
    title: "Handoff or keep shipping",
    body: "You either take over a documented system or keep FlowMason AI involved as an outside delivery partner.",
  },
];

export const caseStudies = [
  {
    title: "A vague founder idea becomes a prototype a team can discuss",
    category: "Prototype Sprint",
    result:
      "A product brief, clickable workflow, implementation backlog and technical assumptions written plainly enough for non-technical stakeholders.",
  },
  {
    title: "A recurring research task becomes a reviewable agent workflow",
    category: "Agent Build",
    result:
      "A source collection, summarization and change-detection process with human review points where judgment matters.",
  },
  {
    title: "A product team stops losing context between specs and releases",
    category: "Development Acceleration",
    result:
      "A documentation workflow connected to specs, release notes, test notes and the decisions that explain why the system works that way.",
  },
  {
    title: "An engineering team gets a safer path from spec to implementation",
    category: "Delivery Stream",
    result:
      "A controlled path from product context to implementation, validation, documentation and improvement without hiding risk behind automation.",
  },
];

export const humanPrinciples = [
  {
    title: "Human judgment stays at the business edge",
    body: "AI can draft, compare, summarize and generate. It cannot decide what trade-off your company should make. Those decisions stay explicit.",
  },
  {
    title: "Every workflow has an owner",
    body: "A useful agent is not a magic bot. It has inputs, output quality standards, review rules, escalation paths and a person accountable for its use.",
  },
  {
    title: "Speed is not allowed to hide uncertainty",
    body: "Fast prototypes are useful only when assumptions, risks and missing pieces are visible. The work must make uncertainty easier to manage.",
  },
  {
    title: "Documentation is part of delivery",
    body: "If a team cannot understand, change or hand off the system, the delivery is not finished.",
  },
];

export const faqs = [
  {
    question: "Do you replace our developers?",
    answer:
      "No. FlowMason AI helps developers and product teams remove unclear specs, repeated manual work and missing context from the delivery path.",
  },
  {
    question: "Do you build custom AI agents?",
    answer:
      "Yes. We build custom agents for internal workflows, research, reporting, documentation, support, lead handling and software delivery.",
  },
  {
    question: "Do you work with non-technical founders?",
    answer:
      "Yes. The AI Prototype Sprint is designed for founders and companies that need to turn an idea into a structured, working prototype.",
  },
  {
    question: "Do you work internationally?",
    answer:
      "Yes. We work with companies in the United States, Canada, the United Kingdom, the European Union and the Czech Republic.",
  },
  {
    question: "Do you require long contracts?",
    answer:
      "No. We offer fixed-price projects and monthly retainers. The recommended path depends on the scope and required continuity.",
  },
  {
    question: "Why is pricing transparent?",
    answer:
      "Because serious companies should understand the level of investment before booking a call.",
  },
  {
    question: "What does FlowMason mean?",
    answer:
      "A mason shapes raw material into something stable. FlowMason AI shapes messy business flows, AI tools and team knowledge into working delivery systems.",
  },
  {
    question: "Why only 4 active companies per month?",
    answer:
      "Because the work requires deep focus. We prioritize quality, speed and strategic impact over volume.",
  },
];

export const partnerTiers = [
  {
    name: "Essential Partner",
    price: "15,000 EUR/month",
    fit: "Smaller companies after implementation.",
    includes: [
      "Up to 2 active workflows per month",
      "Monthly strategy call",
      "Async support",
      "Workflow and documentation improvements",
      "Lightweight agent maintenance",
      "Monthly progress report",
    ],
  },
  {
    name: "Growth Partner",
    price: "25,000 EUR/month",
    fit: "Growing startups and software teams.",
    includes: [
      "Up to 4 active workflows per month",
      "Bi-weekly strategy calls",
      "New prototype or workflow each month",
      "Agent improvements",
      "Integration support",
      "Monthly executive report",
    ],
  },
  {
    name: "Strategic Partner",
    price: "40,000 EUR/month",
    fit: "Companies that want FlowMason AI as an external AI delivery partner.",
    includes: [
      "Priority capacity",
      "Up to 8 active workflows per month",
      "Weekly strategy call",
      "New agent or prototype delivery every month",
      "Documentation system ownership",
      "AI roadmap ownership",
    ],
  },
];
