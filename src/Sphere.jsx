import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

export default function Sphere() {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh ref={mesh} position={[4, 0, 0]}>
      <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />

      <meshStandardMaterial attach="material" color="purple" />
    </mesh>
  );
}
