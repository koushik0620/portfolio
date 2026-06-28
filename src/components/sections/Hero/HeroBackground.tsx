"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* Left Glow */}
      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [-20, 20, -20],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-32
          top-20
          h-[450px]
          w-[450px]
          rounded-full
          bg-violet-500/20
          blur-[120px]
        "
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          y: [-30, 30, -30],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/20
          blur-[140px]
        "
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [40, -40, 40],
          y: [20, -20, 20],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-24
          bottom-10
          h-[400px]
          w-[400px]
          rounded-full
          bg-fuchsia-500/20
          blur-[120px]
        "
      />

      {/* Radial Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_100%)]
        "
      />
    </div>
  );
}
