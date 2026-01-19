import BentoGrid from "./Component/BentoGrid";
import HeroSection from "./Component/HeroSection";
import { Navbar } from "./Component/Navbar";
import Pricing from "./Component/Pricing";
import FAQ from "./Component/FAQ";
import Footer from "./Component/Footer";

export default function Home() {
  return (
    <>
      <div className="py-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto">
        <Navbar />
        <HeroSection/>
        <BentoGrid/>
        <Pricing />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
