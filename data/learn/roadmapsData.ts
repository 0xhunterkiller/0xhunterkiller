// data/learn/roadmapsData.ts

export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface RoadmapStep {
  title: string;
  description: string;
  link?: string;
  difficulty: Difficulty;
}

export interface Roadmap {
  name: string;
  summary: string;
  steps: RoadmapStep[];
  estimatedTime?: string; // optional metadata like "3 weeks"
  tags?: string[]; // optional keywords for filtering/search
}

export const roadmaps: Roadmap[] = [
  {
    name: "DevOps Roadmap",
    summary:
      "Learn how to go from zero to hero in DevOps — covering Linux, CI/CD, Containers, and Cloud.",
    estimatedTime: "8 weeks",
    tags: ["DevOps", "Cloud", "Kubernetes"],
    steps: [
      {
        title: "Learn Linux Basics",
        description:
          "Understand file systems, permissions, and basic networking commands.",
        link: "https://ubuntu.com/tutorials/command-line-for-beginners",
        difficulty: "beginner",
      },
      {
        title: "Master Git & Version Control",
        description:
          "Learn branching, merging, and collaborative development with Git and GitHub.",
        link: "https://learngitbranching.js.org/",
        difficulty: "beginner",
      },
      {
        title: "Containerization with Docker",
        description:
          "Understand how to package and run applications in isolated environments using Docker.",
        link: "https://docs.docker.com/get-started/",
        difficulty: "intermediate",
      },
      {
        title: "Kubernetes for Developers",
        description:
          "Learn how to deploy, scale, and manage containerized applications using Kubernetes.",
        link: "https://kubernetes.io/docs/tutorials/",
        difficulty: "intermediate",
      },
      {
        title: "CI/CD with Jenkins and GitHub Actions",
        description:
          "Automate builds, tests, and deployments using Jenkins and GitHub Actions.",
        link: "https://www.jenkins.io/doc/book/pipeline/",
        difficulty: "advanced",
      },
    ],
  },
  {
    name: "Observability Roadmap",
    summary:
      "Understand logging, metrics, and tracing — the three pillars of modern observability.",
    estimatedTime: "6 weeks",
    tags: ["Monitoring", "Logging", "Tracing"],
    steps: [
      {
        title: "Introduction to Monitoring",
        description: "Learn about system and application monitoring basics.",
        link: "https://prometheus.io/docs/introduction/overview/",
        difficulty: "beginner",
      },
      {
        title: "Metrics with Prometheus & Grafana",
        description:
          "Set up Prometheus for metrics collection and visualize data using Grafana.",
        link: "https://grafana.com/docs/",
        difficulty: "intermediate",
      },
      {
        title: "Logging with Fluentd and OpenSearch",
        description:
          "Collect, parse, and analyze logs effectively using Fluentd and OpenSearch.",
        link: "https://docs.fluentd.org/",
        difficulty: "intermediate",
      },
      {
        title: "Distributed Tracing with Jaeger",
        description:
          "Implement distributed tracing for your microservices with OpenTelemetry and Jaeger.",
        link: "https://www.jaegertracing.io/docs/",
        difficulty: "advanced",
      },
    ],
  },
];
