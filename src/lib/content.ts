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

export const services: Service[] = [
  {
    slug: "ai-delivery-audit",
    name: "AI Delivery Audit",
    price: "3,000 EUR",
    duration: "5-7 business days",
    purpose:
      "A paid diagnostic engagement that identifies where AI can accelerate prototyping, development, testing, documentation and internal workflows.",
    bestFor: [
      "Companies curious about AI but unsure where to start",
      "Founders who need a clear implementation roadmap",
      "Teams that want a serious business case before investing",
    ],
    includes: [
      "Discovery questionnaire",
      "90-minute strategy call",
      "Current delivery process review",
      "AI readiness and risk assessment",
      "Prioritized roadmap",
      "ROI estimate",
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
      "Turn a business idea into a working, documented prototype with a clear next-step implementation path.",
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
      "Implement a structured AI-assisted development workflow inside an existing product or engineering team.",
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
      "Build custom AI agents for repetitive internal workflows, research, reporting, documentation, support or delivery operations.",
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
      "Build a complete AI-powered delivery system for companies that want AI as a strategic software delivery advantage.",
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
      "Ongoing AI delivery partnership for continuous prototyping, development acceleration, documentation improvement and agent evolution.",
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
    title: "AI Delivery Audit",
    body: "We identify the highest-value opportunities and the risks that need to be designed around.",
  },
  {
    title: "Workflow Design",
    body: "We design the delivery stream before building anything, including context, constraints and validation gates.",
  },
  {
    title: "Prototype or Agent Build",
    body: "We build the first working system with documented inputs, outputs and operating rules.",
  },
  {
    title: "Validation",
    body: "We test outputs, edge cases, business rules and handoff paths before treating the system as reliable.",
  },
  {
    title: "Documentation",
    body: "We document how the system works, how it should be used and how it should evolve.",
  },
  {
    title: "Handoff or Retainer",
    body: "You either receive the complete system or continue with a monthly AI Delivery Partner engagement.",
  },
];

export const caseStudies = [
  {
    title: "From business idea to documented prototype in 10 days",
    category: "Prototype Sprint",
    result:
      "A founder-ready product brief, clickable workflow, technical architecture and implementation backlog.",
  },
  {
    title: "Custom AI agent for automated competitor monitoring",
    category: "Agent Build",
    result:
      "A repeatable research workflow with source collection, summarization, change detection and review-ready outputs.",
  },
  {
    title: "AI documentation pipeline for product and engineering teams",
    category: "Development Acceleration",
    result:
      "A documentation workflow connected to specifications, release notes, testing notes and handoff requirements.",
  },
  {
    title: "AI delivery workflow from specification to validated implementation",
    category: "Delivery Stream",
    result:
      "A controlled path from product context to implementation, testing, documentation and continuous improvement.",
  },
];

export const faqs = [
  {
    question: "Do you replace our developers?",
    answer:
      "No. FlowMason AI builds systems that help your team move faster with better context, constraints, documentation and validation.",
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
