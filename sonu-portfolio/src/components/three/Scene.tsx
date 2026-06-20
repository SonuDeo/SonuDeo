"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { ParticleField } from "./ParticleField";
import { NeuralNetwork } from "./NeuralNetwork";

/**
 * Full 3D backdrop: particle sphere + floating neural network.
 * Rendered client-side only (see HeroBackground wrapper).
 */
export default function Scene() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  const particleColor = isDark ? "#5b8cff" : "#6366f1";
  const accent = isDark ? "#38bdf8" : "#4f46e5";
  const accent2 = isDark ? "#a855f7" : "#9333ea";

  return (
    <Canvas
      camera={{ position: [0, 0, 14], fov: 55 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.1} />
        <ParticleField count={1300} color={particleColor} />
        <group position={[0, 0, 2]} scale={0.9}>
          <NeuralNetwork accent={accent} accent2={accent2} />
        </group>
      </Suspense>
    </Canvas>
  );
}
