"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sphere,
  OrbitControls,
} from "@react-three/drei";

function FloatingSphere() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1.5, 64, 64]} position={[2, 0, 0]}>
        <MeshDistortMaterial
          color="#FF7A18"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function FloatingTorus() {
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <mesh position={[-2.5, 1, -1]} rotation={[0.5, 0.5, 0]}>
        <torusGeometry args={[0.8, 0.25, 16, 100]} />
        <meshStandardMaterial
          color="#1E3A66"
          emissive="#FF7A18"
          emissiveIntensity={0.3}
          roughness={0.3}
        />
      </mesh>
    </Float>
  );
}

function FloatingBox() {
  return (
    <Float speed={2.5} rotationIntensity={1.8} floatIntensity={2.5}>
      <mesh position={[-1.5, -1.5, 0.5]} rotation={[0.3, 0.6, 0.2]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#FFA05C" roughness={0.4} />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#FF7A18" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#1E3A66" />

      <FloatingSphere />
      <FloatingTorus />
      <FloatingBox />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}