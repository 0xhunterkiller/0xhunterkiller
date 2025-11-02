// src/data/blogsData.ts

export interface BlogPost {
  title: string;
  description: string;
  tags: string[];
  source: "medium" | "linkedin" | "substack";
  url: string;
  featured?: boolean;
}

export const blogs: BlogPost[] = [
  // --- Medium ---
  {
    title: "What are Distributed Systems?",
    description:
      "A beginner-friendly breakdown of distributed systems and why they’re the backbone of cloud infrastructure.",
    tags: ["distributed-systems", "devops"],
    source: "medium",
    url: "https://medium.com/@saaisudarsanan/what-are-distributed-systems-d1310dc630ef",
  },
  {
    title: "Setup Jaeger Operator with Opensearch for Kubernetes",
    description:
      "A hands-on guide for integrating tracing and observability using Jaeger and OpenSearch in a K8s cluster.",
    tags: ["devops"],
    source: "medium",
    url: "https://medium.com/@saaisudarsanan/setup-jaeger-operator-with-opensearch-for-kubernetes-61739b0bb75c",
    featured: true
  },
  {
    title: "Residual Networks",
    description:
      "An intuitive walkthrough of ResNets — understanding how skip connections changed AI forever.",
    tags: ["AI"],
    source: "medium",
    url: "https://medium.com/@saaisudarsanan/residual-networks-dd25bda5daa9",
  },
  {
    title: "Why Image Processing?",
    description:
      "The first part of the Image Processing series — introducing digital image processing and its real-world impact.",
    tags: ["image-processing"],
    source: "medium",
    url: "https://medium.com/@saaisudarsanan/digital-image-processing-2-494085e2e09",
  },
  {
    title: "Image Functions, Pixels and Types of Image Processing",
    description:
      "Explores the structure of digital images, types of processing, and the math behind pixels.",
    tags: ["image-processing"],
    source: "medium",
    url: "https://medium.com/@saaisudarsanan/digital-image-processing-3-e0eb83d65e04",
  },
  {
    title: "Filters and Operations on an Image",
    description:
      "A hands-on dive into convolution filters and how they transform images.",
    tags: ["image-processing"],
    source: "medium",
    url: "https://medium.com/@saaisudarsanan/filters-and-operations-on-an-image-da31054db734",
  },
  {
    title: "What are Convolutional Neural Networks?",
    description:
      "Breaking down CNNs — the architecture powering modern computer vision.",
    tags: ["image-processing", "AI"],
    source: "medium",
    url: "https://medium.com/@saaisudarsanan/what-are-convolutional-neural-networks-ee93fabfaaa5",
    featured: true
  },
  {
    title: "All-Powerful(kind of) Machines",
    description:
      "Turing Machines? Limits of Computation? Find answers here.",
    tags: ["observability", "math"],
    source: "medium",
    url: "https://saaisudarsanan.medium.com/all-powerful-kind-of-machines-375c62c830c2",
    featured: true
  },

  // --- LinkedIn Newsletter ---
  {
    title: "AI, UI, MCP and Beyond — How to Run Everything Locally",
    description:
      "A run through how to setup a local UI, MCP and AI and completely remove the need for any LLM Provider",
    tags: ["AI"],
    source: "linkedin",
    url: "https://www.linkedin.com/pulse/ai-ui-mcp-beyond-how-run-everything-locally-saai-sudarsanan-d-mpt3c",
  },
  {
    title: "Into the Wild: Navigating Cyber Security",
    description:
      "In the vast world of cybersecurity, this blog will help you navigate your learning path and set goals",
    tags: ["cybersecurity"],
    source: "linkedin",
    url: "https://www.linkedin.com/pulse/wild-navigating-cyber-security-saai-sudarsanan-d-wp8xc",
  },
  {
    title: "Dear AI, Where's all the money going?",
    description:
      "An exploration of AI economics — tracing how funding, hype, and real-world value intersect.",
    tags: ["AI", "economics"],
    source: "linkedin",
    url: "https://www.linkedin.com/pulse/dear-ai-wheres-all-money-going-saai-sudarsanan-d-7pcjc",
  },
  {
    title: "HTTPS: Built on Trust Issues",
    description:
      "Demystifying HTTPS and SSL — understanding why the internet’s security model is both genius and flawed.",
    tags: ["cybersecurity"],
    source: "linkedin",
    url: "https://www.linkedin.com/pulse/https-built-trust-issues-saai-sudarsanan-d-qtk5c",
    featured: true
  },
  {
    title: "The Chenab Bridge: A Software Perspective",
    description:
      "How software helped with the construction of the highest bridge in the world",
    tags: ["economics"],
    source: "linkedin",
    url: "https://www.linkedin.com/pulse/chenab-bridge-software-perspective-saai-sudarsanan-d-vckqc",
  },
  {
    title: "kubectl Like a Pro: Commands That Save You in Production",
    description:
      "A list of essential kubectl commands every engineer should know for survival in production.",
    tags: ["devops"],
    source: "linkedin",
    url: "https://www.linkedin.com/pulse/kubectl-like-pro-commands-save-you-production-saai-sudarsanan-d-klx2c",
  },
  {
    title: "Set It. Forget It. Automate It. With Cron",
    description:
      "A simple take on automation with cron — the unsung hero of every reliable system.",
    tags: ["devops"],
    source: "linkedin",
    url: "https://www.linkedin.com/pulse/set-forget-automate-cron-saai-sudarsanan-d-pebrc",
  },
  {
    title: "Promises, Targets, and Reality",
    description:
      "You don't know SRE, until you learn about SLA, SLO and SLI",
    tags: ["devops"],
    source: "linkedin",
    url: "https://www.linkedin.com/pulse/promises-targets-reality-saai-sudarsanan-d-tigvc",
  },

  // --- Substack ---
  {
    title: "Comparing different Logging Solutions in Clojure",
    description:
      "Benchmarking various logging libraries in Clojure to find the most efficient and reliable approach.",
    tags: ["clojure"],
    source: "substack",
    url: "https://stories.getswym.com/p/comparing-different-logging-solutions",
  },
  {
    title: "Midnight Mayhem: Lessons from a 2 AM Outage",
    description:
    "A real-world account of debugging an outage — lessons on reliability, calm under pressure, and team coordination.",
    tags: ["incident-response"],
    source: "substack",
    url: "https://stories.getswym.com/p/midnight-mayhem-lessons-from-a-2",
    featured: true
  },
];
