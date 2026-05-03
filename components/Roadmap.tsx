"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  {
    id: "v1",
    title: "Hamrohio V1",
    period: "Hozir · In Progress",
    desc: "Asosiy hardware + software, desktop app",
    active: true,
  },
  {
    id: "expansion",
    title: "Expansion Board",
    period: "Q2 2026",
    desc: "Speaker, mikrofon, batareya — plug-in",
    active: false,
  },
  {
    id: "standing",
    title: "Standing Version",
    period: "Q3 2026",
    desc: "Servo motor bilan harakatlana oladi",
    active: false,
  },
  {
    id: "ai",
    title: "AI Integration",
    period: "Q4 2026",
    desc: "Ovozli buyruqlar, AI vazifa taklifi",
    active: false,
  },
];

export function Roadmap() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="roadmap"
      ref={ref}
      className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-[#111] md:text-4xl dark:text-[#F2F0EC]">
            Nima qurilmoqda
          </h2>
          <p className="mt-3 text-[#888] dark:text-[#666]">Ochiq roadmap — hamma narsa ko&apos;rinadi</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-black/10 dark:bg-white/10 md:left-1/2 md:-translate-x-px" />
          <ul className="space-y-8">
            {milestones.map((m, i) => (
              <motion.li
                key={m.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="relative grid grid-cols-1 md:grid-cols-2 md:gap-8"
              >
                <div
                  className={`absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full md:left-1/2 ${
                    m.active ? "bg-[#111] dark:bg-white" : "bg-[#888] dark:bg-[#666]"
                  }`}
                />
                <div
                  className={`relative pl-12 md:pl-0 ${
                    i % 2 === 1 ? "md:col-start-2 md:pl-8 md:text-left" : "md:pr-8 md:text-right"
                  }`}
                >
                  <div
                    className={`rounded-xl border p-5 transition-colors duration-300 ${
                      m.active
                        ? "border-[#111] bg-[#111] text-white dark:border-white dark:bg-white dark:text-[#111]"
                        : "border-black/10 bg-white text-[#111] dark:border-white/10 dark:bg-[#1A1A1A] dark:text-[#F2F0EC]"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display font-semibold">{m.title}</h3>
                      <span
                        className={`text-xs ${
                          m.active ? "text-white/80 dark:text-[#111]/80" : "text-[#888] dark:text-[#666]"
                        }`}
                      >
                        {m.period}
                      </span>
                    </div>
                    <p className={`mt-2 text-sm ${m.active ? "text-white/80 dark:text-[#111]/80" : "text-[#888] dark:text-[#666]"}`}>
                      {m.desc}
                    </p>
                  </div>
                </div>
                {i % 2 === 1 && <div className="hidden md:block" />}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
