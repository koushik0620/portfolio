"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/common/SectionHeading";
import { fadeUp } from "@/lib/animations";

export default function ExperienceHeader() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mx-auto mb-24 max-w-3xl text-center"
    >
      <SectionHeading
        eyebrow="Experience"
        title="Professional Journey"
        subtitle="Over the past 4+ years I've built scalable web applications, enterprise dashboards, AI-powered products and reusable frontend architectures."
      />
    </motion.div>
  );
}