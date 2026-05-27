"use client";

import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  description: string;
  tags: string[];
  source: string;
  url: string;
}

const sourceStyles: Record<string, { label: string; color: string }> = {
  medium: { label: "Medium", color: "text-yellow-500/70" },
  linkedin: { label: "LinkedIn", color: "text-blue-400/70" },
  substack: { label: "Substack", color: "text-orange-400/70" },
};

export default function BlogCard({ title, description, tags, source, url }: BlogCardProps) {
  const src = sourceStyles[source] ?? { label: source, color: "text-gray-500" };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col border border-white/[0.07] bg-white/[0.02] rounded-xl p-5 hover:border-white/15 transition-colors duration-200 group"
    >
      <h3 className="text-gray-200 font-semibold text-sm leading-snug group-hover:text-white transition-colors mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-xs leading-relaxed flex-1 mb-3">{description}</p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {tags.map((t) => (
          <span
            key={t}
            className="font-mono text-[9px] px-1.5 py-0.5 border border-white/[0.06] rounded text-gray-700"
          >
            #{t}
          </span>
        ))}
      </div>
      <p className={`font-mono text-[10px] uppercase tracking-wider ${src.color}`}>
        {src.label}
      </p>
    </motion.a>
  );
}
