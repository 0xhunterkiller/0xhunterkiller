import AboutMe from '@/components/pages/MeComp';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Saai Sudarsanan — career, skills, and journey.",
  openGraph: {
    title: "Saai Sudarsanan — About Me",
    description:
      "Get to know me here, Saai Sudarsanan.",
    images: ["/og/portfolio.png"],
  }
};

export default function MePage() {
  return <AboutMe />;
}
