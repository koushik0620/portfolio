"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { fadeUp } from "@/lib/animations";
import { Project } from "@/types/projects";
import ProjectActions from "./ProjectActions";
import ProjectImage from "./ProjectImage";
import ProjectStatus from "./ProjectStatus";
import ProjectTech from "./ProjectTech";


interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
      group
      overflow-hidden
      rounded-3xl
      border
      bg-background/60
      backdrop-blur-xl
      shadow-lg
      transition-all
      duration-500
      hover:border-primary/30
      hover:shadow-2xl
    "
    >
      <ProjectImage project={project} />

      <div className="space-y-6 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold transition-colors group-hover:text-primary">
              {project.title}
            </h3>

            <div className="mt-2 flex items-center gap-2">
              <Badge variant="secondary">{project.category}</Badge>

              <Badge variant="outline">{project.year}</Badge>
            </div>
          </div>

          <ProjectStatus status={project.status} />
        </div>

        <p className="leading-7 text-muted-foreground">{project.description}</p>

        <ProjectTech technologies={project.technologies} />

        <ProjectActions project={project} />
      </div>
    </motion.article>
  );
}
