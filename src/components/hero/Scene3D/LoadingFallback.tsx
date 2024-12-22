import React from 'react';
import { Html } from '@react-three/drei';

export default function LoadingFallback() {
  return (
    <Html center>
      <div className="flex items-center justify-center">
        <div className="w-4 h-4 bg-black rounded-full animate-ping" />
      </div>
    </Html>
  );
}