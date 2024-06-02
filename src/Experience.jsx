import React, { useEffect, useState, useRef } from 'react';
import { Physics, useRapier } from '@react-three/rapier';
import Ecctrl from 'ecctrl';
import Personaje_principal from './characters/Personaje_principal';
import Habitacion from './room/Habitacion';
import Suelo from './room/Suelo';
import useKeyboardControls from './components/controls/useKeyboardControls';
import useGamepadControls from './components/controls/useGamepadControls';



  const Experience = ({ personajeRef }) => {
    const keyboardMovement = useKeyboardControls();
    const gamepadMovement = useGamepadControls();
    const characterRef = useRef();
  
    const movement = gamepadMovement.forward || gamepadMovement.backward || gamepadMovement.left || gamepadMovement.right
    ? gamepadMovement
    : keyboardMovement;

  return (
      <Physics>
          <Habitacion />
          <Suelo />
            <Ecctrl 
              movement={movement}
              camInitDis={-6} // distancia inicial de la cámara
              camMaxDis={-11} // distancia máxima de la cámara
              camMinDis={-3} // distancia mínima de la cámara
              camFollowMult={10} // velocidad de seguimiento de la cámara
              camCollision={true}  //  colisión de la cámara
              camCollisionOffset={0.7} //offset de colisión de la cámara
              debug={false}
              mode="CameraBasedMovement"
            >
              <Personaje_principal movement={movement} ref={personajeRef}/> 
            </Ecctrl>
      </Physics>
  );
};


export default Experience;
