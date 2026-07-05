import type { Metadata } from "next";
import { HamrohMark } from "@/components/HamrohMark";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Database,
  ExternalLink,
  FileText,
  LockKeyhole,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Hamrohio",
  description:
    "Hamrohio macOS app va Hamroh qurilmasi uchun rasmiy privacy policy. Local-first data, support contact va privacy choices haqida ma'lumot.",
  alternates: {
    canonical: "https://hamrohio.me/privacy",
  },
  openGraph: {
    title: "Hamrohio Privacy Policy",
    description:
      "Hamrohio qanday ma'lumot ishlatishi, nimani saqlashi va privacy choices qanday ishlashi haqida.",
    url: "https://hamrohio.me/privacy",
    type: "website",
  },
};

const summary = [
  {
    title: "Tracking yo'q",
    text: "Hamrohio app reklamaviy tracking yoki targeted ads uchun ishlatilmaydi.",
    icon: ShieldCheck,
  },
  {
    title: "Local-first",
    text: "Vazifalar, notelar, odatlar va fokus ma'lumotlari asosan Mac ichida ishlaydi.",
    icon: Database,
  },
  {
    title: "Support ixtiyoriy",
    text: "Biz faqat siz supportga yuborgan xabar va fayllarni ko'rib chiqamiz.",
    icon: MessageCircle,
  },
];

const sections = [
  {
    title: "1. Biz qanday ma'lumotlarni qayta ishlaymiz",
    body: [
      "Hamrohio app ichida yaratilgan vazifalar, notelar, odatlar, fokus sessiyalari va app sozlamalari foydalanuvchi qurilmasida saqlanishi mumkin.",
      "Hamroh qurilmasi bilan ulanishda app lokal port va qurilma holatini ishlatadi. Bu ma'lumotlar app funksiyalarini ishlatish uchun kerak.",
      "Agar siz supportga yozsangiz, biz siz yuborgan ism, email yoki Telegram username, screenshot, diagnostika matni va murojaat mazmunini ko'rib chiqishimiz mumkin.",
    ],
  },
  {
    title: "2. Ma'lumotlar nima uchun ishlatiladi",
    body: [
      "App funksiyalarini ishlatish, Hamroh qurilmasiga buyruq yuborish, fokus va eslatmalarni ko'rsatish.",
      "Support so'rovlariga javob berish, xatoliklarni tushunish va app sifatini yaxshilash.",
      "App Store review yoki foydalanuvchi murojaatlarini hal qilish.",
    ],
  },
  {
    title: "3. Ma'lumot sotilmaydi",
    body: [
      "Hamrohio shaxsiy ma'lumotlarni sotmaydi.",
      "Hamrohio reklama tracking, data broker yoki targeted advertising uchun foydalanuvchi ma'lumotlarini ulashmaydi.",
      "Email, Telegram, Instagram va hosting kabi tashqi servislar bilan faqat siz ulardan foydalanganingizda aloqa bo'lishi mumkin.",
    ],
  },
  {
    title: "4. Saqlash va o'chirish",
    body: [
      "App ichidagi lokal ma'lumotlarni app funksiyalari orqali o'chirish yoki appni qurilmadan olib tashlash orqali boshqarishingiz mumkin.",
      "Support yozishmalari muammoni hal qilish va sifat nazorati uchun kerakli muddat saqlanishi mumkin.",
      "Support orqali yuborgan ma'lumotlaringizni o'chirishni so'rash uchun support@hamrohio.me manziliga yozing.",
    ],
  },
  {
    title: "5. Xavfsizlik",
    body: [
      "Biz foydalanuvchi ma'lumotlarini minimal ishlatish tamoyiliga amal qilamiz.",
      "Support murojaatlari faqat yordam ko'rsatish va appni yaxshilash uchun ko'rib chiqiladi.",
      "Hech bir internet xizmati mutlaq xavfsiz emas, lekin biz ortiqcha ma'lumot yig'maslikka alohida e'tibor beramiz.",
    ],
  },
  {
    title: "6. Bolalar maxfiyligi",
    body: [
      "Hamrohio umumiy produktivlik va fokus appidir. U 13 yoshdan kichik bolalardan ataylab shaxsiy ma'lumot yig'ish uchun mo'ljallanmagan.",
      "Agar noto'g'ri yuborilgan shaxsiy ma'lumot haqida bilib qolsak, uni o'chirish bo'yicha yordam beramiz.",
    ],
  },
  {
    title: "7. Bog'lanish",
    body: [
      "Privacy bo'yicha savollar uchun support@hamrohio.me manziliga yozing.",
      "Tezkor support uchun Telegram orqali ham murojaat qilishingiz mumkin: t.me/nnpgo.",
    ],
  },
];

export default function PrivacyPage() {
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
              href="/privacy-choices"
              className="flex min-h-[42px] items-center gap-2 rounded-full bg-[#111] px-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 active:translate-y-0 dark:bg-white dark:text-[#111]"
            >
              Choices
            </Link>
          </div>
        </div>
      </header>

      <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
          <div className="min-w-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/80 px-4 py-2 text-sm font-semibold text-black/55 shadow-sm backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.07] dark:text-white/60">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Privacy Policy URL
            </div>
            <h1 className="max-w-[820px] text-balance font-display text-[42px] font-bold leading-[1.02] tracking-[-0.035em] sm:text-6xl sm:leading-[0.98] md:text-7xl">
              Privacy Policy
            </h1>
            <p className="mt-6 max-w-full text-base leading-relaxed text-black/58 dark:text-white/54 sm:max-w-2xl sm:text-lg">
              Hamrohio local-first app sifatida ishlaydi. Biz reklamaviy
              tracking qilmaymiz, shaxsiy ma'lumotlarni sotmaymiz va support
              uchun faqat siz yuborgan ma'lumotlardan foydalanamiz.
            </p>
            <p className="mt-4 text-sm font-semibold text-black/42 dark:text-white/38">
              Last updated: July 5, 2026
            </p>
          </div>

          <div className="min-w-0 rounded-[32px] border border-black/[0.08] bg-white/82 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.10)] backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.06] dark:shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:p-6">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#111] text-white dark:bg-white dark:text-[#111]">
                <LockKeyhole size={26} aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35 dark:text-white/35">
                  Qisqa xulosa
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold">
                  Oddiy va ochiq
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-black/52 dark:text-white/48">
                  App Store review uchun rasmiy privacy sahifa. Quyidagi
                  qoidalar Hamrohio macOS app va Hamroh qurilmasiga tegishli.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <a
                href="mailto:support@hamrohio.me?subject=Hamrohio%20privacy"
                className="group flex min-h-[64px] items-center justify-between gap-4 rounded-2xl border border-black/[0.07] bg-black/[0.03] px-4 transition hover:border-black/[0.12] hover:bg-black/[0.05] dark:border-white/[0.07] dark:bg-white/[0.05] dark:hover:border-white/[0.14] dark:hover:bg-white/[0.08]"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-black/58 shadow-sm dark:bg-white/[0.08] dark:text-white/68">
                    <Mail size={18} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">
                      Privacy contact
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
        <div className="mx-auto grid min-w-0 max-w-6xl gap-4 md:grid-cols-3">
          {summary.map((item) => (
            <article
              key={item.title}
              className="min-w-0 rounded-[26px] border border-black/[0.08] bg-white/78 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.06)] dark:border-white/[0.08] dark:bg-white/[0.055] dark:shadow-none"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#111]/[0.06] text-[#111] dark:bg-white/[0.08] dark:text-white">
                <item.icon size={22} aria-hidden />
              </div>
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/52 dark:text-white/46">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:px-8 md:pb-24">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="min-w-0 rounded-[30px] border border-black/[0.08] bg-[#111] p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.16)] dark:border-white/[0.08] dark:bg-white/[0.06] dark:shadow-none sm:p-8">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10">
              <FileText size={26} aria-hidden />
            </div>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-[-0.02em]">
              English summary
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/64">
              Hamrohio does not sell personal information, does not use
              advertising tracking, and uses support information only when you
              contact us. App data is designed to work locally on your Mac and
              with your Hamroh device.
            </p>
            <Link
              href="/privacy-choices"
              className="mt-7 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#111] transition hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles size={18} aria-hidden />
              Privacy choices
            </Link>
          </aside>

          <div className="grid min-w-0 gap-4">
            {sections.map((section) => (
              <article
                key={section.title}
                className="min-w-0 rounded-[26px] border border-black/[0.08] bg-white/78 p-5 dark:border-white/[0.08] dark:bg-white/[0.055] sm:p-6"
              >
                <h2 className="font-display text-2xl font-bold tracking-[-0.02em]">
                  {section.title}
                </h2>
                <div className="mt-4 grid gap-3">
                  {section.body.map((item) => (
                    <p
                      key={item}
                      className="text-sm leading-relaxed text-black/56 dark:text-white/48"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-black/[0.06] px-4 py-8 text-center text-sm text-black/45 dark:border-white/[0.06] dark:text-white/38 sm:px-6 md:px-8">
        <p>© 2026 Hamrohio. Privacy Policy URL: hamrohio.me/privacy</p>
        <p className="mt-2">
          <Link href="/support" className="underline-offset-4 hover:underline">
            Support
          </Link>{" "}
          ·{" "}
          <Link
            href="/privacy-choices"
            className="underline-offset-4 hover:underline"
          >
            Privacy choices
          </Link>
        </p>
      </footer>
    </main>
  );
}
