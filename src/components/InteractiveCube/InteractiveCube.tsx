import { Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { FaFaceGrin } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { LuMessageCircleMore, LuSparkles } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import { SiReact } from "react-icons/si";
import { CanvasTexture, Group } from "three";

type FaceData = {
    key: string;
    position: [number, number, number];
    rotation: [number, number, number];
    snap: [number, number];
    icon: typeof FaFaceGrin;
    name: string
}

const FACES: FaceData[] = [
    { key: "front", position: [0, 0, 1.5], rotation: [0, 0, 0], snap: [0, 0], icon: BsCodeSlash, name: "Projetos" },
    { key: "right", position: [1.5, 0, 0], rotation: [0, Math.PI / 2, 0], snap: [0, -Math.PI / 2], icon: LuMessageCircleMore, name: "Contato" },
    { key: "top", position: [0, 1.5, 0], rotation: [-Math.PI / 2, 0, 0], snap: [Math.PI / 2, 0], icon: IoPersonOutline, name: "Sobre" },
    { key: "left", position: [-1.5, 0, 0], rotation: [0, -Math.PI / 2, 0], snap: [0, Math.PI / 2], icon: SiReact, name: "Tecnologias" },
    { key: "back", position: [0, 0, -1.5], rotation: [0, Math.PI, 0], snap: [0, Math.PI], icon: PiStudent, name: "Formação" },
    { key: "bottom", position: [0, -1.5, 0], rotation: [Math.PI / 2, 0, 0], snap: [-Math.PI / 2, 0], icon: LuSparkles, name: "Skills" },
    // adicionar color
]

function CubeFace({ data, hoveredKey, setHoveredKey, onSelect, activeKey }: { data: FaceData; hoveredKey: string | null; setHoveredKey: (k: string | null) => void; onSelect: (face: FaceData) => void; activeKey: string | null }) {
    const Icon = data.icon
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
                <div className={`flex flex-col items-center transition-opacity duration-300 ${activeKey == data.key ? "opacity-100" : hoveredKey == data.key ? "opacity-100" : "opacity-0"}`}>
                    <Icon color="yellow" size={50} />
                    <p>{data.name}</p>
                </div>
            </Html>
        </mesh>
    )
}

function useGradientTexture() {
    return useMemo(() => {
        const canvas = document.createElement("canvas")
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext("2d")
        if (!ctx) return new CanvasTexture(canvas)

        const angleRad = (140 * Math.PI) / 180
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const x1 = cx - Math.cos(angleRad) * cx;
        const y1 = cy - Math.sin(angleRad) * cy;
        const x2 = cx + Math.cos(angleRad) * cx;
        const y2 = cy + Math.sin(angleRad) * cy;

        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        gradient.addColorStop(0, "rgba(62, 6, 6, 0.85)");
        gradient.addColorStop(1, "rgba(45, 12, 54, 0.9)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const texture = new CanvasTexture(canvas);
        return texture
    }, [])
}

function Cube({ targetRef, rotRef, idleRef, dragging, onSelect, activeKey, hoveredKey, setHoveredKey, onPointerDown }: {
    targetRef: React.RefObject<{ x: number; y: number } | null>;
    rotRef: React.RefObject<{ x: number; y: number }>;
    idleRef: React.RefObject<boolean>;
    dragging: boolean;
    onSelect: (face: FaceData) => void;
    activeKey: string | null;
    hoveredKey: string | null;
    setHoveredKey: (key: string | null) => void;
    onPointerDown: (e: React.PointerEvent) => void;
}) {
    const cube = useRef<Group | null>(null)
    const gradientTexture = useGradientTexture();

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
            <mesh onPointerDown={(e: React.PointerEvent) => { e.stopPropagation(); onPointerDown(e); }}>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial map={gradientTexture} />
            </mesh>
            {FACES.map((face) => (
                <CubeFace key={face.key} data={face} hoveredKey={hoveredKey} setHoveredKey={setHoveredKey} onSelect={onSelect} activeKey={activeKey} />
            ))}
        </group>
    )
}

export default function InteractiveCube() {
    const targetRef = useRef<{ x: number; y: number } | null>(null)
    const [activeKey, setActiveKey] = useState<string | null>(null)
    const movedRef = useRef(false);
    const idleTimer = useRef<number | null>(null);
    const [hoveredKey, setHoveredKey] = useState<string | null>(null)


    function scheduleIdleResume() {
        if (idleTimer.current) clearTimeout(idleTimer.current)
        idleTimer.current = window.setTimeout(() => {
            idleRef.current = true
        }, 12000)
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

    const hoveringCube = hoveredKey !== null;

    return (
        <div className="w-full flex flex-col items-center gap-6 bg-white/3 pt-6 pb-12 border-y border-orange-300 backdrop-blur-lg">
            <div className="h-160 w-200"
                style={{ touchAction: "none", cursor: dragging ? "grabbing" : hoveringCube ? "grab" : "default" }}>
                <Canvas camera={{ position: [0, 0, 8], fov: 65 }}>
                    <ambientLight />
                    <directionalLight position={[3, 4, 5]} />
                    <Cube targetRef={targetRef} rotRef={rotRef} onPointerDown={onPointerDown} idleRef={idleRef} dragging={dragging} onSelect={handleSelectFace} activeKey={activeKey} hoveredKey={hoveredKey} setHoveredKey={setHoveredKey} />
                </Canvas>
            </div>

            <div className="flex gap-5 rounded-2x1 p-6 text-sm">
                {FACES.map((face, index) => {
                    const isActive = activeKey == face.key
                    return (
                        <button onClick={() => { handleSelectFace(FACES[index]); }}
                            onMouseEnter={() => setHoveredKey(face.key)}
                            onMouseLeave={() => setHoveredKey(null)}
                            className={`flex items-center gap-2 ${isActive ? "" : hoveredKey == face.key ? "text-yellow-400" : ""} duration-300ms ease-in transition-all rounded-2xl border py-1 px-2 ${isActive ? "text-[var(--accent)]" : "text-[var(--text-h)]"} cursor-pointer`} >
                            {index + 1} {<face.icon />} {face.name}
                        </button>)
                })}
            </div>
        </div >)
}