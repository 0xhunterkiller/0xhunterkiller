"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { inspirationFolders } from "@/data/learn/inspirationData";
import InspirationsFolder from "@/components/learn/InspirationsFolder";
import InspirationsGrid from "@/components/learn/InspirationsGrid";

export default function InspirationsHub() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFolder, setActiveFolder] = useState<string | null>(null);

  const folder = inspirationFolders.find((f) => f.name === activeFolder);

  return (
    <section className="w-full max-w-6xl mx-auto mt-20 text-gray-200">
      <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">
        Inspirations
      </h2>
      <p className="text-gray-400 text-center mb-10">
        Curated folders of videos, talks, and articles that shaped how I think.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {inspirationFolders.map((folder, idx) => (
          <InspirationsFolder
            key={folder.name + idx}
            folder={folder}
            onClick={(name) => {
              setActiveFolder(name);
              setIsOpen(true);
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        {isOpen && folder && (
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
              <div className="flex items-center justify-between px-6 py-4 border-b border-blue-500/20">
                <h4 className="text-lg font-semibold text-blue-300">
                  Folder: {folder.name}
                </h4>
                <button
                  className="text-blue-400 hover:text-blue-300"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="px-6 py-3 border-b border-blue-500/20 text-gray-400 text-sm">
                {folder.description}
              </div>

              <InspirationsGrid items={folder.items} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
