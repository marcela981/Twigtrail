import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';

const Camera = ({ characterRef, offsetY = 4, offsetZ = 4 }) => {
    const { camera } = useThree();

  useFrame(() => {
    if (characterRef && characterRef.current) {
        const desiredPosition = characterRef.current.position.clone();
        desiredPosition.y += offsetY;
        desiredPosition.z -= offsetZ;


        camera.position.lerp(desiredPosition, 0.05);
        camera.lookAt(characterRef.current.position);

    }
  });

  return null;
};

export default Camera;
