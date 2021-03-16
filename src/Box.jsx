import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const Box = () => {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />

      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  );
};
export default Box;
