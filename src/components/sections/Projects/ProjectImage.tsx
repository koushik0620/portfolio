"use client";

import Image from "next/image";

import { Project } from "@/types/projects";

interface Props {
  project: Project;
}

export default function ProjectImage({ project }: Props) {
  return (
    <div className="relative aspect-video overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        priority
        className="
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Coming Soon Overlay */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            rounded-full
            border
            border-white/20
            bg-black/50
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            backdrop-blur-md
          "
        >
          View Details →
        </div>
      </div>
    </div>
  );
}
