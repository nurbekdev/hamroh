"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

const links = [
  { href: "#xususiyatlar", label: "Xususiyatlar" },
  { href: "#real-use", label: "Live" },
  { href: "#narx", label: "Narx" },
  { href: "#faq", label: "FAQ" },
  { href: "#roadmap", label: "Roadmap" },
];

const legalLinks = [
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
  { href: "/privacy-choices", label: "Privacy Choices" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-[#F8F7F4] pb-safe transition-colors duration-300 dark:border-white/[0.06] dark:bg-[#0E0E0E]">
      <div className="mx-auto max-w-6xl px-4 pb-6 pt-10 sm:px-6 sm:pb-8 sm:pt-14 md:px-8 md:pb-10 md:pt-20">
        {/* Top: logo + brand — full width on mobile, centered */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:items-start md:justify-between">
          <Link
            href="/"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-3 font-display text-lg font-semibold text-[#111] dark:text-[#F2F0EC] sm:text-xl md:justify-start"
            aria-label="Hamrohio bosh sahifa"
          >
            <Image
              src="/gifs/logo.jpg"
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 shrink-0 rounded-full object-cover"
            />
            <span>hamrohio</span>
          </Link>

          {/* Nav: mobile — 2 columns grid, touch-friendly; desktop — horizontal */}
          <nav className="w-full sm:w-auto" aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-0 sm:flex sm:flex-wrap sm:justify-end sm:gap-x-6 sm:gap-y-0 md:gap-x-8">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-[44px] items-center justify-center rounded-lg py-3 text-sm text-[#111] transition hover:bg-black/5 hover:text-[#444] active:bg-black/10 dark:text-[#F2F0EC] dark:hover:bg-white/10 dark:hover:text-[#ccc] dark:active:bg-white/15 sm:min-h-0 sm:justify-start sm:rounded-none sm:py-2 sm:hover:bg-transparent dark:sm:hover:bg-transparent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="col-span-2 sm:col-span-1">
                <a
                  href="https://instagram.com/hamrohio.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg py-3 text-sm text-[#111] transition hover:bg-black/5 hover:text-[#444] active:bg-black/10 dark:text-[#F2F0EC] dark:hover:bg-white/10 dark:hover:text-[#ccc] dark:active:bg-white/15 sm:min-h-0 sm:justify-start sm:rounded-none sm:py-2 sm:hover:bg-transparent dark:sm:hover:bg-transparent"
                  aria-label="Instagram @hamrohio.uz"
                >
                  <Instagram size={18} aria-hidden />
                  <span>@hamrohio.uz</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Divider on mobile for clarity */}
        <div className="my-6 border-t border-black/[0.06] dark:border-white/[0.06] sm:my-8 md:my-10" />

        {/* Bottom text — centered, readable on small screens */}
        <p className="text-center text-sm leading-relaxed text-[#888] dark:text-[#666] sm:mt-0">
          🇺🇿 O&apos;zbekistonda ishlab chiqarilgan bilan ❤️
        </p>
        <p className="mt-2 text-center text-xs text-[#888] dark:text-[#666] sm:mt-3">
          © 2026 Hamrohio. Barcha huquqlar himoyalangan.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#888] dark:text-[#666]">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="min-h-[32px] rounded-full px-2 py-2 underline-offset-4 transition hover:text-[#444] hover:underline dark:hover:text-[#ccc]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
