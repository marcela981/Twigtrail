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
              camInitDis={-8} // distancia inicial de la cámara
              camMaxDis={-11} // distancia máxima de la cámara
              camMinDis={-5} // distancia mínima de la cámara
              camFollowMult={1} // velocidad de seguimiento de la cámara
              camCollision={true}  //  colisión de la cámara
              camCollisionOffset={0.7} //offset de colisión de la cámara
              debug={false} >
              <Personaje_principal movement={movement} ref={personajeRef}/> 
            </Ecctrl>
      </Physics>
    </>
  );
};


export default Experience;
