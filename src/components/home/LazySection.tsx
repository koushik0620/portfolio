"use client";

import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface LazySectionProps {
  skeleton: ReactNode;
  children: ReactNode;
}

export default function LazySection({ skeleton, children }: LazySectionProps) {
  const { ref, inView } = useInView({
    rootMargin: "400px 0px",
    triggerOnce: true,
  });

  return <div ref={ref}>{inView ? children : skeleton}</div>;
}
