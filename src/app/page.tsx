import HeroSection from "@/components/HeroSection/HeroSection";
import AppHeader from "@/components/AppHeader/AppHeader";

export default function Home() {
  return (
    <div className="w-[100%] flex flex-col gap-[150px] bg-joystick bg-no-repeat bg-right-top">
      <AppHeader />
      <HeroSection />
    </div>
  );
}
