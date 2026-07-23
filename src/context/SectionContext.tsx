import { createContext, useContext, useState, type ReactNode } from "react";

export type SectionKey = "home" | "projects" | "contact" | "about" | "services" | "formation" | "skills";

type SectionContextValue = {
    activeSection: SectionKey | null;
    setActiveSection: (key: SectionKey | null) => void;
};

const SectionContext = createContext<SectionContextValue | undefined>(undefined);

export function SectionProvider({ children }: { children: ReactNode }) {
    const [activeSection, setActiveSection] = useState<SectionKey | null>(null)
    return(<SectionContext.Provider value={{activeSection, setActiveSection}}>
        {children}
    </SectionContext.Provider>)
}

export function useSection() {
    const ctx = useContext(SectionContext);
    if (!ctx) throw new Error("useSection precisa estar dentro de um <SectionProvider");
    return ctx;
}