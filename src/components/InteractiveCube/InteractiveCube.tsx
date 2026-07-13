import { Canvas } from "@react-three/fiber";

export default function InteractiveCube() {
    return (<div className="h-160 w-200">
        <Canvas camera={{ position: [0, 0, 8], fov: 65 }}>
            <ambientLight />
            <directionalLight position={[3, 4, 5]} />
            <mesh>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial color="orange" />
            </mesh>
        </Canvas>
    </div>)
}
