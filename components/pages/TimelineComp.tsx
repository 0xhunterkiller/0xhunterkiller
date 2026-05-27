"use client";

import Link from "next/link";
import { timelineData } from "@/data/aboutme/timelineData";

export default function Timeline() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto w-full px-6 md:px-12 py-28">
      {/* Header */}
      <div className="mb-16">
        <p className="font-mono text-xs text-cyan-400/50 uppercase tracking-[0.2em] mb-3">
          Full Timeline
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white">
          The Journey
        </h1>
        <p className="text-gray-500 mt-3 max-w-xl text-sm leading-relaxed">
          Month-by-month from student to Senior Software Engineer I. Every
          milestone, migration, and lesson learned.
        </p>
        <Link
          href="/me"
          className="inline-flex items-center gap-1 font-mono text-xs text-blue-400/60 hover:text-blue-300 transition-colors mt-4"
        >
          ← Back to About
        </Link>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical spine */}
        <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-blue-500/20 to-transparent" />

        <div className="space-y-16 pl-8">
          {timelineData.map(({ year, role, organization, highlights }) => (
            <div key={year} className="relative">
              {/* Year dot */}
              <div className="absolute -left-[calc(2rem+4px)] top-1 w-2.5 h-2.5 rounded-full bg-cyan-400/80 border border-cyan-300/50 shadow-[0_0_10px_rgba(34,211,238,0.4)]" />

              {/* Year label */}
              <div className="mb-5">
                <h2 className="text-2xl font-black text-white">{year}</h2>
                {(role || organization) && (
                  <p className="font-mono text-xs text-gray-600 mt-1">
                    {role}
                    {organization ? ` · ${organization}` : ""}
                  </p>
                )}
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                {highlights.map((item, i) => (
                  <div
                    key={i}
                    className="border border-white/[0.06] bg-white/[0.02] rounded-xl p-5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap mb-2">
                          <h3 className="text-gray-200 font-semibold text-sm">
                            {item.title}
                          </h3>
                          {item.date && (
                            <span className="font-mono text-[10px] text-gray-700">
                              {item.date}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-gray-500 text-xs leading-relaxed">
                            {item.description}
                          </p>
                        )}
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {item.tags.map((tag, t) => (
                              <span
                                key={t}
                                className="font-mono text-[9px] px-2 py-0.5 border border-white/[0.07] rounded text-gray-700"
                              >
                                [{tag}]
                              </span>
                            ))}
                          </div>
                        )}
                        {item.link && (
                          <a
                            href={item.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-xs text-blue-400/60 hover:text-blue-300 transition-colors mt-3"
                          >
                            {item.link.label} ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-white/[0.05]">
        <Link
          href="/me"
          className="font-mono text-xs text-gray-700 hover:text-gray-500 transition-colors"
        >
          ← Back to About
        </Link>
      </div>
    </main>
  );
}
