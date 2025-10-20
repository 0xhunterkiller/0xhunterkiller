"use client";

import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";
import { InspirationFolder } from "@/data/learn/inspirationData";

interface InspirationsFolderProps {
  folder: InspirationFolder;
  onClick: (folderName: string) => void;
}

export default function InspirationsFolder({ folder, onClick }: InspirationsFolderProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      onClick={() => onClick(folder.name)}
      className="relative text-left border border-blue-500/20 bg-[#0b0f17]/60 hover:border-blue-400/40 rounded-xl p-6 transition-all group shadow-[0_0_10px_rgba(59,130,246,0.15)] hover:shadow-[0_0_15px_rgba(59,130,246,0.25)]"
    >
      <div className="flex items-center gap-3 mb-2">
        <FolderOpen className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
        <h3 className="text-blue-300 font-semibold text-lg">{folder.name}</h3>
      </div>
      <p className="text-sm text-gray-400 line-clamp-3">{folder.description}</p>
      <p className="mt-3 text-xs text-gray-500">{folder.items.length} curated pieces</p>
    </motion.button>
  );
}
