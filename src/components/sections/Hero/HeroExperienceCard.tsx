"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function HeroExperienceCard() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="rounded-2xl border bg-background/70 p-5 backdrop-blur-xl shadow-2xl"
    >
      <div className="flex items-center gap-3">
        <Briefcase className="text-primary" />

        <div>
          <p className="font-semibold">Experience</p>

          <p className="text-sm text-muted-foreground">4+ Years</p>
        </div>
      </div>
    </motion.div>
  );
}
