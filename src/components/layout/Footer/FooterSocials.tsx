"use client";

import Link from "next/link";

import { ExternalLink, Link2, Mail } from "lucide-react";

import { contact } from "@/data/contact";

export default function FooterSocials() {
  return (
    <div>
      <h4 className="font-semibold">Connect</h4>

      <div className="mt-5 flex gap-4">
        <Link
          href={contact.github}
          target="_blank"
          className="rounded-xl border p-3 transition hover:border-primary hover:bg-primary/10"
        >
          <ExternalLink size={18} />
        </Link>

        <Link
          href={contact.linkedin}
          target="_blank"
          className="rounded-xl border p-3 transition hover:border-primary hover:bg-primary/10"
        >
          <Link2 size={18} />
        </Link>

        <Link
          href={`mailto:${contact.email}`}
          className="rounded-xl border p-3 transition hover:border-primary hover:bg-primary/10"
        >
          <Mail size={18} />
        </Link>
      </div>
    </div>
  );
}
