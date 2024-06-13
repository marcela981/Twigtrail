import { useState, useEffect } from 'react';
import useKeyboardControls from './useKeyboardControls';
import useGamepadControls from './useGamepadControls';
import useTouchJoystickControls from './JoystickControls'; // Asumiendo que tienes algo similar para touch

const useUnifiedControls = () => {
  const keyboardControls = useKeyboardControls();
  const gamepadControls = useGamepadControls();
  const touchControls = useTouchJoystickControls();

  const [unifiedControls, setUnifiedControls] = useState({});

  const updateGamepad = () => {
    const gamepad = navigator.getGamepads()[0]; // Asume un solo gamepad por simplicidad
    if (gamepad) {
      const newControls = {
        forward: gamepad.buttons[12].pressed, // Asignar según la configuración de tu gamepad
        backward: gamepad.buttons[13].pressed,
        left: gamepad.buttons[14].pressed,
        right: gamepad.buttons[15].pressed,
        jump: gamepad.buttons[0].pressed,
        axisX: gamepad.axes[0],
        axisY: gamepad.axes[1],
        active: gamepad.buttons.some(button => button.pressed)
      };
      setUnifiedControls(newControls);
    }
    requestAnimationFrame(updateGamepad);
  };

  useEffect(() => {
    if (gamepadControls.active) {
      setUnifiedControls(gamepadControls);
    } else if (touchControls.active) {
      setUnifiedControls(touchControls);
    } else {
      setUnifiedControls(keyboardControls);
    }
  }, [keyboardControls, gamepadControls, touchControls]);

  return unifiedControls;
};

export default useUnifiedControls;
