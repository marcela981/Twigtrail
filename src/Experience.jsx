import React, { useEffect, useState, useRef } from 'react';
import { Physics, useRapier } from '@react-three/rapier';
import Ecctrl from 'ecctrl';
import Personaje_principal from './characters/Personaje_principal';
import Habitacion from './room/Habitacion';
import Suelo from './room/Suelo';
import useKeyboardControls from './components/controls/useKeyboardControls';
import useGamepadControls from './components/controls/useGamepadControls';
import useUnifiedControls from './components/controls/useUnifiedControls';


  const Experience = ({ personajeRef, controls }) => {
    const unifiedControls = useUnifiedControls();
    const keyboardMovement = useKeyboardControls();
    const gamepadMovement = useGamepadControls();
    const characterRef = useRef();

    const activeControls = useGamepadControls.forward || useGamepadControls.backward || useGamepadControls.left || useGamepadControls.right || useGamepadControls.jump || useGamepadControls.sprint
    ? useGamepadControls
    : useKeyboardControls;

  return (
      <Physics>
          <Habitacion />
          <Suelo />
            <Ecctrl 
              movement={activeControls}
              camInitDis={-6} // distancia inicial de la cámara
              camMaxDis={-11} // distancia máxima de la cámara
              camMinDis={-3} // distancia mínima de la cámara
              camFollowMult={10} // velocidad de seguimiento de la cámara
              camCollision={true}  //  colisión de la cámara
              camCollisionOffset={0.7} //offset de colisión de la cámara
              debug={false}
              mode="CameraBasedMovement"
            >
              <Personaje_principal movement={activeControls} ref={personajeRef}/> 
            </Ecctrl>
      </Physics>
  );
};


export default Experience;
