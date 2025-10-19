"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ResourceCard from "./ResourceCard";
import { resources, Resource } from "@/data/learn/resourcesData";

const difficultyOrder = { beginner: 1, intermediate: 2, advanced: 3 };

/**
 * Main ResourceHub component
 */
export default function ResourceHub() {
  // Distinct roadmaps & technologies
  const roadmaps = useMemo(
    () =>
      Array.from(
        new Set(resources.map((r) => r.roadmap).filter(Boolean))
      ) as string[],
    []
  );

  const technologies = useMemo(
    () => Array.from(new Set(resources.map((r) => r.technology))),
    []
  );

  // Modal control
  const [isOpen, setIsOpen] = useState(false);
  const [contextType, setContextType] = useState<"roadmap" | "technology" | null>(
    null
  );
  const [contextValue, setContextValue] = useState<string>("");

  const [sortBy, setSortBy] = useState<"step" | "difficulty" | "rating">(
    "difficulty"
  );
  const [filter, setFilter] = useState<string>("all");

  /**
   * Open modal for a roadmap
   */
  const openRoadmap = (roadmap: string) => {
    setContextType("roadmap");
    setContextValue(roadmap);
    setSortBy("step");
    setFilter("all");
    setIsOpen(true);
  };

  /**
   * Open modal for a technology
   */
  const openTechnology = (tech: string) => {
    setContextType("technology");
    setContextValue(tech);
    setSortBy("difficulty");
    setFilter("all");
    setIsOpen(true);
  };

  /**
   * Close modal
   */
  const closeModal = () => {
    setIsOpen(false);
    setContextType(null);
    setContextValue("");
  };

  /**
   * Get filtered + sorted data for current modal
   */
  const modalResources = useMemo(() => {
    if (!contextType || !contextValue) return [];

    let filtered: Resource[] = [];

    if (contextType === "roadmap") {
      filtered = resources.filter((r) => r.roadmap === contextValue);
      if (filter !== "all") {
        filtered = filtered.filter((r) => r.technology === filter);
      }
    } else {
      filtered = resources.filter((r) => r.technology === contextValue);
      if (filter !== "all") {
        if (filter === "none") filtered = filtered.filter((r) => !r.roadmap);
        else filtered = filtered.filter((r) => r.roadmap === filter);
      }
    }

    return [...filtered].sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "difficulty")
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      if (sortBy === "step") return (a.step || 0) - (b.step || 0);
      return 0;
    });
  }, [contextType, contextValue, sortBy, filter]);

  /**
   * Build dropdown filter options dynamically
   */
  const availableFilters = useMemo(() => {
    if (contextType === "roadmap") {
      const techs = Array.from(
        new Set(
          resources
            .filter((r) => r.roadmap === contextValue)
            .map((r) => r.technology)
        )
      );
      return ["all", ...techs];
    } else if (contextType === "technology") {
      const roadmapsForTech = Array.from(
        new Set(
          resources
            .filter((r) => r.technology === contextValue)
            .map((r) => r.roadmap || "none")
        )
      );
      return ["all", ...roadmapsForTech];
    }
    return [];
  }, [contextType, contextValue]);

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-20">
      {/* Section Header */}
      <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">
        Resources
      </h2>
      <p className="text-gray-400 text-center mb-10">
        Explore curated learning paths and technologies — filtered by your focus.
      </p>

      {/* Roadmaps Grid */}
      <section className="mb-12">
        <h3 className="text-lg font-semibold text-blue-400 mb-4 text-center">
          Roadmaps
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {roadmaps.map((rm) => (
            <motion.button
              key={rm}
              whileHover={{ scale: 1.05 }}
              onClick={() => openRoadmap(rm)}
              className="px-4 py-3 rounded-xl border border-blue-500/20 bg-[#0b0f17]/60 text-blue-300 hover:border-blue-400/50 transition-all"
            >
              {rm}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Technologies Grid */}
      <section>
        <h3 className="text-lg font-semibold text-blue-400 mb-4 text-center">
          Technologies
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {technologies.map((tech) => (
            <motion.button
              key={tech}
              whileHover={{ scale: 1.05 }}
              onClick={() => openTechnology(tech)}
              className="px-4 py-3 rounded-xl border border-blue-500/20 bg-[#0b0f17]/60 text-blue-300 hover:border-blue-400/50 transition-all"
            >
              {tech}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Modal */}
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
                  {contextType === "roadmap"
                    ? `Roadmap: ${contextValue}`
                    : `Technology: ${contextValue}`}
                </h4>
                <button
                  className="text-blue-400 hover:text-blue-300"
                  onClick={closeModal}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Controls */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 pt-4 pb-2">
                <div className="flex items-center gap-3">
                  <label className="text-sm text-gray-400">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) =>
                      setSortBy(
                        e.target.value as "step" | "difficulty" | "rating"
                      )
                    }
                    className="bg-[#101726]/70 border border-blue-500/20 text-gray-200 rounded-lg px-2 py-1 text-sm focus:outline-none"
                  >
                    {contextType === "roadmap" && (
                      <option value="step">Step</option>
                    )}
                    <option value="difficulty">Difficulty</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <label className="text-sm text-gray-400">
                    Filter by {contextType === "roadmap" ? "Technology" : "Roadmap"}:
                  </label>
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="bg-[#101726]/70 border border-blue-500/20 text-gray-200 rounded-lg px-2 py-1 text-sm focus:outline-none"
                  >
                    {availableFilters.map((f) => (
                      <option key={f} value={f}>
                        {f === "all"
                          ? "All"
                          : f === "none"
                          ? "No Roadmap"
                          : f}
                      </option>
                    ))}
                  </select>
                </div>
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
                    No resources found for the selected filters.
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
