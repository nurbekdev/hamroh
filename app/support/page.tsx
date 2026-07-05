import type { Metadata } from "next";
import { HamrohMark } from "@/components/HamrohMark";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  ExternalLink,
  LifeBuoy,
  Mail,
  MessageCircle,
  MonitorCheck,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Support — Hamrohio",
  description:
    "Hamrohio macOS app va Hamroh qurilmasi bo'yicha yordam, ulanish, fokus, notes va yangilanish savollari uchun rasmiy support sahifa.",
  alternates: {
    canonical: "https://hamrohio.me/support",
  },
  openGraph: {
    title: "Hamrohio Support",
    description:
      "Hamrohio bo'yicha yordam: app, qurilma ulanishi, fokus, notes va yangilanish.",
    url: "https://hamrohio.me/support",
    type: "website",
  },
};

const contactLinks = [
  {
    label: "Telegram support",
    value: "t.me/nnpgo",
    href: "https://t.me/nnpgo",
    icon: MessageCircle,
  },
  {
    label: "Email",
    value: "support@hamrohio.me",
    href: "mailto:support@hamrohio.me?subject=Hamrohio%20support",
    icon: Mail,
  },
  {
    label: "Instagram",
    value: "@hamrohio.uz",
    href: "https://instagram.com/hamrohio.uz",
    icon: ExternalLink,
  },
];

const helpTopics = [
  {
    title: "App bilan boshlash",
    text: "Hamroh macOS app ichida vazifa, odat, notes va fokus bo'limlarini sozlash.",
    icon: MonitorCheck,
  },
  {
    title: "Ulanish va holat",
    text: "Qurilma ko'rinmasa, port tanlanmasa yoki status o'zgarmasa nima qilish kerak.",
    icon: RefreshCw,
  },
  {
    title: "Fokus va eslatmalar",
    text: "Taymer, kun rejasi, odatlar va displaydagi sokin signal holatlarini tekshirish.",
    icon: Clock3,
  },
  {
    title: "Ma'lumot va maxfiylik",
    text: "Support uchun faqat foydalanuvchi yuborgan ma'lumotlar ko'rib chiqiladi.",
    icon: ShieldCheck,
  },
];

const checklist = [
  "Appni qayta oching va Hamroh statusi yangilanganini tekshiring.",
  "Qurilma kabeli va portini qayta ulang.",
  "Sozlamalar bo'limida yangilash yoki ping amalini sinab ko'ring.",
  "Muammo qolsa, screenshot va qisqa izoh bilan supportga yozing.",
];

const faqs = [
  {
    question: "Hamroh ulanmay qolsa nima qilaman?",
    answer:
      "Avval kabel va portni qayta ulang, keyin app ichida yangilash tugmasini bosing. Agar status o'zgarmasa, supportga screenshot yuboring.",
  },
  {
    question: "Notes yoki display xabari chiqmasa-chi?",
    answer:
      "Appdagi Notes sahifasida qurilma tayyor holatda ekanini tekshiring. Ba'zi holatlarda firmware yangilanishi kerak bo'lishi mumkin.",
  },
  {
    question: "App Store orqali yordam olish mumkinmi?",
    answer:
      "Ha. Ushbu sahifa Hamrohio uchun rasmiy Support URL. Telegram yoki email orqali murojaat qiling.",
  },
];

export default function SupportPage() {
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
            <a
              href="https://t.me/nnpgo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111] text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 active:translate-y-0 dark:bg-white dark:text-[#111] sm:h-auto sm:w-auto sm:min-h-[42px] sm:gap-2 sm:px-4"
              aria-label="Telegram orqali supportga yozish"
            >
              <MessageCircle size={16} aria-hidden />
              <span className="hidden sm:inline">Yordam</span>
            </a>
          </div>
        </div>
      </header>

      <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="min-w-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/80 px-4 py-2 text-sm font-semibold text-black/55 shadow-sm backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.07] dark:text-white/60">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Rasmiy Support URL
            </div>
            <h1 className="max-w-[760px] text-balance font-display text-[42px] font-bold leading-[1.02] tracking-[-0.035em] sm:text-6xl sm:leading-[0.98] md:text-7xl">
              Hamrohio bo'yicha
              <br />
              sokin yordam.
            </h1>
            <p className="mt-6 max-w-full text-base leading-relaxed text-black/58 dark:text-white/54 sm:max-w-2xl sm:text-lg">
              App Store, macOS app, Hamroh qurilmasi, notes, fokus va odatlar
              bo'yicha savollaringizni shu sahifa orqali yuboring. Javob odatda
              24 soat ichida beriladi.
            </p>
          </div>

          <div className="min-w-0 rounded-[32px] border border-black/[0.08] bg-white/82 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.10)] backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.06] dark:shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:p-6">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#111] text-white dark:bg-white dark:text-[#111]">
                <LifeBuoy size={26} aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35 dark:text-white/35">
                  Support holati
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold">
                  Support ochiq
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-black/52 dark:text-white/48">
                  Muammo, fikr yoki App Store review bo'yicha savollar uchun
                  to'g'ridan-to'g'ri murojaat qiling.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex min-h-[64px] items-center justify-between gap-4 rounded-2xl border border-black/[0.07] bg-black/[0.03] px-4 transition hover:border-black/[0.12] hover:bg-black/[0.05] dark:border-white/[0.07] dark:bg-white/[0.05] dark:hover:border-white/[0.14] dark:hover:bg-white/[0.08]"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-black/58 shadow-sm dark:bg-white/[0.08] dark:text-white/68">
                      <item.icon size={18} aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold">
                        {item.label}
                      </span>
                      <span className="block truncate text-sm text-black/48 dark:text-white/44">
                        {item.value}
                      </span>
                    </span>
                  </span>
                  <ExternalLink
                    size={16}
                    className="shrink-0 text-black/28 transition group-hover:text-black/55 dark:text-white/28 dark:group-hover:text-white/60"
                    aria-hidden
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 md:px-8">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {helpTopics.map((topic) => (
            <article
              key={topic.title}
              className="min-w-0 rounded-[26px] border border-black/[0.08] bg-white/78 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.06)] dark:border-white/[0.08] dark:bg-white/[0.055] dark:shadow-none"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#111]/[0.06] text-[#111] dark:bg-white/[0.08] dark:text-white">
                <topic.icon size={22} aria-hidden />
              </div>
              <h3 className="font-display text-xl font-bold">
                {topic.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black/52 dark:text-white/46">
                {topic.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 md:px-8 md:pb-20">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="min-w-0 rounded-[30px] border border-black/[0.08] bg-[#111] p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.16)] dark:border-white/[0.08] dark:bg-white/[0.06] dark:shadow-none sm:p-8">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10">
              <Sparkles size={26} aria-hidden />
            </div>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-[-0.02em]">
              Tez yordam uchun
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/62">
              Murojaatda app versiyasi, macOS versiyasi, qurilma holati va
              qisqa screenshot bo'lsa, muammoni tezroq aniqlash mumkin.
            </p>
            <a
              href="mailto:support@hamrohio.me?subject=Hamrohio%20support&body=Salom%2C%20Hamrohio%20bo'yicha%20yordam%20kerak.%0A%0AMuammo%3A%0AmacOS%20versiya%3A%0AApp%20versiya%3A%0AQurilma%20holati%3A"
              className="mt-7 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#111] transition hover:-translate-y-0.5 active:translate-y-0"
            >
              <Mail size={18} aria-hidden />
              Supportga yozish
            </a>
          </div>

          <div className="min-w-0 rounded-[30px] border border-black/[0.08] bg-white/78 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.08)] dark:border-white/[0.08] dark:bg-white/[0.055] dark:shadow-none sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/35 dark:text-white/35">
              Avval tekshirib ko'ring
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.02em]">
              Eng ko'p muammolar uchun qisqa yo'l
            </h2>
            <div className="mt-7 grid gap-3">
              {checklist.map((item, index) => (
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
        <div className="mx-auto min-w-0 max-w-6xl">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/35 dark:text-white/35">
                FAQ
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.02em]">
                Tez-tez so'raladigan savollar
              </h2>
            </div>
            <CheckCircle2
              size={28}
              className="hidden text-emerald-500 sm:block"
              aria-hidden
            />
          </div>

          <div className="grid gap-3">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="min-w-0 rounded-[24px] border border-black/[0.08] bg-white/78 p-5 dark:border-white/[0.08] dark:bg-white/[0.055] sm:p-6"
              >
                <h3 className="font-display text-xl font-bold">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/54 dark:text-white/48">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-black/[0.06] px-4 py-8 text-center text-sm text-black/45 dark:border-white/[0.06] dark:text-white/38 sm:px-6 md:px-8">
        <p>© 2026 Hamrohio. Support URL: hamrohio.me/support</p>
      </footer>
    </main>
  );
}
