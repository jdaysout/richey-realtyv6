import React from 'react';

export default function Ground() {
  return (
    <mesh 
      rotation={[-Math.PI / 2, 0, 0]} 
      position={[0, -0.5, 0]} 
      receiveShadow
    >
      <planeGeometry args={[100, 100]} />
      <meshPhysicalMaterial
        color="#f0f0f0"
        metalness={0.1}
        roughness={0.5}
        clearcoat={0.1}
      />
    </mesh>
  );
}