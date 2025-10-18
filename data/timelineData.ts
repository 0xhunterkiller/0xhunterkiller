// data/timelineData.ts

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
    year: "2025",
    role: "Software Engineer I",
    organization: "Swym Corporation",
    highlights: [
      {
        title: "AI Transformation Lead",
        description:
          "Drove Swym’s AI automation effort — introduced Slack-based deployment bots and AI-assisted CI/CD improvements.",
        tags: ["AI", "Automation", "CI/CD"],
      },
      {
        title: "Infrastructure Revamp & Cluster Migration",
        description:
        "Created new AKS clusters with workload identities, app gateways, and SSO integration. Migrated all workloads with zero downtime.",
        tags: ["Kubernetes", "Azure", "SSO", "Helm v2"],
      },
      {
        title: "Observability at Scale",
        description:
        "Built Jaeger + Kafka tracing pipeline and redesigned logging with FluentBit aggregator architecture for high throughput reliability.",
        tags: ["Jaeger", "Kafka", "Observability"],
      },
      {
        title: "Zero-Downtime Deployments",
        description:
        "Eliminated deployment-related failed requests by refining lifecycle hooks, readiness probes, and preStop policies.",
        tags: ["Kubernetes", "Deployment Strategy"],
      },
      {
        title: "Promoted to Software Engineer I",
        description:
          "Recognized for leading infrastructure modernization and automation initiatives across engineering.",
        tags: ["Career Growth", "Leadership"],
      },
    ],
  },
  {
    year: "2024",
    role: "Associate Software Engineer",
    organization: "Swym Corporation",
    highlights: [
      {
        title: "Observability Platform Overhaul",
        description:
        "Designed a full-stack observability solution with OpenSearch, Jaeger, FluentBit, and Grafana OnCall — reducing incident MTTR by 40%.",
        tags: ["OpenSearch", "FluentBit", "Grafana", "Jaeger"],
      },
      {
        title: "Cost & Resource Optimization",
        description:
          "Reduced infra spend by 30% via Azure Spot VMs, ILM policies, and resource rightsizing for staging clusters.",
        tags: ["Azure", "Optimization", "Cloud"],
      },
      {
        title: "OpenTelemetry & Jaeger Operator Integration",
        description:
          "Implemented distributed tracing with custom Clojure library integrating the Java OTel SDK, enhancing trace visibility.",
        tags: ["OpenTelemetry", "Clojure", "Jaeger Operator"],
        link: {
          label: "Setup Jaeger Operator Blog",
          href: "https://medium.com/@saaisudarsanan/setup-jaeger-operator-with-opensearch-for-kubernetes-61739b0bb75c",
        },
      },
      {
        title: "Cluster Reliability & Documentation",
        description:
          "Upgraded critical components (Teleport, Jenkins, Nexus), conducted K8s KTs, and maintained developer documentation.",
        tags: ["Kubernetes", "DevOps", "Knowledge Sharing"],
      },
      {
        title: "Advanced Monitoring & ISM Policies",
        description:
          "Optimized OpenSearch by implementing hot/warm/cold node architecture with custom FluentBit Lua scripts for log indexing.",
        tags: ["OpenSearch", "FluentBit", "Lua"],
      },
    ],
  },
  {
    year: "2023",
    role: "Associate Software Engineer (Intern → Full-Time)",
    organization: "Swym Corporation",
    highlights: [
      {
        title: "Kubernetes Migration & Helm Rollouts",
        description:
          "Containerized Node.js and Clojure workloads, introduced GitOps deployments via ArgoCD, and set up secure secret management using Azure Key Vault.",
        tags: ["Kubernetes", "Helm", "ArgoCD", "Azure"],
      },
      {
        title: "Monitoring & Alerting Foundation",
        description:
          "Established Prometheus + Grafana OnCall monitoring stack with Slack-based alert routing for proactive incident management.",
        tags: ["Prometheus", "Grafana", "Alerting"],
      },
      {
        title: "Secret Management Initiative",
        description:
          "Migrated service credentials from plaintext to Azure Key Vault, aligning with SOC2 compliance and security best practices.",
        tags: ["Azure Key Vault", "Security", "Compliance"],
      },
      {
        title: "Infrastructure Documentation",
        description:
          "Authored comprehensive Kubernetes deployment and configuration guides to accelerate team onboarding.",
        tags: ["Documentation", "DevOps Enablement"],
      },
      {
        title: "Hackathon Participation",
        description:
          "Explored OpenAI Whisper for internal automation and built quick Shopify-integrated prototypes.",
        tags: ["OpenAI", "Shopify API", "Innovation"],
      },
    ],
  },
  {
    year: "2022",
    role: "Student",
    organization: "SASTRA Deemed University",
    highlights: [
      {
        title: "Head of Daksh SoC (School of Computing Events Team)",
        description:
          "Led the events team for Daksh and Utsav 2023 — SASTRA’s flagship tech festivals. Mentored juniors, managed large-scale logistics, and coordinated with administration for smooth execution.",
        tags: ["Leadership", "Event Management", "Mentorship"],
      },
      {
        title: "Content Writer at OWASP Foundation",
        description:
          "Authored accessible articles on cybersecurity, distributed systems, and AI for a global community. Simplified technical topics and mentored peers on tech writing.",
        tags: ["Cybersecurity", "Writing", "Community"],
      },
      {
        title: "Core Team Member — Team 1nf1n1ty (Cybersecurity)",
        description:
          "Represented SASTRA University’s official cybersecurity team in national CTFs, securing a Top 5 rank in India. Specialized in forensics, cryptography, and network exploitation.",
        tags: ["Cybersecurity", "CTF", "Forensics", "Leadership"],
      },
      {
        title: "Mentorship & Community Building",
        description:
          "Guided juniors in technical domains, cybersecurity, and event management — helping establish sustainable student-led tech initiatives on campus.",
        tags: ["Mentorship", "Community", "Leadership"],
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
        description:
          "Started contributing to event planning and logistics for Daksh and Utsav tech festivals. Collaborated with peers to organize hybrid events during the pandemic.",
        tags: ["Event Coordination", "Teamwork", "Organization"],
      },
      {
        title: "Utsav 2021 & Daksh 2021",
        description:
          "Successfully executed large-scale college festivals amid COVID-19 restrictions, ensuring safety and participation through hybrid online models.",
        tags: ["Leadership", "Adaptability", "Event Execution"],
      },
      {
        title: "Early Exploration in Technology",
        description:
          "Began exploring programming, Linux, and basic cybersecurity concepts, laying the foundation for later specialization.",
        tags: ["Linux", "Networking", "Foundations"],
      },
    ],
  },
];
