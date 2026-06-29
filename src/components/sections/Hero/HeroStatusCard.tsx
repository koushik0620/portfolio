"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function HeroStatusCard() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={
        prefersReducedMotion
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 1,
              y: [0, 8, 0],
            }
      }
      transition={
        prefersReducedMotion
          ? {
              duration: 0.4,
            }
          : {
              opacity: {
                duration: 0.4,
              },
              y: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
      }
      className="
        rounded-2xl
        border
        border-border/60
        bg-background/80
        p-5
        shadow-xl
        backdrop-blur-sm
        md:backdrop-blur-xl
        will-change-transform
      "
    >
      <div className="flex items-center gap-3">
        {/* Status Dot */}
        <div className="relative flex h-3 w-3 items-center justify-center">
          <span className="absolute inline-flex h-3 w-3 rounded-full bg-green-500 opacity-75 animate-ping" />

          <span className="relative h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div>
          <p className="font-semibold">Available for Work</p>

          <p className="text-sm text-muted-foreground">
            Open to Full-Time & Freelance
          </p>
        </div>
      </div>
    </motion.div>
  );
}
