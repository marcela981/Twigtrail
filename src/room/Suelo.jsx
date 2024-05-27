import React from 'react';
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier';
import { Plane } from '@react-three/drei';

const InvisibleFloor = () => {
  return (
    <RigidBody type="fixed">
      <CuboidCollider args={[50, 0, 50]}> {/* Dimensiones del collider como un cuboide */}
        <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} />
      </CuboidCollider>
    </RigidBody>
  );
};

export default InvisibleFloor;
