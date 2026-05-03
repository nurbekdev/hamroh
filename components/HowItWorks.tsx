"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Pin, Smartphone, Smile } from "lucide-react";

const steps = [
  {
    icon: Pin,
    title: "Monitor bezeliga yoping",
    desc: "Ikki soniyada o'rnating. Hech qanday vintlar, rezina yoki kleysiz.",
  },
  {
    icon: Smartphone,
    title: "App'ni ulang",
    desc: "macOS va Windows uchun bepul desktop app. WiFi orqali ulanadi.",
  },
  {
    icon: Smile,
    title: "Hamrohingizga ega bo'ling",
    desc: "Vazifalar, timer, odatlar — barchasi monitor oldida.",
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
          <h2 className="font-display text-3xl font-bold text-[#111] md:text-4xl dark:text-[#F2F0EC]">
            Qanday ishlaydi
          </h2>
          <p className="mt-3 text-[#888] dark:text-[#666]">3 ta oddiy qadam</p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-3"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={item}
              className="rounded-2xl border border-black/[0.08] bg-white p-8 shadow-card transition hover:shadow-card-hover dark:border-white/[0.08] dark:bg-[#1A1A1A]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#111] text-white">
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
