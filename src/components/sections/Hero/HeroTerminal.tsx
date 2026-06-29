"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Circle } from "lucide-react";

const lines = [
  "$ npm install",
  "✓ React",
  "✓ Next.js",
  "✓ TypeScript",
  "✓ Tailwind CSS",
  "✓ Framer Motion",
  "✓ Portfolio Ready",
];

export default function HeroTerminal() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={
        prefersReducedMotion
          ? { opacity: 1, y: 0 }
          : {
              opacity: 1,
              y: [0, -10, 0],
            }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0.5 }
          : {
              opacity: { duration: 0.5 },
              y: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
      }
      className="
        w-[420px]
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-950
        shadow-2xl
        will-change-transform
      "
    >
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-zinc-800 p-4">
        <Circle className="h-3 w-3 fill-red-500 text-red-500" />
        <Circle className="h-3 w-3 fill-yellow-500 text-yellow-500" />
        <Circle className="h-3 w-3 fill-green-500 text-green-500" />

        <span className="ml-4 text-sm text-zinc-400">terminal</span>
      </div>

      {/* Terminal Body */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="space-y-2 p-6 font-mono text-sm"
      >
        {lines.map((line) => (
          <motion.p
            key={line}
            variants={{
              hidden: {
                opacity: 0,
                x: -12,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{
              duration: 0.3,
            }}
            className="text-green-400"
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
}
