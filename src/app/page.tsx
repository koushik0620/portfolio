import dynamic from "next/dynamic";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";

const About = dynamic(() => import("@/components/sections/About"));
const Experience = dynamic(
  () => import("@/components/sections/Experience/Experience"),
);
const Projects = dynamic(
  () => import("@/components/sections/Projects/Projects"),
);
const Skills = dynamic(() => import("@/components/sections/Skills/Skills"));
const Contact = dynamic(() => import("@/components/sections/Contact/Contact"));

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-x-hidden">
        <Hero />

        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
