import { createRoot } from "react-dom/client";
import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";
import "./styles.css"

const root = createRoot(document.getElementById('root'));

root.render(
    <Canvas>
        <Experience/>
    </Canvas>
);
