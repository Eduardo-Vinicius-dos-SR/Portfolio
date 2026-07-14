import { Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { FaEnvelope, FaRadiation, FaWhatsapp } from "react-icons/fa";
import { FaArrowDown, FaFaceGrin, FaUpwork } from "react-icons/fa6";
import { Group } from "three";

type FaceData = {
    key: string;
    position: [number, number, number];
    rotation: [number, number, number];
    icon: typeof FaFaceGrin;
}

const FACES: FaceData[] = [
    { key: "front", position: [0, 0, 1.5], rotation: [0, 0, 0], icon: FaWhatsapp },
    { key: "right", position: [1.5, 0, 0], rotation: [0, Math.PI / 2, 0], icon: FaWhatsapp },
    { key: "back", position: [0, 0, -1.5], rotation: [0, Math.PI, 0], icon: FaUpwork },
    { key: "left", position: [-1.5, 0, 0], rotation: [0, -Math.PI / 2, 0], icon: FaEnvelope },
    { key: "top", position: [0, 1.5, 0], rotation: [-Math.PI / 2, 0, 0], icon: FaRadiation },
    { key: "bottom", position: [0, -1.5, 0], rotation: [Math.PI / 2, 0, 0], icon: FaArrowDown },
]

function CubeFace({ data, hoveredKey, setHoveredKey }: { data: FaceData; hoveredKey: string | null; setHoveredKey: (k: string | null) => void; }) {
    const Icon = data.icon
    const hovered = hoveredKey === data.key

    return (
        <mesh
            position={data.position}
            rotation={data.rotation}
            onPointerOver={(e) => { e.stopPropagation(); setHoveredKey(data.key) }}
            onPointerOut={(e) => { e.stopPropagation(); setHoveredKey(null); }}>
            <planeGeometry args={[3, 3]} />
            <Html center occlude={false} style={{ pointerEvents: "none" }}>
                <div style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.3s" }}>
                    <Icon color="yellow" size={50} />
                </div>
            </Html>
        </mesh>
    )
}

function Cube() {
    const cube = useRef<Group | null>(null)
    const [hoveredKey, setHoveredKey] = useState<string | null>(null)

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
            {FACES.map((face) => (
                <CubeFace key={face.key} data={face} hoveredKey={hoveredKey} setHoveredKey={setHoveredKey} />
            ))}
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
