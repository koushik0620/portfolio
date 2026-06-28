"use client";

import { motion } from "framer-motion";

import { skillCategories } from "@/data/skills";
import { staggerContainer } from "@/lib/animations";
import SkillCard from "./SkillCard";

export default function SkillsGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
    >
      {skillCategories.map((category) => (
        <SkillCard key={category.title} category={category} />
      ))}
    </motion.div>
  );
}
