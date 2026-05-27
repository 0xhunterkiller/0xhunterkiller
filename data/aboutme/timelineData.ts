export interface TimelineEntry {
  title: string;
  date?: string;
  description?: string;
  tags?: string[];
  link?: { label: string; href: string };
}

export interface TimelineYear {
  year: string;
  role?: string;
  organization?: string;
  highlights: TimelineEntry[];
}

export const timelineData: TimelineYear[] = [
  {
    year: "2026",
    role: "Senior Software Engineer I",
    organization: "Swym Corporation",
    highlights: [
      {
        title: "Promoted to Senior Software Engineer I",
        date: "Mar 2026",
        description:
          "Recognized for leading AI transformation efforts, full infrastructure modernization, and engineering impact across the organization.",
        tags: ["Career Growth", "Leadership"],
      },
      {
        title: "Alfred — Internal AI Ops Assistant",
        date: "Apr 2026",
        description:
          "Built Swym's AI operations assistant from scratch in ~9 days. Gemini 2.5 Flash agentic loop with MCP access to Kubernetes, Prometheus, Jaeger, OpenSearch, ClickHouse, and GitHub. Thread-level memory, long-term memory on PVC, human approval gates, proactive idle research. GitHub Actions CI/CD for all three services.",
        tags: ["Gemini", "MCP", "Kubernetes", "Slack", "Redis Streams", "Python"],
      },
      {
        title: "MCP-Gateway for Observability",
        date: "Mar 2026",
        description:
          "Built a FastMCP-based unified gateway exposing Jaeger, OpenSearch, and Prometheus as a single AI tool endpoint. PII redaction middleware. Used as the backbone for Alfred and the AI auto-rightsizing agent.",
        tags: ["MCP", "FastMCP", "Observability", "PII Redaction"],
      },
      {
        title: "AG4C Migration — $120/day Saved",
        date: "Feb 2026",
        description:
          "Migrated swym-store (all tiers) to Azure Application Gateway for Containers using the Kubernetes Gateway API. Provisioned 4 AG4C instances with full Gateway API config, TLS policies, and certificates. Saved $120/day.",
        tags: ["Azure AG4C", "Gateway API", "Cost Optimization"],
      },
      {
        title: "AI Auto-Rightsizing Agent",
        date: "Mar 2026",
        description:
          "Implemented an AI agent connected to MCP-Gateway and GitHub Copilot that queries Prometheus for CPU/memory metrics and automatically rightsizes Kubernetes container resources via the Helm charts repo.",
        tags: ["AI Agents", "Prometheus", "Kubernetes", "Resource Optimization"],
      },
      {
        title: "K8s Cluster Upgrade v1.33 → v1.34",
        date: "Mar 2026",
        description:
          "Upgraded production and operations AKS clusters, including ArgoRollouts. Preceded by 7 days of API access log collection and TB-scale log analysis on a self-hosted ClickHouse DB.",
        tags: ["Kubernetes", "AKS", "ClickHouse", "Upgrades"],
      },
    ],
  },
  {
    year: "2025",
    role: "Software Engineer I → Senior Software Engineer I",
    organization: "Swym Corporation",
    highlights: [
      {
        title: "Promoted to Software Engineer I",
        date: "Jan 2025",
        description:
          "Promoted from Associate Software Engineer. Also created ilogu3000 — a benchmarking tool for Clojure logging frameworks that identified significant CPU overhead from pretty-printing in production.",
        tags: ["Career Growth", "Clojure", "JVM"],
        link: {
          label: "ilogu3000 on GitHub",
          href: "https://github.com/0xhunterkiller/ilogu3000",
        },
      },
      {
        title: "swym-store Migration to Kubernetes",
        date: "Feb 2025",
        description:
          "Migrated our most critical application — swym-store — to Kubernetes across all 5 tiers. Set up new app gateway and ingress controllers, rewrote td-agent config to fluentd socket-based input, added Log4j2 changes, and built a Python genConfig init container.",
        tags: ["Kubernetes", "Fluentd", "Log4j2", "App Gateway"],
      },
      {
        title: "Zero-Downtime Deployments",
        date: "Mar 2025",
        description:
          "Eliminated deployment-related failed requests on swym-store. Root cause: readiness probe passing before all endpoints were ready. Fixed via readinessProbeDelay, preStop hook tuning, and AGIC lifecycle annotations.",
        tags: ["Kubernetes", "Deployment Strategy", "Zero Downtime", "Lifecycle Hooks"],
      },
      {
        title: "AI Transformation Lead — Operations Cohort",
        date: "Jul 2025",
        description:
          "Named lead for AI transformation efforts in the operations engineering cohort. Led LangGraph and LangChain explorations, built Slack deployment bots, and drove the AI ops strategy that would later become Alfred.",
        tags: ["AI", "LangGraph", "LangChain", "Leadership"],
      },
      {
        title: "Full Infrastructure Modernization — 3 New AKS Clusters",
        date: "Jun–Sep 2025",
        description:
          "Built 3 new AKS clusters (prod, staging, ops) with workload identities, VNets, DNS Zones, and Azure AD SSO on ArgoCD. Migrated all platform workloads via v2 Helm charts. New FluentBit agent-aggregator logging architecture.",
        tags: ["AKS", "ArgoCD", "Helm v2", "FluentBit", "Terraform", "Workload Identity"],
      },
      {
        title: "Self-Serve Monitoring Platform (Thanos + kube-prometheus-stack)",
        date: "Oct 2025",
        description:
          "Built a fully self-serve multi-team monitoring platform. Teams provision Prometheus instances and define alerts via ArgoCD. Thanos for long-term retention. Custom Redis queue exporter, Azure Monitor adapter, scalable Alertmanager routing. JVM metrics for Java apps.",
        tags: ["Thanos", "Prometheus Operator", "Alertmanager", "kube-prometheus-stack"],
      },
      {
        title: "BFCM 2025 — 1.01M Peak RPM",
        date: "Nov 2025",
        description:
          "Handled Black Friday/Cyber Monday peak traffic of 1.01 million RPM on Kubernetes with full observability. Resolved a live P0 incident caused by slow AGIC pod IP updates — migrated pods to a new app gateway and provisioned new subnets under load.",
        tags: ["Kubernetes", "BFCM", "1M+ RPM", "Incident Response", "Azure"],
      },
      {
        title: "Penetration Testing Remediation",
        date: "May 2025",
        description:
          "Acted on vulnerability report from an external penetration testing team. Fixed multiple web application vulnerabilities — HTTP header misconfigurations and security misconfigurations — across production systems.",
        tags: ["Security", "Penetration Testing", "Vulnerability Remediation"],
      },
    ],
  },
  {
    year: "2024",
    role: "Associate Software Engineer",
    organization: "Swym Corporation",
    highlights: [
      {
        title: "Infra Cost Reduction ~30%",
        date: "Jan–Mar 2024",
        description:
          "Moved staging workloads to Azure Spot VMs, implemented OpenSearch hard-disk storage in place of SSDs, introduced ILM policies, and right-sized resources. ~30% infra cost reduction.",
        tags: ["Azure Spot VMs", "Cost Optimization", "OpenSearch ILM", "Rightsizing"],
      },
      {
        title: "OpenSearch Hot/Warm/Cold Architecture",
        date: "Apr 2024",
        description:
          "Re-architected OpenSearch from a flat master setup to a tiered hot/warm/cold architecture with ISM policies. Custom FluentBit Lua script auto-creates named indexes per application, eliminating manual reconfiguration for every newly onboarded service.",
        tags: ["OpenSearch", "ISM", "FluentBit", "Lua", "Hot/Warm/Cold"],
      },
      {
        title: "Custom OTel Clojure SDK",
        date: "May 2024",
        description:
          "Built a custom Clojure library using Java interop to wrap the Java OTel SDK. Instrumented critical business flows across the entire organization.",
        tags: ["Clojure", "OpenTelemetry", "Java Interop"],
        link: {
          label: "Blog: Setup Jaeger Operator",
          href: "https://medium.com/@saaisudarsanan/setup-jaeger-operator-with-opensearch-for-kubernetes-61739b0bb75c",
        },
      },
      {
        title: "Jaeger + Kafka (215M Spans / 15 Hours)",
        date: "Jul 2024",
        description:
          "Deployed Kafka via Strimzi Operator as an intermediary buffer between Jaeger Collector and OpenSearch. Solved span loss under OpenSearch backpressure. System handled 215,382,693 spans in 15 hours.",
        tags: ["Jaeger", "Kafka", "Strimzi", "Observability"],
      },
      {
        title: "Jenkins Build Times Cut by 75%",
        date: "Aug 2024",
        description:
          "Multi-stage Docker builds, layer caching, and workload parallelization. Reduced build times to 1/4th of original.",
        tags: ["Jenkins", "Docker", "Multi-stage Builds", "CI/CD Optimization"],
      },
      {
        title: "Devops-Tools Platform (Appsmith)",
        date: "Oct 2024",
        description:
          "Built a devops-tools API and Appsmith workspace allowing teams to self-serve Azure App Config changes without needing direct infra access.",
        tags: ["Appsmith", "Azure App Config", "Python", "Self-Serve Tools"],
      },
      {
        title: "K8s Production Cluster Upgrade v1.27 → v1.28",
        date: "Nov 2024",
        description:
          "Upgraded the production cluster and set up Pod Disruption Budgets (PDBs) for all apps and ingress gateways to prevent node eviction issues during future upgrades.",
        tags: ["Kubernetes", "AKS", "PDB", "Upgrades"],
      },
    ],
  },
  {
    year: "2023",
    role: "Intern → Associate Software Engineer (Full-Time)",
    organization: "Swym Corporation",
    highlights: [
      {
        title: "Joined Swym as Backend Infrastructure Intern",
        date: "Jan 2023",
        description:
          "Onboarding, Clojure training, and first project — swym-changelog built with Gatsby and Shopify Polaris.",
        tags: ["Clojure", "Gatsby", "Onboarding"],
      },
      {
        title: "Grafana Queue Monitor & Jenkins Automation",
        date: "Apr 2023",
        description:
          "Built a Grafana Queue Monitor dashboard using REST API and JSONPath. Wrote a Jenkins job to auto-update service thread allocation using Ansible and Azure CLI.",
        tags: ["Grafana", "Jenkins", "Ansible", "Azure CLI"],
      },
      {
        title: "Azure Key Vault Secret Management (SOC2)",
        date: "May 2023",
        description:
          "Migrated all service secrets from plaintext EDN config to Azure Key Vault with startup-time injection via Managed Identity. Key milestone toward SOC2 compliance.",
        tags: ["Azure Key Vault", "Security", "SOC2", "Managed Identity"],
      },
      {
        title: "Kubernetes Migration — Node.js Services to AKS",
        date: "Jul 2023",
        description:
          "Led the migration of production Node.js services from Azure App Services to AKS. Version-locked Dockerfiles, revamped Jenkins pipelines, Helm charts with Secret Provider Class, ArgoCD per-service apps. Coordinated staged production rollouts and wrote full documentation.",
        tags: ["Kubernetes", "AKS", "Helm", "ArgoCD", "Jenkins", "Docker"],
      },
      {
        title: "Promoted to Associate Software Engineer (Full-Time)",
        date: "Jul 2023",
        description:
          "Converted from intern to full-time ASE based on impact during the internship period.",
        tags: ["Career Growth"],
      },
      {
        title: "Prometheus + Grafana OnCall Monitoring Stack",
        date: "Aug 2023",
        description:
          "Established Prometheus, AlertManager, and Grafana OnCall with Slack-based alert routing. Foundation for all future observability work at Swym.",
        tags: ["Prometheus", "Grafana", "AlertManager", "Slack"],
      },
      {
        title: "BFCM 2023 — First Scale Event",
        date: "Nov 2023",
        description:
          "Prepared BFCM 2023 infrastructure using Terraform. Provisioned and configured BFCM nodes, supported deployment operations during code freeze, monitored and handled events.",
        tags: ["Terraform", "BFCM", "Operations"],
      },
    ],
  },
  {
    year: "2022",
    role: "Student",
    organization: "SASTRA Deemed University",
    highlights: [
      {
        title: "Head of Daksh SoC (School of Computing Events)",
        date: "2022–2023",
        description:
          "Led the events team for Daksh and Utsav 2023 — SASTRA's flagship tech festivals. Mentored juniors, managed logistics, and coordinated with administration.",
        tags: ["Leadership", "Event Management", "Mentorship"],
      },
      {
        title: "Content Writer at OWASP Foundation",
        date: "2022",
        description:
          "Authored accessible articles on cybersecurity, distributed systems, and AI for a global community.",
        tags: ["Cybersecurity", "Technical Writing", "Community"],
      },
      {
        title: "Core Team — Team 1nf1n1ty (Cybersecurity)",
        date: "2022",
        description:
          "Represented SASTRA's official cybersecurity team in national CTFs. Top 5 rank in India. Specialized in forensics, cryptography, and network exploitation.",
        tags: ["CTF", "Cybersecurity", "Forensics", "Cryptography"],
      },
    ],
  },
  {
    year: "2021",
    role: "Student",
    organization: "SASTRA Deemed University",
    highlights: [
      {
        title: "Joined Daksh SoC Events Team",
        date: "2021",
        description:
          "Started contributing to Daksh and Utsav tech festivals. Organized hybrid events during COVID-19 restrictions.",
        tags: ["Events", "Teamwork", "Adaptability"],
      },
      {
        title: "Foundations in Technology",
        date: "2021",
        description:
          "Began exploring programming, Linux, and basic cybersecurity — the foundations for everything that followed.",
        tags: ["Linux", "Networking", "Foundations"],
      },
    ],
  },
];
