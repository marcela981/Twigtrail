import React from 'react';
import useEcctrl from './useEcctrl';
import Ecctrl from 'ecctrl';
import EcctrlConfig from './EcctrlConfig';

const EcctrlCamera = ({ children }) => {
    const { personajeRef } = useEcctrl();
    return (
        <Ecctrl
            ref={personajeRef}
            {...EcctrlConfig.camera}
            debug={EcctrlConfig.debug}
            mode={EcctrlConfig.mode}
        >
            {children}
        </Ecctrl>
    );
};

export default EcctrlCamera;
