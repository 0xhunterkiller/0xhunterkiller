"use client";

import { useState, useMemo } from "react";
import { blogs } from "@/data/blog/blogsData";
import BlogCard from "@/components/BlogCard";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

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
    <main className="min-h-screen max-w-5xl mx-auto w-full px-6 md:px-12 lg:px-16 py-28 space-y-16">
      {/* Header */}
      <div>
        <p className="font-mono text-xs text-cyan-400/50 uppercase tracking-[0.2em] mb-3">
          Writing
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white">Blog</h1>
        <p className="text-gray-500 mt-3 max-w-xl text-sm leading-relaxed">
          22 articles across Medium, LinkedIn, and Substack. Technical
          deep-dives, war stories, and lessons learned.
        </p>
      </div>

      {/* Search + Tags */}
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-80 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.07] text-gray-300 placeholder-gray-700 focus:outline-none focus:border-white/15 transition-all font-mono text-sm"
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`font-mono text-xs px-3 py-1.5 rounded-lg transition-all ${
              activeTag === null
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "border border-white/[0.07] text-gray-600 hover:border-white/15 hover:text-gray-400"
            }`}
          >
            all
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag((prev) => (prev === tag ? null : tag))}
              className={`font-mono text-xs px-3 py-1.5 rounded-lg transition-all ${
                activeTag === tag
                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  : "border border-white/[0.07] text-gray-600 hover:border-white/15 hover:text-gray-400"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Featured */}
      {featured.length > 0 && !searchTerm && !activeTag && (
        <div>
          <h2 className="font-mono text-xs text-gray-600 uppercase tracking-[0.2em] mb-4">
            Featured
          </h2>
          <div className="grid md:grid-cols-3 gap-3">
            {featured.map((b) => (
              <BlogCard key={b.title} {...b} />
            ))}
          </div>
        </div>
      )}

      {/* All / Filtered */}
      <div>
        <h2 className="font-mono text-xs text-gray-600 uppercase tracking-[0.2em] mb-4">
          {searchTerm || activeTag ? "Results" : "All Articles"}
          <span className="text-gray-800 ml-2">{filteredBlogs.length}</span>
        </h2>
        {filteredBlogs.length === 0 ? (
          <p className="text-gray-700 font-mono text-sm">no results found.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredBlogs.map((b) => (
              <BlogCard key={b.title} {...b} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
