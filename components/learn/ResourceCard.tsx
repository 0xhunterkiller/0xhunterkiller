"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  rating: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  technology: string;
  roadmap?: string;
  step?: number;
}

export default function ResourceCard({
  title,
  description,
  link,
  rating,
  difficulty,
  technology,
  roadmap,
  step,
}: ResourceCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="block border border-blue-500/20 bg-[#0b0f17]/70 rounded-xl p-4 hover:border-blue-400/40 transition-all"
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-blue-300 font-semibold text-base">{title}</h4>
        <div className="flex items-center gap-1 text-yellow-400 text-xs">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              fill={i < Math.round(rating) ? "currentColor" : "none"}
            />
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-300 mb-3">{description}</p>

      <div className="flex flex-wrap gap-2 text-xs text-gray-400">
        <span
          className={`px-2 py-0.5 border rounded-md ${
            difficulty === "beginner"
              ? "border-green-400/40 text-green-400"
              : difficulty === "intermediate"
              ? "border-yellow-400/40 text-yellow-400"
              : "border-red-400/40 text-red-400"
          }`}
        >
          {difficulty}
        </span>
        <span className="px-2 py-0.5 border border-blue-500/30 rounded-md text-blue-400">
          {technology}
        </span>
        {roadmap && (
          <span className="px-2 py-0.5 border border-blue-500/30 rounded-md text-blue-300">
            {roadmap} {step && <span className="text-gray-400">(Step {step})</span>}
          </span>
        )}
      </div>
    </motion.a>
  );
}
