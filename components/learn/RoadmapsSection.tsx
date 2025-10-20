"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { roadmaps } from "@/data/learn/roadmapsData";

export default function RoadmapsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeRoadmap, setActiveRoadmap] = useState<string | null>(null);

  const openModal = (name: string) => {
    setActiveRoadmap(name);
    setIsOpen(true);
  };

  const closeModal = () => {
    setActiveRoadmap(null);
    setIsOpen(false);
  };

  const roadmap = roadmaps.find((r) => r.name === activeRoadmap);

  return (
    <section className="mb-12">
      <h3 className="text-lg font-semibold text-blue-400 mb-4 text-center">
        Roadmaps
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {roadmaps.map((r) => (
          <motion.button
            key={r.name}
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(r.name)}
            className="px-4 py-3 rounded-xl border border-blue-500/20 bg-[#0b0f17]/60 text-blue-300 hover:border-blue-400/50 transition-all"
          >
            {r.name}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && roadmap && (
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
                  {roadmap.name}
                </h4>
                <button
                  className="text-blue-400 hover:text-blue-300"
                  onClick={closeModal}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Summary */}
              <div className="px-6 py-3 text-gray-300 text-sm border-b border-blue-500/20">
                {roadmap.summary}
              </div>

              {/* Steps */}
              <div className="max-h-[60vh] overflow-y-auto px-6 pb-6">
                <div className="space-y-4 mt-4">
                  {roadmap.steps.map((s, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border border-blue-500/20 rounded-lg p-4 bg-[#0b0f17]/60"
                    >
                      <h5 className="text-blue-300 font-semibold text-base mb-1">
                        Step {index + 1}: {s.title}
                      </h5>
                      <p className="text-gray-400 text-sm mb-2">
                        {s.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span
                          className={`px-2 py-0.5 border rounded-md ${
                            s.difficulty === "beginner"
                              ? "border-green-400/40 text-green-400"
                              : s.difficulty === "intermediate"
                              ? "border-yellow-400/40 text-yellow-400"
                              : "border-red-400/40 text-red-400"
                          }`}
                        >
                          {s.difficulty}
                        </span>
                        {s.link && (
                          <a
                            href={s.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            Learn →
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
