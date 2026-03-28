'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, TorusKnot, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AnimatedCtaGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <TorusKnot ref={meshRef} args={[1.2, 0.3, 128, 32]} scale={1.2}>
        <MeshDistortMaterial
          color="#3b82f6" // blue-500
          attach="material"
          distort={0.2}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          wireframe={true}
        />
      </TorusKnot>
    </Float>
  );
}

export function Cta3DBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#f59e0b" /> {/* amber light */}
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#3b82f6" /> {/* blue light */}
        <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1.5} />
        <AnimatedCtaGeometry />
      </Canvas>
    </div>
  );
}
