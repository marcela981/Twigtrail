import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import EcctrlConfig from './EcctrlConfig';
import useStore from './ecctrlStore';

function useEcctrl() {
    const { setMoveToPoint } = useStore();
    const personajeRef = useRef(null);

    useEffect(() => {
        const updateCameraPosition = () => {
            if (personajeRef.current) {
                setMoveToPoint(new THREE.Vector3(
                    personajeRef.current.position.x,
                    personajeRef.current.position.y,
                    personajeRef.current.position.z
                ));
            }
        };

        const id = setInterval(updateCameraPosition, 100);
        return () => clearInterval(id);
    }, [setMoveToPoint]);

    return { personajeRef };
}

export default useEcctrl;
