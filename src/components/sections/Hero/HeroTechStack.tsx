"use client";

import { Code2 } from "lucide-react";

const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "OpenAI",
];

export default function HeroTechStack() {
  return (
    <div className="rounded-3xl border bg-background/70 p-6 backdrop-blur-xl shadow-xl">
      <div className="mb-5 flex items-center gap-2">
        <Code2 className="text-primary" />

        <h3 className="font-semibold">Tech Stack</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
