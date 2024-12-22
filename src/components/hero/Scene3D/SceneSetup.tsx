import React, { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function SceneSetup() {
  const { scene, gl, camera } = useThree();
  const initialized = useRef(false);
  
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    scene.background = new THREE.Color('#fafafa');
    scene.fog = new THREE.Fog('#fafafa', 15, 35);
    
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    gl.shadowMap.enabled = true;
    gl.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Ensure camera is properly initialized
    camera.up.set(0, 1, 0);
    camera.updateProjectionMatrix();

    return () => {
      scene.background = new THREE.Color('#fafafa');
      scene.fog = null;
    };
  }, [scene, gl, camera]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <hemisphereLight
        intensity={0.3}
        color="#ffffff"
        groundColor="#bbbbbb"
      />
    </>
  );
}