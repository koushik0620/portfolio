"use client";

import { motion } from "framer-motion";

type Props = {
  year: string;
  title: string;
  description: string;
  last?: boolean;
};

export default function AboutTimelineItem({
  year,
  title,
  description,
  last = false,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="relative flex gap-5 will-change-transform"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="h-4 w-4 rounded-full bg-primary" />

        {!last && <div className="mt-2 h-24 w-px bg-border md:h-28" />}
      </div>

      {/* Content */}
      <div className="pb-8">
        <p className="text-sm font-semibold text-primary">{year}</p>

        <h3 className="mt-1 text-xl font-bold">{title}</h3>

        <p className="mt-2 leading-7 text-muted-foreground">{description}</p>
      </div>
    </motion.article>
  );
}
