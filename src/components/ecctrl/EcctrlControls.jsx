import React from 'react';
import { EcctrlJoystick } from 'ecctrl';
import useKeyboardControls from '../controls/useKeyboardControls';
import useGamepadControls from '../controls/useGamepadControls';

const EcctrlControls = () => {
  const keyboardMovement = useKeyboardControls();
  const gamepadMovement = useGamepadControls();

  // Prioritize gamepad controls if the gamepad is connected
  const movement = gamepadMovement.forward || gamepadMovement.backward || gamepadMovement.left || gamepadMovement.right
    ? gamepadMovement
    : keyboardMovement;

  return (
    <EcctrlJoystick
      movement={movement}
      positionLeft={50}
      positionBottom={50}
      size={100}
    />
  );
};

export default EcctrlControls;
