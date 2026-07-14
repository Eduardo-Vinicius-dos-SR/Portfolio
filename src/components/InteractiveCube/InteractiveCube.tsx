import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

function Cube() {
    const cube = useRef<Group | null>(null)

    useFrame(() => {
        if (!cube.current) return;
        cube.current.rotation.x += 0.01;
        cube.current.rotation.y += 0.01;
    })

    return (
        <group ref={cube}>
            <mesh>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial color="orange" />
            </mesh>
        </group>
    )
}

export default function InteractiveCube() {
    return (<div className="h-160 w-200">
        <Canvas camera={{ position: [0, 0, 8], fov: 65 }}>
            <ambientLight />
            <directionalLight position={[3, 4, 5]} />
            <Cube />
        </Canvas>
    </div>)
}
