"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  NotebookPen,
  ListTodo,
  Timer,
  TrendingUp,
  Smile,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: NotebookPen,
    title: "Tez Notes",
    desc: "Fikrni bir lahzada yozing va displayga chiqaring",
  },
  {
    icon: Timer,
    title: "Fokus",
    desc: "Sokin Pomodoro sessiyalari bilan chuqur ishlang",
  },
  {
    icon: ListTodo,
    title: "Vazifalar",
    desc: "Bugungi muhim ishlarni bitta aniq rejada saqlang",
  },
  {
    icon: TrendingUp,
    title: "Odatlar",
    desc: "Kichik eslatmalar bilan ritmni uzmang",
  },
  {
    icon: Smile,
    title: "Jonli display",
    desc: "Harakatlaringizga tabiiy animatsiyalar javob beradi",
  },
  {
    icon: BarChart3,
    title: "Statistika",
    desc: "Fokus va bajarilgan ishlarni sokin kuzating",
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
          <h2 className="font-display text-3xl font-bold text-[#111] md:text-5xl dark:text-[#F2F0EC]">
            Bir tizim. Kamroq shovqin.
          </h2>
          <p className="mt-3 text-[#888] dark:text-[#666]">
            Mac app va Hamroh displayi bitta sokin ritmda ishlaydi.
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
          className="grid border-y border-black/[0.08] sm:grid-cols-2 lg:grid-cols-3 dark:border-white/[0.08]"
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
              className="border-b border-black/[0.08] p-6 sm:border-r lg:p-8 lg:[&:nth-child(3n)]:border-r-0 dark:border-white/[0.08]"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500/12 text-emerald-700 dark:text-emerald-400">
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
