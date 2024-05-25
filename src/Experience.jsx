import React, { useEffect, useState } from 'react';
import { Physics } from '@react-three/rapier';
import Ecctrl from 'ecctrl';

const useKeyboardControls = () => {
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
  });

  // Define el mapeo de teclas y la función de manejo de eventos aquí
  const keyMap = {
    ArrowUp: 'forward',
    KeyW: 'forward',
    ArrowDown: 'backward',
    KeyS: 'backward',
    ArrowLeft: 'left',
    KeyA: 'left',
    ArrowRight: 'right',
    KeyD: 'right',
    Space: 'jump'
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
    <Physics>
      <Ecctrl movement={movement}>
        {/* Pon aquí cuando este el modelo */}
        <mesh>
          <boxGeometry args={[2, 2, 1]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </Ecctrl>
    </Physics>
  );
};

export default Experience;
