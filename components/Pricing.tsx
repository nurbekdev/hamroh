"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Lock } from "lucide-react";

const included = [
  "1x Hamrohio desk robot",
  "macOS va Windows uchun desktop app",
  "50+ jonli yuz animatsiyalari",
  "Pomodoro, task done va idle rejimlari",
  "Birinchi firmware yangilanishlari",
];

const FOUNDERS_LEFT = 23;
const FOUNDERS_TOTAL = 100;

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="narx"
      ref={ref}
      className="scroll-mt-20 bg-[#F8F7F4] px-4 py-16 transition-colors duration-300 dark:bg-[#0E0E0E] sm:px-6 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-[#111] md:text-4xl dark:text-[#F2F0EC]">
            Pre-order narxi
          </h2>
          <p className="mt-3 text-[#888] dark:text-[#666]">
            Birinchi batch uchun maxsus narx
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="mx-auto max-w-[480px]"
        >
          <div className="rounded-2xl border border-black/[0.08] bg-white p-8 shadow-soft transition-colors duration-300 dark:border-white/[0.08] dark:bg-[#1A1A1A] md:p-10">
            <div className="mb-6">
              <span className="font-display text-xl font-semibold text-[#111] dark:text-[#F2F0EC]">
                Founders Edition
              </span>
            </div>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-[#111] md:text-4xl dark:text-[#F2F0EC]">
                590 000 so&apos;m
              </span>
              <span className="text-[#888] line-through dark:text-[#666]">690 000 so&apos;m</span>
            </div>
            <p className="mt-1 text-sm text-[#888] dark:text-[#666]">
              Hamroh qurilmasi + desktop app + firmware
            </p>
            <ul className="mt-8 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#111] dark:text-[#F2F0EC]">
                  <Check size={18} className="shrink-0 text-[#111] dark:text-[#F2F0EC]" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://t.me/nnpgo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#111] py-3.5 font-medium text-white transition hover:scale-[1.02] active:scale-[0.98] dark:bg-white dark:text-[#111]"
            >
              Pre-order qilish <span aria-hidden>→</span>
            </a>
            <p className="mt-4 text-center text-sm text-[#888] dark:text-[#666]">
              Yetkazib berish: ~30 kun
            </p>
            <p className="mt-3 flex items-center justify-center gap-2 text-sm text-[#888] dark:text-[#666]">
              <Lock size={14} aria-hidden />
              Xavfsiz to'lov · Qaytarish
            </p>
            <div className="mt-8">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-[#888] dark:text-[#666]">
                  {FOUNDERS_TOTAL - FOUNDERS_LEFT} dan {FOUNDERS_LEFT} ta qoldi
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${(FOUNDERS_LEFT / FOUNDERS_TOTAL) * 100}%` } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-full rounded-full bg-[#111] dark:bg-white"
                />
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-[#888] dark:text-[#666]">
              Narx keyingi batchda oshadi
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
