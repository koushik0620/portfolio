"use client";

import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => <div className="h-[600px]" />,
  ssr: false,
});

const Experience = dynamic(
  () => import("@/components/sections/Experience/Experience"),
  {
    loading: () => <div className="h-[800px]" />,
    ssr: false,
  },
);

const Projects = dynamic(
  () => import("@/components/sections/Projects/Projects"),
  {
    loading: () => <div className="h-[800px]" />,
    ssr: false,
  },
);

const Skills = dynamic(() => import("@/components/sections/Skills/Skills"), {
  loading: () => <div className="h-[600px]" />,
  ssr: false,
});

const Contact = dynamic(() => import("@/components/sections/Contact/Contact"), {
  loading: () => <div className="h-[600px]" />,
  ssr: false,
});

export default function PageSections() {
  return (
    <>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
