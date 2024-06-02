import React from 'react';
import { EcctrlJoystick } from 'ecctrl'; // Importa aquí para asegurarte que solo se usa en este componente

const JoystickComponent = () => {
  return (
    <EcctrlJoystick positionLeft={50} positionBottom={50} size={100} />
  );
};

export default JoystickComponent;
