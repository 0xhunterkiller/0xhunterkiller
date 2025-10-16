"use client";

import Link from "next/link";
import {
  timelinePreview,
  achievements,
  skills,
  certifications,
} from "@/data/meData";
import { blogs } from "@/data/blogsData";
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
        <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
          {certifications.map((cert) => (
            <li
              key={cert}
              className="border border-blue-500/20 rounded-lg p-3 bg-[#0b0f17]/60 hover:border-blue-400/50 transition-all"
            >
              {cert}
            </li>
          ))}
        </ul>
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
