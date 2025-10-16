"use client";

import { inspirations } from "@/data/inspirationData";
import { motion } from "framer-motion";
import { ExternalLink, SquarePlay, BookOpen, Mic } from "lucide-react";

const typeIcons: Record<string, any> = {
  article: <BookOpen className="w-4 h-4 text-blue-400" />,
  video: <SquarePlay className="w-4 h-4 text-red-500" />,
  talk: <Mic className="w-4 h-4 text-amber-400" />,
};

export default function InspirationsGrid() {
  return (
    <section className="w-full max-w-6xl mx-auto mt-20 text-gray-200">
      <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">
        Articles & Videos That Made Me Think
      </h2>
      <p className="text-gray-400 text-center mb-10">
        A collection of stories, talks, and articles that shaped how I approach
        reliability, culture, and software engineering.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {inspirations.map((item, idx) => (
          <motion.a
            key={item.title + idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="block border border-blue-500/20 bg-[#0b0f17]/70 rounded-xl p-5 hover:border-blue-400/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-blue-300 font-semibold text-base leading-snug">
                {item.title}
              </h3>
              <div className="ml-2">{typeIcons[item.type]}</div>
            </div>
            <p className="text-sm text-gray-400 mb-3">{item.description}</p>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="italic">{item.platform}</span>
              <ExternalLink className="w-4 h-4 text-gray-500" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
