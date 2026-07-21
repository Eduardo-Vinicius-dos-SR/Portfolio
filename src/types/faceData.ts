import type { FaFaceGrin } from "react-icons/fa6";

export type FaceData = {
    key: string;
    position: [number, number, number];
    rotation: [number, number, number];
    snap: [number, number];
    icon: typeof FaFaceGrin;
    name: string
}