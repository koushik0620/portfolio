"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import Container from "./Container";
import Logo from "@/components/common/Logo";
import ThemeToggle from "@/components/common/ThemeToggle";
import PrimaryButton from "@/components/common/PrimaryButton";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <div
          className={`
            mt-5
            transition-all
            duration-500
            ${
              scrolled
                ? "mx-auto max-w-6xl rounded-full border border-border/50 bg-background/70 px-6 shadow-2xl backdrop-blur-2xl"
                : ""
            }
          `}
        >
          <div className="flex h-18 items-center justify-between">
            <Logo />

            <nav className="hidden items-center gap-2 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    hover:bg-primary/10
                    hover:text-primary
                  "
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <ThemeToggle />

              <PrimaryButton asChild>
                <Link href="/resume/resume.pdf" target="_blank">
                  Resume
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
