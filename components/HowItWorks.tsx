"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cable, MonitorDown, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MonitorDown,
    title: "Mac app'ni o'rnating",
    desc: "Native macOS app vazifalar, notes, odatlar va fokusni bir joyga to'playdi.",
  },
  {
    icon: Cable,
    title: "Hamrohni USB-C bilan ulang",
    desc: "Setup qurilmani avtomatik topadi, tekshiradi va bir daqiqada tayyorlaydi.",
  },
  {
    icon: Sparkles,
    title: "Fikr va fokus ko'z oldingizda",
    desc: "Tez note, timer va muhim signallar haqiqiy AMOLED displayda ko'rinadi.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: i * 0.1 },
  }),
};

const item = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="qanday-ishlaydi"
      ref={ref}
      className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-[#111] md:text-5xl dark:text-[#F2F0EC]">
            Bir daqiqada ishga tayyor.
          </h2>
          <p className="mt-3 text-[#888] dark:text-[#666]">Ortiqcha texnik sozlamalarsiz.</p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid border-y border-black/[0.08] md:grid-cols-3 dark:border-white/[0.08]"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={item}
              className="border-b border-black/[0.08] py-8 md:border-b-0 md:border-r md:px-8 md:last:border-r-0 md:first:pl-0 md:last:pr-0 dark:border-white/[0.08]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-[#111] text-white dark:bg-white dark:text-[#111]">
                <step.icon size={24} strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#111] dark:text-[#F2F0EC]">
                {step.title}
              </h3>
              <p className="mt-2 text-[#888] dark:text-[#666]">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
