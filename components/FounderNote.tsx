"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function FounderNote() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="border-t border-black/[0.06] bg-white px-4 py-16 transition-colors duration-300 dark:border-white/[0.06] dark:bg-[#161616] sm:px-6 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center"
      >
        <div className="text-center md:text-left">
          <blockquote className="font-display text-lg italic leading-relaxed text-[#111] sm:text-xl md:text-2xl dark:text-[#F2F0EC]">
            Hamma narsa bitta g&apos;oyadan boshlandi. Bu mening birinchi startapim
            — va siz uni birinchilar orasida ko&apos;ryapsiz. Har bir buyurtma bu
            yo&apos;lni davom ettirishga yordam beradi.
          </blockquote>
          <cite className="mt-6 block font-body text-sm font-medium not-italic text-[#111] dark:text-[#F2F0EC] sm:mt-8">
            Nurbek Po&apos;latov
          </cite>
          <p className="mt-1 text-xs text-[#888] dark:text-[#666]">
            CEO, Hamrohio
          </p>
        </div>

        <div className="rounded-[28px] border border-black/[0.08] bg-[#F8F7F4] p-6 text-left shadow-soft dark:border-white/[0.08] dark:bg-[#1A1A1A] md:p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-black/35 dark:text-white/35">
            Ilhom manbai — Taby
          </p>
          <div className="space-y-4 text-base leading-relaxed text-[#444] dark:text-[#B9B7B2]">
            <p>
              Hamrohio g&apos;oyasi Taby loyihasidan ilhomlanib tug&apos;ildi —
              uni Lloyd yaratgan. Biz u bilan bog&apos;landik, u ruxsat berdi va
              o&apos;z yo&apos;limizni topishimizni qo&apos;llab-quvvatladi.
            </p>
            <p className="font-display text-xl font-semibold leading-snug text-[#111] dark:text-[#F2F0EC]">
              Taby — dunyo uchun. Hamrohio — O&apos;zbekiston uchun.
            </p>
            <p>
              Bir xil ruh. O&apos;ziga xos qiyofa.
            </p>
            <p className="border-t border-black/[0.08] pt-4 text-sm text-[#777] dark:border-white/[0.08] dark:text-[#777]">
              Inspired by Taby — created by Lloyd. We reached out, he gave his blessing.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
