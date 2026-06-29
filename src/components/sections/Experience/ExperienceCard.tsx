"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";

import ExperienceAchievements from "./ExperienceAchievements";
import ExperienceTech from "./ExperienceTech";

type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  description: string;
  achievements: string[];
  tech: string[];
};

export default function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-3xl border border-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-background/70 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 md:p-10 md:backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-violet-500/5" />

        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>

              <div>
                <h3 className="text-2xl font-bold md:text-3xl">
                  {experience.role}
                </h3>

                <p className="mt-1 text-muted-foreground">
                  {experience.company}
                </p>
              </div>
            </div>

            {experience.current && (
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
                <Sparkles className="h-4 w-4 text-emerald-400" />

                <span className="text-sm font-medium text-emerald-400">
                  Current
                </span>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {experience.period}
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {experience.location}
            </div>
          </div>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-muted-foreground">
            {experience.description}
          </p>

          <div className="my-10 border-t border-border/40" />

          <ExperienceAchievements achievements={experience.achievements} />

          <ExperienceTech tech={experience.tech} />
        </div>
      </div>
    </motion.article>
  );
}
