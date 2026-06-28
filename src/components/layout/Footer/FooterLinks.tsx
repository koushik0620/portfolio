"use client";

import Link from "next/link";
import FooterSocials from "./FooterSocials";


const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function FooterLinks() {
  return (
    <div className="grid gap-10 md:grid-cols-3">
      <div>
        <h3 className="text-2xl font-black">VK.</h3>

        <p className="mt-4 leading-7 text-muted-foreground">
          Building scalable web applications with React, Next.js, TypeScript, AI
          and Kotlin.
        </p>
      </div>

      <div>
        <h4 className="font-semibold">Navigation</h4>

        <div className="mt-5 flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <FooterSocials />
    </div>
  );
}
