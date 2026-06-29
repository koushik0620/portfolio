"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function HeroExperienceCard() {
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
              y: [0, -8, 0],
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
                duration: 9,
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
        <div className="rounded-lg bg-primary/10 p-2">
          <Briefcase className="h-5 w-5 text-primary" />
        </div>

        <div>
          <p className="font-semibold">Experience</p>

          <p className="text-sm text-muted-foreground">4+ Years</p>
        </div>
      </div>
    </motion.div>
  );
}
