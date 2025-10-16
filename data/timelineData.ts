// data/timelineData.ts

export interface TimelineEntry {
  title: string; // e.g., "Promoted to Software Engineer I"
  date?: string; // optional exact date or month
  description?: string; // short paragraph
  tags?: string[]; // skills, techs, themes
  link?: { label: string; href: string }; // optional external/internal link
}

export interface TimelineYear {
  year: string;
  role?: string; // optional role or position held during the year
  organization?: string; // e.g., "Swym"
  highlights: TimelineEntry[];
}

export const timelineData: TimelineYear[] = [
  {
    year: "2025",
    role: "Software Engineer I",
    organization: "Swym Corporation",
    highlights: [
      {
        title:
          "Led AI Transformation efforts across engineering and infrastructure teams.",
        description:
          "Built automation tooling to integrate AI-assisted CI/CD improvements and Slack-based deployment bots.",
        tags: ["AI", "Automation", "Slack", "CI/CD"],
      },
      {
        title:
          "Migrated production services to next-gen Kubernetes clusters with workload identities.",
        description:
          "Achieved 20% cost savings and better workload isolation using GKE Autopilot + Azure Spot VM mix.",
        tags: ["Kubernetes", "Cloud", "Azure", "Cost Optimization"],
      },
      {
        title: "Enhanced Observability and Distributed Tracing.",
        description:
          "Implemented Jaeger + Kafka setup, improving trace visibility and latency analysis across microservices.",
        tags: ["Observability", "Tracing", "Kafka", "Jaeger"],
        link: {
          label: "View Architecture Diagram",
          href: "/assets/observability-2025.pdf",
        },
      },
    ],
  },
  {
    year: "2024",
    role: "Associate Software Engineer",
    organization: "Swym",
    highlights: [
      {
        title: "Established end-to-end Observability Stack.",
        description:
          "Rolled out OpenSearch, Jaeger, and FluentBit; introduced Lua scripts for smart log routing.",
        tags: ["OpenSearch", "FluentBit", "Logging"],
      },
      {
        title: "Azure Cost Optimization",
        description:
          "Reduced monthly infra spend by 30% through ILM policies, resource rightsizing, and spot utilization.",
        tags: ["Azure", "DevOps", "Cloud"],
      },
      {
        title: "Built Opsgenie-style Alerting System",
        description:
          "Created BFCM readiness playbooks, automated alert routing, and improved incident response.",
        tags: ["Monitoring", "Automation", "Incident Response"],
      },
    ],
  },
  {
    year: "2023",
    role: "Associate Software Engineer (Intern → Full-time)",
    organization: "Swym",
    highlights: [
      {
        title: "Migrated legacy apps to Kubernetes.",
        description:
          "Containerized Node.js and Clojure workloads using Helm; implemented secure secrets and GitOps deployment.",
        tags: ["Kubernetes", "Helm", "Clojure", "DevOps"],
      },
      {
        title: "Introduced Prometheus + Grafana OnCall.",
        description:
          "Deployed monitoring stack and standardized alert metrics across clusters.",
        tags: ["Prometheus", "Grafana", "Alerting"],
      },
      {
        title: "CI/CD Modernization",
        description:
          "Automated builds and deployments with Jenkins and ArgoCD pipelines; added Ansible for VM setup.",
        tags: ["ArgoCD", "Ansible", "CI/CD"],
        link: {
          label: "GitHub Example",
          href: "https://github.com/0xhunterkiller",
        },
      },
    ],
  },
  {
    year: "2022",
    role: "Software Engineering Intern",
    organization: "Swym",
    highlights: [
      {
        title: "First Production Deployment",
        description:
          "Contributed to customer sync microservice; learned fundamentals of distributed caching and retries.",
        tags: ["Internship", "Microservices", "Caching"],
      },
      {
        title: "Built internal CLI tool",
        description:
          "Developed a Python-based automation CLI for local Kubernetes development setup.",
        tags: ["Python", "CLI", "Kubernetes"],
      },
    ],
  },
  {
    year: "2021",
    highlights: [
      {
        title: "Started learning DevOps",
        description:
          "Experimented with Docker, Linux, and CI/CD pipelines; first personal deployment on Heroku.",
        tags: ["DevOps", "Docker", "Linux"],
      },
      {
        title: "Discovered my passion for systems & automation",
        description:
          "Began writing technical blogs and building small distributed experiments in Go and Clojure.",
        tags: ["Clojure", "Go", "Systems Thinking"],
      },
    ],
  },
];
