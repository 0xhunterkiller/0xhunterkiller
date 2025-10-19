// data/resourcesData.ts

export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface Resource {
  title: string;
  description: string;
  link: string;
  technology: string; // e.g., "Kubernetes", "Observability", "Clojure"
  roadmap?: string;   // e.g., "DevOps Roadmap", "Observability Roadmap"
  step?: number;      // order within the roadmap (1..N)
  difficulty: Difficulty;
  rating: number;     // 1.0 - 5.0
}

/**
 * A comprehensive, mixed dataset to exercise:
 * - multiple technologies
 * - multiple roadmaps
 * - step ordering
 * - difficulty/rating sorting
 * - items with and without roadmap membership
 */
export const resources: Resource[] = [
  // ─────────────────────────────────────────────
  // KUBERNETES
  // ─────────────────────────────────────────────
  {
    title: "Kubernetes Basics (Official)",
    description: "Intro to Pods, Services, Deployments, and scaling.",
    link: "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
    technology: "Kubernetes",
    difficulty: "beginner",
    rating: 4.6,
  },
  {
    title: "Kubernetes the Hard Way",
    description: "Build a cluster from scratch to grok internals.",
    link: "https://github.com/kelseyhightower/kubernetes-the-hard-way",
    technology: "Kubernetes",
    difficulty: "advanced",
    rating: 4.9,
  },
  {
    title: "CKA Exam Curriculum (Unofficial Guide)",
    description: "Structured topics covering the CKA blueprint.",
    link: "https://github.com/dgkanatsios/CKAD-exercises",
    technology: "Kubernetes",
    difficulty: "intermediate",
    rating: 4.4,
  },
  {
    title: "Operators 101",
    description: "Extend Kubernetes with custom controllers and CRDs.",
    link: "https://operatorframework.io/",
    technology: "Kubernetes",
    difficulty: "advanced",
    rating: 4.5,
  },

  // ─────────────────────────────────────────────
  // OBSERVABILITY
  // ─────────────────────────────────────────────
  {
    title: "Prometheus Overview",
    description: "Fundamentals of time-series metrics and alerting.",
    link: "https://prometheus.io/docs/introduction/overview/",
    technology: "Observability",
    difficulty: "beginner",
    rating: 4.8,
  },
  {
    title: "OpenTelemetry 101",
    description: "Instrumentation for traces, metrics, and logs.",
    link: "https://opentelemetry.io/",
    technology: "Observability",
    difficulty: "intermediate",
    rating: 4.7,
  },
  {
    title: "Grafana Loki + Tempo",
    description: "Logs and tracing in the Grafana stack.",
    link: "https://grafana.com/oss/",
    technology: "Observability",
    difficulty: "intermediate",
    rating: 4.4,
  },
  {
    title: "Jaeger Deep Dive",
    description: "Distributed tracing architecture and strategies.",
    link: "https://www.jaegertracing.io/docs/",
    technology: "Observability",
    difficulty: "advanced",
    rating: 4.3,
  },
  {
    title: "SLOs, SLIs, and Error Budgets",
    description: "Measure and enforce reliability with SRE practices.",
    link: "https://sre.google/sre-book/service-level-objectives/",
    technology: "Observability",
    difficulty: "intermediate",
    rating: 4.9,
  },

  // ─────────────────────────────────────────────
  // CLOJURE / FP
  // ─────────────────────────────────────────────
  {
    title: "Clojure — Getting Started",
    description: "Install, REPL basics, project structure.",
    link: "https://clojure.org/guides/getting_started",
    technology: "Clojure",
    difficulty: "beginner",
    rating: 4.6,
  },
  {
    title: "Clojure for the Brave and True",
    description: "A fun, practical introduction to Clojure.",
    link: "https://www.braveclojure.com/",
    technology: "Clojure",
    difficulty: "beginner",
    rating: 4.7,
  },
  {
    title: "Functional Programming Concepts",
    description: "Immutability, higher-order functions, and laziness.",
    link: "https://en.wikipedia.org/wiki/Functional_programming",
    technology: "Clojure",
    difficulty: "intermediate",
    rating: 4.1,
  },
  {
    title: "Clojure Spec & Test",
    description: "Data specs, property-based testing, and tooling.",
    link: "https://clojure.org/guides/spec",
    technology: "Clojure",
    difficulty: "intermediate",
    rating: 4.3,
  },

  // ─────────────────────────────────────────────
  // TERRAFORM / IaC
  // ─────────────────────────────────────────────
  {
    title: "Terraform — Official Intro",
    description: "Core concepts: providers, state, modules, plans.",
    link: "https://developer.hashicorp.com/terraform/intro",
    technology: "Terraform",
    difficulty: "beginner",
    rating: 4.6,
  },
  {
    title: "Terraform Modules Best Practices",
    description: "Reusable modules, versioning, and composition.",
    link: "https://developer.hashicorp.com/terraform/language/modules",
    technology: "Terraform",
    difficulty: "intermediate",
    rating: 4.4,
  },
  {
    title: "Managing Terraform State",
    description: "Remote backends, state locking, and workspaces.",
    link: "https://developer.hashicorp.com/terraform/language/state",
    technology: "Terraform",
    difficulty: "advanced",
    rating: 4.2,
  },

  // ─────────────────────────────────────────────
  // LINUX
  // ─────────────────────────────────────────────
  {
    title: "Linux Journey",
    description: "Interactive tour through Linux fundamentals.",
    link: "https://linuxjourney.com/",
    technology: "Linux",
    difficulty: "beginner",
    rating: 4.5,
  },
  {
    title: "The Linux Command Line",
    description: "A book covering shell usage and scripting.",
    link: "http://linuxcommand.org/tlcl.php",
    technology: "Linux",
    difficulty: "beginner",
    rating: 4.3,
  },
  {
    title: "Advanced Shell Scripting",
    description: "Patterns for robust, maintainable shell scripts.",
    link: "https://www.gnu.org/software/bash/manual/",
    technology: "Linux",
    difficulty: "intermediate",
    rating: 4.0,
  },

  // ─────────────────────────────────────────────
  // NETWORKING
  // ─────────────────────────────────────────────
  {
    title: "Computer Networking: A Top-Down Approach (Overview)",
    description: "Concepts of HTTP, TCP, routing, and DNS.",
    link: "https://gaia.cs.umass.edu/kurose_ross/online_lectures.htm",
    technology: "Networking",
    difficulty: "beginner",
    rating: 4.5,
  },
  {
    title: "Practical TCP/IP Debugging",
    description: "Using tcpdump, Wireshark, and netcat effectively.",
    link: "https://www.tcpdump.org/",
    technology: "Networking",
    difficulty: "intermediate",
    rating: 4.1,
  },

  // ─────────────────────────────────────────────
  // CI/CD
  // ─────────────────────────────────────────────
  {
    title: "GitHub Actions — Getting Started",
    description: "Workflows, jobs, actions, and marketplace.",
    link: "https://docs.github.com/actions",
    technology: "CI/CD",
    difficulty: "beginner",
    rating: 4.4,
  },
  {
    title: "Pipeline Patterns",
    description: "Build, test, security scans, and deploy patterns.",
    link: "https://martinfowler.com/articles/continuousIntegration.html",
    technology: "CI/CD",
    difficulty: "intermediate",
    rating: 4.3,
  },
  {
    title: "Progressive Delivery (Argo Rollouts/Flagger)",
    description: "Blue/green, canary, and traffic splitting on K8s.",
    link: "https://argoproj.github.io/rollouts/",
    technology: "CI/CD",
    difficulty: "advanced",
    rating: 4.5,
  },

  // ─────────────────────────────────────────────
  // CLOUD (AWS / AZURE / GCP)
  // ─────────────────────────────────────────────
  {
    title: "AWS Well-Architected Framework",
    description: "Pillars: Operational Excellence, Security, Reliability, Cost, Performance.",
    link: "https://aws.amazon.com/architecture/well-architected/",
    technology: "Cloud",
    difficulty: "intermediate",
    rating: 4.7,
  },
  {
    title: "Azure Architecture Center",
    description: "Reference architectures and best practices.",
    link: "https://learn.microsoft.com/azure/architecture/",
    technology: "Cloud",
    difficulty: "intermediate",
    rating: 4.2,
  },
  {
    title: "GCP Architecture Framework",
    description: "Guidance for building reliable and scalable systems on GCP.",
    link: "https://cloud.google.com/architecture/framework",
    technology: "Cloud",
    difficulty: "intermediate",
    rating: 4.3,
  },

  // ─────────────────────────────────────────────
  // SECURITY
  // ─────────────────────────────────────────────
  {
    title: "OWASP Top 10",
    description: "The most critical web application security risks.",
    link: "https://owasp.org/www-project-top-ten/",
    technology: "Security",
    difficulty: "beginner",
    rating: 4.8,
  },
  {
    title: "Kubernetes Security Best Practices",
    description: "RBAC, NetworkPolicies, PodSecurity, and supply chain.",
    link: "https://kubernetes.io/docs/concepts/security/overview/",
    technology: "Security",
    difficulty: "intermediate",
    rating: 4.5,
  },
  {
    title: "Threat Modeling",
    description: "STRIDE, DFDs, and proactive risk identification.",
    link: "https://owasp.org/www-community/Threat_Modeling",
    technology: "Security",
    difficulty: "advanced",
    rating: 4.1,
  },

  // ─────────────────────────────────────────────
  // DATABASES
  // ─────────────────────────────────────────────
  {
    title: "PostgreSQL Tutorial",
    description: "SQL fundamentals, indexing, transactions, and EXPLAIN.",
    link: "https://www.postgresql.org/docs/",
    technology: "Databases",
    difficulty: "beginner",
    rating: 4.4,
  },
  {
    title: "Designing Data-Intensive Applications (Notes)",
    description: "Consistency models, streams, and distributed systems.",
    link: "https://dataintensive.net/",
    technology: "Databases",
    difficulty: "advanced",
    rating: 4.9,
  },

  // ─────────────────────────────────────────────
  // CONTAINERS / DOCKER
  // ─────────────────────────────────────────────
  {
    title: "Docker — Getting Started",
    description: "Images, containers, registries, and Compose.",
    link: "https://docs.docker.com/get-started/",
    technology: "Containers",
    difficulty: "beginner",
    rating: 4.5,
  },
  {
    title: "Docker Security",
    description: "Image scanning, least privilege, and isolation.",
    link: "https://docs.docker.com/engine/security/",
    technology: "Containers",
    difficulty: "intermediate",
    rating: 4.0,
  },

  // ─────────────────────────────────────────────
  // MESSAGING / STREAMS
  // ─────────────────────────────────────────────
  {
    title: "Kafka — Concepts",
    description: "Brokers, partitions, replication, and consumer groups.",
    link: "https://kafka.apache.org/documentation/",
    technology: "Messaging",
    difficulty: "intermediate",
    rating: 4.3,
  },
  {
    title: "Event-Driven Architecture",
    description: "EDA patterns for resilient, decoupled systems.",
    link: "https://martinfowler.com/articles/201701-event-driven.html",
    technology: "Messaging",
    difficulty: "advanced",
    rating: 4.2,
  },

  // ─────────────────────────────────────────────
  // SRE PRACTICES
  // ─────────────────────────────────────────────
  {
    title: "Google SRE Book",
    description: "Core principles: SLOs, toil reduction, incident response.",
    link: "https://sre.google/sre-book/table-of-contents/",
    technology: "SRE",
    difficulty: "beginner",
    rating: 4.9,
  },
  {
    title: "Incident Management Handbook",
    description: "Runbooks, comms, and blameless postmortems.",
    link: "https://sre.google/sre-book/incident-response/",
    technology: "SRE",
    difficulty: "intermediate",
    rating: 4.7,
  },

  // ─────────────────────────────────────────────
  // PLATFORM ENGINEERING
  // ─────────────────────────────────────────────
  {
    title: "Backstage by Spotify",
    description: "Developer portals and service catalogs.",
    link: "https://backstage.io/",
    technology: "Platform Engineering",
    difficulty: "intermediate",
    rating: 4.3,
  },

  // ─────────────────────────────────────────────
  // CLOUD NATIVE ARCHITECTURE
  // ─────────────────────────────────────────────
  {
    title: "Twelve-Factor App",
    description: "Best practices for building SaaS apps.",
    link: "https://12factor.net/",
    technology: "Architecture",
    difficulty: "beginner",
    rating: 4.8,
  },
  {
    title: "Service Mesh (Istio)",
    description: "Traffic management, MTLS, observability, resiliency.",
    link: "https://istio.io/latest/docs/concepts/what-is-istio/",
    technology: "Architecture",
    difficulty: "advanced",
    rating: 4.4,
  },

  // ─────────────────────────────────────────────
  // GIT / VERSION CONTROL
  // ─────────────────────────────────────────────
  {
    title: "Pro Git (Book)",
    description: "In-depth guide to Git internals and workflows.",
    link: "https://git-scm.com/book/en/v2",
    technology: "Git",
    difficulty: "beginner",
    rating: 4.7,
  },
  {
    title: "Trunk-Based Development",
    description: "High-velocity delivery with short-lived branches.",
    link: "https://trunkbaseddevelopment.com/",
    technology: "Git",
    difficulty: "intermediate",
    rating: 4.2,
  },

  // ─────────────────────────────────────────────
  // MISC / GENERAL
  // ─────────────────────────────────────────────
  {
    title: "Systems Design Primer",
    description: "Comprehensive study guide for distributed systems.",
    link: "https://github.com/donnemartin/system-design-primer",
    technology: "Systems Design",
    difficulty: "intermediate",
    rating: 4.9,
  },
  {
    title: "API Design Guidelines",
    description: "Consistency, versioning, pagination, and idempotency.",
    link: "https://docs.github.com/rest/overview/resources-in-the-rest-api",
    technology: "APIs",
    difficulty: "intermediate",
    rating: 4.1,
  },
];

/**
 * Optional helpers (if you want quick lists):
 */
export const ALL_TECHNOLOGIES = Array.from(
  new Set(resources.map((r) => r.technology))
).sort();

export const ALL_ROADMAPS = Array.from(
  new Set(resources.map((r) => r.roadmap).filter(Boolean))
).sort() as string[];
