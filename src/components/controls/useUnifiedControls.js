import { useState, useEffect } from 'react';
import useKeyboardControls from './useKeyboardControls';
import useGamepadControls from './useGamepadControls';
import useTouchJoystickControls from './JoystickControls'; // Asumiendo que tienes algo similar para touch

const useUnifiedControls = () => {
  const keyboardControls = useKeyboardControls();
  const gamepadControls = useGamepadControls();
  const touchControls = useTouchJoystickControls();

  const [unifiedControls, setUnifiedControls] = useState({});

  useEffect(() => {
    // Aquí decides la prioridad de los controles
    // Por ejemplo, si el gamepad está activo, tiene prioridad sobre el teclado
    if (gamepadControls.forward || gamepadControls.backward || gamepadControls.left || gamepadControls.right) {
      setUnifiedControls(gamepadControls);
    } else if (touchControls.active) { // Suponiendo que touchControls tiene un estado 'active'
      setUnifiedControls(touchControls);
    } else {
      setUnifiedControls(keyboardControls);
    }
  }, [keyboardControls, gamepadControls, touchControls]);

  return unifiedControls;
};

export default useUnifiedControls;
