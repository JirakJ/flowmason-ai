import { absoluteUrl, siteConfig } from "@/lib/site";

type BlogSeed = {
  slug: string;
  title: string;
  description: string;
  category: string;
  audience: string;
  pain: string;
  promise: string;
  operatingMove: string;
  proofAsset: string;
  framework: "AIDA" | "PASTOR";
  keywords: string[];
};

export type BlogPost = BlogSeed & {
  publishedAt: string;
  author: string;
  readingTime: string;
};

export type ArticleSection = {
  heading: string;
  body: string;
};

const seeds: BlogSeed[] = [
  {
    slug: "ai-delivery-audit-before-custom-agent",
    title: "Do the AI delivery audit before you build the custom agent",
    description:
      "Why a paid audit prevents custom AI agents from becoming expensive prompt experiments.",
    category: "AI Delivery Audit",
    audience: "founders and operators considering their first custom AI agent",
    pain: "the team wants an agent but has not agreed on the workflow, owner or output standard",
    promise: "a short audit can decide whether the agent should be built, narrowed or postponed",
    operatingMove: "map the current workflow on one page before writing a single prompt",
    proofAsset: "workflow map, risk list and build/no-build recommendation",
    framework: "PASTOR",
    keywords: ["AI delivery audit", "custom AI agent", "workflow mapping"],
  },
  {
    slug: "prototype-that-engineering-can-inherit",
    title: "A prototype is only useful if engineering can inherit it",
    description:
      "How to design AI-assisted prototypes that do not collapse after the demo.",
    category: "Prototype Sprint",
    audience: "founders, product leads and engineering managers",
    pain: "the prototype looks convincing but hides assumptions, missing data and handoff risk",
    promise: "a prototype can become a decision asset instead of a throwaway demo",
    operatingMove: "ship the prototype with assumptions, test notes and an implementation backlog",
    proofAsset: "prototype brief, assumptions log and engineering handoff checklist",
    framework: "AIDA",
    keywords: ["AI prototype sprint", "prototype handoff", "MVP validation"],
  },
  {
    slug: "private-prompts-are-not-company-process",
    title: "Private prompts are not a company process",
    description:
      "The hidden cost of AI usage that lives inside personal chat histories.",
    category: "AI Operating Model",
    audience: "software teams already using AI informally",
    pain: "useful AI work is trapped in private tools and cannot be reviewed or reused",
    promise: "teams can keep speed while making prompts, context and decisions reusable",
    operatingMove: "turn repeated prompts into shared context templates with owners",
    proofAsset: "prompt library, context template and review rule",
    framework: "PASTOR",
    keywords: ["AI operating model", "prompt library", "AI workflow governance"],
  },
  {
    slug: "documentation-is-delivery-not-admin",
    title: "Documentation is delivery, not admin",
    description:
      "Why documentation must be built into AI-assisted software delivery instead of cleaned up later.",
    category: "Documentation",
    audience: "product and engineering teams with fast-changing systems",
    pain: "the team ships faster but loses the reasoning behind product and technical decisions",
    promise: "documentation can become a lightweight memory layer for the delivery flow",
    operatingMove: "document decisions, examples and validation notes while the work is still fresh",
    proofAsset: "decision log, release note draft and handoff page",
    framework: "AIDA",
    keywords: ["AI documentation pipeline", "software documentation", "decision log"],
  },
  {
    slug: "agent-owner-before-agent-builder",
    title: "Name the agent owner before you hire the agent builder",
    description:
      "A custom AI agent needs accountability before architecture.",
    category: "Custom Agents",
    audience: "operations teams and founders buying internal AI automation",
    pain: "nobody knows who will monitor the agent, judge quality or improve it after launch",
    promise: "a named owner turns an agent from novelty into an operated workflow",
    operatingMove: "assign ownership, review cadence and escalation rules during scoping",
    proofAsset: "agent operating manual and responsibility matrix",
    framework: "PASTOR",
    keywords: ["custom AI agent", "AI agent owner", "agent governance"],
  },
  {
    slug: "why-ai-generated-code-needs-delivery-rules",
    title: "AI-generated code needs delivery rules, not blind trust",
    description:
      "How engineering teams can use AI coding tools without losing architecture and review discipline.",
    category: "Development Acceleration",
    audience: "engineering managers and senior developers",
    pain: "AI helps developers move faster but increases inconsistency and review burden",
    promise: "delivery rules let the team keep speed without losing engineering judgment",
    operatingMove: "define architecture constraints, test expectations and review gates before generation",
    proofAsset: "development rules, review checklist and testing workflow",
    framework: "AIDA",
    keywords: ["AI development workflow", "AI generated code", "engineering standards"],
  },
  {
    slug: "use-ai-to-sharpen-specs-not-replace-product-thinking",
    title: "Use AI to sharpen specs, not replace product thinking",
    description:
      "A practical way to use AI in product specification without outsourcing judgment.",
    category: "Product Specification",
    audience: "founders and product managers",
    pain: "AI can produce long specs that still avoid the hard product decisions",
    promise: "better context turns AI into a spec challenger instead of a spec factory",
    operatingMove: "make AI ask for constraints, trade-offs and user evidence before drafting",
    proofAsset: "product brief, unanswered questions and decision log",
    framework: "PASTOR",
    keywords: ["AI product specification", "product brief", "AI product management"],
  },
  {
    slug: "competitor-monitoring-agent-with-human-review",
    title: "Build competitor monitoring agents with human review built in",
    description:
      "How to make AI competitor research useful without trusting summaries blindly.",
    category: "Research Agents",
    audience: "SaaS founders, agencies and strategy teams",
    pain: "competitor research is repetitive, but automated summaries can miss what matters",
    promise: "a reviewable agent can save time while keeping strategic interpretation human",
    operatingMove: "separate collection, summarization, change detection and human judgment",
    proofAsset: "source log, change digest and review checklist",
    framework: "AIDA",
    keywords: ["competitor monitoring agent", "AI research agent", "SaaS strategy"],
  },
  {
    slug: "ai-agent-failure-paths",
    title: "Every serious AI agent needs a failure path",
    description:
      "The difference between a demo agent and an operated workflow is what happens when it fails.",
    category: "Agent Operations",
    audience: "teams deploying AI agents into real business processes",
    pain: "the agent works in happy-path demos but has no plan for bad inputs or uncertain outputs",
    promise: "failure paths make agents safer to operate and easier to improve",
    operatingMove: "define reject, escalate, retry and human-review states before launch",
    proofAsset: "failure-path table and escalation rules",
    framework: "PASTOR",
    keywords: ["AI agent failure", "agent operations", "AI guardrails"],
  },
  {
    slug: "why-fixed-price-ai-projects-need-sharp-scope",
    title: "Fixed-price AI projects only work with sharp scope",
    description:
      "Why premium AI consulting should sell defined outcomes instead of open-ended experimentation.",
    category: "Consulting",
    audience: "buyers comparing AI consultants and agencies",
    pain: "the buyer wants certainty but the project is scoped like a research adventure",
    promise: "sharp scope protects budget, delivery quality and trust on both sides",
    operatingMove: "define the workflow, output standard and handoff asset before pricing",
    proofAsset: "scope memo, assumptions list and acceptance criteria",
    framework: "AIDA",
    keywords: ["AI consulting pricing", "fixed price AI project", "AI project scope"],
  },
  {
    slug: "ai-delivery-stream-for-non-technical-founders",
    title: "AI delivery streams for non-technical founders",
    description:
      "How founders can turn an idea into a buildable workflow without pretending to be engineers.",
    category: "Founder Delivery",
    audience: "non-technical founders preparing an MVP or internal tool",
    pain: "the founder can explain the business but cannot convert it into buildable product context",
    promise: "a delivery stream translates business intent into specs, prototypes and decisions",
    operatingMove: "capture user flow, business rules and edge cases before choosing tools",
    proofAsset: "founder brief, user flow and implementation roadmap",
    framework: "PASTOR",
    keywords: ["non technical founder MVP", "AI prototype", "product specification"],
  },
  {
    slug: "support-response-agent-quality-bar",
    title: "Set the quality bar before building a support response agent",
    description:
      "Support automation fails when nobody defines what a good answer looks like.",
    category: "Support Agents",
    audience: "B2B teams considering support automation",
    pain: "the agent answers quickly but tone, accuracy and escalation rules are inconsistent",
    promise: "a quality bar turns support automation into a controlled workflow",
    operatingMove: "define answer types, forbidden claims, escalation triggers and review samples",
    proofAsset: "support quality rubric and escalation matrix",
    framework: "AIDA",
    keywords: ["support response agent", "AI customer support", "support automation"],
  },
  {
    slug: "turn-meeting-notes-into-delivery-decisions",
    title: "Turn meeting notes into delivery decisions",
    description:
      "AI summaries are not enough; teams need decisions, owners and next actions.",
    category: "Documentation",
    audience: "product teams drowning in calls and async notes",
    pain: "meetings generate notes but not durable decisions or accountable next steps",
    promise: "AI can convert discussion into a delivery trail when the format is designed",
    operatingMove: "extract decisions, risks, owners and open questions from every important call",
    proofAsset: "decision summary and action register",
    framework: "PASTOR",
    keywords: ["AI meeting notes", "decision log", "delivery documentation"],
  },
  {
    slug: "agentic-workflows-need-input-design",
    title: "Agentic workflows start with input design",
    description:
      "Most agent failures begin before the model responds: with vague, inconsistent inputs.",
    category: "Workflow Design",
    audience: "teams building multi-step AI workflows",
    pain: "different users feed the agent different context and get unpredictable output",
    promise: "input design makes agent behavior easier to test and trust",
    operatingMove: "create input templates, required fields and examples before automation",
    proofAsset: "input schema and sample set",
    framework: "AIDA",
    keywords: ["agentic workflows", "AI input design", "AI workflow template"],
  },
  {
    slug: "ai-readiness-is-a-delivery-question",
    title: "AI readiness is a delivery question",
    description:
      "A company is ready for AI when its workflows, owners and data are clear enough to improve.",
    category: "AI Readiness",
    audience: "leadership teams evaluating AI adoption",
    pain: "leaders ask if the company is ready for AI but measure tools instead of workflow clarity",
    promise: "readiness becomes practical when it is tied to one delivery bottleneck",
    operatingMove: "score workflow clarity, data access, ownership and review maturity",
    proofAsset: "AI readiness scorecard",
    framework: "PASTOR",
    keywords: ["AI readiness assessment", "AI adoption", "workflow maturity"],
  },
  {
    slug: "why-ai-roadmaps-fail-without-operating-model",
    title: "AI roadmaps fail without an operating model",
    description:
      "A list of AI ideas is not a plan until someone defines how work will move.",
    category: "AI Strategy",
    audience: "executives and product leaders",
    pain: "the roadmap contains promising use cases but no delivery mechanism",
    promise: "an operating model turns AI ideas into sequenced, owned work",
    operatingMove: "rank use cases by value, feasibility, ownership and validation burden",
    proofAsset: "prioritized roadmap and operating cadence",
    framework: "AIDA",
    keywords: ["AI roadmap", "AI operating model", "AI strategy"],
  },
  {
    slug: "internal-tools-are-perfect-ai-prototype-ground",
    title: "Internal tools are the best place to prototype AI delivery",
    description:
      "Why internal workflows are often safer and more valuable than customer-facing AI experiments.",
    category: "Internal Tools",
    audience: "operations-heavy companies and internal product teams",
    pain: "customer-facing AI feels risky while internal manual work keeps draining time",
    promise: "internal tools can prove AI delivery value with lower brand and compliance risk",
    operatingMove: "choose one repetitive internal workflow with clear reviewable output",
    proofAsset: "internal tool prototype and validation checklist",
    framework: "PASTOR",
    keywords: ["AI internal tools", "workflow automation", "AI prototype"],
  },
  {
    slug: "build-vs-buy-custom-ai-agent",
    title: "Build vs buy: when a custom AI agent makes sense",
    description:
      "A practical filter for deciding whether to buy software, configure automation or build a custom agent.",
    category: "Custom Agents",
    audience: "buyers evaluating AI tools and custom development",
    pain: "the team jumps to custom build before checking simpler options",
    promise: "a decision filter saves budget and keeps custom work for genuinely custom workflows",
    operatingMove: "compare workflow uniqueness, integration needs, risk and expected reuse",
    proofAsset: "build-vs-buy decision matrix",
    framework: "AIDA",
    keywords: ["build vs buy AI", "custom AI agent", "AI automation tools"],
  },
  {
    slug: "agent-dashboards-are-not-monitoring",
    title: "Agent dashboards are not monitoring",
    description:
      "What teams should actually track when an AI agent runs inside a business workflow.",
    category: "Agent Operations",
    audience: "teams operating agents after launch",
    pain: "the dashboard shows activity but not whether the agent is producing useful work",
    promise: "monitoring becomes useful when tied to quality, exceptions and business outcomes",
    operatingMove: "track rejected outputs, escalations, review changes and time saved",
    proofAsset: "agent monitoring scorecard",
    framework: "PASTOR",
    keywords: ["AI agent monitoring", "agent dashboard", "AI operations"],
  },
  {
    slug: "how-to-scope-ai-documentation-pipeline",
    title: "How to scope an AI documentation pipeline",
    description:
      "The minimum useful documentation pipeline for teams that ship fast and forget why.",
    category: "Documentation",
    audience: "engineering and product teams with weak documentation habits",
    pain: "documentation is always postponed because it is scoped as a separate project",
    promise: "a small pipeline can capture decisions and release context without slowing delivery",
    operatingMove: "connect specs, code changes, tests and release notes into one lightweight flow",
    proofAsset: "documentation pipeline map",
    framework: "AIDA",
    keywords: ["AI documentation pipeline", "release notes automation", "engineering documentation"],
  },
  {
    slug: "validate-ai-output-like-product-work",
    title: "Validate AI output like product work",
    description:
      "AI validation should test usefulness, risk and fit, not just factual accuracy.",
    category: "Validation",
    audience: "product and operations teams using AI-generated outputs",
    pain: "the team checks whether output looks plausible but not whether it works in context",
    promise: "validation improves trust when it matches the job the output must perform",
    operatingMove: "test output against user intent, edge cases, policy and handoff needs",
    proofAsset: "AI output validation checklist",
    framework: "PASTOR",
    keywords: ["AI output validation", "AI quality assurance", "validation checklist"],
  },
  {
    slug: "ai-prototype-sprint-what-to-include",
    title: "What an AI prototype sprint should include",
    description:
      "The deliverables that make a two-week AI prototype useful after the sprint ends.",
    category: "Prototype Sprint",
    audience: "founders and teams planning a prototype sprint",
    pain: "sprints produce screens but not enough context to decide what should happen next",
    promise: "the right deliverables make a prototype useful for funding, buy-in or build planning",
    operatingMove: "include product brief, flows, assumptions, tech notes and next-step backlog",
    proofAsset: "prototype sprint deliverable list",
    framework: "AIDA",
    keywords: ["AI prototype sprint", "prototype deliverables", "MVP sprint"],
  },
  {
    slug: "crm-enrichment-agent-with-source-discipline",
    title: "CRM enrichment agents need source discipline",
    description:
      "How to avoid filling your CRM with confident but unverifiable AI-generated data.",
    category: "Sales Operations",
    audience: "B2B sales and operations teams",
    pain: "enrichment looks useful until the team cannot tell where data came from",
    promise: "source discipline lets AI enrich records without damaging trust",
    operatingMove: "require citations, confidence levels and review states for enriched fields",
    proofAsset: "CRM enrichment rules and source log",
    framework: "PASTOR",
    keywords: ["CRM enrichment agent", "AI sales operations", "data quality"],
  },
  {
    slug: "ai-for-agencies-client-delivery",
    title: "AI for agencies should improve client delivery, not just content volume",
    description:
      "Where agencies can use AI to make scopes, handoffs and delivery quality stronger.",
    category: "Agency Delivery",
    audience: "digital agencies and service businesses",
    pain: "AI increases production volume but client delivery still depends on scattered context",
    promise: "agency AI works best when it improves briefs, review cycles and handoff quality",
    operatingMove: "turn repeated client delivery steps into reusable AI-assisted workflows",
    proofAsset: "agency delivery workflow template",
    framework: "AIDA",
    keywords: ["AI for agencies", "agency delivery workflow", "client delivery automation"],
  },
  {
    slug: "technical-specs-need-business-context",
    title: "Technical specs need business context",
    description:
      "Why AI-assisted technical planning fails when business rules are missing.",
    category: "Technical Specification",
    audience: "technical leads and founders",
    pain: "technical specs describe implementation but miss the business logic that drives decisions",
    promise: "business context makes technical work easier to generate, review and test",
    operatingMove: "attach business rules, user stories and edge cases to technical planning",
    proofAsset: "business-context appendix for technical specs",
    framework: "PASTOR",
    keywords: ["technical specification", "business rules", "AI software development"],
  },
  {
    slug: "ai-agent-security-starts-with-scope",
    title: "AI agent security starts with scope",
    description:
      "The safest AI agent is often the one with fewer permissions and a clearer job.",
    category: "Security",
    audience: "teams planning internal agents with tool access",
    pain: "the agent is granted broad access before the team understands the workflow risk",
    promise: "tight scope reduces security risk and makes agent behavior easier to validate",
    operatingMove: "limit data access, tool permissions and action authority by workflow step",
    proofAsset: "agent permission matrix",
    framework: "AIDA",
    keywords: ["AI agent security", "agent permissions", "AI risk management"],
  },
  {
    slug: "from-ai-idea-to-implementation-brief",
    title: "From AI idea to implementation brief",
    description:
      "A simple structure for converting an AI opportunity into something a team can estimate.",
    category: "Implementation",
    audience: "leaders turning AI ideas into funded projects",
    pain: "the idea sounds valuable but cannot be estimated because the workflow is fuzzy",
    promise: "an implementation brief gives buyers and builders the same starting point",
    operatingMove: "define problem, users, inputs, outputs, integrations, risks and acceptance criteria",
    proofAsset: "implementation brief",
    framework: "PASTOR",
    keywords: ["AI implementation brief", "AI project planning", "AI consulting"],
  },
  {
    slug: "testing-ai-assisted-software-delivery",
    title: "Testing belongs inside AI-assisted delivery",
    description:
      "Why teams should define tests before using AI to generate implementation work.",
    category: "Testing",
    audience: "engineering teams accelerating development with AI",
    pain: "AI-generated implementation arrives faster than the team can validate it",
    promise: "test-first delivery keeps speed from becoming rework",
    operatingMove: "write acceptance checks and regression cases before generation starts",
    proofAsset: "test plan and acceptance checklist",
    framework: "AIDA",
    keywords: ["AI software testing", "AI-assisted development", "acceptance tests"],
  },
  {
    slug: "why-small-ai-engagements-should-be-paid",
    title: "Why small AI engagements should still be paid",
    description:
      "Free discovery creates vague advice; paid audits create usable decisions.",
    category: "Consulting",
    audience: "buyers and consultants scoping AI projects",
    pain: "free calls produce ideas but not enough work to make a responsible recommendation",
    promise: "a paid diagnostic creates the context needed for honest scoping",
    operatingMove: "treat the first engagement as a deliverable, not a sales call",
    proofAsset: "diagnostic report and fixed-price proposal",
    framework: "PASTOR",
    keywords: ["AI delivery audit", "paid discovery", "AI consulting"],
  },
  {
    slug: "ai-agents-for-report-generation",
    title: "Report generation agents need editorial rules",
    description:
      "How to make AI-generated reports useful without losing voice, structure or accountability.",
    category: "Reporting Agents",
    audience: "teams producing recurring internal or client reports",
    pain: "reports take too long, but automated drafts sound generic and miss context",
    promise: "editorial rules let AI handle drafting while humans protect judgment and voice",
    operatingMove: "define report sections, evidence rules, tone and human review points",
    proofAsset: "report template and editorial rubric",
    framework: "AIDA",
    keywords: ["AI report generation", "report automation", "AI editorial workflow"],
  },
  {
    slug: "custom-agent-vs-automation-script",
    title: "Do you need a custom agent or just an automation script?",
    description:
      "A practical distinction that saves budget and complexity.",
    category: "Automation",
    audience: "operators deciding how to automate repetitive work",
    pain: "the team calls every automation idea an agent and overcomplicates the solution",
    promise: "the right distinction leads to cheaper, safer and more maintainable builds",
    operatingMove: "use agents for judgment-heavy workflows and scripts for deterministic steps",
    proofAsset: "agent-or-script decision table",
    framework: "PASTOR",
    keywords: ["custom AI agent", "workflow automation", "automation script"],
  },
  {
    slug: "founder-led-ai-consulting-positioning",
    title: "Founder-led AI consulting needs a sharper point of view",
    description:
      "Why buyers respond to specific delivery thinking more than broad AI capability claims.",
    category: "Positioning",
    audience: "consultants and founder-led service businesses",
    pain: "the website says it can do AI but does not explain a concrete buying trigger",
    promise: "positioning around one painful workflow makes the offer easier to trust",
    operatingMove: "write for the buyer's moment of pain, not the provider's tool list",
    proofAsset: "positioning memo and offer page outline",
    framework: "AIDA",
    keywords: ["AI consulting positioning", "founder-led consulting", "B2B positioning"],
  },
  {
    slug: "ai-delivery-metrics-that-matter",
    title: "AI delivery metrics that actually matter",
    description:
      "Measure less hype and more throughput, quality, reuse and handoff strength.",
    category: "Measurement",
    audience: "leaders evaluating AI delivery investments",
    pain: "the company tracks AI usage but cannot tell whether delivery improved",
    promise: "better metrics connect AI work to speed, quality and operational leverage",
    operatingMove: "measure cycle time, rework, reusable artifacts, review load and handoff quality",
    proofAsset: "AI delivery scorecard",
    framework: "PASTOR",
    keywords: ["AI delivery metrics", "AI ROI", "delivery scorecard"],
  },
  {
    slug: "knowledge-base-agent-without-clean-knowledge",
    title: "Do not build a knowledge-base agent before cleaning the knowledge",
    description:
      "Retrieval does not fix messy source material; it exposes it.",
    category: "Knowledge Agents",
    audience: "teams planning internal knowledge assistants",
    pain: "the knowledge base is outdated, duplicated and full of conflicting answers",
    promise: "cleaning source quality makes the agent useful and easier to trust",
    operatingMove: "audit source freshness, authority and conflicts before connecting retrieval",
    proofAsset: "knowledge source inventory",
    framework: "AIDA",
    keywords: ["knowledge base agent", "RAG quality", "AI knowledge management"],
  },
  {
    slug: "ai-handoff-checklist",
    title: "The AI project handoff checklist",
    description:
      "What buyers should receive before an AI prototype, agent or workflow is considered done.",
    category: "Handoff",
    audience: "buyers accepting AI project deliverables",
    pain: "the vendor says the project is done but the team cannot operate or improve it",
    promise: "a handoff checklist protects the buyer from orphaned AI work",
    operatingMove: "require operating notes, examples, risks, tests, owners and next improvements",
    proofAsset: "AI handoff checklist",
    framework: "PASTOR",
    keywords: ["AI project handoff", "custom AI agent documentation", "AI implementation"],
  },
  {
    slug: "why-ai-workflows-need-examples",
    title: "AI workflows need examples more than instructions",
    description:
      "Good examples make AI outputs more consistent and easier for humans to review.",
    category: "Workflow Design",
    audience: "teams designing reusable AI workflows",
    pain: "instructions are technically correct but outputs still vary too much",
    promise: "example-driven workflows improve consistency and review speed",
    operatingMove: "collect accepted, rejected and borderline examples for each output type",
    proofAsset: "example library",
    framework: "AIDA",
    keywords: ["AI workflow examples", "prompt examples", "AI output consistency"],
  },
  {
    slug: "ai-for-client-portals",
    title: "Where AI belongs in client portals",
    description:
      "A grounded view of AI features that help client portals instead of cluttering them.",
    category: "Product Strategy",
    audience: "agencies and SaaS teams building client portals",
    pain: "the team wants an AI feature but cannot explain what client work it improves",
    promise: "AI becomes useful when tied to status, documentation, reporting or next actions",
    operatingMove: "map client questions and repeated handoff moments before feature design",
    proofAsset: "client portal AI feature brief",
    framework: "PASTOR",
    keywords: ["AI client portal", "SaaS AI features", "client reporting"],
  },
  {
    slug: "custom-agent-data-source-map",
    title: "Map data sources before building the custom agent",
    description:
      "The data source map is the difference between a reliable agent and a guessing machine.",
    category: "Custom Agents",
    audience: "teams connecting agents to internal systems",
    pain: "the agent is expected to answer questions without a clear source hierarchy",
    promise: "a source map improves accuracy, trust and debugging",
    operatingMove: "rank systems by authority, freshness, access and review requirements",
    proofAsset: "data source map",
    framework: "AIDA",
    keywords: ["custom AI agent data", "AI data sources", "agent source mapping"],
  },
  {
    slug: "ai-delivery-for-saas-teams",
    title: "AI delivery for SaaS teams should start near the roadmap",
    description:
      "How SaaS companies can use AI to improve product delivery before adding flashy AI features.",
    category: "SaaS",
    audience: "SaaS founders and product teams",
    pain: "AI feature ideas distract from roadmap execution and internal delivery problems",
    promise: "AI can improve specification, validation and documentation around roadmap work",
    operatingMove: "choose one roadmap item and build an AI-assisted delivery stream around it",
    proofAsset: "roadmap delivery workflow",
    framework: "PASTOR",
    keywords: ["AI for SaaS", "SaaS product delivery", "AI roadmap"],
  },
  {
    slug: "workflow-map-before-tool-selection",
    title: "Map the workflow before choosing the AI tool",
    description:
      "Tool selection gets easier when the work is already understood.",
    category: "Tooling",
    audience: "teams comparing AI platforms and automation tools",
    pain: "the team evaluates tools before agreeing on the job the tool must perform",
    promise: "a workflow map turns tool selection into a requirements discussion",
    operatingMove: "define inputs, outputs, review needs, integrations and failure states first",
    proofAsset: "tool requirements brief",
    framework: "AIDA",
    keywords: ["AI tool selection", "workflow mapping", "AI requirements"],
  },
  {
    slug: "ai-agents-and-human-escalation",
    title: "Human escalation is a feature, not a failure",
    description:
      "Why serious AI agents should know when to stop and ask for help.",
    category: "Agent Operations",
    audience: "teams deploying agents in operational workflows",
    pain: "the agent is judged by autonomy instead of safe, useful completion",
    promise: "escalation improves trust and keeps edge cases from becoming silent failures",
    operatingMove: "define escalation triggers and the information humans need to decide",
    proofAsset: "human escalation protocol",
    framework: "PASTOR",
    keywords: ["AI agent escalation", "human in the loop", "AI agent safety"],
  },
  {
    slug: "ai-delivery-stream-vs-ai-consulting",
    title: "AI delivery stream vs generic AI consulting",
    description:
      "The difference between advice about AI and a working system around delivery.",
    category: "AI Consulting",
    audience: "buyers choosing between AI consultants",
    pain: "generic consulting produces recommendations but not an operating path",
    promise: "delivery stream work creates artifacts, workflows and ownership",
    operatingMove: "buy the path from input to output, not just the strategy session",
    proofAsset: "delivery stream blueprint",
    framework: "AIDA",
    keywords: ["AI delivery stream", "AI consulting", "AI implementation"],
  },
  {
    slug: "lead-research-agent-with-quality-controls",
    title: "Lead research agents need quality controls",
    description:
      "How to automate lead research without polluting outbound with bad assumptions.",
    category: "Sales Agents",
    audience: "B2B founders and sales teams",
    pain: "automated research creates confident personalization that is not actually true",
    promise: "quality controls let AI support outbound without damaging trust",
    operatingMove: "require source links, confidence labels and human approval for claims",
    proofAsset: "lead research quality rubric",
    framework: "PASTOR",
    keywords: ["lead research agent", "AI outbound", "sales automation"],
  },
  {
    slug: "ai-agent-maintenance-is-real-work",
    title: "AI agent maintenance is real work",
    description:
      "Agents drift as products, policies and data change; maintenance must be part of the plan.",
    category: "Agent Operations",
    audience: "companies budgeting custom agent work",
    pain: "the agent is treated as finished even though the business keeps changing",
    promise: "planned maintenance keeps agents accurate, useful and safe over time",
    operatingMove: "schedule review cycles for prompts, examples, sources, metrics and failures",
    proofAsset: "agent maintenance plan",
    framework: "AIDA",
    keywords: ["AI agent maintenance", "agent operations", "custom AI agent"],
  },
  {
    slug: "prototype-sprint-for-investor-conversations",
    title: "Use a prototype sprint to improve investor conversations",
    description:
      "A good prototype helps investors see the product logic, not just the interface.",
    category: "Founder Delivery",
    audience: "founders preparing fundraising or stakeholder buy-in",
    pain: "the pitch explains a product that stakeholders cannot yet picture or challenge",
    promise: "a prototype plus brief makes the business and product assumptions easier to discuss",
    operatingMove: "prototype the core flow and document what is proven, assumed and still unknown",
    proofAsset: "investor prototype pack",
    framework: "PASTOR",
    keywords: ["prototype for investors", "AI prototype sprint", "startup MVP"],
  },
  {
    slug: "ai-workflow-review-cadence",
    title: "Set a review cadence for AI workflows",
    description:
      "AI workflows need regular inspection because business context changes.",
    category: "Operations",
    audience: "teams running AI-assisted internal processes",
    pain: "the workflow is launched once and slowly becomes stale or risky",
    promise: "a review cadence catches drift before users lose trust",
    operatingMove: "review quality samples, edge cases, source changes and owner feedback monthly",
    proofAsset: "workflow review agenda",
    framework: "AIDA",
    keywords: ["AI workflow review", "AI operations", "workflow governance"],
  },
  {
    slug: "ai-does-not-fix-unclear-ownership",
    title: "AI does not fix unclear ownership",
    description:
      "If nobody owns the workflow now, an AI agent will not magically create accountability.",
    category: "Human Aspect",
    audience: "leaders sponsoring AI automation",
    pain: "the company expects automation to solve a workflow nobody is responsible for",
    promise: "ownership design makes automation more likely to stick",
    operatingMove: "name workflow owner, reviewer, escalation owner and improvement owner",
    proofAsset: "ownership map",
    framework: "PASTOR",
    keywords: ["AI workflow ownership", "AI accountability", "AI governance"],
  },
  {
    slug: "custom-agent-acceptance-criteria",
    title: "Acceptance criteria for a custom AI agent",
    description:
      "What to define before deciding that a custom agent is ready to use.",
    category: "Custom Agents",
    audience: "buyers accepting agent deliverables",
    pain: "the agent works sometimes, but nobody knows what good enough means",
    promise: "acceptance criteria make quality visible before launch",
    operatingMove: "define accuracy, tone, source use, escalation and business outcome criteria",
    proofAsset: "agent acceptance checklist",
    framework: "AIDA",
    keywords: ["AI agent acceptance criteria", "custom AI agent testing", "AI QA"],
  },
  {
    slug: "ai-assisted-release-notes",
    title: "AI-assisted release notes should explain decisions",
    description:
      "Release notes become more useful when they capture why changes happened, not only what changed.",
    category: "Documentation",
    audience: "product and engineering teams",
    pain: "release notes are generated quickly but lack context users and teams actually need",
    promise: "AI can draft release notes that carry product decisions forward",
    operatingMove: "connect tickets, commits, tests and product rationale before drafting",
    proofAsset: "release note workflow",
    framework: "PASTOR",
    keywords: ["AI release notes", "product documentation", "release documentation"],
  },
  {
    slug: "ai-delivery-partner-retainer-fit",
    title: "When an AI delivery partner retainer makes sense",
    description:
      "The signs that a company needs ongoing AI delivery support instead of a one-off project.",
    category: "Retainers",
    audience: "companies considering ongoing AI implementation help",
    pain: "the company has more valuable workflows than internal capacity to design and improve them",
    promise: "a retainer can create continuity across prototypes, agents, documentation and delivery",
    operatingMove: "reserve retainer capacity for recurring workflows and monthly improvement cycles",
    proofAsset: "monthly delivery roadmap",
    framework: "AIDA",
    keywords: ["AI delivery retainer", "AI implementation partner", "AI consulting retainer"],
  },
  {
    slug: "ai-agent-pilot-scope",
    title: "Scope the AI agent pilot smaller than feels comfortable",
    description:
      "Why a narrow pilot produces better evidence than a broad agent experiment.",
    category: "Custom Agents",
    audience: "teams planning their first internal agent pilot",
    pain: "the pilot tries to cover too many cases and cannot prove anything clearly",
    promise: "a smaller pilot creates better evidence and faster learning",
    operatingMove: "choose one user, one workflow, one output and one review path",
    proofAsset: "agent pilot brief",
    framework: "PASTOR",
    keywords: ["AI agent pilot", "custom AI agent", "AI pilot scope"],
  },
  {
    slug: "ai-and-operational-memory",
    title: "AI is only useful if operational memory improves",
    description:
      "The best AI workflows make company knowledge easier to reuse.",
    category: "Knowledge Work",
    audience: "teams losing context across projects and handoffs",
    pain: "AI speeds up tasks but the company keeps forgetting what it learned",
    promise: "operational memory turns one-off AI work into compounding advantage",
    operatingMove: "save decisions, examples, templates and review notes after each workflow run",
    proofAsset: "operational memory library",
    framework: "AIDA",
    keywords: ["operational memory", "AI knowledge workflow", "AI documentation"],
  },
  {
    slug: "ai-for-manual-reporting-workflows",
    title: "Manual reporting is a strong AI workflow candidate",
    description:
      "How to identify reporting workflows that are worth automating with AI support.",
    category: "Reporting Agents",
    audience: "operations, finance and client service teams",
    pain: "reports take hours because data collection, interpretation and writing are mixed together",
    promise: "separating the workflow reveals which parts AI can safely accelerate",
    operatingMove: "split reporting into data gathering, analysis, drafting, review and delivery",
    proofAsset: "reporting workflow map",
    framework: "PASTOR",
    keywords: ["manual reporting automation", "AI reporting", "workflow automation"],
  },
  {
    slug: "why-ai-projects-need-a-stop-rule",
    title: "AI projects need a stop rule",
    description:
      "A stop rule protects teams from endless experimentation without delivery evidence.",
    category: "Project Governance",
    audience: "leaders sponsoring AI pilots and prototypes",
    pain: "the project keeps expanding because every demo reveals another possibility",
    promise: "a stop rule creates discipline and forces evidence-based decisions",
    operatingMove: "define what evidence will trigger build, pause, narrow or stop decisions",
    proofAsset: "pilot decision rule",
    framework: "AIDA",
    keywords: ["AI pilot governance", "AI project management", "AI experimentation"],
  },
  {
    slug: "agent-workflows-for-recruiting-support",
    title: "Recruiting support agents need careful boundaries",
    description:
      "Where AI can support recruiting workflows without making sensitive decisions for humans.",
    category: "Recruiting Agents",
    audience: "teams considering AI support in hiring operations",
    pain: "recruiting is time-consuming but automation can create fairness and judgment risks",
    promise: "AI can help with summaries and coordination while humans keep evaluative decisions",
    operatingMove: "limit the agent to administrative support, evidence organization and handoff notes",
    proofAsset: "recruiting agent boundary document",
    framework: "PASTOR",
    keywords: ["AI recruiting agent", "recruiting automation", "AI hiring workflow"],
  },
  {
    slug: "ai-prototype-to-production-gap",
    title: "The gap between AI prototype and production is mostly workflow",
    description:
      "Why prototypes stall when ownership, validation and documentation are missing.",
    category: "Prototype Sprint",
    audience: "teams trying to move AI prototypes toward production",
    pain: "the prototype works in a controlled demo but cannot survive production questions",
    promise: "workflow design closes the gap before engineering effort is wasted",
    operatingMove: "define owners, data, tests, failure paths and handoff notes after prototype validation",
    proofAsset: "prototype-to-production checklist",
    framework: "AIDA",
    keywords: ["AI prototype production", "prototype validation", "AI delivery"],
  },
  {
    slug: "ai-delivery-for-founder-led-companies",
    title: "Founder-led companies need AI delivery, not AI noise",
    description:
      "How founder-led teams can use AI without scattering attention across tools and experiments.",
    category: "Founder Delivery",
    audience: "founder-led companies with small teams",
    pain: "the founder sees many AI opportunities but the team lacks capacity to structure them",
    promise: "delivery discipline turns AI curiosity into a small number of valuable systems",
    operatingMove: "choose the workflow closest to revenue, delivery quality or founder time",
    proofAsset: "founder AI opportunity map",
    framework: "PASTOR",
    keywords: ["founder-led AI", "AI delivery consulting", "AI workflow"],
  },
  {
    slug: "ai-agent-logs-should-teach-you",
    title: "AI agent logs should teach you how the workflow fails",
    description:
      "Logging is not only debugging; it is how teams learn what to improve.",
    category: "Agent Operations",
    audience: "teams maintaining internal agents",
    pain: "logs exist but nobody uses them to improve prompts, examples or workflow rules",
    promise: "learning-oriented logs turn failures into a roadmap",
    operatingMove: "log input type, output verdict, review changes, escalation reason and next fix",
    proofAsset: "agent learning log",
    framework: "AIDA",
    keywords: ["AI agent logs", "agent improvement", "AI operations"],
  },
  {
    slug: "ai-assisted-backlog-refinement",
    title: "AI-assisted backlog refinement needs product constraints",
    description:
      "AI can organize backlog items, but only humans can set product trade-offs.",
    category: "Product Delivery",
    audience: "product managers and SaaS teams",
    pain: "AI creates cleaner tickets but still misses priority, sequencing and strategic trade-offs",
    promise: "constraints make AI backlog support more useful and less generic",
    operatingMove: "feed goals, non-goals, user evidence and technical constraints into refinement",
    proofAsset: "backlog refinement prompt and decision notes",
    framework: "PASTOR",
    keywords: ["AI backlog refinement", "product management AI", "AI product delivery"],
  },
  {
    slug: "ai-delivery-systems-beat-prompt-libraries",
    title: "Delivery systems beat prompt libraries",
    description:
      "Prompt libraries help, but they are not enough to make AI work repeatable.",
    category: "AI Operating Model",
    audience: "teams formalizing AI usage",
    pain: "the company collects prompts but does not connect them to workflows, owners or outcomes",
    promise: "delivery systems make AI usage repeatable because they include context and review",
    operatingMove: "wrap prompts with input rules, examples, output standards and owner cadence",
    proofAsset: "AI delivery system template",
    framework: "AIDA",
    keywords: ["prompt library", "AI delivery system", "AI operating model"],
  },
  {
    slug: "ai-agent-output-standards",
    title: "Write output standards before agent prompts",
    description:
      "If you cannot describe a good output, you cannot judge whether the agent works.",
    category: "Custom Agents",
    audience: "teams specifying AI agents",
    pain: "the prompt is detailed but the team has no shared definition of acceptable output",
    promise: "output standards make prompting, testing and review much easier",
    operatingMove: "write accepted examples, rejected examples and quality criteria first",
    proofAsset: "output standard document",
    framework: "PASTOR",
    keywords: ["AI output standards", "custom AI agent", "prompt engineering"],
  },
  {
    slug: "ai-integration-workflow-before-api",
    title: "Design the integration workflow before touching the API",
    description:
      "AI integrations fail when tool calls are designed before business states.",
    category: "Integrations",
    audience: "teams connecting agents to SaaS tools and internal systems",
    pain: "the technical integration works but the business process around it is unclear",
    promise: "workflow-first integration reduces rework and unsafe automation",
    operatingMove: "define business states, permissions and review points before API design",
    proofAsset: "integration workflow diagram",
    framework: "AIDA",
    keywords: ["AI integration", "agent tool use", "workflow automation"],
  },
  {
    slug: "ai-delivery-audit-red-flags",
    title: "Red flags in an AI delivery audit",
    description:
      "The signs that a workflow is not ready for automation yet.",
    category: "AI Delivery Audit",
    audience: "buyers preparing for AI automation work",
    pain: "the company wants automation before clarifying rules, sources and ownership",
    promise: "red flags help teams avoid building the wrong thing too early",
    operatingMove: "look for unclear owners, conflicting sources, no quality bar and no escalation path",
    proofAsset: "audit red-flag checklist",
    framework: "PASTOR",
    keywords: ["AI delivery audit", "AI automation readiness", "AI workflow risk"],
  },
  {
    slug: "ai-workflows-for-client-reporting",
    title: "Client reporting is a delivery workflow, not a document",
    description:
      "How AI can improve client reporting when the workflow is designed around decisions.",
    category: "Client Delivery",
    audience: "agencies and B2B service firms",
    pain: "reports are produced every month but clients still ask what changed and what to do next",
    promise: "AI-supported reporting can make evidence, interpretation and next actions clearer",
    operatingMove: "structure reports around change, meaning, recommendation and owner",
    proofAsset: "client reporting workflow",
    framework: "AIDA",
    keywords: ["client reporting AI", "agency reporting", "AI report workflow"],
  },
  {
    slug: "ai-delivery-after-the-first-agent",
    title: "What to do after the first AI agent works",
    description:
      "The next step is not more agents; it is operating discipline.",
    category: "Agent Operations",
    audience: "teams with a first successful internal agent",
    pain: "the first agent creates excitement and pressure to automate everything",
    promise: "operating discipline lets success compound instead of sprawl",
    operatingMove: "stabilize ownership, metrics, maintenance and reusable patterns before expanding",
    proofAsset: "post-agent operating plan",
    framework: "PASTOR",
    keywords: ["AI agent operations", "AI automation strategy", "custom AI agents"],
  },
  {
    slug: "ai-delivery-stream-executive-summary",
    title: "What executives should see in an AI delivery stream",
    description:
      "Executives need decisions, risk and leverage, not implementation noise.",
    category: "Executive Reporting",
    audience: "leadership teams sponsoring AI delivery work",
    pain: "updates are either too technical or too vague to guide decisions",
    promise: "the right executive summary keeps AI work tied to business choices",
    operatingMove: "report workflow value, risks, decisions needed, progress and next build options",
    proofAsset: "executive summary template",
    framework: "AIDA",
    keywords: ["AI executive summary", "AI delivery reporting", "AI transformation"],
  },
  {
    slug: "ai-workflows-need-non-goals",
    title: "AI workflows need non-goals",
    description:
      "Defining what the workflow will not do is one of the fastest ways to make it safer.",
    category: "Workflow Design",
    audience: "teams scoping AI workflows and agents",
    pain: "the workflow expands until nobody knows what is out of scope",
    promise: "non-goals protect quality, budget and trust",
    operatingMove: "write explicit non-goals beside every objective and review them before build",
    proofAsset: "workflow scope memo",
    framework: "PASTOR",
    keywords: ["AI workflow scope", "AI non goals", "custom AI agent scope"],
  },
  {
    slug: "ai-delivery-for-small-software-teams",
    title: "AI delivery for small software teams",
    description:
      "Small teams get leverage from AI when it reduces coordination and documentation drag.",
    category: "Software Teams",
    audience: "small software companies and lean engineering teams",
    pain: "the team cannot afford process overhead but still loses time to unclear work",
    promise: "lightweight delivery systems give small teams memory without bureaucracy",
    operatingMove: "standardize briefs, test notes, review checklists and release documentation",
    proofAsset: "small-team AI delivery kit",
    framework: "AIDA",
    keywords: ["AI for software teams", "small software team", "AI delivery workflow"],
  },
  {
    slug: "ai-agent-handoff-to-internal-team",
    title: "Handing a custom AI agent to an internal team",
    description:
      "What must be true before an internal team can safely own a custom agent.",
    category: "Handoff",
    audience: "companies receiving custom agent builds",
    pain: "the agent is delivered but internal ownership, maintenance and review are unclear",
    promise: "handoff is successful when the team can operate, debug and improve the workflow",
    operatingMove: "transfer examples, failure paths, monitoring notes and improvement backlog",
    proofAsset: "agent handoff pack",
    framework: "PASTOR",
    keywords: ["custom AI agent handoff", "AI agent documentation", "AI implementation"],
  },
  {
    slug: "how-to-choose-first-ai-workflow",
    title: "How to choose the first AI workflow to build",
    description:
      "A practical filter for choosing the first workflow that deserves AI support.",
    category: "AI Delivery Audit",
    audience: "companies with too many AI ideas and limited capacity",
    pain: "the team debates many use cases and starts none of them properly",
    promise: "a simple filter helps choose the workflow most likely to create visible value",
    operatingMove: "score workflows by frequency, pain, reviewability, data access and owner clarity",
    proofAsset: "first workflow scoring table",
    framework: "AIDA",
    keywords: ["AI workflow prioritization", "AI use case selection", "AI delivery audit"],
  },
  {
    slug: "ai-delivery-needs-taste",
    title: "AI delivery needs taste",
    description:
      "Taste is the human ability to know when output is technically correct but strategically wrong.",
    category: "Human Aspect",
    audience: "founders, product leaders and senior operators",
    pain: "AI output looks complete but misses nuance, positioning or the buyer's real concern",
    promise: "human taste keeps AI systems commercially useful and context-aware",
    operatingMove: "review outputs against customer reality, product strategy and operational constraints",
    proofAsset: "taste review rubric",
    framework: "PASTOR",
    keywords: ["human judgment AI", "AI delivery", "AI product strategy"],
  },
  {
    slug: "weekly-ai-delivery-review",
    title: "Run a weekly AI delivery review",
    description:
      "A lightweight weekly review can keep AI workflows useful, safe and tied to delivery.",
    category: "Operations",
    audience: "teams using AI across product, engineering and operations",
    pain: "AI work happens everywhere but nobody reviews what is reusable or risky",
    promise: "a weekly cadence turns scattered usage into organizational learning",
    operatingMove: "review wins, failures, reusable patterns, risks and next workflow candidates",
    proofAsset: "weekly AI delivery review agenda",
    framework: "AIDA",
    keywords: ["AI delivery review", "AI operating cadence", "AI workflow governance"],
  },
];

const firstMonday = new Date(Date.UTC(2026, 3, 27, 0, 0, 0));
const oneWeek = 7 * 24 * 60 * 60 * 1000;

function lastSunday(year: number, monthIndex: number) {
  const date = new Date(Date.UTC(year, monthIndex + 1, 0));
  date.setUTCDate(date.getUTCDate() - date.getUTCDay());
  return date;
}

function isPragueSummerTime(localDate: Date) {
  const year = localDate.getUTCFullYear();
  const dstStart = lastSunday(year, 2);
  const dstEnd = lastSunday(year, 9);

  return localDate.getTime() > dstStart.getTime() && localDate.getTime() <= dstEnd.getTime();
}

function publishedAt(index: number) {
  const localDate = new Date(firstMonday.getTime() - index * oneWeek);
  const year = localDate.getUTCFullYear();
  const month = String(localDate.getUTCMonth() + 1).padStart(2, "0");
  const day = String(localDate.getUTCDate()).padStart(2, "0");
  const offset = isPragueSummerTime(localDate) ? "+02:00" : "+01:00";

  return `${year}-${month}-${day}T09:00:00${offset}`;
}

export const blogPosts: BlogPost[] = seeds.map((seed, index) => ({
  ...seed,
  publishedAt: publishedAt(index),
  author: siteConfig.author,
  readingTime: `${4 + (index % 3)} min read`,
}));

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostUrl(post: BlogPost) {
  return absoluteUrl(`/blog/${post.slug}`);
}

function postIndex(post: BlogPost) {
  const index = blogPosts.findIndex((candidate) => candidate.slug === post.slug);
  return index >= 0 ? index : 0;
}

function sentenceCase(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

const deskScenes = [
  "I would start with a blank page, not a tool comparison.",
  "The first useful move is to slow the room down for thirty minutes.",
  "This is the kind of problem that looks technical until someone draws the workflow.",
  "When a team brings this to me, I listen for ownership before I listen for tooling.",
  "The expensive part is rarely the model. It is the missing agreement around the work.",
  "I would rather see one honest workflow map than ten polished AI use-case slides.",
  "The work becomes easier when somebody writes down what good output actually means.",
  "Most of the value appears before the first integration is built.",
];

const warningLines = [
  "If nobody can explain the current flow in plain language, automation will only make confusion faster.",
  "If the buyer cannot name the reviewer, the project is not ready for autonomy.",
  "If the output cannot be rejected, improved or handed off, it is not a delivery system yet.",
  "If the only proof is a demo, I would treat the project as unfinished.",
  "If the workflow depends on one expert's memory, start there before adding agents.",
  "If the team argues about tooling before inputs and outputs, the meeting is already drifting.",
];

const mondayMoves = [
  "Open a shared document and describe the current workflow as it happens today, including the ugly parts.",
  "Collect three real examples: one good output, one bad output and one borderline case.",
  "Name the person who will judge quality after launch, then ask what they need to see.",
  "Write the non-goals. Most bad AI projects expand because nobody says what is out of scope.",
  "Pick one painful step and define the input, output, owner and review rule.",
  "Turn the next meeting into a decision log instead of another broad AI discussion.",
  "List the sources the workflow is allowed to trust and the sources it should ignore.",
  "Decide what a human must still approve even if the AI draft looks correct.",
];

const closingLines = [
  "That is not glamorous work, but it is the work that makes the glamorous part usable.",
  "This is where a small audit pays for itself: it prevents the team from building the wrong impressive thing.",
  "A useful AI workflow should feel a little boring by the time it ships. Boring is often another word for operable.",
  "The goal is not to remove the human. The goal is to stop wasting the human on avoidable mess.",
  "The best sign is when the team can explain the workflow without mentioning the model first.",
  "Good consulting here is not a pile of ideas. It is a smaller number of decisions made clearly.",
];

export function buildArticleIntro(post: BlogPost) {
  const index = postIndex(post);
  const scene = deskScenes[index % deskScenes.length];
  const warning = warningLines[index % warningLines.length];
  const variants = [
    [
      `${scene} ${sentenceCase(post.pain)}. That is the real buying signal.`,
      `${warning} For ${post.audience}, the practical question is whether the workflow is ready to be made more reliable.`,
    ],
    [
      `${sentenceCase(post.pain)}. I would treat that less as an AI opportunity and more as a workflow leak.`,
      `${scene} The team does not need a bigger story yet. It needs a smaller decision that can survive contact with real work.`,
    ],
    [
      `I do not read this as a tooling problem first. I read it as a sign that ${post.pain}.`,
      `${warning} That is why the early work should be concrete enough that ${post.audience} can argue with it.`,
    ],
    [
      `The moment to pay attention is not when somebody says "we should use AI." It is when ${post.pain}.`,
      `${scene} From there, the work is to find the narrowest responsible improvement, not the loudest demo.`,
    ],
    [
      `${scene} In plain language: ${post.pain}.`,
      `That sentence is already more useful than most AI roadmaps because it points at ownership, review and handoff.`,
    ],
  ];

  return variants[index % variants.length];
}

export function buildArticleChecklist(post: BlogPost) {
  const index = postIndex(post);
  const move = mondayMoves[index % mondayMoves.length];

  return [
    move,
    `Write down the artifact that would make the work reviewable: in this case, a ${post.proofAsset}.`,
    `Decide who owns the next version if the first version works.`,
    `Mark the part of the workflow where human judgment must stay visible.`,
  ];
}

export function buildArticleSections(post: BlogPost): ArticleSection[] {
  const index = postIndex(post);
  const closing = closingLines[index % closingLines.length];
  const variants: ArticleSection[][] = [
    [
      {
        heading: "The mistake I would avoid",
        body: `I would not begin by asking for a bigger AI plan. I would begin by asking why ${post.pain}. Until that is understood, every tool choice is premature.`,
      },
      {
        heading: "The useful version of the problem",
        body: `${sentenceCase(post.promise)}. That is a much cleaner target than becoming AI-enabled in some abstract way.`,
      },
      {
        heading: "What I would put on the table",
        body: `I would put a ${post.proofAsset} on the table and make the team react to it. If people cannot agree on that artifact, they will not agree after the build either.`,
      },
      {
        heading: "The small move",
        body: `${sentenceCase(post.operatingMove)}. It sounds modest, but it creates a surface area for disagreement before money is spent.`,
      },
      {
        heading: "Why it matters",
        body: closing,
      },
    ],
    [
      {
        heading: "The smell",
        body: `The smell is not that the team lacks ambition. The smell is that ${post.pain}, and people keep trying to solve that with another tool or another call.`,
      },
      {
        heading: "A better constraint",
        body: `Constrain the work until it can be inspected. ${sentenceCase(post.operatingMove)}. Now the conversation is about a workflow, not about taste in AI platforms.`,
      },
      {
        heading: "The thing I would ask for",
        body: `Ask for a ${post.proofAsset}. Not because artifacts are paperwork, but because they reveal whether the work can survive handoff.`,
      },
      {
        heading: "What good looks like",
        body: `${sentenceCase(post.promise)}. Good output should make the next decision easier, not simply make the team feel busy.`,
      },
    ],
    [
      {
        heading: "Where teams get fooled",
        body: `Teams get fooled when the demo works and the operating model is still missing. In this topic, the trap is simple: ${post.pain}.`,
      },
      {
        heading: "The human part",
        body: `Somebody still has to decide what matters, what is risky and what should be rejected. AI can accelerate the middle of the workflow, but it cannot own the judgment around it.`,
      },
      {
        heading: "The practical move",
        body: `${sentenceCase(post.operatingMove)}. This is the kind of step that feels too small until it saves two weeks of rework.`,
      },
      {
        heading: "The evidence",
        body: `I would not call this done without a ${post.proofAsset}. That is the evidence that the team has something it can run again.`,
      },
      {
        heading: "The payoff",
        body: `${sentenceCase(post.promise)}. More importantly, the team learns how to repeat the pattern on the next workflow.`,
      },
    ],
    [
      {
        heading: "The uncomfortable question",
        body: `If this workflow disappeared for a week, who would notice first? That person is usually closer to the truth than the AI roadmap is.`,
      },
      {
        heading: "The current failure mode",
        body: `${sentenceCase(post.pain)}. That is operational debt. AI may make it more visible, but it will not clean it up by itself.`,
      },
      {
        heading: "The intervention",
        body: `${sentenceCase(post.operatingMove)}. Keep it narrow enough that the team can see whether it works within days, not quarters.`,
      },
      {
        heading: "The artifact",
        body: `The artifact I would want is a ${post.proofAsset}. Without that, the project depends too much on memory and confidence.`,
      },
    ],
    [
      {
        heading: "What I would not buy",
        body: `I would not buy another broad discovery deck for this. The useful starting point is smaller: ${post.pain}.`,
      },
      {
        heading: "The first honest artifact",
        body: `Produce a ${post.proofAsset} and let the team challenge it. The disagreement is valuable because it shows where the workflow is still vague.`,
      },
      {
        heading: "The move",
        body: `${sentenceCase(post.operatingMove)}. If that cannot be done cleanly, a build will not magically make it clean.`,
      },
      {
        heading: "The commercial reason",
        body: `${sentenceCase(post.promise)}. That is what a buyer can feel: fewer loose ends, fewer mystery handoffs and less dependence on heroic follow-up.`,
      },
    ],
    [
      {
        heading: "A small field test",
        body: `Take one recent example of this workflow and replay it from request to finished output. The weak point will usually match the complaint: ${post.pain}.`,
      },
      {
        heading: "Where the human stays",
        body: `The human work is deciding what good means, what risk is acceptable and when a draft is not good enough. That judgment should be designed into the flow, not left to chance.`,
      },
      {
        heading: "What to change first",
        body: `${sentenceCase(post.operatingMove)}. Do that before choosing a platform or adding another automation layer.`,
      },
      {
        heading: "What I would keep",
        body: `Keep the ${post.proofAsset}. It becomes the reference point when the team forgets why the workflow was changed in the first place.`,
      },
    ],
    [
      {
        heading: "The boardroom version",
        body: `The boardroom version is simple: the company is paying for repeated work because ${post.pain}. That is a margin problem before it is a technology problem.`,
      },
      {
        heading: "The operating version",
        body: `The operating version is just as direct: ${post.operatingMove}. Make the work visible enough that a non-specialist can follow the handoff.`,
      },
      {
        heading: "The standard",
        body: `A ${post.proofAsset} is the minimum standard I would want before calling this mature. Otherwise the process still lives in somebody's head.`,
      },
      {
        heading: "The upside",
        body: `${sentenceCase(post.promise)}. That upside is easier to defend than a generic claim about AI productivity.`,
      },
    ],
    [
      {
        heading: "What the team is really asking",
        body: `Under the surface, the team is asking for relief from a recurring drag: ${post.pain}. Naming that honestly is more useful than inventing a grand transformation theme.`,
      },
      {
        heading: "The line I would draw",
        body: `Draw a line between what AI can draft and what a person must decide. Without that line, review becomes a hidden tax.`,
      },
      {
        heading: "The next useful object",
        body: `Build the conversation around a ${post.proofAsset}. It gives everyone something more concrete than opinions about AI maturity.`,
      },
      {
        heading: "The first action",
        body: `${sentenceCase(post.operatingMove)}. Then decide whether the workflow deserves automation, documentation or simply a better owner.`,
      },
    ],
  ];

  return variants[index % variants.length];
}
