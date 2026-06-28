"use client";

import { motion } from "framer-motion";

export default function HeroStatusCard() {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="rounded-2xl border bg-background/70 p-5 backdrop-blur-xl shadow-xl"
    >
      <div className="flex items-center gap-3">
        <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

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
