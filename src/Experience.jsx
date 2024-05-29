import React, { useEffect, useState, useRef } from 'react';
import { Physics, useRapier } from '@react-three/rapier';
import Ecctrl from 'ecctrl';
import Personaje_principal from './characters/Personaje_principal';
import Habitacion from './room/Habitacion';
import Suelo from './room/Suelo';
import useKeyboardControls from './components/controls/useKeyboardControls';



const SetupPhysicsWorld = () => {
  const { world } = useRapier();

  useEffect(() => {
    if (world) {
      world.timestep = 1 / 60;
      world.gravity = { x: 0, y: -9.81, z: 0 };
    }
  }, [world]);

  return null;
};

  const Experience = () => {

    const movement = useKeyboardControls();
  
  return (
    <>
      <Physics>
          <Habitacion />
          <Suelo />
            <Ecctrl movement={movement}>
              <Personaje_principal movement={movement} /> 
            </Ecctrl>
      </Physics>
    </>
  );
};


export default Experience;
