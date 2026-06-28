"use client";

import { experience } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceList() {
  return (
    <div className="space-y-12">
      {experience.map((job, index) => (
        <ExperienceCard key={job.company} experience={job} index={index} />
      ))}
    </div>
  );
}
