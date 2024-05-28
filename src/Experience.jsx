import React, { useEffect, useState, useRef } from 'react';
import { Physics, useRapier } from '@react-three/rapier';
import Ecctrl from 'ecctrl';
import Personaje_principal from './characters/Personaje_principal';
import Habitacion from './room/Habitacion';
import Suelo from './room/Suelo';




const useKeyboardControls = () => {
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    run: false,
    walk: false, 
  });

  const keyMap = {
    ArrowUp: 'walk',
    KeyW: 'walk',
    ArrowDown: 'walkingBackword',
    KeyS: 'walkingBackword',
    ArrowLeft: 'left',
    KeyA: 'left',
    ArrowRight: 'right',
    KeyD: 'right',
    Space: 'jump',
    ShiftRight: 'run',
    ShiftLeft: 'run'
  };

  const handleKeyEvent = (event, active) => {
    const action = keyMap[event.code];
    if (action) {
      setMovement(m => ({ ...m, [action]: active }));
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => handleKeyEvent(event, true);
    const handleKeyUp = (event) => handleKeyEvent(event, false);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return movement;
};



const SetupPhysicsWorld = () => {
  const { world } = useRapier();

  useEffect(() => {
    if (world) {
      world.timestep = 1 / 60;
      world.gravity = { x: 0, y: -9.81, z: 0 };
    }
  }, [world]);

  return null;
};

  const Experience = ({ personajeRef }) => {

    const movement = useKeyboardControls();
  
  return (
    <>
    <Physics>
    <SetupPhysicsWorld />
        <Habitacion />
        <Suelo />
          <Ecctrl movement={movement}>
            <Personaje_principal ref={personajeRef} movement={movement} /> 
          </Ecctrl>
    </Physics>
    </>
  );
};


export default Experience;
