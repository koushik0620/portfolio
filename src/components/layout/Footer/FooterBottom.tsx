"use client";

import { ArrowUp } from "lucide-react";

export default function FooterBottom() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row">
      <p>© {new Date().getFullYear()} Koushik. All rights reserved.</p>

      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="flex items-center gap-2 transition hover:text-primary"
      >
        Back to Top
        <ArrowUp size={16} />
      </button>
    </div>
  );
}
