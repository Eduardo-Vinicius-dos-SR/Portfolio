import { Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { LuMessageCircleMore, LuSparkles } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import { FaHammer } from "react-icons/fa";
import { CanvasTexture, Group } from "three";
import { useSection, type SectionKey } from "../../context/SectionContext";
import type { FaceData } from "../../types/faceData";
import { useTranslation } from "react-i18next";


function getFaces(t: (key: string) => string): FaceData[] {

    return [
        { key: "projects", position: [0, 0, 1.5], rotation: [0, 0, 0], snap: [0, 0], icon: BsCodeSlash, name: t("interactiveCube.projects") },
        { key: "contact", position: [1.5, 0, 0], rotation: [0, Math.PI / 2, 0], snap: [0, -Math.PI / 2], icon: LuMessageCircleMore, name: t("interactiveCube.contact") },
        { key: "about", position: [0, 1.5, 0], rotation: [-Math.PI / 2, 0, 0], snap: [Math.PI / 2, 0], icon: IoPersonOutline, name: t("interactiveCube.about") },
        { key: "services", position: [-1.5, 0, 0], rotation: [0, -Math.PI / 2, 0], snap: [0, Math.PI / 2], icon: FaHammer, name: t("interactiveCube.services") },
        { key: "formation", position: [0, 0, -1.5], rotation: [0, Math.PI, 0], snap: [0, Math.PI], icon: PiStudent, name: t("interactiveCube.formation") },
        { key: "skills", position: [0, -1.5, 0], rotation: [Math.PI / 2, 0, 0], snap: [-Math.PI / 2, 0], icon: LuSparkles, name: t("interactiveCube.skills") },
        // adicionar color
    ]
}

function CubeFace({ data, hoveredKey, setHoveredKey, onSelect, activeSection }: { data: FaceData; hoveredKey: string | null; setHoveredKey: (k: string | null) => void; onSelect: (face: FaceData) => void; activeSection: string | null }) {
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
            <Html center occlude={false} zIndexRange={[10, 0]} style={{ pointerEvents: "none" }}>
                <div className={`flex flex-col items-center transition-opacity duration-300 ${activeSection == data.key ? "opacity-100" : hoveredKey == data.key ? "opacity-100" : "opacity-0"}`}>
                    <Icon className="z-50" color="yellow" size={50} />
                    <p className="text-[#9a999a]">{data.name}</p>
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

function Cube({ faces, targetRef, rotRef, idleRef, dragging, onSelect, activeSection, hoveredKey, setHoveredKey, onPointerDown }: {
    faces: FaceData[];
    targetRef: React.RefObject<{ x: number; y: number } | null>;
    rotRef: React.RefObject<{ x: number; y: number }>;
    idleRef: React.RefObject<boolean>;
    dragging: boolean;
    onSelect: (face: FaceData) => void;
    activeSection: string | null;
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
        } else if (idleRef.current && !dragging && !activeSection) {
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
            {faces.map((face) => (
                <CubeFace key={face.key} data={face} hoveredKey={hoveredKey} setHoveredKey={setHoveredKey} onSelect={onSelect} activeSection={activeSection} />
            ))}
        </group>
    )
}

export default function InteractiveCube() {
    const { t } = useTranslation();

    const FACES = useMemo(() => getFaces(t), [t]);
    const { activeSection, setActiveSection } = useSection();

    const targetRef = useRef<{ x: number; y: number } | null>(null)
    const movedRef = useRef(false);
    const idleTimer = useRef<number | null>(null);
    const [hoveredKey, setHoveredKey] = useState<string | null>(null)


    function scheduleIdleResume() {
        if (idleTimer.current) clearTimeout(idleTimer.current)
        idleTimer.current = window.setTimeout(() => {
            idleRef.current = true
        }, 12000)
    }

    useEffect(() => {
        if (!activeSection) return;
        const face = FACES.find((face) => face.key === activeSection);
        if (!face) { return };

        idleRef.current = false;
        targetRef.current = { x: face.snap[0], y: face.snap[1] };
        scheduleIdleResume()
    }, [activeSection]);

    const handleSelectFace = (face: FaceData) => {
        idleRef.current = false;
        targetRef.current = { x: face.snap[0], y: face.snap[1] };
        scheduleIdleResume()
        setActiveSection(face.key as SectionKey)
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
        <div className="w-full flex flex-col items-center gap-6 pt-6 pb-35 border-t border-[var(--border)] bg-[var(--cube-bg)]">
            <div className="h-160 w-200 m-20"
                style={{ touchAction: "none", cursor: dragging ? "grabbing" : hoveringCube ? "grab" : "default" }}>
                <Canvas camera={{ position: [0, 0, 8], fov: 65 }}>
                    <ambientLight />
                    <directionalLight position={[3, 4, 5]} />
                    <Cube faces={FACES} targetRef={targetRef} rotRef={rotRef} onPointerDown={onPointerDown} idleRef={idleRef} dragging={dragging} onSelect={handleSelectFace} activeSection={activeSection} hoveredKey={hoveredKey} setHoveredKey={setHoveredKey} />
                </Canvas>
            </div>

            <div className="flex gap-5 rounded-2x1 p-6 text-base">
                {FACES.map((face, index) => {
                    const isActive = activeSection == face.key
                    return (
                        <button key={index} onClick={() => {
                            handleSelectFace(face);
                        }}
                            onMouseEnter={() => setHoveredKey(face.key)}
                            onMouseLeave={() => setHoveredKey(null)}
                            aria-label={t("accessibility.openSection", {
                                section: face.name,
                            })}
                            className={`flex items-center gap-2 rounded-3xl border py-1 px-3 transition-all duration-300 ease-in cursor-pointer ${isActive ? "text-[var(--accent)]" : hoveredKey === face.key ? "text-[var(--yellow)]" : "text-[var(--text-h)]"}`}>
                            {index + 1} <face.icon /> {face.name}
                        </button>)
                })}
            </div>
        </div >)
}