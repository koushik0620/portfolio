"use client";

import { MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";

export function MotionPerformanceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateReducedMotion = () => {
      setReducedMotion(media.matches || window.innerWidth < 768);
    };

    updateReducedMotion();

    media.addEventListener("change", updateReducedMotion);
    window.addEventListener("resize", updateReducedMotion);

    return () => {
      media.removeEventListener("change", updateReducedMotion);
      window.removeEventListener("resize", updateReducedMotion);
    };
  }, []);

  return (
    <MotionConfig reducedMotion={reducedMotion ? "always" : "user"}>
      {children}
    </MotionConfig>
  );
}
