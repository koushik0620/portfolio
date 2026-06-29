"use client";

import { Code2 } from "lucide-react";

const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "OpenAI",
];

export default function HeroTechStack() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-border/60
        bg-background/80
        p-6
        shadow-xl

        backdrop-blur-sm
        md:backdrop-blur-xl
      "
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-2">
          <Code2 className="h-5 w-5 text-primary" />
        </div>

        <h3 className="text-lg font-semibold">Tech Stack</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {tech.map((item) => (
          <span
            key={item}
            className="
              rounded-full
              border
              px-4
              py-2
              text-sm
              font-medium

              transition-colors
              duration-200

              hover:bg-primary
              hover:text-primary-foreground
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
