import React from "react";
import HeroSection from "./HeroSection";
import WelcomeSection from "./WelcomeSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <HeroSection />
      <WelcomeSection />
    </div>
  );
}
