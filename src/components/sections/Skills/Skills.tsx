"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SkillsGrid from "./SkillsGrid";
import SkillsHeader from "./SkillsHeader";

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SkillsHeader />

        <div className="mt-20">
          <SkillsGrid />
        </div>
      </Container>
    </Section>
  );
}
