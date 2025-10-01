import HeroSection from "@/components/UI/Homepage/HeroSection/HeroSection";
import Specialist from "@/components/UI/Homepage/Specialist/Specialist";
import TopRatedDoctor from "@/components/UI/Homepage/TopRatedDoctor/TopRatedDoctor";
import WhyUs from "@/components/UI/Homepage/WhyUs/WhyUs";

export default function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <Specialist />
      <TopRatedDoctor />
      <WhyUs />
    </div>
  );
}
