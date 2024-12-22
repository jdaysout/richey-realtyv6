import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import Building from './Building';
import Ground from './Ground';
import { generateBuildingGrid } from '../../../utils/scene';

export default function CityModel() {
  const groupRef = useRef<Group>(null);
  const buildings = useMemo(() => generateBuildingGrid(7, 7), []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.1;
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.05;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <group>
        {buildings.map((building, i) => (
          <Building key={i} {...building} />
        ))}
      </group>
      <Ground />
    </group>
  );
}