"use client";

import { motion } from "framer-motion";

export default function ExperienceTech({ tech }: { tech: string[] }) {
  return (
    <div className="mt-10">
      <h4 className="mb-5 text-lg font-semibold">Technologies</h4>

      <div className="flex flex-wrap gap-3">
        {tech.map((item, index) => (
          <motion.div
            key={item}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.05,
            }}
            whileHover={{
              scale: 1.08,
            }}
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-sm
              transition-all
              hover:border-indigo-400/50
              hover:bg-indigo-500/10
            "
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
