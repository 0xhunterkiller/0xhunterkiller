export interface Promotion {
  date: string;
  title: string;
  short: string;
  org: string;
  current?: boolean;
}

export interface Milestone {
  id: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  details: string;
  tags: string[];
  highlight?: boolean;
}

export interface SkillCluster {
  name: string;
  skills: string[];
}

export interface Project {
  name: string;
  desc: string;
  tags: string[];
  link?: string;
  featured?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  status: string;
  period: string;
  note?: string;
}

export interface Certification {
  name: string;
  link?: string;
}

export const promotions: Promotion[] = [
  {
    date: "Jan 2023",
    title: "Intern",
    short: "Intern",
    org: "Swym Corporation",
  },
  {
    date: "Jul 2023",
    title: "Associate Software Engineer",
    short: "ASE",
    org: "Swym Corporation",
  },
  {
    date: "Jan 2025",
    title: "Software Engineer I",
    short: "SWE I",
    org: "Swym Corporation",
  },
  {
    date: "Mar 2026",
    title: "Senior Software Engineer I",
    short: "Sr. SWE I",
    org: "Swym Corporation",
    current: true,
  },
];

export const milestones: Milestone[] = [
  {
    id: "alfred",
    date: "Apr 2026",
    category: "AI / Platform",
    title: "Alfred — Internal AI Ops Assistant",
    summary:
      "Built Swym's AI operations assistant from scratch in ~9 days. Lives in Slack, thinks with Gemini.",
    details:
      "Alfred sits in Slack. @mention it, it runs a Gemini 2.5 Flash agentic loop with access to production Kubernetes, Prometheus/Thanos, Jaeger, OpenSearch, ClickHouse, and GitHub. Features: thread-level short-term memory (JSONL per session, TTL eviction), long-term memory on a 4Gi persistent volume, human approval gates before sensitive ops, and proactive idle research every 15 min. Fully deployed on Kubernetes in the aiops namespace with GitHub Actions CI/CD for all three services (slack-integration, mcp-proxy, alfred-core).",
    tags: [
      "Gemini 2.5 Flash",
      "MCP",
      "FastMCP",
      "Kubernetes",
      "Slack",
      "Redis Streams",
      "Python",
      "Pydantic",
    ],
    highlight: true,
  },
  {
    id: "bfcm-2025",
    date: "Nov 2025",
    category: "Reliability / Scale",
    title: "BFCM 2025 — 1.01M Peak RPM",
    summary:
      "Handled Black Friday / Cyber Monday peak traffic of 1.01M RPM on Kubernetes. Zero incidents.",
    details:
      "Led BFCM 2025 operations across all platform services on Kubernetes with full observability. Coordinated capacity planning, set up pre-BFCM readiness checklists, and resolved a live production incident caused by slow AGIC pod IP updates — migrated pods to a different app gateway and provisioned new subnets after careful IP planning. Peak traffic: 1.01 million requests per minute.",
    tags: [
      "Kubernetes",
      "Azure",
      "Observability",
      "Incident Response",
      "Capacity Planning",
    ],
    highlight: true,
  },
  {
    id: "monitoring-platform",
    date: "Oct 2025",
    category: "Observability",
    title: "Self-Serve Monitoring Platform",
    summary:
      "Built a fully self-serve, multi-team monitoring platform using Thanos, kube-prometheus-stack, and custom exporters.",
    details:
      "Deployed kube-prometheus-stack with a multi-prometheus operator model so any team can provision Prometheus instances, define ServiceMonitors, PrometheusRules, and Alertmanager configs via ArgoCD and the public Helm charts repo. Added Thanos for long-term metrics retention and cross-cluster querying. Wrote a custom Redis queue Prometheus exporter and an adapter converting Azure Common Alert Schema to Alertmanager format. Added JVM internal metrics collection for better Java app performance tuning.",
    tags: [
      "Thanos",
      "Prometheus Operator",
      "Alertmanager",
      "kube-prometheus-stack",
      "Azure Monitor",
      "ArgoCD",
    ],
  },
  {
    id: "full-cluster-migration",
    date: "Jun–Sep 2025",
    category: "Infrastructure",
    title: "Full Infrastructure Modernization — 3 New AKS Clusters",
    summary:
      "Designed and migrated all Swym workloads to 3 new AKS clusters — prod, staging, ops — built from scratch.",
    details:
      "Built 3 new AKS clusters (prod, staging, operations) with properly configured workload identities, cluster identities, Virtual Networks, and DNS Zones. Set up new ArgoCD with Azure AD SSO. Configured a new FluentBit agent-aggregator architecture for high-throughput log shipping. Migrated all applications using v2 Helm charts. Set up new Prometheus, Grafana, Alertmanager, Teleport, and Appsmith from scratch on the new cluster.",
    tags: [
      "AKS",
      "Azure",
      "ArgoCD",
      "Helm v2",
      "FluentBit",
      "Terraform",
      "Workload Identity",
      "Azure AD SSO",
    ],
  },
  {
    id: "ag4c-migration",
    date: "Feb 2026",
    category: "Infrastructure / Cost",
    title: "AG4C Migration — $120/day Saved",
    summary:
      "Migrated swym-store (all tiers) to Azure Application Gateway for Containers, cutting $120/day in infra costs.",
    details:
      "Installed and configured Azure Application Gateway for Containers (AG4C) using the Kubernetes Gateway API. Provisioned 4 AG4C instances with full Gateway API configuration, safe TLS policies, and certificates. Migrated swym-store (all tiers) from the previous app gateway setup to AG4C. Saved $120/day in infrastructure costs.",
    tags: ["Azure AG4C", "Gateway API", "Kubernetes", "TLS", "Cost Optimization"],
  },
  {
    id: "mcp-gateway",
    date: "Mar 2026",
    category: "AI / Observability",
    title: "MCP-Gateway for Observability",
    summary:
      "Unified MCP server exposing Jaeger, OpenSearch, and Prometheus as one AI-accessible endpoint with PII redaction.",
    details:
      "Built a FastMCP-based gateway that exposes Jaeger, OpenSearch, and Prometheus as a single MCP server for AI agents. Supports namespace filtering via URL params so agents can scope their tool access. Includes redaction middleware that sanitizes PII from Kubernetes, Jaeger, and OpenSearch responses before they reach the LLM. Serves as the observability tool backbone for Alfred and the AI auto-rightsizing agent.",
    tags: ["MCP", "FastMCP", "Jaeger", "Prometheus", "OpenSearch", "Python", "PII Redaction"],
  },
  {
    id: "zero-downtime",
    date: "Mar 2025",
    category: "Reliability",
    title: "Zero Failed Requests During Deployments",
    summary:
      "Eliminated deployment-related failed requests on swym-store by tuning readiness probes, preStop hooks, and lifecycle delays.",
    details:
      "Tracked down the root cause: the readiness probe was passing before all application endpoints were ready to serve traffic. Tuned readinessProbeDelay, initialReadyDelay, and preStop hook timing. Worked with AGIC annotations and Kubernetes lifecycle hooks to ensure graceful traffic draining. Result: zero failed requests during any swym-store deployment.",
    tags: [
      "Kubernetes",
      "Deployment Strategy",
      "AGIC",
      "Lifecycle Hooks",
      "Zero Downtime",
      "Graceful Shutdown",
    ],
  },
  {
    id: "build-optimization",
    date: "Aug 2024",
    category: "CI/CD",
    title: "Jenkins Build Times Cut by 75%",
    summary:
      "Reduced Docker build times to 1/4th original through multi-stage builds, caching, and parallelization.",
    details:
      "Profiled and optimized the full Jenkins build pipeline. Introduced multi-stage Docker builds, aggressive layer caching strategies, and workload parallelization. Result: build times cut to 1/4th of original, directly improving developer velocity and deployment frequency.",
    tags: ["Jenkins", "Docker", "Multi-stage Builds", "CI/CD", "Build Cache"],
  },
  {
    id: "otel-clojure",
    date: "May–Jul 2024",
    category: "Observability",
    title: "Custom OTel Clojure SDK + Jaeger at 215M Spans/15h",
    summary:
      "Wrote a Clojure library wrapping the Java OTel SDK. Deployed Jaeger with Kafka buffer handling 215M spans in 15 hours.",
    details:
      "Built a custom Clojure library using Java interop to wrap the Java OpenTelemetry SDK. Instrumented critical business flows across the organization. Set up Jaeger Operator with Kafka (via Strimzi Operator) as an intermediary buffer between the collector and OpenSearch — solving span loss under OpenSearch load. The system processed 215,382,693 spans in 15 hours.",
    tags: [
      "OpenTelemetry",
      "Clojure",
      "Jaeger Operator",
      "Kafka",
      "Strimzi",
      "Java Interop",
    ],
    highlight: true,
  },
  {
    id: "opensearch-tiered",
    date: "Apr 2024",
    category: "Observability",
    title: "OpenSearch Hot/Warm/Cold Architecture",
    summary:
      "Re-architected OpenSearch into a tiered hot/warm/cold cluster with custom FluentBit Lua auto-routing.",
    details:
      "Redesigned Swym's OpenSearch from a flat master-only setup to a 3-tier architecture: data-ingest, master, and client nodes labeled hot/warm/cold. Implemented ISM policies for automated lifecycle management. Wrote a custom FluentBit Lua script that auto-creates named indexes per application, eliminating constant manual reconfiguration every time a new service is onboarded.",
    tags: ["OpenSearch", "ISM Policies", "FluentBit", "Lua", "Hot/Warm/Cold"],
  },
  {
    id: "k8s-migration-2023",
    date: "Jul 2023",
    category: "Infrastructure",
    title: "Kubernetes Migration — Node.js Services to AKS",
    summary:
      "Led the migration of production Node.js services from Azure App Services to AKS. Built all Helm charts, pipelines, and ArgoCD deployments.",
    details:
      "Evaluated the case for Kubernetes vs Azure App Services (cost, scalability, operational efficiency). Wrote optimized, version-locked Dockerfiles to prevent supply chain attacks. Revamped Jenkins build and deploy pipelines for container workflows. Wrote Helm charts integrated with Secret Provider Class for secure secrets management. Configured ArgoCD applications per service. Coordinated safe, staged production migrations and documented the entire process with KT sessions for the team.",
    tags: ["Kubernetes", "AKS", "Helm", "ArgoCD", "Jenkins", "Docker", "Azure Key Vault", "CI/CD"],
  },
  {
    id: "key-vault-soc2",
    date: "May 2023",
    category: "Security / Compliance",
    title: "Azure Key Vault Secret Management (SOC2)",
    summary:
      "Migrated all service secrets from plaintext EDN config to Azure Key Vault with secure startup-time injection.",
    details:
      "Service secrets were stored as plaintext in EDN configuration files on VMs — a significant security risk. Designed and implemented a secure system using Azure Managed Identity to pull secrets from Key Vault at startup, injecting them into the service environment. Aligned with Shopify's data protection policy and was a key milestone on the path to SOC2 compliance.",
    tags: ["Azure Key Vault", "Security", "SOC2", "Clojure", "Managed Identity"],
  },
];

export const skillClusters: SkillCluster[] = [
  {
    name: "Infrastructure & Orchestration",
    skills: [
      "Kubernetes (AKS)",
      "Helm v2",
      "ArgoCD",
      "Argo Rollouts",
      "Docker",
      "Terraform",
      "Karpenter",
      "VPA / KEDA",
    ],
  },
  {
    name: "Observability & Reliability",
    skills: [
      "Prometheus",
      "Grafana",
      "Thanos",
      "Jaeger",
      "OpenTelemetry",
      "FluentBit / Fluentd",
      "OpenSearch",
      "Alertmanager",
      "Incident Response",
    ],
  },
  {
    name: "Cloud & Networking",
    skills: [
      "Azure Cloud (AKS, VMSS, VNet)",
      "Azure AG4C",
      "Gateway API",
      "Networking & Load Balancing",
      "Azure Key Vault",
      "Azure AD / RBAC",
    ],
  },
  {
    name: "AI & Automation",
    skills: [
      "MCP / FastMCP",
      "Gemini 2.5 Flash",
      "LangGraph",
      "LangChain",
      "AI Agents",
      "Slack Bots",
      "Python Automation",
    ],
  },
  {
    name: "CI/CD & Development",
    skills: [
      "Jenkins",
      "GitHub Actions",
      "CI/CD Pipelines",
      "Clojure",
      "Python",
      "Golang",
      "Node.js",
      "Bash Scripting",
    ],
  },
  {
    name: "Security & Compliance",
    skills: [
      "SOC2 Compliance",
      "Secret Management",
      "Vulnerability Analysis",
      "Penetration Testing",
      "CEH",
      "ISC2 CC",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Alfred",
    desc: "Internal AI ops assistant for Swym — Gemini 2.5 Flash agentic loop with MCP tool access to production Kubernetes, Prometheus, Jaeger, OpenSearch, and GitHub. Thread-level and long-term memory, human approval gates, proactive idle research. Built in ~9 days. Deployed on Kubernetes.",
    tags: ["Gemini 2.5 Flash", "MCP", "Kubernetes", "Python", "Redis Streams", "Slack"],
    featured: true,
  },
  {
    name: "MCP-Gateway",
    desc: "Unified FastMCP gateway exposing Jaeger, OpenSearch, and Prometheus as one AI tool endpoint. Supports namespace filtering and includes PII redaction middleware before responses reach the LLM.",
    tags: ["MCP", "FastMCP", "Observability", "Python", "PII Redaction"],
  },
  {
    name: "ilogu3000",
    desc: "Benchmarking suite for Clojure logging frameworks. Identified significant CPU overhead from pformat pretty-printing and proved the fix — reducing log size and JVM GC pressure in production.",
    tags: ["Clojure", "JVM", "Benchmarking", "Java VisualVM"],
    link: "https://github.com/0xhunterkiller/ilogu3000",
  },
  {
    name: "turinglib",
    desc: "Lightweight Python library for building and simulating Turing Machines. Object-oriented interface for defining tape symbols, actions, states, and state machines.",
    tags: ["Python", "Theoretical CS", "Turing Machines"],
  },
];

export const education: Education[] = [
  {
    degree: "Master of Science, Computer Science (OMSCS)",
    institution: "Georgia Institute of Technology",
    status: "In Progress",
    period: "2025 – Present",
  },
  {
    degree: "B.Tech, Information Technology",
    institution: "SASTRA Deemed University",
    status: "Graduated",
    period: "2019 – 2023",
  },
];

export const certifications: Certification[] = [
  {
    name: "Certified Kubernetes Administrator (CKA)",
    link: "https://www.credly.com/badges/1ae0e1a0-ef2e-48a4-9034-042d793bd239",
  },
  {
    name: "Certified Ethical Hacker (CEH)",
  },
  {
    name: "ISC2: Certified in Cybersecurity",
    link: "https://www.credly.com/badges/1d5e4472-09d4-4020-8250-a4c6a0d37063",
  },
  {
    name: "Google Cybersecurity Specialization",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/5GMXVR98HTJQ",
  },
  {
    name: "Data Science Professional Certificate",
    link: "https://www.youracclaim.com/badges/199a6733-044b-4b4b-8481-530209b8037a?source",
  },
  {
    name: "Python for Everybody Specialization",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/ADKTABWP9BLS",
  },
  {
    name: "Competitive Strategy",
    link: "https://www.coursera.org/account/accomplishments/certificate/CHAY7HGPCNEM",
  },
  {
    name: "Advanced Competitive Strategy",
    link: "https://www.coursera.org/account/accomplishments/certificate/KBQ3SLPMLT2E",
  },
  {
    name: "Strategic Organization Design",
    link: "https://www.coursera.org/account/accomplishments/certificate/TPQC8BWTX729",
  },
];
