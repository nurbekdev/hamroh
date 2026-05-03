"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const hardware = [
  { label: "Ekran", value: "1.3\" OLED" },
  { label: "Ulanish", value: "WiFi + USB-C" },
  { label: "O'lcham", value: "90 × 60 × 25 mm" },
  { label: "Vazn", value: "~85g" },
  { label: "Material", value: "3D printed PLA" },
  { label: "Montaj", value: "bezel clip (no glue)" },
];

const software = [
  { label: "OS", value: "macOS 12+ / Windows 10+" },
  { label: "App", value: "Bepul desktop app" },
  { label: "Offline", value: "Ishlaydi" },
  { label: "Ma'lumotlar", value: "Lokal saqlanadi" },
  { label: "Yangilanishlar", value: "Bepul" },
  { label: "Roadmap", value: "Open roadmap" },
];

export function Specs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl font-bold text-[#111] md:text-4xl dark:text-[#F2F0EC]"
        >
          Texnik xususiyatlar
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mt-12 grid gap-12 md:grid-cols-2"
        >
          <div>
            <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-[#888] dark:text-[#666]">
              Hardware
            </h3>
            <ul className="space-y-3 font-mono text-sm">
              {hardware.map((row) => (
                <li
                  key={row.label}
                  className="flex justify-between border-b border-black/[0.06] pb-2 dark:border-white/[0.06]"
                >
                  <span className="text-[#888] dark:text-[#666]">{row.label}</span>
                  <span className="text-[#111] dark:text-[#F2F0EC]">{row.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-[#888] dark:text-[#666]">
              Software
            </h3>
            <ul className="space-y-3 font-mono text-sm">
              {software.map((row) => (
                <li
                  key={row.label}
                  className="flex justify-between border-b border-black/[0.06] pb-2 dark:border-white/[0.06]"
                >
                  <span className="text-[#888] dark:text-[#666]">{row.label}</span>
                  <span className="text-[#111] dark:text-[#F2F0EC]">{row.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
