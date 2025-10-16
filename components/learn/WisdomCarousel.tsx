"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { wisdom } from "@/data/wisdomData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WisdomCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextCard = () => setIndex((prev) => (prev + 1) % wisdom.length);
  const prevCard = () =>
    setIndex((prev) => (prev - 1 + wisdom.length) % wisdom.length);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    newDirection > 0 ? nextCard() : prevCard();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 30000); // 30 seconds
    return () => clearInterval(interval);
  }, [index]); // re-run timer each time index changes


  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const quote = wisdom[index];

  return (
    <div className="relative w-full max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-semibold text-blue-400 mb-4">
        Words of Wisdom
      </h2>

      {/* Card Display */}
      <div className="relative overflow-hidden h-56 flex items-center justify-center">
        <AnimatePresence custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full"
          >
            <div className="border border-blue-500/20 bg-[#0b0f17]/70 rounded-xl p-6 text-gray-200 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <p className="text-lg italic mb-3 leading-relaxed">
                “{quote.content}”
              </p>
              {quote.author && (
                <p className="text-sm text-gray-400 mb-2">— {quote.author}</p>
              )}
              <p className="text-xs text-blue-400 font-mono">
                #{quote.tag}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          aria-label="Previous"
          onClick={() => paginate(-1)}
          className="p-2 border border-blue-500/30 rounded-full hover:border-blue-400/60 transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-blue-300" />
        </button>
        <button
          aria-label="Next"
          onClick={() => paginate(1)}
          className="p-2 border border-blue-500/30 rounded-full hover:border-blue-400/60 transition-all"
        >
          <ChevronRight className="w-5 h-5 text-blue-300" />
        </button>
      </div>
    </div>
  );
}
