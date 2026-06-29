"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroDashboard = dynamic(() => import("./HeroDashboard"), {
  ssr: false,
  loading: () => null,
});

export default function HeroDashboardClient() {
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    const update = () => setShowDashboard(window.innerWidth >= 1024);

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  if (!showDashboard) {
    return null;
  }

  return <HeroDashboard />;
}
