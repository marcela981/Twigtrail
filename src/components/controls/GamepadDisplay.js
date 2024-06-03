import React from 'react';
import useGamepadControls from './compo'; // Ajusta la ruta de importación según sea necesario

const GamepadDisplay = () => {
  const { gamepadIndex, buttons } = useGamepad();

  return (
    <div>
      {gamepadIndex !== null ? (
        <>
          <h1>Gamepad {gamepadIndex} Buttons Status</h1>
          {buttons.map((pressed, index) => (
            <p key={index}>Button {index}: {pressed ? 'Pressed' : 'Released'}</p>
          ))}
        </>
      ) : (
        <h1>No Gamepad Connected</h1>
      )}
    </div>
  );
};

export default GamepadDisplay;
