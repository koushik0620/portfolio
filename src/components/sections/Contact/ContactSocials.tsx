"use client";

import Link from "next/link";

import { ExternalLink, Link2 } from "lucide-react";

import { contact } from "@/data/contact";

export default function ContactSocials() {
  return (
    <div className="flex gap-4 pt-2">
      <Link
        href={contact.github}
        target="_blank"
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          border
          transition-all
          hover:scale-110
          hover:border-primary
          hover:bg-primary/10
        "
      >
        <ExternalLink size={20} />
      </Link>

      <Link
        href={contact.linkedin}
        target="_blank"
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          border
          transition-all
          hover:scale-110
          hover:border-primary
          hover:bg-primary/10
        "
      >
        <Link2 size={20} />
      </Link>
    </div>
  );
}
