"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import ResourceCard from "@/components/learn/ResourceCard";
import { resources } from "@/data/learn/resourcesData";

const difficultyOrder = { beginner: 1, intermediate: 2, advanced: 3 };

export default function TechnologiesSection() {
  const technologies = useMemo(
    () => Array.from(new Set(resources.map((r) => r.technology))),
    []
  );

  const [isOpen, setIsOpen] = useState(false);
  const [activeTech, setActiveTech] = useState<string>("");
  const [sortBy, setSortBy] = useState<"difficulty" | "rating">("difficulty");

  const openModal = (tech: string) => {
    setActiveTech(tech);
    setIsOpen(true);
  };

  const closeModal = () => {
    setActiveTech("");
    setIsOpen(false);
  };

  const modalResources = useMemo(() => {
    const filtered = resources.filter((r) => r.technology === activeTech);
    return [...filtered].sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
    });
  }, [activeTech, sortBy]);

  return (
    <section>
      <h3 className="text-lg font-semibold text-blue-400 mb-4 text-center">
        Technologies
      </h3>

      {/* Grid of glowing tech cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {technologies.map((tech, _) => (
          <motion.button
            key={tech}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => openModal(tech)}
            className="relative group overflow-hidden rounded-2xl border border-blue-500/30 bg-gradient-to-br from-[#0b0f17]/70 to-[#0d1220]/70 hover:from-[#101726]/70 hover:to-[#141b2d]/70 transition-all shadow-[0_0_10px_rgba(59,130,246,0.15)] hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
          >
            {/* Animated glow behind text */}
            <motion.div
              className="absolute inset-0 bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
              initial={false}
            />
            {/* Tech Label */}
            <div className="relative z-10 flex flex-col items-center justify-center py-6 px-3 text-center text-blue-300 font-medium text-base tracking-wide">
              <span className="mb-1 text-[15px] font-semibold">
                {tech}
              </span>
              <span className="text-xs text-gray-500 opacity-70 group-hover:text-gray-400">
                {resources.filter((r) => r.technology === tech).length} resources
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Modal for resources under technology */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-[92%] md:w-[80%] lg:w-[70%] max-h-[85vh] overflow-hidden border border-blue-500/20 bg-[#0b0f17]/90 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.15)]"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-blue-500/20">
                <h4 className="text-lg font-semibold text-blue-300">
                  Technology: {activeTech}
                </h4>
                <button
                  className="text-blue-400 hover:text-blue-300"
                  onClick={closeModal}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Sorting Controls */}
              <div className="flex items-center gap-3 px-6 py-3 border-b border-blue-500/20">
                <label className="text-sm text-gray-400">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value as "difficulty" | "rating")
                  }
                  className="bg-[#101726]/70 border border-blue-500/20 text-gray-200 rounded-lg px-2 py-1 text-sm focus:outline-none"
                >
                  <option value="difficulty">Difficulty</option>
                  <option value="rating">Rating</option>
                </select>
              </div>

              {/* Resource List */}
              <div className="max-h-[58vh] overflow-y-auto px-6 pb-6">
                {modalResources.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {modalResources.map((r) => (
                      <ResourceCard key={`${r.title}-${r.link}`} {...r} />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-10 text-sm">
                    No resources found.
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
