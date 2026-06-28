"use client";

import { motion } from "framer-motion";

import { projects } from "@/data/projects";
import { staggerContainer } from "@/lib/animations";
import ProjectCard from "./ProjectCard";


export default function ProjectsGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
}
