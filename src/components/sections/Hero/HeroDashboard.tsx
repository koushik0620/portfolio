"use client";

import dynamic from "next/dynamic";

const HeroTerminal = dynamic(() => import("./HeroTerminal"));
const HeroTechStack = dynamic(() => import("./HeroTechStack"));
const HeroStatusCard = dynamic(() => import("./HeroStatusCard"));
const HeroExperienceCard = dynamic(() => import("./HeroExperienceCard"));

export default function HeroDashboard() {
  return (
    <div
      className="
        relative
        h-[620px]
        w-full
        max-w-[520px]
        select-none
      "
    >
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
      <div className="absolute bottom-0 right-0 z-20">
        <HeroTechStack />
      </div>
    </div>
  );
}
