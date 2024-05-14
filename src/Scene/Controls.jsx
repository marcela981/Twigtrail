import React, { useContext, useEffect } from 'react';
import CharacterContext from '../CharacterContext';

const Controls = () => {
  const { actions } = useContext(CharacterContext);

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event.key);
      if (event.key === 'ArrowUp' || event.key === 'w') {
        if (actions.walk) { // Verifica si la acción walk existe
          console.log('Intentando caminar');
          actions.walk.play();
        } else {
          console.log('No se encontró la acción de caminar');
        }
      } else if (event.key === 'ArrowLeft' || event.key === 'a') {
        // Manejar movimiento hacia la izquierda
      } else if (event.key === 'ArrowDown' || event.key === 's') {
        // Manejar movimiento hacia abajo
      } else if (event.key === 'ArrowRight' || event.key === 'd') {
        // Manejar movimiento hacia la derecha
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [actions]);

  return null; // Este componente no necesita renderizar nada visualmente
};

export default Controls;
