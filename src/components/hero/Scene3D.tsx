import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function CityModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 50 }).map((_, i) => {
        const x = (Math.random() - 0.5) * 20;
        const z = (Math.random() - 0.5) * 20;
        const height = Math.random() * 3 + 1;
        const width = Math.random() * 0.5 + 0.5;

        return (
          <mesh
            key={i}
            position={[x, height / 2, z]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[width, height, width]} />
            <meshStandardMaterial
              color="#ffffff"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        );
      })}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        shadows
        camera={{ position: [15, 15, 15], fov: 25 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#fafafa']} />
        <fog attach="fog" args={['#fafafa', 20, 40]} />
        
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        
        <CityModel />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}