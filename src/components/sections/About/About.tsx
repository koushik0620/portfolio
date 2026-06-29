import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import AboutContent from "./AboutContent";
import AboutJourney from "./AboutJourney";

export default function About() {
  return (
    <Section id="about" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <div
          className="
            absolute
            left-0
            top-24
            h-72
            w-72
            rounded-full
            bg-primary/10
            blur-[90px]
            md:h-80
            md:w-80
            md:blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-0
            h-80
            w-80
            rounded-full
            bg-violet-500/10
            blur-[100px]
            md:h-96
            md:w-96
            md:blur-[140px]
          "
        />
      </div>

      {/* Grid */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-[0.035]
          [background-image:linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      <Container>
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
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
        </div>

        <div className="grid items-start gap-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-full">
            <AboutContent />
          </div>

          <div className="sticky top-28">
            <AboutJourney />
          </div>
        </div>
      </Container>
    </Section>
  );
}
