const EcctrlConfig = {
    camera: {
        camInitDis: -3,
        camMaxDis: -5,
        camMinDis: -1,
        camFollowMult: 10,
        camCollision: true,
        camCollisionOffset: 0.7,
        camTargetPos: { x: 0, y: 3, z: 0 }
    },
    debug: true,
    mode: "CameraBasedMovement"
};

export default EcctrlConfig;
