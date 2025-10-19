import Learn from '@/components/pages/LearnComp'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn",
  description: "Learn from Saai Sudarsanan — tech articles, technologies, wisdom from internet and various roadmaps to help you navigate the tech world",
  openGraph: {
    title: "Saai Sudarsanan — Learn",
    description:
      "Curated Roadmaps and Resources for everyone in tech by Saai Sudarsanan.",
    images: ["/og/portfolio.png"],
  }
};

export default function LearnPage() {
  return <Learn />;
}
