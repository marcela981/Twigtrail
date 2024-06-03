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
    axisX:0,
    axisY:0
  });

  // Handle gamepad connection
  useEffect(() => {
    const connectHandler = (event) => {
      console.log("Gamepad connected:", event.gamepad);
      setGamepadIndex(event.gamepad.index);
    };

    const disconnectHandler = (event) => {
      console.log("Gamepad disconnected:", event.gamepad);
      if (gamepadIndex === event.gamepad.index) {
        setGamepadIndex(null);
      }
    };

    window.addEventListener('gamepadconnected', connectHandler);
    window.addEventListener('gamepaddisconnected', disconnectHandler);

    return () => {
      window.removeEventListener('gamepadconnected', connectHandler);
      window.removeEventListener('gamepaddisconnected', disconnectHandler);
    };
  }, [gamepadIndex]);

  // Poll gamepad status
  useEffect(() => {
    const updateControls = () => {
      const gamepad = navigator.getGamepads()[gamepadIndex];
      if (!gamepad) return;

      const newControls = {
        forward: gamepad.buttons[13].pressed,
        backward: gamepad.buttons[12].pressed,
        left: gamepad.buttons[14].pressed,
        right: gamepad.buttons[15].pressed,
        jump: gamepad.buttons[0].pressed,
        sprint: gamepad.buttons[10].pressed,
        axisX: gamepad.axes[0],
        axisY: gamepad.axes[1]
      };

      console.log("Gamepad controls:", newControls);
      setControls(newControls);
      requestAnimationFrame(updateControls);
    };

    updateControls();
  }, [gamepadIndex]);

  return controls;
};

export default useGamepadControls;
