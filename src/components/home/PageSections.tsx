"use client";

import dynamic from "next/dynamic";

import LazySection from "./LazySection";
import {
  AboutSectionSkeleton,
  ContactSectionSkeleton,
  ExperienceSectionSkeleton,
  ProjectsSectionSkeleton,
  SkillsSectionSkeleton,
} from "./SectionSkeletons";

const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => <AboutSectionSkeleton />,
  ssr: false,
});

const Experience = dynamic(
  () => import("@/components/sections/Experience/Experience"),
  {
    loading: () => <ExperienceSectionSkeleton />,
    ssr: false,
  },
);

const Projects = dynamic(
  () => import("@/components/sections/Projects/Projects"),
  {
    loading: () => <ProjectsSectionSkeleton />,
    ssr: false,
  },
);

const Skills = dynamic(() => import("@/components/sections/Skills/Skills"), {
  loading: () => <SkillsSectionSkeleton />,
  ssr: false,
});

const Contact = dynamic(() => import("@/components/sections/Contact/Contact"), {
  loading: () => <ContactSectionSkeleton />,
  ssr: false,
});

export default function PageSections() {
  return (
    <>
      <LazySection skeleton={<AboutSectionSkeleton />}>
        <About />
      </LazySection>

      <LazySection skeleton={<ExperienceSectionSkeleton />}>
        <Experience />
      </LazySection>

      <LazySection skeleton={<ProjectsSectionSkeleton />}>
        <Projects />
      </LazySection>

      <LazySection skeleton={<SkillsSectionSkeleton />}>
        <Skills />
      </LazySection>

      <LazySection skeleton={<ContactSectionSkeleton />}>
        <Contact />
      </LazySection>
    </>
  );
}
