import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Reactions } from "@/components/Reactions";
import { Features } from "@/components/Features";
import { Specs } from "@/components/Specs";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Roadmap } from "@/components/Roadmap";
import { FounderNote } from "@/components/FounderNote";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-w-0 overflow-x-hidden">
        <HeroSection />
        <HowItWorks />
        <Reactions />
        <Features />
        <Specs />
        <Pricing />
        <FAQ />
        <Roadmap />
        <FounderNote />
        <Footer />
      </main>
    </>
  );
}
