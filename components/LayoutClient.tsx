"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Define page-specific animation variants
  const variants: Record<string, any> = {
    "/": { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
    "/me": { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
    "/me/timeline": { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
    "/blog": { initial: { opacity: 0, y: 25 }, animate: { opacity: 1, y: 0 } },
    "/learn": { initial: { opacity: 0, scale: 0.98 }, animate: { opacity: 1, scale: 1 } },
  };

  const activeVariant =
    variants[pathname] || { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

  const showNavbar = pathname !== "/";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#0e1a2b] via-[#0a1420] to-[#060b12]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />

      {/* ✅ Navbar (Hidden on Home) */}
      {showNavbar && (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 rounded-full border border-blue-500/20 bg-[#0b0f17]/60 px-6 py-2 backdrop-blur-md text-sm text-gray-300">
          <Link
            href="/me"
            className={`hover:text-blue-400 transition-colors ${
              pathname.startsWith("/me") ? "text-blue-400" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`hover:text-blue-400 transition-colors ${
              pathname === "/blog" ? "text-blue-400" : ""
            }`}
          >
            Blogs
          </Link>
          <Link
            href="/learn"
            className={`hover:text-blue-400 transition-colors ${
              pathname === "/learn" ? "text-blue-400" : ""
            }`}
          >
            Learn
          </Link>
          <Link
            href="/"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            Home
          </Link>
        </nav>
      )}

      {/* Page Content */}
      <motion.main
        key={pathname}
        initial={activeVariant.initial}
        animate={activeVariant.animate}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="w-full flex flex-col items-center justify-center px-6 md:px-10"
      >
        {children}
      </motion.main>
    </div>
  );
}
