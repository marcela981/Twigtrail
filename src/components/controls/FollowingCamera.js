import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const FollowingCamera = ({ characterRef }) => {
  const cameraRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    if (characterRef.current) {
      const desiredPosition = characterRef.current.position.clone();
      desiredPosition.y += 5; // Altura de la cámara respecto al personaje
      desiredPosition.z += 10; // Distancia en z respecto al personaje
      camera.position.lerp(desiredPosition, 0.05); // Suaviza el movimiento de la cámara
      camera.lookAt(characterRef.current.position);
    }
  });

  return (
    <primitive object={camera} ref={cameraRef} />
  );
};

export default FollowingCamera;
