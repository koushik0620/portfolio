"use client";

import HeroTerminal from "./HeroTerminal";
import HeroTechStack from "./HeroTechStack";
import HeroStatusCard from "./HeroStatusCard";
import HeroExperienceCard from "./HeroExperienceCard";

export default function HeroDashboard() {
  return (
    <div className="relative h-[620px] w-full max-w-[520px]">
      {/* Status */}
      <div className="absolute left-0 top-0 z-30">
        <HeroStatusCard />
      </div>

      {/* Experience */}
      <div className="absolute right-0 top-0 z-30">
        <HeroExperienceCard />
      </div>

      {/* Terminal */}
      <div className="absolute left-6 top-28 z-20">
        <HeroTerminal />
      </div>

      {/* Tech Stack */}
      <div className="absolute right-0 bottom-0 z-20">
        <HeroTechStack />
      </div>
    </div>
  );
}
