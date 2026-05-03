import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hamrohio — O'zbekistonning birinchi desk roboti",
  description:
    "Monitor burchagingizda yashab, vazifalaringizni ko'radigan, siz bilan birga his qiladigan aqlli hamroh robot. O'zbekistonda ishlab chiqarilgan.",
  icons: {
    icon: "/gifs/logo.jpg",
    apple: "/gifs/logo.jpg",
  },
  openGraph: {
    title: "Hamrohio — O'zbekistonning birinchi desk roboti",
    description:
      "Monitor burchagingizda yashab, vazifalaringizni ko'radigan robot. Pre-order ochiq.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F7F4" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0E0E" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      suppressHydrationWarning
      className={`${lora.variable} ${dmSans.variable}`}
    >
      <head>
        <link
          rel="preload"
          href="/gifs/hero-relax-hamrohio.gif"
          as="image"
        />
      </head>
      <body className="min-w-0 font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
