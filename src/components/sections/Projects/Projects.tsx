"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsGrid from "./ProjectsGrid";



export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <ProjectsHeader />

        <ProjectsGrid />
      </Container>
    </Section>
  );
}