import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { AmbientLight, PointLight } from '@react-three/fiber';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/UI/HomePage';
import Experience from './Experience';
import EcctrlCamera from './components/ecctrl/EcctrlCamera';
import JoystickControls from './components/controls/JoystickControls';
import FollowingCamera from './components/controls/FollowingCamera';


const App = () => {
  const personajeRef = useRef();
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play" element={
          <>
            <JoystickControls positionLeft={50} positionBottom={50} size={100} />
            <Canvas>
              <ambientLight intensity={1} color="#ffffff" />
              <pointLight position={[0, 5, 0]} intensity={2} color="#ffffff" castShadow />
              <Experience personajeRef={personajeRef} />
              <FollowingCamera characterRef={personajeRef} />
            </Canvas>
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;
