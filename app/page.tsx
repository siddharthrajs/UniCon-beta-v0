"use client"

import Hero from "@/components/Hero";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Home, Feather} from 'lucide-react'
import FeaturesSectionDemo from "@/components/ui/features-section-demo-2";
import HowItWorks from "@/components/ui/how-it-works";
import CTASection from "@/components/ui/cta-section";
import Footer from "@/components/ui/footer";

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "Features", url: "/", icon: Feather}
];


export default function LandingPage() {
  return (
    <div className="flex flex-col justify-center">
      <NavBar items={navItems} className="rounded-2xl" />
      <WavyBackground className="max-w-4xl w-[100vw] mx-auto pb-40">
        <Hero />
      </WavyBackground>
      <div className="mt-72">
        <FeaturesSectionDemo />
      </div>
      <HowItWorks />
      <CTASection />
      <Footer />
    </div>
  );
}

