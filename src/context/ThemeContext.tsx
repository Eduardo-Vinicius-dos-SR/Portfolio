import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "cosmos";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext({} as ThemeContextType);

export function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState<Theme>("dark");
    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}