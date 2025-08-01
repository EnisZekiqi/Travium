import Features from "./Components/Features";
import HeroSection from "./Components/HeroSection";
import JoinUs from "./Components/JoinUs";
import Trending from "./Components/Trending";

export default function Home() {
  return (
    <div className=" relative flex flex-col items-center min-h-screen p-4  gap-10 sm:p-20">
      <HeroSection />
      <div className="empty h-[0px]"></div>
      <Features />
       <div className="empty h-[150px]"></div>
      <Trending />
             <div className="empty h-[150px]"></div>

      <JoinUs/>
    </div>
  );
}