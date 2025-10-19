"use client";

import { useState, useMemo } from "react";
import { blogs } from "@/data/blog/blogsData";
import BlogCard from "@/components/BlogCard";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Collect unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogs.forEach((b) => b.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = activeTag ? b.tags.includes(activeTag) : true;
    return matchesSearch && matchesTag;
  });

  const featured = blogs.filter((b) => b.featured);

  return (
    <main className="min-h-screen flex flex-col items-center py-20 px-6 md:px-16 text-gray-200 space-y-16 w-full max-w-6xl">
      {/* Header */}
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-3">
          Blog
        </h1>
        <p className="text-gray-300 text-lg">
          Technical deep dives, dev stories, and lessons learned from the field.
        </p>
      </section>

      {/* Search + Tags */}
      <section className="w-full space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 rounded-lg bg-[#0b0f17]/70 border border-blue-500/20 text-gray-200 focus:outline-none focus:border-blue-400 transition-all"
          />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-3 py-1 rounded-lg text-sm transition-all ${
                activeTag === null
                  ? "bg-blue-500/40 text-white"
                  : "border border-blue-500/30 text-gray-300 hover:border-blue-400/60"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() =>
                  setActiveTag((prev) => (prev === tag ? null : tag))
                }
                className={`px-3 py-1 rounded-lg text-sm transition-all ${
                  activeTag === tag
                    ? "bg-blue-500/40 text-white"
                    : "border border-blue-500/30 text-gray-300 hover:border-blue-400/60"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blogs */}
      {featured.length > 0 && (
        <section className="w-full">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Featured
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((b) => (
              <BlogCard key={b.title} {...b} />
            ))}
          </div>
        </section>
      )}

      {/* All Blogs */}
      <section className="w-full">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">All Blogs</h2>
        {filteredBlogs.length === 0 ? (
          <p className="text-gray-500 text-center">No blogs found.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((b) => (
              <BlogCard key={b.title} {...b} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
