"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Props {
  achievements: string[];
}

export default function ExperienceAchievements({ achievements }: Props) {
  return (
    <div className="mt-10">
      <h4 className="mb-6 text-xl font-semibold">Key Achievements</h4>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="grid gap-5 md:grid-cols-2"
      >
        {achievements.map((achievement) => (
          <div
            key={achievement}
            className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/40 p-4 transition-colors hover:bg-primary/5"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />

            <p className="leading-7 text-muted-foreground">{achievement}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
