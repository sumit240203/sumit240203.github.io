"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingIcosahedron() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      state.pointer.y * 0.4 + t * 0.08,
      0.04
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      state.pointer.x * 0.4 + t * 0.13,
      0.04
    );
    groupRef.current.position.y = Math.sin(t * 0.7) * 0.18;
  });

  return (
    <group ref={groupRef}>
      {/* Dark solid core */}
      <mesh>
        <icosahedronGeometry args={[1.25, 2]} />
        <meshStandardMaterial
          color="#0a1628"
          roughness={0.1}
          metalness={0.9}
          emissive="#0a1628"
        />
      </mesh>
      {/* Outer wireframe glow */}
      <mesh>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshBasicMaterial
          color="#6ee7b7"
          wireframe
          transparent
          opacity={0.38}
        />
      </mesh>
      {/* Second wireframe layer at slightly different scale for depth */}
      <mesh>
        <icosahedronGeometry args={[1.72, 1]} />
        <meshBasicMaterial
          color="#00d4ff"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[4, 6, 4]} intensity={4} color="#6ee7b7" />
      <pointLight position={[-5, -4, -2]} intensity={2} color="#00d4ff" />
      <FloatingIcosahedron />
    </>
  );
}

export function Hero3D() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{ zIndex: 0 }}
    >
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        style={{ pointerEvents: "none" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
