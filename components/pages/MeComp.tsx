"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  timelinePreview,
  achievements,
  skills,
  certifications,
  notableProjects,
} from "@/data/aboutme/meData";
import { blogs } from "@/data/blog/blogsData";
import BlogCard from "@/components/BlogCard";

export default function AboutMe() {
  const featuredBlogs = blogs.filter((b) => b.featured);
  return (
    <main className="min-h-screen flex flex-col items-center justify-start text-gray-200 py-20 px-6 md:px-16 space-y-16">
      {/* Header */}
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
          About Me
        </h1>
        <p className="text-gray-300 text-lg">
          Hi, I’m <span className="text-blue-400 font-semibold">Saai Sudarsanan</span> — DevOps Engineer | Cloud Native Enthusiast | Building reliable,
          observable, and scalable systems — one cluster at a time.
        </p>
      </section>

      {/* Timeline Preview */}
      <section className="w-full max-w-5xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-blue-400">Timeline</h2>
          <Link
            href="/me/timeline"
            className="text-sm text-gray-400 hover:text-blue-300 transition-colors"
          >
            View Full Timeline →
          </Link>
        </div>
        <div className="border border-blue-500/20 rounded-xl bg-[#0b0f17]/60 p-6 space-y-3">
          {timelinePreview.map(({ year, text }) => (
            <p key={year} className="text-gray-300">
              <span className="font-semibold text-blue-400">{year}:</span> {text}
            </p>
          ))}
        </div>
      </section>

      {/* Major Achievements */}
      <section className="w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">
          Major Achievements
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map(({ title, desc }) => (
            <div
              key={title}
              className="border border-blue-500/20 bg-[#0b0f17]/60 rounded-xl p-5 hover:scale-[1.02] hover:border-blue-400/50 transition-all duration-300"
            >
              <h3 className="text-blue-400 font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-lg border border-blue-500/30 bg-[#0b0f17]/70 hover:border-blue-400/60 transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">
          Certifications
        </h2>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className={`group relative flex items-center justify-between border border-blue-500/20 rounded-lg px-4 py-2 bg-[#0b0f17]/60 transition-all ${
                cert.link
                  ? "cursor-pointer hover:border-blue-400/60 hover:bg-[#111827]/70"
                  : "cursor-default"
              }`}
              onClick={() => cert.link && window.open(cert.link, "_blank")}
            >
              <span className="text-gray-300 group-hover:text-blue-200">
                {cert.name}
              </span>

              {cert.link && (
                <ExternalLink
                  className="w-4 h-4 text-blue-400 opacity-70 group-hover:opacity-100 transition-opacity"
                  strokeWidth={1.8}
                />
              )}
            </li>
          ))}
        </ul>
      </section>
  
      {/* Notable Projects */}
      <section className="w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">
          Notable Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {notableProjects.map((proj) => (
            <div
              key={proj.name}
              className="border border-blue-500/20 bg-[#0b0f17]/60 rounded-xl p-5 hover:scale-[1.02] hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-blue-400 font-semibold">{proj.name}</h3>
                {proj.link && (
                  <ExternalLink
                    onClick={() => window.open(proj.link, "_blank")}
                    className="w-4 h-4 text-blue-400 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                    strokeWidth={1.8}
                  />
                )}
              </div>
              <p className="text-gray-300 text-sm">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">
          Featured Blogs
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredBlogs.map((blog) => (
            <BlogCard key={blog.title} {...blog} />
          ))}
        </div>
      </section>

    </main>
  );
}
