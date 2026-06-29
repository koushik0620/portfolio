"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import { heroData } from "@/data/hero";
import { fadeUp } from "@/lib/animations";

import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import HeroCTA from "./HeroCTA";
import HeroGrid from "./HeroGrid";
import HeroScrollIndicator from "./HeroScrollIndicator";
import HeroSocials from "./HeroSocials";
import HeroStats from "./HeroStats";

const HeroDashboard = dynamic(() => import("./HeroDashboard"), {
  ssr: false,
  loading: () => <div className="h-[520px] w-[420px]" />,
});

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden py-24 lg:py-32">
      <HeroGrid />
      <HeroBackground />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <HeroBadge />

            <p className="mt-8 text-lg font-semibold text-primary">
              {heroData.greeting}
            </p>

            <h1 className="mt-4 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl xl:text-8xl">
              {heroData.name}
            </h1>

            <h2 className="mt-6 max-w-2xl text-2xl font-semibold leading-relaxed text-muted-foreground md:text-3xl">
              {heroData.role}
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-muted-foreground">
              {heroData.description}
            </p>

            <HeroCTA />
            <HeroSocials />
            <HeroStats />
          </motion.div>

          <div className="hidden justify-center lg:flex">
            <HeroDashboard />
          </div>
        </div>
      </Container>

      <HeroScrollIndicator />
    </section>
  );
}
