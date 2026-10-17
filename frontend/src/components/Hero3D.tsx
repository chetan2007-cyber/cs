import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedCoveCore() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.4;
      meshRef.current.rotation.y = t * 0.35;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = -Math.sin(t * 0.25) * 0.3;
      wireRef.current.rotation.y = -t * 0.2;
    }
  });

  return (
    <group>
      {/* Outer rotating crystal wireframe */}
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh ref={wireRef} scale={2.4}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial
            wireframe
            color="#6366f1"
            transparent
            opacity={0.35}
          />
        </mesh>
      </Float>

      {/* Inner glowing distorted sphere */}
      <Float speed={3} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={meshRef} scale={1.6}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#38bdf8"
            attach="material"
            distort={0.45}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            emissive="#1e1b4b"
            emissiveIntensity={0.6}
          />
        </mesh>
      </Float>

      {/* Orbiting Ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]} scale={3.2}>
        <ringGeometry args={[0.98, 1.0, 64]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function StarParticles() {
  const count = 75;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 14;
      pos[i + 1] = (Math.random() - 0.5) * 14;
      pos[i + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null!);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#818cf8"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function Hero3D() {
  const [hasError, setHasError] = React.useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-indigo-600/30 via-cyan-500/20 to-purple-600/30 blur-3xl animate-pulse-slow" />
      </div>
    );
  }

  return (
    <div className="w-full h-[420px] md:h-[550px] relative pointer-events-auto">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border border-indigo-500/20 animate-spin" />
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          onError={() => setHasError(true)}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-10, -5, -5]} intensity={1} color="#6366f1" />
          <pointLight position={[5, -5, 5]} intensity={1.2} color="#06b6d4" />
          
          <AnimatedCoveCore />
          <StarParticles />
        </Canvas>
      </Suspense>

      {/* Decorative gradient glow overlay behind 3D object */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-indigo-600/15 blur-3xl filter" />
      </div>
    </div>
  );
}
export default Hero3D;
