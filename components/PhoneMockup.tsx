"use client";

type PhoneContent = "sticks" | "tasks" | "focus" | "habits";

export function PhoneMockup({ content }: { content: PhoneContent }) {
  return (
    <div className="relative w-[190px] md:w-[210px]">
      <div className="overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#111] shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
        {/* Notch */}
        <div className="flex justify-center pb-1 pt-3">
          <div className="h-1.5 w-16 rounded-full bg-white/10" />
        </div>

        <div className="min-h-[300px] px-4 pb-6 pt-2">
          {content === "sticks" && (
            <div>
              <div className="mb-4 flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
                  <path d="M3 5.557l7.357-1.002.003 7.097-7.354.042L3 5.557zm7.354 6.913l.004 7.098L3.003 18.56l-.001-6.086 7.352-.004zm.892-8.046L21.001 3v8.562l-9.755.077V4.424zm9.758 8.113-.003 8.523-9.755-1.369-.014-7.161 9.772.007z" />
                </svg>
                <span className="ml-1 text-xs font-semibold text-white">
                  hamrohio
                </span>
              </div>
              <p className="mb-1 text-xs uppercase tracking-wider text-white/50">
                STICKS
              </p>
              <p className="mb-1 text-xs uppercase tracking-wider text-white/50">
                TO
              </p>
              <p className="mb-1 text-xs uppercase tracking-wider text-white/50">
                YOUR
              </p>
              <p className="mb-0.5 text-sm font-bold uppercase tracking-wider text-white">
                MONITOR
              </p>
              <p className="mb-5 text-xs italic text-white/40">
                (laptop, pc va boshqalar)
              </p>
              <svg viewBox="0 0 160 80" className="w-full opacity-50">
                <polyline
                  points="0,65 40,45 80,55 120,20 160,35"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {[
                  [0, 65],
                  [40, 45],
                  [80, 55],
                  [120, 20],
                  [160, 35],
                ].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="3" fill="white" />
                ))}
              </svg>
            </div>
          )}

          {content === "tasks" && (
            <div>
              <p className="mb-3 text-xs font-medium text-white/50">
                Bugungi vazifalar
              </p>
              <div className="mb-4 h-1 rounded-full bg-white/10">
                <div className="h-full w-1/2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
              </div>
              {[
                { text: "Dizayn yakunlash", done: true },
                { text: "3D print tekshirish", done: true },
                { text: "Beta sinov", done: false },
                { text: "App ulash", done: false },
                { text: "Birinchi yetkazma", done: false },
              ].map((task, i) => (
                <div key={i} className="mb-2.5 flex items-center gap-2.5">
                  <div
                    className={`flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-[4px] ${
                      task.done ? "bg-green-400" : "border border-white/20"
                    }`}
                  >
                    {task.done && (
                      <svg viewBox="0 0 10 10" className="h-2.5 w-2.5">
                        <path
                          d="M2 5l2.5 2.5L8 3"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    className={`text-xs ${
                      task.done
                        ? "text-white/30 line-through"
                        : "text-white/70"
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
              ))}
            </div>
          )}

          {content === "focus" && (
            <div>
              <p className="mb-2 text-xs text-white/40">Focus Mode</p>
              <p className="mb-1 font-mono text-4xl font-bold tracking-tight text-white">
                24:38
              </p>
              <p className="mb-5 text-xs text-white/40">
                Pomodoro davom etmoqda
              </p>
              <div className="mb-5 h-1 rounded-full bg-white/10">
                <div className="h-full w-[62%] rounded-full bg-white" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm">🔥</span>
                <span className="text-xs text-white/40">7 kun ketma-ket</span>
              </div>
            </div>
          )}

          {content === "habits" && (
            <div>
              <p className="mb-4 text-xs font-medium text-white/50">Odatlar</p>
              {[
                {
                  name: "Kitob o'qish",
                  days: [1, 1, 1, 1, 1, 0, 1],
                },
                { name: "Sport", days: [1, 0, 1, 1, 0, 1, 1] },
                { name: "Suv ichish", days: [1, 1, 1, 1, 1, 1, 1] },
              ].map((habit, i) => (
                <div key={i} className="mb-4">
                  <p className="mb-1.5 text-xs text-white/40">{habit.name}</p>
                  <div className="flex gap-1">
                    {habit.days.map((done, j) => (
                      <div
                        key={j}
                        className={`h-6 w-6 rounded-[5px] ${
                          done
                            ? "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.4)]"
                            : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-center pb-3">
          <div className="h-1 w-20 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}
