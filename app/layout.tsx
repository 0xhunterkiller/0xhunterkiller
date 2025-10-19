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
  title: {
    default: "Saai Sudarsanan | Portfolio",
    template: "%s | Saai Sudarsanan"
  },
  description:
    "Software Engineer @ Swym | Building scalable systems, automating workflows, and sharing knowledge.",
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://0xhunterkiller.kernel9.com/"),
  openGraph: {
    title: "Saai Sudarsanan — Portfolio",
    description: "Hi, I am Saai Sudarsanan and this is my portfolio!",
    images: ["/og/portfolio.png"],
  },
  other: {
    "google-site-verification": "EGDTC_v8AjZuChs1L7nBnVhOcFEAmBQ6ZMZExCOguYA"
  }
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
