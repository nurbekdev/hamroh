"use client";

import { type ReactNode } from "react";

export type ScreenContent = "sticks" | "tasks" | "focus" | "habits";

interface MacBookMockupProps {
  content: ScreenContent;
  children: ReactNode; // Robot — bezelga yopishgan
}

export function MacBookMockup({ content, children }: MacBookMockupProps) {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      {/* MacBook ramkasi: yuqori bezel (camera) + asosiy qism (chap bezel | ekran) */}
      <div className="relative overflow-hidden rounded-[14px] bg-[#1f1f1f] shadow-[0_32px_80px_rgba(0,0,0,0.35)] ring-1 ring-black/40">
        {/* Yuqori bezel — camera */}
        <div className="flex h-3 items-center justify-center bg-[#1f1f1f]">
          <div className="h-3 w-3 rounded-full bg-[#0a0a0a] ring-1 ring-white/5" />
        </div>

        {/* Chap bezel (robot) + ekran — robot ekrandan TASHQARIDA, faqat bezelda */}
        <div className="flex min-h-[280px] md:min-h-[320px]">
          {/* Chap bezel: robot faqat shu yerda, ekrandan tashqarida (rasmdagidek) */}
          <div className="relative flex w-[92px] flex-shrink-0 items-start justify-start bg-[#1f1f1f] pl-0.5 pt-0.5 md:w-[102px]">
            <div className="drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
              {children}
            </div>
          </div>

          {/* Ekran — faqat o'ng qism, robot unga chiqmaydi */}
          <div className="min-w-0 flex-1 rounded-r-[8px] rounded-tl-none rounded-bl-none bg-[#111] pt-4 pr-4 pb-5 pl-4">
            {content === "sticks" && <SticksContent />}
            {content === "tasks" && <TasksContent />}
            {content === "focus" && <FocusContent />}
            {content === "habits" && <HabitsContent />}
          </div>
        </div>
      </div>

      {/* MacBook pastki qismi (base) */}
      <div className="mx-auto mt-1 h-2 w-[110%] max-w-[540px] rounded-b-md bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] shadow-[0_4px_12px_rgba(0,0,0,0.3)]" />
    </div>
  );
}

function SticksContent() {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white opacity-90">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white opacity-90">
          <path d="M3 5.557l7.357-1.002.003 7.097-7.354.042L3 5.557zm7.354 6.913l.004 7.098L3.003 18.56l-.001-6.086 7.352-.004zm.892-8.046L21.001 3v8.562l-9.755.077V4.424zm9.758 8.113-.003 8.523-9.755-1.369-.014-7.161 9.772.007z" />
        </svg>
        <span className="ml-1 text-xs font-semibold text-white">hamrohio</span>
      </div>
      <p className="mb-0.5 text-xs uppercase tracking-wider text-white/50">STICKS</p>
      <p className="mb-0.5 text-xs uppercase tracking-wider text-white/50">TO</p>
      <p className="mb-0.5 text-xs uppercase tracking-wider text-white/50">YOUR</p>
      <p className="mb-0.5 text-sm font-bold uppercase tracking-wider text-white">MONITOR</p>
      <p className="mb-4 text-xs italic text-white/40">(laptop, pc va boshqalar)</p>
      <svg viewBox="0 0 160 70" className="w-full max-w-[200px] opacity-50">
        <polyline
          points="0,55 35,38 70,48 105,18 160,28"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[[0,55],[35,38],[70,48],[105,18],[160,28]].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="white" />
        ))}
      </svg>
    </div>
  );
}

function TasksContent() {
  return (
    <div>
      <p className="mb-3 text-xs font-medium text-white/50">Bugungi vazifalar</p>
      <div className="mb-4 h-1 w-full max-w-[180px] rounded-full bg-white/10">
        <div className="h-full w-1/2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
      </div>
      {[
        { text: "Dizayn yakunlash", done: true },
        { text: "3D print tekshirish", done: true },
        { text: "Beta sinov", done: false },
        { text: "App ulash", done: false },
      ].map((task, i) => (
        <div key={i} className="mb-2 flex items-center gap-2.5">
          <div
            className={`flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-[4px] ${
              task.done ? "bg-green-400" : "border border-white/20"
            }`}
          >
            {task.done && (
              <svg viewBox="0 0 10 10" className="h-2.5 w-2.5">
                <path d="M2 5l2.5 2.5L8 3" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            )}
          </div>
          <span className={`text-xs ${task.done ? "text-white/30 line-through" : "text-white/70"}`}>
            {task.text}
          </span>
        </div>
      ))}
    </div>
  );
}

function FocusContent() {
  return (
    <div>
      <p className="mb-2 text-xs text-white/40">Focus Mode</p>
      <p className="mb-1 font-mono text-3xl font-bold tracking-tight text-white md:text-4xl">24:38</p>
      <p className="mb-4 text-xs text-white/40">Pomodoro davom etmoqda</p>
      <div className="mb-4 h-1 w-full max-w-[200px] rounded-full bg-white/10">
        <div className="h-full w-[62%] rounded-full bg-white" />
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-sm">🔥</span>
        <span className="text-xs text-white/40">7 kun ketma-ket</span>
      </div>
    </div>
  );
}

function HabitsContent() {
  return (
    <div>
      <p className="mb-4 text-xs font-medium text-white/50">Odatlar</p>
      {[
        { name: "Kitob o'qish", days: [1,1,1,1,1,0,1] },
        { name: "Sport", days: [1,0,1,1,0,1,1] },
        { name: "Suv ichish", days: [1,1,1,1,1,1,1] },
      ].map((habit, i) => (
        <div key={i} className="mb-3">
          <p className="mb-1.5 text-xs text-white/40">{habit.name}</p>
          <div className="flex gap-1">
            {habit.days.map((done, j) => (
              <div
                key={j}
                className={`h-5 w-5 rounded-[5px] md:h-6 md:w-6 ${
                  done ? "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.4)]" : "bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
