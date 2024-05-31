import { useState, useEffect } from 'react';
import { useJoystickControls } from 'ecctrl';

const useCombinedControls = () => {
  const [movement, setMovement] = useState({ forward: 0, right: 0, jump: false, run: false });
  const joystickControl = useJoystickControls();

  // Teclado
  useEffect(() => {
    const handleKeyDown = ({ key }) => {
      switch(key.toLowerCase()) {
        case 'w': case 'arrowup':
          setMovement((m) => ({ ...m, forward: 1 }));
          break;
        case 's': case 'arrowdown':
          setMovement((m) => ({ ...m, forward: -1 }));
          break;
        case 'a': case 'arrowleft':
          setMovement((m) => ({ ...m, right: -1 }));
          break;
        case 'd': case 'arrowright':
          setMovement((m) => ({ ...m, right: 1 }));
          break;
        case ' ':
          setMovement((m) => ({ ...m, jump: true }));
          break;
        case 'shift':
          setMovement((m) => ({ ...m, run: true }));
          break;
      }
    };

    const handleKeyUp = ({ key }) => {
      switch(key.toLowerCase()) {
        case 'w': case 's': case 'arrowup': case 'arrowdown':
          setMovement((m) => ({ ...m, forward: 0 }));
          break;
        case 'a': case 'd': case 'arrowleft': case 'arrowright':
          setMovement((m) => ({ ...m, right: 0 }));
          break;
        case ' ':
          setMovement((m) => ({ ...m, jump: false }));
          break;
        case 'shift':
          setMovement((m) => ({ ...m, run: false }));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Joystick
  useEffect(() => {
    const handleJoystickMove = (joystickDis, joystickAng, runState) => {
      // Convert joystick input to directional movement
      const forward = Math.cos(joystickAng) * joystickDis;
      const right = Math.sin(joystickAng) * joystickDis;
      setMovement({ forward, right, run: runState });
    };

    joystickControl.setJoystick(handleJoystickMove);

    return () => {
      joystickControl.resetJoystick();
    };
  }, [joystickControl]);

  return movement;
};
