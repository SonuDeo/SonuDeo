"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

/**
 * Matrix-style "code rain" rendered on a 2D canvas. Toggleable & cheap.
 */
export function CodeRain({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars = "01{}[]()<>=+-*/;:アイウエオANALYTICSDATA01".split("");
    const fontSize = 16;
    let columns = 0;
    let drops: number[] = [];

    const isDark = resolvedTheme !== "light";
    const trail = isDark ? "rgba(7, 11, 20, 0.08)" : "rgba(247, 250, 252, 0.1)";
    const glyph = isDark ? "#38bdf8" : "#4f46e5";

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    };
    resize();
    window.addEventListener("resize", resize);

    let last = 0;
    const draw = (time: number) => {
      rafRef.current = requestAnimationFrame(draw);
      if (time - last < 55) return;
      last = time;

      ctx.fillStyle = trail;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = glyph;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, resolvedTheme]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-40"
    />
  );
}
