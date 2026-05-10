import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { RealUseGallery } from "@/components/RealUseGallery";
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
        <Features />
        <RealUseGallery />
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
