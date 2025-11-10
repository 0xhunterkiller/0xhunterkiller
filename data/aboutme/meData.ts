// data/meData.ts

export const timelinePreview = [
  {
    year: "2025",
    text: "Promoted to Software Engineer I. Led Swym’s AI Transformation efforts — introduced AI-driven CI/CD assistants, Slack deployment bots, and spearheaded complete infrastructure modernization across clusters.",
  },
  {
    year: "2024",
    text: "Designed a robust observability and tracing ecosystem using Jaeger, Kafka, and OpenTelemetry. Drove infra cost optimization, redefined cluster reliability, and mentored juniors on Kubernetes operations.",
  },
  {
    year: "2023",
    text: "Transitioned from intern to full-time Associate Software Engineer. Migrated major services to Kubernetes, built CI/CD pipelines with ArgoCD, Jenkins, and Helm, and initiated secure secret management with Azure Key Vault.",
  },
];

export const achievements = [
  {
    title: "AI Transformation & Automation Leadership",
    desc: "Led Swym’s AI initiative across engineering — built Slack-based deployment assistants, explored LangGraph and LangChain for CI/CD improvements, and drove operational automation across clusters.",
  },
  {
    title: "Kubernetes Modernization & Migration",
    desc: "Planned and executed migration of core production workloads to next-gen AKS clusters with workload identities, VNet isolation, App Gateways, and Helm v2 charts — improving scalability and reducing deployment risk.",
  },
  {
    title: "Observability and Tracing Stack",
    desc: "Architected a unified observability platform with Jaeger, OpenSearch, FluentBit, and Kafka — delivering distributed tracing and real-time alerting, reducing debugging time by 60%.",
  },
  {
    title: "Build Pipeline Optimization",
    desc: "Reduced Jenkins build times by 75% through multi-stage Docker builds, caching strategies, and workload parallelization — improving developer productivity and CI/CD reliability.",
  },
  {
    title: "Security, Compliance, and Reliability",
    desc: "Implemented SOC2-aligned secret management with Azure Key Vault, led vulnerability remediation from penetration testing reports, and introduced secure ingress policies with Azure AD-based RBAC.",
  },
  {
    title: "Documentation & Mentorship",
    desc: "Conducted 10+ KT sessions on Kubernetes, Helm, Jenkins, and Observability. Authored internal developer handbooks and playbooks for production-grade deployments and incident response.",
  },
  {
    title: "Cost Optimization & Reliability",
    desc: "Reduced infra costs by moving workloads to spot instances, introduced backup automation, and enhanced monitoring precision.",
  },
];

export const skills = [
  "Kubernetes",
  "Docker",
  "Azure Cloud (AKS, VMSS, VNet)",
  "Helm",
  "ArgoCD",
  "Terraform",
  "Linux",
  "Jenkins",
  "GitHub Actions",
  "CI/CD Automation",
  "Infrastructure as Code",
  "Prometheus",
  "Grafana",
  "Jaeger",
  "OpenTelemetry",
  "Fluentd / FluentBit",
  "Opensearch",
  "Incident Response",
  "Clojure",
  "Python",
  "Node.js",
  "Bash / Shell Scripting",
  "Appsmith",
  "Networking & Load Balancing",
  "Security & Compliance",
  "Cost Optimization",
];

export const certifications = [
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


export const featuredBlogs = [
  {
    title: "What are Distributed Systems?",
    desc: "A beginner-friendly breakdown of distributed systems and why they’re the backbone of cloud infrastructure.",
  },
  {
    title: "Setup Jaeger Operator with Opensearch for Kubernetes",
    desc: "A hands-on guide for integrating tracing and observability using Jaeger and OpenSearch.",
  },
  {
    title: "Into the Wild: Navigating Cyber Security",
    desc: "A personal take on cybersecurity principles, risks, and evolving best practices in modern systems.",
  }
];

export const notableProjects = [
  {
    name: "ilogu3000",
    desc: "A benchmarking suite for Clojure logging frameworks — identified CPU inefficiencies in pretty-printing and optimized log formatting.",
    link: "https://github.com/0xhunterkiller/ilogu3000",
  },
  {
    name: "Slack Alert Bot",
    desc: "Bearer-token based bot that sends alerts to Slack channels without requiring Slack app installations.",
  },
  {
    name: "Prometheus Self-Serve Platform",
    desc: "A self-serve observability system enabling any team to provision Prometheus, Alertmanager, and Thanos through ArgoCD and Helm charts.",
  },
  {
    name: "DevOps Tool API",
    desc: "An internal API + Appsmith workspace to allow teams to safely modify Azure App Config values.",
  },
];
