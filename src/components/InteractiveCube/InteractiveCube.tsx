import { Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaRadiation, FaWhatsapp } from "react-icons/fa";
import { FaArrowDown, FaFaceGrin, FaUpwork } from "react-icons/fa6";
import { Group } from "three";

type FaceData = {
    key: string;
    position: [number, number, number];
    rotation: [number, number, number];
    snap: [number, number];
    icon: typeof FaFaceGrin;
}

const FACES: FaceData[] = [
    { key: "front", position: [0, 0, 1.5], rotation: [0, 0, 0], snap: [0, 0], icon: FaWhatsapp },
    { key: "right", position: [1.5, 0, 0], rotation: [0, Math.PI / 2, 0], snap: [0, -Math.PI / 2], icon: FaWhatsapp },
    { key: "back", position: [0, 0, -1.5], rotation: [0, Math.PI, 0], snap: [0, Math.PI], icon: FaUpwork },
    { key: "left", position: [-1.5, 0, 0], rotation: [0, -Math.PI / 2, 0], snap: [0, Math.PI / 2], icon: FaEnvelope },
    { key: "top", position: [0, 1.5, 0], rotation: [-Math.PI / 2, 0, 0], snap: [Math.PI / 2, 0], icon: FaRadiation },
    { key: "bottom", position: [0, -1.5, 0], rotation: [Math.PI / 2, 0, 0], snap: [-Math.PI / 2, 0], icon: FaArrowDown },
]

function CubeFace({ data, hoveredKey, setHoveredKey, onSelect }: { data: FaceData; hoveredKey: string | null; setHoveredKey: (k: string | null) => void; onSelect: (face: FaceData) => void; }) {
    const Icon = data.icon
    const hovered = hoveredKey === data.key

    return (
        <mesh
            position={data.position}
            rotation={data.rotation}
            onPointerOver={(e) => { e.stopPropagation(); setHoveredKey(data.key) }}
            onPointerOut={(e) => { e.stopPropagation(); setHoveredKey(null); }}
            onClick={(e) => { e.stopPropagation(); onSelect(data); }}>
            <planeGeometry args={[3, 3]} />
            <meshBasicMaterial transparent opacity={0} />
            <Html center occlude={false} style={{ pointerEvents: "none" }}>
                <div style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.3s" }}>
                    <Icon color="yellow" size={50} />
                </div>
            </Html>
        </mesh>
    )
}

function Cube({ targetRef, rotRef, idleRef, dragging, onSelect, activeKey }: {
    targetRef: React.RefObject<{ x: number; y: number } | null>;
    rotRef: React.RefObject<{ x: number; y: number }>;
    idleRef: React.RefObject<boolean>;
    dragging: boolean;
    onSelect: (face: FaceData) => void;
    activeKey: string | null
}) {
    const cube = useRef<Group | null>(null)
    const [hoveredKey, setHoveredKey] = useState<string | null>(null)

    useFrame(() => {
        if (!cube.current) return;

        if (targetRef.current) {
            const t = targetRef.current;
            rotRef.current.x += (t.x - rotRef.current.x) * 0.12;
            rotRef.current.y += (t.y - rotRef.current.y) * 0.12;
            if (Math.abs(t.x - rotRef.current.x) < 0.001 && Math.abs(t.y - rotRef.current.y) < 0.001) {
                rotRef.current = { ...t };
                targetRef.current = null
            }
        } else if (idleRef.current && !dragging && !activeKey) {
            rotRef.current.y += 0.01;
        }
        cube.current.rotation.x = rotRef.current.x;
        cube.current.rotation.y = rotRef.current.y;
    })

    return (
        <group ref={cube}>
            <mesh>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial color="orange" />
            </mesh>
            {FACES.map((face) => (
                <CubeFace key={face.key} data={face} hoveredKey={hoveredKey} setHoveredKey={setHoveredKey} onSelect={onSelect} />
            ))}
        </group>
    )
}

export default function InteractiveCube() {
    const targetRef = useRef<{ x: number; y: number } | null>(null)
    const [activeKey, setActiveKey] = useState<string | null>(null)
    const movedRef = useRef(false);
    const idleTimer = useRef<number | null>(null);

    function scheduleIdleResume() {
        if (idleTimer.current) clearTimeout(idleTimer.current)
        idleTimer.current = window.setTimeout(() => {
            idleRef.current = true
        }, 1500)
    }


    const handleSelectFace = (face: FaceData) => {
        idleRef.current = false;
        targetRef.current = { x: face.snap[0], y: face.snap[1] };
        scheduleIdleResume()
        setActiveKey(face.key)
    }

    const rotRef = useRef({ x: -0.3, y: -0.4 });
    const idleRef = useRef(true);
    const dragStart = useRef<{ x: number; y: number, rx: number; ry: number } | null>(null)
    const [dragging, setDragging] = useState(false)

    const onPointerDown = (e: React.PointerEvent) => {
        dragStart.current = { x: e.clientX, y: e.clientY, rx: rotRef.current.x, ry: rotRef.current.y };
        idleRef.current = false;
        movedRef.current = false;
        scheduleIdleResume()
        setDragging(true)
    }

    useEffect(() => {
        if (!dragging) return;
        const onMove = (e: PointerEvent) => {
            if (!dragStart.current) return;
            const dx = e.clientX - dragStart.current.x;
            const dy = e.clientY - dragStart.current.y;
            if (!movedRef.current && (Math.abs(dx) + Math.abs(dy) > 4)) {
                movedRef.current = true;
                targetRef.current = null;
                setActiveKey(null)
            }

            scheduleIdleResume();

            rotRef.current = {
                x: dragStart.current.rx - dy * 0.006,
                y: dragStart.current.ry - dx * 0.006,
            }
        }
        const onUp = () => setDragging(false);
        window.addEventListener("pointermove", onMove);
        window.addEventListener("pointerup", onUp);
        return () => {
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerup", onUp);
        }
    }, [dragging]);

    useEffect(() => {
        return () => {
            if (idleTimer.current) clearTimeout(idleTimer.current);
        };
    }, []);

    return (
        <div className="flex flex-col items center gap-6">
            <div className="h-160 w-200" onPointerDown={onPointerDown} style={{ cursor: dragging ? "grabbing" : "grab", touchAction: "none" }}>
                <Canvas camera={{ position: [0, 0, 8], fov: 65 }}>
                    <ambientLight />
                    <directionalLight position={[3, 4, 5]} />
                    <Cube targetRef={targetRef} rotRef={rotRef} idleRef={idleRef} dragging={dragging} onSelect={handleSelectFace} activeKey={activeKey} />
                </Canvas>
            </div>

            {activeKey && (
                <div className="rounded-2x1 bg-black/40 p-6 text-white">
                    Face Selecionada: {activeKey}
                </div>
            )}
        </div>)
}