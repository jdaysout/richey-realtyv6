import React, { useRef } from 'react';
import { Vector3, Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

interface BuildingProps {
  position: Vector3;
  width: number;
  height: number;
}

export default function Building({ position, width, height }: BuildingProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.matrixWorldNeedsUpdate = true;
  });

  return (
    <mesh 
      ref={meshRef}
      position={position} 
      castShadow 
      receiveShadow
    >
      <boxGeometry args={[width, height, width]} />
      <meshPhysicalMaterial
        color="#ffffff"
        metalness={0.2}
        roughness={0.1}
        envMapIntensity={0.5}
        clearcoat={0.8}
        clearcoatRoughness={0.2}
        toneMapped={true}
      />
    </mesh>
  );
}