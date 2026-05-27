"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, ChevronDown, ChevronUp, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  promotions,
  milestones,
  skillClusters,
  projects,
  education,
  certifications,
  type Milestone,
} from "@/data/aboutme/meData";
import { blogs } from "@/data/blog/blogsData";
import BlogCard from "@/components/BlogCard";

function SectionHeader({ label, sub }: { label: string; sub?: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-6">
      <h2 className="font-mono text-xs text-gray-600 uppercase tracking-[0.2em] flex-shrink-0">
        {label}
      </h2>
      {sub && <span className="text-xs text-gray-700 flex-shrink-0">{sub}</span>}
      <div className="flex-1 h-px bg-white/[0.05]" />
    </div>
  );
}

function MilestoneCard({ milestone }: { milestone: Milestone }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className={`rounded-xl p-5 cursor-pointer transition-all duration-200 ${
        milestone.highlight
          ? "border border-cyan-500/25 bg-cyan-950/15 hover:border-cyan-500/45"
          : "border border-white/[0.07] bg-white/[0.02] hover:border-white/15"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <span className="font-mono text-[10px] text-gray-700 uppercase tracking-wider">
              {milestone.date}
            </span>
            <span className="text-gray-800">·</span>
            <span
              className={`font-mono text-[10px] uppercase tracking-wider ${
                milestone.highlight ? "text-cyan-500/70" : "text-blue-500/50"
              }`}
            >
              {milestone.category}
            </span>
          </div>
          <h3
            className={`font-bold text-sm leading-snug ${
              milestone.highlight ? "text-cyan-200" : "text-gray-200"
            }`}
          >
            {milestone.title}
          </h3>
          <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
            {milestone.summary}
          </p>
        </div>
        <button
          className={`flex-shrink-0 mt-0.5 transition-colors ${
            milestone.highlight
              ? "text-cyan-700 hover:text-cyan-500"
              : "text-gray-700 hover:text-gray-500"
          }`}
        >
          {expanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-white/[0.07]">
              <p className="text-gray-300 text-sm leading-relaxed">
                {milestone.details}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {milestone.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-0.5 border border-white/[0.08] rounded text-gray-600"
                  >
                    [{tag}]
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AboutMe() {
  const [showAllMilestones, setShowAllMilestones] = useState(false);
  const featuredBlogs = blogs.filter((b) => b.featured).slice(0, 3);
  const visibleMilestones = showAllMilestones ? milestones : milestones.slice(0, 6);

  return (
    <main className="min-h-screen max-w-5xl mx-auto w-full px-6 md:px-12 lg:px-16 py-28 space-y-20">
      {/* Header */}
      <section>
        <p className="font-mono text-xs text-cyan-400/50 uppercase tracking-[0.2em] mb-3">
          About
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white">
          Saai Sudarsanan
        </h1>
        <p className="text-gray-500 mt-3 max-w-2xl text-base leading-relaxed">
          Senior Software Engineer I at Swym Corporation. Three years of Kubernetes,
          observability, and platform engineering — now building AI ops tooling.
          Pursuing OMSCS at Georgia Tech.
        </p>
        <Link
          href="/me/timeline"
          className="inline-flex items-center gap-1 font-mono text-xs text-blue-400/60 hover:text-blue-300 transition-colors mt-4"
        >
          View full detailed timeline →
        </Link>
      </section>

      {/* The Arc */}
      <section>
        <SectionHeader
          label="The Arc"
          sub="Intern → Senior SWE I in 3 years"
        />
        <div className="relative pt-2">
          {/* Connecting line */}
          <div className="absolute top-[22px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-500/20 via-blue-500/30 to-cyan-500/50" />
          <div className="grid grid-cols-4 gap-2">
            {promotions.map((p, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div
                  className={`w-3 h-3 rounded-full border-2 mb-3 z-10 relative ${
                    p.current
                      ? "bg-cyan-400 border-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.5)]"
                      : "bg-[#080e1a] border-blue-500/40"
                  }`}
                />
                <span className="font-mono text-[9px] text-gray-700 leading-tight">
                  {p.date}
                </span>
                <span
                  className={`text-xs font-bold mt-1 leading-tight ${
                    p.current ? "text-cyan-300" : "text-gray-500"
                  }`}
                >
                  {p.short}
                </span>
                <span className="font-mono text-[9px] text-gray-700 mt-0.5 leading-tight">
                  {p.org}
                </span>
                {p.current && (
                  <span className="font-mono text-[8px] text-cyan-600 mt-0.5">
                    current
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section>
        <SectionHeader label="Key Milestones" sub="Click any card to expand" />
        <div className="grid md:grid-cols-2 gap-3">
          {visibleMilestones.map((m) => (
            <MilestoneCard key={m.id} milestone={m} />
          ))}
        </div>
        {milestones.length > 6 && (
          <button
            onClick={() => setShowAllMilestones(!showAllMilestones)}
            className="mt-4 font-mono text-xs text-gray-700 hover:text-gray-500 transition-colors"
          >
            {showAllMilestones
              ? "↑ collapse"
              : `↓ show ${milestones.length - 6} more`}
          </button>
        )}
      </section>

      {/* Skills */}
      <section>
        <SectionHeader label="Skills" sub="By domain" />
        <div className="grid md:grid-cols-2 gap-3">
          {skillClusters.map((cluster) => (
            <div
              key={cluster.name}
              className="border border-white/[0.07] bg-white/[0.02] rounded-xl p-5"
            >
              <h3 className="font-mono text-[10px] text-blue-400/70 uppercase tracking-wider mb-3">
                {cluster.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cluster.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-gray-500 border border-white/[0.07] rounded-md px-2.5 py-1 hover:border-white/15 hover:text-gray-300 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <SectionHeader label="Education" />
        <div className="grid md:grid-cols-2 gap-3">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className={`rounded-xl p-5 border ${
                edu.status === "In Progress"
                  ? "border-cyan-500/20 bg-cyan-950/10"
                  : "border-white/[0.07] bg-white/[0.02]"
              }`}
            >
              <div className="flex items-start gap-3">
                <GraduationCap
                  className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                    edu.status === "In Progress"
                      ? "text-cyan-400/70"
                      : "text-blue-400/40"
                  }`}
                />
                <div>
                  <h3 className="text-gray-200 font-semibold text-sm">
                    {edu.degree}
                  </h3>
                  <p className="font-mono text-xs text-gray-600 mt-0.5">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-mono text-[10px] text-gray-700">
                      {edu.period}
                    </span>
                    {edu.status === "In Progress" && (
                      <span className="font-mono text-[9px] px-1.5 py-0.5 bg-cyan-500/10 text-cyan-400/80 rounded">
                        In Progress
                      </span>
                    )}
                  </div>
                  {edu.note && (
                    <p className="text-xs text-cyan-300/60 mt-2">{edu.note}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <SectionHeader label="Notable Projects" />
        <div className="grid md:grid-cols-2 gap-3">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className={`rounded-xl p-5 border transition-colors ${
                proj.featured
                  ? "border-cyan-500/20 bg-cyan-950/10"
                  : "border-white/[0.07] bg-white/[0.02]"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  {proj.featured && (
                    <span className="font-mono text-[9px] text-cyan-500/60 uppercase tracking-widest block mb-0.5">
                      Featured
                    </span>
                  )}
                  <h3
                    className={`font-bold text-sm ${
                      proj.featured ? "text-cyan-200" : "text-gray-200"
                    }`}
                  >
                    {proj.name}
                  </h3>
                </div>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-shrink-0"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-gray-700 hover:text-gray-400 transition-colors" />
                  </a>
                )}
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">{proj.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`font-mono text-[9px] px-2 py-0.5 rounded border ${
                      proj.featured
                        ? "border-cyan-500/20 text-cyan-400/60"
                        : "border-white/[0.07] text-gray-700"
                    }`}
                  >
                    [{tag}]
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <SectionHeader label="Certifications" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className={`flex items-center justify-between border border-white/[0.07] rounded-lg px-4 py-2.5 bg-white/[0.02] transition-all ${
                cert.link
                  ? "cursor-pointer hover:border-white/15 hover:bg-white/[0.035]"
                  : ""
              }`}
              onClick={() => cert.link && window.open(cert.link, "_blank")}
            >
              <span className="text-gray-500 text-xs">{cert.name}</span>
              {cert.link && (
                <ExternalLink className="w-3 h-3 text-blue-400/40 flex-shrink-0 ml-2" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section>
        <SectionHeader
          label="Writing"
          sub="22 articles across Medium, LinkedIn & Substack"
        />
        <div className="grid md:grid-cols-3 gap-3">
          {featuredBlogs.map((blog) => (
            <BlogCard key={blog.title} {...blog} />
          ))}
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 font-mono text-xs text-blue-400/60 hover:text-blue-300 transition-colors mt-4"
        >
          View all 22 articles →
        </Link>
      </section>
    </main>
  );
}
