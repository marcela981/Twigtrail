import React from 'react';
import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"

const App = () => {
    const cameraSettings = {
      position: [0, 2, 1],
      fov: 50,
    };
  
    return (
      <Canvas camera={cameraSettings} shadows>
        <Experience />
      </Canvas>
    );
  };
  
  export default App;