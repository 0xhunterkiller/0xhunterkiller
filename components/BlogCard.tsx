"use client";

import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  description: string;
  tags: string[];
  source: string;
  url: string;
}

export default function BlogCard({
  title,
  description,
  tags,
  source,
  url,
}: BlogCardProps) {
  const sourceColors: Record<string, string> = {
    medium: "text-yellow-400",
    linkedin: "text-blue-500",
    substack: "text-orange-400",
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="border border-blue-500/20 bg-[#0b0f17]/60 rounded-xl p-5 hover:border-blue-400/50 transition-all duration-300 block"
    >
      <h3 className="text-blue-400 font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300 mb-3">{description}</p>

      <div className="flex flex-wrap gap-1 text-xs text-gray-400 mb-3">
        {tags.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 border border-blue-500/30 rounded-md"
          >
            #{t}
          </span>
        ))}
      </div>

      <p className={`text-xs font-semibold ${sourceColors[source]}`}>
        {source.charAt(0).toUpperCase() + source.slice(1)}
      </p>
    </motion.a>
  );
}
