import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { AmbientLight, PointLight } from '@react-three/fiber';
import { EcctrlJoystick } from 'ecctrl';
import Experience from './Experience'
import Camera from './components/camera/Camera';


const App = () => {
  const personajeRef = useRef();
  
  return (
    <>
      <EcctrlJoystick positionLeft={50} positionBottom={50} size={100} />
      <Canvas >
        <ambientLight intensity={1} color="#ffffff" />
        <pointLight position={[0, 5, 0]} intensity={2} color="#ffffff" castShadow />
        <Camera characterRef={personajeRef} />
        <Experience personajeRef={personajeRef} />
      </Canvas>
    </>
  )
}

export default App
