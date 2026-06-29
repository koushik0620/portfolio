"use client";

import AboutTimelineItem from "./AboutTimeline";

const timeline = [
  {
    year: "2023",
    title: "Started Professional Career",
    description: "Began building production-grade React applications.",
  },
  {
    year: "2024",
    title: "Frontend Engineer",
    description: "Developed scalable dashboards and enterprise applications.",
  },
  {
    year: "2025",
    title: "Senior Frontend Engineer",
    description: "Led frontend development and built products from scratch.",
  },
  {
    year: "Now",
    title: "AI & Full Stack Journey",
    description: "Learning AI, automation, and Kotlin Multiplatform.",
  },
];

export default function AboutJourney() {
  return (
    <aside
      className="
        rounded-3xl
        border
        border-border/60
        bg-background/70
        p-8
        shadow-lg
        backdrop-blur-sm
        md:p-10
        md:backdrop-blur-xl
      "
    >
      <h3 className="mb-10 text-3xl font-bold">My Journey</h3>

      {timeline.map((item, index) => (
        <AboutTimelineItem
          key={item.year}
          {...item}
          last={index === timeline.length - 1}
        />
      ))}
    </aside>
  );
}
