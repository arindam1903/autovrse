import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import "./index.css";
import Cylinder from "./Cylinder";
import Sphere from "./Sphere";
import Box from "./Box";

function App() {
  return (
    <>
      <Canvas>
        <Sphere />
        <Box />
        <Cylinder />
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 0, 10]} intensity={1} />
        <pointLight position={[-10, 0, 10]} intensity={0.5} />
        <pointLight position={[-10, 0, -10]} intensity={1} />

        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
