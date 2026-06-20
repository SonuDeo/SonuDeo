"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

type Node = { pos: [number, number, number]; layer: number };

/**
 * A stylised floating neural network: nodes arranged in layers with
 * animated connecting edges. Purely decorative.
 */
export function NeuralNetwork({
  accent = "#5b8cff",
  accent2 = "#a855f7",
}: {
  accent?: string;
  accent2?: string;
}) {
  const group = useRef<THREE.Group>(null);

  const { nodes, edges } = useMemo(() => {
    const layers = [3, 5, 5, 3];
    const spacingX = 2.6;
    const nodes: Node[] = [];
    const layerNodes: number[][] = [];

    layers.forEach((countInLayer, li) => {
      const ids: number[] = [];
      const x = (li - (layers.length - 1) / 2) * spacingX;
      for (let n = 0; n < countInLayer; n++) {
        const y = (n - (countInLayer - 1) / 2) * 1.5;
        const z = (Math.random() - 0.5) * 1.2;
        ids.push(nodes.length);
        nodes.push({ pos: [x, y, z], layer: li });
      }
      layerNodes.push(ids);
    });

    const edges: [number, number][] = [];
    for (let li = 0; li < layerNodes.length - 1; li++) {
      layerNodes[li].forEach((a) => {
        layerNodes[li + 1].forEach((b) => {
          if (Math.random() > 0.25) edges.push([a, b]);
        });
      });
    }

    return { nodes, edges };
  }, []);

  const lineGeometry = useMemo(() => {
    const points: number[] = [];
    edges.forEach(([a, b]) => {
      points.push(...nodes[a].pos, ...nodes[b].pos);
    });
    const geom = new THREE.BufferGeometry();
    geom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(points, 3)
    );
    return geom;
  }, [edges, nodes]);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.15) * 0.35;
    group.current.rotation.x = Math.cos(t * 0.12) * 0.12;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={group}>
        <lineSegments geometry={lineGeometry}>
          <lineBasicMaterial
            color={accent}
            transparent
            opacity={0.22}
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>

        {nodes.map((node, i) => (
          <mesh key={i} position={node.pos}>
            <sphereGeometry args={[0.13, 16, 16]} />
            <meshBasicMaterial
              color={node.layer % 2 === 0 ? accent : accent2}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}
