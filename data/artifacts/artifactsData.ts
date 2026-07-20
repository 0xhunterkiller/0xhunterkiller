// src/data/artifacts/artifactsData.ts

export interface Artifact {
  title: string;
  description: string;
  tags: string[];
  /** Filename under public/artifacts/ */
  file: string;
  date: string;
  featured?: boolean;
}

export const artifacts: Artifact[] = [
  {
    title: "Tokens, end to end",
    description:
      "How an LLM actually reads text — bytes to BPE merges to embeddings, with the token spectrum rendered inline so the splits are visible rather than described.",
    tags: ["ai", "llm"],
    file: "tokens.html",
    date: "Jul 2026",
    featured: true,
  },
  {
    title: "Subnetting, from first principles to fluent",
    description:
      "CIDR, masks, and borrowed bits built up from binary until the arithmetic stops needing a calculator. Network and host bits are colour-coded throughout.",
    tags: ["networking", "fundamentals"],
    file: "subnetting-mastery.html",
    date: "Jul 2026",
  },
  {
    title: "Process Memory, how memory works inside a process",
    description:
      "Understanding how memory works inside a process, is very important to mitigate, and avoid memory based attacks / bugs.",
    tags: ["memory", "fundamentals"],
    file: "process-memory.html",
    date: "Jul 2026",
  },
];
