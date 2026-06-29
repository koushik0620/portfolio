"use client";

import { motion } from "framer-motion";

export default function ExperienceTech({ tech }: { tech: string[] }) {
  return (
    <div className="mt-10">
      <h4 className="mb-5 text-lg font-semibold">Technologies</h4>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap gap-3"
      >
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border/50 bg-background/40 px-4 py-2 text-sm transition-transform duration-200 hover:scale-105 hover:bg-primary/5"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
