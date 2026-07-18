"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  Layers3,
  MoveHorizontal,
  Send,
} from "lucide-react";
import { HamrohMark } from "./HamrohMark";

const noteExamples = [
  "Yangi mahsulot g'oyasini juma kuni tekshirish",
  "Mijoz bilan suhbatda shu savolni berish",
  "Landing uchun bir jumlalik yangi taklif",
];

const benefits = [
  {
    icon: Command,
    title: "Bir lahzada yozing",
    text: "Mac'da global tez note oynasi fikr kelgan zahoti ochiladi.",
  },
  {
    icon: Layers3,
    title: "Hammasi saqlanadi",
    text: "Tez yozilgan fikrlar yo'qolmaydi, Notes ichida tartibli qoladi.",
  },
  {
    icon: MoveHorizontal,
    title: "Displayda varaqlang",
    text: "Hamroh ekranida chap va o'ng swipe bilan notelar orasida yuring.",
  },
];

export function NotesFeature() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, {
    once: true,
    margin: "0px 0px 120px 0px",
  });
  const reduceMotion = useReducedMotion();
  const [draft, setDraft] = useState(noteExamples[0]);
  const [displayedNote, setDisplayedNote] = useState(noteExamples[0]);
  const [noteIndex, setNoteIndex] = useState(0);
  const [sent, setSent] = useState(false);

  const moveNote = (direction: -1 | 1) => {
    const next =
      (noteIndex + direction + noteExamples.length) % noteExamples.length;
    setNoteIndex(next);
    setDraft(noteExamples[next]);
    setDisplayedNote(noteExamples[next]);
    setSent(false);
  };

  const sendToDisplay = () => {
    const value = draft.trim();
    if (!value) return;
    setDisplayedNote(value);
    setSent(true);
  };

  return (
    <section
      id="notes"
      ref={ref}
      className="bg-[#101310] px-4 py-12 text-white sm:px-6 sm:py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold text-emerald-400">Yangi: Notes</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.06] sm:text-5xl md:text-6xl">
            Fikr kelganda,
            <br />
            shu zahoti ushlab qoling.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/58 sm:text-lg">
            Yaxshi g'oya ko'pincha noto'g'ri paytda keladi. Hamroh tez note bilan
            uni bir necha soniyada yozib oladi va ko'z oldingizdagi displayga
            olib chiqadi.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-lg border border-white/10 bg-[#181B18] shadow-[0_34px_80px_rgba(0,0,0,0.34)]">
              <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <HamrohMark className="!h-8 !w-8 !rounded-lg" />
                  <div>
                    <p className="text-sm font-semibold">Tez note</p>
                    <p className="text-[11px] text-white/38">Hamroh IO for Mac</p>
                  </div>
                </div>
                <kbd className="rounded-md border border-white/10 bg-white/[0.055] px-2 py-1 text-[11px] font-semibold text-white/55">
                  ⌘ L
                </kbd>
              </div>

              <div className="p-4 sm:p-6">
                <label htmlFor="note-demo" className="sr-only">
                  Tez note demo matni
                </label>
                <textarea
                  id="note-demo"
                  value={draft}
                  maxLength={90}
                  onChange={(event) => {
                    setDraft(event.target.value);
                    setSent(false);
                  }}
                  className="h-32 w-full resize-none rounded-md border border-white/10 bg-black/22 p-4 text-base font-medium leading-relaxed text-white outline-none transition placeholder:text-white/28 focus:border-emerald-400/55 sm:h-36 sm:text-lg"
                />

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs text-white/35">{draft.length}/90</p>
                  <button
                    type="button"
                    onClick={sendToDisplay}
                    disabled={!draft.trim()}
                    className="inline-flex h-10 items-center gap-2 rounded-md bg-white px-4 text-sm font-semibold text-[#101310] transition hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    {sent ? <Check size={16} /> : <Send size={16} />}
                    {sent ? "Displayda" : "Displayga chiqarish"}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.16, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto w-full max-w-[440px]"
          >
            <div className="rounded-[26px] border border-white/12 bg-[#080A08] p-2.5 shadow-[0_34px_80px_rgba(0,0,0,0.46)]">
              <div className="grid aspect-[320/172] place-items-center rounded-[19px] border border-white/8 bg-black px-8 text-center">
                <p className="max-w-[300px] text-balance font-display text-xl font-semibold leading-snug sm:text-2xl">
                  {displayedNote}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => moveNote(-1)}
                className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white/55 transition hover:bg-white/8 hover:text-white"
                aria-label="Oldingi note"
                title="Oldingi note"
              >
                <ChevronLeft size={18} />
              </button>
              <p className="text-xs font-medium text-white/38">
                Displayda {noteIndex + 1} / {noteExamples.length}
              </p>
              <button
                type="button"
                onClick={() => moveNote(1)}
                className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white/55 transition hover:bg-white/8 hover:text-white"
                aria-label="Keyingi note"
                title="Keyingi note"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid border-y border-white/10 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.08 }}
              className="border-b border-white/10 py-7 md:border-b-0 md:border-r md:px-7 md:last:border-r-0 md:first:pl-0 md:last:pr-0"
            >
              <benefit.icon size={20} className="text-emerald-400" />
              <h3 className="mt-4 font-display text-lg font-semibold">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/46">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
