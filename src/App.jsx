import React from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { Mesh } from '@react-three/fiber'

const App = () => {
  return (
    <Canvas>
      <Experience />
    </Canvas>
  )
}

export default App
