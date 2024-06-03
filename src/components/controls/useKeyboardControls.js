import { useState, useEffect } from 'react';

const useKeyboardControls = () => {
  const [keysPressed, setKeysPressed] = useState(new Set());

  useEffect(() => {
    const handleKeyDown = ({ key }) => {
      setKeysPressed(prev => new Set(prev).add(key.toLowerCase()));
    };

    const handleKeyUp = ({ key }) => {
      setKeysPressed(prev => {
        const newSet = new Set(prev);
        newSet.delete(key.toLowerCase());
        return newSet;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const movement = {
    forward: keysPressed.has('arrowdown') || keysPressed.has('s'),
    backward: keysPressed.has('arrowup') || keysPressed.has('w'),
    left: keysPressed.has('arrowleft') || keysPressed.has('a'),
    right: keysPressed.has('arrowright') || keysPressed.has('d'),
    jump: keysPressed.has(' '),
    run: keysPressed.has('shift')
  };

  return movement;
};

export default useKeyboardControls;
