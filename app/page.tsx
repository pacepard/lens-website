import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import HeroSection from "@/components/sections/hero-section";
import UIShwocase from "@/components/sections/ui-showcase";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <UIShwocase/>
      <Footer />
    </>
  );
}
