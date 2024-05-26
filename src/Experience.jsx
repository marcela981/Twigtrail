import React, { useEffect, useState } from 'react';
import { Physics } from '@react-three/rapier';
import Ecctrl from 'ecctrl';
import Personaje_principal from './characters/Personaje_principal';
import Habitacion from './room/Habitacion';


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

const Experience = () => {
  const movement = useKeyboardControls();

  return (
    <>
    <Physics>
      <Habitacion  />
        <Ecctrl movement={movement}>
          <Personaje_principal movement={movement} /> 
        </Ecctrl>
    </Physics>
    </>
  );
};

export default Experience;
