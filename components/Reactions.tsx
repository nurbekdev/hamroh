"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { RobotFace, type RobotMood } from "./RobotFace";

const reactions: { id: RobotMood; label: string; emoji: string }[] = [
  { id: "idle", label: "Idle", emoji: "😴" },
  { id: "task", label: "Vazifa", emoji: "📋" },
  { id: "focus", label: "Focus", emoji: "⏱" },
  { id: "celebrate", label: "Celebrate", emoji: "🎉" },
  { id: "angry", label: "Busy", emoji: "😤" },
];

// Yorug' sariq nuqtalar (OLED yulduzchalar) - pozitsiyalar
const stars = [
  { x: 15, y: 20, d: 0.6 },
  { x: 75, y: 35, d: 0.8 },
  { x: 40, y: 60, d: 0.5 },
  { x: 85, y: 55, d: 0.7 },
  { x: 25, y: 75, d: 0.4 },
  { x: 60, y: 25, d: 0.9 },
  { x: 90, y: 80, d: 0.5 },
  { x: 10, y: 50, d: 0.6 },
  { x: 50, y: 85, d: 0.5 },
];

function OLEDFocusScreen() {
  return (
    <div className="relative flex h-full w-full min-w-0 flex-col overflow-hidden rounded-2xl bg-[#050505] p-[25%] shadow-[0_0_40px_rgba(0,0,0,0.8)] ring-1 ring-white/5">
      {/* Yorug' sariq nuqtalar — twinkle animatsiya */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {stars.map((s, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)] md:h-2 md:w-2"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
            }}
            animate={{
              opacity: [0.4, 0.9, 0.4],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 2 + s.d,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
          Focus
        </p>
        <p className="font-mono text-4xl font-bold tabular-nums text-cyan-300 md:text-5xl">
          25:00
        </p>
        <p className="text-sm text-cyan-400/70">stay focused</p>
        {/* Glowing progress bar */}
        <div className="mt-2 w-full max-w-[200px] overflow-hidden rounded-full bg-white/5">
          <motion.div
            className="h-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]"
            initial={{ width: "0%" }}
            animate={{ width: "65%" }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function useRobotSize() {
  const [size, setSize] = useState(320);
  useEffect(() => {
    const m = window.matchMedia("(min-width: 640px)");
    const update = () => setSize(m.matches ? 320 : 260);
    update();
    m.addEventListener("change", update);
    return () => m.removeEventListener("change", update);
  }, []);
  return size;
}

export function Reactions() {
  const [mood, setMood] = useState<RobotMood>("idle");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const robotSize = useRobotSize();

  const handleReactionClick = (r: (typeof reactions)[0]) => {
    setMood(r.id);
  };

  const showFocusOLED = mood === "focus";

  return (
    <section
      id="reactions"
      ref={ref}
      className="scroll-mt-20 bg-white px-4 py-16 transition-colors duration-300 dark:bg-[#161616] sm:px-6 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-[#111] md:text-4xl dark:text-[#F2F0EC]">
            U sizni his qiladi
          </h2>
          <p className="mt-3 text-[#888] dark:text-[#666]">
            Hamrohio nima qilayotganingizni biladi va javob beradi
          </p>
        </motion.div>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative flex min-h-[260px] justify-center rounded-2xl bg-[#F8F7F4] p-4 dark:bg-[#1A1A1A] sm:min-h-[320px] sm:p-8 md:min-h-[380px] md:p-12"
          >
            <AnimatePresence mode="wait">
              {showFocusOLED ? (
                <motion.div
                  key="focus-oled"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="aspect-square w-full max-w-[260px] sm:max-w-[320px]"
                >
                  <OLEDFocusScreen />
                </motion.div>
              ) : (
                <motion.div
                  key="robot"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex aspect-square w-full max-w-[260px] items-center justify-center sm:max-w-[320px]"
                >
                  <RobotFace size={robotSize} mood={mood} float={false} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <div className="flex flex-col gap-3">
            {reactions.map((r) => (
              <motion.button
                key={r.id}
                type="button"
                onClick={() => handleReactionClick(r)}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + reactions.indexOf(r) * 0.08 }}
                className={`flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition ${
                  mood === r.id
                    ? "border-[#111] bg-[#111] text-white dark:border-white dark:bg-white dark:text-[#111]"
                    : "border-black/10 bg-white text-[#111] hover:border-black/20 dark:border-white/10 dark:bg-[#1A1A1A] dark:text-[#F2F0EC] dark:hover:border-white/20"
                }`}
              >
                <span className="text-2xl" aria-hidden>
                  {r.emoji}
                </span>
                <span className="font-medium">{r.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
