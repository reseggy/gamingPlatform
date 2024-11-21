import HeroSection from "@/components/HeroSection/HeroSection";
import AppHeader from "@/components/AppHeader/AppHeader";
import TrandingGames from "@components/TrandingGames/TrandingGames";
import MainGame from "@/components/MainGame/MainGame";
import { trandingGames } from "@/mock";

export default function Home() {
  return (
    <div className="w-[100%] flex flex-col gap-[150px] bg-joystick bg-no-repeat bg-right-top">
      <AppHeader />
      <HeroSection />
      <TrandingGames items={trandingGames} />
      <MainGame />
    </div>
  );
}
