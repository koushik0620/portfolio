"use client";

import { motion } from "framer-motion";

interface Props {
  skill: string;
}

export default function SkillChip({ skill }: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        rounded-full
        border
        border-border
        bg-muted/40
        px-4
        py-2
        text-sm
        font-medium
        transition-all
        duration-300
        hover:border-primary/40
        hover:bg-primary/10
      "
    >
      {skill}
    </motion.div>
  );
}
