"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function DeskScene() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#111] px-4 py-20 sm:px-6 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-bold leading-tight text-[#F5F5F5] sm:text-4xl md:text-5xl"
        >
          Ish stolingizni
          <br />
          aqlli qiling.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-base text-[#888] sm:text-lg"
        >
          O&apos;zbekistonda ishlab chiqarilgan. 3D printed. Sizniki.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://t.me/nnpgo"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-white backdrop-blur transition hover:bg-white/20 active:scale-[0.98]"
          >
            Pre-order <span aria-hidden>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
