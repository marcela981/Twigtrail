import React, { useEffect, useState, useRef } from 'react';
import { Physics, useRapier } from '@react-three/rapier';
import Ecctrl from 'ecctrl';
import Personaje_principal from './characters/Personaje_principal';
import Habitacion from './room/Habitacion';
import Suelo from './room/Suelo';
import useKeyboardControls from './components/controls/useKeyboardControls';
import Camera from './components/camera/Camera';



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

  const Experience = ({ personajeRef }) => {

    const movement = useKeyboardControls();
    const characterRef = useRef();
  
  return (
    <>
      <Physics>
          <Habitacion />
          <Suelo />
            <Ecctrl 
              movement={movement}
              camInitDis={0}
              camMaxDis={-1}
              camMinDis={-0.2}
              camFollowMult={2}
              camCollision={true}
              camCollisionOffset={0.7}
              debug={false} >
              <Personaje_principal movement={movement} ref={personajeRef}/> 
            </Ecctrl>
      </Physics>
    </>
  );
};


export default Experience;
