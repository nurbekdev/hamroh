"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ListTodo,
  Timer,
  TrendingUp,
  Smile,
  BarChart3,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: ListTodo,
    title: "Vazifalar",
    desc: "Kunlik rejalaringizni boshqaring",
  },
  {
    icon: Timer,
    title: "Focus Timer",
    desc: "Pomodoro texnikasi bilan chuqur ishlang",
  },
  {
    icon: TrendingUp,
    title: "Odatlar",
    desc: "Streak bilan kuzating",
  },
  {
    icon: Smile,
    title: "Jonli Yuz",
    desc: "50+ animatsiya siz bilan birga",
  },
  {
    icon: BarChart3,
    title: "Statistika",
    desc: "Vaqtingiz qayerga ketdi?",
  },
  {
    icon: Bell,
    title: "Eslatmalar",
    desc: "Tez kunda",
  },
];

export function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="xususiyatlar"
      ref={ref}
      className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-[#111] md:text-4xl dark:text-[#F2F0EC]">
            Hamma narsa bir joyda
          </h2>
          <p className="mt-3 text-[#888] dark:text-[#666]">
            Desktop app bilan to&apos;liq integratsiya
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(0,0,0,0.14)" }}
              className="rounded-card border border-black/[0.08] bg-white p-6 shadow-card transition dark:border-white/[0.08] dark:bg-[#1A1A1A]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#111] text-white dark:bg-white dark:text-[#111]">
                <f.icon size={20} strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-lg font-semibold text-[#111] dark:text-[#F2F0EC]">
                {f.title}
              </h3>
              <p className="mt-1 text-sm text-[#888] dark:text-[#666]">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
