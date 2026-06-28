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
  last,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative flex gap-6"
    >
      <div className="flex flex-col items-center">
        <div className="h-5 w-5 rounded-full bg-primary" />

        {!last && <div className="mt-2 h-28 w-px bg-border" />}
      </div>

      <div className="pb-10">
        <div className="text-sm text-primary font-semibold">{year}</div>

        <h3 className="mt-1 text-xl font-bold">{title}</h3>

        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
