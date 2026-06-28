"use client";

import { motion } from "framer-motion";
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
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
      }}
      className="w-[420px] rounded-3xl border bg-zinc-950 shadow-2xl overflow-hidden"
    >
      <div className="flex items-center gap-2 border-b border-zinc-800 p-4">
        <Circle className="h-3 w-3 fill-red-500 text-red-500" />
        <Circle className="h-3 w-3 fill-yellow-500 text-yellow-500" />
        <Circle className="h-3 w-3 fill-green-500 text-green-500" />

        <span className="ml-4 text-sm text-zinc-400">terminal</span>
      </div>

      <div className="space-y-2 p-6 font-mono text-sm">
        {lines.map((line, index) => (
          <motion.p
            key={line}
            initial={{
              opacity: 0,
              x: -10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.25,
            }}
            className="text-green-400"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}
