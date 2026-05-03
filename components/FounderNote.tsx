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
        className="mx-auto max-w-[640px] text-center"
      >
        <blockquote className="font-display text-lg italic leading-relaxed text-[#111] sm:text-xl md:text-2xl dark:text-[#F2F0EC]">
          Hamma narsa bitta g&apos;oyadan boshlandi. Bu mening birinchi startapim
          — va siz uni birinchilar orasida ko&apos;ryapsiz. Har bir buyurtma bu
          yo&apos;lni davom ettirishga yordam beradi. 🤍
        </blockquote>
        <cite className="mt-6 block font-body text-sm font-medium not-italic text-[#111] dark:text-[#F2F0EC] sm:mt-8">
          Nurbek Po&apos;latov
        </cite>
        <p className="mt-1 text-xs text-[#888] dark:text-[#666]">
          CEO, Hamrohio
        </p>
      </motion.div>
    </section>
  );
}
