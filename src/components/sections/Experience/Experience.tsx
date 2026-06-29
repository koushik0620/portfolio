"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import ExperienceHeader from "./ExperienceHeader";
import ExperienceList from "./ExperienceList";

export default function Experience() {
  return (
    <Section
      id="experience"
      className="relative overflow-hidden py-28 lg:py-36"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute left-0 top-40 h-80 w-80 rounded-full bg-primary/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[180px]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="
          absolute
          inset-0
          -z-10
          opacity-[0.04]
          [background-image:linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      <Container>
        <ExperienceHeader />
        <ExperienceList />
      </Container>
    </Section>
  );
}
