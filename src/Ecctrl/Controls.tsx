import React, { useState, useEffect } from 'react'; // Importa useState y useEffect
import Ecctrl, { EcctrlJoystick, useJoystickControls } from 'ecctrl';
import { Main_Character } from '../characters/Main_Character'; // Asegúrate de importar tu modelo de personaje
// Importa KeyboardControls de Ecctrl

const Controls = () => {
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const { setJoystick, resetJoystick } = useJoystickControls();

  useEffect(() => {
    const updateGamepadStatus = () => {
      const gamepad = navigator.getGamepads()[0]; // Suponiendo que hay un gamepad conectado
      if (!gamepad) return;

      const { axes, buttons } = gamepad;
      const forward = axes[1] < -0.5 || buttons[12].pressed;
      const backward = axes[1] > 0.5 || buttons[13].pressed;
      const leftward = axes[0] < -0.5 || buttons[14].pressed;
      const rightward = axes[0] > 0.5 || buttons[15].pressed;
      const run = buttons[10].pressed; // Botón de correr (Ejemplo)

      setJoystick(axes[0], axes[1], run);

      let animation = 'idle';
      if (forward || backward || leftward || rightward) {
        animation = run ? 'run' : 'walk';
      }
      setCurrentAnimation(animation);
    };

    const intervalId = setInterval(updateGamepadStatus, 100);
    return () => clearInterval(intervalId);
  }, [setJoystick]);

  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
    // Optional animation key map
    { name: "action1", keys: ["1"] },
    { name: "action2", keys: ["2"] },
    { name: "action3", keys: ["3"] },
    { name: "action4", keys: ["KeyF"] },
  ];

  return (
    <>
      <EcctrlJoystick />
      <Ecctrl mode="CameraBasedMovement">
        <Main_Character animation={currentAnimation} />
      </Ecctrl>
    </>
  );
};

export default Controls;