"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-black/6 dark:bg-white/8 transition-colors duration-200 hover:bg-black/10 dark:hover:bg-white/12"
      aria-label="Mavzuni o'zgartirish"
    >
      {theme === "dark" ? (
        <Sun size={15} className="text-white/80" />
      ) : (
        <Moon size={15} className="text-black/70" />
      )}
    </button>
  );
}
