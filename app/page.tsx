"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, BookOpen, ExternalLink, Download, Mail } from "lucide-react";
import { siteConfig } from "@/data/config";

export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto w-full px-6 md:px-12 lg:px-16 flex flex-col justify-center py-24">
      {/* Identity */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-cyan-400/60 text-xs tracking-[0.25em] uppercase mb-4">
          {siteConfig.handle}
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.88] tracking-tight">
          SAAI
          <br />
          SUDARSANAN
        </h1>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-5">
          <span className="font-mono text-blue-400 text-sm">{siteConfig.role}</span>
          <span className="text-gray-700">·</span>
          <span className="font-mono text-gray-500 text-sm">{siteConfig.company}</span>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        className="h-px bg-gradient-to-r from-cyan-500/40 via-blue-500/20 to-transparent my-8 origin-left"
      />

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
      >
        Building{" "}
        <span className="text-white font-semibold">AI-powered infrastructure</span> that
        handles <span className="text-cyan-400 font-semibold">1M+ RPM</span> — and the
        ops tooling to manage it. Three promotions in three years at{" "}
        <span className="text-white font-semibold">Swym</span>. Currently pursuing{" "}
        <span className="text-blue-400">OMSCS at Georgia Tech</span>.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.75 }}
        className="flex flex-wrap gap-3 mt-10"
      >
        <Link
          href="/me"
          className="group inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-2.5 rounded-lg transition-all duration-200 text-sm"
        >
          My Journey
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 border border-white/15 hover:border-blue-400/50 text-gray-400 hover:text-gray-200 px-6 py-2.5 rounded-lg transition-all duration-200 text-sm"
        >
          Read Blogs
          <BookOpen className="w-4 h-4" />
        </Link>
        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-gray-400 hover:text-gray-200 px-6 py-2.5 rounded-lg transition-all duration-200 text-sm"
        >
          Resume
          <Download className="w-4 h-4" />
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-400 px-4 py-2.5 transition-colors font-mono text-xs"
        >
          <Mail className="w-3.5 h-3.5" /> email
        </a>
        <Link
          href={siteConfig.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-400 px-4 py-2.5 transition-colors font-mono text-xs"
        >
          <Github className="w-3.5 h-3.5" /> github ↗
        </Link>
        <Link
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-400 px-4 py-2.5 transition-colors font-mono text-xs"
        >
          <Linkedin className="w-3.5 h-3.5" /> linkedin ↗
        </Link>
      </motion.div>

      {/* Alfred Feature Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-14 max-w-2xl"
      >
        <div className="border border-cyan-500/20 bg-cyan-950/10 rounded-xl p-5 hover:border-cyan-500/35 transition-colors duration-300">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <span className="font-mono text-[10px] text-cyan-400/50 uppercase tracking-[0.2em]">
                Latest Project
              </span>
              <h3 className="text-white font-bold text-base mt-1.5">
                {siteConfig.featuredProject.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">
                {siteConfig.featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {siteConfig.featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-0.5 border border-cyan-500/25 rounded text-cyan-400/60"
                  >
                    [{tag}]
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/me"
              className="text-cyan-400/40 hover:text-cyan-400/80 transition-colors flex-shrink-0 mt-1"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="mt-16 pt-8 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-4"
      >
        <span className="font-mono text-xs text-gray-700">
          © {new Date().getFullYear()} Saai Sudarsanan
        </span>
        <Link
          href={siteConfig.social.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-gray-700 hover:text-gray-500 transition-colors"
        >
          medium ↗
        </Link>
      </motion.footer>
    </main>
  );
}
