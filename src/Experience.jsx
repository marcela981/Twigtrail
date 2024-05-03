import React, { useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { AmbientLight, DirectionalLight } from 'three';
import { Room } from './room/Room.jsx';
import { Main_Character } from './characters/Main_Character';
import Controls from './Scene/Controls';
import CharacterContext from './CharacterContext';

const Experience = () => {
  const [actions, setActions] = useState({});
  
  return (
    <>
    <CharacterContext.Provider value={{ actions, setActions }}>
      <ambientLight intensity={0.5} /> 
      <directionalLight position={[0, 10, 0]} intensity={1} /> 
      <OrbitControls />
      <Room position={[0, 0, 0]}  scale={15}/>
      <Main_Character position={[-25, 2, 0]} scale={3}/>
      <Controls />
    </CharacterContext.Provider>

      
    </>
  );
};

export default Experience;
