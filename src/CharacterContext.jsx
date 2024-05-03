import React from 'react';

const CharacterContext = React.createContext({
  actions: {}, // Asume que manejarás acciones de animación aquí
  setActions: () => {} // Función para actualizar las acciones
});

export default CharacterContext;