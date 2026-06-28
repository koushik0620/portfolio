"use client";

import { motion } from "framer-motion";

import { aboutData } from "@/data/about";

export default function AboutHighlights() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-5">
      {aboutData.highlights.map((item, index) => (
        <motion.div
          key={item.subtitle}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{
            y: -6,
            scale: 1.03,
          }}
          className="
            rounded-3xl
            border
            bg-background/60
            p-6
            backdrop-blur-xl
            shadow-lg
          "
        >
          <div className="text-4xl font-black">{item.title}</div>

          <p className="mt-2 text-muted-foreground">{item.subtitle}</p>
        </motion.div>
      ))}
    </div>
  );
}
