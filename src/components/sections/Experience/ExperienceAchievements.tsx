"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ExperienceAchievementsProps {
  achievements: string[];
}

export default function ExperienceAchievements({
  achievements,
}: ExperienceAchievementsProps) {
  return (
    <div className="mt-10">
      <h4 className="mb-6 text-xl font-semibold">Key Achievements</h4>

      <div className="grid gap-5 md:grid-cols-2">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/5"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />

            <p className="leading-7 text-muted-foreground">{achievement}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
