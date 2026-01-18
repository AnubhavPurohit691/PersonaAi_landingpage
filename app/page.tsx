import BentoGrid from "./Component/BentoGrid";
import HeroSection from "./Component/HeroSection";
import { Navbar } from "./Component/Navbar";
import TextafterBento from "./Component/TextafterBento";

export default function Home() {
  return (
    <div className="py-4 px-6 md:px-20">
      <Navbar />
      <HeroSection/>
      <BentoGrid/>
      <TextafterBento/> 
    </div>
  );
}
