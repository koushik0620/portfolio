"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { fadeUp } from "@/lib/animations";

import AboutContent from "./AboutContent";
import AboutJourney from "./AboutJourney";

export default function About() {
  return (
    <Section id="about" className="relative overflow-hidden py-28 lg:py-36">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-primary/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[180px]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="
          absolute
          inset-0
          -z-10
          opacity-[0.04]
          [background-image:linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      <Container>
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border px-5 py-2 text-sm font-semibold text-primary">
            About Me
          </span>

          <h2 className="mt-8 text-5xl font-black tracking-tight md:text-6xl">
            Crafting Modern Digital Experiences
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            I build scalable, high-performance web applications with a strong
            focus on clean architecture, user experience, and modern frontend
            engineering.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid items-start gap-24 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AboutContent />
          </motion.div>

          {/* Right */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="sticky top-28"
          >
            <AboutJourney />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
