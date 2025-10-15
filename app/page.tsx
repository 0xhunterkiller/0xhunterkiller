"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6 md:px-10 space-y-10">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Soft cyan glow behind text */}
        <div className="absolute inset-0 blur-[120px] bg-cyan-500/10 -z-10" />
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.25)] mb-4">
          Hey, I’m Saai Sudarsanan
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          DevOps Engineer · Cloud Native Adventurer · Observability Enthusiast
        </p>
        <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mt-3">
          I build scalable, observable, and resilient systems — 
          <span className="text-blue-400"> and teach others to do the same.</span>
        </p>
      </motion.div>

      {/* Quick Cards */}
      <div className="flex flex-col md:flex-row gap-6 mt-10">
        {[
          { href: "/me", label: "About Me", desc: "Learn about my experience and projects" },
          { href: "/blog", label: "Blogs", desc: "Read what I’ve written about tech" },
          { href: "/learn", label: "Learn", desc: "Resources and roadmaps for developers" },
        ].map(({ href, label, desc }) => (
          <Link
            key={href}
            href={href}
            className="group flex-1 max-w-sm border border-blue-500/20 bg-[#0b0f17]/60 rounded-xl p-6 hover:scale-[1.05] hover:border-blue-400/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] transition-all duration-300"
          >
            <h2 className="text-blue-400 font-semibold mb-2 group-hover:text-blue-300 transition-colors">
              {label}
            </h2>
            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              {desc}
            </p>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-20 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Saai Sudarsanan</p>
        <div className="flex gap-3 justify-center mt-1 text-gray-500">
          <Link
            href="https://github.com/0xhunterkiller"
            target="_blank"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </Link>
          <span>·</span>
          <Link
            href="https://www.linkedin.com/in/0xhunterkiller/"
            target="_blank"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </Link>
          <span>·</span>
          <Link
            href="https://saaisudarsanan.medium.com/"
            target="_blank"
            className="hover:text-green-400 transition-colors"
          >
            Medium
          </Link>
        </div>
      </footer>
    </main>
  );
}
