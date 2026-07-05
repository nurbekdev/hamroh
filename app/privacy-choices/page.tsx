import type { Metadata } from "next";
import { HamrohMark } from "@/components/HamrohMark";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Database,
  Eraser,
  ExternalLink,
  Mail,
  MessageCircle,
  MousePointer2,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Choices — Hamrohio",
  description:
    "Hamrohio foydalanuvchilari uchun privacy choices: local app data, support data, deletion request va tracking choices.",
  alternates: {
    canonical: "https://hamrohio.me/privacy-choices",
  },
  openGraph: {
    title: "Hamrohio Privacy Choices",
    description:
      "Hamrohio appida privacy tanlovlari, support ma'lumotlari va o'chirish so'rovlari.",
    url: "https://hamrohio.me/privacy-choices",
    type: "website",
  },
};

const choices = [
  {
    title: "Lokal app ma'lumotlari",
    status: "Siz boshqarasiz",
    text: "Vazifalar, notelar, odatlar va fokus yozuvlari app ichida yaratiladi. Ularni appdan o'chirish yoki appni olib tashlash orqali boshqarishingiz mumkin.",
    icon: Database,
  },
  {
    title: "Support ma'lumotlari",
    status: "So'rov orqali",
    text: "Supportga yuborgan xabar, screenshot yoki diagnostika matnini o'chirishni support@hamrohio.me orqali so'rashingiz mumkin.",
    icon: Eraser,
  },
  {
    title: "Marketing aloqa",
    status: "Ixtiyoriy",
    text: "Hamrohio sizga faqat o'zingiz murojaat qilgan kanal orqali javob beradi. Kerak bo'lmasa, javob yozishmalarini to'xtatishni so'rashingiz mumkin.",
    icon: MessageCircle,
  },
  {
    title: "Sale yoki tracking",
    status: "Qo'llanmaydi",
    text: "Hamrohio shaxsiy ma'lumotlarni sotmaydi va targeted advertising tracking ishlatmaydi.",
    icon: ShieldCheck,
  },
];

const requestSteps = [
  "Qaysi ma'lumot bo'yicha so'rov yuborayotganingizni yozing.",
  "Agar support murojaati haqida bo'lsa, email yoki Telegram username kiriting.",
  "O'chirish, tuzatish yoki javob yozishmalarini to'xtatish istagini aniq yozing.",
  "Biz so'rovni tekshirib, imkon qadar tez javob beramiz.",
];

export default function PrivacyChoicesPage() {
  return (
    <main className="min-h-screen min-w-0 overflow-x-hidden bg-[#F8F7F4] text-[#111] dark:bg-[#0E0E0E] dark:text-[#F2F0EC]">
      <header className="border-b border-black/[0.06] bg-[#F8F7F4]/86 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#0E0E0E]/86">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 md:px-8">
          <Link
            href="/"
            className="flex min-h-[44px] items-center gap-3 rounded-full pr-3 text-sm font-semibold transition hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
            aria-label="Hamrohio bosh sahifa"
          >
            <HamrohMark />
            <span>hamrohio</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="hidden min-h-[42px] items-center gap-2 rounded-full border border-black/[0.08] bg-white/70 px-4 text-sm font-semibold text-black/70 shadow-sm transition hover:bg-white dark:border-white/[0.08] dark:bg-white/[0.06] dark:text-white/70 dark:hover:bg-white/[0.1] sm:flex"
            >
              <ArrowLeft size={16} aria-hidden />
              Bosh sahifa
            </Link>
            <Link
              href="/privacy"
              className="flex min-h-[42px] items-center gap-2 rounded-full bg-[#111] px-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 active:translate-y-0 dark:bg-white dark:text-[#111]"
            >
              Policy
            </Link>
          </div>
        </div>
      </header>

      <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="min-w-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/80 px-4 py-2 text-sm font-semibold text-black/55 shadow-sm backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.07] dark:text-white/60">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              User Privacy Choices URL
            </div>
            <h1 className="max-w-[820px] text-balance font-display text-[42px] font-bold leading-[1.02] tracking-[-0.035em] sm:text-6xl sm:leading-[0.98] md:text-7xl">
              Privacy choices.
            </h1>
            <p className="mt-6 max-w-full text-base leading-relaxed text-black/58 dark:text-white/54 sm:max-w-2xl sm:text-lg">
              Hamrohio ma'lumotlaringiz ustidan nazoratni sodda qiladi. Lokal
              app ma'lumotlari sizning qurilmangizda, support ma'lumotlari esa
              faqat murojaat bo'lsa ishlatiladi.
            </p>
            <p className="mt-4 text-sm font-semibold text-black/42 dark:text-white/38">
              Last updated: July 5, 2026
            </p>
          </div>

          <div className="min-w-0 rounded-[32px] border border-black/[0.08] bg-white/82 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.10)] backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.06] dark:shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:p-6">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#111] text-white dark:bg-white dark:text-[#111]">
                <SlidersHorizontal size={26} aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35 dark:text-white/35">
                  Privacy markazi
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold">
                  Tanlovlaringiz aniq
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-black/52 dark:text-white/48">
                  Bu sahifa App Store’dagi optional privacy choices URL uchun
                  tayyorlangan.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <a
                href="mailto:support@hamrohio.me?subject=Hamrohio%20privacy%20choices"
                className="group flex min-h-[64px] items-center justify-between gap-4 rounded-2xl border border-black/[0.07] bg-black/[0.03] px-4 transition hover:border-black/[0.12] hover:bg-black/[0.05] dark:border-white/[0.07] dark:bg-white/[0.05] dark:hover:border-white/[0.14] dark:hover:bg-white/[0.08]"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-black/58 shadow-sm dark:bg-white/[0.08] dark:text-white/68">
                    <Mail size={18} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">
                      Privacy request
                    </span>
                    <span className="block truncate text-sm text-black/48 dark:text-white/44">
                      support@hamrohio.me
                    </span>
                  </span>
                </span>
                <ExternalLink
                  size={16}
                  className="shrink-0 text-black/28 transition group-hover:text-black/55 dark:text-white/28 dark:group-hover:text-white/60"
                  aria-hidden
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 md:px-8">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-4 md:grid-cols-2">
          {choices.map((choice) => (
            <article
              key={choice.title}
              className="min-w-0 rounded-[26px] border border-black/[0.08] bg-white/78 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.06)] dark:border-white/[0.08] dark:bg-white/[0.055] dark:shadow-none sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#111]/[0.06] text-[#111] dark:bg-white/[0.08] dark:text-white">
                  <choice.icon size={22} aria-hidden />
                </div>
                <span className="rounded-full border border-black/[0.08] bg-black/[0.04] px-3 py-1 text-xs font-semibold text-black/52 dark:border-white/[0.08] dark:bg-white/[0.06] dark:text-white/52">
                  {choice.status}
                </span>
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold tracking-[-0.02em]">
                {choice.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-black/54 dark:text-white/48">
                {choice.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:px-8 md:pb-24">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="min-w-0 rounded-[30px] border border-black/[0.08] bg-[#111] p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.16)] dark:border-white/[0.08] dark:bg-white/[0.06] dark:shadow-none sm:p-8">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10">
              <MousePointer2 size={26} aria-hidden />
            </div>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-[-0.02em]">
              Sale / Share opt-out
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/64">
              Hamrohio shaxsiy ma'lumotlarni sotmaydi va targeted advertising
              uchun ulashmaydi. Shu sabab sale/share opt-out hozirda
              qo'llanmaydi, lekin privacy savollari uchun har doim yozishingiz
              mumkin.
            </p>
            <a
              href="mailto:support@hamrohio.me?subject=Hamrohio%20privacy%20request&body=Salom%2C%20Hamrohio%20privacy%20bo'yicha%20so'rovim%20bor.%0A%0ASo'rov%20turi%3A%0ABog'lanish%20ma'lumoti%3A%0AIzoh%3A"
              className="mt-7 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#111] transition hover:-translate-y-0.5 active:translate-y-0"
            >
              <Mail size={18} aria-hidden />
              So'rov yuborish
            </a>
          </div>

          <div className="min-w-0 rounded-[30px] border border-black/[0.08] bg-white/78 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.08)] dark:border-white/[0.08] dark:bg-white/[0.055] dark:shadow-none sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/35 dark:text-white/35">
              Qanday murojaat qilish
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.02em]">
              Privacy so'rovi uchun qisqa yo'l
            </h2>
            <div className="mt-7 grid gap-3">
              {requestSteps.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-black/[0.06] bg-black/[0.03] p-4 dark:border-white/[0.07] dark:bg-white/[0.04]"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#111] text-sm font-bold text-white dark:bg-white dark:text-[#111]">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-black/58 dark:text-white/52">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:px-8 md:pb-24">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-black/[0.08] bg-white/78 p-6 dark:border-white/[0.08] dark:bg-white/[0.055] sm:p-8">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-500/12 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 size={24} aria-hidden />
            </div>
            <div className="min-w-0">
              <h2 className="font-display text-2xl font-bold tracking-[-0.02em]">
                English note for reviewers
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-black/54 dark:text-white/48">
                Hamrohio does not sell personal information and does not use
                targeted advertising tracking. If a user contacts support, we
                use the submitted contact details and message only to respond to
                the request.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/[0.06] px-4 py-8 text-center text-sm text-black/45 dark:border-white/[0.06] dark:text-white/38 sm:px-6 md:px-8">
        <p>© 2026 Hamrohio. User Privacy Choices URL: hamrohio.me/privacy-choices</p>
        <p className="mt-2">
          <Link href="/support" className="underline-offset-4 hover:underline">
            Support
          </Link>{" "}
          ·{" "}
          <Link href="/privacy" className="underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
        </p>
      </footer>
    </main>
  );
}
