"use client";

import { motion } from "framer-motion";
import { ChevronDown, Mouse } from "lucide-react";

export default function HeroScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 1.2,
      }}
      className="
        absolute
        bottom-10
        left-1/2
        flex
        -translate-x-1/2
        flex-col
        items-center
        gap-2
        text-muted-foreground
      "
    >
      <Mouse className="h-6 w-6" />

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
        }}
      >
        <ChevronDown />
      </motion.div>
    </motion.div>
  );
}
