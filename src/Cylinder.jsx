import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

export default function Cylinder() {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh ref={mesh} position={[-4, 0, 0]}>
      <cylinderBufferGeometry attach="geometry" args={[1, 1, 1, 500]} />

      <meshStandardMaterial attach="material" color="green" />
    </mesh>
  );
}
