import { useEffect } from 'react';
import { useJoystickControls } from 'ecctrl';

// Esta función se encarga de configurar y manejar los eventos del joystick
export const useJoystickMovement = () => {
  const setJoystick = useJoystickControls((state) => state.setJoystick);
  const resetJoystick = useJoystickControls((state) => state.resetJoystick);

  useEffect(() => {
    const handleMove = (joystickDis, joystickAng, runState) => {
      // Aquí transformas la dirección y distancia del joystick en movimientos del personaje
      setMovement({
        forward: joystickDis * Math.cos(joystickAng),
        right: joystickDis * Math.sin(joystickAng),
        run: runState
      });
    };

    joystickControl.setJoystick(handleMove);

    return () => {
      joystickControl.resetJoystick();
    };
  }, [joystickControl, setMovement]);

  // No retornamos nada ya que el manejo se hace a través del callback
};

// Componente de React que puedes usar para renderizar el joystick en la interfaz de usuario
export const JoystickComponent = ({ positionLeft, positionBottom, size }) => {
  return (
    <EcctrlJoystick
      joystickPositionLeft={positionLeft} 
      joystickPositionBottom={positionBottom}
      joystickHeightAndWidth={size}
      buttonNumber={5}
      buttonPositionRight={50}
      buttonPositionBottom={50}
    />
  );
};
