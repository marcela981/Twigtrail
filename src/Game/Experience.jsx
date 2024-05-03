import { Room } from ".Scenes/Scene1/Models/Room.jsx";

const Experience = () => {
    return (
        <>
            <OrbitControls makeDefault />
            <Lights />
            <Perf />
            <Room />
            <mesh position-y={-2} rotation-x={-Math.PI / 2} receiveShadow>

                <planeGeometry attach="geometry" args={[12, 12]} />
                <meshStandardMaterial attach="material" color="#667735" />
            </mesh>

            
        </>
    )
}


export default Experience;