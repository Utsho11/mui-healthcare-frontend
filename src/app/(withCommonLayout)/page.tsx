import HeroSection from "@/components/UI/Homepage/HeroSection/HeroSection";
import HowItWorks from "@/components/UI/Homepage/HowItWorks/HowItWorks";
import Specialist from "@/components/UI/Homepage/Specialist/Specialist";
import Stats from "@/components/UI/Homepage/Stats/Stats";
import TopRatedDoctor from "@/components/UI/Homepage/TopRatedDoctor/TopRatedDoctor";
import WhyUs from "@/components/UI/Homepage/WhyUs/WhyUs";
import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <Specialist />
      <TopRatedDoctor />
      <WhyUs />
      <HowItWorks />
      <Stats />
    </Box>
  );
}
