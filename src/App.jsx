import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { AmbientLight, PointLight } from '@react-three/fiber';
import Experience from './Experience'
import Camera from './components/camera/Camera';


const App = () => {
  const personajeRef = useRef();
  
  return (
    <Canvas >
      <ambientLight intensity={1} color="#ffffff" />
      <pointLight position={[0, 5, 0]} intensity={2} color="#ffffff" castShadow />
      <Camera characterRef={personajeRef} />
      <Experience personajeRef={personajeRef} />
    </Canvas>
  )
}

export default App
