"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Mouse } from "lucide-react";

export default function HeroScrollIndicator() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="
        absolute
        bottom-8
        left-1/2
        hidden
        -translate-x-1/2
        flex-col
        items-center
        gap-2
        text-muted-foreground
        lg:flex
      "
    >
      <Mouse className="h-6 w-6" />

      <motion.div
        animate={
          reducedMotion
            ? {}
            : {
                y: [0, 6, 0],
              }
        }
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </motion.div>
  );
}
