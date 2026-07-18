"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  Check,
  CircleDot,
  Droplets,
  Focus,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

type Sequence = {
  label: string;
  title: string;
  text: string;
  frames: string[];
  fps: number;
  holdMs: number;
  icon: typeof CircleDot;
};

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

const taskDoneFrames = Array.from(
  { length: 10 },
  (_, index) => `/figma/task-done/${index + 1}.png`,
);
const pomodoroFrames = Array.from(
  { length: 14 },
  (_, index) => `/figma/pomodoro-start/Frame%20${index + 25}.png`,
);
const angryFrames = Array.from(
  { length: 14 },
  (_, index) => `/figma/angry/Frame%20${index + 71}.png`,
);
const readFrames = Array.from(
  { length: 20 },
  (_, index) => `/figma/read-books/Frame%20${index + 238}.png`,
);
const drinkFrames = [
  170,
  ...Array.from({ length: 24 }, (_, index) => index + 172),
].map((frame) => `/figma/drink-water/Frame%20${frame}.png`);

const sequences: Sequence[] = [
  {
    label: "Sokin",
    title: "Yonida sokin turadi",
    text: "Diqqat kerak bo'lmaguncha display tinch va tabiiy qoladi.",
    frames: idleFrames,
    fps: 10,
    holdMs: 1800,
    icon: CircleDot,
  },
  {
    label: "Bajarildi",
    title: "Natijani nishonlaydi",
    text: "Vazifa tugashi bilan kichik, yoqimli reaksiya beradi.",
    frames: taskDoneFrames,
    fps: 10,
    holdMs: 1100,
    icon: Check,
  },
  {
    label: "Fokus",
    title: "Fokusni boshlab beradi",
    text: "Pomodoro boshlanganda Hamroh ham siz bilan ishga kirishadi.",
    frames: pomodoroFrames,
    fps: 10,
    holdMs: 1100,
    icon: Focus,
  },
  {
    label: "Kitob",
    title: "Odatlarni eslatadi",
    text: "Kichik signallar yaxshi odatlarni ko'z oldingizda saqlaydi.",
    frames: readFrames,
    fps: 10,
    holdMs: 1000,
    icon: BookOpen,
  },
  {
    label: "Suv",
    title: "Tanaffusni eslatadi",
    text: "Kun davomida suv va qisqa tanaffuslarni unutib qo'ymaysiz.",
    frames: drinkFrames,
    fps: 10,
    holdMs: 1000,
    icon: Droplets,
  },
  {
    label: "Guard",
    title: "Chalg'ishni sezadi",
    text: "Qisqa videolar fokusni buzsa, Hamroh sokin signal beradi.",
    frames: angryFrames,
    fps: 10,
    holdMs: 1200,
    icon: ShieldAlert,
  },
];

function loadFrame(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = async () => {
      try {
        await image.decode();
      } catch {
        // The image is still usable when decode() is unavailable or resolves late.
      }
      resolve(image);
    };
    image.onerror = () => reject(new Error(`Frame yuklanmadi: ${src}`));
    image.src = src;
  });
}

function useSequencePlayer(isVisible: boolean) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const decodedFrames = useRef<HTMLImageElement[][]>([]);
  const activeIndexRef = useRef(0);
  const startedAtRef = useRef(0);
  const lastFrameRef = useRef(-1);
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  const allFrameSources = useMemo(
    () => sequences.map((sequence) => sequence.frames),
    [],
  );

  const drawFrame = useCallback((sequenceIndex: number, frameIndex: number) => {
    const canvas = canvasRef.current;
    const image = decodedFrames.current[sequenceIndex]?.[frameIndex];
    if (!canvas || !image) return;

    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      allFrameSources.map((frames) => Promise.all(frames.map(loadFrame))),
    )
      .then((loaded) => {
        if (cancelled) return;
        decodedFrames.current = loaded;
        setIsReady(true);
        drawFrame(0, 0);
      })
      .catch(() => {
        if (!cancelled) setHasError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [allFrameSources, drawFrame]);

  useEffect(() => {
    if (!isReady || !isVisible || reduceMotion) {
      if (isReady) drawFrame(activeIndexRef.current, 0);
      return;
    }

    let animationFrame = 0;
    startedAtRef.current = performance.now();
    lastFrameRef.current = -1;

    const tick = (now: number) => {
      const sequenceIndex = activeIndexRef.current;
      const sequence = sequences[sequenceIndex];
      const frameDuration = 1000 / sequence.fps;
      const motionDuration = sequence.frames.length * frameDuration;
      const elapsed = now - startedAtRef.current;

      if (elapsed >= motionDuration + sequence.holdMs) {
        const nextIndex = (sequenceIndex + 1) % sequences.length;
        activeIndexRef.current = nextIndex;
        startedAtRef.current = now;
        lastFrameRef.current = -1;
        setActiveIndex(nextIndex);
        drawFrame(nextIndex, 0);
      } else {
        const frameIndex = Math.min(
          Math.floor(elapsed / frameDuration),
          sequence.frames.length - 1,
        );
        if (frameIndex !== lastFrameRef.current) {
          lastFrameRef.current = frameIndex;
          drawFrame(sequenceIndex, frameIndex);
        }
      }

      animationFrame = requestAnimationFrame(tick);
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [drawFrame, isReady, isVisible, reduceMotion]);

  const selectSequence = useCallback(
    (index: number) => {
      activeIndexRef.current = index;
      startedAtRef.current = performance.now();
      lastFrameRef.current = -1;
      setActiveIndex(index);
      if (isReady) drawFrame(index, 0);
    },
    [drawFrame, isReady],
  );

  return {
    canvasRef,
    activeIndex,
    isReady,
    hasError,
    selectSequence,
  };
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, { margin: "120px 0px", amount: 0.2 });
  const reduceMotion = useReducedMotion();
  const { canvasRef, activeIndex, isReady, hasError, selectSequence } =
    useSequencePlayer(isVisible);
  const activeSequence = sequences[activeIndex];

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[88svh] overflow-hidden bg-[#F4F5F2] px-4 pb-6 pt-24 text-[#111] transition-colors duration-300 dark:bg-[#0B0D0C] dark:text-[#F4F5F2] sm:px-6 sm:pt-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-center"
        >
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
            <Sparkles size={16} aria-hidden />
            O'zbekistonda yaratilgan shaxsiy fokus tizimi
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.02] sm:text-6xl md:text-7xl lg:text-[76px]">
            Hamroh IO
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-xl font-medium leading-snug text-black/74 dark:text-white/74 sm:text-2xl md:text-[28px]">
            Fikrni ushlaydi. Fokusni saqlaydi.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-black/52 dark:text-white/52 sm:text-base">
            Vazifalar, Pomodoro, odatlar va tezkor notelar Mac bilan ishlaydigan
            haqiqiy AMOLED displayda jonlanadi.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.08, duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-6 w-full max-w-5xl"
        >
          <div className="mx-auto w-full max-w-[520px]">
            <div className="relative rounded-[26px] border border-black/10 bg-[#151816] p-2.5 shadow-[0_36px_90px_rgba(10,20,14,0.24)] dark:border-white/10 dark:shadow-[0_36px_90px_rgba(0,0,0,0.55)] sm:p-3">
              <div className="overflow-hidden rounded-[20px] border border-white/10 bg-black">
                <canvas
                  ref={canvasRef}
                  width={640}
                  height={344}
                  className="block aspect-[320/172] w-full bg-black"
                  role="img"
                  aria-label={`Hamroh IO: ${activeSequence.title}`}
                />
                {!isReady && !hasError && (
                  <div className="absolute inset-3 grid place-items-center rounded-[20px] bg-black text-sm text-white/45">
                    Display tayyorlanmoqda
                  </div>
                )}
                {hasError && (
                  <div className="absolute inset-3 grid place-items-center rounded-[20px] bg-black text-sm text-white/55">
                    Hamroh displayi
                  </div>
                )}
              </div>
            </div>
            <div className="mx-auto h-5 w-[42%] border-x border-black/10 bg-black/[0.035] dark:border-white/10 dark:bg-white/[0.04]" />
            <div className="mx-auto h-px w-[66%] bg-black/18 dark:bg-white/18" />
          </div>

          <div className="mx-auto mt-3 flex max-w-4xl flex-col items-center gap-2.5 text-center">
            <div className="text-sm" aria-live="polite">
              <strong className="font-semibold">{activeSequence.title}.</strong>{" "}
              <span className="text-black/50 dark:text-white/50">
                {activeSequence.text}
              </span>
            </div>

            <div
              className="flex max-w-full gap-1 overflow-x-auto rounded-lg border border-black/8 bg-white/65 p-1 shadow-sm backdrop-blur-xl dark:border-white/8 dark:bg-white/[0.055]"
              role="tablist"
              aria-label="Hamroh animatsiyalari"
            >
              {sequences.map((sequence, index) => {
                const Icon = sequence.icon;
                const isActive = index === activeIndex;
                return (
                  <button
                    key={sequence.label}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => selectSequence(index)}
                    className={`inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md px-3 text-xs font-semibold transition sm:text-sm ${
                      isActive
                        ? "bg-[#121513] text-white shadow-sm dark:bg-white dark:text-[#111]"
                        : "text-black/48 hover:bg-black/[0.05] hover:text-black/75 dark:text-white/48 dark:hover:bg-white/[0.07] dark:hover:text-white/75"
                    }`}
                  >
                    <Icon size={15} aria-hidden />
                    {sequence.label}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://t.me/nnpgo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-[#121513] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 dark:bg-white dark:text-[#111]"
          >
            Hamrohni buyurtma qilish
          </a>
          <a
            href="#notes"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-black/12 bg-white/55 px-6 text-sm font-semibold text-black/68 backdrop-blur-lg transition hover:bg-white hover:text-black dark:border-white/12 dark:bg-white/[0.04] dark:text-white/68 dark:hover:bg-white/[0.08] dark:hover:text-white"
          >
            Yangi Notes funksiyasi
          </a>
        </motion.div>
      </div>
    </section>
  );
}
