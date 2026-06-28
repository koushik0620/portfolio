"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/common/SectionHeading";
import { fadeUp } from "@/lib/animations";

export default function SkillsHeader() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mx-auto max-w-3xl text-center"
    >
      <SectionHeading
        eyebrow="Tech Stack"
        title="Technologies I Work With"
        subtitle="A collection of technologies, frameworks, and tools I use to build modern web applications, AI solutions, and mobile experiences."
      />
    </motion.div>
  );
}
