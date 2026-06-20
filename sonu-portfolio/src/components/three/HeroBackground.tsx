"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => null,
});

/**
 * Lazy, client-only 3D backdrop. Skips rendering when the user prefers
 * reduced motion to keep things accessible and battery-friendly.
 */
export function HeroBackground() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const smallScreen = window.innerWidth < 480;
    setEnabled(!reduce && !smallScreen);
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
      <Scene />
    </div>
  );
}
