import { ServiceItem, CaseStudyItem, TeamMember, ProcessStage } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'website-development',
    number: '01',
    title: 'Website Development',
    category: 'Product Engineering',
    shortDescription: 'High-speed marketing sites and digital flagships built with semantic HTML, modern Tailwind CSS, and clean React.',
    description: 'We engineer websites that load instantly, convey product value with utmost clarity, and adhere strictly to responsive accessibility and SEO standards.',
    deliverables: [
      'Clean modular React & TypeScript codebases',
      'Optimized asset loading & sub-second first paint',
      'Full semantic SEO & structured schema metadata',
      'Responsive testing across mobile, tablet, and desktop',
    ],
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Liquid'],
    icon: 'globe',
  },
  {
    id: 'web-applications',
    number: '02',
    title: 'Web Applications',
    category: 'Product Engineering',
    shortDescription: 'Complex client portals, collaborative interfaces, and interactive dashboards engineered for daily operational use.',
    description: 'From multi-tenant business portals to real-time client management tools, we write maintainable web software with deterministic state management.',
    deliverables: [
      'Interactive single-page and multi-page flows',
      'Optimistic state updates & robust cache strategies',
      'Role-based access controls and auth workflows',
      'Comprehensive error handling and feedback states',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    icon: 'layout',
  },
  {
    id: 'mobile-applications',
    number: '03',
    title: 'Mobile Applications',
    category: 'Product Engineering',
    shortDescription: 'Cross-platform mobile applications that provide native fluidity, offline resilience, and clean hardware integrations.',
    description: 'We develop focused mobile experiences that connect directly to your central backend APIs, ensuring smooth touch physics and reliable push synchronization.',
    deliverables: [
      'Cross-platform iOS and Android builds',
      'Offline caching and resilient data synchronization',
      'Device biometric authentication & push alerts',
      'Smooth 60 FPS transitions and native feel',
    ],
    techStack: ['React Native', 'Node.js', 'REST APIs', 'Railway'],
    icon: 'smartphone',
  },
  {
    id: 'saas-development',
    number: '04',
    title: 'SaaS Development',
    category: 'Product Engineering',
    shortDescription: 'Full-cycle multi-tenant software platforms with subscription management, user provisioning, and usage telemetry.',
    description: 'We build SaaS platforms engineered for high availability, tenant isolation, clear billing flows, and intuitive onboarding.',
    deliverables: [
      'Tenant isolation and scalable MongoDB document modeling',
      'Billing, subscription tiers, and payment webhooks',
      'Self-service user administration and invite flows',
      'Audit logging and usage-based metric tracking',
    ],
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    icon: 'layers',
  },
  {
    id: 'ai-solutions',
    number: '05',
    title: 'AI Solutions',
    category: 'Systems & Cloud',
    shortDescription: 'Practical AI-enabled workflows, retrieval-augmented generation (RAG), and intelligent automation for business processes.',
    description: 'We implement practical, value-driven machine intelligence into business applications, focusing on reliability, data security, and verifiable outputs.',
    deliverables: [
      'Domain-specific RAG and vector database retrieval',
      'LLM pipeline integration with fallback guards',
      'Document parsing, extraction, and synthesis APIs',
      'Strict latency benchmarks and prompt optimization',
    ],
    techStack: ['Python', 'Node.js', 'Express', 'MongoDB', 'Railway'],
    icon: 'cpu',
  },
  {
    id: 'custom-software',
    number: '06',
    title: 'Custom Software',
    category: 'Product Engineering',
    shortDescription: 'Bespoke software systems designed to solve specific operational bottlenecks and proprietary business workflows.',
    description: 'When off-the-shelf software falls short, we engineer tailored internal tools, data processing pipelines, and operations hubs.',
    deliverables: [
      'Targeted workflow digitisation and tool consolidation',
      'Legacy system migration and data cleansing',
      'Custom administrative control panels',
      'End-to-end type safety and automated testing',
    ],
    techStack: ['React', 'Express', 'Node.js', 'MongoDB', 'Python'],
    icon: 'terminal',
  },
  {
    id: 'uiux-product-design',
    number: '07',
    title: 'UI/UX and Product Design',
    category: 'Design & Strategy',
    shortDescription: 'Design systems, interface architecture, wireframes, and high-fidelity prototypes that prioritize usability and clarity.',
    description: 'We turn complicated product requirements into clean visual hierarchies, accessible interaction models, and cohesive design tokens.',
    deliverables: [
      'Information architecture and user journey flows',
      'High-fidelity interactive Figma prototypes',
      'Comprehensive design token systems & components',
      'WCAG 2.1 AA accessibility compliance audit',
    ],
    techStack: ['Figma', 'Tailwind CSS', 'Framer Motion', 'Design Tokens'],
    icon: 'pen-tool',
  },
  {
    id: 'automation-integrations',
    number: '08',
    title: 'Automation and Integrations',
    category: 'Systems & Cloud',
    shortDescription: 'Seamless API bridges connecting CRM, payment gateways, ERP, email providers, and third-party services.',
    description: 'Eliminate duplicate data entry and fragile manual handoffs through resilient background queues, webhooks, and synchronization microservices.',
    deliverables: [
      'Robust webhook ingestion with replay mechanisms',
      'Third-party ERP, CRM, and payment integrations',
      'Asynchronous task queuing and worker pools',
      'Data normalization and schema validation',
    ],
    techStack: ['Node.js', 'Express', 'Python', 'REST APIs', 'Railway'],
    icon: 'git-merge',
  },
  {
    id: 'backend-cloud',
    number: '09',
    title: 'Backend and Cloud',
    category: 'Systems & Cloud',
    shortDescription: 'High-reliability RESTful APIs, MongoDB databases, migration management, and secure server infrastructures.',
    description: 'We construct secure, horizontally scalable server architectures with structured logging, rate limiting, and automated deployment pipelines on Railway.',
    deliverables: [
      'Document modeling with indexed schemas in MongoDB Atlas',
      'Express REST APIs with strict input validation',
      'Rate limiting, CSRF protection, and security headers',
      'Cloud deployment automation with Railway CI/CD',
    ],
    techStack: ['Node.js', 'Express', 'MongoDB', 'Railway', 'Helmet'],
    icon: 'database',
  },
  {
    id: 'ecommerce',
    number: '10',
    title: 'E-commerce',
    category: 'Product Engineering',
    shortDescription: 'Fast, secure online stores and bespoke checkout architectures designed for high conversion and catalog scalability.',
    description: 'We design shopping experiences that respect customer time: rapid category filtering, secure checkout integrations, and accurate inventory sync.',
    deliverables: [
      'Liquid template engineering & custom headless storefronts',
      'Integrated payment gateways and receipt generation',
      'Real-time inventory decrement and order pipelines',
      'Mobile-optimized single-step checkout interfaces',
    ],
    techStack: ['Liquid', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    icon: 'shopping-bag',
  },
  {
    id: 'mvp-development',
    number: '11',
    title: 'MVP Development',
    category: 'Design & Strategy',
    shortDescription: 'Rapid, disciplined product builds designed to get testable software into the hands of real users within weeks.',
    description: 'We help founders isolate core hypotheses, eliminate secondary fluff, and build resilient version 1.0 products that don’t require a total rewrite later.',
    deliverables: [
      'Scope definition and feature prioritization matrix',
      'Rapid prototype-to-code execution in 3–6 weeks',
      'Production-ready authentication and database backend',
      'Instrumentation for user feedback and error telemetry',
    ],
    techStack: ['React', 'Tailwind CSS', 'Express', 'Node.js', 'MongoDB', 'Railway'],
    icon: 'zap',
  },
];

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'cs-kami',
    slug: 'kami',
    title: 'Kami',
    subtitle: 'Campus Smart Print & Digital Stationery Platform',
    category: 'Campus Technology',
    typeBadge: 'Recent Product Build',
    summary:
      'Kami digitizes the campus stationery and document printing workflow. Students upload files, customize print configurations, pay online, and pick up ready prints without waiting in rush-hour shop queues.',
    challenge:
      'University printing shops experience severe congestion right before 10 AM assignment and lab-record deadlines. Manual WhatsApp file transfers and USB drives cause formatting shifts, color print errors, and long disputes.',
    approach:
      'We designed an end-to-end mobile order-ahead platform: students upload PDFs directly, specify exact binding, color, and duplex settings, and view live order queue ETAs while shops receive structured print batches.',
    productDesign:
      'A tactile mobile interface featuring one-tap document upload, instant page count detection, visual binding selector (spiral vs softbound), and an operator dispatch dashboard for campus stationery shops.',
    solution:
      'Engineered with React, Tailwind CSS, Express, and Node.js with real-time order state updates backed by MongoDB Atlas and deployed on Railway.',
    intendedValue:
      'Reduces student waiting time by over 85%, eliminates operator printing disputes, and provides stationery vendors with organized, predictable print queues.',
    keyFeatures: [
      'Multi-format document upload (PDF, DOCX) with instant page count parsing',
      'Granular print specification: B&W vs color split, single/duplex, and binding',
      'Stationery shop operator portal with queue tracking and status dispatch',
      'Automated order notifications: Queued → Printing → Bound → Ready for Pickup',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express', 'MongoDB', 'Railway'],
    metrics: [
      { label: 'Queue Time Saved', value: '-85%' },
      { label: 'Reprint Dispute Rate', value: '0%' },
      { label: 'Order Processing', value: '< 30s' },
      { label: 'Platform SLA', value: '99.9%' },
    ],
  },
  {
    id: 'cs-nova',
    slug: 'nova',
    title: 'Nova',
    subtitle: 'High-Throughput Analytics & Telemetry Engine',
    category: 'Data Platform',
    typeBadge: 'Concept Prototype',
    summary:
      'Nova is an architectural demonstration exploring how browser interfaces can ingest and display high-density telemetry streams without frame drops or memory leaks.',
    challenge:
      'Standard charting libraries frequently trigger layout thrashing and garbage collection pauses when telemetry rates surpass thousands of events per second. The goal was to render 50,000 live data points at a consistent 60 frames per second.',
    approach:
      'We designed a multi-layer rendering pipeline. Heavy data calculations and window slicing are handled off the main thread, while the display surface uses hardware-accelerated instanced rendering.',
    productDesign:
      'The interface pairs high-density data visualizations with subdued neutral containers. Micro-controls allow engineers to scrub time windows, isolate error clusters, and export raw logs without leaving the primary dashboard viewport.',
    solution:
      'We engineered an instanced WebGL buffer rendering layer backed by a streaming Express pipeline and MongoDB time-series storage.',
    intendedValue:
      'Provides mission-critical infrastructure teams with instantaneous visibility into distributed microservice telemetry without sluggish dashboard load times.',
    keyFeatures: [
      'Zero-copy binary stream decoding for sub-8ms rendering updates',
      'Dynamic time-window aggregation with sub-second queries',
      'Indexed MongoDB collections optimized for rapid append operations',
      'Accessible keyboard scrubbing for incident inspection',
    ],
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Python'],
    metrics: [
      { label: 'Render Latency', value: '< 8ms' },
      { label: 'Sustained Throughput', value: '50k pts/sec' },
      { label: 'Frame Consistency', value: '60 FPS' },
      { label: 'Initial Bundle Size', value: '48 KB gzip' },
    ],
  },
  {
    id: 'cs-flow',
    slug: 'flow',
    title: 'Flow',
    subtitle: 'Collaborative Canvas & State Graph Orchestration',
    category: 'Productivity Systems',
    typeBadge: 'Concept Prototype',
    summary:
      'Flow explores node-based workflow orchestration with instantaneous state synchronization and optimistic client mutations.',
    challenge:
      'Multi-user collaborative canvas tools often suffer from state synchronization drift, excessive component re-renders, and bloated payload trees that hurt user responsiveness.',
    approach:
      'We established a directed acyclic graph (DAG) data model where every node connection is strictly validated with Zod before committing state changes to the backend.',
    productDesign:
      'A distraction-free, light-mode workspace featuring precision bezier node connectors, context-sensitive inspector panels, and clean keyboard shortcut overlays.',
    solution:
      'Constructed a specialized reactive state graph with Framer Motion gesture physics, normalized client cache, and transaction-safe state transitions in MongoDB.',
    intendedValue:
      'Enables operations teams to design, simulate, and automate complex cross-departmental business workflows without writing glue code.',
    keyFeatures: [
      'Optimistic state updates with deterministic rollback guarantees',
      'Directed acyclic graph (DAG) topological execution engine',
      'Smooth 120Hz bezier node connector rendering',
      'Strict Zod schema validation across all pipeline edges',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express', 'MongoDB'],
    metrics: [
      { label: 'State Sync Latency', value: '18ms' },
      { label: 'State Memory Footprint', value: '-65%' },
      { label: 'UI Re-renders', value: '-82%' },
      { label: 'Pipeline Test Coverage', value: '98%' },
    ],
  },
  {
    id: 'cs-orbit',
    slug: 'orbit',
    title: 'Orbit',
    subtitle: 'Unified Design Token Engine & Component Architecture',
    category: 'Design Systems',
    typeBadge: 'Concept Prototype',
    summary:
      'Orbit is a unified design token engine that compiles multi-brand design tokens into framework-agnostic CSS custom properties and React components.',
    challenge:
      'Maintaining visual coherence across divergent marketing websites, internal tools, and client portals often causes CSS bloat, inconsistent spacing, and duplicated UI implementations.',
    approach:
      'We centralized typography, color scales, spacing, and elevations into a single JSON schema that generates strongly typed definitions and atomic Tailwind utilities.',
    productDesign:
      'An interactive documentation workbench where product designers and developers can test token variations, contrast ratios, and responsive breakpoints in real time.',
    solution:
      'Designed a token hierarchy leveraging Tailwind primitives, accessible ARIA patterns, and automated Webpack asset minification.',
    intendedValue:
      'Dramatically accelerates frontend feature velocity while eliminating visual regressions across complex multi-product digital ecosystems.',
    keyFeatures: [
      'Tokens compiled directly to atomic Tailwind classes',
      'Zero-runtime CSS overhead for static components',
      'Strict WCAG 2.1 AAA contrast and keyboard navigation',
      'Seamless theme switching without layout recalculations',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Webpack', 'Node.js'],
    metrics: [
      { label: 'CSS Footprint', value: '14.2 KB' },
      { label: 'WCAG Contrast Score', value: '100 / 100' },
      { label: 'Token Compile Speed', value: '120ms' },
      { label: 'Component Reusability', value: '95%' },
    ],
  },
  {
    id: 'cs-vertex',
    slug: 'vertex',
    title: 'Vertex',
    subtitle: 'Edge API Security & Ingestion Shield',
    category: 'Infrastructure',
    typeBadge: 'Concept Prototype',
    summary:
      'Vertex provides multi-layered spam prevention, sliding-window rate limiting, and cryptographic request verification for public APIs.',
    challenge:
      'Public inquiry and contact endpoints are prime targets for automated spam bots, credential stuffing, and volumetric denial-of-service.',
    approach:
      'Rather than relying on invasive third-party CAPTCHAs that frustrate genuine prospective clients, we implemented a silent multi-layer validation pipeline.',
    productDesign:
      'A real-time telemetry dashboard detailing traffic origin, blocked bot signatures, latency distributions, and rate-limit trip triggers.',
    solution:
      'Crafted a zero-friction security middleware combining stealth honeypot traps, client submission velocity checks, and IP-based sliding window rate limits.',
    intendedValue:
      'Guarantees that public inquiry pipelines remain 100% spam-free without degrading legitimate client conversion rates.',
    keyFeatures: [
      'Sliding window in-memory rate limiting with IP heuristics',
      'Stealth CSS/DOM honeypot with zero CAPTCHA user friction',
      'Cryptographic input verification using strict Zod schemas',
      'Structured console & audit trail for operational visibility',
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'Railway', 'Helmet'],
    metrics: [
      { label: 'Bot Rejection Rate', value: '99.8%' },
      { label: 'False Positive Rate', value: '0.00%' },
      { label: 'Middleware Overhead', value: '< 1.2ms' },
      { label: 'Security Headers Grade', value: 'A+' },
    ],
  },
];

export const teamData: TeamMember[] = [
  {
    name: 'Chetan Sharma P',
    role: 'Founder & Forward Deployed Engineer',
    titleBadge: 'Forward Deployed Engineering & Business Analytics',
    initials: 'CS',
    bioSnippet:
      'Directs technical strategy, end-to-end full-stack development, and data-driven product analytics at WeCove. Handles core systems engineering, deployment architectures, business intelligence, and client execution.',
    focus: ['Forward Deployed Engineering', 'Full-Stack React & Node', 'MongoDB & Railway', 'Business Analytics'],
  },
  {
    name: 'Mallikarjun N',
    role: 'Co-founder',
    titleBadge: 'Systems & Operations',
    initials: 'MN',
    bioSnippet:
      'Co-leads software engineering initiatives and infrastructure performance. Focuses on backend microservices, API security, reliability engineering, and persistent data pipelines.',
    focus: ['Backend Systems', 'Express & Node.js', 'API Reliability', 'Data Persistence'],
  },
  {
    name: 'Aryan Koushink',
    role: 'Team member',
    titleBadge: 'Frontend Engineering',
    initials: 'AK',
    bioSnippet:
      'Specializes in modern user interface engineering, component architecture, and responsive layouts built with React, Tailwind CSS, and Framer Motion.',
    focus: ['Frontend Architecture', 'Component Systems', 'State Management', 'Responsive Interfaces'],
  },
  {
    name: 'Mohith M S',
    role: 'Team member',
    titleBadge: 'Engineering & Integration',
    initials: 'MS',
    bioSnippet:
      'Focuses on application logic, algorithmic problem solving, Python scripts, and API integrations across the WeCove client product stack.',
    focus: ['Application Logic', 'API Integration', 'Python Workflows', 'Performance Optimization'],
  },
];

export const processStages: ProcessStage[] = [
  {
    number: '01',
    name: 'Discover',
    headline: 'Requirements & Scope Alignment',
    description:
      'We examine your business requirements, target audience, technical constraints, and product objectives to produce an explicit roadmap and feature priority matrix.',
    deliverables: [
      'Functional requirements document',
      'Technical feasibility assessment',
      'Architecture recommendations',
      'Milestone and timeline plan',
    ],
  },
  {
    number: '02',
    name: 'Define',
    headline: 'Information Architecture & Data Modeling',
    description:
      'Before writing visual code, we specify database schemas, API contracts, entity relationships, and user journey flows to prevent costly structural changes later.',
    deliverables: [
      'MongoDB document schema models',
      'REST API contract specifications',
      'User journey flow maps',
      'Core technical stack selection',
    ],
  },
  {
    number: '03',
    name: 'Design',
    headline: 'Interface Systems & Interactive Wireframes',
    description:
      'We translate requirements into clear, restrained interface layouts, typographic scales, design tokens, and interactive clickable prototypes.',
    deliverables: [
      'High-fidelity component design system',
      'Responsive wireframes for all viewports',
      'Interactive Figma prototypes',
      'Accessibility & contrast validation',
    ],
  },
  {
    number: '04',
    name: 'Build',
    headline: 'Full-Stack Engineering & Integration',
    description:
      'Iterative, disciplined implementation using React, Tailwind CSS, Express, Node.js, and MongoDB. Every endpoint is validated with Zod, and every UI component is built for speed and maintainability.',
    deliverables: [
      'Production React & Tailwind CSS frontend',
      'Express REST API with full test coverage',
      'Indexed MongoDB Atlas database collections',
      'Continuous build and asset optimization',
    ],
  },
  {
    number: '05',
    name: 'Launch',
    headline: 'Hardening, Security & Deployment',
    description:
      'Comprehensive pre-launch testing: rate limiting, spam protection, cross-browser validation, SEO audits, and automated Railway deployment setup.',
    deliverables: [
      'Railway cloud infrastructure deployment',
      'Database indexing & security verification',
      'Security headers & rate limiter verification',
      'SSL configuration & analytics verification',
    ],
  },
  {
    number: '06',
    name: 'Scale',
    headline: 'Monitoring, Iteration & Ongoing Support',
    description:
      'Post-launch support, performance telemetry, dependency patching, and structured feature iterations as user traffic and business demands increase.',
    deliverables: [
      'Production health monitoring & alerting',
      'Database query optimization & indexing',
      'Regular dependency updates & security patches',
      'Priority support and feature roadmapping',
    ],
  },
];
