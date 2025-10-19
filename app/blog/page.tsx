import Blog from "@/components/pages/BlogComp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "DevOps, Cloud Native, and Software Engineering blogs by Saai Sudarsanan — insights on systems, scalability, and automation.",
  openGraph: {
    title: "Saai Sudarsanan — Technical Blogs",
    description:
      "Explore articles on DevOps, Cloud Native, and Observability written by Saai Sudarsanan.",
    images: ["/og/portfolio.png"],
  }
};

export default function BlogPage() {
  return <Blog />;
}
