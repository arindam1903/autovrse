import React,{useRef} from 'react';
import {Canvas, useFrame} from 'react-three-fiber';
import  {OrbitControls} from '@react-three/drei';
import './index.css';

const Sphere=()=>{
  const mesh=useRef();
  useFrame(()=>(mesh.current.rotation.x=mesh.current.rotation.y+=0.01));
  
  return(
    
    <mesh ref={mesh} position={[4,0,0]}>
    <sphereBufferGeometry attach='geometry' args={[1,32,32]}/>
  
    <meshStandardMaterial attach='material' color="purple" />
  </mesh>
  )
}
const Box=()=>{
  const mesh=useRef();
  useFrame(()=>(mesh.current.rotation.x=mesh.current.rotation.y+=0.01));
  
  return(
    
    <mesh ref={mesh}>
    <boxBufferGeometry attach='geometry' args={[1,1,1]}/>
  
    <meshStandardMaterial attach='material' color="red" />
  </mesh>
  )
}
const Cylinder=()=>{
  const mesh=useRef();
  useFrame(()=>(mesh.current.rotation.x=mesh.current.rotation.y+=0.01));
  
  return(
    
    <mesh ref={mesh} position={[-4,0,0]}>
    <cylinderBufferGeometry attach='geometry' args={[1,1,1,500]}/>
  
    <meshStandardMaterial attach='material' color="green" />
  </mesh>
  )
}


function App() {

  
  
  return (<>
  <button id='sphere-button'>hello</button>
  <Canvas>
 <Sphere/>
 <Box/>
      <Cylinder/>
      <ambientLight intensity={.1}/>
      <pointLight position={[10,0,10]}intensity={1}/>
      <pointLight position={[-10,0,10]} intensity={.5}/>
      <pointLight position={[-10,0,-10]} intensity={1}/>
  
   <OrbitControls/>
    </Canvas>  
 
    
   
    </>
  );
}

export default App;
