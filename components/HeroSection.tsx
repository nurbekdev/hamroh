"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Clock3, ShieldCheck } from "lucide-react";

const idleFrames = [
  "/figma/idle/Blink1.png",
  "/figma/idle/Blink2.png",
  "/figma/idle/Blink3.png",
  "/figma/idle/BLink4.png",
  "/figma/idle/Blink5.png",
  "/figma/idle/Blink6.png",
  "/figma/idle/Blink6-1.png",
  "/figma/idle/Blink8.png",
  "/figma/idle/Blink9.png",
];

const taskDoneFrames = Array.from({ length: 10 }, (_, i) => `/figma/task-done/${i + 1}.png`);
const pomodoroFrames = Array.from({ length: 14 }, (_, i) => `/figma/pomodoro-start/Frame%20${i + 25}.png`);
const angryFrames = Array.from({ length: 14 }, (_, i) => `/figma/angry/Frame%20${i + 71}.png`);
const readFrames = Array.from({ length: 20 }, (_, i) => `/figma/read-books/Frame%20${i + 238}.png`);
const drinkFrames = [
  170,
  ...Array.from({ length: 24 }, (_, i) => i + 172),
].map((frame) => `/figma/drink-water/Frame%20${frame}.png`);

const sequences = [
  {
    label: "Idle",
    title: "Jim turadi",
    text: "Ish stolida sokin kutadi.",
    frames: idleFrames,
    hold: 12,
  },
  {
    label: "Task done",
    title: "Vazifani nishonlaydi",
    text: "To-do tugaganda kichik reaksiya beradi.",
    frames: taskDoneFrames,
    hold: 10,
  },
  {
    label: "Focus",
    title: "Fokusni boshlaydi",
    text: "Pomodoro start bo'lganda display jonlanadi.",
    frames: pomodoroFrames,
    hold: 8,
  },
  {
    label: "Read",
    title: "Kitobni eslatadi",
    text: "Odatlar bo'limidagi eslatmalarni ko'rsatadi.",
    frames: readFrames,
    hold: 8,
  },
  {
    label: "Water",
    title: "Suv ichishni eslatadi",
    text: "Kun davomida sog'lom tanaffusni sezdiradi.",
    frames: drinkFrames,
    hold: 8,
  },
  {
    label: "Guard",
    title: "Chalg'ishni sezadi",
    text: "Shorts yoki reels ochilganda ogohlantiradi.",
    frames: angryFrames,
    hold: 10,
  },
];

const moments = [
  {
    icon: Clock3,
    title: "Fokus",
    text: "Timer va ish ritmi desktop app bilan sinxron yuradi.",
  },
  {
    icon: CheckCircle2,
    title: "Vazifa",
    text: "Bajarilgan ish robot yuzida darhol ko'rinadi.",
  },
  {
    icon: ShieldCheck,
    title: "Guard",
    text: "Chalg'ituvchi saytlar ochilganda Hamroh signal beradi.",
  },
];

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [frame, setFrame] = useState(0);
  const sequence = sequences[sequenceIndex];
  const visibleFrame = sequence.frames[Math.min(frame, sequence.frames.length - 1)];
  const allFrames = useMemo(() => sequences.flatMap((item) => item.frames), []);

  useEffect(() => {
    allFrames.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, [allFrames]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFrame((current) => {
        const endAt = sequence.frames.length + sequence.hold;
        if (current + 1 >= endAt) {
          setSequenceIndex((index) => (index + 1) % sequences.length);
          return 0;
        }
        return current + 1;
      });
    }, 115);

    return () => window.clearInterval(timer);
  }, [sequence.frames.length, sequence.hold]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-[#F8F7F4] px-4 pt-28 text-[#111] transition-colors duration-300 dark:bg-[#0E0E0E] dark:text-[#F2F0EC] sm:px-6 sm:pt-32"
    >
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl content-center gap-10 pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/80 px-4 py-2 text-sm font-semibold text-black/60 shadow-sm backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.07] dark:text-white/65">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            O'zbekistonda yasalayotgan desk robot
          </div>

          <h1 className="font-display text-5xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[92px]">
            Fokusga qaytaradigan
            <br />
            kichik hamroh.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-black/55 dark:text-white/55 md:text-xl">
            Hamrohio to-do, Pomodoro va chalg'ituvchi saytlarni real qurilmadagi
            yuz animatsiyalari bilan sezdiradi. Ish stolida turadi, lekin
            kuningizga jonli javob beradi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 26 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-[36px] border border-black/[0.08] bg-white p-4 shadow-[0_40px_110px_rgba(0,0,0,0.12)] dark:border-white/[0.08] dark:bg-[#161616] sm:p-6 md:p-8">
            <div className="pointer-events-none absolute left-1/2 top-12 h-56 w-56 -translate-x-1/2 rounded-full bg-emerald-400/16 blur-3xl dark:bg-emerald-400/10" />
            <div className="relative grid gap-6 lg:grid-cols-[1fr_310px] lg:items-center">
              <div className="grid min-h-[390px] place-items-center rounded-[28px] border border-black/[0.06] bg-[#F1F0EC] p-6 dark:border-white/[0.06] dark:bg-[#0B0B0B]">
                <div className="relative">
                  <div className="absolute -inset-8 rounded-[40px] bg-black/[0.04] blur-2xl dark:bg-white/[0.04]" />
                  <div className="relative rounded-[34px] bg-[#101010] p-3 shadow-[0_28px_70px_rgba(0,0,0,0.32)]">
                    <div className="rounded-[26px] border border-white/10 bg-black p-2">
                      <img
                        src={visibleFrame}
                        alt={`Hamrohio ${sequence.label} animatsiyasi`}
                        className="aspect-[320/172] w-[min(78vw,580px)] rounded-[18px] object-cover"
                        style={{ imageRendering: "crisp-edges" }}
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-5 left-1/2 h-3 w-52 -translate-x-1/2 rounded-full bg-black/18 blur-md dark:bg-black/60" />
                </div>
              </div>

              <div className="grid gap-3">
                <div className="rounded-[24px] border border-black/[0.08] bg-black/[0.03] p-5 dark:border-white/[0.08] dark:bg-white/[0.05]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35 dark:text-white/35">
                    Hozir ekranda
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-bold">
                    {sequence.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-black/52 dark:text-white/48">
                    {sequence.text}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {sequences.map((item, index) => (
                      <span
                        key={item.label}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === sequenceIndex
                            ? "w-8 bg-[#111] dark:bg-white"
                            : "w-2 bg-black/18 dark:bg-white/18"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    ["590 000", "so'm"],
                    ["50+", "animatsiya"],
                    ["1", "app + robot"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-[20px] border border-black/[0.08] bg-black/[0.03] p-4 text-center dark:border-white/[0.08] dark:bg-white/[0.05]"
                    >
                      <strong className="block font-display text-xl font-bold">
                        {value}
                      </strong>
                      <span className="mt-1 block text-xs text-black/45 dark:text-white/45">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="grid gap-2">
                  {moments.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-3 rounded-[18px] border border-black/[0.07] bg-black/[0.03] p-4 dark:border-white/[0.07] dark:bg-white/[0.05]"
                    >
                      <item.icon size={18} className="mt-0.5 shrink-0 text-black/45 dark:text-white/45" />
                      <div>
                        <h3 className="font-display text-sm font-semibold">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-black/48 dark:text-white/45">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mx-auto flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://t.me/nnpgo"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#111] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 active:translate-y-0 dark:bg-white dark:text-[#111]"
          >
            Pre-order qilish
          </a>
          <a
            href="#real-use"
            className="rounded-full border border-black/12 bg-white/50 px-7 py-3.5 text-sm font-semibold text-black/65 backdrop-blur-md transition hover:bg-white hover:text-black dark:border-white/12 dark:bg-white/[0.04] dark:text-white/65 dark:hover:bg-white/[0.08] dark:hover:text-white"
          >
            Live ko'rish
          </a>
        </motion.div>
      </div>
    </section>
  );
}
