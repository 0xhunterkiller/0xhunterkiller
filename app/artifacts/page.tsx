import Artifacts from "@/components/pages/ArtifactsComp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artifacts",
  description:
    "Single-file interactive pages Saai Sudarsanan builds to learn things — networking, LLM internals, and systems fundamentals.",
  openGraph: {
    title: "Saai Sudarsanan — Artifacts",
    description:
      "Self-contained interactive explainers built while learning. Networking, LLM internals, systems fundamentals.",
    images: ["/og/portfolio.png"],
  },
};

export default function ArtifactsPage() {
  return <Artifacts />;
}
