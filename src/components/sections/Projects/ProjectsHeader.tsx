"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/common/SectionHeading";
import { fadeUp } from "@/lib/animations";

export default function ProjectsHeader() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mx-auto mb-20 max-w-3xl text-center"
    >
      <SectionHeading
        title="Featured Projects"
        subtitle="A collection of products I'm building to solve real-world problems using modern web technologies, AI, and scalable architectures."
      />
    </motion.div>
  );
}
