import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CityModel from './CityModel';
import SceneSetup from './SceneSetup';
import LoadingFallback from './LoadingFallback';

export default function Scene3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: false,
          stencil: false,
          depth: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: true
        }}
        camera={{ 
          position: [15, 15, 15], 
          fov: 25, 
          near: 0.1, 
          far: 1000,
          up: [0, 1, 0]
        }}
        onCreated={({ gl, scene }) => {
          gl.setClearColor('#fafafa');
          scene.background?.set('#fafafa');
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <SceneSetup />
          <CityModel />
          <OrbitControls
            makeDefault
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2.5}
            minPolarAngle={Math.PI / 3}
            target={[0, 0, 0]}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}