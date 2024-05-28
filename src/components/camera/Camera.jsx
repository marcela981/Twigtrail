import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';

const Camera = ({ characterRef }) => {
    const { camera } = useThree();

  useFrame(() => {
    if (characterRef && characterRef.current) {
        const desiredPosition = characterRef.current.position.clone();
        desiredPosition.y += 4;
        desiredPosition.z -= 10;


        camera.position.lerp(newPos, 0.1);
        camera.lookAt(characterRef.current.position);

    }
  });

  return null;
};

export default Camera;
