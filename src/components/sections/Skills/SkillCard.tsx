"use client";

import { motion } from "framer-motion";

import { fadeUp } from "@/lib/animations";
import SkillChip from "./SkillChip";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  color: string;
  skills: string[];
}

interface Props {
  category: SkillCategory;
}

export default function SkillCard({ category }: Props) {
  const Icon = category.icon;

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-border/60
        bg-background/60
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-primary/40
        hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)]
      "
    >
      {/* Gradient Glow */}
      <div
        className={`
          absolute inset-0 opacity-0 transition-opacity duration-500
          group-hover:opacity-100
          bg-gradient-to-br ${category.color} opacity-5
        `}
      />

      <div className="relative">
        <div className="flex items-center gap-4">
          <div
            className={`
              flex h-14 w-14 items-center justify-center rounded-2xl
              bg-gradient-to-br ${category.color} text-white shadow-lg
            `}
          >
            <Icon size={28} />
          </div>

          <div>
            <h3 className="text-2xl font-bold">{category.title}</h3>

            <p className="text-sm text-muted-foreground">
              {category.skills.length} Technologies
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <SkillChip key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
