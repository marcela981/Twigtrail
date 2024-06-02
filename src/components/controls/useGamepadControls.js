import { useState, useEffect } from 'react';

const useGamepadControls = () => {
  const [gamepadIndex, setGamepadIndex] = useState(null);
  const [controls, setControls] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    sprint: false,
  });

  useEffect(() => {
    const connectHandler = (event) => {
      setGamepadIndex(event.gamepad.index);
    };

    const disconnectHandler = () => {
      setGamepadIndex(null);
    };

    window.addEventListener('gamepadconnected', connectHandler);
    window.addEventListener('gamepaddisconnected', disconnectHandler);

    return () => {
      window.removeEventListener('gamepadconnected', connectHandler);
      window.removeEventListener('gamepaddisconnected', disconnectHandler);
    };
  }, []);

  useEffect(() => {
    if (gamepadIndex === null) return;

    const updateControls = () => {
      const gamepad = navigator.getGamepads()[gamepadIndex];
      if (!gamepad) return;

      const newControls = {
        forward: gamepad.buttons[12].pressed,
        backward: gamepad.buttons[13].pressed,
        left: gamepad.buttons[14].pressed,
        right: gamepad.buttons[15].pressed,
        jump: gamepad.buttons[0].pressed,
        sprint: gamepad.buttons[10].pressed,
      };

      setControls(newControls);

      requestAnimationFrame(updateControls);
    };

    updateControls();
  }, [gamepadIndex]);

  return controls;
};

export default useGamepadControls;
