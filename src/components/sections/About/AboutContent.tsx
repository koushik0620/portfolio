"use client";

import { motion } from "framer-motion";

import { aboutData } from "@/data/about";
import { fadeUp, staggerContainer } from "@/lib/animations";

import AboutHighlights from "./AboutHighlights";

export default function AboutContent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-2xl"
    >
      <motion.h2
        variants={fadeUp}
        className="mt-6 text-5xl font-black leading-tight tracking-tight"
      >
        {aboutData.heading}
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mt-8 text-lg leading-8 text-muted-foreground"
      >
        {aboutData.description}
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="mt-6 text-lg leading-8 text-muted-foreground"
      >
        {aboutData.description2}
      </motion.p>

      <motion.div variants={fadeUp}>
        <AboutHighlights />
      </motion.div>
    </motion.div>
  );
}
