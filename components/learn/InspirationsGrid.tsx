"use client";

import { motion } from "framer-motion";
import { ExternalLink, SquarePlay, BookOpen, Mic } from "lucide-react";
import { InspirationItem } from "@/data/learn/inspirationData";

const typeIcons: Record<string, any> = {
  article: <BookOpen className="w-4 h-4 text-blue-400" />,
  video: <SquarePlay className="w-4 h-4 text-red-500" />,
  talk: <Mic className="w-4 h-4 text-amber-400" />,
};

interface InspirationsGridProps {
  items?: InspirationItem[];
}

export default function InspirationsGrid({ items }: InspirationsGridProps) {
  if (items && items.length > 0) {
    return (
      <div className="max-h-[60vh] overflow-y-auto p-6 grid md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <motion.a
            key={item.title + idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
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
            {item.author && (
              <p className="text-xs text-gray-400 mb-2">— {item.author}</p>
            )}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="italic">{item.platform}</span>
              <ExternalLink className="w-4 h-4 text-gray-500" />
            </div>
          </motion.a>
        ))}
      </div>
    );
  }
}
