import HeroSection from "@/components/UI/Homepage/HeroSection/HeroSection";
import Specialist from "@/components/UI/Homepage/Specialist/Specialist";
import TopRatedDoctor from "@/components/UI/Homepage/TopRatedDoctor/TopRatedDoctor";

export default function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <Specialist />
      <TopRatedDoctor />
    </div>
  );
}
