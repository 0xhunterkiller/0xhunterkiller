"use client";

import { useState, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { artifacts, type Artifact } from "@/data/artifacts/artifactsData";

function ArtifactCard({ title, description, tags, file, date, featured }: Artifact) {
  return (
    <a
      href={`/artifacts/${file}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col rounded-lg border p-5 transition-all ${
        featured
          ? "border-cyan-500/25 bg-cyan-950/15 hover:border-cyan-500/40"
          : "border-white/[0.07] bg-white/[0.02] hover:border-white/15"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-white text-sm font-semibold leading-snug">{title}</h3>
        <ArrowUpRight className="w-4 h-4 shrink-0 text-gray-700 group-hover:text-cyan-400 transition-colors" />
      </div>

      <p className="text-gray-500 text-xs leading-relaxed mt-2 flex-1">{description}</p>

      <div className="flex items-center gap-2 mt-4 flex-wrap">
        <span className="font-mono text-[10px] text-gray-700">{date}</span>
        {tags.map((tag) => (
          <span key={tag} className="font-mono text-[10px] text-gray-600">
            [{tag}]
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Artifacts() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    artifacts.forEach((a) => a.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  const filtered = activeTag
    ? artifacts.filter((a) => a.tags.includes(activeTag))
    : artifacts;

  return (
    <main className="min-h-screen max-w-5xl mx-auto w-full px-6 md:px-12 lg:px-16 py-28 space-y-16">
      <div>
        <p className="font-mono text-xs text-cyan-400/50 uppercase tracking-[0.2em] mb-3">
          Learning
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white">Artifacts</h1>
        <p className="text-gray-500 mt-3 max-w-xl text-sm leading-relaxed">
          Single-file interactive pages, generated and then tuned until the
          concept actually clicked. Each one is a self-contained thing I built to
          understand something — kept here in case it helps someone else.
        </p>
      </div>

      {allTags.length > 1 && (
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
      )}

      <div>
        <h2 className="font-mono text-xs text-gray-600 uppercase tracking-[0.2em] mb-4">
          {activeTag ? "Results" : "All"}
          <span className="text-gray-800 ml-2">{filtered.length}</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {filtered.map((a) => (
            <ArtifactCard key={a.file} {...a} />
          ))}
        </div>
      </div>
    </main>
  );
}
