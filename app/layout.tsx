import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import LayoutClient from "@/components/LayoutClient";

const cascadiaCode = localFont({
  src: [
    {
      path: "../public/fonts/CascadiaCode-VariableFont_wght.woff2",
      weight: "100 700",
      style: "normal",
    },
    {
      path: "../public/fonts/CascadiaCode-Italic-VariableFont_wght.woff2",
      weight: "100 700",
      style: "italic",
    },
  ],
  variable: "--font-cascadia",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saai Sudarsanan — Portfolio",
  description:
    "Software Engineer @ Swym | Building scalable systems, automating workflows, and sharing knowledge.",
  icons: { icon: "/favicon.ico" },
  keywords: [
    "Saai Sudarsanan",
    "0xhunterkiller",
    "DevOps Engineer",
    "Software Engineer",
    "Swym",
    "Clojure",
    "Kubernetes",
    "Cloud Engineering",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cascadiaCode.variable} scroll-smooth`}>
      <body
        className="font-[var(--font-cascadia)] bg-gradient-to-b from-[#0e1a2b] via-[#0a1420] to-[#060b12] text-gray-200 antialiased selection:bg-blue-500/20"
        style={{ fontFamily: "'Cascadia Code', monospace" }}
      >
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
