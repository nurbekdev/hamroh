"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Clock3, ListChecks } from "lucide-react";

const photos = [
  {
    src: "/photos/hamroh-live-1.jpg",
    fallback: "/gifs/hero-focus-hamrohio.gif",
    title: "Pomodoro tugaganda natija ko'rinadi",
    desc: "Hamroh desktop app bilan bir vaqtda ishlaydi va fokus sessiyangizni real displayda ko'rsatadi.",
    icon: Clock3,
  },
  {
    src: "/photos/hamroh-live-2.jpg",
    fallback: "/gifs/hero-task-hamrohio.gif",
    title: "Vazifalar bajarilganda reaksiya beradi",
    desc: "To-do listdagi ish tugasa, robot yuzida task done animatsiyasi chiqadi.",
    icon: ListChecks,
  },
  {
    src: "/photos/hamroh-live-3.jpg",
    fallback: "/gifs/hero-relax-hamrohio.gif",
    title: "Ish stolingizda doimiy hamroh",
    desc: "Kichik AMOLED display, 3D printed korpus va minimal desktop tajriba.",
    icon: CheckCircle2,
  },
];

export function RealUseGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="real-use"
      ref={ref}
      className="scroll-mt-20 bg-[#F8F7F4] px-4 py-16 transition-colors duration-300 dark:bg-[#0E0E0E] sm:px-6 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-10 max-w-2xl md:mb-14"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-black/35 dark:text-white/35">
            Real ishlash jarayoni
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-[#111] md:text-5xl dark:text-[#F2F0EC]">
            Hamroh shunchaki dekor emas. U vazifangizga javob beradi.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#777] dark:text-[#777] md:text-lg">
            Robot desktop app bilan sinxron ishlaydi: fokus, to-do va tugagan ishlar displayda jonli ko'rinadi.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {photos.map((photo, index) => (
            <motion.article
              key={photo.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className={`group overflow-hidden rounded-[28px] border border-black/[0.08] bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover dark:border-white/[0.08] dark:bg-[#191919] ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden bg-black ${index === 0 ? "aspect-[16/11]" : "aspect-[4/5]"}`}>
                <img
                  src={photo.src}
                  alt={photo.title}
                  onError={(event) => {
                    event.currentTarget.src = photo.fallback;
                  }}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/10" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-black shadow-sm backdrop-blur-md">
                  <photo.icon size={14} />
                  Hamroh live
                </div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-display text-xl font-semibold text-[#111] dark:text-[#F2F0EC]">
                  {photo.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#777] dark:text-[#777]">
                  {photo.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
