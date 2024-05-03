import { Canvas } from "@react-three/fiber"
import Experience from "./Game/Experience"


const App = () => {
    // Camera settings
    const cameraSettings = 
    {
        position: [0, 2, 1],
        fov: 50
    }
    

    return (
        <>
           <Canvas
                camera={cameraSettings}
                shadows            >

                <Experience />
            </Canvas>
        </>
    )
}
export default App