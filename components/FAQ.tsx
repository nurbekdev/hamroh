"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const items = [
  {
    q: "Hamrohio nima?",
    a: "Hamrohio — monitor bezeliga yopishib oladigan kichik aqlli robot. Ekranida 50+ jonli animatsiya ko'rsatadi va desktop app orqali vazifalar, focus timer va odatlarni boshqarishga yordam beradi.",
  },
  {
    q: "Qaysi operatsion tizimlarda ishlaydi?",
    a: "macOS 12 va undan yuqori, Windows 10 va undan yuqori versiyalar.",
  },
  {
    q: "3D printed ekanligini sezib qolmaydimi?",
    a: "Yo'q. Professional sifatli PLA filament va yuqori sifatli print texnologiyasi bilan ishlab chiqariladi. Ko'rinishi va hissi factory-made mahsulotga o'xshaydi.",
  },
  {
    q: "WiFi shart emasmi?",
    a: "Dastlabki ulash uchun WiFi kerak. Keyin USB-C orqali ham ishlaydi.",
  },
  {
    q: "Ma'lumotlarim xavfsizmi?",
    a: "Ha. Barcha ma'lumotlar faqat sizning kompyuteringizda saqlanadi. Cloud sync yo'q, hisob kerak emas.",
  },
  {
    q: "Qaytarish mumkinmi?",
    a: "Ha. Yetkazib berilguncha to'liq qaytaramiz. Yetkazilgandan so'ng ishlab chiqarish nuqsonlari uchun qaytarish qabul qilinadi.",
  },
  {
    q: "Keyingi batchda narx qanchaga oshadi?",
    a: "Hozirgi founders narxi 590 000 so'm. Keyingi batch uchun narx 690 000 so'mdan boshlanishi rejalashtirilgan.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="faq"
      ref={ref}
      className="scroll-mt-20 border-t border-black/[0.06] bg-white px-4 py-16 transition-colors duration-300 dark:border-white/[0.06] dark:bg-[#161616] sm:px-6 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl font-bold text-[#111] md:text-4xl dark:text-[#F2F0EC]"
        >
          Savol-javoblar
        </motion.h2>
        <div className="mt-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 }}
              className="border-b border-black/[0.08] dark:border-white/[0.08]"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-medium text-[#111] dark:text-[#F2F0EC]">{item.q}</span>
                <span className="shrink-0 text-[#111] dark:text-[#F2F0EC]">
                  {open === i ? (
                    <Minus size={20} strokeWidth={2} />
                  ) : (
                    <Plus size={20} strokeWidth={2} />
                  )}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 pr-8 text-[#888] dark:text-[#666]">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
