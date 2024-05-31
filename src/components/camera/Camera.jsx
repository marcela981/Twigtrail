import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';

const Camera = ({ characterRef }) => {
    const { camera, gl  } = useThree();


  useFrame(() => {
    if (characterRef.current) {
      const desiredPosition = characterRef.current.position.clone();
      desiredPosition.y += 7;  // Ajusta la altura de la cámara
      desiredPosition.z += 0;  // Ajusta la distancia detrás del personaje

      camera.position.lerp(desiredPosition, 0.1);
      camera.lookAt(characterRef.current.position);
  }
});



  return null;
};

export default Camera;
