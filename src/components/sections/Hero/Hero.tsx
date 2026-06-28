"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import { heroData } from "@/data/hero";
import { fadeUp, staggerContainer } from "@/lib/animations";

import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import HeroCTA from "./HeroCTA";
import HeroDashboard from "./HeroDashboard";
import HeroGrid from "./HeroGrid";
import HeroScrollIndicator from "./HeroScrollIndicator";
import HeroSocials from "./HeroSocials";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden py-24 lg:py-32">
      <HeroGrid />
      <HeroBackground />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp}>
              <HeroBadge />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-lg font-semibold text-primary"
            >
              {heroData.greeting}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="
                mt-4
                text-5xl
                font-black
                leading-[0.95]
                tracking-tight
                md:text-7xl
                xl:text-8xl
              "
            >
              {heroData.name}
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="
                mt-6
                max-w-2xl
                text-2xl
                font-semibold
                leading-relaxed
                text-muted-foreground
                md:text-3xl
              "
            >
              {heroData.role}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-9
                text-muted-foreground
              "
            >
              {heroData.description}
            </motion.p>

            <motion.div variants={fadeUp}>
              <HeroCTA />
            </motion.div>

            <motion.div variants={fadeUp}>
              <HeroSocials />
            </motion.div>

            <motion.div variants={fadeUp}>
              <HeroStats />
            </motion.div>
          </motion.div>

          {/* Right Dashboard */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="hidden justify-center lg:flex"
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </Container>

      <HeroScrollIndicator />
    </section>
  );
}
