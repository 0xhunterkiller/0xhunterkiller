"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Download } from "lucide-react";
import { siteConfig } from "@/data/config";

const navLinks = [
  { href: "/me", label: "about" },
  { href: "/blog", label: "blog" },
  { href: "/artifacts", label: "artifacts" },
  { href: "/", label: "home" },
];

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="relative min-h-screen">
      {/* Fixed background */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-[#0d1b2e] via-[#080e1a] to-[#040810]" />
      <div className="fixed inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Navbar — hidden on home */}
      {!isHome && (
        <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-7 rounded-full border border-white/[0.08] bg-black/50 px-7 py-2.5 backdrop-blur-md">
          {navLinks.map(({ href, label }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href) && href !== "/";
            return (
              <Link
                key={href}
                href={href}
                className={`font-mono text-xs transition-colors ${
                  active ? "text-cyan-400" : "text-gray-600 hover:text-gray-300"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs text-gray-600 hover:text-gray-300 transition-colors"
          >
            resume <Download className="w-3 h-3" />
          </a>
        </nav>
      )}

      {/* Page content */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
