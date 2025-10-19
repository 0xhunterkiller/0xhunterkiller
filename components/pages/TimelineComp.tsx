"use client";

import Link from "next/link";
import { timelineData } from "@/data/aboutme/timelineData";

export default function Timeline() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-20 px-6 md:px-16 text-gray-200 space-y-16">
      {/* Header */}
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-3">
          My Timeline
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          A look back at my journey — from learning to leading.
        </p>
        <Link
          href="/me"
          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          ← Back to About Me
        </Link>
      </section>

      {/* Timeline */}
      <section className="w-full max-w-4xl relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-blue-700 opacity-40" />

        <div className="flex flex-col space-y-12">
          {timelineData.map(({ year, role, organization, highlights }, index) => (
            <div
              key={year}
              className={`relative flex flex-col md:flex-row md:items-start ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Connector Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.4)]" />

              {/* Timeline Card */}
              <div
                className={`md:w-1/2 px-6 ${
                  index % 2 === 0 ? "md:pl-12 md:pr-0" : "md:pr-12 md:pl-0"
                }`}
              >
                <div className="border border-blue-500/20 bg-[#0b0f17]/60 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
                  <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                    {year}
                  </h2>

                  {(role || organization) && (
                    <p className="text-sm text-gray-400 mb-4 italic">
                      {role} {organization && `@ ${organization}`}
                    </p>
                  )}

                  <ul className="space-y-5">
                    {highlights.map((item, i) => (
                      <li key={i}>
                        <p className="text-base text-gray-200 font-medium mb-1">
                          {item.title}
                        </p>
                        {item.description && (
                          <p className="text-sm text-gray-400 mb-1">
                            {item.description}
                          </p>
                        )}
                        {item.tags && (
                          <div className="flex flex-wrap gap-1 text-xs text-gray-400 mt-1">
                            {item.tags.map((tag, t) => (
                              <span
                                key={t}
                                className="px-2 py-0.5 border border-blue-500/30 rounded-md"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                        {item.link && (
                          <a
                            href={item.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-400 hover:text-blue-300 mt-1 inline-block"
                          >
                            {item.link.label} ↗
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
