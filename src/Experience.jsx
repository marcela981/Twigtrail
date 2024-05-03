// experience.jsx
import React from "react";
import { OrbitControls } from "@react-three/drei";
import { AmbientLight, DirectionalLight } from "three";
import { Room } from "./room/Room.jsx";
import { Main_Character } from "./characters/Main_Character";

const Experience = () => {
  return (
    <>

<ambientLight intensity={0.5} /> 
      <directionalLight position={[0, 10, 0]} intensity={1} /> 

      <OrbitControls />
      <Room position={[0, 0, 0]}  scale={15}/>
      <Main_Character position={[-25, 2, 0]} scale={3}/>
    </>
  );
};

export default Experience;
