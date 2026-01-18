import BentoGrid from "./Component/BentoGrid";
import HeroSection from "./Component/HeroSection";
import { Navbar } from "./Component/Navbar";
import TextafterBento from "./Component/TextafterBento";
import Pricing from "./Component/Pricing";
import FAQ from "./Component/FAQ";
import Footer from "./Component/Footer";

export default function Home() {
  return (
    <>
      <div className="py-4 px-6 md:px-20">
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
