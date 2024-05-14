import React from 'react';
import { OrbitControls } from '@react-three/drei';
import Controls from './Ecctrl/Controls';
import { Room } from './room/Room';
import { Main_Character } from './characters/Main_Character';

const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={1} />
      <OrbitControls />
      <Room position={[0, 0, 0]} scale={15} />
      <Controls />
    </>
  );
};

export default Experience;
