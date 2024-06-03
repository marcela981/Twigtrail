import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { AmbientLight, PointLight } from '@react-three/fiber';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/UI/HomePage';
import Experience from './Experience';
import EcctrlCamera from './components/ecctrl/EcctrlCamera';
import JoystickControls from './components/controls/JoystickControls';
import FollowingCamera from './components/controls/FollowingCamera';

import useKeyboardControls from './components/controls/useKeyboardControls';
import useGamepadControls from './components/controls/useGamepadControls';

const useIsTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  return isTouch;
};

const App = () => {
  const personajeRef = useRef();
  const isTouchDevice = useIsTouchDevice();
  const keyboardControls = useKeyboardControls();
  const gamepadControls = useGamepadControls();
  
  const activeControls = useGamepadControls.forward || useGamepadControls.backward || useGamepadControls.left || useGamepadControls.right || useGamepadControls.jump || useGamepadControls.sprint
    ? useGamepadControls
    : useKeyboardControls;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play" element={
          <>
            {isTouchDevice && <JoystickComponent />}
            <Canvas>
              <ambientLight intensity={1} color="#ffffff" />
              <pointLight position={[0, 5, 0]} intensity={2} color="#ffffff" castShadow />
              <Experience personajeRef={personajeRef} controls={activeControls} />
              <FollowingCamera characterRef={personajeRef} />
            </Canvas>
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;
