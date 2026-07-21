import type { ReactNode } from "react";
import { type SectionKey } from "../context/SectionContext";

export interface NavItemProps {
  to: SectionKey;
  children: ReactNode;
}