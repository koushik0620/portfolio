"use client";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function FooterCTA() {
  return (
    <div className="py-24 text-center">
      <p className="text-primary font-semibold uppercase tracking-[0.3em]">
        Ready to collaborate?
      </p>

      <h2 className="mt-4 text-4xl font-black md:text-5xl">
        Let's Build Something Amazing
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        I'm always excited to work on innovative products, AI-powered
        applications and modern web experiences.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <Link href="#contact">
            Contact Me
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>

        <Button variant="outline" size="lg">
          Download Resume
        </Button>
      </div>
    </div>
  );
}
