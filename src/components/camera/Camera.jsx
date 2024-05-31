import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';

const Camera = ({ characterRef, offsetY = 5, offsetZ =3 }) => {
    const { camera } = useThree();
    const currentPos = useRef(camera.position.clone());

  useFrame(() => {
    if (characterRef && characterRef.current) {
        const desiredPosition = characterRef.current.position.clone();
        desiredPosition.y += offsetY;
        desiredPosition.z += offsetZ;


        camera.position.lerp(desiredPosition, 0.1);
        camera.lookAt(characterRef.current.position);

    }
  });

  return null;
};

export default Camera;
