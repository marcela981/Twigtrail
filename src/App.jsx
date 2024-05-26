import React from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { AmbientLight } from '@react-three/fiber';
import { PointLight } from '@react-three/fiber';


const App = () => {
  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={5} color="white" />
      <Experience />
    </Canvas>
  )
}

export default App
