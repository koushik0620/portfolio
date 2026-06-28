"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

import ExperienceHeader from "./ExperienceHeader";
import ExperienceList from "./ExperienceList";

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        <ExperienceHeader />
        <ExperienceList />
      </Container>
    </Section>
  );
}
