"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { id: 0, robotSrc: "/gifs/hero-relax-hamrohio.gif" },
  { id: 1, robotSrc: "/gifs/hero-task-hamrohio.gif" },
  { id: 2, robotSrc: "/gifs/hero-focus-hamrohio.gif" },
  { id: 3, robotSrc: "/gifs/hero-angry-hamrohio.gif" },
];

export function HeroSection() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (i: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActive(i);
    startAutoPlay();
  };

  const currentSlide = slides[active];

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 pt-28 pb-20 sm:pt-32 sm:pb-24">
      <p className="mb-6 text-center text-sm tracking-wide text-black/40 dark:text-white/40">
        Ish stolingizning aqlli hamrohi
      </p>

      {/* HERO CARD — faqat robot GIF */}
      <div className="w-full max-w-3xl overflow-hidden rounded-[28px] border border-black/[0.06] bg-[#EEECEA] shadow-[0_40px_100px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/[0.06] dark:bg-[#1C1C1C]">
        {/* Top bar */}
        <div className="flex items-center gap-2.5 border-b border-black/[0.06] px-5 py-3.5 dark:border-white/[0.06]">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-xs font-medium text-black/40 dark:text-white/40">
            Hamrohio App
          </span>
        </div>

        {/* Robot — appni to'liq to'ldiradi (huddi rasmdagidek katta) */}
        <div className="relative aspect-[4/3] w-full min-h-[220px] sm:min-h-[260px] md:aspect-[5/4] md:min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 p-2 md:p-3"
            >
              <motion.img
                src={currentSlide.robotSrc}
                alt="Hamrohio robot"
                fetchPriority="high"
                loading="eager"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-full rounded-[20px] object-cover object-center shadow-[0_20px_50px_rgba(0,0,0,0.18)] md:rounded-[24px]"
                style={{ imageRendering: "crisp-edges" }}
              />
            </motion.div>
          </AnimatePresence>

          <a
            href="#reactions"
            className="absolute bottom-3 left-3 right-3 cursor-pointer select-none rounded-full bg-black/[0.08] py-3 text-center text-sm text-black/50 backdrop-blur-sm transition-colors duration-200 hover:bg-black/12 dark:bg-white/[0.08] dark:text-white/50 dark:hover:bg-white/12 md:bottom-4 md:left-4 md:right-4 md:py-3.5"
          >
            👆 Reaktsiyalarni ko&apos;ring
          </a>
        </div>

        {/* Dot navigation */}
        <div className="flex items-center justify-center gap-2 py-4">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleDotClick(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-7 bg-black/75 dark:bg-white/75"
                  : "w-2 bg-black/20 dark:bg-white/20 hover:bg-black/30 dark:hover:bg-white/30"
              }`}
              aria-label={`Slide ${i + 1}`}
              aria-current={i === active}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="mt-10 max-w-2xl text-center"
      >
        <h1 className="mb-5 font-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-black dark:text-white sm:text-5xl md:text-6xl lg:text-[68px]">
          Ish stolingizda
          <br />
          <em className="font-display italic text-black/40 dark:text-white/40">
            bir hamroh.
          </em>
        </h1>
        <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-black/45 dark:text-white/45 md:text-lg">
          Monitor burchagida yashab, vazifalaringizni ko&apos;radigan —
          O&apos;zbekistonning birinchi aqlli desk roboti.
        </p>
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://t.me/nnpgo"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] dark:bg-white dark:text-black"
          >
            Pre-order qilish →
          </a>
          <a
            href="#qanday-ishlaydi"
            className="rounded-full border border-black/12 px-7 py-3.5 text-sm font-medium text-black/60 transition-all duration-200 hover:bg-black/5 hover:text-black dark:border-white/12 dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white"
          >
            Qanday ishlaydi ↓
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            "🇺🇿 O'zbekistonda yasalgan",
            "3D Printed",
            "macOS & Windows",
          ].map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-black/5 px-3.5 py-1.5 text-xs text-black/40 dark:bg-white/6 dark:text-white/40"
            >
              {badge}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
