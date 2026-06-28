"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";

import Container from "./Container";
import Logo from "@/components/common/Logo";
import ThemeToggle from "@/components/common/ThemeToggle";
import PrimaryButton from "@/components/common/PrimaryButton";
import { navigation } from "@/constants/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
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

            {/* Desktop Actions */}
            <div className="hidden items-center gap-3 md:flex">
              <ThemeToggle />

              <PrimaryButton asChild>
                <Link href="/resume/resume.pdf" target="_blank">
                  Resume
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </PrimaryButton>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-full border-l border-border/40 bg-background/95 backdrop-blur-xl"
                >
                  <SheetHeader>
                    <SheetTitle>
                      <Logo />
                    </SheetTitle>
                  </SheetHeader>

                  <div className="mt-12 flex flex-col gap-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="
                          rounded-xl
                          px-5
                          py-4
                          text-lg
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
                  </div>

                  <div className="mt-10 flex items-center justify-between rounded-xl border border-border p-4">
                    <span className="text-sm font-medium">Theme</span>

                    <ThemeToggle />
                  </div>

                  <PrimaryButton asChild className="mt-8 w-full">
                    <Link href="/resume/resume.pdf" target="_blank">
                      Download Resume
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </PrimaryButton>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
