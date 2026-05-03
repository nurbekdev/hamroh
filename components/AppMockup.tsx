"use client";

import { Apple } from "lucide-react";

function WindowsLogo({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="opacity-80"
      aria-hidden
    >
      <path d="M3 5.5L10.5 4.5V11.5H3V5.5ZM3 18.5V12.5H10.5V19.5L3 18.5ZM11.5 4.5L21 3V11.5H11.5V4.5ZM11.5 19.5V12.5H21V21L11.5 19.5Z" />
    </svg>
  );
}

const slideContent: Record<
  number,
  {
    title: string;
    subtitle?: string;
    showChart?: boolean;
    platforms?: boolean;
    tasks?: string[];
    progress?: number;
    timer?: string;
    timerLabel?: string;
    streak?: string;
    habits?: { name: string; days: number[] }[];
  }
> = {
  0: {
    title: "MONITORINGIZGA\nYOPISHADI",
    subtitle: "(laptop, pc va boshqalar)",
    showChart: true,
    platforms: true,
  },
  1: {
    title: "Bugungi vazifalar",
    tasks: [
      "Dizayn yakunlash ✓",
      "3D print tekshirish ✓",
      "Beta sinov",
      "App ulash",
    ],
    progress: 50,
  },
  2: {
    title: "Focus Mode",
    timer: "24:38",
    timerLabel: "Pomodoro davom etmoqda",
    streak: "🔥 7 kun ketma-ket",
  },
  3: {
    title: "Odatlar",
    habits: [
      { name: "Kitob o'qish", days: [1, 1, 1, 1, 1, 0, 1] },
      { name: "Sport", days: [1, 0, 1, 1, 0, 1, 1] },
      { name: "Suv ichish", days: [1, 1, 1, 1, 1, 1, 1] },
    ],
  },
};

export function AppMockup({ slide }: { slide: number }) {
  const content = slideContent[slide];
  if (!content) return null;

  return (
    <div className="w-full max-w-[200px] overflow-hidden rounded-[20px] bg-[#111] text-white shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
      <div className="p-4">
        {slide === 0 && (
          <>
            <div className="mb-4 flex gap-2 opacity-80">
              <Apple size={16} />
              <WindowsLogo size={16} />
            </div>
            <p className="whitespace-pre-line font-bold text-sm leading-tight text-white">
              {content.title}
            </p>
            <p className="mb-4 text-xs italic text-white/50">{content.subtitle}</p>
            <svg viewBox="0 0 160 60" className="w-full opacity-60">
              <polyline
                points="0,50 40,30 80,40 120,15 160,25"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
              {[0, 40, 80, 120, 160].map((x, i) => (
                <circle
                  key={i}
                  cx={x}
                  cy={[50, 30, 40, 15, 25][i]}
                  r="3"
                  fill="white"
                />
              ))}
            </svg>
          </>
        )}

        {slide === 1 && content.tasks && (
          <>
            <p className="mb-3 text-xs font-semibold opacity-70">
              {content.title}
            </p>
            <div className="mb-3 h-1 rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-green-400"
                style={{ width: `${content.progress ?? 50}%` }}
              />
            </div>
            {content.tasks.map((task, i) => (
              <div key={i} className="mb-2 flex items-center gap-2">
                <div
                  className={`h-3 w-3 flex-shrink-0 rounded-sm ${
                    i < 2 ? "bg-green-400" : "border border-white/20"
                  }`}
                />
                <span
                  className={`text-xs ${i < 2 ? "line-through opacity-40" : "opacity-70"}`}
                >
                  {task}
                </span>
              </div>
            ))}
          </>
        )}

        {slide === 2 && (
          <>
            <p className="mb-2 text-xs opacity-50">{content.title}</p>
            <p className="mb-1 font-mono text-3xl font-bold">{content.timer}</p>
            <p className="mb-4 text-xs opacity-50">{content.timerLabel}</p>
            <div className="h-1 rounded-full bg-white/10">
              <div className="h-full w-[62%] rounded-full bg-white" />
            </div>
            <p className="mt-3 text-xs opacity-40">{content.streak}</p>
          </>
        )}

        {slide === 3 && content.habits && (
          <>
            <p className="mb-3 text-xs font-semibold opacity-70">
              {content.title}
            </p>
            {content.habits.map((habit, i) => (
              <div key={i} className="mb-3">
                <p className="mb-1 text-xs opacity-50">{habit.name}</p>
                <div className="flex gap-1">
                  {habit.days.map((done, j) => (
                    <div
                      key={j}
                      className={`h-5 w-5 rounded-sm text-center ${
                        done ? "bg-green-400" : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
