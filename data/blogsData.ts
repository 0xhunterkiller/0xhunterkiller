// data/blogsData.ts

export interface BlogPost {
  title: string;
  description: string;
  tags: string[];
  source: "medium" | "linkedin" | "github" | "substack";
  url?: string; // external link (for Medium, LinkedIn, Substack)
  slug?: string; // internal blog route (for GitHub blogs)
  featured?: boolean;
}

export const blogs: BlogPost[] = [
  {
    title: "What are Distributed Systems?",
    description:
      "A beginner-friendly breakdown of distributed systems and why they’re the backbone of cloud infrastructure.",
    tags: ["systems", "theory", "distributed"],
    source: "medium",
    url: "https://medium.com/@saaisudarsanan/what-are-distributed-systems-d1310dc630ef",
    featured: true,
  },
  {
    title: "Setup Jaeger Operator with Opensearch for Kubernetes",
    description:
      "A hands-on guide for integrating tracing and observability using Jaeger and OpenSearch in a K8s cluster.",
    tags: ["kubernetes", "observability", "devops"],
    source: "medium",
    url: "https://medium.com/@saaisudarsanan/setup-jaeger-operator-with-opensearch-for-kubernetes-61739b0bb75c",
    featured: true,
  },
  {
    title: "Into the Wild: Navigating Cyber Security",
    description:
      "A personal take on cybersecurity principles, risks, and evolving best practices in modern systems.",
    tags: ["security", "cybersecurity", "insights"],
    source: "linkedin",
    url: "https://www.linkedin.com/pulse/wild-navigating-cyber-security-saai-sudarsanan-d-wp8xc/",
    featured: true,
  },
  {
    title: "Comparing Different Logging Solutions in Clojure",
    description:
      "A technical comparison of various logging frameworks in Clojure, including performance and readability trade-offs.",
    tags: ["clojure", "logging", "backend"],
    source: "substack",
    url: "https://stories.getswym.com/p/comparing-different-logging-solutions",
  },
  {
    title: "DVWA Solutions",
    description:
      "A deep-dive into web security using Damn Vulnerable Web App — exploring and fixing common vulnerabilities.",
    tags: ["security", "web", "github"],
    source: "github",
    slug: "dvwa-solutions", // internal markdown page
  },
  {
    title: "Crowdstrike Analysis",
    description:
      "A breakdown and analysis of CrowdStrike’s 2024 Falcon outage and its impact on global infrastructure.",
    tags: ["analysis", "incident", "github"],
    source: "github",
    slug: "crowdstrike-analysis",
  },
];
