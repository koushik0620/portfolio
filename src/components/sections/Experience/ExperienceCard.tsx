"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  MapPin,
  Sparkles,
} from "lucide-react";

import ExperienceTech from "./ExperienceTech";
import ExperienceAchievements from "./ExperienceAchievements";

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
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className="group relative"
    >
      {/* Glow */}

      <div
        className="
        absolute
        -inset-1
        rounded-[34px]
        bg-gradient-to-r
        from-indigo-500/20
        via-violet-500/20
        to-cyan-500/20
        blur-xl
        opacity-0
        transition
        duration-500
        group-hover:opacity-100
      "
      />

      {/* Card */}

      <div
        className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        group-hover:border-indigo-500/40
      "
      >
        {/* Gradient */}

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-br
          from-indigo-500/5
          via-transparent
          to-cyan-500/5
        "
        />

        <div className="relative p-10">
          {/* Header */}

          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-indigo-500/10 p-3">
                  <Briefcase className="h-6 w-6 text-indigo-400" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold">{experience.role}</h3>

                  <p className="mt-1 text-lg text-muted-foreground">
                    {experience.company}
                  </p>
                </div>
              </div>
            </div>

            {experience.current && (
              <div
                className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-500/30
                bg-emerald-500/10
                px-4
                py-2
              "
              >
                <Sparkles className="h-4 w-4 text-emerald-400" />

                <span className="text-sm font-semibold text-emerald-300">
                  Currently Working
                </span>
              </div>
            )}
          </div>

          {/* Meta */}

          <div className="mt-8 flex flex-wrap gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />

              {experience.period}
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />

              {experience.location}
            </div>
          </div>

          {/* Description */}

          <p className="mt-8 max-w-4xl text-lg leading-8 text-muted-foreground">
            {experience.description}
          </p>

          {/* Divider */}

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Achievements */}

          <ExperienceAchievements achievements={experience.achievements} />

          {/* Tech */}

          <ExperienceTech tech={experience.tech} />
        </div>
      </div>
    </motion.div>
  );
}
