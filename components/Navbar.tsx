"use client";

import { useTheme } from "next-themes";
import { Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Xususiyatlar", href: "#xususiyatlar" },
  { label: "Narx", href: "#narx" },
  { label: "FAQ", href: "#faq" },
  { label: "Roadmap", href: "#roadmap" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 pt-safe">
      <div className="flex items-center justify-between gap-2 px-3 py-3 sm:px-4 sm:py-4 md:px-6">
        <div className="hidden w-24 flex-shrink-0 md:block lg:w-32" />

        {/* Pill navbar — desktop: full, mobile: logo + hamburger */}
        <div className="flex min-w-0 flex-1 items-center justify-center md:justify-center">
          <div className="flex min-w-0 items-center gap-1.5 rounded-full border border-black/[0.08] bg-white/90 px-2 py-2 shadow-[0_2px_20px_rgba(0,0,0,0.06)] backdrop-blur-md dark:border-white/[0.08] dark:bg-[#1A1A1A]/90 sm:px-2.5">
            <Link
              href="/"
              className="flex min-h-[44px] min-w-0 flex-1 items-center gap-2 rounded-full px-2 py-1.5 sm:min-h-0 sm:flex-initial sm:gap-2.5 sm:px-3 sm:py-2"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/gifs/logo.jpg"
                alt="Hamrohio"
                width={32}
                height={32}
                className="h-7 w-7 shrink-0 rounded-full object-cover sm:h-8 sm:w-8"
              />
              <span className="truncate text-sm font-semibold sm:max-w-[120px]">
                hamrohio
              </span>
            </Link>
            <div className="mx-0.5 hidden h-4 w-px shrink-0 bg-black/10 sm:mx-1 sm:block dark:bg-white/10" />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hidden rounded-full px-2.5 py-1.5 text-sm text-black/50 transition-all duration-200 hover:bg-black/5 hover:text-black dark:text-white/50 dark:hover:bg-white/5 dark:hover:text-white sm:block md:px-4"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="-mr-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-black/5 active:bg-black/10 dark:hover:bg-white/5 dark:active:bg-white/10 sm:hidden"
              aria-label={open ? "Menuni yopish" : "Menuni ochish"}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div className="flex w-10 shrink-0 justify-end sm:w-24 md:w-32">
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-10 w-10 items-center justify-center rounded-full text-black/40 transition-colors hover:bg-black/5 active:bg-black/10 dark:text-white/40 dark:hover:bg-white/5 dark:active:bg-white/10"
              aria-label="Mavzuni o'zgartirish"
            >
              <Moon size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu — full-width dropdown with backdrop */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm sm:hidden"
              aria-hidden
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fixed left-3 right-3 top-[calc(64px+env(safe-area-inset-top,0px))] z-50 overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-xl dark:border-white/[0.08] dark:bg-[#1A1A1A] sm:hidden"
            >
              <ul className="py-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex min-h-[48px] items-center px-5 py-3 text-[15px] font-medium text-[#111] transition-colors active:bg-black/5 dark:text-[#F2F0EC] dark:active:bg-white/5"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
