import { Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { FaFaceGrin } from "react-icons/fa6";
import { Group } from "three";

function CubeFace({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number]; }) {
    const [hovered, setHovered] = useState(false)

    return (
        <mesh
            position={position}
            rotation={rotation}
            onPointerOver={(e) => { e.stopPropagation(); setHovered(true) }}
            onPointerOut={(e) => { e.stopPropagation(); setHovered(false); }}>
            <planeGeometry args={[3, 3]} />
            <Html center occlude={false} style={{ pointerEvents: "none" }}>
                <div style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.3s" }}>
                    <FaFaceGrin color="yellow" size={50} />
                </div>
            </Html>
        </mesh>
    )
}

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
            <CubeFace position={[0,0,1.5]} rotation={[0,0,0]}/>
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
