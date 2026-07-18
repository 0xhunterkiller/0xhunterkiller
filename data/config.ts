export const siteConfig = {
  name: "Saai Sudarsanan",
  handle: "0xhunterkiller",
  role: "Senior Software Engineer I",
  company: "Swym Corporation",
  email: "connectwithsaai@gmail.com",
  bio: "Building AI-powered infrastructure that handles 1M+ RPM — and the ops tooling to manage it. Three promotions in three years. Currently pursuing OMSCS at Georgia Tech.",
  operatingPrinciple:
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  resumeUrl:
    "https://docs.google.com/document/d/1imY3BnnjjdiffU02dVahPFcoZvJkdYHrdIdtuAqKx1s/export?format=pdf",
  social: {
    github: "https://github.com/0xhunterkiller",
    linkedin: "https://www.linkedin.com/in/0xhunterkiller/",
    medium: "https://saaisudarsanan.medium.com/",
  },
  featuredProject: {
    name: "Alfred — AI Ops Assistant",
    tagline: "Built Swym's internal AI operations assistant from scratch in ~9 days.",
    description:
      "Alfred sits in Slack. @mention it, it runs a Gemini 2.5 Flash agentic loop with access to production Kubernetes, Prometheus, Jaeger, OpenSearch, and GitHub. Deployed on Kubernetes with long-term memory and human approval gates.",
    tags: ["Gemini 2.5 Flash", "MCP", "Kubernetes", "Slack", "Redis Streams", "Python"],
  },
} as const;
