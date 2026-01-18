import HeroSection from "./Component/HeroSection";
import { Navbar } from "./Component/Navbar";

export default function Home() {
  return (
    <div className="py-4 px-4 md:px-20">
      <Navbar />
      <HeroSection/>
    </div>
  );
}
