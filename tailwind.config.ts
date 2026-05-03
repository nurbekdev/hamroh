import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#F8F7F4",
        "bg-dark": "#111111",
        "text-primary": "#111111",
        "text-muted": "#888888",
        "text-white": "#F5F5F5",
        accent: "#111111",
      },
      fontFamily: {
        display: ["var(--font-lora)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 32px 80px rgba(0,0,0,0.12)",
        card: "0 4px 20px rgba(0,0,0,0.06)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
